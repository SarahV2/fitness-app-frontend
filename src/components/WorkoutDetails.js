import React, { Component } from 'react'
import { Container, Button, Row, Alert, CardHeader, Card, CardFooter, CardTitle, CardText, CardBody,Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

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
    render() {
        const {currentWorkout}=this.state
        if(currentWorkout!==''){
            console.log(currentWorkout)
        return (
<div className='col'>
        <div className=' col-sm-12 col-md-12 col-xs-12 '>
            <Card >
              <CardHeader className="text-center"><b>Summary</b></CardHeader>
              <CardBody>
                <ListGroup variant="flush" className='bookDetails text-left'>
                  <ListGroupItem><b>Name:</b> {currentWorkout.exerciseName}</ListGroupItem>
                  <ListGroupItem><b>Sets:</b> {currentWorkout.sets}</ListGroupItem>
                  <ListGroupItem><b>Reps:</b> {currentWorkout.reps}</ListGroupItem>
                  <ListGroupItem><b>Notes:</b> {currentWorkout.notes?currentWorkout.notes:'-'}</ListGroupItem>

                </ListGroup>
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
