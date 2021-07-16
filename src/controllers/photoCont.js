const util = require('util');
const exec = util.promisify(require('child_process').exec);
const request = require('request');
const uploadMessagePicture = async (req, res) => {
    try {
       


        console.log(req)
        // request('http://127.0.0.1:5001/flask', function (error, response, body) {
        //     console.error('error:', error); // Print the error
        //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //     console.log('body:', body); // Print the data received
        //     res.send(body); //Display the response on the website
        //   });      

          
            
        
 
     
    } 
    catch (e) {
        res.status(400).send({ message: e.message });
    }
 }


 module.exports = uploadMessagePicture