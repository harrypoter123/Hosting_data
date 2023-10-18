// // app.js
// const express = require('express');
// const Twit  = require('twit');
// const app = express();

// app.use(express.static('public'));
// // app.set('view engine', 'ejs');

// app.get('/statuses/update', (req, res) => {
//     res.render('main');
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



// Import required modules
// import Twit from 'twit';
// import schedule from 'node-schedule';
// import express from 'express';
// import path from 'path';
// import fetch from 'node-fetch';
// import { stringify } from 'querystring';

// // Initialize the Express app
// const app = express();
// app.use(express.static('public'));
// app.set('view engine', 'ejs');

// // Define your Twitter API credential
// const T = new Twit({
//     consumer_key: 'tmpVBjDIWlpz70LOsbpjPQXFk',
//     consumer_secret: 'tGzNVXE9WR6uhqYXrn8ZeqE7VvL2XUTa2EqhoWimS3bMO0mpqR',
//     access_token: '1711230530438742016-NCcf4z46Tmr5kzPivW8yE3GkDkiGhj',
//     access_token_secret: 'Yqm78IYaeMACB2Ib3OiGJQzzqyqcXqQZHLpW9PiFcPwVY',
// });

// // Sample news articles - Replace with your actual news source or API integration
// const newsArticles = [
//     'https://www.lokshahi.com/news/lokshahi-politics/ashish-shelar-on-uddhav-thackeray-5',
//     'https://www.example.com/news/article2',
//     'https://www.example.com/news/article3',
// ];

// // Schedule tweets to be posted every hour
// const tweetSchedule = schedule.scheduleJob('0 * * * *', () => {
//     const randomArticle = newsArticles[Math.floor(Math.random() * newsArticles.length)];

//     // Post the tweet
//     T.post('statuses/update', { status: `Check out this news article: ${randomArticle}` }, (err, data, response) => {
//         if (err) {
//             console.error('Failed to post to Twitter:', err);
//         } else {
//             console.log('Successfully posted to Twitter!');
//         }
//     });
// });

// // Handle the Facebook posting route
// app.get('/post-to-facebook', async (req, res) => {
//     try {
//         // Define your access token and Facebook Page ID.
//         const accessToken = 'EAAS5FCpbQAQBOycdSJ8gAAtcBJiBunU5HOuZBSYX7iZA5Yp9ZBRyYPCZCFyh0K6ZC4ZCCwAVaZCc04yv1NKoyJDdeIfjZAvjvA7mWiO25RXbwqeeoMTmzkCFdbuVEup2PAFUVYR0zq6FV1XLL5dHZCDh2d8SrFR9WE2rpCx4g2P4d80bAZADSYXfI6aPZBZATZCStMEwycZAvhW8SzUBsZBvg48p9KkYcAI2EPEE3qn';
//         const pageId = '135945206274101';

//         // Define the post data.
//         const postData = {
//             link: 'https://www.lokshahi.com/news/lokshahi-politics/ashish-shelar-on-uddhav-thackeray-5',
//             message: 'Check out this news article: https://www.lokshahi.com/news/lokshahi-politics/ashish-shelar-on-uddhav-thackeray-5',
//         };

//         // Make a POST request to post on your Facebook page using the Graph API.
//         const response = await fetch(`https://graph.facebook.com/v18.0/${pageId}/feed`, {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//             },
//             body: stringify(postData),
//         });

//         const data = await response.json();
//         if (data.id) {
//             res.send('Successfully posted to Facebook!');
//         } else {
//             res.send('Failed to post to Facebook. Please check your access token and permissions.');
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Start the Express server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log('Server is running on port ' + port);
// });




// const express = require('express');
// const Twit = require('twit');
// const fetch = require('node-fetch');

// const app = express();
// const port = process.env.PORT || 3000;

// // Define your Twitter API credentials
// const T = new Twit({
//     consumer_key: 'tmpVBjDIWlpz70LOsbpjPQXFk',
//     consumer_secret: 'tGzNVXE9WR6uhqYXrn8ZeqE7VvL2XUTa2EqhoWimS3bMO0mpqR',
//     access_token: '1711230530438742016-NCcf4z46Tmr5kzPivW8yE3GkDkiGhj',
//     access_token_secret: 'Yqm78IYaeMACB2Ib3OiGJQzzqyqcXqQZHLpW9PiFcPwVY',
// });

// app.use(express.json());


// app.get('/statuses/update', (req, res) => {
//     try {
//         const link = req.query.link;
//         const message = req.query.message;

//         // Define the message to post on Twitter
//         const tweetMessage = `${message}: ${link}`;

//         // Post the tweet
//         T.post('statuses/update', { status: tweetMessage }, (err, data, response) => {
//             if (err) {
//                 console.error('Failed to post to Twitter:', err);
//                 res.send('Failed to post to Twitter.');
//             } else {
//                 console.log('Successfully posted to Twitter!');
//                 res.send('Successfully posted to Twitter!');
//             }
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });





// // Import required modules
// import express from 'express';
// import Twit from 'twit';
// import fetch from 'node-fetch';

// // Create an Express app
// const app = express();
// const port = process.env.PORT || 3000;

// // Define your Twitter API credentials
// const T = new Twit({
//     consumer_key: 'tmpVBjDIWlpz70LOsbpjPQXFk',
//     consumer_secret: 'tGzNVXE9WR6uhqYXrn8ZeqE7VvL2XUTa2EqhoWimS3bMO0mpqR',
//     access_token: '1711230530438742016-NCcf4z46Tmr5kzPivW8yE3GkDkiGhj',
//     access_token_secret: 'Yqm78IYaeMACB2Ib3OiGJQzzqyqcXqQZHLpW9PiFcPwVY',
// });

// // Enable JSON body parsing
// app.use(express.json());

// // Define a route for posting to Twitter
// app.get('/statuses/update', async (req, res) => {
//     try {
//         const link = req.query.link;
//         const message = req.query.message;

//         // Define the message to post on Twitter
//         const tweetMessage = `${message}: ${link}`;

//         // Post the tweet
//         T.post('statuses/update', { status: tweetMessage }, (err, data, response) => {
//             if (err) {
//                 console.error('Failed to post to Twitter:', err);
//                 res.send('Failed to post to Twitter.');
//             } else {
//                 console.log('Successfully posted to Twitter!');
//                 res.send('Successfully posted to Twitter!');
//             }
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Start the Express server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });





const express = require('express');
const Twitter = require('twitter');
const cors = require('cors'); 

const app = express();
app.use(express.json());
app.use(cors());

const client = new Twitter({
  consumer_key: 'UXU3c0tVTUZ0NFNLMjBiV2t5NWM6MTpjaQ',
  consumer_secret: 'Mdv56nGgBVvhCHwg_FvKJzrHWkH0oHkJSivjtbSLWCrdjallMk',
  access_token_key: '1711230530438742016-Jpj3PgYyH63iV0pOweZasQvqLXi02j',
  access_token_secret: '5D8pdt85rPJDGwf2xrt4K3nq8JuJaWr70xxs0ksQdukKM',
});

app.post('/post-to-twitter', (req, res) => {
    const tweetText = req.body.tweetText;
  
    client.post('statuses/update', { status: tweetText }, (error, tweet, response) => {
      if (!error) {
        res.send('Successfully posted to Twitter!');
      } else {
        console.error('Twitter API Error:', error);
        res.status(400).json({ error: 'Failed to post to Twitter' });
      }
    });
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});