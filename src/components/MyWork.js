// IMPORT CSS
import './css/MyWork.css';
// IMPORT REACT
import { useContext } from 'react';
// IMPORT CONTEXT
import { WorkContext } from '../GlobalContext';
// IMPORT COMPONENTS
import AddWork from './AddWork';
// import WorkCard from './WorkCard';
import Work from './Work';


export default function MyWork() {
  const workCx = useContext(WorkContext);
  return (
    <section id="myWork">
      <AddWork />
      {
        workCx.pinnedWork.length === 0 && workCx.work.length === 0 &&
        <div style={{ width: '220px', margin: 'auto', textAlign: 'center', filter: 'grayscale(1)' }}>
          <img src="logo/tlogo.png" alt="logo" />
          <p>Works you add appear here</p>
        </div>
      }

      {
        workCx.pinnedWork.length !== 0 && <Work id="pinnedWork" name="Pinned" data={workCx.pinnedWork} pinned={true} />
      }

      {
        workCx.work.length !== 0 && <Work id="otherWork" name={workCx.pinnedWork.length !== 0 ? "OtherWork" : ""} data={workCx.work} pinned={false} />
      }
    </section>
  );
}