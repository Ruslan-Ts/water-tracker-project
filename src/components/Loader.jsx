import { createPortal } from 'react-dom';
import { RotatingLines } from 'react-loader-spinner';
import theme from '../CommonStyle/theme.jsx';

const loader = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <div className="LoaderWr">
      <div className="LoaderWrCon">
        <RotatingLines
          strokeColor={`${theme.colors.primaryAccent}`}
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </div>,
    loader
  );
};
export default Loader;
