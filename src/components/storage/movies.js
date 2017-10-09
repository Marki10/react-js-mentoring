import axios from 'axios';

const movieReducer = (state = [], action) => {
    let movies = [];
    switch (action.type) {
        case "GET_MOVIES":
            movies = action.payload;
            return movies;
    default:
        return state
    }

    return state;
}

export default movieReducer;
