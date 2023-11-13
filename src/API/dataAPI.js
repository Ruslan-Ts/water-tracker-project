// import { instance } from './authAPI'
import axios from "axios";
export const instance = axios.create({ baseURL: 'https://water-tracker-backend.onrender.com/api' });
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTI2OWY2MDA2MWNiNjIwOGQ4YTJlNyIsImlhdCI6MTY5OTg5OTg5NCwiZXhwIjoxNjk5OTgyNjk0fQ.XkTHu4AnZIPgJex96HbAYrmj_2qayIq8yAQo71b-h38';
instance.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const updateWaterRate = async (newWaterRate) => {
    const { data } = await instance.patch('/users/water-rate', { waterRate: newWaterRate })
    return data;
}

export const updateAvatar = async (newPhotoFile) => {
    const { data: { avatarURL } } = await instance.patch('/users/avatars', newPhotoFile, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return avatarURL;
}

export const updateUserProfile = async (newPhotoFile) => {
    const { data: { avatarURL } } = await instance.patch('/users/avatars', newPhotoFile, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return avatarURL;
} 