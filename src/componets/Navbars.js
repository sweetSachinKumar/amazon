import React from 'react'
import { Link } from 'react-router-dom'
import { GrSearch } from 'react-icons/gr';
import { MdShoppingBasket } from 'react-icons/md';
import Logo from './logo_am.png'
import './Navbars.css'
import { useStateValue } from './StateProvider';
// import { initialState } from './reducer';

const Navbars = () => {

  const [{basket}] = useStateValue()

  console.log(basket)

  return (
    <nav className='header'>
      <Link to="/">
        <img src={Logo} className='header__logo' alt="" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <GrSearch className='header__searchIcon' />
      </div>


      <div className="header__nav">

        <Link to="/login" className='header__link' >
          <div className="header__option">
            <span className='header__optionLineOne'>Hallo</span>
            <span className='header__optionLineTwo'>sign </span>
          </div>
        </Link>

        <Link to="/login" className='header__link' >
          <div className="header__option">
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders </span>
          </div>
        </Link>

        <Link to="/login" className='header__link' >
          <div className="header__option">
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className='header__link'>
        <div className="header__optionBasket">
          <MdShoppingBasket />
          <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
        </div>
      </Link>

    </nav>
  )
}

export default Navbars
