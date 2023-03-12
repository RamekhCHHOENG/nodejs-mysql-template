const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Routes.
require('./src/routes/customer.route')(app);
require('./src/routes/user.route')(app);


// Configure swagger.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = 8080;

app.listen(port, () => {
    console.log(`Server start in port: http://localhost:${port}`);
});