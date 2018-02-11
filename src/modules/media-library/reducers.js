import * as actions from './actions'

const initialState = {
    app: null,
}

export default (state = initialState, action) => {
    console.log('action -- ', action);
    switch (action.type) {
        case actions.GAME_INTIALIZE.SUCCESS:
            return {
                ...state,
                app: action.app
            }
        case actions.GAME_UNLOAD.SUCCESS:
            return {
                ...state,
                app: null
            }
        default:
            return state;
    }
};