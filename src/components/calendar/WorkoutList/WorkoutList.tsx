import React, { useState, useRef, useMemo } from 'react';

import './WorkoutList.scss';
import { WorkoutDataProps } from 'stores/modules/workout';
import { NEW_LABELS, getLabelIndex } from 'CONSTANTS';

import WorkoutAddModal from 'components/common/Modal/WorkoutAddModal';
import EditModal from 'components/common/Modal/EditModal';

interface Props {
  data: { [key: string]: WorkoutDataProps }
  updateData: any
  removeData: any
  addData: any
  [key: string]: any
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
  id: any
}

const ListItem: React.FC<ItemProps> = React.memo((props) => {
  const renderCount = useRef(0);
  const renderCount2 = useRef(0);
  console.log('<ListItem />' + props.name, ++renderCount.current);
  let lastSet: any = Object.keys(props.sets).pop();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [idxToModal, setIdxToModal] = useState(-1);
  const [isTagClicked, setIsTagClicked] = useState(false);
  const [isLabelClicked, setIsLabelClicked] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [idx, setIdx] = useState(-1);

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
  const handleClickLabel = (e: any) => {
    e.stopPropagation();
    setIdxToModal(lastSet);
    setIsLabelClicked(true);
    toggle();
    //setIdx(-1);
    //setIsEdit(true);
  };
  const handleTag = (e: any, obj: any) => {
    e.stopPropagation();
    setIdxToModal(obj.index);
    setIsLabelClicked(false);
    setIsTagClicked(true);
    //console.log(obj.index);
    toggle();
  }
  const handleList = () => {
    setIdx(-1);
    toggle();
  }

  const handleEditModalHide = () => {
    setIsEdit(false);
  }
  const generateTag = useMemo(() => {
    console.log('generateTag()', ++renderCount2.current);
    let nextItem: object = {};
    return Object.keys(props.sets).map((current, index, array) => {
      let { weight, reps } = props.sets[current];
      nextItem = (props.sets[array[index + 1]])
      if (JSON.stringify(nextItem) === JSON.stringify(props.sets[current])) {
        return <span key={current} onClick={(e) => handleTag(e, { index: current, weight, reps })} className={`Tag square`}></span>
      } else {
        return <span key={current} onClick={(e) => handleTag(e, { index: current, weight, reps })} className={`Tag`}>{weight}kg {reps}reps</span>
      }
    })
  }, [props.sets]);

  const generateModal = useMemo(() => {
    console.log('generateModal()');
    let nextItem: object = {};
    return Object.keys(props.sets).map((current, index, array) => {
      let { weight, reps } = props.sets[current];
      nextItem = (props.sets[array[index + 1]]);
      return <WorkoutAddModal />

    })
  }, []);






  // EditModal이랑 TestModal 네이밍 변경하고, isShowing 네이밍도 같이 변경해라 제발 씌발
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
      {/* <EditModal isShowing={isEdit} hide={() => setIsEdit(false)}
        updateData={props.updateData}
        name={props.name}
        id={props.id}
        idx={idx}
      /> */}
      <WorkoutAddModal
        id={props.id}
        data={data}
        isShowing={isModalOpened}
        isLabelClicked={isLabelClicked}
        idx={idxToModal}

        hide={toggle}
        addData={props.addData}
        updateData={props.updateData}
        removeData={props.removeData}

        isTagClicked={isTagClicked}



      />
    </>
  )
})
