import { action, create, createRequestTypes } from 'Modules/common/actions';

export const MEDIA_LIBRARY_FETCH_MEDIA = createRequestTypes('MEDIA_LIBRARY_FETCH_MEDIA');

export const fetchMedia = {
    request: (page) => action(MEDIA_LIBRARY_FETCH_MEDIA.REQUEST, { page }),
    success: media => action(MEDIA_LIBRARY_FETCH_MEDIA.SUCCESS, { media }),
    failure: error => action(MEDIA_LIBRARY_FETCH_MEDIA.FAILURE, { error })
}