import "./App.css";
import Layout from "./compopnents/Layout/Layout";
import Footer from "./compopnents/Footer/Footer";
import Navbar from "./compopnents/Nav-bar/Navbar";
import Main from "./Pages/Main/Main";
function App() {
  return (
    <div className="App" style={{ maxWidth: '100vw' }}>
      <header>
        <Layout />
      </header>
      <main className="App-main">
        <Navbar/>
        <Main/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
