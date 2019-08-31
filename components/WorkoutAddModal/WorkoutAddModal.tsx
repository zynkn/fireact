import React from 'react';
import './WorkoutAddModal.scss';
import Plus from '../../components/icons/Plus';


interface IconButtonProps{
  className?: string,
  style?: object,
  children?: any,
  onClick?: Function

}
const IconSquareButton:React.FC<IconButtonProps> = ({ className, style,children}) => {
  
  return (
    <button className={`IconSquareButton ${className}`} style={style}>
      {children}
    </button>
  )
}

interface InputProps{
  width?: number | string,
  type?: string,
  style?: object,
  children?: any,
  allowClear?: boolean,
  suffix?: string,

}

const Input:React.FC<InputProps>  = ({ type="text", style, suffix,allowClear=false}) => {
  return (
    <div className="Input" style={style}>
      {
        <span className="prefix-text">{}</span>
      }
      <input  type={type} />
      {
        suffix && 
        <span className="suffix-text">{suffix}</span>
      }
      {
        allowClear &&
        <IconSquareButton className="clear-btn" style={{ height: '24px', width: '24px'}}><Plus style={{ height: '12px', fill: 'white', transform: 'rotate(45deg)' }}  /></IconSquareButton>
      }
      
    </div>
  )
}

const WorkoutAddModal:React.FC<any> = () => {

  return (
    <>
      <div className="overlay" />
      <div className="WorkoutAddModal">
        <div className="category-tabs">
          <div className="tab chest --checked">
            가슴
          </div>
          <div className="tab">
            등
          </div>
          <div className="tab">
            어깨
          </div>
          <div className="tab">
            삼두
          </div>
          <div className="tab">
            이두
          </div>
          <div className="tab">
            하체
          </div>
          <div className="tab">
            복부
          </div>
        </div>
        <div className="row --gray">
          <Input style={{width: "100%"}} allowClear={true}/>
        </div>
        <div className="row">
          <IconSquareButton style={{width: '32px', height: '32px'}}>
            <Plus style={{ height: '16px', fill: 'white' }}  />
          </IconSquareButton>

          <div style={{position: "relative", alignSelf:"stretch", display: "flex",color: "white",alignItems: "center", justifyContent: "center", width: "50%", background: "rgba(0,0,0,0.2)"}}>
            <input type="number" style={{ background: "transparent",color: "white",border: "0", width: '3em',textAlign: 'center', fontSize: '1.5em'}} />
            <span style={{position: "absolute", left: "70%"}}>kg</span>
          </div>

          <IconSquareButton style={{width: '32px', height: '32px'}}>
            <Plus style={{ height: '16px', fill: 'white' }}  />
          </IconSquareButton>
        </div>

        <div className="row">
          <IconSquareButton style={{width: '32px', height: '32px'}}>
            <Plus style={{ height: '16px', fill: 'white' }}  />
          </IconSquareButton>

          <div style={{position: "relative", alignSelf:"stretch", display: "flex",color: "white",alignItems: "center", justifyContent: "center", width: "50%", background: "rgba(0,0,0,0.2)"}}>
            <input type="number" style={{ background: "transparent",color: "white",border: "0", width: '3em',textAlign: 'center', fontSize: '1.5em'}} />
            <span style={{position: "absolute", left: "70%"}}>reps</span>
          </div>

          <IconSquareButton style={{width: '32px', height: '32px'}}>
            <Plus style={{ height: '16px', fill: 'white' }}  />
          </IconSquareButton>
        </div>
        <div className="row">
          <IconSquareButton style={{width: '32px', height: '32px'}}>
            <Plus style={{ height: '16px', fill: 'white' }}  />
          </IconSquareButton>

          <div style={{alignSelf:"stretch", display: "flex",color: "white",alignItems: "center", justifyContent: "center", width: "50%", background: "rgba(0,0,0,0.2)"}}>
            <input type="number" style={{ background: "transparent",color: "white",border: "0", width: '3em',textAlign: 'center', fontSize: '1.5em'}} />
            <span>kg</span>
          </div>

          <IconSquareButton style={{width: '32px', height: '32px'}}>
            <Plus style={{ height: '16px', fill: 'white' }}  />
          </IconSquareButton>
        </div>
        <div className="row">
          <IconSquareButton style={{width: '32px', height: '32px'}}>
            <Plus style={{ height: '16px', fill: 'white' }}  />
          </IconSquareButton>

          <div style={{alignSelf:"stretch", display: "flex",color: "white",alignItems: "center", justifyContent: "center", width: "50%", background: "rgba(0,0,0,0.2)"}}>
            <input type="number" style={{ background: "transparent",color: "white",border: "0", width: '3em',textAlign: 'center', fontSize: '1.5em'}} />
            <span>reps</span>
          </div>

          <IconSquareButton style={{width: '32px', height: '32px'}}>
            <Plus style={{ height: '16px', fill: 'white' }}  />
          </IconSquareButton>
        </div>

        {/* <div className="row">
          <IconSquareButton style={{width: "36px"}}>
          <Plus style={{ height: '16px', fill: 'white' }}  />
          </IconSquareButton>
          <Input type="number" suffix="kg" width={20} style={{ flex:"0 0 50%" }}/>
          <IconSquareButton style={{width: "36px"}}>
          <Plus style={{ height: '16px', fill: 'white' }}  />
          </IconSquareButton>
        </div> */}
      </div>
    </>
  )
}

export default WorkoutAddModal;