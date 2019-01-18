import { createSelector } from 'reselect';

// create select functions tto pick off the pieces of state we care about for this calculation

const playersSelector = state => state.players.players;
const selectedSearchFilters = state => state.searchFilters.filters;

const getPlayers = (playersSelector, selectedSearchFilters) => {
  let selectedPlayers = [];
  if (selectedSearchFilters.name) {
    selectedPlayers = playersSelector.filter(player => {
      return player.name === selectedSearchFilters.name;
    });
  }

  return selectedPlayers;
};

export default createSelector(
  playersSelector, // piece of state
  selectedSearchFilters, // piece of state
  getPlayers //last argument is the function that has our select logic
);
// export const getPlayerSelector = state => state.players.players;
