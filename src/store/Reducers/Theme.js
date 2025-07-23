import * as act from "../types"

const initState = {
    mode: "light"
}

export const themeReducer = (state = initState, action) => {
    console.log("Reducer action triggered : ",action)
    switch (action.type) {
        case act.CHANGETHEME: return { ...state, mode: (state.mode === "light" ? "dark" : "light") }
        default: return state;
    }
}