import { Grid, GridItem } from '@chakra-ui/react';
import { usePost } from 'hooks';
import { useAtom } from 'jotai';
import { userState } from 'state';

export const Header = () => {
  const [currentUser] = useAtom(userState);

  const mutation = usePost({
    url: '/api/auth/logout',
    isSecure: true,
    redirectUrl: '/auth/login',
  });

  return (
    <Grid
      bg="#f1f5f9"
      templateColumns={'repeat(3, 1fr)'}
      boxShadow="xs"
      h={20}
      justifyItems={'center'}
      alignItems={'center'}
    >
      <GridItem>My Note</GridItem>
      <GridItem>{currentUser?.userName}</GridItem>
      <GridItem>
        <button onClick={() => mutation.mutate({})}>Logout</button>
      </GridItem>
    </Grid>
  );
};
