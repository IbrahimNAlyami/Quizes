const express = require('express');
const cors = require('cors');

const data = require('./data')

const app = express();


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());


// 
app.get('/data/:id', (req, res) => {
    const myData= data.find((ele)=>{
       return  ele.id ==parseInt(req.params.id);
    })    
        res.send(myData);
    });

    app.get('/random', (req, res) => {
        const myData= data.find((ele)=>{
           return  Math.floor(Math.random() * 5)+1 ==ele.id
        })
            res.send(myData);
        });

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
app.get('/', (req, res) => {
  
});





