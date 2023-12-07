import './navbar.css'
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className="navbarWrapper">
            <div className="navbarLeft">
                <div className="language">
                    EN
                </div>
                <div className="searchContainer">
                    <input placeholder='Search'/>
                    <Search style={{ color:"gray" , fontSize : 16}} />
                </div>
            </div>
            <div className="navbarCenter">
                <div className="navbarLogo">
                    AUMMII DESU
                </div>
            </div>
            <div className="navbarRight">
                <div className="menuItem">REGISTER</div>
                <div className="menuItem">SIGN IN</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
