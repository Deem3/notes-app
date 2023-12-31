import { useToast as chakraUseToast, UseToastOptions } from '@chakra-ui/react';

export const Toast = () => {
  const toast = chakraUseToast();

  const showToast = (options: UseToastOptions) => {
    toast({
      position: 'top',
      duration: 3000,
      isClosable: true,
      ...options,
    });
  };

  return showToast;
};
