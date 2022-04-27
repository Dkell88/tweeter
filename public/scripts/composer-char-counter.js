
$(() => {
  console.log("DOM ready");

  $('#tweet-text').keyup(function() {

    let count = 140 - $(this).val().length;
    let counter = $(this).siblings().children(".counter");
    counter.val(count);

    if (count < 0) counter.addClass('red-text');
    if (count > -1 && counter.hasClass('red-text')) counter.removeClass('red-text');
  
  });
});
