/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/* Tweet data template for refrence.
 {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }
 */
//const { nextISSTimesForMyLocation  } = require('./iss_promised');
const renderTweets = function(tweetData) {
    
  let $tweet = $(`
    <section class="tweet" >
      <header class="tweet-header">
        <div class="profile">
          <img src="${tweetData.user.avatars}">
          <span>${tweetData.user.name}</span>
        </div>
        <span class="user-url" >${tweetData.user.handle}</span>
      </header>
      <div class="tweet-content">${tweetData.content.text}</div>
      <footer class="tweet-footer">
        <span class="created">${timeago.format(tweetData.created_at)}</span>
        <div class="footer-icons">
          <i class="fa-solid fa-share"></i>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </section>
  `);
  return $tweet;
};

const loadTweets = function() {
  console.log("FETCHING TWEETS (FUNCTION)");
  $('#tweets-container').empty();
  $.ajax({
    url: 'tweets/',
    method: 'GET',
  }).then((tweets) => {
    for (const tweet in tweets) {
      console.log(tweets[tweet]);
      const $postTweet = renderTweets(tweets[tweet]);
      $('#tweets-container').append($postTweet);
    }
  });
};



$(() => {
  console.log("DOM ready");

  loadTweets();

  $('#new-tweet-form').submit(function(event) {
    event.preventDefault();

    $.post('tweets/', $(this).serialize()
    ).then($.get('tweets/').then(loadTweets()));
    
  });
});





//This works
// $.ajax({url: 'tweets/',method: 'POST', data: $(this).serialize()
// }).then($.ajax({url: 'tweets/',method: 'GET',}).then(fetchTweets()));

//This works
// $.post('tweets/', $(this).serialize()
// ).then($.ajax({url: 'tweets/',method: 'GET',}).then(fetchTweets()));