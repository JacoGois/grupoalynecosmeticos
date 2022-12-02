import { BrowserRouter, Navigate,Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import { SignInHome } from "./Views/SignInHome";
import PrivatedRoute from "./Components/PrivatedRoute";


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<PrivatedRoute/>}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/signin" element={<SignInHome />} /> 
      <Route path="*" element={<Navigate to="/signin" />}/> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
