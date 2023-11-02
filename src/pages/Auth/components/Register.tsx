import { RegisterProps } from '@libs/models';
import { Button, TextFieldInput } from '@radix-ui/themes';
import { SiCoffeescript } from 'react-icons/si';

export const Register: React.FC<RegisterProps> = (props) => {
  const { register, handleSubmit, formClick, isLoading, setPage } = props;
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(formClick)}
        className="bg-white w-[25%] h-[45%] [&>*]:w-[70%] [&>*]:my-2 flex flex-col justify-center items-center rounded-xl shadow-md"
      >
        <div className="flex items-center w-full justify-center gap-2 pb-12">
          <SiCoffeescript className="h-7 w-7 text-[#3e63dd]" />
          <p className="font-lobster text-2xl text-[#3e63dd]">Register</p>
        </div>
        <TextFieldInput
          type="text"
          placeholder="firstname"
          {...register('firstName', { required: true })}
        />
        <TextFieldInput
          type="text"
          placeholder="lastname"
          {...register('lastName', { required: true })}
        />
        <TextFieldInput
          type="email"
          placeholder="email"
          {...register('email', { required: true })}
        />
        <TextFieldInput
          type="password"
          placeholder="password"
          {...register('password', { required: true })}
        />
        <Button>{isLoading ? 'loading' : 'register'}</Button>
        <p className="text-center cursor-pointer" onClick={() => setPage(true)}>
          to login
        </p>
      </form>
    </div>
  );
};
