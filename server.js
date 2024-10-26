const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/inverter', (req, res) => {
  const texto = req.query.texto || '';
  const textoInvertido = texto.split('').reverse().join('');

  res.send(`
    <h1>Inverter Texto</h1>
    <form method="GET" action="/inverter">
      <input type="text" name="texto" placeholder="Digite um texto" />
      <button type="submit">Inverter</button>
    </form>
    <p>Texto invertido: ${textoInvertido}</p>
    <a href="/login">Ir para Login</a>
  `);
});

app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  let mensagem;
  if (!usuario || !senha) {
    mensagem = 'Usuário e senha são obrigatórios.';
  } else if (senha === usuario + usuario) {
    mensagem = `Acesso permitido para o usuário ${usuario}.`;
  } else {
    mensagem = 'Acesso negado. Senha inválida.';
  }

  res.send(`
    <h1>Login</h1>
    <form method="POST" action="/login">
      <input type="text" name="usuario" placeholder="Usuário" />
      <input type="password" name="senha" placeholder="Senha" />
      <button type="submit">Login</button>
    </form>
    <p>${mensagem}</p>
    <a href="/inverter">Ir para Inverter Texto</a>
  `);
});

app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form method="POST" action="/login">
      <input type="text" name="usuario" placeholder="Usuário" />
      <input type="password" name="senha" placeholder="Senha" />
      <button type="submit">Login</button>
    </form>
    <a href="/inverter">Ir para Inverter Texto</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/inverter`);
});
