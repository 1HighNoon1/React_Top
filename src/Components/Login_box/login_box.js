import './Login_box.css';
import {NavLink} from "react-router-dom";



function LoginBox(){
  return(

    <div className="Login_box">
        <NavLink className="gradient-button" to="/login/"><button className="button-9" role="button">Войти в сеть</button></NavLink>
    </div>

  );
}

export default LoginBox;