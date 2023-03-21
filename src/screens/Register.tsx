import React, { FC } from "react";
import { Link } from "react-router-dom";
import { RegisterSchema, registerSchema } from "@/libs/validations/register";
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
    <div className="min-h-screen flex justify-center items-center p-5">
      <div className="max-w-sm w-full">
        <div className="text-center text-purple">
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <p className="opacity-80 mt-5">
            Please provide following
            <br />
            details for your new account
          </p>
        </div>
        <form className="mt-[60px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-3">
            <div>
              <input
                className="bg-grey text-clay px-4 py-3 w-full rounded-lg placeholder:text-clay focus:outline-none focus:border-0 focus:ring-1 focus:ring-lightpurple"
                type="text"
                placeholder="Full Name"
                {...register("fullname")}
              />
              {errors.fullname && <p>{errors.fullname.message}</p>}
            </div>
            <div>
              <input
                className="bg-grey text-clay px-4 py-3 w-full rounded-lg placeholder:text-clay focus:outline-none focus:border-0 focus:ring-1 focus:ring-lightpurple"
                type="email"
                placeholder="Email Address"
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
            <div>
              <input
                className="bg-grey text-clay px-4 py-3 w-full rounded-lg placeholder:text-clay focus:outline-none focus:border-0 focus:ring-1 focus:ring-lightpurple"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p>{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <input
              type="checkbox"
              {...register("terms")}
              className="w-6 h-6 accent-lightpurple"
            />
            <label className="text-xs text-purple opacity-80">
              By creating your account you agree with to our Terms and
              Conditions.
            </label>
            {errors.terms && <p>{errors.terms.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-3 px-4 mt-8 w-full text-center bg-lightpurple text-white font-bold rounded-lg"
          >
            Sign up
          </button>
          <p className="text-center text-purple opacity-80 mt-4">
            Have an account? -{" "}
            <Link to="/login" className="font-bold">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
