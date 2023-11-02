import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { RestCreateUser, RestGetUser } from '../api/api';

export interface LoginProps {
  register: UseFormRegister<RestGetUser>;
  handleSubmit: UseFormHandleSubmit<RestGetUser>;
  formClick: SubmitHandler<RestGetUser>;
  isLoading: boolean;
  setPage: (newPage: boolean) => void;
}
export interface RegisterProps {
  register: UseFormRegister<RestCreateUser>;
  handleSubmit: UseFormHandleSubmit<RestCreateUser>;
  formClick: SubmitHandler<RestCreateUser>;
  isLoading: boolean;
  setPage: (newPage: boolean) => void;
}
