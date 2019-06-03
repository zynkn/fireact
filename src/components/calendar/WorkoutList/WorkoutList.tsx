import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import './WorkoutList.scss';
import { WorkoutDataProps } from 'stores/modules/workout';
import WorkoutModal3 from 'components/common/Modal/WorkoutModal3'
import { LABELS, getLabelIndex } from 'CONSTANTS';
import { Gear } from 'components/common/Icons';

import TestModal from 'components/common/Modal/TestModal';
import IconBtn from 'components/common/IconBtn';
import EditModal from 'components/common/Modal/EditModal';

const colorSet: { [key: string]: any } = {
  'aerobic': 'yellow',
  'chest': 'skyblue',
  'biceps': 'purple',
  'triceps': 'blue',
  'shoulder': 'orange',
  'lower': 'brown',
  'back': 'green',
  'abdominal': 'red',
}

interface Props {
  data: { [key: string]: WorkoutDataProps }
  openModal: any
  closeModal: any
  updateData: any
  removeData: any
  addData: any
  [key: string]: any
}
const WorkoutList: React.FC<Props> = ({ data, addData, updateData, removeData }) => {
  const renderCount = useRef(0);
  console.log('<WorkoutList /> RENDER!', ++renderCount.current);
  console.log(data);
  // const generateList = useMemo(() => {
  //   let arr = [];
  //   for (let i in data) {
  //     arr.push(<ListItem key={i} id={i} addData={addData} updateData={updateData} removeData={removeData} type={data.type} {...data[i]} />)
  //   }
  //   return arr;
  // }, [data])
  const generateList = () => {
    console.log('generateList()')
    let arr = [];
    for (let i in data) {
      arr.push(<ListItem key={i} id={i} addData={addData} updateData={updateData} removeData={removeData} type={data.type} {...data[i]} />)
    }
    return arr;
  }
  return (
    <div className="WorkoutList">
      {generateList()}
    </div>
  )
}

export default WorkoutList;

interface ItemProps extends WorkoutDataProps {
  id: any
}

const ListItem: React.FC<ItemProps> = (props) => {
  console.log(props);
  const renderCount = useRef(0);
  let lastSet: any = Object.keys(props.sets).pop();
  console.log('<ListItem /> RENDER!', ++renderCount.current);
  const [isShowing, setIsShowing] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [weight, setWeight] = useState(props.sets[lastSet].weight);
  const [reps, setReps] = useState(props.sets[lastSet].reps);
  const [idx, setIdx] = useState(-1);
  const [label, setLabel] = useState(getLabelIndex(props.type));

  const handleTag = (e: any, obj: any) => {
    e.stopPropagation();
    setWeight(obj.weight);
    setReps(obj.reps);
    setIdx(obj.index);
    setLabel(getLabelIndex(props.type))
    toggle();
  }
  const handleList = () => {
    setWeight(props.sets[lastSet].weight);
    setReps(props.sets[lastSet].reps);
    setLabel(getLabelIndex(props.type));
    setIdx(-1);
    toggle();
  }
  const handleClickLabel = (e: any) => {
    e.stopPropagation();
    //setIdx(-1);
    setIsEdit(true);
  }
  const handleEditModalHide = () => {
    setIsEdit(false);
  }
  const generateTag = () => {
    let nextItem: object = {};
    return Object.keys(props.sets).map((current, index, array) => {
      let { weight, reps } = props.sets[current];
      nextItem = (props.sets[array[index + 1]])
      if (JSON.stringify(nextItem) === JSON.stringify(props.sets[current])) {
        return <span key={current} onClick={(e) => handleTag(e, { index: current, weight, reps })} className={`Tag square ${colorSet[props.type]}`}></span>
      } else {
        return <span key={current} onClick={(e) => handleTag(e, { index: current, weight, reps })} className={`Tag ${colorSet[props.type]}`}>{weight}kg {reps}reps</span>
      }
    })
  }
  const toggle = () => setIsShowing(!isShowing)
  return (
    <>
      <div className="ListItem" onClick={handleList}>
        <span className={`ListLabel ${colorSet[props.type]} `} onClick={handleClickLabel}>
          <Gear width={"24px"} fill="#fff" />
        </span>
        <div className="ListItemHead">
          <span className="title">{props.name}</span>
          <span className={`set-label ${colorSet[props.type]} `}>{Object.keys(props.sets).length} Sets</span>
        </div>
        <div className="ListItemBody">
          <div className="Tag-wrap">
            <div className="Tag-box">
              {generateTag()}
            </div>
          </div>
        </div>
      </div >
      <EditModal isShowing={isEdit} hide={() => setIsEdit(false)}
        updateData={props.updateData}
        name={props.name}
        id={props.id}
        idx={idx}
        label={label}
      />
      <TestModal isShowing={isShowing} hide={toggle}
        addData={props.addData}
        updateData={props.updateData}
        removeData={props.removeData}
        name={props.name}
        id={props.id}
        idx={idx}
        weight={weight}
        reps={reps}
        label={label}
      />
    </>
  )
};
