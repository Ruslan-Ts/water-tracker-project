import { createSelector } from "@reduxjs/toolkit";

export const selectorWaterRate = state => state.dataUser.user.waterRate;
export const selectorUserProfile = state => state.dataUser.user;

