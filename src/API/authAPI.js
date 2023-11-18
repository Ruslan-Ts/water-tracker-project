import axios from 'axios';
export const instance = axios.create({
  baseURL: 'https://water-tracker-backend.onrender.com/api',
});
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTM3MWUyNWE0YjJjOWJiZGY3ZWE2OCIsImlhdCI6MTY5OTk2NzQ1OCwiZXhwIjoxNzAwMDUwMjU4fQ.7MX8bzDB6cpSP8_lkfflQXPdftJvL29Jnnv8Av7yiZw';
instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

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

export const updateUserProfile = async newUserProfile => {
  const dataForSend = {};

  const entries = Object.entries(newUserProfile);
  entries.forEach(([key, value]) => {
    if (value) {
      dataForSend[key] = value;
    }
  });
  console.log(dataForSend);
  // const { data: { avatarURL } } = await instance.patch('/users/avatars', newPhotoFile, {
  //     headers: {
  //         'Content-Type': 'multipart/form-data'
  //     }
  // })
  // return avatarURL;

  // email
  // gender
  // name
  // newPassword
  // oldPassword
  // repeatPassword
};

