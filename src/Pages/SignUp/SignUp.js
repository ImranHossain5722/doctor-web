import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle,useSignInWithEmailAndPassword  } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Lodaing/Loading";
import { Link } from "react-router-dom";


const SignUp = () => {
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

  const onSubmit = (data) => {
    console.log(data);

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
  if (googleUser) {
    console.log(user);
  }
  return (
    <div className=" flex h-screen justify-center items-center">
      <div className="card w-96 bg-white text-primary-content drop-shadow-2xl">
        <div class="card-body">
          <h2 className="text-center font-bold text-4xl">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
            {/* for Name field */}
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered w-full max-w-xs"
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
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-400">
                    {errors.email.message}
                  </span>
                )}

                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-400">
                    {errors.email.message}
                  </span>
                )}
              </label>
              {/* for email */}
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
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
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-400">
                    {errors.email.message}
                  </span>
                )}

                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-400">
                    {errors.email.message}
                  </span>
                )}
              </label>
                {/* for password */}
              <label class="label">
                <span class="label-text">Password</span>
              </label>

              <input
                type="password"
                placeholder="Your Password"
                class="input input-bordered w-full max-w-xs"
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
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-400">
                    {errors.password.message}
                  </span>
                )}

                {errors.password?.type === "minLength" && (
                  <span class="label-text-alt text-red-400">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {loginError}
            <input
              className="btn btn-outline w-full max-w-xs "
              type="submit"
              value="Sign Up"
            />
          </form>
          <p className="pt-3 text-xs text-center">
          Already have a Account? <Link className="text-secondary" to="/login">
              Login Please
            </Link>
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

export default SignUp;
