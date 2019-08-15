require('dotenv').config()

const express           = require('express'); 
const cors              = require('cors'); 
const path              = require('path'); 

const port              = process.env.PORT || 8080; 

const app = express(); 

app.use(cors()); 


app.use(express.static(path.join(__dirname, '../', 'client', 'build')));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')); 
})

app.listen(port, () => {
    console.log(`Listening to port: ${port}`); 
}); 