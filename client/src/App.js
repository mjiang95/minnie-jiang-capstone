import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNav from './components/PageNav/PageNav';
import Home from '../src/pages/Home/Home';
import PageNavScroll from "./components/PageNavScroll/PageNavScroll.jsx";

function App(){
    return (
        <BrowserRouter>
         <section>
             <PageNav />
             <PageNavScroll />
             <Route path= "/" exact component= {Home} />
             {/* <Route path= "/:characterId/comics" component = {Comics} /> */}
             {/* <Route path= "/:characterId/series" component = {Series}/> */}
         </section>
        </BrowserRouter>
    )
}

export default App;
