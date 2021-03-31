import React from 'react';
import classes from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={classes.container}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
        )
}
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={"Login"} name={"login"} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} placeholder={"Password"} name={"password"} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

//HOC
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


export default Login;