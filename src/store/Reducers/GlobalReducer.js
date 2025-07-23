import * as act from "../types"

const initState = {
    pageChange: {
        url: "/",
        mode: false
    }
}

export const globalReducer = (state= initState, action) => {
    switch (action.type) {
        case act.CHANGE_PAGE:
            return {...state, pageChange: {
                url: action.payload.url,
                mode: action.payload.mode
            }}

        default: return initState;
    }
}