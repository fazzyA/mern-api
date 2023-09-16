import './App.css';
import Books from './components/Books';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Add from './components/Add';

function App() {
  return (
    <>
    <Header />
    <Books />
    <Add />
    </>
  );
}

export default App;
