import React, { useState, useRef, useMemo } from 'react';

import './WorkoutList.scss';
import { WorkoutDataProps } from 'stores/modules/workout';
import { NEW_LABELS, getLabelIndex } from 'CONSTANTS';

import WorkoutAddModal from 'components/common/Modal/WorkoutAddModal';

interface Props {
  data: { [key: string]: WorkoutDataProps }
  updateData: Function
  removeData: Function
  addData: Function
  //[key: string]: any
}
const WorkoutList: React.FC<Props> = ({ data, addData, updateData, removeData }) => {
  const renderCount = useRef(0);
  console.log('<WorkoutList />', ++renderCount.current);
  const generateList = useMemo(() => {
    let arr = [];
    for (let i in data) {
      arr.push(<ListItem key={i} id={i} addData={addData} updateData={updateData} removeData={removeData} {...data[i]} />)
    }
    return arr;
  }, [data])
  return (
    <div className="WorkoutList">
      {generateList}
    </div>
  )
}

export default WorkoutList;

interface ItemProps extends WorkoutDataProps {
  id: string
}

const ListItem: React.FC<ItemProps> = React.memo((props) => {
  const renderCount = useRef(0);
  console.log('<ListItem />' + props.name, ++renderCount.current);
  let lastSet: any = Object.keys(props.sets).pop();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [idxToModal, setIdxToModal] = useState(-1);
  const [isTagClicked, setIsTagClicked] = useState(false);
  const [isLabelClicked, setIsLabelClicked] = useState(false);
  const data = {
    name: props.name,
    label: getLabelIndex(props.type),
    id: props.id,
    sets: props.sets,
  };
  const toggle = () => setIsModalOpened(!isModalOpened)
  const handleClickListItem = () => {
    setIdxToModal(lastSet);
    setIsLabelClicked(false);
    setIsTagClicked(false);
    toggle();
  };
  const handleClickLabel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdxToModal(lastSet);
    setIsLabelClicked(true);
    toggle();
  };
  const handleTag = (e: React.MouseEvent, obj: { index: number, weight: number, reps: number }) => {
    e.stopPropagation();
    setIdxToModal(obj.index);
    setIsLabelClicked(false);
    setIsTagClicked(true);
    toggle();
  }
  const generateTag = useMemo(() => {
    let nextItem: object = {};
    return Object.keys(props.sets).map((current, index, array) => {
      let { weight, reps } = props.sets[current];
      nextItem = (props.sets[array[index + 1]])
      if (JSON.stringify(nextItem) === JSON.stringify(props.sets[current])) {
        return <span key={current} onClick={(e) => handleTag(e, { index: Number(current), weight, reps })} className={`Tag square`}></span>
      } else {
        return <span key={current} onClick={(e) => handleTag(e, { index: Number(current), weight, reps })} className={`Tag`}>{weight}kg {reps}reps</span>
      }
    })
  }, [props.sets]);
  return (
    <>
      <div className={`ListItem ${NEW_LABELS[props.type].color}`} onClick={handleClickListItem}>
        <span className={`ListLabel`} onClick={handleClickLabel} />
        <div className="ListItemHead">
          <span className="title">{props.name}</span>
          <span className={`set-label`}>{Object.keys(props.sets).length} Sets</span>
        </div>
        <div className="ListItemBody">
          <div className="Tag-wrap">
            <div className="Tag-box">
              {generateTag}
            </div>
          </div>
        </div>
      </div >
      <WorkoutAddModal
        id={props.id}
        data={data}
        isShowing={isModalOpened}
        isLabelClicked={isLabelClicked}
        isTagClicked={isTagClicked}
        idx={idxToModal}

        hide={toggle}
        addData={props.addData}
        updateData={props.updateData}
        removeData={props.removeData}
      />
    </>
  )
})
