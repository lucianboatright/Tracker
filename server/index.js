require('dotenv').config();

// dependencies
// yarn add express cors wtilio

const express = require('express')
const cors = require('cors')
const twilio = require('twilio')

// twilio rewuierments texting api

cont accountSid = "" // TWILIO SID NUM 
cont authToken = "" // TWILIO AUTH TOKEN
cont clinet = (accountSid, authToken)


cont app = express();  //alias


app.use(cors());  //blocks browser from resticting data


//welcome page server


app.get('/', (reg, res) => {
    res.send("WElcome from the server");
})

// twilio text

app.get('/send-text', (reg, res) => {
    // GET variables via query string
    const { recipient, textmessage } = reg.query


    clinet.messages.create({
        body: textmessage,
        to: recipient,
        from: '################', //NUMBER FROM TWILIO HERE
    }).then((message) => console.log(message.body))
})


//local host port 4000

app.listen(4000, () => console.log("on port 4000"))



