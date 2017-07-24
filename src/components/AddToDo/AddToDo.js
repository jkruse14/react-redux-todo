import React from 'react'
import moment from 'moment'
import { Button, ControlLabel, FormGroup, FormControl, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { ADD_TODO, UPDATE_TODO, addTodo, updateTodo } from '../ToDo/ToDoActions'
import { closeModal } from '../Modals/ModalsActions'
import {incrementNextId} from '../AppActions'

const today = moment().format('YYYY-MM-DD')

class AddToDo extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       input_text: props.text,
       input_date: props.due_date,
       disableSubmit: true,
       show: props.show,
       action: props.action
     }
     this.dispatch = props.dispatch
   }

   componentWillReceiveProps(nextProps) {
     this.state = {
       ...this.state,
       show: nextProps.show,
       input_text: nextProps.text,
       input_date: nextProps.due_date,
       action: nextProps.action,
       id: nextProps.id
     }

     this.setDisableSubmit();
   }

   componentDidUpdate(prevProps, prevState) {
     if(prevState.input_text !== this.state.input_text ||
        prevState.input_date !== this.state.input_date) {
       this.setDisableSubmit();
     }
   }

  handleSubmit(e) {
    e.preventDefault()
    if(!this.state.input_text.trim()) {
      return
    }

    if(this.state.action === ADD_TODO) {
      this.dispatch(addTodo(this.state.input_text, this.state.input_date, this.state.id))
      this.dispatch(incrementNextId())
    } else if(this.state.action === UPDATE_TODO) {
      let todo = {
        id: this.state.id,
        text: this.state.input_text,
        due_date: this.state.input_date
      }
      this.dispatch(updateTodo(todo))
    }
    this.close();

  }

  close() {
    this.setState({
      input_text: '',
      input_date: today
    })
    this.dispatch(closeModal());
  }

  getTextValidationState() {
    const length = this.state.input_text.length;
    if (length > 5) return 'success';
    else if (length >= 1) return 'warning';
    else return 'error';
  }

  getDateValidationState() {
    if (!moment(this.state.input_date).isValid()) return 'error';

    const due = moment(this.state.input_date).format('YYYY-MM-DD');
    if (due > today) return 'success';
    else if (due == today) return 'warning';
    else return 'error';
  }

  handleInputsChange(field, e) {
    e.preventDefault();
    switch (field) {
      case 'input_text':
        this.setState({...this.state, input_text: e.target.value,})
        break;
      case 'input_date':
        this.setState({...this.state, input_date: e.target.value})
        break;
      default:
        break;
      }
  }

  setDisableSubmit() {
    let textValidation = this.getTextValidationState();
    let dateVaidation = this.getDateValidationState();
    if((textValidation === 'success' || textValidation === 'warning') &&
       (dateVaidation === 'success' || dateVaidation === 'warning')) {
         this.setState({disableSubmit: false});
       } else {
         this.setState({disableSubmit: true});
       }
  }

  render() {
    return (
      <div className="static-modal">
        <Modal show={this.state.show === true}>
          <Modal.Header>
            <Modal.Title>Add New To Do</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup controlId="addTodo_text" validationState={this.getTextValidationState()}>
                <ControlLabel>To Do:</ControlLabel>
                <FormControl type="text"
                             value={this.state.input_text}
                             placeholder="What needs doin'?"
                             onChange={this.handleInputsChange.bind(this, 'input_text')}
                             />
              </FormGroup>
              <FormGroup controlId="addTodo_date" validationState={this.getDateValidationState()}>
                <ControlLabel htmlFor="addTodo_date">Due by:</ControlLabel>
                <FormControl type='date'
                             value={this.state.input_date}
                             onChange={this.handleInputsChange.bind(this, 'input_date')}
                             />
              </FormGroup>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button id='modal-cancel' onClick={this.close.bind(this)}>Cancel</Button>
            <Button id='modal-save'
                    bsStyle='primary'
                    type="submit"
                    disabled={this.state.disableSubmit}
                    onClick={this.handleSubmit.bind(this)}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    show: state.modal.type === ADD_TODO || state.modal.type === UPDATE_TODO,
    text: state.modal.type === UPDATE_TODO ? state.todos[state.modal.editing_id].text : '',
    due_date: state.modal.type === UPDATE_TODO ? state.todos[state.modal.editing_id].due_date : today,
    action: state.modal.type,
    id: state.modal.type === UPDATE_TODO ? state.modal.editing_id : state.AppData.next_id
  }
}

AddToDo = connect(mapStateToProps)(AddToDo)

export default AddToDo;
