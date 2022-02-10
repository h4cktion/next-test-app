import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_SNACK_MESSAGE } from "../types";

function SnackBar() {
  const dispatch = useDispatch();
  const {
    snackMessage: { message },
  } = useSelector((state) => state.app);
  const [animation, setAnimation] = useState("animate-fade-in-down");

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setAnimation("animate-fade-in-out");
        setTimeout(() => {
          dispatch({
            type: SET_SNACK_MESSAGE,
            payload: { message: null },
          });
          setAnimation("animate-fade-in-down");
        }, 500);
      }, 5000);
    }
  }, [message]);

  return (
    <>
      {message && (
        <div
          className={`absolute bottom-10 w-full flex justify-end text-center -mx-10 ${animation}`}
        >
          <div className="w-1/4 bg-orange-200 rounded-xl p-3">{message}</div>
        </div>
      )}
    </>
  );
}

export default SnackBar;
