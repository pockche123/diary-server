const express = require('express')
const cors = require('cors')
const logger = require('morgan')


const app = express(); 

const diaryRouter = require('./routers/diary');


app.use(logger('dev'))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({
    message: "welcome",
    description: "dairy API",
    endpoints: [
        "GET / 200",
        "GET /dairy 200"
    ]
  })
})

app.use("/diary", diaryRouter);

module.exports = app