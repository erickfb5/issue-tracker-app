const chaiHttp = require("chai-http");
const chai = require("chai");
const assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("🚧 Functional Tests 🚧", () => {
  let projectId;

  suite("💡 POST /api/issues/{project}", () => {
    test("#1 Create an issue with all fields", (done) => {
      const issue = {
        issue_title: "my test",
        issue_text: "text",
        created_by: "Neeraj",
        assigned_to: "someone",
        status_text: "it is ok",
        open: true,
      };

      chai.request(server).post("/api/issues/my_test").send(issue).end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.issue_title, issue.issue_title);
          assert.equal(res.body.issue_text, issue.issue_text);
          assert.equal(res.body.open, issue.open);
          assert.equal(res.body.status_text, issue.status_text);
          assert.equal(res.body.assigned_to, issue.assigned_to);
          assert.equal(res.body.created_by, issue.created_by);
          assert.isDefined(res.body._id);
          projectId = res.body._id; // Store the project ID for later tests
          done();
        });
        console.log("");

    });

    test("#2 Create an issue with only required fields", (done) => {
      const issue = { issue_title: "second test", issue_text: "second one 12 more to go", created_by: "neeraj" };
      chai.request(server).post("/api/issues/second_test").send(issue).end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.issue_title, issue.issue_title);
          assert.equal(res.body.issue_text, issue.issue_text);
          assert.equal(res.body.created_by, issue.created_by);
          assert.isDefined(res.body._id);
          done();
        });
        console.log("");

    });

    test("#3 Create an issue with missing required fields", (done) => {
      const issue = { issue_title: "third test", issue_text: "11 more to go" };
      chai.request(server).post("/api/issues/third_test")
          .send(issue).end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text, '{"error":"required field(s) missing"}');
          done();
        });
        console.log("");

    });
  });

  suite("💡 GET /api/issues/{project}", () => {
    test("#4 View issues on a project", (done) => {
      chai.request(server).get(`/api/issues/${projectId}`)
          .end((err, res) => {
          assert.equal(res.status, 200);
          assert.typeOf(res.body, "array");
          done();
        });
        console.log("");

    });

    test("#5 View issues on a project with one filter", (done) => {
      chai.request(server).get(`/api/issues/${projectId}?open=true`)
          .end((err, res) => {
          assert.equal(res.status, 200);
          assert.typeOf(res.body, "array");
          done();
        });
        console.log("");

    });

    test("#6 View issues on a project with multiple filters", (done) => {
      chai.request(server).get(`/api/issues/${projectId}?open=true&created_by=neeraj`)
          .end((err, res) => {
          assert.equal(res.status, 200);
          assert.typeOf(res.body, "array");
          done();
        });
        console.log("");
    });

  });
  suite("💡 PUT /api/issues/{project}", () => {
    test("#7 Update one field on an issue", (done) => {
      chai.request(server).put(`/api/issues/${projectId}`)
        .send({ _id: projectId, status_text: "Is it Ok or Not?" })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text,`{"result":"successfully updated","_id":"${projectId}"}`);
          done();
        });
        console.log("");
    });

    test("#8 Update multiple fields on an issue", (done) => {
    chai.request(server).put(`/api/issues/${projectId}`)
      .send({ _id: projectId, status_text: "It's okay to be not ok", issue_title: "new one" })
      .end(async (err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text,`{"result":"successfully updated","_id":"${projectId}"}`);
          done();
        });
        console.log("");
    });

    test("#9 Update an issue with missing _id", (done) => {
      chai.request(server).put(`/api/issues/my_test`)
        .send({ status_text: "It's okay to be not ok", open: false })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text, '{"error":"missing _id"}');
          done();
        });
        console.log("");
    });

    test("#10 Update an issue with no fields to update", (done) => {
      chai.request(server).put(`/api/issues/my_test`).send({ _id: projectId })
          .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text, `{"error":"no update field(s) sent","_id":"${projectId}"}`);
          done();
        });
        console.log("");
    });

    test("#11 put request with invalid id", (done) =>
      chai.request(server).put("/api/issues/my_test")
        .send({ _id: "635aafe5b248f6442551ffff", status_text: "not ok" })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text, '{"error":"could not update","_id":"635aafe5b248f6442551ffff"}');
          done();
        }));
        console.log("");
  });

  suite("💡 DELETE /api/issues/{project}", () => {
    test("#12 Delete an issue with valid _id", (done) => {
      chai.request(server).delete(`/api/issues/${projectId}`).send({ _id: projectId })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body);
          done();
        });
        console.log("");
    });

    test("#13 delete request with invalid id", (done) => {
      chai.request(server).delete("/api/issues/my_test").send({ _id: "635aafe5b248f6442551ffff" })
          .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text, '{"error":"could not delete","_id":"635aafe5b248f6442551ffff"}');
          done();
        });
        console.log("");
    });

    test("#14 Delete an issue with missing _id", (done) => {
      chai.request(server).delete(`/api/issues/my_test`).end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text, '{"error":"missing _id"}');
          done();
        });
        console.log("");
    });
  });
});