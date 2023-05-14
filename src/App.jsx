import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { getAllPosts } from "./redux/posts/posts.actions";
import { checkSession, getAllUsers } from "./redux/users/users.actions";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./components/Auth/Auth";
import { useSelector } from "react-redux";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  useEffect( () => {
     getAllPosts();
    getAllUsers();
     checkSession();
  }, []);
  const { user } = useSelector((state)=> state.users)
  return (
    <>
      <Box bg="var(--primary)" w="100%" minH="100vh">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={
          <Register />
          } />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
                <Profile />
            }
          />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Box>
    </>
  );
}

export default App;
