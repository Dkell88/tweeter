const hideDelay = function() {
  setTimeout(() =>{
  $("#error-box").slideUp(500);
  }, 5000);
};


$(() => { //Wait for Dom to load
  //Load tweets from "Database"
  loadTweets();

  //Listen for butotn click "Tweet" button
  $('#new-tweet-form').submit(function(event) {
    event.preventDefault();
    const $tweetText = $(this).children('textarea');
    //Ensure the user entered text to the characters
    if ($($tweetText).val() === "") {
      $("#error-message").text("Please enter a tweet");
      $("#error-box").slideDown(500);
      hideDelay();
      return;
    }
    //Ensure the user is under 140 chars
    if ($($tweetText).val().length > 140) {
      $("#error-message").text("Too many character entered");
      $("#error-box").slideDown(500);
      hideDelay();
      return;
    }
  
    //There was no error hid the error box
    $("#error-box").hide();

    //Ajax POST request to tweets route
    $.post('tweets/', $(this).serialize()
    ).then($.get('tweets/').then(loadTweets())); //After posting new tweet reload the tweets from "DB"
    //Clear the textarea after posting
    $('#tweet-text').val("").trigger('input');
  });
});