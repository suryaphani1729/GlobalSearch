 import { connect } from "react-redux";
import GlobalSearchComponent from './GlobalSearchComponent';
import {getSuggestionAction} from './State/SuggestionsActions';
import {SearchActions} from './State/SearchActions';


const mapStateToProps = (state /* , props */) => (
    {
        suggestions: state.SuggestionsReducer,
        searchResult: state.SearchReducer
      
    }
  );


  const mapDispatchToProps = {
    getSuggestionAction,
    SearchActions,
  };



  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GlobalSearchComponent);