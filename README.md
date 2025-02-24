
# 🎬 MovieNest

MovieNest is a modern movie portal designed to provide a seamless experience for movie enthusiasts. Users can explore, add, and manage their movie collection with an intuitive and visually stunning interface.



##
🔗 **Live Site:** [MovieNest](https://assighnment-10.web.app/)
---

## 📌 Table of Contents

- [🚀 Features](#-features)
- [🛠 Technologies Used](#-technologies-used)
- [📥 Installation](#-installation)
- [📦 Dependencies](#-dependencies)
- [📖 Usage](#-usage)
-

---

## 🚀 Features

✅ **Add and Manage Movies**  
   - Users can add movies with details like title, genre, release year, rating, and duration.  
   - Edit or delete movie entries as needed.  

✅ **Explore All Movies**  
   - View all movies in a responsive, grid-based layout.  
   - Each movie card displays the poster, title, genre, and rating.  

✅ **Movie Details Page**  
   - Navigate to a detailed movie page.  
   - Options to delete the movie or add it to the favorites list.  

✅ **User Authentication**  
   - Secure login and registration with Firebase Authentication (email/password).  
   - Users can manage their personalized movie collections.  

✅ **Favorite List**  
   - Save movies to a personalized favorites list.  

✅ **Responsive Design**  
   - Built with TailwindCSS for an attractive experience across all devices.  

✅ **Real-Time Data Management**  
   - Integrated with MongoDB for dynamic data storage.  
   - Instant updates when adding, deleting, or editing movie details.  

---

## 🛠 Technologies Used

### **Frontend:**
- **React.js** – Frontend framework  
- **React Router DOM** – For navigation and routing  
- **TailwindCSS** – Responsive and modern UI design  

### **Backend:**
- **Node.js** – JavaScript runtime for server-side logic  
- **Express.js** – Backend framework for API handling  

### **Database:**
- **MongoDB** – Stores user and movie data  

### **Authentication:**
- **Firebase Authentication** – Secure login/signup system  

### **Alerts & Notifications:**
- **SweetAlert2** – Interactive feedback for user actions  

---

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Development Server**
```sh
npm run dev
```
The app should now be running at `http://localhost:3000/`

### **4️⃣ Set Up Firebase Authentication**
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)  
- Enable **Email/Password Authentication** and **Google Sign-In**  
- Get your Firebase config and add it to `.env`:
  ```env
  REACT_APP_FIREBASE_API_KEY=your_api_key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
  REACT_APP_FIREBASE_PROJECT_ID=your_project_id
  ```

---

## 📦 Dependencies

```json
{
  "react": "^18.0.0",
  "react-router-dom": "^6.0.0",
  "tailwindcss": "^3.0.0",
  "firebase": "^9.0.0",
  "swiper": "^8.0.0",
  "aos": "^2.3.4"
}
```

---

## 📖  Usage Guide for MovieNest

1. **Homepage:**  
   - Displays a banner slider and adventure cards.  
   - Clicking “Explore Now” redirects logged-in users to the adventure details page.  
   - Non-logged-in users are prompted to log in first.  

2. **Authentication:**  
   - **Login:** Users log in using email/password or Google authentication.  
   - **Register:** New users sign up with email/password, validated against specific criteria.  
   - **Forgot Password:** Users reset their passwords via email.  

3. **Movie Exploration:**  
-Browse all movies in a responsive grid layout.
-Each movie card displays poster, title, genre, and rating.
-Click on a movie card to view detailed information.

4. **Adding & Managing Movies:**  
  -Logged-in users can add movies with title, genre, rating, and duration.
  -Edit or delete movie entries from the list..

5   **Favorite List**
-Users can save movies to a personalized Favorites list.
-Easily access and remove movies from the list.
6️ **Authentication & User Management**
-Secure login & registration using Firebase Authentication.
-Users can manage their collections after logging in.
-Authentication persists across sessions for seamless access.
7️ **Responsive UI & Smooth Experience**
-Optimized for all devices with TailwindCSS.
-Animations & alerts for a visually engaging experience.
