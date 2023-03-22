import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LoginSchema, loginSchema } from "@/libs/validations/login";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-5">
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
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <input
                className="bg-grey text-clay px-4 py-3 w-full rounded-lg placeholder:text-clay focus:outline-none focus:border-0 focus:ring-1 focus:ring-lightpurple"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
          </div>
          <div className="text-right mt-4 text-purple opacity-80 text-xs">
            <p>Forgot Password?</p>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
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
  );
};

export default Login;
