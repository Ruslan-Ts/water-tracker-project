import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://water-tracker-backend.onrender.com/api',
});

const setToken = token => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
};

const removeToken = () => {
    delete instance.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
};


// Authorization api starts here

export const signup = async body => {
    const { data } = await instance.post('/auth/signup', body);
    setToken(data.token);
    return data;
};

export const signin = async body => {
    const { data } = await instance.post('/auth/signin', body);
    setToken(data.token);
    return data;
};

export const logout = async () => {
    await instance.post('auth/logout');
    removeToken();
};

// export const refresh = async () => {
//   const { data } = await instance.get('/users/current');
//   return data;
// };

export const refreshUser = async token => {
    setToken(token);
    const { data } = await instance.get('/users/current');
    return data;
};

// Authorization api ends here

export const updateWaterRate = async newWaterRate => {
    const { data } = await instance.patch('/users/water-rate', {
        waterRate: newWaterRate,
    });
    return data;
};

export const updateAvatar = async newPhotoFile => {
    console.log(2);
    const {
        data: { avatarURL },
    } = await instance.patch('/users/avatars', newPhotoFile, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return avatarURL;
};

export const updateUserProfile = async (newUserProfile) => {
    const dataForSend = {};
    const entries = Object.entries(newUserProfile);
    entries.forEach(([key, value]) => {
        if (value) {
            dataForSend[key] = value;
        }
    });
    console.log('dataForSend', dataForSend);
    if (!dataForSend.newPassword) {
        delete dataForSend.oldPassword;
    }


    const { data } = await instance.patch('/users', dataForSend)
    return data

} 