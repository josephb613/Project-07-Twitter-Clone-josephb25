
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";

// Importez vos feuilles de style
import './style/reset.css';
import './style/App.css';


export default function App() {
  return (
    <Router>
      <Layout>
        <Home />
      </Layout>
  
    </Router>
  );
}
