import React, {Component} from 'react';
import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAcGvbewcSqkNOEJ5-DbHU7Vtrkc52SjRM",
    authDomain: "test-4da3c.firebaseapp.com",
    databaseURL: "https://test-4da3c.firebaseio.com",
    storageBucket: "test-4da3c.appspot.com",
    messagingSenderId: "46011756804"
};



const tbxStyle = {
        float: 'left',
        width: 100
}
const btnStyle = {
        width: 100
}

var myObject = {
            userId: '',
            username: '',
            email: ''
    }

class FirebaseExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            username: '',
            txt: ''
        }



        firebase.initializeApp(config) 
    }

    
    update(e) {
        
         console.log(e.target.id)

        switch(e.target.id) {
            case 'userIdTbx':
                myObject.userId = e.target.value
               // this.setState({userId: e.target.value})
            break;
            case "usernameTbx":
                myObject.username = e.target.value
               // this.setState({username: e.target.value})
            break;
            case "emailTbx":
                myObject.email = e.target.value
               // this.setState({email: e.target.value})
            break;

            default:
            break;

        }
    }

    render() {
        return (
            <div>
                <label style={tbxStyle}>userId: </label>
                <input id="userIdTbx" type="text"  onChange={this.update.bind(this)} />
                
                <br/> 
                <label style={tbxStyle}>username: </label>
                <input id="usernameTbx" type="text" onChange={this.update.bind(this)} />
                
                <br/>
                <label style={tbxStyle}>email: </label>
                <input id="emailTbx" type="text" onChange={this.update.bind(this)} />
                
                <br/>
                <button style={btnStyle} onClick={this.writeUserData.bind(this)}>WRITE</button>
                <button style={btnStyle} onClick={this.readUserData.bind(this)}>READ</button>
                <button style={btnStyle} value="my button" onClick={this.update.bind(this)}>TEST</button>
                
                <br/>
                <br/>
                <label>{this.state.userId}</label>
                <br/>
                <label>{this.state.username}</label>
                <br/>
                <label>{this.state.email}</label>
            </div>
        );
    }

    writeUserData(e) {

        console.log('test')
        this.setState({
            userId: myObject.userId,
            username: myObject.username,
            email: myObject.email
        });

        firebase.database().ref('users/' + myObject.userId).set({
            username: myObject.username,
            email: myObject.email
            
        });
    }

    readUserData(e) {

        console.log('something')

        var self = this;

        var userRef = firebase.database().ref('users/' + myObject.userId);
        userRef.on('value', function(snapshot) {
            console.log(snapshot.val())
            self.setState({
                userId: snapshot.val().userId,
                username: snapshot.val().username,
                email: snapshot.val().email
            })
            //updateStarCount(postElement, snapshot.val());
        });
    }
}



export default FirebaseExample;