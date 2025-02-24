
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './assets/background.css'



createRoot(document.getElementById('root')).render(
    <div>
         <App />
         <div className = "wave"> </div>
         <div className = "wave"> </div>
         <div className = "wave"> </div>
    </div>
)
