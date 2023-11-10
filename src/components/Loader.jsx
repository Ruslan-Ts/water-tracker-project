import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <Circles
        height="80"
        width="80"
        color="blue"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
