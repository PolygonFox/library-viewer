import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import * as actions from './actions'

import * as selectors from './selectors'
import * as mediaAPI from './api'

function* fetchMedia({ page }) {

    try {
        const media = yield mediaAPI.getMedia(page)

        yield put(actions.fetchMedia.success(media))

    } catch(err) {
        console.log(err)
    }
 
}


export default [
    takeEvery(actions.MEDIA_LIBRARY_FETCH_MEDIA.REQUEST, fetchMedia),
]