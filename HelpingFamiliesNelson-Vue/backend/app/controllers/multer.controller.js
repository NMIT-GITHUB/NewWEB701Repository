let multer = require('multer')
  
const DIR ='./public/';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cd(null, DIR);
  },
  filename: (req, file, cb) => {
    const filename = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});

var upload = multer({
    storage: storage,
    // limits: {
    //   fileSize: 1024 * 1024 * 5
    // },
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  });