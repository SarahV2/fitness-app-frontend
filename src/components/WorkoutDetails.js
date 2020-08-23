import React, { Component } from 'react';
import {

  CardHeader,
  Card,

  CardBody,
} from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import EditWorkoutForm from './EditWorkoutForm';
import Modal from 'react-awesome-modal';

export default class WorkoutDetails extends Component {
  state = {
    currentWorkout: '',
    editState: false,
    visible: false,
  };

  componentDidMount() {
    this.setState({
      currentWorkout: this.props.workout[0],
    });
    console.log(this.props.workout);
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  toggleEditState = () => {
    this.setState({ editState: true });
  };

  handleDelete = (workout_id) => {
    console.log(workout_id);
    axios
      .delete(`http://localhost:5000/api/workouts/${workout_id}`)
      .then((res) => {
        console.log(res);
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { currentWorkout, editState } = this.state;
    if (currentWorkout !== '') {
      console.log(currentWorkout);
      if (!editState) {
        return (
          <div className='col'>
            <div className=' col-sm-12 col-md-12 col-xs-12 '>
              <Card>
                <CardHeader className='text-center'>
                  <b>Exercise Summary</b>
                </CardHeader>
                <CardBody>
                  <ListGroup variant='flush' className='bookDetails text-left'>
                    <ListGroupItem>
                      <b>Name:</b> {currentWorkout.exerciseName}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Sets:</b> {currentWorkout.sets}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Reps:</b> {currentWorkout.reps}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Notes:</b>{' '}
                      {currentWorkout.notes ? currentWorkout.notes : '-'}
                    </ListGroupItem>
                  </ListGroup>
                  <br />
                  <Button onClick={() => this.openModal()} variant='info'>
                    Edit
                  </Button>{' '}
                  <Button
                    onClick={() => this.handleDelete(currentWorkout._id)}
                    variant='danger'
                  >
                    Delete
                  </Button>
                </CardBody>
              </Card>
            </div>
            <Modal
            visible={this.state.visible}
            width='350'
            height='420'
            effect='fadeInDown'
            onClickAway={() => this.closeModal()}
          >
            <div id='form-modal'>
              <h6 id='form-title'>Edit details</h6>
              <EditWorkoutForm workout={currentWorkout} />
              <a id='close-button' href='javascript:void(0);' onClick={() => this.closeModal()}>
                Close
              </a>
            </div>
          </Modal>
          </div>
        );
      } else {
        return <EditWorkoutForm workout={currentWorkout} />;
      }
    } else {
      return <p>an error occured</p>;
    }
  }
}
