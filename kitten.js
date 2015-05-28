window.onload = function () {
  var pics;
  var  Game = function() {

    $.ajax({
      url: 'https://api.imgur.com/3/album/CTPOV.json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Client-ID 11c372c0f3dfff2');
      }
    })

    .done( function(pics) {
      var catPicsArray = []; //loops through and selects each image
      for (var i = 0; i < 14; i++) {
        catPicsArray.push(pics.data.images[i].link);
      };

      var ChooseCat = function () {
        return $('<img src="' + catPicsArray[Math.floor(Math.random() * catPicsArray.length)] + '">')
      };

      var $option1 = new ChooseCat();
      var $option2 = new ChooseCat();
      $option1.prependTo('#cat-pic');
      $option2.prependTo('#cat-pic2');

    }).fail( function() { //Shows message if not sucessful
      $('.grid_6').html('Can not load picture at the moment. Meow!')
    });

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
