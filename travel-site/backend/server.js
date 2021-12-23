const express= require('express');
const cors = require('cors');
const mongoose= require('mongoose')
require('dotenv').config();



const app= express();
const port=process.env.Port|| 5000;

app.use(cors());
app.use(express.json());

const url= process.env.ATLAS_URL;
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});
const connection= mongoose.connection;
connection.once('open', ()=>{console.log('Database connected')})



const contactFormRouter= require('./routes/form')
app.use('/contactform', contactFormRouter);




app.listen(port, ()=>{
      console.log('Server is running on ' +port)
})

