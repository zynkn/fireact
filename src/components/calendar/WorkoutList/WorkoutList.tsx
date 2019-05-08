import React from 'react';
import './WorkoutList.scss';
import { WorkoutDataProps } from 'stores/modules/workout';

interface Props {
  data: Array<WorkoutDataProps>
}
const WorkoutList: React.FC<Props> = ({ data }) => {
  console.log(data);
  const generateList = () => {
    return data.map(i => <ListItem  {...i} />);
  }
  return (
    <div className="WorkoutList">
      {
        generateList()
      }
      {/* <ListItem /> */}
    </div>
  )
}

export default WorkoutList;


const ListItem: React.FC<WorkoutDataProps> = (props) => {
  console.log(props);

  const generateTag = () => {
    let prevItem: object = {};
    return props.detail.map((item, key) => {

      if (JSON.stringify(prevItem) === JSON.stringify(item)) {
        return <span key={key} className="Tag square" />
      } else {
        return <span key={key} className="Tag">{item.weight}kg {item.reps}reps</span>
      }
      prevItem = item;
    })
  }
  return (
    <div className="ListItem">
      <span className="ListLabel" />
      <div className="ListItemHead">
        <span className="title">{props.name}</span>
        <span className="set-label">{props.detail.length} Sets</span>
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