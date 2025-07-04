const express = require('express'); // ✅ Use 'express' here

const app = express(); // ✅ Correct way to create app

app.use(express.json()); // ✅ Now this will work


const notes = []

app.post('/note', (req, res) => {
    
    console.log(req.body); // ✅ This will show your JSON data

    arr.push(req.body)

   res.json({
    message:"Notes created",
    notes:notes    //send notes array format
   })
});

app.listen(3000, () => {
    console.log('Server is started on http://localhost:3000');
});
