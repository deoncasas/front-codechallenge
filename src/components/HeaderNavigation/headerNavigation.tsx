import { HeaderNavigationState } from './dataState';
import './headerNavigation.scss';

const HeaderNavigation: React.FC<HeaderNavigationState> = ({ title }) => {
  return (
    <div className="container-fluid nav-bar fixed-top p-3">
      <div className="container">
        <h1 className="text-primary fw-bold mb-0">{title}</h1>
      </div>
    </div>
  )
}

export default HeaderNavigation
