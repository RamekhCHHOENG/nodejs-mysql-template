const express = require('express');
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'online_store',
});

app.get('/', (req, res) => {
   db.query('SELECT * FROM customers', (err, result) => {
      res.json({
         content: result,
         total: result.length,
      })
   })
});

require('./src/routes/customer.route')(app);
require('./src/routes/user.route')(app);

const port = 8080;
app.listen(port, () => {
   console.log(`Server start in port: http://localhost:${port}`);
});