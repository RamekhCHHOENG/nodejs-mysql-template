const express = require('express');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const app = express();
swaggerDocument = require('./swagger.json');

// Serialize JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const whitelist = ['localhost:8080', 'http://example2.com'];

const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));

// Configure swagger.
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes.
require('./src/routes/customer.route')(app);
require('./src/routes/user.route')(app);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server start in port: http://localhost:${port}`);
});
