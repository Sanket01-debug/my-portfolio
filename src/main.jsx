import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

<<<<<<< Updated upstream
// ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
=======
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

console.log("GA ID =", GA_ID);

ReactGA.initialize(GA_ID);
>>>>>>> Stashed changes

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5-second delay for the loader

    return () => clearTimeout(timer);
  }, []);

  return (
    // <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    // </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);