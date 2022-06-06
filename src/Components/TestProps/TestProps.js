import './TestProps.css';
import {useRef} from "react";










function TestProps(props){
    const Description = useRef(null)

    let Send=()=>{
        props.callSend(Description.current.value);
        
    }



    console.log(props);
  return(
      <div className="allign">
      <div className="horizont">
        <ul>
          <li>food</li>
          <li>whater</li>
          <li>suplices</li>
        </ul>

        <ul>
          <li>{props.inventory['food']}</li>
          <li>{props.inventory['whater']}</li>
          <li>{props.inventory['suplices']}</li>
        </ul>

      </div>

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