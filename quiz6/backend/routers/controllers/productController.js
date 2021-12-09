const { product, account } = require('../../Data/product')

//GET
const getProduct = (req, res) =>{
    const products = product.find(elem =>(elem.name === req.params.name))
    res.send(products)
}

const getAccount = (req, res) =>{
    const products1 = product.find(elem =>(elem.name === req.params.name))
    res.send(products1)
}

const addProduct = (req, res) =>{
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    }
    // console.log(req.body);
    product.push(newProduct)
    res.send(product)
}

function getInfo() {
    const account = Accounts.find({ id: req.params.id }, (err, account) => {
      console.log(err, account);
    });
    return account;
  }
  

module.exports = {getProduct, getAccount, addProduct, getInfo};