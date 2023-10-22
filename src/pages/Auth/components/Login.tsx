import { Button, TextFieldInput } from "@radix-ui/themes";
import { LoginProps } from "@utils/models";
import { SiCoffeescript } from 'react-icons/si';

const Login:React.FC<LoginProps> = (props) => {
  const {register, handleSubmit, formClick, isLoading, setPage} = props
  

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(formClick)} className="bg-white w-[25%] h-[40%] [&>*]:w-[70%] [&>*]:my-2 flex flex-col justify-center items-center rounded-xl shadow-md">
        <div className="flex items-center w-full justify-center gap-2 pb-12">
          <SiCoffeescript className="h-7 w-7 text-[#3e63dd]"/>
          <p className="font-lobster text-2xl text-[#3e63dd]">Signin</p>
        </div>
        <TextFieldInput type="email" placeholder="email" {...register('email', {required: true})} />
        <TextFieldInput type="password" placeholder="password" {...register('password', {required: true})}/>
        <Button>{isLoading ? "loading" : "Login"}</Button>
        <p className="text-center cursor-pointer" onClick={()=>setPage(false)}>to register</p>
      </form>
    </div>
  )
}

export default Login;