import { Center, Flex } from '@chakra-ui/layout';
import { Button, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LoginPage } from 'translations';
import LoginModalForm from './components/LoginModalForm';

const LoginContainer = () => {
  const {
    isOpen: registerIsOpen,
    onClose: registerOnClose,
    onOpen: registerOnOpen,
  } = useDisclosure();
  return (
    <Center h="100vh">
      <Flex w="100%" h="35%" direction="column" justifyContent="center" alignItems="center">
        <Flex
          mt="20px"
          w="20%"
          h="50%"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Button onClick={registerOnOpen}>{LoginPage.login}</Button>
          <Link to="/auth/register">register</Link>
        </Flex>
      </Flex>
      <LoginModalForm isOpen={registerIsOpen} onClose={registerOnClose} />
    </Center>
  );
};

export default LoginContainer;
