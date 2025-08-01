import * as act from "../types.js"

const initstate = {
    face: false,
    eyes: false,
    numfaces: 0
}

const captureReducer = (state = initstate,action)=>{
    switch(action.type){
        case act.UPDATEFACEDETECTED: return{ face: action.payload}
        case act.UPDATEYESDETECTED: return{ eyes: action.payload}
        case act.UPDATENUMOFFACES: return{ numfaces: action.payload}
        default: return initstate;
    }
}

export default captureReducer;