const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Item = db.item;
// const Multer = db.Multer;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
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
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

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
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
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

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var listings = [];

      for (let i = 0; i < user.items.length; i++) {
        listings.push("ITEM_" + user.items[i])     //.categoryName.toUpperCase());
      }

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

exports.uploadItem = (req, res) => {
  console.log(req.body)
  const newItem = new Item({
    categoryName: req.body.categoryName,
    size: req.body.size,
    gender: req.body.gender,
    age: req.body.age,
    other: req.body.other
  });
  User.findOne({
    username: req.body.user.username
  })
  // .populate("roles", "-__v")
  // .populate("items")
  .exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    user.tokens += 1;
    user.items.push(newItem);
    user.save();
    
    // var token = jwt.sign({ id: user.id }, config.secret, {
    //   expiresIn: 86400 // 24 hours
    // });

    // var authorities = [];

    // for (let i = 0; i < user.roles.length; i++) {
    //   authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
    // }

    // var listings = [];

    // for (let i = 0; i < user.items.length; i++) {
    //   listings.push("ITEM_" + user.items[i].categoryName.toUpperCase());
    // }
    res.status(200).send({ 
      message: "Token earned!",
      updatedUser: user,
      // id: user._id,
      // username: user.username,
      // email: user.email,
      // address: user.address,
      // phone: user.phone,
      // tokens: user.tokens,
      // roles: authorities,
      // items: listings,
      // accessToken: token
    });
  })
}

exports.getItems = (req, res) => {
  const items = req.body.user.find("items")
    .populate("user.items");
  res.send(items);
}

exports.redeem = (req, res) => {
  User.findOne({
    username: req.body.username
  })
  .exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user.tokens >= 1)
    {
      user.tokens -= 1;
      user.save();
      res.status(200).send({
        updatedUser: user,
        message: "Token redeemed successfully!"
      });
    }
    else{
      res.status(200).send({
        message: "You don't have any tokens!"
      })
    }
    
  })
}