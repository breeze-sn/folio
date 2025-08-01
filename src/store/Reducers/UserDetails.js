import * as act from "../types.js"

const initstate = {
    id: "",
    username: "",
    photo: ""
}

export const UserReducer = (state = initstate,action)=>{
    switch(action.type){
        case act.SETUSER: return{ ...state, id: action.payload.id, username: action.payload.username,photo: action.payload.photo }
        default: return state;
    }
}