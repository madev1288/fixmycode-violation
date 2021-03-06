import {createAction, handleAction} from 'redux-actions';
import Actions from '../action/';
import {Position} from "../../constants/Notifications";

// Define action creator
const showNotification = createAction(
  Actions.SHOW_NOTIFICATION,
  (type, message, position = Position.TOP_RIGHT) => ({type, message, position})
);

// Define reducer
const reducer = handleAction(showNotification,
  (state, {payload: { type, message, position}} ) =>
    ({
        isVisible: true, message: message, position: position, created: new Date().getTime(), type: type
      }
    ),
  {isVisible: false}
);

export {
  showNotification,
  reducer
}
