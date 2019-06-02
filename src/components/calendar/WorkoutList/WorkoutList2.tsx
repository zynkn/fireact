import React, { useState, useEffect } from 'react';
import './WorkoutList.scss';
import { WorkoutDataProps } from 'stores/modules/workout';
import WorkoutModal3 from 'components/common/Modal/WorkoutModal3'
import { LABELS, getLabelIndex } from 'CONSTANTS';

import TestModal from 'components/common/Modal/TestModal';

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
  editData: any
  [key: string]: any
}
const WorkoutList: React.FC<Props> = ({ data, openModal, closeModal, editData }) => {
  const [isShowing, setIsShowing] = useState(false);
  function toggle() {
    setIsShowing(!isShowing);
  }

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [label, setLabel] = useState(0);
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  console.log('WORKOUTLIST RENDER!')
  const onHandleClick = (i: string, data: any) => {
    const payload = {
      id: i,
      name: data[i].name,
      weight: data[i].detail[data[i].detail.length - 1].weight,
      reps: data[i].detail[data[i].detail.length - 1].reps,
      label: getLabelIndex(data[i].type)
    }
    openModal(payload);
  }
  const modalSet = ({ id, name, label, weight, reps }: any) => {
    setId(id);
    setName(name);
    setLabel(label);
    setWeight(weight);
    setReps(reps);
  }
  const generateList = () => {
    let arr = [];
    for (let i in data) {
      arr.push(
        <ListItem key={i} id={i} modalSet={modalSet} isShowing={isShowing} toggle={toggle} {...data[i]} openModal={openModal} onClick={() => onHandleClick(i, data)} closeModal={closeModal} editData={editData} />
      )
    }
    return arr;
  }
  return (
    <div className="WorkoutList">
      {generateList()}
      <TestModal hide={toggle} isShowing={isShowing} name={name} label={label} id={id} reps={reps} weight={weight} />
    </div>
  )
}

export default WorkoutList;

interface ItemProps extends WorkoutDataProps {
  openModal: any
  editData: any
  id: any
}

const ListItem: React.FC<ItemProps> = (props) => {
  console.log('LISTITEM RENDER!')
  const handleEditData = (e: any, index: number, weight: number, reps: number) => {
    e.stopPropagation();
    let payload = {
      id: props.id,
      name: props.name,
      weight: weight,
      reps: reps,
      index: index,
      isUpdate: true,
      label: getLabelIndex(props.type)
    }
    props.openModal(payload);
  }
  const generateTag = () => {
    let nextItem: object = {};
    return props.detail.map((current, index, array) => {
      nextItem = array[index + 1];
      if (JSON.stringify(nextItem) === JSON.stringify(current)) {
        return <span key={index} className={`Tag square ${colorSet[props.type]}`} onClick={(e) => { handleEditData(e, index, current.weight, current.reps) }} />
      } else {
        return <span key={index} className={`Tag ${colorSet[props.type]}`} onClick={(e) => { handleEditData(e, index, current.weight, current.reps) }} >{current.weight}kg {current.reps}reps</span>
      }
    })
  }

  const openModal = () => {
    props.modalSet({ id: props.id, name: props.name, label: getLabelIndex(props.type), weight: props.detail[props.detail.length - 1].weight, reps: props.detail[props.detail.length - 1].reps });
    props.toggle();
  }

  return (
    <div className="ListItem" onClick={openModal}>
      <span className={`ListLabel ${colorSet[props.type]}`} />
      <div className="ListItemHead">
        <span className="title">{props.name}</span>
        <span className={`set-label ${colorSet[props.type]}`}>{props.detail.length} Sets</span>
      </div>
      <div className="ListItemBody">
        <div className="Tag-wrap">
          <div className="Tag-box">
            {generateTag()}
          </div>
        </div>
      </div>
    </div>
  )
};