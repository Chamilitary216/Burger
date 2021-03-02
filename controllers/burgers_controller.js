//Creates a new burger

const { Router } = require("express");

router.get('/index', function (req, res){
    burger.selectAll(function (data) {
        const hbsObject = { burgers: data };
        res.render('index', hbsObject);
    })
})

router.post('/burger/create')