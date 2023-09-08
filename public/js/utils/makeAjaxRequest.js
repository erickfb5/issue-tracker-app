const makeAjaxRequest = (method, url, data, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");

  xhr.onload = async () => {
    try {
      if (xhr.status === 200) {
        const responseData = await JSON.parse(xhr.responseText);
        callback(responseData);
      } else {
        console.error("Error:", xhr.status, xhr.statusText);
      }
    } catch (err) {
      console.error("An error occurred while processing the response:", err);
    }
  };

  xhr.onerror = () => console.error("Network Error");

  try {
    xhr.send(data);
  } catch (err) {
    console.error("An error occurred while making the request:", err);
  }
};
