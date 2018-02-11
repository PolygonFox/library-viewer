const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const createRequestTypes = (base) => {
    const res = {};
    //eslint-disable-next-line
    [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `${base}_${type}`);
    return res;
}

export const action = (type, payload = {}) => ({ type, ...payload });