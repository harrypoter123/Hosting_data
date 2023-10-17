

// document.addEventListener("DOMContentLoaded", function () {
//     const postButton = document.getElementById("post-button");
//     const postToTwitterButton = document.getElementById("post-to-twitter-button");

//     postButton.addEventListener("click", postToFacebook);
//     postToTwitterButton.addEventListener("click", postToTwitter);

//     async function postToFacebook() {
//         // ... (existing code for posting to Facebook)
//     }

//     async function postToTwitter() {
//         try {
//             // Define your Twitter API credentials
//             consumer_key: 'tmpVBjDIWlpz70LOsbpjPQXFk';
//             consumer_secret: 'tGzNVXE9WR6uhqYXrn8ZeqE7VvL2XUTa2EqhoWimS3bMO0mpqR';
//             access_token: '1711230530438742016-NCcf4z46Tmr5kzPivW8yE3GkDkiGhj';
//             access_token_secret: 'Yqm78IYaeMACB2Ib3OiGJQzzqyqcXqQZHLpW9PiFcPwVY';

//             // Define the message to post on Twitter
//             const tweetMessage = 'Check out this news article: https://lokshahilive.com/islampur-144944/';

//             // Initialize the Twit client for Twitter
//             const T = new Twit({
//                 consumer_key: consumerKey,
//                 consumer_secret: consumerSecret,
//                 access_token: accessToken,
//                 access_token_secret: accessTokenSecret,
//             });

//             // Post the tweet
//             T.post('statuses/update', { status: tweetMessage }, (err, data, response) => {
//                 if (err) {
//                     console.error('Failed to post to Twitter:', err);
//                 } else {
//                     alert('Successfully posted to Twitter!');
//                 }
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("post-button-twitter").addEventListener("click", postToTwitter);
});

async function postToTwitter() {
    const tweetText = 'Check out this news article: https://www.lokshahi.com/news/lokshahi-politics/ashish-shelar-on-uddhav-thackeray-5';

    try {
        const response = await fetch('http://localhost:3000/post-to-twitter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tweetText }),
        });

        if (response.status === 200) {
            console.log('Successfully posted to Twitter!');
        } else {
            console.error('Failed to post to Twitter:', response.statusText);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}