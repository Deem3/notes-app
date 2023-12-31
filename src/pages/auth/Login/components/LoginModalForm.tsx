import {
  Button,
  FormControl,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Form } from 'components';
import { usePost } from 'hooks';
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { LoginPage } from 'translations';
import { LoginFormValues, LoginModalFormProps } from '../model';

const LoginModalForm: FunctionComponent<LoginModalFormProps> = ({ isOpen, onClose }) => {
  const { handleSubmit, register } = useForm<LoginFormValues>();
  const mutation = usePost<LoginFormValues>({
    url: '/api/auth/login',
    redirectUrl: '/',
  });
  const onSubmit = (values: LoginFormValues) => {
    mutation.mutate(values);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading>{LoginPage.login}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form flexDirection="column" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Input
                type="email"
                placeholder="email"
                {...register('email', { required: { value: true, message: 'email is required' } })}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                placeholder="password"
                {...register('password', {
                  required: { value: true, message: 'password is required' },
                })}
              />
            </FormControl>
            <Button type="submit">{LoginPage.login}</Button>
          </Form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default LoginModalForm;
