
$(() => {
  console.log("DOM ready");
  loadTweets();

  $('#new-tweet-form').submit(function(event) {
    event.preventDefault();

    if ($('#tweet-text').val() === "") {
      console.log(`Enter a value fool`);
      alert("Enter a value");
      return;
    }
    if ($('#tweet-text').val().length > 140) {
      console.log(`Didn't you see the red negative chars`);
      alert("Too many characters");
      return;
    }

    $.post('tweets/', $(this).serialize()
    ).then($.get('tweets/').then(loadTweets()));
    $('#tweet-text').val("");
  });
});





//This works
// $.ajax({url: 'tweets/',method: 'POST', data: $(this).serialize()
// }).then($.ajax({url: 'tweets/',method: 'GET',}).then(fetchTweets()));

//This works
// $.post('tweets/', $(this).serialize()
// ).then($.ajax({url: 'tweets/',method: 'GET',}).then(fetchTweets()));