const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyWebApi = require('spotify-web-api-node');
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.post('/login', (req, res)=> {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri:'http://localhost:3000/',
        clientId:'9b4cedd973b9475a993951d8de9c9fc6',
        clientSecret:'f762a406925641d48904829c5626ef9c'
    })
    spotifyApi.authorizationCodeGrant(code).then(data =>{
        res.json({
            accessToken: data.accessToken,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err)=>{
        res.sendStatus(400)
        console.log(err)
    })
})
app.listen(3001)