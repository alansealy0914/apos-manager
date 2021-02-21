// middlewares/auth.js

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        //Best practice is to store this as an environment variable (.env) 
        // and it should be a complex combination of numbers and strings.
        jwt.verify(token, "Starman says color my world"); 
        next();
    } catch (error) {
        res.status(401).json({ message: "Authentication failed!" });
    }
};