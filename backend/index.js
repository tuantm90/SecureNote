const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const CryptoJS = require('crypto-js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const notes = [];
const SECRET_KEY = "your-strong-secret"; // Bạn có thể thay đổi

app.post('/api/notes', (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Missing note text' });
    // Encrypt note
    const encrypted = CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
    const note = { id: Date.now(), encrypted };
    notes.push(note);
    res.json(note);
});

app.get('/api/notes', (req, res) => {
    // Return all notes (encrypted)
    res.json(notes);
});

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = notes.findIndex(n => n.id === id);
    if (idx === -1) return res.status(404).json({ error: 'Note not found' });
    notes.splice(idx, 1);
    res.json({ success: true });
});

app.post('/api/decrypt', (req, res) => {
    const { encrypted } = req.body;
    try {
        const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
        const text = bytes.toString(CryptoJS.enc.Utf8);
        res.json({ text });
    } catch {
        res.status(400).json({ error: 'Cannot decrypt' });
    }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
});

