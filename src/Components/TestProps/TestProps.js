import './TestProps.css';
import {useRef} from "react";
import Inventory_record from "../inventory_record/Inventory_record";










function TestProps(props){
    const Description = useRef(null)

    let Send=()=>{
        props.callSend(Description.current.value);
        
    }

    var  value_komponents=[];
    for (var key in props.inventory) {
         value_komponents.push(<Inventory_record name={key} count={props.inventory[key]} />)
    }


    console.log(props);
  return(
      <div className="allign">
          {value_komponents}
          <form action="">

              <label>Добавить новый продукт:</label>
              <br/>
              <input type="text"/>
              <br/>
              <label>Введите описание:</label>
              <br/>
              <textarea ref={Description} rows='4'/>
<br/>

              <button type='button' onClick={Send}>Отправить</button>
          </form>
      </div>
  );
}

export default TestProps;