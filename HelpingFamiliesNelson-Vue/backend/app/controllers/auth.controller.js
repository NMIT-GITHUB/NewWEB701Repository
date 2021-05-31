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
    userType: req.body.userType,
    tokens: 0
  });

  user.save((err, user) => {
    //return error if issue present
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    //find the role associated with the user if it exists
    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      //if there is no role associated with the user, it will be given the default "User"
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        //save user in system
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

//handles the signin request of the user
exports.signin = (req, res) => {
  //Searches for a user in the db using the given username
  User.findOne({
    username: req.body.username
  })
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

      var listings = [];

      for (let i = 0; i < user.items.length; i++) {
        listings.push("ITEM_" + user.items[i])     //.categoryName.toUpperCase());
      }

      //send user data back to frontend
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        address: user.address,
        phone: user.phone,
        tokens: user.tokens,
        userType: user.userType,
        items: listings,
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
    gender: req.body.gender,
    age: req.body.age,
    other: req.body.other
  });
 //looks for a username in the db matching the requested username
  User.findOne({
    username: req.body.user.username
  })
  // .populate("roles", "-__v")
  // .populate("items")
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
      updatedUser: user
    });
  })
}

exports.getItems = (req, res) => {
  const items = req.body.user.find("items")
    .populate("user.items");
  res.send(items);
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
        updatedUser: user,
        message: "Token redeemed successfully!"
      });
    }
    else{
      //is user doesnt ahve enough tokens return error message
      res.status(200).send({
        message: "You don't have any tokens!"
      })
    }
    
  })
}