import "./scss/App.scss";
import Bigpart from "./component/Bigpart";
import NavBar from "./component/NavBar";
import Photopart from "./component/Photopart";
import Section from "./component/Section";
function App() {
  return (
    <div className="App">
      <header className="head">
          
          <NavBar/>
          <Section/>
      
      </header>
      <Bigpart/>
      <Photopart/>
       
    </div>

  );
}

export default App;
