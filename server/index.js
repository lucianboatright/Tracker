import express from 'express';
import path from 'path';
import keys from './twiliokeys';
import bodyParser from 'body-parser';
const app = express();
app.use('/', express.static('public'));
app.post('/sendsms', bodyParser.json(), (req, res) => {
  var client = require('twilio')(keys.sid, keys.token);
  client.sendMessage({
    to: req.body.data,
    from: '+12223334444',
    body: 'word to your mother.'
  }, function (err, responseData) {
    if (!err) {
      res.json({"From": responseData.from, "Body": responseData.body});
    }
  })
})
app.listen(process.env.PORT || 3000);



// // import bodyParser from 'body-parser';
// // import express from 'express';

// require('dotenv').config();
// console.log(process.env);
// // dependencies
// // yarn add express cors wtilio

// const express = require('express')
// const bodyParser = require('body-parser')
// const pino = require('pino')



// const cors = require('cors')
// const twilio = require('twilio')

// // twilio rewuierments texting api

// const accountSid = process.env.ACCOUNT_SID // TWILIO SID NUM 
// const authToken = process.env.AUTH_TOKEN// TWILIO AUTH TOKEN
// const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)


// const app = express();  //alias

// // added from twilio site
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(pino);

// app.post('/api/messages', (req, res) => {
//     res.header('Content-Type', 'application/json');
//     client.messages
//       .create({
//         from: process.env.TWILIO_PHONE_NUMBER,
//         to: req.body.to,
//         body: req.body.body
//       })
//       .then(() => {
//         res.send(JSON.stringify({ success: true }));
//       })
//       .catch(err => {
//         console.log(err);
//         res.send(JSON.stringify({ success: false }));
//       });
//   });


// // app.use(cors());  //blocks browser from resticting data


// // //welcome page serve
// // app.get('/', (reg, res) => {
// //     res.send("WElcome from the server");
// // })

// // // twilio text
// // app.post('/send-text', (reg, res) => {
// //     // GET variables via query string
// //     const { recipient, textmessage } = reg.query


// //     clinet.messages.create({
// //         body: textmessage,
// //         to: recipient,
// //         from: process.env.PHONE_NUMBER, //NUMBER FROM TWILIO HERE
// //     }).then((message) => console.log(message.body))
// // })


// //local host port 4000

// app.listen(4000, () => console.log("on port 4000"))



