import React, { Component } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'Modules/rootReducer'
import rootSaga from 'Modules/rootSaga'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import theme from 'Constants/theme';

import Home from '../pages/Home'
import MediaLibrary from '../MediaLibrary'

import MainNavigation from 'Components/UI/Menus/MainNavigation'
import Button from 'Components/UI/Button';

const StyledApp = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: white;
    height: 100vh;
    width: 100vw;
    font-family: Lato;
`

// Saga
const sagaMiddleware = createSagaMiddleware()

// Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

class App extends Component {
    // static state = {  }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <ThemeProvider theme={theme}>
                        <StyledApp>
                            <MainNavigation>
                                <Link to="/"><Button>Home</Button></Link>
                                <Link to="/"><Button>Test</Button></Link>
                            </MainNavigation>
                            <Route exact path="/" component={MediaLibrary} />
                        </StyledApp>
                    </ThemeProvider>
                </Router>
            </Provider>
        );
    }
}

export default App;