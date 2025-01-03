import { Link } from "react-router";
// import useAuth from './../hooks/useAuth';
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

// import GoogleLogin from '../components/login-registration/GoogleLogin';
// import axios from 'axios';
// import Swal from 'sweetalert2';

const Register = () => {
  const { CreateUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSub = (data) => {
    const email = data.email;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishList = [];
    const userData = { email, role, status, wishList };
    console.log(userData);
    CreateUser(data.email, data.password).then(() => {
      axios.post("http://localhost:4000/users", userData).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/");
      });
    });
    //
    // console.log(userData)
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
        </div>
        <div className="w-full max-w-sm card bg-base-100 shrink-0">
          <form onSubmit={handleSubmit(onSub)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-sm font-light text-red-500">
                  Email is Required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  validate: {
                    hasUppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password must include at least one uppercase letter.",
                    hasLowercase: (value) =>
                      /[a-z]/.test(value) ||
                      "Password must include at least one lowercase letter.",
                    hasNumber: (value) =>
                      /[0-9]/.test(value) ||
                      "Password must include at least one number.",
                    hasSpecialChar: (value) =>
                      /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                      "Password must include at least one special character.",
                  },
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-sm font-light text-red-500">
                  Password is Required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-sm font-light text-red-500">
                  Password must have at 8 characters
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Your Password Do not match!";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="text-sm font-light text-red-500">
                  Both Password Must Match
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                className="w-full max-w-xs select select-bordered"
                {...register("role", { required: true })}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              {errors.role && (
                <p className="text-sm font-light text-red-500">
                  You Have Must Select a Role
                </p>
              )}
            </div>
            <div className="mt-6 form-control">
              <button
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                type="submit"
              >
                Register
              </button>
            </div>

            {/* <GoogleLogin/> */}

            <p className="my-4 text-sm font-light">
              Allready Have an account? Please{" "}
              <Link to={"/login"} className="text-primary">
                Login Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
