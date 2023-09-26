import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider'


function Header() {

  const [{basket}, dispatch] = useStateValue();
  

  return (
    <div className='header'>
      <Link to="/">
      <img  
       className="header__logo"
       src='/images/amazon-logo.svg'
      /> 
      </Link>

      <div className='header__search'>
        <input 
        className='header__searchInput'
        id="search"
        name="search__ama  zon"
        type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">
            Hello Guest
          </span>
          <span className="header__optionLineTwo">
            Sign In
          </span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne">
         Return
        </span>
        <span className="header__optionLineTwo">
          & Orders
        </span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne">
          Your
        </span>
        <span className="header__optionLineTwo">
          Prime
        </span>
        </div>
           <Link to="/checkout">
            <div className='header__optionBasket'>
              <ShoppingCartIcon />
              <span className="header_optionLineTwo header__basketCount">
               {basket?.length}
              </span>
            </div>
           </Link>
      </div>
    </div> 
  )
}

export default Header