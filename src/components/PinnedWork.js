import { useContext } from 'react';
import { WorkContext } from '../GlobalContext';
import WorkCard from './WorkCard';

export default function PinnedWork() {
  const workCx = useContext(WorkContext);

  return (
    <>
      <div id="pinnedWork" className="flex-column">
        {
          <>
            <h3>Pinned</h3>
            <div className="work-items">
              {
                workCx.pinnedWork.map((e, index) => {
                  return (
                    <WorkCard title={e.title} description={e.description} id={index} key={index} pinned={true}/>
                  );
                })
              }
            </div>
          </>
        }
      </div>
    </>
  );
}
