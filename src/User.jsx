import React, { Component } from 'react';
import firebase from './firebase';

export class User extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('users');
        this.unsubscribe = null;
        this.state = {
          users: []
        };
      }

      onCollectionUpdate = (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          const { name , email ,phone } = doc.data();
          users.push({
            key: doc.id,
            doc, // DocumentSnapshot
            name,
            email,
            phone,
          });
        });
        this.setState({
          users
       });
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }

    render() {
        var count=1;
        return (
            <>
                <div className="container mt-5 user">
                    <h1>Users :</h1>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">E-Mail</th>
                            <th scope="col">Phone#</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map( user =>{
                                return (
                                   <tr>
                                       <td>{count++}</td>
                                       <td>{user.name}</td>
                                       <td>{user.email}</td>
                                       <td>{user.phone}</td>
                                       <td>
                                            <button className="btn btn-danger ms-2">Delete</button>
                                        </td>
                                   </tr>
                                )
                            })
                        }
                         </tbody>
                    </table>  
                    
                </div>  
            </>
        )
    }
}

export default User;
