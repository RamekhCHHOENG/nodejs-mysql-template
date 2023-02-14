# ប្រពន្ធគ្រប់គ្រងការលក់ទំនិញគ្រប់ប្រភេទ

ខាងក្រោមនេះ ជាការចាប់ផ្ដើមបង្កើតគម្រោងពីចំណុចចាប់ផ្ដើមទៅ៖

## I. បង្កើតគម្រោងជាមួយ React.js ថ្មីមួយ
```
npx create-react-app ecommerce-react-ui
cd ecommerce-react-ui
npm start
```

## II. រចនាសម្ព័ន្ធ
```
├───node_modules
├───public
└───src
    ├───CustomerPage
    └───HomePage
```

## III. កំណត់រចនាសម្ព័ន្ធផ្លូវប្រតិកម្ម
```
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
```