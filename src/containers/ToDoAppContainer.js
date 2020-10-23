import { connect } from 'react-redux';
import ToDoApp from '../components/ToDoApp';
import { inputChange, inputSubmit, listItemClick, deleteListItem } from '../redux/modules/toDoApp' ;

function mapStateToProps(state){
    return {
        // gives our component access to state through props.toDoApp
        toDoApp: state.toDoApp
    }
}

//mapping actions to props
function mapDispatchToProps(dispatch){
    return {
        inputChange: (value)=>dispatch(inputChange(value)),
        inputSubmit:(event)=>dispatch(inputSubmit(event)),
        listItemClick:(index)=>dispatch(listItemClick(index)),
        deleteListItem:(index)=>dispatch(deleteListItem(index))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ToDoApp);