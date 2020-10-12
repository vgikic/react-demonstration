import React from 'react';
import { connect } from 'react-redux';
import IState from '../../common/interface/IState';
import styles from './Spinner.module.scss';


const mapStateToProps = (state: IState) => {
    return {
        loading: state.loading
    }
}

const spinner = (props: any) => {
    return <div className={props.loading ? styles.loader : undefined}>
    </div>
}

export default connect(mapStateToProps)(spinner);