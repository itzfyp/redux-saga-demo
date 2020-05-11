import React from "react";
import { connect } from "react-redux";

import { loadImage } from "./state/actions";

const SideEffects = (props) => {

    return <>
        <h2>Side Effects with Api implementation</h2>
        <p className="info-card">this feature implemented to handle aynchronous Side Effects  like Api rquests.</p>
        <p>Below will display api request state & result as image </p>
        <div className="panel-container">
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
    url: state.sideEffects.url,
    progress: state.sideEffects.apiProgress
});

const mapDispatchToProps = (dispatch) => ({
    initImageApi: () => dispatch(loadImage())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideEffects);