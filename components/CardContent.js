import { useDispatch, useSelector } from "react-redux";
import { setIdTaskDetail, updateTask } from "../actions";
import CardMembers from "./CardMembers";

function CardContent() {
  const { tasks, idTaskDetail } = useSelector((state) => state.app);
  const task = tasks.filter((card) => card.id === idTaskDetail)[0];
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setIdTaskDetail(null));
  };

  const clickInCard = (e) => {
    e.stopPropagation();
  };

  const update = (e) => {
    const { value, name } = e.target;
    const copyTask = { ...task };
    copyTask[name] = value;
    dispatch(updateTask(copyTask));
  };

  return (
    <div
      className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0"
      onClick={closeModal}
    >
      <div
        className="w-2/5 bg-slate-100 p-5 rounded-md m-h-1/2 flex text-slate-500"
        onClick={clickInCard}
      >
        <div className="flex-1">
          <div className="text-xl mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <input
              type="textarea"
              defaultValue={task.title}
              name="title"
              onChange={update}
              className="bg-slate-100 rounded w-full focus:bg-gray-50 text-neutral-800 font-bold"
            />
          </div>
          <CardMembers members={task.owners}/>
          <div className="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="font-bold text-md text-neutral-800 block">
              Description
            </span>
          </div>
          <textarea
            defaultValue={task.description}
            placeholder='Ajouter une description plus détaillée...'
            name="description"
            onChange={update}
            rows={task.description.split('\n').length || 1}
            className={`resize-none h-auto ml-6 p-2 rounded w-10/12 focus:bg-gray-50 ${task.description ? 'bg-slate-100' : 'bg-slate-200' }  hover:bg-slate-300 hover:cursor-pointer`}
          />
        </div>
        <div className="text-xs ">
          <span className="block">Ajouter à la carte</span>
          Membres
        </div>
      </div>
    </div>
  );
}

export default CardContent;
