import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Sidebar from "./components/sidebar/Sidebar";
import Submenu from "./components/submenu/Submenu";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Navigation />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
