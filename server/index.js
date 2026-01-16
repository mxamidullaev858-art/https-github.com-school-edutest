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

// Google OAuth Login/Register
app.post('/api/auth/google-login', async (req, res) => {
    try {
        await ensureDataFile();
        const { email, displayName, photoURL, uid } = req.body;
        const users = await fs.readJson(DATA_FILE);
        
        // Check if user exists
        let user = users.find(u => u.email === email || u.uid === uid);
        
        if (user) {
            // User exists, return user data
            res.json(user);
        } else {
            // New user, create account
            const newUser = {
                id: Date.now(),
                email,
                displayName,
                photoURL,
                uid,
                firstName: '',
                lastName: '',
                school: '',
                birthDate: '',
                grade: null,
                createdAt: new Date().toISOString()
            };
            
            users.push(newUser);
            await fs.writeJson(DATA_FILE, users);
            res.status(201).json(newUser);
        }
    } catch (error) {
        console.error('Google login error:', error);
        res.status(500).json({ message: 'Serverda hato yuz berdi' });
    }
});

// Update user profile
app.post('/api/auth/update-profile', async (req, res) => {
    try {
        await ensureDataFile();
        const { userId, firstName, lastName, school, birthDate } = req.body;
        let users = await fs.readJson(DATA_FILE);
        const userIndex = users.findIndex(u => u.id === userId);

        if (userIndex === -1) {
            return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
        }

        users[userIndex] = {
            ...users[userIndex],
            firstName,
            lastName,
            school,
            birthDate
        };
        
        await fs.writeJson(DATA_FILE, users);
        res.json(users[userIndex]);
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
