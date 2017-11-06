
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {ShoppingList, Recipes} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to ShoppingList
// so there's some data to look at
ShoppingList.create('beans', 2);
ShoppingList.create('tomatoes', 3);
ShoppingList.create('peppers', 4);


Recipes.create('chocolate milk', ['cocoa', 'milk', 'sugar'])

app.get("/recipes-list", (req, res) => {
  res.json(Recipes.get());
})

// when the root of this router is called with GET, return
// all current ShoppingList items
app.get('/shopping-list', (req, res) => {
  res.json(ShoppingList.get());
});

app.listen(process.env.PORT || 8081, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8081}`);
});































