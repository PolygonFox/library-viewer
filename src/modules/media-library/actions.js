import { action, create, createRequestTypes } from 'Modules/common/actions';

export const GAME_INTIALIZE = createRequestTypes('GAME_INITIALIZE');
export const GAME_UNLOAD = createRequestTypes('GAME_UNLOAD');

export const initialize = {
    request: (element) => action(GAME_INTIALIZE.REQUEST, { element }),
    success: app => action(GAME_INTIALIZE.SUCCESS, { app }),
    failure: error => action(GAME_INTIALIZE.FAILURE, { error })
}

export const unload = {
    request: () => action(GAME_UNLOAD.REQUEST),
    success: () => action(GAME_UNLOAD.SUCCESS),
    failure: error => action(GAME_UNLOAD.FAILURE, { error })
}