const express=require('express')
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app=express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', async (req,res) => {

    res.send("this for weather checing")
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

})

app.post('/',(req,res)=>{

console.log(req.body.city);
const city=req.body.city;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=068134c7e140a834461011d7014df04d&units=metric`)
  .then(response => {
    console.log(response.data.main)
    
    res.send(`<h2>The temparature in ${city}  is ${response.data.main.temp} celsius degress</h2>`);
  })
  .catch(error => {
    console.log(error);
  });

})



app.listen(3000, ()=> {
    console.log('our servr running at 3000 port')
})