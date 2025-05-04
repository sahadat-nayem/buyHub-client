import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginLottieData from "../../src/assets/Animation - 1734900836147.json";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, setUser, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    setFirebaseError("");
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;

        updateUserProfile({
          displayName: data.name,
          photoURL: data.photo,
        });

        const userInfo = {
          name: data.name,
          email: data.email,
        };

        axios
          .post("http://localhost:5000/api/user", userInfo)
          .then((res) => {
            if (
              res.data.insertedId ||
              res.data.message === "User already exists"
            ) {
              reset();
              toast.success("Account created successfully!");
              setIsSubmitted(true);
            }
          })
          .catch((error) => {
            console.log("Database error:", error);
          });
      })
      .catch((error) => {
        console.log("Firebase error:", error.message);
        setFirebaseError(error.message);
      });
  };

  useEffect(() => {
    if (isSubmitted) {
      navigate("/");
    }
  }, [isSubmitted, navigate]);

  const handleGoogleSignIn = () => {
    setFirebaseError("");
    signInWithGoogle()
      .then((result) => {
        setUser(result);
        toast.success("SignUp successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Google sign in error:", error);
        setFirebaseError(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>BuyHub | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <Lottie animationData={loginLottieData} loop />
          </div>

          <div className="card md:w-1/2 max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Enter password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Must be more than 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Must include upper, lower, number, and special character
                  </p>
                )}
              </div>

              {firebaseError && (
                <p className="text-red-600 text-sm">{firebaseError}</p>
              )}

              <div className="space-y-4 mt-4">
                <button
                  type="submit"
                  className="btn w-full bg-black text-white hover:bg-gray-800"
                >
                  Sign Up
                </button>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-info rounded-none w-full"
                >
                  <span className="text-xl">
                    <FcGoogle />
                  </span>{" "}
                  Sign in with Google
                </button>
              </div>

              <p className="text-black text-center font-semibold mt-4">
                Already registered?{" "}
                <Link className="font-bold text-red-500" to="/login">
                  Go to log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
