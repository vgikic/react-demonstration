import React, { useState } from 'react';
import { connect } from 'react-redux';
import IState from '../../common/interface/IState';
import { loginAsync } from '../account/actions/AccountActionCreator';
import IAccountState from '../account/state/IAccountState';
import style from './Login.module.scss';

const mapStateToProps = ({ account }: IState) => {
    return {
        ...account
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (email: string, password: string) => dispatch(loginAsync(email, password))
    }
}

const Login = (props: IAccountState) => {

    const [emailState, changeEmailState] = useState('demouser@demo.com');
    const [passwordState, changePasswordState] = useState('Password123!');

    return (
        <div className={style.container}>
            <form >

                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        onChange={event => changeEmailState(event.target.value)}
                        value={emailState}
                        id="email"
                        type="text">
                    </input>
                </div>

                <div>
                    <label htmlFor="email">Password: </label>
                    <input onChange={event => changePasswordState(event.target.value)}
                        value={passwordState}
                        id="email"
                        type="text">
                    </input>
                </div>

            </form>
            
            <button onClick={() => props.logIn(emailState, passwordState)}>SUBMIT</button>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);