import { Route, Routes } from 'react-router-dom';
import { SignIn, Main, EmptyPage, RegistrationPage } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import CardPreview from './components/CardPreview';

function App() {
  return (
    // <CardPreview />
    <>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<RegistrationPage />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
