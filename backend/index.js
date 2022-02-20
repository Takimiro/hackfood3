const express = require('express')
const cors =  require('cors')
const app = express()
const port = 8080
app.use(express.json())
app.use(cors())

let products = [];
let idIterator = 0;

app.post('/addProduct', (req, res) => {
  const newProduct = req.body;
  newProduct.id = idIterator;
  idIterator++;
  products.push(newProduct)
  res.send(newProduct)
})

app.get('/products', (_, res) => {
  res.send(products)
})

app.delete('/deleteProduct', (req, res) => {
  const productId = req.body.id;
  const deletedProd = products.splice(products.findIndex((p) => p.id === productId), 1)
  if(deletedProd != null){
    res.send(deletedProd);
  }
  else{
    res.status(404).send('Product not found');
  }
})

app.listen(port, () => {
  console.log(`Hackafood is listening on port ${port}`)
})