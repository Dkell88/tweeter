
$(() => {
  console.log("DOM ready");

  $('#tweet-text').keyup(() =>{
    let count = 140 - $('#tweet-text').val().length;
    $('.counter').val(count);
    console.log($('.counter').val());
    if (count < 0) {
      console.log("Adding red class");
      $('.counter').addClass('red-text');
    }
    if (count > -1 && $('.counter').hasClass('red-text')) {
      console.log("Removing red class");
      $('.counter').removeClass('red-text');
    }

  });

});