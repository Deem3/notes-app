import axios from 'axios';
import { useAtom } from 'jotai';
import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import { userState } from 'state';

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useAtom(userState);
  const token = Cookies.get('token');
  useQuery({
    queryKey: ['user'],
    queryFn: () => {
      axios
        .get('/api/user', {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setCurrentUser(res.data);
        });
    },
    enabled: !!(token && !currentUser),
  });
};
