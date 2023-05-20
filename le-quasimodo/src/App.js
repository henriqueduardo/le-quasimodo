import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import ReceitaBacon from './pages/ReceitaBacon';
import ReceitaPeperoni from './pages/ReceitaPeperoni';
import ReceitaQueijo from './pages/ReceitaQueijo';
import ReceitaCalabresa from './pages/ReceitaCalabresa';
import PrivateRoute from './routes/private-route';
import Admin from './pages/Admin';
import AddProdutos from './pages/AddProdutos';
import EditProduct from './pages/EditarProdutos';
import ProductInfo from './pages/ProdutoInfo';
import Carrinho from './pages/Carrinho';
import PedidoCompleto from './pages/PedidoCompleto';
import NotFound from './pages/NotFound';

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
            <Route path='/product/:id' element={
                <PrivateRoute>
                  <ProductInfo/>
                </PrivateRoute>
            }/>
            <Route path='/product/carrinho' element={
                <PrivateRoute>
                  <Carrinho/>
                </PrivateRoute>
            }/>
            <Route path='/pedido-completo' element={
                <PrivateRoute>
                  <PedidoCompleto/>
                </PrivateRoute>
            }/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/receitaBacon' element={<ReceitaBacon/>}/>
              <Route path='/receitaPeperoni' element={<ReceitaPeperoni/>}/>
              <Route path='/receitaQueijo' element={<ReceitaQueijo/>}/>
              <Route path='/receitaCalabresa' element={<ReceitaCalabresa/>}/>
              <Route path='/*' element={<NotFound/>}/>
              <Route path='/admin' element={
                <PrivateRoute>
                  <Admin/>
                </PrivateRoute>
            }/>
            <Route path='/admin/novo-produto' element={
                <PrivateRoute>
                  <AddProdutos/>
                </PrivateRoute>
            }/>
            <Route path='/admin/editar-produto/:id' element={
                <PrivateRoute>
                  <EditProduct/>
                </PrivateRoute>
            }/>
            </Routes>
      <Footer/>
    </AuthProvider>
    </>
  );
}

export default App;
