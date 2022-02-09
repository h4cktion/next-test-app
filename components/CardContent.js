import { useSelector } from 'react-redux';

function CardContent() {
    const {tasks, idTaskDetail} = useSelector((state) => state.app);
  return (
    <div>{tasks.filter(card => card.id === idTaskDetail)[0].title}</div>
  )
}

export default CardContent