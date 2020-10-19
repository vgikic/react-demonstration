import React from 'react';
import { connect } from 'react-redux';
import IState from '../../common/interface/IState';
import styles from './Spinner.module.scss';


const mapStateToProps = (state: IState) => {
    return {
        loader: state.loader
    }
}

const spinner = (props: any) => {
    return (<div className={styles.backdrop}>
        <div className={props.loader.loading ? styles.loader : undefined}></div>
    </div>)
}

export default connect(mapStateToProps)(spinner);