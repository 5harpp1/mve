const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
const port = 5000;

app.use(bodyParser.json());

mongoose.connect(config.mongodbUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', UserSchema);


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Все поля обязательны.' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'Пользователь с таким email уже существует.' });
    }

    const user = new User({ name, email, password });
    await user.save();
    res.status(200).json({ success: true, message: 'Регистрация успешна.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Ошибка сервера.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});