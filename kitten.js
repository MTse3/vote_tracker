window.onload = function () {
  // var Vote = function() {
    // this.initialize = function() {
  // }

  // var game = new Vote;
  // Vote.initialize();
  var $option1 = new ChooseCat();
  var $option2 = new ChooseCat();
  $option1.prependTo('#cat-pic');
  if ($option1 === $option2) {
    $option2 = new ChooseCat();
    console.log($option2);
  } else {
  $option2.prependTo('#cat-pic2');
  }

var catPicsArray = []; //loops through and selects each image
  for (var i = 1; i <= 14; i++) {
   catPicsArray.push(i+'.jpg');
  };

var ChooseCat = function () {
  return $('<img src="images/' + catPicsArray[Math.floor(Math.random() * catPicsArray.length)] + '">')
}

//for tracking vote totals
$('section.grid_6').on('click', function(){
    var voteTotal = 0;
    voteTotal+=
    $('.total').append(voteTotal);
  })



$('.vote-again').on('click', function(e) { //click on vote again button

    var $option1 = new ChooseCat();
    var $option2 = new ChooseCat();
    e.preventDefault();//avoids refresh after clicking button
  });
}
