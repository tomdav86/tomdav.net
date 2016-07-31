console.log('Hello, world!') // Print

function resizeBoxes(){
  var windowHeight = $(window).height(); // get height of window
  $('#main, #mainleft, #publications, #blog, #gallery, #contact').height(windowHeight); // set height of lbox to height of window
}

resizeBoxes();
$(window).resize(resizeBoxes); // height() and resize() are jquery functions
