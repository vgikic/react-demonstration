import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import IState from '../../common/interface/IState';
import { fetchItemsAsync } from './actions/ItemsActionCreator';
import style from './Items.module.scss';
import IItemsState from './state/IItemsState';

const mapStateToProps = ({ items: itemState }: IState) => {
    return  itemState
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => dispatch(fetchItemsAsync())
    }
}

const Items = (props: IItemsState & { fetchItems: () => void }) => {
debugger;
    useEffect(() => {
        props.fetchItems();
    }, []);

    const tableRowsData = props.payload.items.map(item => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
        </tr>
    ));

    return (
        <div className={style.container}>

            {tableRowsData}

        </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);