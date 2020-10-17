import React from 'react';
import { connect } from 'react-redux';
import IAccountPayload from './state/IAccountPayload';
import IAccountState from './state/IAccountState';
import style from './Account.module.scss';

// import './Account.module.scss';


const mapStateToProps = (state: { account: IAccountState }) => {
    return {
        ...state.account.payload
    } as IAccountPayload
}

const Account = (props: IAccountPayload) => {
    return (

        <div className={style.container}>

            <div>
                <label htmlFor="token">Token:</label>
                <pre id="token">{props.token}</pre>
            </div>

            <div>
                <label htmlFor="refreshToken">Refresh token:</label>
                <span id="refreshToken">{props.refreshToken}</span>
            </div>

            <div>
                <label htmlFor="expiresIn">Expires in: </label>
                <span id="expiresIn">{props.expiresIn}</span>
            </div>

        </div>)
}

export default connect(mapStateToProps)(Account);