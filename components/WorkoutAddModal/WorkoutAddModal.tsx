import React from 'react';
import './WorkoutAddModal.scss';
import Plus from '../../components/icons/Plus';
import Minus from '../../components/icons/Minus';
import Delete from '../../components/icons/Delete';

interface IconButtonProps {
  className?: string,
  style?: object,
  children?: any,
  onClick?: Function
}
const IconSquareButton: React.FC<IconButtonProps> = ({ className, style, children }) => {
  return (
    <button className={`IconSquareButton ${className}`} style={style}>
      {children}
    </button>
  )
}

interface InputProps {
  width?: number | string,
  type?: string,
  style?: object,
  children?: any,
  allowClear?: boolean,
  suffix?: string,

}

const Input: React.FC<InputProps> = ({ type = "text", style, suffix, allowClear = false }) => {
  return (
    <div className="Input" style={style}>
      {
        <span className="prefix-text">{}</span>
      }
      <input type={type} />
      {
        suffix &&
        <span className="suffix-text">{suffix}</span>
      }
      {
        allowClear &&
        <IconSquareButton className="clear-btn" style={{ height: '24px', width: '24px' }}><Plus style={{ height: '12px', fill: 'white', transform: 'rotate(45deg)' }} /></IconSquareButton>
      }

    </div>
  )
}

interface CategoryTabProps {
  category?: any,
  style?: any,
  setCategory?: any,
  className?: string,
  disabled?: boolean,

}
const CATEGORY = {
  "chest": "가슴",
  "back": "등",
  "shoulder": "어깨",
  "triceps": "삼두",
  "biceps": "이두",
  "abdominal": "복부",
  "legs": "하체",
}
const CategoryTab: React.FC<CategoryTabProps> = ({category, setCategory, disabled}) => {
  

  const generate = React.useCallback(()=>{
    return (
      Object.entries(CATEGORY).map(([key, value]:any)=>{
        return (
          <div onClick={ ()=> !disabled && setCategory(key)} className={`tab ${key} ${key===category ? "--selected": ""}`}>
            {value}
          </div>
        )
      })
    )
  },[category])
  return (
    <div className="category-tabs">
      {generate()}
    </div>
  )
}

const NumberInput:React.FC<any> = ({suffix}) => {

  return (
    <div className="NumberInput">
      <input type="number" />
      <span className="suffix">{suffix}</span>
    </div>
  )
}

const WorkoutAddModal: React.FC<any> = () => {
  const [category, setCategory] = React.useState("chest");

  return (
    <>
      <div className="overlay" />
      <div className="WorkoutAddModal">

          <CategoryTab disabled={true} category={category} setCategory={setCategory} />

        
        <div className="row --gray" style={{borderTop: "1px solid #382B4D"}}>
          <Input style={{ width: "100%" }} allowClear={true} />
        </div>
        <div className="row">
          <IconSquareButton style={{flex: '0 0 42px', alignSelf: "stretch", borderRadius: "3px"}}>
            <Minus style={{ height: '24px', fill: 'white' }} />
          </IconSquareButton>
          <NumberInput suffix={"kg"} />

          <IconSquareButton style={{flex: '0 0 42px', alignSelf: "stretch", borderRadius: "3px"}}>
            <Plus style={{ height: '16px', fill: 'white' }} />
          </IconSquareButton>
        </div>
        <div className="row">
          <IconSquareButton style={{flex: '0 0 42px', alignSelf: "stretch", borderRadius: "3px"}}>
            <Minus style={{ height: '24px', fill: 'white' }} />
          </IconSquareButton>
          <NumberInput suffix={"reps"} />

          <IconSquareButton style={{flex: '0 0 42px', alignSelf: "stretch", borderRadius: "3px"}}>
            <Plus style={{ height: '16px', fill: 'white' }} />
          </IconSquareButton>
        </div>



        <div className="row" style={{padding: 0, height: "56px"}}>
          <IconSquareButton style={{flex: "0 0 56px", alignSelf: "stretch", background: "#F04646"}}>
          <Delete style={{ height: '20px', fill: 'white' }}  />
          </IconSquareButton>
          <button className={`add-btn ${category}`}>ADD</button>
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