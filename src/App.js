import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import {Routes,Route} from 'react-router'
function App() {
 
  return (
    <div className="h-[100vh]">
      <main className="">
        <Header />
        <Routes>
          <Route path="/" element={   <Home />} />
          <Route path="/login" element={   <Login />} />
          <Route path="/signup" element={   <SignUp />} />
        </Routes>
     
      </main>
    </div>
  );
}

export default App;
