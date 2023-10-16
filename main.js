// app.js
const express = require('express');
const app = express();

app.use(express.static('public'));
// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
