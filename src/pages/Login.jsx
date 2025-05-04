import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLottieData from "../../src/assets/Login - 1734906953737.json";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success("Login successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result);
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        setError({ ...error, login: error.code });
      });
  };

  return (
    <>
      <Helmet>
        <title>BuyHub | Login</title>
      </Helmet>
      <div className="min-h-screen flex justify-center items-center bg-white px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 w-full max-w-6xl">
          {/* Animation */}
          <div className="w-full max-w-md">
            <Lottie animationData={loginLottieData} loop={true} />
          </div>

          <div className="w-full max-w-md bg-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-6">
              Login your account
            </h2>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered bg-gray-100 w-full"
                  required
                />
              </div>

              <div className="flex flex-col relative">
                <label className="text-sm font-medium mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered bg-gray-100 w-full"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-10 text-gray-600"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
                {error.login && (
                  <p className="text-xs text-red-600 mt-1">
                    Incorrect email or password.
                  </p>
                )}
                <div className="text-right mt-2">
                  <a href="#" className="text-sm text-red-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="btn w-full bg-black text-white hover:bg-gray-800"
                >
                  Login
                </button>

                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-info rounded-none w-full"
                >
                  <span className="text-xl">
                    <FcGoogle />
                  </span>{" "}
                  Sign in with Google
                </button>
              </div>
            </form>

            <p className="text-center text-sm font-medium mt-6">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-red-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
