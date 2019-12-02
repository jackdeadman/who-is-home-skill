const express = require('express');
const bodyParser = require('body-parser')
const verifier = require('alexa-verifier-middleware');
const axios = require('axios');
const https = require('https');
const fs = require('fs');
const port = 443;

const key = fs.readFileSync("/etc/letsencrypt/live/alexa.gregorovi.ch/privkey.pem");
const cert = fs.readFileSync("/etc/letsencrypt/live/alexa.gregorovi.ch/fullchain.pem");
const options = {
  key: key,
  cert: cert
};

app = express()
app.use(verifier);
app.use(bodyParser.json())

function toSentence(arr) {
    return arr.reduce(function(prev, curr, i){ 
        return prev + curr + ((i===arr.length-2) ? ' and ' : ', ')
    }, '').slice(0, -2);
}

app.all('/*', (req, res) => {

    console.log('Body: ', req.body.version)

    axios.get('http://residents-service')
        .then(response => {
            const residents = response.data.residents;
            const inHouse = residents.filter(r => r.active);
            const nameStr = toSentence(inHouse.map(r => r.name));
            let message;
            

            if (residents.length > 1) {
                message = `${nameStr} are in the house`;
            } else if (residents.length === 0) {
                message = 'No one is in the house'
            } else {
                message = `${nameStr} is in the house`;
            }


            res.json({
                "version": "string",
                "sessionAttributes": {
                    "key": "value"
                },
                "response": {
                    "outputSpeech": {
                    "type": "PlainText",
                    "text": message,
                    "playBehavior": "REPLACE_ENQUEUED"      
                    },
                "shouldEndSession": true
            }

        });

}
)
//     console.log(req, res)
//    res.send('Now using https..');
});

app.all('*', console.log)

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});