const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express();
const router = require('./routers/apiRoutes')


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(7777, ()=>{
    app.use('/api/v1',router)
})


