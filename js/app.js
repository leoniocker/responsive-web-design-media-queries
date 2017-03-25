$(document).ready(function () {
  // $('.menu-item').click(function() {
  //      $(this).toggleClass('active');
  // });




  $('.more-content').hide()

  $('.read-more').click(function () {
    console.log('loaded')
    // get text in button
    var buttonText = $(this).text()
    console.log(buttonText)
    // // conditional
    if (buttonText.includes('more')) {
      // change text to read less
      $(this).text("Read less")
      // show paragraphs
      $(this).siblings('.more-content').show()
    } else {
      // change text to read more
      $(this).text("Read more")
      // hide paragraphs
      $(this).siblings('.more-content').hide()
    }
  })
})
