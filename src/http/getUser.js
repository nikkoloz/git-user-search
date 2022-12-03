import axios from "axios";

async function getUser(name) {
    try {
        const response = await axios.get(`https://api.github.com/users/${name}`);
        return response.data;
    } catch (error) {
        throw new Error("getUserByName");
    }
}

export default getUser;