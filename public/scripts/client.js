$(() => {
  loadTweets();

  $('#new-tweet-form').submit(function(event) {
    event.preventDefault();
    $("#error-box").hide();
    //$("#error-box").toggle();
    if ($('#tweet-text').val() === "") {
      $("#error-message").val("Please enter a tweet");
      $("#error-box").slideDown(500);
      return;
    }
    if ($('#tweet-text').val().length > 140) {
      $("#error-message").val("Too many character entered");
      $("#error-box").slideDown(2000);
      return;
    }
    $.post('tweets/', $(this).serialize()
    ).then($.get('tweets/').then(loadTweets()));
    $('#tweet-text').val("");
  });
});
