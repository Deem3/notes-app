import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { ResponseGetAllNotes, RestCreateNote } from 'src/libs/api';

export interface NoteFormProps {
  register: UseFormRegister<RestCreateNote>;
  handleSubmit: UseFormHandleSubmit<RestCreateNote>;
  formClick: SubmitHandler<RestCreateNote>;
}

export interface NoteTableProps {
  note: ResponseGetAllNotes | undefined;
}
