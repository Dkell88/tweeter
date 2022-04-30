
$(() => { //Wait for Dom to load
  $('#tweet-text').on('input', onInput);
});
  
const onInput = function() {
  let count = 140 - $(this).val().length;
  let counter = $(this).siblings().children(".counter");

  counter.val(count);

  if (count < 0) return counter.addClass('red-text');
  counter.removeClass('red-text');
};

