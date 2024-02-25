const express = require('express');
const app = express();
const cors = require('cors');
const handleCategory1 = require('./app/controllers/category1');

const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { 
    res.send('hai!'); 
});

app.get('/category', handleCategory1.getCategory1);

app.post('/category', handleCategory1.createCategory1);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});