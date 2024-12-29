const express = require('express');
const app = express();

const PORT = 4001;

app.get('/' , (req,res)=>{
    res.send('There are 2 routes , r1 and r2');
})
app.get('/r1', (req, res) => {
    res.send('Backend Route 1 ');
});
app.get('/r2', (req, res) => {
    res.send('Backend Route 2');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
