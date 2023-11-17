import { DailyNorma } from './DailyNorma/DailyNorma';
import { Slider } from './Slider/Slider';
import imgMob from '../../../img/home/img-mob.png';

export const MyDailyNorma = () => {
  return (
    <>
      <DailyNorma />
      <img src={imgMob} alt="" />
      <Slider />
    </>
  );
};
