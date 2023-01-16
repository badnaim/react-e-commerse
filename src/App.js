import "./styles/App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Main />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
