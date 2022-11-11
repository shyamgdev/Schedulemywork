// IMPORT CSS
import './css/UpdateWork.css';
// IMPORT FROM REACT
import { useContext } from 'react';
// IMPORT CONTEXT
import { WorkContext } from '../GlobalContext';
import WorkForm from './WorkForm';


export default function UpdateWork() {
  const workCx = useContext(WorkContext);

  const handleUpdateWorkSection = (e) => {
    if (document.querySelector('#updateWork').contains(e.target)) {
      return
    }
    else {
      workCx.setUpdateWork(false)
    }
  }

  return (
    <section id="updateWork-section" onClick={(e) => { handleUpdateWorkSection(e) }}>
      <div id="updateWork">
        <WorkForm type="edit" />
      </div>
    </section>
  );
}