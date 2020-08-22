import React, { Component } from 'react';
import {
    CardHeader,
    Card,
    CardBody
  } from 'reactstrap';
import ExerciseDetails from '../ExerciseDetails';
export default class WorkoutInfo extends Component {

    state={
        // recieve the list of workouts of a particular day
        listOfExercises:[]
    }

    componentDidMount(){
        const listOfExercises=this.props.list
        this.setState({
            listOfExercises
        })
    }

  render() {
      const {listOfExercises}=this.state

      if(listOfExercises){
    return (
      <div>
        <div className='col'>
          <div className=' col-sm-12 col-md-12 col-xs-12 '>
            <Card>
              <CardHeader className='text-center date-header'>
                <b>Some Date</b>
              </CardHeader>
              <CardBody>

            {listOfExercises.map(exercise=>{
                return <ExerciseDetails currentExercise={exercise}/>
            })}



              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }

else{
    return <p>An error occured</p>
}
  }
}
