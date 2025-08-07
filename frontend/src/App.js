import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:4000/api';

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');
  const [decrypted, setDecrypted] = useState({});

  useEffect(() => {
    axios.get(`${API}/notes`).then(res => setNotes(res.data));
  }, []);

  const addNote = async () => {
    if (!text) return;
    const res = await axios.post(`${API}/notes`, { text });
    setNotes([...notes, res.data]);
    setText('');
  };

  const delNote = async (id) => {
    await axios.delete(`${API}/notes/${id}`);
    setNotes(notes.filter(n => n.id !== id));
  };

  const decryptNote = async (id, encrypted) => {
    const res = await axios.post(`${API}/decrypt`, { encrypted });
    setDecrypted({ ...decrypted, [id]: res.data.text });
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      <h2>SecureNote</h2>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nhập ghi chú mới..."
        style={{ width: '80%', marginRight: 8 }}
      />
      <button onClick={addNote}>Thêm ghi chú</button>
      <hr />
      <h4>Ghi chú đã lưu:</h4>
      <ul>
        {notes.map(n => (
          <li key={n.id} style={{ marginBottom: 10 }}>
            <div>
              <b>Mã hóa:</b> <code>{n.encrypted.slice(0, 30)}...</code>
            </div>
            <button onClick={() => decryptNote(n.id, n.encrypted)}>
              Giải mã
            </button>
            <button onClick={() => delNote(n.id)} style={{ marginLeft: 8 }}>
              Xóa
            </button>
            <div>
              <b>Ghi chú:</b> {decrypted[n.id]}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
