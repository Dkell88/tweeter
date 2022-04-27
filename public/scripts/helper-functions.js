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
      const $postTweet = renderTweets(tweets[tweet]);
      $('#tweets-container').append($postTweet);
    }
  });
};
