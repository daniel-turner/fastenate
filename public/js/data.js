var Data = (function() {

  var httpRequest;

  function updateGetTheAppUI(responseText) {

    var image;

    for(var i = 0;i < 4;i++) {

      image = document.querySelector('#image' + i);
      console.log(image);
      image.backgroundImage = responseText.data.children[0].url;
      // var container = article.getElementsByClassName('imageContainer');
      // var img = container.getElementsByClassName('image');
      // console.log(img);
    }
  };

  function updateMyBoardsUI(responseText) {

    console.log("response received");
  };

  function updateRandomUI(responseText) {

    console.log("response received");
  }

  if(window.XMLHttpRequest) {

    httpRequest = new XMLHttpRequest();
  }

  if(!httpRequest) {

    throw new Error("Could not create httpRequest");
  }

  httpRequest.open('GET','api/get_the_app.json', true);
  httpRequest.send(null);

  httpRequest.onreadystatechange = function() {

    if(httpRequest.readyState === 4 ) {

      if(httpRequest.status === 200 ) {

        updateGetTheAppUI(httpRequest.responseText);

      } else {

        throw new Error("There was a problem with the request.");
      }
    }
  }

  return "loaded";

})()