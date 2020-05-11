import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { loadImage } from "./state/actions";

const SideEffects = (props) => {
    const [count, setCount] = useState(0);
    const [clearRef, setClearRef] = useState({ setInterval: null });

    useEffect(() => {
        console.log('is effect ::', props.loop);

        if (props.loop)
            clearRef.setInterval = setInterval(() => {
                setCount(c => c + 1);
            });
        else {
            clearRef.setInterval && clearInterval(clearRef.setInterval);
            setClearRef({ setInterval: null });
        }
    }, [props.loop]);

    return <>
        <h2>Non blocking Side Effects with Api implementation</h2>
        <p className="info-card">this feature implemented to make aynchronous Side Effects as backgorund process by forking.
        Then we can run other functionality</p>
        <p>Below will display api request time , state & result as image </p>

        <div className="panel-container">
            <div className="panel">
                <p>Response time of Api to fetch data</p>
                <p>{count}</p>
            </div>
            <div className="panel">
                <p>Current State of Api request</p>
                {props.progress.map(state => <p key={state}>{state}</p>)}
            </div>
            <div className="panel">

                <img src={props.url} />
            </div>
        </div>
        <p>
            <button className="btn" onClick={props.initImageApi}>Load Random Image</button>
        </p>
    </>

};

const mapStateToProps = (state) => ({
    url: state.nonBlockingSideEffects.url,
    progress: state.nonBlockingSideEffects.apiProgress,
    loop: state.nonBlockingSideEffects.loop,
});

const mapDispatchToProps = (dispatch) => ({
    initImageApi: () => dispatch(loadImage())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideEffects);