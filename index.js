const express = require("express");
var cors = require('cors')
const CoinMarketCap = require('coinmarketcap-api')
const apiKey = 'f94ec3ee-a2d5-4668-8239-c20015a6e924'
const client = new CoinMarketCap(apiKey)
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

app.get("/",async (req,res)=>{
    try {
        let response = await client.getQuotes({symbol: ['LDX'], convert: 'USD'});
        let json = await response.data["LDX"];
        res.send(json);
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, console.log(`App is listening on port: ${PORT}...`))