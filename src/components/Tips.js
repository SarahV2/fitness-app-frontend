import React, { Component } from 'react';
import './../Tips.css';

export default class Tips extends Component {
  render() {
    return (
        <div id="team">
        <div class="container my-3 py-5 text-center">
            <div class="row mb-5">
               <div class="col">
                 <h1>Workout Tips</h1>
                <p class="mt-3"> </p>
               </div>
            </div>
           <div class="row">
             <div class="col-lg-3 col-md-6">
               <div class="card">
                 <div class="card-body">
                   <img src={require('./../images/water.jpg')} alt="" class="img-fluid rounded-circle
                  w-50 mb-3 "/>
                   <h4>Stay Hydrated</h4>
                   <p>drinking less water can make the workout harder ,
                  reduce your exercise performance and reduce body's ability to recover after you leave the gym</p>
                 </div>
               </div>
             </div>
               <div class="col-lg-3 col-md-6">
                 <div class="card">
               <div class="card-body">
                 <img src={require('./../images/fitness-gym.jpg')} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
                 <h4>Use free Weights</h4>
                 <p>Exercises using free weights like dumbbells lead 
                   to greater hormonal responses compared to similar exercises performed on exercise machines</p>
                 </div>
                 </div>
               </div>
               <div class="col-lg-3 col-md-6">
                <div class="card">
              <div class="card-body">
                <img src={require('./../images/carbs.jpg')} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
                <h4>Carbs</h4>
                <p> carbs are our body’s main source of fuel. If you do intense workouts such as Burpee,
                   you will need carbs, or you won’t have enough energy .</p>
                </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="card">
              <div class="card-body">
                <img src={require('./../images/stretching.jpg')} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
                <h4>Stretching</h4>
                <p>Include a stretching routine after your workout while your muscles are still warm. 
                  This helps to elongate muscles, relieve tension, and enhance flexibility.</p>
                </div>
                </div>
              </div>
             </div>
         
                
            </div>

            </div>
         
    
    );
  }
}
