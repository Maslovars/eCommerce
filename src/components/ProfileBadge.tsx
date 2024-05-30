import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { setLoggedIn } from '../store/user/userSlice.ts';
import Toast from './Toast.tsx';
import { useOutsideClick } from '../hooks';
import { useEffect, useState } from 'react';

const ProfileBadge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { email } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const { ref, isActive, setIsActive } = useOutsideClick(false);

  useEffect(() => {
    setIsActive(isOpen);
  }, [isOpen]);

  const signOut = () => {
    localStorage.removeItem('ePassword');
    localStorage.removeItem('eEmail');
    dispatch(setLoggedIn());
    Toast({ message: 'You have successfully logged out', status: 'success' });
  };

  return (
    <>
      <div
        className="cursor-pointer relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      {isActive && (
        <div
          ref={ref}
          id="userDropdown"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 top-16"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate">{email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
          <div className="py-1" onClick={signOut}>
            <span className=" cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Sign out
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileBadge;
