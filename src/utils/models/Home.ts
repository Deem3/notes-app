import { ResponseGetAllNotes, RestCreateNote } from '@utils/api';
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface NoteFormProps {
  register: UseFormRegister<RestCreateNote>;
  handleSubmit: UseFormHandleSubmit<RestCreateNote>;
  formClick: SubmitHandler<RestCreateNote>;
}

export interface NoteTableProps {
  note: ResponseGetAllNotes | undefined;
}
