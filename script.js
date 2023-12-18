const express = require('express')
const app = express()
const cors = require('cors')
const axios = require("axios");
const port = 2800
const apiKey = "63167fac0ae516bf5ad14d5549a242a9"
const request = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${apiKey}`

app.use(cors());
app.get(`/world`, (req, res, next) => {
  console.log(req.query)
  console.log(`https://api.openweathermap.org/data/3.0/onecall?lat=${req.query.lat}&lon=${req.query.lon}&exclude=hourly,daily&appid=${apiKey}`)
  
    const data = axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${req.query.lat}&lon=${req.query.lon}&exclude=hourly,daily&appid=${apiKey}`
    ).then((data) => {
      res.status(200).json(data.data)
    }).catch(next)
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})