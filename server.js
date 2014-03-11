var Twit = require('twit');

var t = new Twit({
  consumer_key: process.env.TWT_CONSUMER_KEY,
  consumer_secret: process.env.TWT_CONSUMER_SECRET,
  access_token: process.env.TWT_ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

