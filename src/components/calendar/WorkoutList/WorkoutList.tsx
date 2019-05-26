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
  [key: string]: any
}
const WorkoutList: React.FC<Props> = ({ data, openModal }) => {

  const generateList = () => {
    let arr = [];
    for (let i in data) {
      console.log(data[i], i);
      const payload = {
        id: i,
        workout: {
          name: data[i].name,
          weight: data[i].detail[data[i].detail.length - 1].weight,
          reps: data[i].detail[data[i].detail.length - 1].reps,
        },
        selectedLabel: data[i].type
      }
      arr.push(
        <ListItem key={i} id={i} {...data[i]} openModal={() => { console.log('open'); openModal({ ...payload }) }} />
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
  id: any
}

const ListItem: React.FC<ItemProps> = (props) => {
  const generateTag = () => {
    let nextItem: object = {};
    return props.detail.map((current, index, array) => {
      nextItem = array[index + 1];
      if (JSON.stringify(nextItem) === JSON.stringify(current)) {
        return <span key={index} className={`Tag square ${colorSet[props.type]}`} onClick={(e) => { e.stopPropagation(); console.log(props.id, index); }} />
      } else {
        return <span key={index} className={`Tag ${colorSet[props.type]}`} onClick={(e) => { e.stopPropagation(); console.log(props.id, index); }} >{current.weight}kg {current.reps}reps</span>
      }
    })
  }

  const handleClick = () => {

    let data = {
      id: props.id,
      selectedLabel: props.type,
      workout: {
        name: props.name,
        weight: props.detail[props.detail.length - 1].weight,
        reps: props.detail[props.detail.length - 1].reps,
      }

    }
    props.openModal(data);
  }

  return (
    <div className="ListItem" onClick={() => handleClick()}>
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