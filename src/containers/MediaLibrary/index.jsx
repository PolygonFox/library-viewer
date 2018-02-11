import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import MasonryInfiniteScroller from 'react-masonry-infinite';


const Masonry = styled(MasonryInfiniteScroller) `
    margin: 0 auto;
`

const Card = styled.div`
    width: 30%;
    box-shadow: rgba(0, 0, 0, 0.14902) 0px 2px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`

class MediaLibrary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            elements: ["Element", "ELement", "test", "woahh!"]
        }
    }

    render() {
        return (
            <Masonry
                hasMore={this.state.hasMore}
                loadMore={() => {
                    console.log('loadmore')

                    this.setState({ elements: this.state.elements.push("Element") })
                }}
            >
                {
                    this.state.elements.map(id =>
                        <Card key={id}><h2>{id}</h2></Card>
                    )
                }
            </Masonry>
        )
    }
}



const mapStateToProps = (state) => {
    return {

    }
}


const mapDispatchToProps = (dispatch) => {
    return {

    }
}


MediaLibrary = connect(mapStateToProps, mapDispatchToProps)(MediaLibrary)

export default MediaLibrary