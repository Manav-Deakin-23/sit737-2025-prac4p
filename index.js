// Import required modules
const express = require('express');
const winston = require('winston');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

// Middleware to parse JSON requests
app.use(express.json());

// Function to perform arithmetic operations
const calculate = (operation, num1, num2) => {
    switch (operation) {
        case 'add': return num1 + num2;
        case 'subtract': return num1 - num2;
        case 'multiply': return num1 * num2;
        case 'divide': return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        default: return 'Invalid operation';
    }
};

// Define API routes
app.get('/:operation', (req, res) => {
    const { operation } = req.params;
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        logger.error(`Invalid numbers provided: num1=${req.query.num1}, num2=${req.query.num2}`);
        return res.status(400).json({ error: 'Invalid input, please provide numbers' });
    }

    const result = calculate(operation, num1, num2);

    if (result === 'Invalid operation' || result === 'Cannot divide by zero') {
        logger.error(`Invalid operation or division by zero: ${operation} ${num1} ${num2}`);
        return res.status(400).json({ error: result });
    }

    logger.info(`New ${operation} operation requested: ${num1} ${operation} ${num2}, Result: ${result}`);
    res.json({ operation, num1, num2, result });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Calculator microservice running on http://localhost:${PORT}`);
    logger.info(`Server started on port ${PORT}`);
});
