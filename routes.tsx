import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Transactions } from './src/pages/Transactons';
import { PasswordRecovery } from './src/pages/Login/passwordRecovery';
import { Login } from './src/pages/Login/index';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Transactions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
      </Routes>
    </Router>
  );
}
