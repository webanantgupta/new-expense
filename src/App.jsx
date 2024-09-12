// import Home from "./pages/Home";
import About from "./pages/About";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Pnf from "./pages/Pnf";
import Counter from "./pages/Counter";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
// import Navbar from "./components/Navbar";
import Expense from "./pages/Expense";
import Effect from "./pages/Effect";
import TrialApi from "./pages/TrialApi";
import Recipe from "./pages/Recipe";
import ViewRecipe from "./pages/ViewRecipe";

function App() {
  return (
    <div className="App">
     <BrowserRouter> 
     {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Recipe/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/expense" element={<Expense/>}/>
        <Route path="/effect" element={<Effect/>}/>
        <Route path="/api" element={<TrialApi/>}/>
        <Route path="/view" element={<ViewRecipe/>}/>




        <Route path="/*" element={<Pnf/>}/>
        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
