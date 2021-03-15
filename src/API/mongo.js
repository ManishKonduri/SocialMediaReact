import axios from 'axios';

export const userRegistration = async (userData) => {
    const resp = async () => {
        const data = await axios.post('https://social-media-backend-node.herokuapp.com/', userData);
        return data;
    }
    return await resp();

}

export const userLogin = async (userData) => {
    const resp = async () => {
        const data = await axios.post("https://social-media-backend-node.herokuapp.com/login", userData);
        return data;
    }
    return await resp();
}

export const userUploadImg = async (userData) => {
    const resp = async () => {
        const data = await axios.post("https://social-media-backend-node.herokuapp.com/home", userData);
        return data;
    }
    return await resp();
}

export const allUserImages = async () => {
    const resp = async () => {
        const data = await axios.get("https://social-media-backend-node.herokuapp.com/imgs");
        return data;
    }
    return await resp();
}

export const likesUpload = async (userData) => {
    const resp = async() => {
        const data = await axios.post("https://social-media-backend-node.herokuapp.com/likes", userData);
        return data;
    }
    return await resp();
}

export const editProfile = async (userData) => {
    const resp = async() => {
        const data = await axios.put("https://social-media-backend-node.herokuapp.com/edit", userData);
        return data;
    }
    return resp();
}

export const updatePage = async (userData) => {
    const resp = async() => {
        const data = await axios.post("https://social-media-backend-node.herokuapp.com/update", userData);
       
        return data;
    }
    return resp();
}