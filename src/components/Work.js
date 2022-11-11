import WorkCard from './WorkCard';

export default function Work(props) {

  return (
    <div id={props.id} className="flex-column">
      {
        <>
          {props.name !== "" && <h3>{props.name}</h3>}
          <div className="work-items">
            {
              props.data.map((e, index) => {
                return (
                  <WorkCard title={e.title} description={e.description} id={index} key={index} pinned={props.pinned} />
                );
              })
            }
          </div>
        </>
      }
    </div>
  );
}
