import { BrowserRouter ,Route,Routes} from "react-router-dom"
import {Blog} from "./pages/Blog"
import {Blogs} from "./pages/Blogs"
import {Signin} from "./pages/Signin"
import {Signup} from "./pages/Signup"
import { Publish } from "./pages/Publish"

import  Home from "./pages/Home"
import { Summarize } from "./pages/Summarize"


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/summarize" element={<Summarize />} />
        </Routes>
            
      </BrowserRouter>
    </>
  )
}

export default App
