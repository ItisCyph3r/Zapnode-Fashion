const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    console.log(__dirname)
    res.render('index', {})
    res.send()
    res.end()
})

app.post('/', (req, res) => {
    console.log(req.body)
})

app.get('/checkout', (req, res) => {
    res.render('checkout', {})
})

app.listen(process.env.YOUR_PORT || process.env.PORT || port, () => {
    console.log('Listening to server on port ' + port)
})