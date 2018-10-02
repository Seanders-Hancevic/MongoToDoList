
const toDoList = require('../data/toDoSchema.js');


module.exports = function (app) {

    app.get('/api/toDoSchema', function (req, res) {
        res.json(toDoList);
    });

    app.get('/api/toDoSchema/:index', function (req, res) {
        res.json(toDoList[req.params.index]);
        toDoList.toDoList.find({})
        .then(function (dbtodo) {
            res.json(dbtodo);
        })
        .catch(function (err) {
            res.json(err);
        });


    });

    // app.post('/api/toDoSchema', function (req, res) {
    //     toDoList.push(req.body);
    //     req.body.completed = req.body.completed === 'true';
    //     const confirmation = { success: true };
    //     res.json(confirmation);
    // });

    app.post('/api/toDoSchema', function (req, res) {
        const confirmation = { success: true };
        req.body.completed = req.body.completed === 'true';
        toDoList.toDoList.create(req.body)
            .then(function (data) {
                res.json(data);
                res.json(confirmation);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.put('/api/toDoSchema/:index', function (req, res) {
        req.body.completed = req.body.completed === 'true';
        toDoList.splice(req.params.index, 1, req.body);
        res.json({
            success: true
        });
    });


    app.delete('/api/toDoSchema/:index', function (req, res) {

        toDoList.splice(req.params.index, 1);
        res.json({success: true});
    });
}



