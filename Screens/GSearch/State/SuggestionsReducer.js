const initSuggestions= {"suggestion":[]};


    function SuggestionsReducer(state = initSuggestions, action) {
        switch (action.type) {
            case "GET_SUGGESTIONS": return {...action.payload}; break;
            default:
                return state;
        }
    }
    
    export default SuggestionsReducer;