import { GetUserApi, RestCreateUser, RestGetUser } from "@utils/api";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login";
import { Register } from "./components/Register";

const AuthContainer: React.FC = () => {
  const navigate = useNavigate();
  const { register: loginRegister, handleSubmit: handleLoginSubmit } = useForm<RestGetUser>();
  const { register, handleSubmit: handleRegisterSubmit } = useForm<RestCreateUser>();
  const [page, setPage] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerFormClick: SubmitHandler<RestCreateUser> = (data) => {
    setIsLoading(true);
    new GetUserApi().createUser({
      restCreateUser: data
    }, { withCredentials: true }).then((res) => {
      if (res.data.data) {
        setIsLoading(false);
        navigate('/');
      }
    })
  }

  const loginFormClick: SubmitHandler<RestGetUser> = (data) => {
    setIsLoading(true);
    new GetUserApi().getUser({
      restGetUser: data
    }, { withCredentials: true }).then((res) => {
      if (res.data.data) {
        setIsLoading(false);
        navigate('/');
      }
    });
  };

  const handlePageChange = (newPage: boolean) => {
    setPage(newPage);
    console.log(page)
  }

  return (
    <>
      {page ? (
        <Login
          register={loginRegister}
          handleSubmit={handleLoginSubmit}
          formClick={loginFormClick}
          isLoading={isLoading}
          setPage={handlePageChange}
        />
      ) : (
        <Register
          register={register}
          handleSubmit={handleRegisterSubmit}
          formClick={registerFormClick}
          isLoading={isLoading}
          setPage={handlePageChange}
        />
      )}
    </>
  );
}
export default AuthContainer;
