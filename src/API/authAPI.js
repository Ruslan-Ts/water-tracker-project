
import axios from "axios";
export const instance = axios.create({ baseURL: 'https://water-tracker-backend.onrender.com/api' });
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTRmN2MyODQ1MjdmYTk3NmU3NTk5ZiIsImlhdCI6MTcwMDA2NzI2NiwiZXhwIjoxNzAwMTUwMDY2fQ.BqVMTUr1SDPJUJ0dQ138ch7Y1Rk2-hX6MimJ8WaHqKk';
instance.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const updateWaterRate = async (newWaterRate) => {
    const { data } = await instance.patch('/users/water-rate', { waterRate: newWaterRate })
    return data;
}

export const updateAvatar = async (newPhotoFile) => {
    console.log(2);
    const { data: { avatarURL } } = await instance.patch('/users/avatars', newPhotoFile, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return avatarURL;
}

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
    console.log('dataForSend - after', dataForSend);

    const { data } = await instance.patch('/users', dataForSend)
    return data

} 