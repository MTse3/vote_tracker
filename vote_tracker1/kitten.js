window.onload = function () {

  //possibly use for no repeat
  // function someName(one, two, max) {
  //   var newNum;
  //   do {
  //     newNum = Math.floor(Math.random() * max);
  //   } while(newNum == one || newNum == two)
  //   return newNum;
  // }

  // var  Game = function() {
  var trackCat1, trackCat2;
    $.ajax({
      url: 'https://api.imgur.com/3/album/CTPOV.json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Client-ID 11c372c0f3dfff2');
      }
    })
    .done( function(pics) {
      makeCats(pics);
      images = pics.data.images;
      imagesLength = pics.data.images_count;
      initialize();
      user.displayPhotos();

    }).fail( function() { //Shows message if not sucessful
      $('.grid_6').html('Can not load picture at the moment. Meow!')
    });
  // }
  var Tracker = function() {
    this.randPic = function() {
      return Math.floor(Math.random() * 14)
    }


  }

  Tracker.prototype.pleaseMake = function() {
    this.trackCat2 = this.randPic();
    while (this.trackCat1 == this.trackCat2) {
      this.trackCat2 = this.randPic();
    }
  };

  var makeCats = function (image1) {
    var catPicsArray = []; //loops through and selects each image
      for (var i = 0; i < 14; i++) {
        catPicsArray.push(image1.data.images[i].link);
      };

      var ChooseCat = function () {

        return $('<img src="' + catPicsArray[Math.floor(Math.random() * catPicsArray.length)] + '">')
      };

      var $option1 = new ChooseCat();
      var $option2 = new ChooseCat();
      $option1.prependTo('#cat-pic');
      $option2.prependTo('#cat-pic2');
  }

  var makeRandomCat = function() {

  }

  makeCats.prototype.ChooseCat = function() {


  };

  //for tracking vote totals
  $('section.grid_6').on('click', function(){
      var voteTotal = 0;
      voteTotal+=
      $('.total').append(voteTotal);
    })

  $('.vote-again').on('click', function(e) { //click on vote again button
      e.preventDefault();//avoids refresh after clicking button
      // Game();//starts function for a game again
    });
}
