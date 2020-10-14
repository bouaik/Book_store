const filter = (state = 'All', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return filter;
    default:
      return state;
  }
};

export default filter;
