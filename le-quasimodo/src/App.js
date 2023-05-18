import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cardapio from './pages/Cardapio';
import { AuthProvider } from './context/AuthContext';
import ReceitaBacon from './pages/ReceitaBacon';
import ReceitaPeperoni from './pages/ReceitaPeperoni';
import ReceitaQueijo from './pages/ReceitaQueijo';
import ReceitaCalabresa from './pages/ReceitaCalabresa';
import PrivateRoute from './routes/private-route';
import Admin from './pages/Admin';
import AddProdutos from './pages/AddProdutos';

function App() {
  return (
    <>
    <AuthProvider>
      <Header/>
            <Routes>
              <Route path='/' element={
                <PrivateRoute>
                  <Home/>
                </PrivateRoute>
            }/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/receitaBacon' element={<ReceitaBacon/>}/>
              <Route path='/receitaPeperoni' element={<ReceitaPeperoni/>}/>
              <Route path='/receitaQueijo' element={<ReceitaQueijo/>}/>
              <Route path='/receitaCalabresa' element={<ReceitaCalabresa/>}/>
              <Route path='/cardapio' element={<Cardapio/>}/>
              <Route path='/admin' element={
                <PrivateRoute>
                  <Admin/>
                </PrivateRoute>
            }/>
            <Route path='/novo-produto' element={
                <PrivateRoute>
                  <AddProdutos/>
                </PrivateRoute>
            }/>
            </Routes>
      <Footer/>
    </AuthProvider>
    </>
  );
}

export default App;
