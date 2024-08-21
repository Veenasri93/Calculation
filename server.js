const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Handle form submission
app.post('/submit', (req, res) => {
    const age = parseInt(req.body.age, 10);
    let ageType;

    if (age < 13) {
        ageType = 'Child';
    } else if (age < 20) {
        ageType = 'Teenager';
    } else if (age < 65) {
        ageType = 'Adult';
    } else {
        ageType = 'Senior';
    }

    res.send(`<h1>Your Age Type is: ${ageType}</h1><a href="/">Go Back</a>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
