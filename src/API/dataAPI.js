// import { instance } from './authAPI'
import axios from "axios";
export const instance = axios.create({ baseURL: 'https://water-tracker-backend.onrender.com/api' });
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTExMGUyMzBhN2Q1N2I0YjZhY2M4ZiIsImlhdCI6MTY5OTgxMTU3OSwiZXhwIjoxNjk5ODk0Mzc5fQ.PSk7L6EbwmhiC1RaVe-7Rfl9Pxq14WYSmBkKdMj897w';
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