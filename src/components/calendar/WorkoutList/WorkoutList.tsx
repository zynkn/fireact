import React, { useState, useRef, useMemo } from 'react';

import './WorkoutList.scss';
import { WorkoutDataProps } from 'stores/modules/workout';
import { NEW_LABELS, getLabelIndex } from 'CONSTANTS';

import WorkoutAddModal from 'components/common/Modal/WorkoutAddModal';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props {
  data: { [key: string]: WorkoutDataProps }
  updateData: Function
  removeData: Function
  addData: Function
  history: any
  //[key: string]: any
}
const WorkoutList: React.FC<Props> = ({ data, addData, updateData, removeData, history }) => {
  const renderCount = useRef(0);
  console.log('<WorkoutList />', ++renderCount.current);
  console.log(history);
  const generateList = useMemo(() => {
    let arr = [];
    for (let i in data) {
      arr.push(<ListItem key={i} id={i} addData={addData} updateData={updateData} removeData={removeData} history={history} action={history.action} {...data[i]} />)
    }
    return arr;
  }, [data, history.action])
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
  console.log(props);
  let lastTimestamp: any = Object.keys(props.sets).pop();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [timestamp, setTimestamp] = useState(-1);
  const [isTagClicked, setIsTagClicked] = useState(false);
  const [isLabelClicked, setIsLabelClicked] = useState(false);
  const data = {
    name: props.name,
    label: getLabelIndex(props.type),
    id: props.id,
    sets: props.sets,
  };
  // React.useCallback(() => {
  //   console.log(props.history.action);
  // }, [setIsModalOpened]);
  React.useEffect(() => {
    console.log(props.action);
    if (props.action === "POP" && isModalOpened) {
      setIsModalOpened(false);
    }

  });
  const toggle = () => {
    if (isModalOpened) {
      // 닫기
      console.log('닫기')
      props.history.goBack();
      //console.log(props.history);
    } else {
      // 열기
      console.log('열기')
      props.history.push('/workout', 'opend');
      //console.log(props.history);
    }
    setIsModalOpened(!isModalOpened)
  }
  const handleClickListItem = () => {
    setTimestamp(lastTimestamp);
    setIsLabelClicked(false);
    setIsTagClicked(false);
    toggle();
  };
  const handleClickLabel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTimestamp(lastTimestamp);
    setIsLabelClicked(true);
    toggle();
  };
  const handleTag = (e: React.MouseEvent, obj: { index: number, weight: number, reps: number }) => {
    e.stopPropagation();
    setTimestamp(obj.index);
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
        timestamp={timestamp}

        hide={toggle}
        addData={props.addData}
        updateData={props.updateData}
        removeData={props.removeData}
      />
    </>
  )
})
