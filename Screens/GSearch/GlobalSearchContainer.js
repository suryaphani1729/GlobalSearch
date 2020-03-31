 import { connect } from "react-redux";
import GlobalSearchComponent from './GlobalSearchComponent';
import {suggestionActions} from './State/SuggestionsActions';

const mapStateToProps = (state /* , props */) => (
    {
        suggestions:state.SuggestionsReducer,
        searchResult: state.SearchReducer
      
    }
  );
  console.log("******");


  const mapDispatchToProps = {
    suggestionActions
  };

  console.log(suggestionActions,mapDispatchToProps);


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GlobalSearchComponent);