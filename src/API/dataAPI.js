import { instance } from './authAPI';

export const addWaters = async newWaterUsed => {
  console.log(newWaterUsed)
  const { data } = await instance.post('/water', newWaterUsed);
  return data;
};

export const deleteEntry = async waterId => {
  const { data } = await instance.delete(`/water/${waterId}`);
  return data;
};
