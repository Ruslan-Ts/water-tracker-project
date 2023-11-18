import { instance } from './authAPI';

export const addWaters = async newWaterUsed => {
  console.log(newWaterUsed);
  const { data } = await instance.post('/water', newWaterUsed);
  console.log(data);
  return data;
};

export const deleteEntry = async waterId => {
  await instance.delete(`/water/${waterId}`);
};
