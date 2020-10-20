import React, { useRef } from 'react';
import { connect } from 'react-redux';
import IAccountPayload from './state/IAccountPayload';
import IAccountState from './state/IAccountState';
import style from './Account.module.scss';

const mapStateToProps = (state: { account: IAccountState }) => {
    return {
        ...state.account.payload
    } as IAccountPayload
}



const Account = (props: IAccountPayload) => {

    const tokenElement = useRef(null);

    const copyToClipboard = () => {
        var range = document.createRange();
        range.selectNode(tokenElement!.current!);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }

    const expirationDateTime = new Date(props.expiresIn).toString();

    return (
        <div className={style.container}>

            <div onClick={copyToClipboard.bind(tokenElement)}>
                <label htmlFor="token">Token</label>
                <div ref={tokenElement} className={style.token} id="token">{props.token}</div>
                <div className={style['token--message']}>CLICK TO COPY TO CLIPBOARD</div>
            </div>

            <div>
                <label htmlFor="refreshToken">Refresh token</label>
                <div className={style.token} id="refreshToken">{props.refreshToken}</div>
            </div>

            <div>
                <label htmlFor="expiresIn">Expires: </label>
                <span id="expiresIn">{expirationDateTime}</span>
            </div>

        </div>)
}

export default connect(mapStateToProps)(Account);