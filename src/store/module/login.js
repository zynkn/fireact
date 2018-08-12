import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_FORECAST = 'base/GET_FORECAST';

// action creators
export const getForecast = createAction(GET_FORECAST, api.getForecast);

//initial state
const initialState = Map({
  temperature: '0',
  condition: 'null',
  city: 'null',
  humidity: '-999',
  wind: '-999',
  icon: 'no images',
});

// reducer
export default handleActions({
  ...pender({
    type: GET_FORECAST,
    onSuccess: (state, action) => {
      const { temp } = action.payload.data.main;
      const { name } = action.payload.data;
      const desc = action.payload.data.weather[0].description;
      const wind = action.payload.data.wind.speed;
      const icon = action.payload.data.weather[0].icon;
      const humidity = action.payload.data.main.humidity;
      return state.set('temperature', temp)
        .set('city', name)
        .set('condition', desc)
        .set('wind', wind)
        .set('icon', icon)
        .set('humidity', humidity);
    }
  })
}, initialState);