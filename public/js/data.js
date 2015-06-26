var Data = (function() {

  var httpRequest;

  function updateUI(responseText) {

    var element;
    var data = JSON.parse(responseText);
    var updateData;

    for(var i = 0; i < 4; i++) {

      var randomIndex = Math.floor(Math.random() * data.data.children.length);

      //image
      element = document.querySelector("#image" + (i + 1));

      updateData = data.data.children[randomIndex].data.url;

      console.log(updateData.indexOf("imgur"));

      if(updateData.indexOf("/imgur") !== -1) {

        updateData = updateData.replace("/imgur","/i.imgur");

        if((updateData.indexOf(".jpg") === -1) || (updateData.indexOf(".png") === -1)) {

          updateData = updateData + ".jpg";
        }
      }

      element.style.backgroundImage = "url('" + updateData + "')";

      //title
      element = document.querySelector("#title" + (i + 1));
      updateData = data.data.children[randomIndex].data.title;

      element.innerHTML = updateData;

      //author author
      element = document.querySelector("#byline" + (i + 1));
      updateData = data.data.children[randomIndex].data.author;

      element.innerHTML = "by " + updateData;

      //age created-> timestamp to 2 days ago
      element = document.querySelector("#age" + (i + 1));

      updateData = data.data.children[randomIndex].data.created;

      element.innerHTML = moment(updateData, "DD").fromNow();

      //views score
      element = document.querySelector("#views" + (i + 1));
      updateData = data.data.children[randomIndex].data.score;

      element.innerHTML = updateData + " views";

      //description lorem ipsum
      element = document.querySelector("#text" + (i + 1));
      updateData = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab totam libero temporibus eaque vel nam, velit quos unde expedita distinctio.";

      element.innerHTML = updateData;
    }
  };

  if(window.XMLHttpRequest) {

    httpRequest = new XMLHttpRequest();
  }

  if(!httpRequest) {

    throw new Error("Could not create httpRequest");
  }

  httpRequest.onreadystatechange = function() {

    if(httpRequest.readyState === 4 ) {

      if(httpRequest.status === 200 ) {

        updateUI(httpRequest.responseText);

      } else {

        throw new Error("There was a problem with the request.");
      }
    }
  }

  function loadRandom() {
    httpRequest.open('GET','api/random.json', true);
    httpRequest.send(null);
  };

  function loadMyBoards() {
    httpRequest.open('GET','api/my_boards.json', true);
    httpRequest.send(null);
  };

  function loadGetTheApp() {
    httpRequest.open('GET','api/get_the_app.json', true);
    httpRequest.send(null);
  };

  return {

    loadRandom: loadRandom,
    loadMyBoards: loadMyBoards,
    loadGetTheApp: loadGetTheApp
  }
})()