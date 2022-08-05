import "./scss/App.scss";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Section from "./component/Section";
import Image from "./component/Image";
function App() {
  return (
    <div className="App">
      <header className="head">
        <NavBar />
        <Header />
        <Section />
      <Image />
      </header>
     
    </div>
  );
}

export default App;
