import { HashLoader } from "react-spinners";


const LoadingPage = () => {
    return (
        <div className='flex items-center justify-center min-h-screen min-w-screen'>
      <HashLoader
        color='000000'
        loading={true}
        size={80}     
      />
    </div>
    );
};

export default LoadingPage;