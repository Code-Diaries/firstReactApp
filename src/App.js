import "./scss/App.scss";
import bigpart from "./component/bigpart";
import navbar from "./component/navbar";
import photopart from "./component/photopart";
import section from "./component/section";
function App() {
  return (
    <div className="App">
      <header className="head">
          
          <navbar/>
          <section/>
      
      </header>
      <bigpart/>
      <photopart/>
       
    </div>

  );
}

export default App;
