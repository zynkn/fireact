import React from 'react';
import './WorkoutList.scss';
import { WorkoutDataProps } from 'stores/modules/workout';

import { LABELS, getLabelIndex } from 'CONSTANTS';

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
  editData: any
  [key: string]: any
}
const WorkoutList: React.FC<Props> = ({ data, openModal, editData }) => {

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
  const generateList = () => {
    let arr = [];
    for (let i in data) {
      console.log(data[i])

      arr.push(
        <ListItem key={i} id={i} {...data[i]} openModal={openModal} onClick={() => onHandleClick(i, data)} editData={editData} />
      )
    }
    return arr;
  }
  return (
    <div className="WorkoutList">
      {
        generateList()
      }
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
    console.log(
      payload
    )
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


  return (
    <div className="ListItem" onClick={props.onClick}>
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