import { Center, Flex } from '@chakra-ui/layout';
import { Button, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RegisterPage } from 'translations';
import RegisterModalForm from './components/RegisterModalForm';

const RegisterContainer = () => {
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
          <Button onClick={registerOnOpen}>{RegisterPage.register}</Button>
          <Link to="/auth/login">login</Link>
        </Flex>
      </Flex>
      <RegisterModalForm isOpen={registerIsOpen} onClose={registerOnClose} />
    </Center>
  );
};

export default RegisterContainer;
