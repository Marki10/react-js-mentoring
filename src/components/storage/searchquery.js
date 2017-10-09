const searchQueryReducer = (state = [], action) => {
    let result;
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return state = action.payload;

        default:
            return state;
    }
}

export default searchQueryReducer;