
import { validateStringColor } from '../validateColor';
import './HexToRgb.css';

const HexToRgb = (props: any) => {
  console.log(props);
  return (
    <div className="container" style={{ background: validateStringColor(props.value) }}>
      <div className="input-container">
        <input className="input" ref={props.reference} type="text" onChange={props.on}/>
        <div className="output">
          {props.value === 7 ? 'Ошибка' : props.value}
        </div>
      </div>
    </div>
  )
}

export default HexToRgb;