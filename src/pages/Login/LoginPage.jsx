
// import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link,useNavigate  } from 'react-router';
// import GoogleLogin from '../components/login-registration/GoogleLogin';
import useAuth from './../../hooks/useAuth';
import GoogleLogin from './GoogleLogin';


const Login = () => {
  
  const {Login} = useAuth();
  const navigate = useNavigate();
 
  const {register,handleSubmit,formState:{errors},} = useForm()
  const onSub =(data)=>{
    Login(data.email, data.password);
    navigate("/")
  }
  return (
    <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Now!</h1>
    </div>
    <div className="w-full max-w-sm card bg-base-100 shrink-0">
      <form onSubmit={handleSubmit(onSub)} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {
            ...register('email', {required:true})
          } />
          {errors.email && <p className='text-sm font-light text-red-500'>Email is Required</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {
            ...register('password', {required:true, minLength:6,})
          } />
          {errors.password?.type === "required" && ( <p className='text-sm font-light text-red-500'>Password is Required</p>)}
          {errors.password?.type === "minLength" && <p className='text-sm font-light text-red-500'>Password must have at 6 characters</p>}
        </div>
        
        <div className="mt-6 form-control">
          <button type='submit' className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">Login</button>
        </div>
        <GoogleLogin/>
      <p className='my-4 text-sm font-light'>New Here? Please <Link to={"/register"}className='text-primary'>Register Now</Link></p>
      </form>
      
    </div>
  </div>
</div>
  )
}

export default Login