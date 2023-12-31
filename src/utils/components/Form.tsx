import { Flex, FlexProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type FormProps = FlexProps & {
  children?: React.ReactNode;
};

export const Form: FunctionComponent<FormProps> = ({ children, ...FlexProps }) => {
  return (
    <Flex as="form" {...FlexProps}>
      {children}
    </Flex>
  );
};
