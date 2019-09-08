require('dotenv').config()

const express           = require('express'); 
const cors              = require('cors'); 
const path              = require('path'); 
const db                = require('./db/index');
const mainRoutes        = require('./routes/main.routes'); 
const port              = process.env.PORT || 5000; 

const app = express(); 

app.use(cors()); 
app.use('/api',mainRoutes); 
app.use(express.static(path.join(__dirname, '../', 'client', 'build')));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')); 
})

app.listen(port, () => {
    console.log(`Listening to port: ${port}`); 
}); 