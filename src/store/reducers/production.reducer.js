import { EDIT_PRODUCTION } from "../types"

const initialState = {
    "material-stock" : 50 , 
    "stock" : 20 , 
    "assembly" : 0 , 
    "mainfacturing" : 60 
}

const productionReducer = function (state = initialState  ,  {type , payload }) { 
    switch(type) { 
        case EDIT_PRODUCTION : 
        return {...state,...payload }
        default : 
        return state ; 
    }
}


export default productionReducer ; 