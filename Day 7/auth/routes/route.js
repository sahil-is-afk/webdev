const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

//data
router.post('/postData', (req, res) =>{
    const body = req.body;
    console.log("Data : ", body);

    res.json({
        message: "Data added",
        data: body,
    });
});

//login
router.post('/login', (req, res) =>{
    const body = req.body;
    if(body.email == "shahrukhkhan@gmail.com" & body.password =="pathaan"){
    console.log("Data : ", body);

    res.json({
        message: "Login Successful",
    })}
    else {
        res.json({
            message: "Account not found",
        })};
});

//register
router.post('/register', (req, res) =>{
    const body = req.body;
    if(body.email == "shahrukhkhan@gmail.com"){
    console.log("Data : ", body);

    res.json({
        message: "User already exists",
    })}
    else {
        res.json({
            message: "Registered successfully",
        })};
    
});

module.exports = router

const data = [
    {
        email: "shahrukhkhan@gmail.com",
        password: "pathaan",
    },
]