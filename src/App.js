import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForom from './components/TextForom';
import Alert from './components/Alert'
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      type,
      message
    })
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
      document.title = "TextUtils - Dark Mode"
      showAlert('Dark Mode is enabled.', 'success')
      showAlert('Dark Mode is enabled.', 'success')
      
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light Mode";
      showAlert('Light Mode is enabled.', 'success')
      
    }
    setInterval(()=>{
      setAlert(null);
    },3000) 
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <div className='container my-5'>
    <Alert alert={alert} />
    <Routes>
        <Route path="/" element={<TextForom  heading="Enter the text below to analyze" mode={mode} />} />
        <Route path="about" element={<About />} />     
    </Routes>
     
    </div>
    </BrowserRouter>
    
    </>
  );
}

export default App;
