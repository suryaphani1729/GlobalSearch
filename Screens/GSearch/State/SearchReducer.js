const initSearchResult= [{id:1001,title:"Title1", desc:"Some Text1"},
{id:1002,title:"Title2", desc:"Some Text2"},
{id:1003,title:"Title3", desc:"Some Text3"},
{id:1004,title:"Title4", desc:"Some Text4"},
{id:1004,title:"Title4", desc:"Some Text5"},
{id:1004,title:"Title4", desc:"Some Text6"}];
    
    function SearchReducer(state = initSearchResult, action) {
        switch (action.type) {
            default:
                return state;
        }
    }
    
    export default SearchReducer;