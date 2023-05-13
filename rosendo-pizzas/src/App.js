import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Receita from './pages/Receita';
import Cardapio from './pages/Cardapio';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
    <AuthProvider>
      <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/receita' element={<Receita/>}/>
              <Route path='/cardapio' element={<Cardapio/>}/>
            </Routes>
      <Footer/>
    </AuthProvider>
    </>
  );
}

export default App;
