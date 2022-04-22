import { createAction } from "redux-actions";

const createRequestAction = (actionType, payloadCreator) => {
    const actionCreator = createAction(actionType, payloadCreator);
    actionCreator.success = `${actionType}_SUCCESS`;
    actionCreator.fail = `${actionType}_FAIL`;
    return actionCreator;
}
export default createRequestAction;