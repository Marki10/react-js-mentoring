import {createStore} from "redux";

const sortByReducer = (state = "release_date", action) => {
    switch (action.type) {
        case 'release_date':
            return state = "release_date";

        case 'vote_average':
            return state = "vote_average";

        default:
            return state;
    }
}

export default sortByReducer;
