const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Item = db.item;
// const Multer = db.Multer;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  //creates user based on mongoose schema User
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    address: req.body.address,
    phone: req.body.phone,
    type: req.body.type,
    tokens: 0
  });

  user.save((err, user) => {
    //return error if issue present
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    user.save(err => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send({ message: "User was registered successfully!" });
    });
  });
};

//handles the signin request of the user
exports.signin = (req, res) => {
  //Searches for a user in the db using the given username
  User.findOne({
    username: req.body.username
  })
    .populate("items")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      //Returns User Not Found if no username matches
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      //checks that the entered password matches
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      //if password not match, returns Invalid Password!
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      
      //assigns token to user.id
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      //creates an array of user items
      var itemList = [];
      for (let i = 0; i < user.items.length; i++) {
        console.log(user.items[i])
        var base64Url = token.split('.')[1]; 
        var base64 = base64Url.replace('-', '+').replace('_', '/'); 
        user.items[i] = JSON.parse($window.atob(base64));
        itemList.push(user.items[i]);
        console.log(user.items[i])
      }
      //send user data back to frontend
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        address: user.address,
        phone: user.phone,
        type: user.type,
        tokens: user.tokens,
        items: itemList,
        accessToken: token
      });
    });
};

//handles the request to up'load an item to a user
exports.uploadItem = (req, res) => {
  //creates a new const matching the Item schema
  const newItem = new Item({
    categoryName: req.body.categoryName,
    size: req.body.size,
    colour: req.body.colour,
    gender: req.body.gender,
    age: req.body.age,
    other: req.body.other
  });
  //looks for a username in the db matching the requested username
  User.findOne({
    username: req.body.username
  })
  .exec((err, user) => {
    //if err return error
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    //add one token as reward for submission
    user.tokens += 1;
    //push this item to the user
    user.items.push(newItem);
    //save the user
    user.save();
    //return the users tokens and success message
    res.status(200).send({ 
      message: "Token earned!",
      tokens: user.tokens, 
    });
  })
}

//handles request to vote/redeem a token
exports.redeem = (req, res) => {
  //looks for a username in the db matching the requested username
  User.findOne({
    username: req.body.username
  })
  .exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    // check if user has enough tokens
    if (user.tokens >= 1)
    {
    //subtracts one token as payment
    user.tokens -= 1;
    //saves user
    user.save();
    //return user tokens and success message
    res.status(200).send({
      tokens: user.tokens,
      message: "Token redeemed successfully!"
    });
  } else {
    //is user doesnt ahve enough tokens return error message
    res.status(200).send({
      message: "You don't have any tokens!"
    })
  }
  })
}