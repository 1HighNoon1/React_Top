import './Inventory_record.css';



function Inventory_record(props){
  return(

    <div className="horizontal">
        <p>{props.name}</p>

        <p>{props.count}</p>
    </div>

  );
}

export default Inventory_record;