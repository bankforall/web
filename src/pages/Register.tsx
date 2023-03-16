import React, { FC } from "react";
import { Link } from "react-router-dom";
import { RegisterSchema, registerSchema } from "@/validations/register";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchema> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <h1>Welcome!</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullname")}
          />
          {errors.fullname && <p>{errors.fullname.message}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <div>
          <input type="checkbox" {...register("terms")} />
          <label>
            By creating your account you agree with to our Terms and Conditions.
          </label>
          {errors.terms && <p>{errors.terms.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Sign up
        </button>
        <p>
          Have an account? - <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
