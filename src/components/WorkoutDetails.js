import React, { Component } from 'react'
import { Container, Row, Alert, CardHeader, Card, CardFooter, CardTitle, CardText, CardBody,Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Button} from 'react-bootstrap'
import axios from 'axios';
export default class WorkoutDetails extends Component {
    state={
        currentWorkout:''
    }

    componentDidMount(){
        this.setState({
            currentWorkout:this.props.workout[0]
        })
        console.log(this.props.workout)
    }


    handleDelete=(workout_id)=>{
        console.log(workout_id)
        axios
        .delete(`http://localhost:5000/api/workouts/${workout_id}`, )
        .then((res) => {
          console.log(res);
          window.location.href = "/";
         
        })
        .catch((error) => {

          console.log(error);
 
          });
    }
    render() {
        const {currentWorkout}=this.state
        if(currentWorkout!==''){
            console.log(currentWorkout)
        return (
<div className='col'>
        <div className=' col-sm-12 col-md-12 col-xs-12 '>
            <Card >
              <CardHeader className="text-center"><b>Exercise Summary</b></CardHeader>
              <CardBody>
                <ListGroup variant="flush" className='bookDetails text-left'>
                  <ListGroupItem><b>Name:</b> {currentWorkout.exerciseName}</ListGroupItem>
                  <ListGroupItem><b>Sets:</b> {currentWorkout.sets}</ListGroupItem>
                  <ListGroupItem><b>Reps:</b> {currentWorkout.reps}</ListGroupItem>
                  <ListGroupItem><b>Notes:</b> {currentWorkout.notes?currentWorkout.notes:'-'}</ListGroupItem>

                </ListGroup>
                <br/>
                <Button onClick={() => this.toggleFormDisplay()} variant='info'>
              Edit
            </Button>{' '}
            <Button onClick={() => this.handleDelete(currentWorkout._id)} variant='danger'>
              Delete
            </Button>
              </CardBody>
            </Card>
    
            </div>

            </div>
        )
        }
        else{
            return <p>An error occured</p>
        }
    }
}
