import React, { Component } from 'react'
import {db} from './firebase';

export class Home extends Component {

    state={
        userLength:0,
        postLength:0
    }
     componentDidMount(){
        db.collection('users')
        .get()
        .then(snapshot =>{
             const users = []
             snapshot.forEach(doc=>{
                 const data = doc.data()
                 users.push(data)
             })
             this.setState({ userLength: users.length})
        })
        .catch( error => console.log(error) )
        db.collection('general')
        .get()
        .then(snapshot =>{
             const posts = []
             snapshot.forEach(doc=>{
                 const data = doc.data()
                 posts.push(data)
             })
             this.setState({ postLength: posts.length})
        })
        .catch( error => console.log(error) )
    }
    render() {
        return (
            <>
               <div className="container mt-5">
                   <h1>Dashboard :</h1>
                   <div className="row d-flex flex-row justify-content-between">
                       <div className="col-md-5 mt-5 box text-center py-5">
                           <h1>Total Users</h1>
                           <h3>{this.state.userLength}</h3>
                       </div>
                       <div className="col-md-5 mt-5 box text-center py-5">
                           <h1>Total Posts</h1>
                           <h3>{this.state.postLength}</h3>
                       </div>
                   </div>
               </div>  
            </>
        )
    }
}

export default Home;
