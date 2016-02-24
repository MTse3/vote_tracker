window.onload = function () {

  // var  Game = function() {
    // var catTally = [];
  var catPicsArray = []; //will contain the image link

  var Kitten = function (kittenNum, imgSrc) {
    this.kittenNum = kittenNum;
    this.imgSrc = imgSrc;
    this.win = 0;
    this.loss = 0;
  }

    // var makeImage = function() {
    //   var number1 = Math.floor(Math.random() * catPicsArray.length);
    //   var number2 = 0;
    //   do {
    //     number2 = Math.floor(Math.random() * catPicsArray.length)
    //   } while (number1 == number2) {
    //   };

    //   $('#cat-pic').attr('src', catPicsArray[number1]);
    //   $('#cat-pic2').attr('src', catPicsArray[number2]);
    //   console.log(number1, number2);
    //   console.count(17);
    //   Tracker(number1, number2);
    // }

    //for tracking vote totals
    var altNum = function(number1, number2) {
      var changeNum;
      do {
       changeNum = Math.floor(Math.random() * catPicsArray.length);
      } while(changeNum === number1 || changeNum === number2);
      return changeNum;
    }

      // $('#cat-pic').on('click', function(){
      //   catTally[number1] ++;
      //   console.log(catTally[number1]);
      //   $('#cat-pic').removeClass('option1');
      //   $('#cat-pic').addClass('winner');
      //   $('.totals').replaceWith('<p class="totals">You voted for cat ' + number1 + ', which now has ' + catTally[number1] + ' votes</p>');
      //   number1 = 2000;
      // })

      // $('#cat-pic2').on('click', function() {
      //   catTally[number2] ++;
      //   $('#cat-pic2').removeClass('option2');
      //   $('#cat-pic2').addClass('winner');
      //   $('.totals').replaceWith('<p class="totals">You voted for cat ' + number2 + ', which now has ' + catTally[number2] + ' votes</p>');
      //   number2 = 2000;
      // });
    // }

    $.ajax({
      url: 'https://api.imgur.com/3/album/CTPOV.json',
      headers: {
        'Authorization': 'Client-ID 11c372c0f3dfff2'
      }
    })
    .done( function(pics) {
      var images1 = pics.data.images; //images is now an array with each picture inside

      for (var i = 0; i < images1.length; i++) {
        catPicsArray.push(new Kitten(i, images1[i].link);
        // catTally[i] = 0;
      };
      makeImage();


    }).fail( function() { //Shows message if not sucessful
      $('.grid_6').html('Can not load picture right Meow!')
    });
  // };


  // $('.vote-again').on('click', function(e) { //click on vote again button
  //     e.preventDefault();
  //     $('#cat-pic').removeClass('winner');
  //     $('#cat-pic').addClass('option1');
  //     $('#cat-pic2').removeClass('winner');
  //     $('#cat-pic2').addClass('option2');
  //     $('.totals').replaceWith('<pid="total" class="totals"></p>')
  //     makeImage();//starts function for a game again

  //   });
var tracker = function(win, loss) {
  for(j = 0; j < catPicsArray.length; j++) {
    if(win === catPicsArray[j].win){
      catPicsArray[j].win ++;
    }
    else {
      catPicsArray[i].loss ++;
    }
  }
}

var makeImage = function(){
  var number1 = Math.floor(Math.random() * catPicsArray.length);
  var number2 = altNum(number1, number2);

  $("#cat-pic").attr("src", catPicsArray[number1].imgSrc);
  $("#cat-pic2").attr("src", catPicsArray[number2].imgSrc);
  $("#winOne").text("Win: " + catPicsArray[number1].win);
  $("#lossOne").text("Loss: " + catPicsArray[number1].loss);
  $("#winTwo").text("Win: " + catPicsArray[number2].win);
  $("#lossTwo").text("Loss: " + catPicsArray[number2].loss);


  $("#cat-pic").on("click", function(){
    catPicsArray[number1].win += 1;
    catPicsArray[number2].loss += 1;
    number2 = altNum(number1, number2);
    $("#cat-pic2").attr("src", catPicsArray[number2].imgSrc);
    $("#winTwo").text("Win: " + catPicsArray[number2].win);
    $("#lossTwo").text("Loss: " + catPicsArray[number2].loss);
  });

  $("#cat-pic2").on("click", function(){
    catPicsArray[number2].loss += 1;
    catPicsArray[number1].win += 1;
    number1 = altNum(number1, number2);
    $("#cat-pic").attr("src", catPicsArray[number1].imgSrc);
    $("#winOne").text("Win: " + catPicsArray[number1].win);
    $("#lossOne").text("Loss: " + catPicsArray[number1].loss);
  });
}



// }



