import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import IState from '../../common/interface/IState';
import { AccountRoute } from '../../routes';
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



const Login = (props: IAccountState & RouteComponentProps) => {

    let history = useHistory();
    useEffect(() => {  
        if (props.payload.isAuthenticated) {
            history.push(AccountRoute);
        }
    },[props.payload.isAuthenticated]);


    const [email, changeEmailState] = useState('demouser@demo.com');
    const [password, changePasswordState] = useState('Password123!');
    const [isEmailValid, changeIsEmailValid] = useState(true);

    const onEmailChangeEventHandler = (email: string) => {
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        const isValid = emailRegex.test(email);
        changeIsEmailValid(isValid);
        changeEmailState(email);
    }

    const emailValidatorMessage = () => {
        return isEmailValid ? null : <span>Email is not in valid format</span>
    }

    return (
        <div className={style.container}>
            <form >

                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        onChange={event => onEmailChangeEventHandler(event.target.value)}
                        value={email}
                        id="email"
                        type="text">
                    </input>
                    {emailValidatorMessage()}
                </div>

                <div>
                    <label htmlFor="email">Pwd: </label>
                    <input onChange={event => changePasswordState(event.target.value)}
                        value={password}
                        id="email"
                        type="text">
                    </input>
                </div>

            </form>

            <button
                disabled={!isEmailValid}
                onClick={() => props.logIn(email, password)}>
                    SUBMIT
            </button>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);