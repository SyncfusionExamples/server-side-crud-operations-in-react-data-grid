const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
var data = require('./dataSource.json')

app.use(cors())
app.use(bodyParser.json())

// get all records
app.post('/orders', function (req, res) {
    return res.json({ result: data, count: data.length });
})
// insert
app.post('/orders/insert', function (req, res) {
    data.splice(0, 0, req.body.value);
    return res.status(200).send('Row inserted with OrderID ' + req.body.value.OrderID);
});
// delete
app.post('/orders/delete', function (req, res) {
    data = data.filter(x => x.OrderID != req.body.key);
    return res.status(200).send('Row deleted with OrderID ' + req.body.key);
});
// update
app.post('/orders/update', function (req, res) {
    var index = data.findIndex(x => x.OrderID === req.body.value.OrderID);
    data.splice(index, 1, req.body.value);
    return res.status(200).send('Row deleted with OrderID ' + req.body.key);
});

app.listen(process.env.PORT || 8080);
