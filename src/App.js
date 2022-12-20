import {Routes, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {IndexLoginPage} from "./components/LoginPage/indexLoginPage";
import {IndexRegisterPage} from "./components/RegisterPage/indexRegisterPage";
import {IndexLogoutPage} from "./components/LogoutPage/indexLogoutPage";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/registration" element={<IndexRegisterPage/>} />
              <Route path="/login" element={<IndexLoginPage/>} />
              <Route path="/logout" element={<IndexLogoutPage/>} />
          </Routes>
      </>
  );
}

export default App;
