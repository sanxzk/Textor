import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
 
function App() {
  return (
    <>
    <Navbar title = "Textor"/>
    {/* <Navbar/> */}
    {/* <Navbar title="Textor"/> */}

    {/* <Textform/> */}
    <div className="container my.3">
      <Textform heading = "Enter the text"/>
      <About/>
    </div>
   </> 
  );
}

export default App;
