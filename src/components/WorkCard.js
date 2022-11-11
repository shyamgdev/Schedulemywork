// IMPORT CSS
import './css/WorkCard.css';
// IMPORT REACT
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
// IMPORT MATERIAL ICONS
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// IMPORT GLOBALCONTEXT
import { WorkContext } from '../GlobalContext';


export default function WorkCard(props) {
  const workCx = useContext(WorkContext);
  const [isHover, setIsHover] = useState(false);
  const deleteWork = props.pinned ? workCx.deletePinnedWork : workCx.deleteWork;
  const pin = props.pinned ? workCx.unpinWork : workCx.pinWork;
  const PinIcon = props.pinned ? PushPinIcon : PushPinOutlinedIcon;

  const handleOnClick = () => {
    if (!props.trash) {
      workCx.setUpdateWork({
        id: props.id,
        pinned: props.pinned
      })
    }
  }

  return (
    <div id={props.id} className="workCard" onMouseEnter={() => { setIsHover(true); }} onMouseLeave={() => { setIsHover(false); }} >
      <div className="workCard-content" onClick={handleOnClick}>
        <h1 className="workCard-title">{props.title === "" && props.description === "" ? "Empty work" : props.title}</h1>
        <p className="workCard-description">{props.description}</p>
      </div>
      {isHover && !props.trash &&
        <>
          <div style={{ top: '10px' }} className="workCard-icon workCard-pin" onClick={() => { pin(props.id); }} title="Unpin work"><PinIcon /></div>

          <div className='workCard-icons'>
            <div className="workCard-icon" onClick={handleOnClick} title="Edit"><EditOutlinedIcon /></div>
            <div className="workCard-icon" onClick={() => { deleteWork(props.id); }} title="Trash work"><DeleteIcon /></div>
          </div>
        </>
      }

      {
        props.trash && isHover &&
        <div className='workCard-icons'>
          <div className="workCard-icon" onClick={() => { workCx.deleteTrashWork(props.id); }} title="delete forever"><DeleteForeverIcon /></div>
          <div className="workCard-icon" onClick={() => { workCx.restoreWork(props.id); }} title="restore"><RestoreFromTrashIcon /></div>
        </div>
      }

    </div>
  );
}

WorkCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  otherWork: PropTypes.bool,
  pinned: PropTypes.bool,
  trash: PropTypes.bool
};

WorkCard.defaultProps = {
  pinned: false,
  trash: false
};