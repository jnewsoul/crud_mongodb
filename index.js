const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const conn = require('./db/conn');
const productsRoutes = require('./routes/productsRoutes');

// Set up handlebars as the view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Middleware to read request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use products routes
app.use('/products', productsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
