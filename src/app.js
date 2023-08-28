const express = require('express')
const app = express()
const PORT = 3000

app.get('/dlr', (req, res) => {
  console.log('req query==>', req.query)
  res.send('Dlr reçu')
})

app.post('/dlr', (req, res) => {
  console.log('req query==>', req.query)
  res.send('Dlr reçu')
})

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`)
})
