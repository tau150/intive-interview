import { createSelector } from 'reselect';
import moment from 'moment';
import _ from 'lodash';

const playersSelector = state => state.players.players;
const selectedSearchFilters = state => state.searchFilters.filters;

export const getPlayers = (playersSelector, selectedSearchFilters) => {
	let selectedPlayers = playersSelector.map(player => {
		player.age = moment([player.dateOfBirth])
			.fromNow(true)
			.split(' ')[0];

		return player;
	});

	if (!_.isEmpty(selectedSearchFilters)) {
		selectedSearchFilters.position = selectedSearchFilters.selectedPosition;

		delete selectedSearchFilters.selectedPosition;

		if (!selectedSearchFilters.position) {
			delete selectedSearchFilters.position;
		}
		if (!selectedSearchFilters.age) {
			delete selectedSearchFilters.age;
		}

		if (selectedSearchFilters.name) {
			selectedPlayers = selectedPlayers.filter(player => {
				return player.name.toLowerCase().includes(selectedSearchFilters.name.toLowerCase());
			});

			delete selectedSearchFilters.name;
		} else {
			delete selectedSearchFilters.name;
		}

		selectedPlayers = _.filter(selectedPlayers, selectedSearchFilters);
	}

	return {
		selectedPlayers,
		notInitialFetching:
			playersSelector.length === selectedPlayers.length || selectedPlayers.length > 0 ? true : false
	};
};
// export const getPlayers = (playersSelector, selectedSearchFilters) => {
// 	let selectedPlayers = playersSelector;

// 	if (selectedSearchFilters.name) {
// 		selectedPlayers = playersSelector.filter(player => {
// 			return player.name.toLowerCase().includes(selectedSearchFilters.name.toLowerCase());
// 		});
// 	}

// 	if (selectedSearchFilters.name && selectedSearchFilters.selectedPosition) {
// 		selectedPlayers = playersSelector

// 			.filter(player => {
// 				return player.position === selectedSearchFilters.selectedPosition;
// 			})
// 			.filter(playerFilterByPosition => {
// 				return playerFilterByPosition.name.toLowerCase().includes(selectedSearchFilters.name.toLowerCase());
// 			});
// 	}

// 	if (selectedSearchFilters.name && selectedSearchFilters.selectedPosition && selectedSearchFilters.age) {
// 		selectedPlayers = playersSelector
// 			.filter(player => {
// 				return player.name.toLowerCase().includes(selectedSearchFilters.name.toLowerCase());
// 			})
// 			.filter(player => {
// 				return player.position === selectedSearchFilters.selectedPosition;
// 			})
// 			.filter(player => {
// 				return player.age === selectedSearchFilters.age;
// 			});
// 	}

// 	if (selectedSearchFilters.selectedPosition) {
// 		selectedPlayers = playersSelector.filter(player => {
// 			return player.position === selectedSearchFilters.selectedPosition;
// 		});
// 	}

// 	if (selectedSearchFilters.age) {
// 		selectedPlayers = playersSelector.filter(player => {
// 			return (
// 				moment([player.dateOfBirth])
// 					.fromNow(true)
// 					.split(' ')[0] === selectedSearchFilters.age
// 			);
// 		});
// 	}

// 	if (selectedSearchFilters.name && selectedSearchFilters.age) {
// 		selectedPlayers = playersSelector
// 			.filter(player => {
// 				return player.name.toLowerCase().includes(selectedSearchFilters.name.toLowerCase());
// 			})
// 			.filter(player => {
// 				return (
// 					moment([player.dateOfBirth])
// 						.fromNow(true)
// 						.split(' ')[0] === selectedSearchFilters.age
// 				);
// 			});
// 	}

// 	if (selectedSearchFilters.name && selectedSearchFilters.selectedPosition && selectedSearchFilters.age) {
// 		selectedPlayers = playersSelector
// 			.filter(player => {
// 				return player.name.toLowerCase().includes(selectedSearchFilters.name.toLowerCase());
// 			})
// 			.filter(player => {
// 				return player.position === selectedSearchFilters.selectedPosition;
// 			})
// 			.filter(player => {
// 				return (
// 					moment([player.dateOfBirth])
// 						.fromNow(true)
// 						.split(' ')[0] === selectedSearchFilters.age
// 				);
// 			});
// 	}

// 	if (selectedSearchFilters.selectedPosition && selectedSearchFilters.age) {
// 		selectedPlayers = playersSelector
// 			.filter(player => {
// 				return player.position === selectedSearchFilters.selectedPosition;
// 			})
// 			.filter(player => {
// 				return (
// 					moment([player.dateOfBirth])
// 						.fromNow(true)
// 						.split(' ')[0] === selectedSearchFilters.age
// 				);
// 			});
// 	}

// 	return {
// 		selectedPlayers,
// 		notInitialFetching:
// 			playersSelector.length === selectedPlayers.length || selectedPlayers.length > 0 ? true : false
// 	};
// };

export default createSelector(
	playersSelector,
	selectedSearchFilters,
	getPlayers
);
