// IMPORT CSS
import './css/TrashWork.css';
// IMPORT REACT
import { useContext } from 'react';
// IMPORT COMPONENTS
import WorkCard from './WorkCard';
// IMPORT CONTEXT
import { WorkContext } from '../GlobalContext';


export default function Work() {
  const workCx = useContext(WorkContext);

  return (
    <section id="trashWork">
      {workCx.trashWork.length !== 0 && <div id="empty-trash" style={{ width: 'fit-content', color: 'blue', cursor: 'pointer' }} onClick={() => { workCx.setTrashWork([]); }}><i>Empty trash</i></div>}
      <div id="trashWork-items">
        {
          workCx.trashWork.length !== 0 ?
            workCx.trashWork.map((e, index) => {
              return (
                <WorkCard title={e.title} description={e.description} id={index} key={index} trash={true} />
              );
            }) :
            <div style={{ width: '220px', margin: 'auto', textAlign: 'center', filter: 'grayscale(1)' }}>
              <img src="logo/tlogo.png" alt="logo" />
              <p>Your Deleted Works appear here</p>
            </div>
        }
      </div>
    </section>
  );
}