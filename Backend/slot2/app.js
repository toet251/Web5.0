var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();

app.use(router);
router.use(bodyParser.text());

router.get("/getUser", function (req, res) {
    fs.readFile("./user.json", function (err, data) {
        if (err) {
            res.end(err);
        } else {
            res.end(data);
        }
    })
})

router.post("/createUser", function (req, res) {
    fs.readFile("./user.json", function (err, data) {
        if (err) {
            res.end(err);
        } else {
            let tempData = JSON.parse(data);
            let newUser = JSON.parse(req.body);
            tempData.users.push(newUser);

            fs.writeFile("./user.json", JSON.stringify(tempData), function (err) {
                if (err) {
                    res.end(err);
                } else {
                    res.end("OK");
                }
            })
        }
    })
})

router.put("/editUser", function (req, res) {
    fs.readFile("./user.json", function (err, data) {
        if (err) {
            res.end(err);
        } else {
            var tempData = JSON.parse(data);
            var editUser = JSON.parse(req.body);
            for (var i = 0; i < tempData.users.length; i++) {
                if (tempData.users[i].name == editUser.name) {
                    tempData.users[i] = editUser;
                }
            }

            fs.writeFile("./user.json", JSON.stringify(tempData), function (err) {
                if (err) {
                    res.end(err);
                } else {
                    res.end("OK");
                }
            })
        }
    })
})

app.listen(6969, function () {
    console.log("Run server at localhost:6969")
})
