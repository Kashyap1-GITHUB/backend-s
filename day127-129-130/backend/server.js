const express = require('express');
const connectdb = require('./src/db/db');


connectdb()
const app = express();



app.listen(3000,()=>{
      console.log('Server running on port 3000');
})