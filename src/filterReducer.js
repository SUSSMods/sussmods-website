const filterReducer = (state, action) => {

    switch(action.type) {
        case 'ADD_FILTER':
            return [...state, {
                id: action.filterItem.id,
                header: action.filterItem.header,
                option: action.filterItem.option,
            }]

        case 'REMOVE_FILTER':
            return state.filter(filterItem => 
                // filterItem.header !== action.filterItem.header &&
                // filterItem.option !== action.filterItem.option
                filterItem.id !== action.filterItem.id
                )
        case 'CLEAR_FILTERS':
            return [];
        default: 
            return state  
    }
}
export default filterReducer;