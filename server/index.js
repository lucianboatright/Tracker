require('dotenv').config();
console.log(process.env);
// dependencies
// yarn add express cors wtilio
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

// twilio rewuierments texting api
const accountSid = process.env.ACCOUNT_SID; // TWILIO SID NUM 
const authToken = process.env.AUTH_TOKEN;// TWILIO AUTH TOKEN
const client = new twilio(accountSid, authToken); //require('twilio')(accountSid, authToken)


const app = express();  //alias


app.use(cors());  //blocks browser from resticting data


//welcome page server
app.get('/', (reg, res) => {
    res.send("WElcome to the express server");
})

// twilio text
app.get('/send-text', (reg, res) => {
    // GET variables via query string
    res.send("Hello to the twilio sever")
    const { recipient, textmessage } = reg.query


    client.messages.create({
        body: textmessage,
        to: recipient,
        from: process.env.PHONE_NUMBER, //NUMBER FROM TWILIO HERE
    }).then((message) => console.log(message.body))
})


//local host port 4000
app.listen(4000, () => console.log("on port 4000"))



