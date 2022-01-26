const filterReducer = (state, action) => {

    let newState;
    switch (action.type) {
        case 'ADD_FILTER':
            newState = [...state, {
                id: action.filterItem.id,
                header: action.filterItem.header,
                option: action.filterItem.option
            }]
        break;
        case 'REMOVE_FILTER':
            
            // [0] index as filterItem values are arrs of only 1 item
            const i = state.findIndex(filter => filter.id.includes(action.filterItem.id[0]))
            state[i].id = state[i].id.filter(id => id !== action.filterItem.id[0])
            state[i].option = state[i].option.filter(option => option !== action.filterItem.option[0])

            newState = state;
        break;
        case 'CLEAR_FILTERS':
            newState = [];
        break
        default:
            newState = state
    }

    // combine all matching filters with same header
    const finalState = newState.reduce((a, v) => {
            if (a[v.header]) {
                a[v.header].id.push(...v.id)
                a[v.header].option.push(...v.option)
            } else {
                a[v.header] = v
            }
            return a
        }, {})

    return Object.values(finalState);

    }

export default filterReducer;