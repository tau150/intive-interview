import { createSelector } from 'reselect';
import moment from 'moment';
// create select functions tto pick off the pieces of state we care about for this calculation

const playersSelector = state => state.players.players;
const selectedSearchFilters = state => state.searchFilters.filters;

const getPlayers = (playersSelector, selectedSearchFilters) => {
	let selectedPlayers = playersSelector;

	if (selectedSearchFilters.name) {
		selectedPlayers = playersSelector.filter(player => {
			return player.name.toLowerCase().includes(selectedSearchFilters.name.toLowerCase());
		});
	}

	if (selectedSearchFilters.name && selectedSearchFilters.selectedPosition) {
		selectedPlayers = playersSelector
			.filter(player => {
				return player.name.toLowerCase().includes(selectedSearchFilters.name.toLowerCase());
			})
			.filter(player => {
				return player.position === selectedSearchFilters.selectedPosition;
			});
	}

	if (selectedSearchFilters.name && selectedSearchFilters.selectedPosition && selectedSearchFilters.age) {
		selectedPlayers = playersSelector
			.filter(player => {
				return player.name.toLowerCase().includes(selectedSearchFilters.name.toLowerCase());
			})
			.filter(player => {
				return player.position === selectedSearchFilters.selectedPosition;
			})
			.filter(player => {
				return player.age === selectedSearchFilters.age;
			});
	}

	if (selectedSearchFilters.selectedPosition) {
		selectedPlayers = playersSelector.filter(player => {
			return player.position === selectedSearchFilters.selectedPosition;
		});
	}

	if (selectedSearchFilters.age) {
		selectedPlayers = playersSelector.filter(player => {
			return (
				moment([player.dateOfBirth])
					.fromNow(true)
					.split(' ')[0] === selectedSearchFilters.age
			);
		});
	}

	if (selectedSearchFilters.name && selectedSearchFilters.age) {
		selectedPlayers = playersSelector
			.filter(player => {
				return player.name.toLowerCase().includes(selectedSearchFilters.name.toLowerCase());
			})
			.filter(player => {
				return (
					moment([player.dateOfBirth])
						.fromNow(true)
						.split(' ')[0] === selectedSearchFilters.age
				);
			});
	}

	if (selectedSearchFilters.name && selectedSearchFilters.selectedPosition && selectedSearchFilters.age) {
		selectedPlayers = playersSelector
			.filter(player => {
				return player.name.toLowerCase().includes(selectedSearchFilters.name.toLowerCase());
			})
			.filter(player => {
				return player.position === selectedSearchFilters.selectedPosition;
			})
			.filter(player => {
				return (
					moment([player.dateOfBirth])
						.fromNow(true)
						.split(' ')[0] === selectedSearchFilters.age
				);
			});
	}

	if (selectedSearchFilters.selectedPosition && selectedSearchFilters.age) {
		selectedPlayers = playersSelector
			.filter(player => {
				return player.position === selectedSearchFilters.selectedPosition;
			})
			.filter(player => {
				return (
					moment([player.dateOfBirth])
						.fromNow(true)
						.split(' ')[0] === selectedSearchFilters.age
				);
			});
	}

	return selectedPlayers;
};

export default createSelector(
	playersSelector,
	selectedSearchFilters,
	getPlayers
);
