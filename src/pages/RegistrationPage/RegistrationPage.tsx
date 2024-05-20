import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import {
  IUserSlice,
  emailFill,
  passwordFill,
  nameFill,
} from '../../store/user/userSlice.ts';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

export const RegistrationPage = () => {
  const { email, password, name } = useSelector(
    (state: RootState) => state.user,
  );
  const dispatch = useDispatch();
  // console.log(email, password, name);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSlice>({ mode: 'onTouched' });
  const onSubmit: SubmitHandler<IUserSlice> = (data) => console.log(data);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
            </div>
            <div className="mt-2">
              <input
                id="name"
                type="text"
                required
                value={name}
                {...register('name', {
                  required: 'This field is required',
                  pattern: {
                    value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                    message:
                      'Name must not contain special characters or numbers',
                  },
                })}
                onChange={(e) => {
                  dispatch(nameFill(e.target.value));
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.name && (
                <div className="text-red-500 mt-5">{errors.name.message}</div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                value={email}
                autoComplete="email"
                {...register('email', {
                  required: 'Email is a required field',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email address',
                  },
                })}
                onChange={(e) => {
                  dispatch(emailFill(e.target.value));
                }}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <div className="text-red-500 mt-5">{errors.email.message}</div>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                {...register('password', {
                  required: 'Password is a required field',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long',
                  },
                  validate: {
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) ||
                      'Password must contain at least one uppercase letter',
                    hasLowerCase: (value) =>
                      /[a-z]/.test(value) ||
                      'Password must contain at least one lowercase letter',
                    hasDigit: (value) =>
                      /\d/.test(value) ||
                      'Password must contain at least one digit',
                    hasNoWhitespace: (value) =>
                      /^\S*$/.test(value) ||
                      'Password must not contain leading or trailing whitespace',
                    hasSpecialChar: (value) =>
                      /[!@#$%^&*]/.test(value) ||
                      'Password must contain at least one special character',
                  },
                })}
                onChange={(e) => {
                  dispatch(passwordFill(e.target.value));
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && (
                <div className="text-red-500 mt-5">
                  {errors.password.message}
                </div>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
            <Link to="/signIn" className="block">
              <button
                type="button"
                className="flex mt-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Already have an account? Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
