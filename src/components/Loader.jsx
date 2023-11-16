import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
      }}
    >
      <Circles
        height="50"
        width="50"
        color="#9ebbff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
