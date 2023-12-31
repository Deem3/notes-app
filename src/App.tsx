import { Box } from '@chakra-ui/layout';
import { ProtectedComponent } from 'components';
import { Route, Routes } from 'react-router';
import LoginContainer from './pages/auth/Login/LoginContainer';
import RegisterContainer from './pages/auth/Register/RegisterContainer';
import HomeContainer from './pages/home/HomeContainer';
import { useCurrentUser } from './utils/hooks/useCurrentUser';

function App() {
  useCurrentUser();
  return (
    <Box bg={'#233147'} h="100vh">
      <Routes>
        <Route element={<ProtectedComponent />}>
          <Route path={'/'} element={<HomeContainer />} />
        </Route>
        <Route path={'/auth/login'} element={<LoginContainer />} />
        <Route path={'/auth/register'} element={<RegisterContainer />} />
      </Routes>
    </Box>
  );
}

export default App;
