export interface CreateNoteFormDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}

export interface CreateNoteFormValues {
  title: string;
  content: string;
}
