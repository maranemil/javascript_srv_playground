const express = require('express')
const {readFile} = require('fs').promises;

const app = express();
app.get('/', (request, response) => {
    readFile('.home.html', 'utf8', (err, txt) => {
        if (err) {
            response.status(500).send('error here');
        }
        response.send(html)
    });
});
app.listen(process.env.PORT || 3000, () => console.log('App on'));