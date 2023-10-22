import { useUserInfo } from '@utils/hooks';
import { userInfoAtom } from '@utils/jotai';
import { useAtom } from 'jotai';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import AuthContainer from './pages/Auth/AuthContainer';
import HomeContainer from './pages/Home/HomeContainer';


const App:React.FC = () => {
  const navigate = useNavigate();
  const token = Cookies.get('token');
  useUserInfo();
  const [userInfo,] = useAtom(userInfoAtom)
  useEffect(() => {
    if (!token) {
      navigate('/auth');
    }
  }, [token, navigate, userInfo]);
  return (
    <div className='bg-gray-100'>
    <Routes>
      <Route path='/auth' element={<AuthContainer/>}/>
      <Route path='/' element={<><Header/><HomeContainer/></>}/>
    </Routes>
    </div>
  );
};
export default App;
