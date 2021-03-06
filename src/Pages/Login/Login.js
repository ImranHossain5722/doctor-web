import React, { useEffect } from "react";
import auth from "../../firebase.init";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Lodaing/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";


const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(user || googleUser)

useEffect(()=>{

  if (token){
    navigate(from, { replace: true });
  }
},[token,from,navigate])


  const onSubmit = (data) => {

    signInWithEmailAndPassword(data.email, data.password);
  };

  if (loading || googleLoading) {
    return <Loading />;
  }

  let loginError;

  if (error || googleError) {
    loginError = (
      <p className="text-red-500">{error?.message || googleError?.message}</p>
    );
  }
  

  return (
    <div className=" flex h-screen justify-center items-center">
      <div className="card w-96 bg-white text-primary-content drop-shadow-2xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-4xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },

                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Provide Valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-400">
                    {errors.email.message}
                  </span>
                )}

                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-400">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-400">
                    {errors.password.message}
                  </span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-400">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {loginError}
            <input
              className="btn btn-outline w-full max-w-xs "
              type="submit"
              value="Login"
            />
          </form>
          <p className="pt-3 text-xs text-center">
            New to Doctors Web{" "}
            <Link className="text-secondary" to="/signUp">
              Create New Account
            </Link>{" "}
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-secondary"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
