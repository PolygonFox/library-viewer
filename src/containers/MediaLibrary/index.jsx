import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import MasonryInfiniteScroller from 'react-masonry-infinite';
import { fetchMedia } from 'Modules/media-library/actions'
import * as mediaLibrarySelectors from 'Modules/media-library/selectors'

import Config from 'Config'

import Card from './components/Card'

const Masonry = styled(MasonryInfiniteScroller) `
    margin: 0 auto;
    padding: 0;
`



class MediaLibrary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            page: 0
        }
    }

    render() {
        return (
            <Masonry
                hasMore={!this.props.noResults}
                loadMore={(page) => {
                    if(this.state.page < page) {
                        this.props.fetchMedia.call(this, page)
                    }
                }}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                {
                    this.props.media.map(media =>
                        <Card key={media._id} { ...media }>
                        </Card>
                    )
                }
            </Masonry>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        media: mediaLibrarySelectors.getMedia(state),
        noResults: mediaLibrarySelectors.getNoResults(state)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchMedia: (page) => {
            dispatch(fetchMedia.request(page))
        }
    }
}


MediaLibrary = connect(mapStateToProps, mapDispatchToProps)(MediaLibrary)

export default MediaLibrary