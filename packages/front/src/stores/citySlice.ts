import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

// Définissez les types pour les données des villes
export interface City {
  id: string;
  codePostal: string;
  nomCommune: string;
}

interface CityState {
  cities: City[];
}

const initialState: CityState = {
  cities: [],
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    addCities: (state: CityState, action: PayloadAction<City[]>) => {
      state.cities = action.payload;
    },
  },
});

export const selectCities = (state: RootState): City[] => state.city.cities;
export const { addCities } = citySlice.actions;
export default citySlice.reducer;
