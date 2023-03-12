import { createSelector } from "@reduxjs/toolkit";

export const selectAllWeatherSettings = (state) => state.weathersettings;

export const selectsettingsStatus = createSelector(
    [selectAllWeatherSettings],
    (weatherSettings) => {
        console.log(weatherSettings);
        return weatherSettings.weatherSettingsStatus;
    });
