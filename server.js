const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const User = require('./src/model/user.model');
const Product = require('./src/model/product.model');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

mongoose.connect(
  'mongodb://ghshop:ghshop@localhost:27017/ghshop?authMechanism=SCRAM-SHA-1',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
var db = mongoose.connection;

if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");


app.get('/ping', function (req, res) {
 return res.json({"poko" : "pang"});
});



app.post('/api/login', function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

    return res.json({
      "username" : username,
      "password" : "*****"
    });
 });

app.post('/api/user/create', function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

  let user = new User();
  user.username = username;
  user.password = password;
  user.save(function(err){

     if (err)
      return res.json(err);
    else
      return res.json({"message" : "User created", "data" : user});

  });

 });


 app.post('/api/product/list/:page/:size', function (req, res) {

  // Declaring variable
  const search = req.query.search; // search
  const page = parseInt(req.params.page < 1 ? 1 : req.params.page); // Page
  const size = parseInt(req.params.size); // page size
  const searchRegex = new RegExp(search, "i"); // Declaring query based/search variables
  let query = {};
  const options = {
    page: page,
    limit: size
  };

  try {
    if (search) {

      // Find Demanded Products - Skipping page values, limit results per page
      query = {name: { $regex: searchRegex }};

      // // Count how many products were found
      // const numOfProducts = Product.count({name: searchRegex});

      // // Renders The Page
      // res.json({
      //   products: foundProducts, 
      //   currentPage: page, 
      //   pages: Math.ceil(numOfProducts / resPerPage), 
      //   searchVal: searchQuery, 
      //   numOfResults: numOfProducts
      // });

    } 

    Product.paginate(query, options, (err, result) => {
      return res.json(result);
    });

    // query.exec((err, products) => {
    //   return res.json(products);
    // });

  } catch (err) {
    throw new Error(err);
  }

  // return res.json({"page":req.params.page, "size" : req.params.size});

 });


 app.post('/api/product/create', function (req, res) {

  let product = new Product();
  product.name = req.body.name;
  product.desc = req.body.desc;
  product.price = !req.body.price ? 0 : req.body.price;
  product.qty = !req.body.qty ? 0 : req.body.qty;

  let img = !req.body.image ? "https://dummyimage.com/268x180/fff3cd/856404.png&text=" + product.name.split(" ").join("+") : req.body.image;
  product.image = img;

  product.save(function(err){

     if (err)
      return res.json(err);
    else
      return res.json({"message" : "Product created", "data" : product});

  });

 });

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(process.env.PORT || 8080);
