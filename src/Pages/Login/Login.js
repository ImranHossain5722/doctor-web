import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user){

        console.log(user);
    }
  return (
    <div className=" flex h-screen justify-center items-center">
      <div className="card w-96 bg-white text-primary-content drop-shadow-2xl">
        <div class="card-body">
          <h2 className="text-center font-bold text-4xl">Login</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary">Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
