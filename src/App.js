
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About_page';
import Upload from './pages/upload';
import Gallery from './pages/Gallery';
import Login from './pages/Login'
import Signup from './pages/Signup'




function App() {
  return (
    <>
    <BrowserRouter>
    <main>
      <Navbar title='PicGallery'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </main>
    </BrowserRouter>
    </>
  );
}


export default App;


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "username",
//   password: ""
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
