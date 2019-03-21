const express  = require('express');
const app = express();
    
    app.get('/ping', (req, res) => {
        res.status(200);
        res.json({'pong': true});
    })

    const port = process.env.PORT||5001
    app.listen(port, () => {
        console.log(`listheroku createening on port ${port}`)
    })