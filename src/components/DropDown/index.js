import { useRouter } from 'next/router';
import onClickOutside from 'react-onclickoutside';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'src/features/auth/authSlice';

function Dropdown({ hideDropDown }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const router = useRouter();
  Dropdown.handleClickOutside = hideDropDown;
  return (
    <div className='font-medium w-36 bg-white text-sm rounded shadow overflow-hidden border border-gray-100'>
      {user && user?.admin && (
        <div
          className='dropDownOption border-b border-gray-200'
          onClick={() => router.push('/admin/dashboard')}
        >
          Dashboard
        </div>
      )}
      <div
        className='dropDownOption border-b border-gray-200'
        onClick={() => router.push('/account')}
      >
        Profile
      </div>

      <div
        className='dropDownOption border-b border-gray-200'
        onClick={() => router.push('/orders')}
      >
        Orders
      </div>
      <div
        className='dropDownOption border-b border-gray-200'
        onClick={() => router.push('/about')}
      >
        Contact
      </div>
      <div className='dropDownOption' onClick={() => dispatch(logout())}>
        Logout
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
