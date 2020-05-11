import React from "react";
import { connect } from "react-redux";

import { incrementAsync, decrementAsync } from "./state/actions";

const BasicActions = (props) => {

    return <>
        <h2>A Simple Asynchronous Action</h2>
        <p className="info-card">saga implementation for basic asynchronous action with redux state handling.</p>
        <p>Below count will be updated after 1s on each click...</p>
        <p>{props.count}</p>
        <p>
            <button className="btn" onClick={props.increment}>Increment</button>
            <button className="btn" onClick={props.decrement}>Decrement</button>
        </p>

    </>

};

const mapStateToProps = (state) => ({
    count: state.basic.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementAsync()),
    decrement: () => dispatch(decrementAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicActions);