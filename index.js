const express = require("express")
const format = require('date-format')
const app = express()
const PORT = 3000 || process.env.PORT

app.get("/", (req, res) => {
    res.status(201).send("<h1>Hello World</h1> ")

});

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        "Name": "GowthamNandha", 
        "followers": 66, 
        "follows": 39,
        "date": format('hh:mm:ss', new Date())

    }
    res.status(200).json(instaSocial)
})

app.get("/api/v1/facebook", (req, res) => {
    const facebookSocial = {
        "Name": "GowthamNandha", 
        "followers": 66, 
        "follows": 39,
        "date": format('hh:mm:ss', new Date())

    }
    res.status(200).json(facebookSocial)
});

app.get("/api/v1/linkedin", (req, res) => {
    const linkedinSocial = {
        "Name": "GowthamNandha", 
        "followers": 66, 
        "follows": 39,
        "date": format('dd:MM:yy:hh:mm:ss', new Date())

    }
    res.status(200).json(linkedinSocial)
});

app.get('/api/v1/:token', (req, res) =>{
    console.log(req.params.token)
    res.status(200).json({"params": req.params.token})
    
})

app.listen(PORT, () => {
    console.log(`server is running on at ${PORT}` )

})


