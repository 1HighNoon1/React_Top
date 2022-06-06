import './Nav_box.css';
import {NavLink} from "react-router-dom";




function NavBox(){
  return(
    <div className="Nav_box">
        <NavLink className="gradient-button" to="/main/">123</NavLink>
        <NavLink className="gradient-button" to="/about/">123</NavLink>
        <NavLink className="gradient-button" to="/test_props/">Проверка Пропсов</NavLink>
    </div>

  );
}

export default NavBox;