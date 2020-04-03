const initSuggestions= {"suggestion":["product","products","productsamplepage1","productsamplepage10"]};

getSuggestions = searchKey =>{
   if(searchKey.includes("product"))
      return initSuggestions;
   else if(searchKey == "aaa"){
      return {"suggestion": []};
   }
   else
    {
        const temp = [];
        temp.push(searchKey);
        temp.push(searchKey+"_def");
        temp.push(searchKey+"_ghi");
        temp.push(searchKey+"_klm");
        temp.push(searchKey+"_xyz");
        return {"suggestion": temp};
    }
}

export const getSuggestionAction = (searchKey) => (dispatch) => {
    const data = getSuggestions(searchKey);
    dispatch({
        type: "GET_SUGGESTIONS",
        payload: {...data}
    });
};