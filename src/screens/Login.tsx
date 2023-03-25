import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {LoginSchema, loginSchema} from "@/libs/validations/login";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import BaseLayout from "@/components/BaseLayout";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    console.log(data);
    const res = await login(data);
    if (res) {
      navigate("/dashboard");
    }
  };

  async function login(data: LoginSchema): Promise<boolean> {
    // return new Promise(resolve => setTimeout(() => {resolve(true)}, 1000));
    return await fetch('http://10.2.150.92:5000/auth/signin', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
        .then(response => {
          console.log('header', response.headers);
          if(response.status === 200) {
            return response.json()
          } else {
            return false;
          }

        }).then(response => {
          console.log('res', response)
          if (response) {
            sessionStorage.setItem('userToken', response.access_token);
            return true;
          }
          alert('user/password incorrect');
          return false;
        }).catch(error => {
          console.error('Error:', error);
          return false;
        });
  }

  return (
    <BaseLayout>
      <div className="flex justify-center items-center h-screen px-8">
        <div className="max-w-sm w-full">
          <div className="text-center text-purple">
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="opacity-80 mt-5">Sign in to continue</p>
          </div>
          <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col space-y-3">
              <div>
                <input
                  className="bg-grey text-clay px-4 py-3 w-full rounded-lg placeholder:text-clay focus:outline-none focus:border-0 focus:ring-1 focus:ring-lightpurple"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-2 text-red-600 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  className="bg-grey text-clay px-4 py-3 w-full rounded-lg placeholder:text-clay focus:outline-none focus:border-0 focus:ring-1 focus:ring-lightpurple"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="mt-2 text-red-600 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="text-right mt-4 text-purple opacity-80 text-xs">
              <p>Forgot Password?</p>
            </div>
            <button
              type="submit"
              className="py-3 px-4 mt-12 w-full text-center bg-lightpurple text-white font-bold rounded-lg"
            >
              Sign in
            </button>
            <p className="text-center text-purple opacity-80 mt-4">
              Don't have an account? -{" "}
              <Link to="/register" className="font-bold">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Login;
