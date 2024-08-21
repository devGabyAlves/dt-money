import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Transactions } from './src/pages/Transactons';
import { PasswordRecovery } from './src/pages/Login/passwordRecovery';
import { Login } from './src/pages/Login/index';
import { Register } from './src/pages/Login/register'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Transactions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
