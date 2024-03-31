import { Button } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/common/Home";


import Loader from './components/Loader';
import { useSelector } from 'react-redux';



function App() {
  const { loading } = useSelector(state => state.loader)
  return (
    <>
      {loading && <Loader />}
      <BrowserRouter>
        <Routes>
          {/*Common Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User Routes- */}
          <Route path="/" element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>} />

          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
