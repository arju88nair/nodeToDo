var express = require('express');
var path = require('path');
var Todo = require('./models/main');


//Calling routesr
var router = express.Router();
module.exports = router;


//First route
router.get('/', function(req, res) {


    Todo.find(function(err, todos) {

        if (err)


            res.send(err);


        res.json(todos);


    })
});

// Route for adding a ToDo List
router.post('/addTodo', function(req, res) {

    var todo = new Todo();
    todo.name = req.body.name;
    todo.description = req.body.description;
    todo.save(function(err) {

        if (err) {

            res.send(err);
        };

        res.json({ message: "ToDo with title " + req.body.description + " created" });

    })

})


//Editing a ToDO list
router.post('/edit', function(req, res) {

    var query = { name: req.body.name };

    Todo.findById(req.body.id, function(err, todo) {


        todo.name = req.body.name;
        todo.description = req.body.description;


      todo.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'tODO updated!' ,list:todo});
            });


    });

});



// Deleting a model


router.post('/delete', function(req, res) {

    var id = req.body.id;
    Todo.findByIdAndRemove(req.body.id, function (err,todos){
    if(err) {res.send(err); }


    res.json({"message":todos});
    // ...
});




})
