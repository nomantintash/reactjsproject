import { ALL_MEDIA } from '../actions/media-action';
const INITIAL_STATE = { media: '' };
export default function (state = {} , action) {
    switch (action.type) {
        case ALL_MEDIA:
            INITIAL_STATE.media = action.payload;
            return state = {...INITIAL_STATE};
        default:
            return state;
    }
}