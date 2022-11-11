// IMPORT CSS
import './css/WorkForm.css';
// IMPORT FROM REACT
import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// IMPORT MATERIAL ICONS
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
// IMPORT CONTEXT
import { WorkContext } from '../GlobalContext';


export default function WorkForm(props) {
  const workCx = useContext(WorkContext);
  const { id, pinned } = workCx.updateWork;
  const [isWorkPinned, setIsWorkPinned] = useState(props.type === "edit" ? pinned : false);
  const [data, setData] = useState([])

  const auto_grow = () => {
    const textArea = document.querySelector('#workForm-description');
    textArea.style.height = textArea.scrollHeight + 'px';
  };

  const addWork = () => {
    const workFormTitle = document.querySelector('.workForm-title[edit-mode="false"]');
    const workFormDescription = document.querySelector('.workForm-description[edit-mode="false"]');
    const setData = isWorkPinned ? workCx.setPinnedWork : workCx.setWork;
    setData(current => [{
      title: workFormTitle.value,
      description: workFormDescription.value,
      pinned: isWorkPinned
    }, ...current])
  };

  const updateWork = () => {

    const workFormTitle = document.querySelector('.workForm-title[edit-mode="true"]');
    const workFormDescription = document.querySelector('.workForm-description[edit-mode="true"]');
    const data = pinned ? workCx.pinnedWork : workCx.work;
    const setData = pinned ? workCx.setPinnedWork : workCx.setWork;
    // const deleteWork = props.pinned ? workCx.deletePinnedWork : workCx.deleteWork;

    const updatedWork = data.map((work, i) => {
      if (i === id) {
        return {
          title: workFormTitle.value,
          description: workFormDescription.value,
          pinned: pinned
        }
      }
      else {
        return work
      }
    })
    setData(updatedWork);

    // if(pinned && !isWorkPinned) {
    //   workCx.deletePinnedWork(id)
    //   workCx.setWork(current => [{
    //     title: workFormTitle.value,
    //     description: workFormDescription.value,
    //     pinned: isWorkPinned
    //   }, ...current])
    // }
    // else if(!pinned && isWorkPinned) {
    //   workCx.deleteWork(id)
    //   workCx.setPinnedWork(current => [{
    //     title: workFormTitle.value,
    //     description: workFormDescription.value,
    //     pinned: isWorkPinned
    //   }, ...current])
    // }
    // else {
      
    // }

    workCx.setUpdateWork(false)
  }

  const handleOnKeyUp = (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      props.type === "edit" ? updateWork() : addWork()
    }
  }

  useEffect(() => {
    if (props.type === "edit") {
      if (pinned) {
        setData({
          title: workCx.pinnedWork[id].title,
          description: workCx.pinnedWork[id].description,
          isPinned: workCx.pinnedWork[id].pinned
        })
      }
      else {
        setData({
          title: workCx.work[id].title,
          description: workCx.work[id].description,
          isPinned: workCx.work[id].pinned
        })
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section className="workForm" onKeyUp={e => handleOnKeyUp(e)}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input className="workForm-title" type="text" placeholder="Title" edit-mode={props.type === "edit" ? "true" : "false"} defaultValue={props.type === "edit" ? data.title : ""} />
        <div className="workForm-pin" title={isWorkPinned ? "Unpin work" : "Pin work"} onClick={() => {setIsWorkPinned(!isWorkPinned);}} disabled={props.type === "edit"}>{isWorkPinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}</div>
      </div>
      <textarea onInput={auto_grow} className="workForm-description" type="text" placeholder="Add your work" edit-mode={props.type === "edit" ? "true" : "false"} defaultValue={props.type === "edit" ? data.description : ""} />
      <div style={{ width: '100%', textAlign: 'center' }}>
        <button style={{ padding: '10px 20px' }} onClick={props.type === "edit" ? updateWork : addWork}>{props.type === "edit" ? "Update" : "Add"}</button>
      </div>
    </section>
  )
}

WorkForm.propTypes = {
  type: PropTypes.string
};

WorkForm.defaultProps = {
  type: "Add"
};
