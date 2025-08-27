const express = require ('express');
const app = express();
const port = 3000

app.get('/health-checkup',(req, res) => {
    const kidneyID = req.query.kidneyID;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !== 'soham' && password !== 'pass'){
        res.status(403).json({
            msg: 'user does not exist'
        });
        return;
    }

    if(kidneyID !== 1 && kidneyID !== 2){
        res.status(411).json({
            msg:'wrong inputs'
        });
        return;
    }
    res.json({
        msg: "your kidneys are fine"
    });

});

app.listen(3000);
console.log("app listening on port")