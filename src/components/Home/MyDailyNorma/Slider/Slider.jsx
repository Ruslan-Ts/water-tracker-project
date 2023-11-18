import { RangeSlider } from './Slider.styled';

export const Slider = () => {
  const marks = [
    {
      value: 0,
      label: '0°%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 100,
      label: '100°%',
    },
  ];
  function valuetext(value) {
    return `${value}%`;
  }
  function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
  }

  return (
    <>
      <div>
        <p>Today</p>
        <div>
          <RangeSlider
            type="range"
            aria-label="Restricted values"
            defaultValue={50}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            marks={marks}
          />
        </div>
      </div>
    </>
  );
};
