import React, { Component } from 'react';
import firebase from './firebase';

export class Post extends Component {


    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('general');
        this.unsubscribe = null;
        this.state = {
          posts: []
        };
      }

      onCollectionUpdate = (querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
          const { title , category ,status,imgUrl,description } = doc.data();
          posts.push({
            key: doc.id,
            doc, // DocumentSnapshot
            title,
            category,
            status,
            imgUrl,
            description,
          });
        });
        this.setState({
          posts
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
                    <h1>Posts :</h1>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Status</th>
                            <th scope="col">Image</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th> 
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.posts.map( post =>{
                                return (
                                   <tr>
                                       <td>{count++}</td>
                                       <td>{post.title}</td>
                                       <td>{post.category}</td>
                                       <td>{post.status}</td>
                                       <td><img src={post.imgUrl} className="logo" alt="Book Lo" /></td>
                                       <td>{post.description}</td>
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

export default Post;
