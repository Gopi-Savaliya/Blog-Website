import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { PostInfo } from "./pages/PostInfo/PostInfo";
import { Write } from "./pages/Write/Write";
import { Settings } from "./pages/Settings/Settings";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Context } from "./context/Context";
import { useContext } from "react";
import { About } from "./pages/About/About";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/post/:postid" element={<PostInfo />} />
        <Route path="/about" element={user ? <About /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
    </>
  );
}

export default App;
