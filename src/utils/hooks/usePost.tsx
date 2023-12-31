import axios from 'axios';
import { Toast } from 'components';
import Cookies from 'js-cookie';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

type Props = {
  url: string;
  redirectUrl?: string;
  isSecure?: boolean;
  invalidateKey?: string[];
};

export function usePost<T>(props: Props) {
  const queryClient = useQueryClient();

  const toast = Toast();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (values: T) =>
      axios.post(
        props.url,
        values,
        props.isSecure
          ? {
              headers: {
                Authorization: Cookies.get('token'),
              },
            }
          : undefined,
      ),
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'An error occurred.',
          description: error.response.data.message ?? 'something went wrong',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    },
    onSuccess: () => {
      if (props.redirectUrl) {
        navigate(props.redirectUrl);
      }
      if (props.invalidateKey) {
        props.invalidateKey.forEach((key) => {
          queryClient.invalidateQueries({ queryKey: [key] });
        });
      }
    },
  });
  return mutation;
}
