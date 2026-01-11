const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'users.json');

app.use(cors());
app.use(bodyParser.json());

// Ensure users.json exists
const ensureDataFile = async () => {
    if (!await fs.pathExists(DATA_FILE)) {
        await fs.writeJson(DATA_FILE, []);
    }
};

// Routes
app.post('/api/auth/register', async (req, res) => {
    try {
        await ensureDataFile();
        const users = await fs.readJson(DATA_FILE);
        const newUser = {
            ...req.body,
            id: Date.now(),
        };
        
        // Simple check if user already exists
        if (users.find(u => u.email === newUser.email)) {
            return res.status(400).json({ message: 'Ushbu email bilan foydalanuvchi allaqachon mavjud!' });
        }

        users.push(newUser);
        await fs.writeJson(DATA_FILE, users);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Serverda hato yuz berdi' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        await ensureDataFile();
        const { email, password } = req.body;
        const users = await fs.readJson(DATA_FILE);
        const user = users.find(u => u.email === email);

        if (!user) {
            return res.status(404).json({ message: 'Hisob topilmadi. Iltimos, royxatdan oting.' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Parol notogri!' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Serverda hato yuz berdi' });
    }
});

app.post('/api/auth/update-grade', async (req, res) => {
    try {
        await ensureDataFile();
        const { userId, grade } = req.body;
        let users = await fs.readJson(DATA_FILE);
        const userIndex = users.findIndex(u => u.id === userId);

        if (userIndex === -1) {
            return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
        }

        users[userIndex].grade = grade;
        await fs.writeJson(DATA_FILE, users);
        res.json(users[userIndex]);
    } catch (error) {
        res.status(500).json({ message: 'Serverda hato yuz berdi' });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        await ensureDataFile();
        const users = await fs.readJson(DATA_FILE);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Serverda hato yuz berdi' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
