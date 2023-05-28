const express = require('express');
const {connection} = require('./configs/db');
const {userRouter} = require('./routes/User.route');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
    origin:"*"
}));
app.use(express.json());

app.use(userRouter);

// app.post('/app', async(req,res)=>{
//     const token = req.headers.authorization;
//     jwt.verify(token, 'mentikey', (err, decoded) => {
//         if(err){
//             res.send('Please login first')
//         }else {
//             res.send("Data..")
//         }
//       });
// })

app.listen(process.env.port, async ()=>{
    try{
        await connection;
        console.log('Connected to DB');
    }catch (err){
        console.log('Error while connecting to db');
    }
    console.log(`Running at ${process.env.port} Port`);
})