export interface RegisterModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface RegisterFormValues {
  email: string;
  userName: string;
  password: string;
}

export interface GuestModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}
