import { connect } from 'react-redux';
import ToDoApp from '../components/ToDoApp';

function mapStateToProps(state){
    return {
        // gives our component access to state through props.toDoApp
        toDoApp: state.toDoApp
    }
}

//mapping actions to props
function mapDispatchToProps(dispatch){
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ToDoApp);