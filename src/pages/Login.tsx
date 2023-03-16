import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LoginSchema, loginSchema } from "@/validations/login";
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
    <div>
      <div>
        <h1>Welcome Back!</h1>
        <p>Sign in to continue</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <p>Forgot Password?</p>
        </div>
        <button type="submit" disabled={isSubmitting}>
          Sign in
        </button>
        <p>
          Don't have an account? - <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
