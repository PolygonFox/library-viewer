import mediaLibraryWatchers from './media-library/sagas'

export default function* () {
    yield [
        ...mediaLibraryWatchers
    ]   
}