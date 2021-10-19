import Navbar from '../Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.scss';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
