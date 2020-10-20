import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from './actions/ItemsActionCreator';
import style from './Items.module.scss';

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => dispatch(fetchItems())
    }
}

const Items = () => {
    return (<h2 className={style.container}>TODO</h2>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);