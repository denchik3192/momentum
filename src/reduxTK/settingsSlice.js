import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    generalSettings: [
        { id: 1, name: "time", checked: true },
        { id: 2, name: "date", checked: false },
        { id: 3, name: "greeting", checked: true },
        { id: 4, name: "focus", checked: true },
        { id: 5, name: "qoutes", checked: true },
        { id: 6, name: "audio", checked: true },
        { id: 7, name: "Weather", checked: true },
    ],
    todoSettings: [
    ],
  },
  reducers: {
    toggleSetting(state, action) {
        console.log(action);
        let newSetting = [...state.generalSettings].filter(item => {
            if(item.id === action.payload) {
                item.checked = !item.checked
            }
            return item;
        })
        
       state.generalSettings = newSetting;
       console.log(state.generalSettings);
    },
  },
});

export default settingsSlice.reducer;
export const { toggleSetting } = settingsSlice.actions;
