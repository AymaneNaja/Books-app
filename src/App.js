
import Nav from "./components/NavBar/Nav";
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/HOME/Home";
import Book from "./components/Book/Book";
import Favorites from "./components/Favorites/Favorites";
import Footer from "./components/Footer/Footer";
import SearchResults from "./components/NavBar/SearchResults";
import { SearchProvider } from "./Contexts/SearchContext";


function App(){


return (
    <div className="">
    <SearchProvider>
       <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} exact></Route>
                <Route path="/
Books-app/" element={<Home/>} exact></Route>
                <Route path="/book/:id" element={<Book/>} exact></Route>
                <Route path="/favorites" element={<Favorites/>} exact></Route>
                <Route path="/Search/:title" element={<SearchResults/>} exact></Route>
            </Routes>
       <Footer/>
       </Router>
    </SearchProvider>
    </div>
    );
}

export default App;
