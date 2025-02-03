const User = require('../model/usermodel');

const signup = async (req, res) => {
    try {
        const { name, email, password, dateofbirth } = req.body;
        if (!name || !email || !password || !dateofbirth) {
            return res.status(400).json({ message: "All fields are required" });
        }


        res.status(201).json({ message: "User signed up successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { signup };
