import { Route, Routes } from 'react-router-dom';
import { SignUp, Main, EmptyPage, RegistrationPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/signIn" element={<SignUp />} />
      <Route path="/signUp" element={<RegistrationPage />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<EmptyPage />} />
    </Routes>
  );
}

export default App;
