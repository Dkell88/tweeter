$(() => {
  loadTweets();

  $('#new-tweet-form').submit(function(event) {
    event.preventDefault();
    $("#error-box").hide();

    if ($('#tweet-text').val() === "") {
      $("#error-message").text("Please enter a tweet");
      $("#error-box").slideDown(500);
      return;
    }
    if ($('#tweet-text').val().length > 140) {
      $("#error-message").text("Too many character entered");
      $("#error-box").slideDown(2000);
      return;
    }
    $.post('tweets/', $(this).serialize()
    ).then($.get('tweets/').then(loadTweets()));
    $('#tweet-text').val("");
  });
});
