import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://assignment-12-server-phi-opal.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;