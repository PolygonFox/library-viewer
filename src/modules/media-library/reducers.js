import * as actions from './actions'

const initialState = {
    media: [],
    noResults: false,
}

export default (state = initialState, action) => {

    switch (action.type) {
        case actions.MEDIA_LIBRARY_FETCH_MEDIA.SUCCESS:
            return {
                ...state,
                media: state.media.concat(action.media),
                noResults: action.media.length === 0
            }

        default:
            return state;
    }
};