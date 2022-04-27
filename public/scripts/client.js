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
 $(() => {
  const createTweetElement = function(tweetData) {
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
          <span class="created">${tweetData.content.created_at}</span>
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

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  //const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log(createTweetElement(tweetData)); // to see what it looks like
  console.log(tweetData);
  $('#tweets-container').append(createTweetElement(tweetData)); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});