const express = require('express');
const urlRouter = require('./roues/urlRoutes')
const cors = require('cors');

const app = express();
// app.use(cors())
app.use(cors({
    origin: '*',
  methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
  allowedHeaders:['Content-Type']
}))


// app.listen(1400,()=>console.log("App Started"));
app.use(express.json())
app.use('/url',urlRouter)



module.exports = app