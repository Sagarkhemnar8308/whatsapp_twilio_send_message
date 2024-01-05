const express = require('express');
const app = express();
const twilio = require('twilio');

const accountSid = 'AC1f89ceca5543000ff6c0e4b786d09555';
const authToken = '3baae9dfb5e1163bae46d5727ccf5b29';
const client = require('twilio')(accountSid, authToken);

app.get('/:message', async (req, res) => {
    try {
        await client.messages.create({
            body: req.params.message,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+918308773519'
        });

        console.log("Message sent successfully..........................");

        res.json({
            "message": "Message sent successfully..........."
        });
    } catch (error) {
        console.error("Error sending message:", error);

    res.json({
        "message": `Error sending message: ${error.message || error}`
    });
    }
});

app.post('/', (req, resp) => {
    // Handle POST requests if needed
});

app.listen(4200, () => {
    console.log("Server is started on 4200");
});
