import * as React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

export default function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
      
    return(
        <div className='header'>
            <Link to="/">
                <img className='header_logo' 
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            </Link>

            <div className='header_search'>
                <input type='text'/>
                <div className='header_searchIconbg'>
                    <SearchIcon className='header_searchIcon'/>
                </div>
            </div>

            <div className='header_nav'>

                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className="header_option">
                        <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                     </div>
                </Link>
                
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}