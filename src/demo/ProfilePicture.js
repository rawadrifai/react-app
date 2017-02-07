import React from 'react'
import ReactDOM from 'react-dom'
import profileImage from './images/1.jpg'
//import {profilePic} from './css/main'
import {Image} from 'react-bootstrap'


class ProfilePicture extends React.Component {

    render() {
        return (
            <Image src={profileImage} circle/>
        )
    }
}

export default ProfilePicture