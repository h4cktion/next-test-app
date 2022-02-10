import { useDispatch, useSelector } from 'react-redux';
import { setIdTaskDetail, updateTask } from '../actions';

function CardContent() {
    const {tasks, idTaskDetail} = useSelector((state) => state.app);
    const task = tasks.filter(card => card.id === idTaskDetail)[0];
    const dispatch = useDispatch();

    const closeModal = () => {;
      dispatch(setIdTaskDetail(null));
    }

    const clickInCard = (e) => {
      e.stopPropagation();
    }

    const changeCardTitle = (e) => {
      const {value} = e.target;
      const copyTask = {...task};
      copyTask.title = value;
      dispatch(updateTask(copyTask));
    };

  return (
    <div className='bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0' onClick={closeModal}>
      <div className="w-2/5 bg-slate-100 p-5 rounded-md h-1/2 flex text-slate-500" onClick={clickInCard}>
        <div className='flex-1'>
          <div className='text-xl font-bold'>
          <input type='textarea' defaultValue={task.title} onChange={changeCardTitle} className='bg-slate-100 rounded w-full focus:bg-gray-50'/>
          </div>
        </div>
        <div className='text-xs '>
          <span className='block'>Ajouter à la carte</span>
          Membres
        </div>
      </div>
    </div>
  )
}

export default CardContent