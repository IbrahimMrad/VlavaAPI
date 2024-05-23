const express = require("express");
const cors = require('cors');
const xlsx = require('xlsx');
let wb = xlsx.readFile('data.xlsx');
let ws = wb.Sheets['Services'];
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3030;

// your code
app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/services', function (req, res) {
    let data = xlsx.utils.sheet_to_json(ws);
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});