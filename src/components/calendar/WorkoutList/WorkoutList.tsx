import React from 'react';
import './WorkoutList.scss';
import { WorkoutDataProps } from 'stores/modules/workout';



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

  const generateList = () => {
    let arr = [];
    for (let i in data) {
      arr.push(
        <ListItem key={i} id={i} {...data[i]} openModal={() => openModal({ id: i })} editData={editData} />
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

  const handleEditData = (e: any, index: number, workout: any) => {
    e.stopPropagation();

    let data = {
      id: props.id,
      selectedLabel: props.type,
      isUpdate: true,
      selectedIndex: index,
      workout: {
        name: props.name,
        weight: workout.weight,
        reps: workout.reps,
      },
    }
    props.openModal(data);

    console.log(props.id, index, workout)
  }
  const generateTag = () => {
    let nextItem: object = {};
    return props.detail.map((current, index, array) => {
      nextItem = array[index + 1];
      if (JSON.stringify(nextItem) === JSON.stringify(current)) {
        return <span key={index} className={`Tag square ${colorSet[props.type]}`} onClick={(e) => { handleEditData(e, index, current) }} />
      } else {
        return <span key={index} className={`Tag ${colorSet[props.type]}`} onClick={(e) => { handleEditData(e, index, current) }} >{current.weight}kg {current.reps}reps</span>
      }
    })
  }


  return (
    <div className="ListItem" onClick={props.openModal}>
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