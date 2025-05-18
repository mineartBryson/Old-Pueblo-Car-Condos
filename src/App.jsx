import React from "react";
import Header from "./components/Header";  // Import the header
import Footer from "./components/Footer";  // Import the header
import Home from "./pages/Home"; 


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
