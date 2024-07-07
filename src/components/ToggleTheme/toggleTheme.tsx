import { toggleThemeState } from './dataState';
import './toggleTheme.scss';



const ToggleTheme: React.FC<toggleThemeState> = ({ onClick, isThemeMode }) => {
  return (
    <div className='d-flex justify-content-end align-items-center theme-container py-3 align-items-center'>
      <button
        type="button"
        className={`btn ${isThemeMode ? 'btn-dark' : 'btn-primary'} ml-2`}
        onClick={() => onClick()}
        id='toggleTheme'
        value={'Change Theme?'}
      >
        {isThemeMode ? 'Change Theme? Dark Mode' : 'Change Theme? Light Mode'}
      </button>
    </div>
  )
}

export default ToggleTheme
