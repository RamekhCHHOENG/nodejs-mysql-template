import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import CustomerPage from "./CustomerPage/CustomerPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage></HomePage>}/>
                <Route path={"/customers"} element={<CustomerPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
