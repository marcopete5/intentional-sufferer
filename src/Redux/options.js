export function addOption(option) {
    return {
        type: 'ADD_OPTION',
        option
    }
}

const reducer = (prevState = ['Fast for 12 hours', 'Get rejected today', 'Sit in silence without moving for 30 min', 'Zero sugar/carbs all day', 'No meat all week', 'Say nothing all day except in answer to questions', 'Leave your phone at home all day', 'Give the first person you see after leaving your house $10', 'Bike 30+ miles', 'Run/Walk 10 miles', 'No television shows this week', 'Talk to a stranger for 5 min'], action) => {
    switch (action.type) {
        case 'ADD_OPTION':
            return [...prevState, action.option]
        default:
            return prevState;
    }
}

export default reducer