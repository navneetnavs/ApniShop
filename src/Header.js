import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from './Stateprovider';
import {auth} from './firebase'
function Header() {
  const [{basket, user}, dispatch ] = useStateValue()

  const handleAuthentication = () => {
    if(user) {
     auth.signOut()
    }
  }

  return (
    <div className='header'>
       <Link to="/">
        <img
          className="header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zuqi7ox071o5324Yff-O8q5oUkDOY_5Kcg&s"
        />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type="text"/>
        <SearchIcon className='header__searchIcon'/>
      </div>
      <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header__option'>
        <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        
        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className='header__optionBasket'>
         <ShoppingCartIcon/>
         <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
        </div>
        </Link>

       
      
      </div>
    </div>
  )
}

export default Header;
