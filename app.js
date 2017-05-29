const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var Client = require('node-rest-client').Client;

var client = new Client();
var app = express();

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/getlocations',(req,res)=>{

    client.post("https://maps.googleapis.com/maps/api/geocode/json?latlng="+req.body.lang+","+req.body.lati+"&key=AIzaSyA_iPoZb4a5uGxQvuklwjeXCwS3k-T66Ec", function (data, response) {

        res.json({state:true,data:data})

    });



});

app.post('/getweather',(req,res)=>{
    console.log(req.body.city)


    client.post("http://api.apixu.com/v1/current.json?key=1057dcaa0c584aaaac964008172905&q="+req.body.city, function (data, response) {


        console.log(data)
        res.json({state:true,weather:data})

    });



});




app.listen(3006,()=>{

    console.log("listening to port 3000");

});