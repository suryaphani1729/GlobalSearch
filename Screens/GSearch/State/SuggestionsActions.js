export const suggestionActions = (data) => (dispatch) => {
     console.log("Action::: AmmendData ::: >>>", data);
    dispatch({
        type: "GET_SUGGESTIONS",
        ...data
    });
};