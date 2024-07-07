import { searchState } from './dataState';
import './search.scss';

const Search: React.FC<searchState> = ({ onChange, val }) => {
  return (
    <div className='d-flex justify-content-end search--container align-items-center py-3'>
      <label className='search--container-label col-3 col-md-4 col-lg-2'>Search Key? </label>
      <input
        type="text"
        placeholder="Search..."
        className='form-control'
        value={val || ''}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default Search
