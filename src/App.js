import {Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import Liste from "./Pages/Liste/Liste";
import Scroll from "./Pages/Scroll/Scroll";
import StateAnim from "./Pages/StateAnim/StateAnim";


function App() {
  return (
      <div className="global-container">
        <Navbar />
        <Routes>
          <Route path='/' element={<Liste />} />
          <Route path='/scroll' element={<Scroll />} />
          <Route path='/stateanim' element={<StateAnim />} />
         
        </Routes>

      </div>

  );
}

export default App;
