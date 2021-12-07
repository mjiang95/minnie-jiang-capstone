import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNav from './components/PageNav/PageNav';
import Home from '../src/pages/Home/Home';
import PageNavScroll from "./components/PageNavScroll/PageNavScroll.jsx";
import Comics from "./pages/Comics/Comics";
import Series from "./pages/Series/Series.jsx";
import Dashboard from "./pages/Dashboard/Dashboard";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

function App(){
    return (
        <BrowserRouter>
         <section>
             <PageNav />
             <PageNavScroll />
             <Route path= "/home" exact component= {Home} />
             <Route path= "/character/:characterId" exact component= {Home} />
             <Route path= "/character/:characterId/comics" exact component = {Comics} />
             <Route path= "/character/:characterId/series" exact component = {Series}/>
             <Route path="/" exact component = {Dashboard} />
             <Route path="/signup" exact component = {SignUp} />
             <Route path="/login" exact component = {LogIn} />
         </section>
        </BrowserRouter>
    )
}

export default App;
