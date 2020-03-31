const initSearchResult= {};
    
    function SearchReducer(state = initSearchResult, action) {
        switch (action.type) {
           case "GET_SEARCH_RESULT" : return {...action.payload};break;
            default:
                return state;
        }
    }
    
    export default SearchReducer;