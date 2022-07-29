import "./scss/App.scss";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Section from "./component/Section";
import Image   from "./component/Image";
function App() {
  return (
    <div classNameName="App">
      <header className="head">
        <NavBar />
        <Header />
      </header>
<Section/>
<Image/>
    </div>
  );
}

export default App;
