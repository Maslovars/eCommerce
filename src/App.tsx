import { Route, Routes } from 'react-router-dom';
import { SignIn, Main, EmptyPage, RegistrationPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<RegistrationPage />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<EmptyPage />} />
    </Routes>
  );
}

export default App;
