export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const INCREMENT_COUNT_ASYNC = "INCREMENT_COUNT_ASYNC";
export const DECREMENT_COUNT = "DECREMENT_COUNT";
export const DECREMENT_COUNT_ASYNC = "DECREMENT_COUNT_ASYNC";

export const incrementAsync = () => ({
    type: INCREMENT_COUNT_ASYNC
});

export const decrementAsync = () => ({
    type: DECREMENT_COUNT_ASYNC
});
