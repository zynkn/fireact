import React from 'react';
import './WorkoutList.scss';

const WorkoutList: React.FC = () => {
  return (
    <div className="WorkoutList">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />

    </div>
  )
}

export default WorkoutList;


const ListItem: React.FC = () => {
  return (
    <div className="ListItem">
      <span className="ListLabel" />
      <div className="ListItemHead">
        <span className="title">덤벨 로우</span>
        <span className="set-label">5 Sets</span>
      </div>
      <div className="ListItemBody">
        <div className="Tag-wrap">
          <div className="Tag-box">
            <span className="Tag square" />
            <span className="Tag square" />
            <span className="Tag square" />
            <span className="Tag square" />
            <span className="Tag">5kg 10reps</span>
            <span className="Tag square" />
            <span className="Tag square" />
            <span className="Tag">10kg 10reps</span>
            <span className="Tag square" />
            <span className="Tag square" />
            <span className="Tag">15kg 10reps</span>
          </div>
        </div>


      </div>
    </div>
  )
};