import React from 'react';
import classes from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
       if (!userId) {
           userId = 12999;
       }
       this.props.getUserProfile(userId)
        this.props.getStatus(userId)
       // userAPI.getProfile(userId).then( response => {
       //     this.props.setUserProfile(response.data)
       //         });
    //     axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then( response => {
    //         this.props.setUserProfile(response.data)
    //     });
    }

    render() {
        return (
            <div className={classes.content}>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
) (ProfileContainer);