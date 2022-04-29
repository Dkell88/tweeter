const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

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
      <div class="tweet-content">${escape(tweetData.content.text)}</div>
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
  $.get('tweets/'
  ).then((tweets) => {
    $('#tweets-container').empty();
    const newTweet = Object.fromEntries(Object.entries(tweets).slice(0,1));
    for (const tweet in tweets) {
      const $postTweet = renderTweets(tweets[tweet]);
      $('#tweets-container').prepend($postTweet);
    }
  });
};
