const cors = require('cors')
const express = require('express')
const app = new express()
app.options('*', cors())
app.post('/', (req, res) => {
    res.json('222222')
})
app.listen(8888, (port) => {
    console.log(`服务启动在${8888}`);
})