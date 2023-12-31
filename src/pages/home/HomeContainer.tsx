import { Button, Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import CreateNoteFormDrawer from './components/CreateNoteFormDrawer';
import NoteTable from './components/NoteTable';

const HomeContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <Grid h="100%" templateRows={'10% 90%'}>
      <GridItem justifySelf="end" alignSelf={'center'}>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          drawer
        </Button>
        <CreateNoteFormDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      </GridItem>
      <GridItem m={10}>
        <NoteTable />
      </GridItem>
    </Grid>
  );
};

export default HomeContainer;
