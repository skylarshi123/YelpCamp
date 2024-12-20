const {places, descriptors} = require("./seedHelpers");
const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require('./cities');

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for(let i = 0; i < 70; i++){
      const random1000 = Math.floor(Math.random() * 1000);
      const price = Math.floor(Math.random() * 20) + 10;
      const camp = new Campground({
          geometry: {
              type: "Point",
              coordinates: [ 
                cities[random1000].longitude, 
                cities[random1000].latitude
              ]
          },
          title: `${sample(descriptors)} ${sample(places)}`,
          price: price,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, fugit',
          location: `${cities[random1000].city}, ${cities[random1000].state}`,
          reviews: [],  // Empty reviews array
          images: [
              {
                  url: 'https://res.cloudinary.com/dkqsqwvdf/image/upload/v1721288297/YelpCamp/butl9d5qs2aec1n5rvpb.jpg',
                  filename: 'YelpCamp/butl9d5qs2aec1n5rvpb',
              },
              {
                  url: 'https://res.cloudinary.com/dkqsqwvdf/image/upload/v1721288299/YelpCamp/dtfsjy2otqeulngenzw4.png',
                  filename: 'YelpCamp/dtfsjy2otqeulngenzw4',
              }
          ],
          author: '669755037f754fe61ba3f441'
      });
      await camp.save();
  }
}

seedDB().then(() => {
    mongoose.connection.close();
})