const initSuggestions= {"suggestion":["product","products","productsamplepage1","productsamplepage10"]};

getSuggestions = searchKey =>{
   
   return initSuggestions;
}

export const getSuggestionAction = (searchKey) => (dispatch) => {
    const data = getSuggestions(searchKey);
    dispatch({
        type: "GET_SUGGESTIONS",
        payload: {...data}
    });
};