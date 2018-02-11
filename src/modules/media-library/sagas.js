import ReactDOM from 'react-dom';
import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import * as actions from './actions'
import * as WHS from 'whs';
import * as THREE from 'three';

import * as selectors from './selectors'

function* initialize({ element }) {

    const dom = ReactDOM.findDOMNode(element);
    
    const resizeModule = new WHS.ResizeModule()
    const renderingModule =  new WHS.RenderingModule({ bgColor: 0x162129 })
    const app = new WHS.App([
        new WHS.ElementModule(element), // Apply to DOM.
        new WHS.SceneModule(), // Create a new THREE.Scene and set it to app.

        new WHS.DefineModule('camera', new WHS.PerspectiveCamera({ // Apply a camera.
            position: new THREE.Vector3(0, 0, 50)
        })),

        renderingModule, // Apply THREE.WebGLRenderer
        resizeModule // Make it resizable.
    ]);
      
    // resizeModule.setSize(dom.innerWidth, dom.innerHeight);
    renderingModule.setSize(dom.clientWidth, dom.clientHeight);

    app.start();

    yield put(actions.initialize.success(app));
}

function* unload() {
 
    const app = yield select(selectors.getApp)
    app.stop();
    yield put(actions.unload.success());
}

export default [
    takeEvery(actions.GAME_INTIALIZE.REQUEST, initialize),
    takeEvery(actions.GAME_UNLOAD.REQUEST, unload)
]