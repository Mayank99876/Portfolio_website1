import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
import Footer from "./components/footer";
import Contact from "./components/contact";
import WriteARecommendation from "./components/write-a-recommendation";
import ProjectPage from "./components/projectPage";
import AddProject from "./components/addProject";
import BlogPage from "./components/blogPage";
import AddBlog from "./components/addBlog";
import NotFound from "./components/notFound";
import {BrowserRouter , Route , Routes} from "react-router-dom";
import {Provider} from "./context";
import AllProject from "./components/allProject";
import Allblogs from "./components/allblogs";
import ScrollToTop from "./components/scrollToTop";
import Test from "./components/Test";


function App() {
  return (
    <Provider>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
      <Route exact path="/write-a-recommendation" element={<WriteARecommendation/>}></Route>
      <Route exact path="/project/:id" element={<ProjectPage/>}></Route>
      <Route exact path="/project/add" element={<AddProject/>}></Route>
      <Route exact path="/blog/:id" element={<BlogPage/>}></Route>
      <Route exact path="/blog/add" element={<AddBlog/>}></Route>
      <Route exact path="/allprojects" element={<AllProject/>}></Route>
      <Route exact path="/allblogs" element={<Allblogs/>}></Route>
      <Route exact path="/test" element={<Test/>}></Route>
      <Route exact path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
