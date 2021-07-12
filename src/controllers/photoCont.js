const util = require('util');
const exec = util.promisify(require('child_process').exec);
const uploadMessagePicture = async (req, res) => {
    try {
       

            const { stdout, stderr } = await exec('python ./src/test.py');
            console.log(stdout)
            return res.status(200).send({ message: 'done' });//stdout
        
 
     
    } 
    catch (e) {
        res.status(400).send({ message: e.message });
    }
 }


 module.exports = uploadMessagePicture