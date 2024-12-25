
import useAuth from './../../hooks/useAuth';

const Overview = () => {
    const {user} = useAuth();
    console.log(user)
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <h2 className='text-xl text-center font bold'>{user.email}</h2>
        </div>
    );
};

export default Overview;