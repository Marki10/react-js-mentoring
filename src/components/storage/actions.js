export const setSortBy = (value) => {
  return {
    type: value
  };
};

export const setSearchBy = (value) => {
  return {
    type: value
  };
};

export const searchQuery = (value) => {
  return {
    type: 'SET_SEARCH_QUERY',
    payload: value
  };
};

export const getMovies = (query) => {
  return {
    type: 'GET_MOVIES',
    query: query
  };
};
