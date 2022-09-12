// const actionType = {
//     INCREMENT: 'INCREMENT',
// };

const initialState = {
    value: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + action.payload
            }
        default:
            return state;
    }
}

export default counterReducer;