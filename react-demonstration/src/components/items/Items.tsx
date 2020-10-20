import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import IState from '../../common/interface/IState';
import { fetchItemsAsync } from './actions/ItemsActionCreator';
import style from './Items.module.scss';
import IItemsState from './state/IItemsState';

const mapStateToProps = ({ items: itemState }: IState) => {
    return itemState;
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => dispatch(fetchItemsAsync())
    }
}

const Items = (props: IItemsState & { fetchItems: () => void }) => {

    useEffect(() => {
        props.fetchItems();
    }, []);

    const tableRowsData = props.payload.items.map(item => (
        
        <React.Fragment key={item.id}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <img src={item.thumbnailUrl}></img>
        </React.Fragment>
    ));

    return (
        <div className={style.container}>

            <span><b>ID</b></span>
            <span><b>TITLE</b></span>
            <span><b>IMG</b></span>

            {tableRowsData}

        </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);