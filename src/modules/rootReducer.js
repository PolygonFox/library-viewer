import { combineReducers } from 'redux'

import mediaLibraryReducer from './media-library/reducers'


export default combineReducers({
    'media-library': mediaLibraryReducer
})