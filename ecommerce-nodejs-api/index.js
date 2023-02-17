const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send(`សូមស្វាគមន៍មកកាន់ទំព័រដើម ❤`);
});

require('./src/routes/customer.route')(app);
require('./src/routes/user.route')(app);

const port = 8080;
app.listen(port, () => {
   console.log(`Server start in port: http://localhost:${port}`);
});