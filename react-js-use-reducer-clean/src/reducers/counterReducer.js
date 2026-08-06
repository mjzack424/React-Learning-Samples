export const ACTIONS = {
    INCREMENT: "increment",
    INCREMENT_BY_AMOUNT: "incrementByAmount",
    DECREMENT: "decrement",
    DECREMENT_BY_AMOUNT: "decrementByAmount",
    RESET: "reset",
};

export const counterReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + 1;
        case ACTIONS.DECREMENT:
            return state - 1;
        case ACTIONS.INCREMENT_BY_AMOUNT:
            return state + action.payload;
        case ACTIONS.DECREMENT_BY_AMOUNT:
            return state - action.payload;
        case ACTIONS.RESET:
            return 0;
        default:
            return state;
    }
};