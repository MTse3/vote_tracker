window.onload = function () {

  var votes = 0;
  var  Game = function() {
    var trackCat1, trackCat2
    var catPicsArray = []; //will contain the image link


    var makeCats = function (image1) {
       //loops through and selects each image link
      for (var i = 0; i < image1.length; i++) {
        catPicsArray.push(image1[i].link);
      };
      //gives random link to cat picture
      trackCat1 = '<img src="' + catPicsArray[Math.floor(Math.random() * catPicsArray.length)] + '">';
      do {
        trackCat2 = '<img src="' + catPicsArray[Math.floor(Math.random() * catPicsArray.length)] + '">';
      } while(trackCat1 == trackCat2) {

      };

      $(trackCat1).prependTo('#cat-pic');
      $(trackCat2).prependTo('#cat-pic2');
    }

    $.ajax({
      url: 'https://api.imgur.com/3/album/CTPOV.json',
      headers: {
        'Authorization': 'Client-ID 11c372c0f3dfff2'
      }
    })
    .done( function(pics) {
      images = pics.data.images; //images is now an array with each picture inside
      makeCats(images);

    }).fail( function() { //Shows message if not sucessful
      $('.grid_6').html('Can not load picture right Meow!')
    });
  }
  Game(); //so pictures show up

//gives random number  for cat tracking
  var Tracker = function() {
    this.randPic = function() {
      return Math.floor(Math.random() * 14)
    }
  }


  //for tracking vote totals
  $('section.grid_6').on('click', function(){
      var voteTotal = 0;
      voteTotal+=
      $('.total').append(voteTotal);
    })

  $('.vote-again').on('click', function(e) { //click on vote again button
      e.preventDefault();//avoids refresh after clicking button
      Game();//starts function for a game again

    });
}
