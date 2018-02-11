import React, { Component } from 'react'
import Config from 'Config'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    display: none;
`


const CardComponent = styled.div`
    width: 360px;
    box-shadow: rgba(0, 0, 0, 0.14902) 0px 2px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover ${Overlay} {
        display: block;
    }
`

class Card extends Component {

    constructor(props) {

        super(props)
        this.state = {
            imageLoop: null,
            imageLoopState: 0
        }

    }

    componentDidMount() {

        if(this.props.type === 'VIDEO') {

            const imageLoop = setInterval(() => {
                this.setState({
                    imageLoopState: (this.state.imageLoopState + 1) % 3
                })
            }, 2000)

            this.setState({
                imageLoop
            })
        }


    }

    componentWillUnmount() {
        if(this.state.imageLoop) {
            clearInterval(this.state.imageLoop);
            this.setState({
                imageLoop: null
            })
        }
    }

    render() {

        let {name, type, height, width, thumbnail } = this.props;
    
        if(type === 'VIDEO') {
            thumbnail = `${Config.api}/m/${thumbnail}${name}_${this.state.imageLoopState + 1}.webp`;
        } else {
            thumbnail = `${Config.api}/m/${thumbnail}`
        }

        return (
            <VisibilitySensor
                partialVisibility={true}
                offset={{ top: -500, bottom: -500 }}
            >
                {({ isVisible }) =>

                    <CardComponent style={{ height: height / width * 360 }}>

                        {isVisible && 
                            <Overlay>
                                <label>Type: { type }</label>
                            </Overlay>}
                        {isVisible && <img src={thumbnail} />}
                    </CardComponent>
                }
            </VisibilitySensor>
        )
    }
}


export default Card;