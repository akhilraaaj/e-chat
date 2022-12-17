//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';

//app config
const app = express()
const port = process.env.PORT || 9000 

//midddleware
app.use(express.json());

//DB config
const connection_url ='mongodb+srv://echat:1yjWnlKAznABab7j@cluster0.d1vokvf.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(connection_url);
//????

//api routes
app.get('/', (req,res)=>res.status(200).send('hello world'))

app.post('/messages/new', (req,res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage, (err, data) => {
        if(err){
            err.status(500).send(err)
        }
        else {
            res.status(201).send(data);
        }
    })
})
//listen
app.listen(port, () => console.log('Listening on localhost:',port
));