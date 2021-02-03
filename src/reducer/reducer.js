
const initalState = {
    username: 'Hello',
    value: 1,
    name: 'alo',
    highlight: true,
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'register':
            return { ...state, username: 'vinh', password: 'Hello' }
        case 'ADD_TODO':
            return { ...state, value: state.value + action.superUp , responseArray : action.array };
        case 'DOWN':
            return { ...state, value: state.value - 1 };
        case 'Color':
            return { ...state, highlight: !state.highlight };
        default:
            return state
    }
}

export default reducer


responseArray = [{id :1 , show: true}]