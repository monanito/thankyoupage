const express = require('express');
var bodyParser = require('body-parser')
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(express.json()); 
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(cors({ origin: '*' }));




app.post('/getData',async (req, res) => {

    
    const apiUrl = 'https://api.getresponse.com/v3/contacts';
    const headers = {
        'X-Auth-Token': 'api-key q7jt1fp8ueuu0ss1cwxa3rzo69izomve',
        'Content-Type': 'application/json'
    };
   
    try {
        const response = await axios.post(apiUrl, req.body, { headers });
        res.status(200).send({'message': "Email and name are saved successfully"});
        
    } catch (error) {
        if(req.body.name==='' || req.body.email===''){
            return res.status(503).send({"message":"قم بادخال الإيميل والاسم "});
         } 
        res.send(error);
    }
});
app.listen(3000, () => console.log('Server running on port 3000'));