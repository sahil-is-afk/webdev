const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/abcPost', (req, res) => {
    const{a} = req.query;
    const{b} = req.query;
    console.log(a);
    const sum = parseInt(a) + parseInt(b);
    res.send("Method Post :" + sum);
  })

  app.get('/sum', (req, res) => {
    res.send("Sum= 8")
  })

  app.get('/multiplication', (req, res) => {
    res.send("Result: 99")
  })

app.get("/getData",(req, res) => {
    res.json({
        success: true,
        message:"Data fetched",
        myData: data,
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const data =[
    {
        id: 1,
        name: "a",
    },
    {
        id: 2,
        name: "b",
    },
    {
        id: 3,
        name: "c",
    },

]