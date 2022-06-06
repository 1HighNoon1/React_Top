import './NavPan.css';
import LogoBar from "../Logo_bar/logo_bar";
import LoginBox from "../Login_box/login_box";
import NavBox from "../Nav_box/Nav_box";



function NavPan(){
  return(
  <div className="nav">
    <LogoBar className="Login_box" />
    <NavBox />
    <LoginBox />
  </div>
  );
}

export default NavPan;