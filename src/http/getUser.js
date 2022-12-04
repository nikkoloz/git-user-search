import axios from "axios";

async function getUser(name, setGetUserError, setLoading) {
    setLoading(true)
    try {
        const response = await axios.get(`https://api.github.com/users/${name}`);
        return response.data;
    } catch (error) {
        if (error.response) setGetUserError({ error: true, message: error.response.data.message })
        else if (error.message === "Network Error") setGetUserError({ error: true, message: error.message })
        throw new Error(error)
    }
}

export default getUser;