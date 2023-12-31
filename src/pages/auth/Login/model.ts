export interface LoginModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface GuestModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}
