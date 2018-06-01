
export function addToHistory (item){
    return {
        type: 'ADD_TO_HISTORY',
        item
    }
}


const reducer = (prevState = [], action) => {
    switch(action.type){
        case 'ADD_TO_HISTORY':
            return [...prevState, action.item]
        default:
            return prevState;
    }
}

export default reducer;