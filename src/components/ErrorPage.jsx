import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="">
            <img className="mx-auto max-w-96" src="https://i.ibb.co.com/0jtPcTmQ/404.gif" alt="" />
            <h2 className="text-5xl font-bold text-center">Page not found</h2>
            <Link to="/" className="btn glass bg-black text-black mt-10 relative left-44 md:left-[410px] lg:left-[610px]">Home</Link>
        </div>
    );
};

export default ErrorPage;