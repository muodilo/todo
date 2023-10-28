
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import DisplayItems from './components/DisplayItems';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import {ItemsProvider} from "./context/ItemContext"

function App() {
  return (
    <ItemsProvider>
    <Router>
      <div className="App container-fluid">
          <Routes>
          <Route path='/' element={(
            <div className='con'>
              <Header />
              <TodoForm />
              <DisplayItems /> 
            </div>
          ) } />
            
          
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink/>
      <Footer/>
      </div>
      </Router>
    </ItemsProvider>  
    
  );
}

export default App;
