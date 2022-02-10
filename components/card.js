import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateCardTitle } from "../actions";
import Tile from "./tile";

export default function Card({ card }) {
  const { title, id } = card;
  const { tasks } = useSelector(state => state.app);
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ({newTask}) => {
    dispatch(addTask(newTask));
    reset();
  };

  const changeCardTitle = (e) => {
    const {value} = e.target;
    dispatch(updateCardTitle(id, value));
  };

  return (
    <div className="w-1/5 bg-gray-200 p-2 rounded">
      <h2 className="mb-3">
        <input type='textarea' defaultValue={title} onChange={changeCardTitle} className='bg-gray-200 rounded w-full focus:bg-gray-50'/>
      </h2>
      <div className="w-full">
        <div className="">
          {tasks.map((task) => {
            if (task.cardID === id) return <Tile task={task} key={task.id} />
            return null;
          })}
        </div>
        {showInput && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="textarea"
              autoFocus
              {...register("newTask", { required: true })}
              className="bg-gray-50 rounded w-full p-2"
            />
            <input type="submit" value='Ajouter une carte' className="p-2 bg-sky-700 hover:bg-sky-800 rounded mt-2 text-white text-sm"/>
            <span className="text-bold mx-4 text-xl cursor-pointer" onClick={() => setShowInput(false)}>X</span>
          </form>
        )}
        {!showInput && (
          <span
            className="hover:bg-gray-300 block p-1"
            onClick={() => setShowInput(true)}
          >
            + Ajouter une carte
          </span>
        )}
      </div>
    </div>
  );
}
