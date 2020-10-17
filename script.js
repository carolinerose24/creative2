$(document).ready(function() {

  document.getElementById("programmingSubmit").addEventListener("click", function() {
    event.preventDefault();
    getJoke("Programming");
  });

  document.getElementById("punSubmit").addEventListener("click", function() {
    event.preventDefault();
    getJoke("Pun");
  });

  document.getElementById("darkSubmit").addEventListener("click", function() {
    event.preventDefault();
    getJoke("Dark");
  });

  document.getElementById("miscSubmit").addEventListener("click", function() {
    event.preventDefault();
    getJoke("Miscellaneous");
  });

});


function getJoke(topic) {
  let type = checkRadioButtons();
  const url = "https://sv443.net/jokeapi/v2/joke/" + topic + "?blacklistFlags=nsfw,religious,political,racist,sexist&type=" + type;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      if (type == 'single') {
        let joke = "";
        joke += "<p>" + json.joke + "</p>";
        document.getElementById("joke").innerHTML = joke;
      } else {
        let joke = "";
        joke += "<p>" + json.setup + "</p>";
        joke += "<p>" + json.delivery + "</p>";
        document.getElementById("joke").innerHTML = joke;
      }
    });
}

function checkRadioButtons() {
  let singleChecked = document.getElementById("single-radio").checked;
  let type = "";
  if (singleChecked == true) {
    type = 'single';
  } else {
    type = 'twopart';
  }
  return type;
}