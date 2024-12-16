const express = require('express');
const router = express.Router();
const User = require('../models/user');

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