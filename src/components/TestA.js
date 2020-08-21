import React, { Component } from 'react'
import axios from 'axios';

const accessToken=localStorage.getItem('SavedToken')
axios.interceptors.request.use(
    config=>{
        config.headers['x-auth-token']=accessToken
        return config
    },
    error=>{
        return Promise.reject(error)
    }
)
export default class TestA extends Component {

    
    handleClick=()=>{
        const accessToken=localStorage.getItem('SavedToken')
        console.log('local value:')
        console.log(accessToken)

        console.log('clicked!')
       
        const tokenn="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYzZGJhNGI5Nzc4NzA2MWI0ODJhMDAyIn0sImlhdCI6MTU5NzkxODY3MSwiZXhwIjoxNTk4Mjc4NjcxfQ.sJHqACfR3HhZsLFBXcVtu9SPZQaVH2aihAVfbHbeuKQ"
        const data={
    id:accessToken
        }
      
        
        //axios.defaults.headers.common["x-auth-token"]=accessToken
    axios
    .post('http://localhost:5000/api/workouts/',data)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
        console.log(error)
   
      });

    }
    render() {
        return (
            <div>
                <h2>Test</h2>
                <button onClick={()=>this.handleClick()}>Click Me</button>
            </div>
        )
    }
}
