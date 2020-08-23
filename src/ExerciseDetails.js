import React, { Component } from 'react';
import { CardBody, ListGroup, ListGroupItem,CardHeader } from 'reactstrap';
import {getMuscleName} from './utils/helpers'
export default class ExerciseDetails extends Component {
  state = {
    currentExercise: '',
  };

  componentDidMount() {
    const { currentExercise } = this.props;
    if (currentExercise) {
      this.setState({
        currentExercise,
      });
    }
  }
  render() {
    const { currentExercise } = this.state;
    if (currentExercise) {
      return (
        <div>
          <CardHeader className='exerciseCard'>{getMuscleName(currentExercise.muscleID)}</CardHeader>
          <CardBody>
            <ListGroup variant='flush' className='text-left'>
              <ListGroupItem>
                <b>Name:</b> {currentExercise.exerciseName}
              </ListGroupItem>
              <ListGroupItem>
                <b>Sets:</b> {currentExercise.sets}
              </ListGroupItem>
              <ListGroupItem>
                <b>Reps:</b> {currentExercise.reps}
              </ListGroupItem>
              <ListGroupItem>
                <b>Notes:</b>{' '}
                {currentExercise.notes ? currentExercise.notes : '-'}
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </div>
      );
    } else {
      return <p>An error Occured</p>;
    }
  }
}
