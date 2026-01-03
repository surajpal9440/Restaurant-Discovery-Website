
import ReactDOM from "react-dom/client";
import Restaurants from "./component/restaurant"
import { BrowserRouter } from "react-router";
import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./Home";
import RestaurantMenu from "./component/RestaurantMenu";
function App() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurants" element={<Restaurants></Restaurants>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
