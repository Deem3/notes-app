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
import { RegisterPage } from 'translations';
import { RegisterFormValues, RegisterModalFormProps } from '../model';

const RegisterModalForm: FunctionComponent<RegisterModalFormProps> = ({ isOpen, onClose }) => {
  const { handleSubmit, register } = useForm<RegisterFormValues>();
  const mutation = usePost<RegisterFormValues>({
    url: '/api/auth/register',
    redirectUrl: '/auth/login',
  });

  const onSubmit = (values: RegisterFormValues) => {
    mutation.mutate(values);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading>{RegisterPage.register}</Heading>
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
              <Input type="text" placeholder="user name" {...register('userName')} />
            </FormControl>
            <FormControl>
              <Input type="password" placeholder="password" {...register('password')} />
            </FormControl>
            <Button type="submit">{RegisterPage.register}</Button>
          </Form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default RegisterModalForm;
