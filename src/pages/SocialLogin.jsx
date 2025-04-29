import { FcGoogle } from "react-icons/fc";
// import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    // const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                };
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    });
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <button 
                onClick={handleGoogleSignIn} 
                className="btn btn-outline glass bg-black text-white w-full flex items-center justify-center gap-2"
            >
                <FcGoogle className="text-2xl" /> Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;
