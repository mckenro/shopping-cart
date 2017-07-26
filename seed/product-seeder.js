var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shop');

var products = [
  new Product({
      imagePath: 'https://i5.walmartimages.com/asr/2bc99b0e-fb52-4259-a496-b3ef527abfc0_1.bbd2d6e425201a9f96fe39f974e62a27.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
      title: 'Product 1 from Database!',
      description: 'This is from the database. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      price: 25
    }),
    new Product({
        imagePath: 'http://www.legittees.com/wp-content/uploads/Y_SS_Smarty_Navy_Crop-750x750.jpg',
        title: 'Product 2 from Database!',
        description: 'This is from the database. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
        price: 20
      }),
      new Product({
          imagePath: 'http://www.legittees.com/wp-content/uploads/Neptune_Indigo_W_SS_crop-750x750.jpg',
          title: 'Product 3 from Database!',
          description: 'This is from the database. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
          price: 22
        }),
        new Product({
            imagePath: 'http://www.legittees.com/wp-content/uploads/T_W_Mars_Rover_Black-750x750.jpg',
            title: 'Product 4 from Database!',
            description: 'This is from the database. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
            price: 25
          }),
          new Product({
              imagePath: 'http://www.legittees.com/wp-content/uploads/male_pelican_black.png',
              title: 'Product 5 from Database!',
              description: 'This is from the database. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
              price: 18.50
            })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
