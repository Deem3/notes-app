import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from '@chakra-ui/react';
import { Form } from 'components';
import { usePost } from 'hooks';
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { CreateNoteFormDrawerProps, CreateNoteFormValues } from '../model';

const CreateNoteFormDrawer: FunctionComponent<CreateNoteFormDrawerProps> = (props) => {
  const { handleSubmit, register } = useForm<CreateNoteFormValues>();

  const mutation = usePost<CreateNoteFormValues>({
    url: '/api/note/',
    isSecure: true,
    invalidateKey: ['notes'],
  });

  const onSubmit = (values: CreateNoteFormValues) => {
    mutation.mutate(values);
    props.onClose();
  };

  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      finalFocusRef={props.btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your note</DrawerHeader>

        <DrawerBody>
          <Form flexDirection={'column'}>
            <Input placeholder="Title" {...register('title')} />
            <Input placeholder="Description" {...register('content')} />
          </Form>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={props.onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default CreateNoteFormDrawer;
