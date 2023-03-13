import { createSlice } from "@reduxjs/toolkit";

export const weatherSettingsSlice = createSlice({
  name: "weathersettings",
  initialState: {
    weatherSettingsStatus: [
      { id: 1, name: "wind", checked: true },
      { id: 2, name: "humidity", checked: true },
      { id: 3, name: "pressure", checked: true },
      { id: 4, name: "description", checked: true },
    ],
  },
  reducers: {
    changeSettingsStatus(state, action) {
      let newSetting = [...state.weatherSettingsStatus].filter((item) => {
        if (item.name === action.payload) {
          item.checked = !item.checked;
        }
        return item;
      });
      state.weatherSettingsStatus = newSetting;
    },
  },
});

export default weatherSettingsSlice.reducer;
export const { changeSettingsStatus } = weatherSettingsSlice.actions;
