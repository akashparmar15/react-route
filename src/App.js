import './App.css';
import Footer from './first-layout/footer';
import Header from './first-layout/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./first-layout/home";
import Blogs from "./first-layout/blogs";
import Contact from "./first-layout/contact";
import NoPage from './first-layout/nopage';
import Sidebar from './first-layout/layout';

function App() {
  return (
    <BrowserRouter>
      <div className='p-20'>
        <Header />
        <Sidebar />
        <Routes>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
