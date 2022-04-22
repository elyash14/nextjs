// import darkTheme from "theme/dark";
// import lightTheme from "theme/light";
// import { TOGGLE_THEME } from "../actions";

// export const themeReducer = (state: any = {}, action: any) => {
//     switch (action.type) {
//         case TOGGLE_THEME:
//             return state.isDark ? darkTheme : lightTheme;
//         default:
//             return state;
//     }
// }

import { createSlice } from '@reduxjs/toolkit'
import darkTheme from 'theme/dark'
import lightTheme from 'theme/light'

const themeSlice = createSlice({
    name: 'theme',
    initialState: darkTheme,
    reducers: {
        toggleTheme: (state) => state.isDark ? lightTheme : darkTheme
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer