const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello! my name is Ami Halsey.');
// });

const nameRoute = require('./routes/name');
app.use('/', nameRoute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

