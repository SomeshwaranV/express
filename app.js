const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 6500;


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    let result;

    switch (operation) {
        case 'addition':
            result = parseFloat(num1) + parseFloat(num2);
            
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'multiple':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case 'divided':
            result = num2 != 0 ? parseFloat(num1) / parseFloat(num2) : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operation';
    }

    res.send(`The result is: ${result}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator app is running at http://localhost:${port}`);
});