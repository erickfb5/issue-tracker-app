"use strict";

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const runner = require("./test-runner");
const { logEvents } = require("./utils/logEvents.js");
const { rootRoutes, projectRoutes, issuesRoutes  } = require("./routes");
const { loggerMiddleware, notFoundMiddleware } = require("./middlewares/");

const connectDB = require("./config/dbConn");
connectDB();

console.log(`🟡 🟡 🟡 ⮕  NODE ENVIRONMENT: ${process.env.NODE_ENV}`);

const app = express();

app.use(loggerMiddleware);

app.use("/public", express.static(process.cwd() + "/public"));
app.use(cors({ origin: "*" })); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", rootRoutes)
app.use("/", projectRoutes);
app.use("/api/issues/", issuesRoutes);
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3500;
mongoose.connection.once("open", () => {
  console.log("🟢 🟢 🟢 ⮕  Connected to MongoDB");

  const listener = app.listen(PORT, () => {
    console.log(`🟢 🟢 🟢 ⮕  Server running on port ${listener.address().port} 🏃`);
    if (process.env.NODE_ENV === "test") {
      console.log("🟢 🟢 🟢 ⮕  Running Tests... 🧪");
      setTimeout(() => {
        try {
          runner.run();
        } catch (err) {
          console.log("🔴 🔴 🔴 ⮕  Tests are not valid:");
          console.error(err);
        }
      }, 3500);
    }
  });
});

mongoose.connection.on("error", (err) => 
logEvents(`${err}:\t${err.code}\t${err.codeName}`, "mongoErrLog.log"));

module.exports = app; //for testing