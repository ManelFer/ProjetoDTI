// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Rota para criar um novo usuário
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const user = await User.create({ nome, email, senha });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para buscar todos os usuários
router.get('/user', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({ message: 'Usuário não encontrado' });
  }
  if (user.senha !== senha) {
    return res.status(401).json({ message: 'Senha incorreta' });
  }
  return res.json({ message: 'Autenticado com sucesso' });
});

module.exports = router;