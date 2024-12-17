# YelpCamp 🏕️

<div align="center">
  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.livesoflara.com%2Fcamping%2Fguide-sunset-campground-sequoia&psig=AOvVaw3456be6Gl_QFELhMqjTcUf&ust=1734561267595000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIj6vLTur4oDFQAAAAAdAAAAABAE" alt="YelpCamp Banner - Sunset over campground" />
  <br><br>
  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com%2FHotel_Review-g143050-d678559-Reviews-Sunset_Campground-Sequoia_and_Kings_Canyon_National_Park_California.html&psig=AOvVaw3456be6Gl_QFELhMqjTcUf&ust=1734561267595000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIj6vLTur4oDFQAAAAAdAAAAABAI" alt="YelpCamp Interface Preview" />
</div>

> 🌲 Discover your next outdoor adventure with YelpCamp - where camping meets community!

YelpCamp is a comprehensive web application that allows users to discover, share, and review campgrounds. With robust user authentication, full CRUD functionality for campgrounds and reviews, and integration with cloud services for image management and geocoding, YelpCamp provides a seamless experience for camping enthusiasts.

**Live Demo:** 🔗 [https://yelpcamp-o0wt.onrender.com/](https://yelpcamp-o0wt.onrender.com/)

## ⭐ Key Features

- **User Authentication:** 🔐 Secure registration, login, and logout using Passport.js with Local Strategy.
- **Campground Management:** 🏕️ Create, read, update, and delete campgrounds with ease.
- **Review System:** ⭐ Share experiences by leaving reviews and ratings for campgrounds.
- **Image Handling:** 📸 Upload and manage campground images via Cloudinary integration.
- **Location Services:** 🗺️ Convert location strings to geographic coordinates using MapTiler.
- **Robust Security:** 🛡️ Implemented security best practices to protect against common web vulnerabilities.

## 🛠️ Tech Stack

### Backend
- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB (with Mongoose ORM)

### Frontend
- 📄 HTML5 / CSS3
- 🎨 Bootstrap 5
- 🖌️ EJS (Embedded JavaScript templates)

### Authentication & Security
- 🔑 Passport.js (Local Strategy)
- 🪖 Helmet.js (for setting secure HTTP headers)
- 🧹 Express-mongo-sanitize (to prevent MongoDB injection)

### External Services
- ☁️ Cloudinary (Image storage and management)
- 🗺️ MapTiler (Geocoding and map display)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later recommended)
- MongoDB (local instance or cloud-based service)
- Cloudinary account
- MapTiler API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/skylarshi123/YelpCamp.git
   cd YelpCamp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DB_URL=<your_mongodb_connection_string>
   SECRET=<your_session_secret>
   MAPTILER_API_KEY=<your_maptiler_api_key>
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_KEY=<your_cloudinary_key>
   CLOUDINARY_SECRET=<your_cloudinary_secret>
   ```

4. Start the application:
   ```bash
   node app.js
   ```

5. Open your browser and navigate to `http://localhost:3000` to see YelpCamp in action! 🎉

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- The Colt Steele Web Developer Bootcamp for the project inspiration
- All contributors and open-source libraries that made this project possible

---
<div align="center">
  <strong>Happy Camping! 🏕️ </strong>
</div>
