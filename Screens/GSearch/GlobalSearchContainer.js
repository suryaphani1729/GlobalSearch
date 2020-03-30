 import { connect } from "react-redux";
import GlobalSearchComponent from './GlobalSearchComponent';


const mapStateToProps = (state /* , props */) => (
    {
        suggestions:state.SuggestionsReducer,
        searchResult: state.SearchReducer
      
    }
  );
  
  const mapDispatchToProps = {
   
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GlobalSearchComponent);