import {createStore} from "redux";

const searchByReducer = (state = "title", action) => {
    switch (action.type) {
        case 'title':
            return state = 'title';

        case 'director':
            return state = 'director';

        default:
            return state;
    }
}

export default searchByReducer;
