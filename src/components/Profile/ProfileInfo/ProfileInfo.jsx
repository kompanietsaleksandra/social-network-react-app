import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.content}>
            {/*<div className={classes.imgback}>*/}
            {/*    <img src='https://www.myfitness.ee/wp-content/uploads/2016/05/nature-wallpaper-07.jpg'/>*/}
            {/*</div>*/}
            <div>
                <img src={props.profile.photos.large || 'https://i.pinimg.com/280x280_RS/a8/48/85/a84885b077a97035013262daba83e800.jpg'} />
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <ProfileStatus  status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;