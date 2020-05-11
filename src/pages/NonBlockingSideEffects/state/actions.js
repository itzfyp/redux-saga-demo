export const INIT_SIDE_EFFECTS = "NON-BLOCKING : INIT SIDE EFFECTS";
export const REQUEST_IN_PROGRESS = "NON-BLOCKING : REQUEST IN PROGRESS";
export const REQUEST_SUCCESS = "NON-BLOCKING : REQUEST SUCCESS";
export const REQUEST_FAILED = "NON-BLOCKING : REQUEST FAILED";
export const SIDE_EFFECTS_COMPLETED = "NON-BLOCKING : SIDE EFFECTS COMPLETED";
export const START_LOOP = "NON-BLOCKING : START_LOOP";
export const INIT_STOP_LOOP = "NON-BLOCKING : INIT_STOP_LOOP";
export const STOP_LOOP = "NON-BLOCKING : STOP_LOOP";

export const loadImage = () => ({
    type: INIT_SIDE_EFFECTS
});