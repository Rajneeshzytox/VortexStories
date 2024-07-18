// import
import Sidebar from "./components/sections/Sidebar"
import Header from "./components/sections/Header"
import Home from "./components/sections/Home"
import Footer from "./components/sections/Footer"
import TopPost from "./components/sections/TopPost"
import Tags from "./components/sections/Tags"
import Profile from "./components/sections/Profile"


function App() {

  return (
    <>
      <Header />
      <Home />
      <Sidebar/>
      <div className="lg:hidden block profile"><Profile /></div>
      <div className="lg:hidden block top-post"><TopPost /></div>
        {/* group display om larger scren */}
      <div className="side2 hidden lg:block sticky top-20 h-screen w-64">
        <Profile />
        <TopPost />
        <Tags />
      </div>
      <div className="lg:hidden block tags"><Tags /></div>
      <Footer/>
    
    </>
  )
}

export default App
