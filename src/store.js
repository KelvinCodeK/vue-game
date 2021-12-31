import { createStore } from 'vuex';
import Mutations from './vuex/mutations.js';
import Getters from './vuex/getters.js';

const store = createStore({
    state() {
        return {
            selectedCharacter: 0,
            currentOpponent: 0,
            animation: false,
            yourCharacter: [{
              dead: false,
              disableButtons: false,
              healthbar: 100,
              number: 0,
              experience: 10,
              name: 'charizard',
              attackOne: 'swipe',
              attackOneMin: 5,
              attackOneMax: 10,
              attackTwo: 'lash',
              attackTwoMin: 15,
              attackTwoMax: 20,
              attackThree: 'flame dance',
              attackThreeMin: 10,
              attackThreeMax: 15,
              attackFour: 'boulder',
              attackFourMin: 8,
              attackFourMax: 13,
            },
            {
              dead: false,
              disableButtons: false,
              healthbar: 100,
              number: 1,
              experience: 0,
              name: 'pikachu',
              attackOne: 'swipe',
              attackOneMin: 5,
              attackOneMax: 10,
              attackTwo: 'electric bolt',
              attackTwoMin: 15,
              attackTwoMax: 20,
              attackThree: 'flame dance',
              attackThreeMin: 10,
              attackThreeMax: 15,
              attackFour: 'boulder',
              attackFourMin: 8,
              attackFourMax: 13,
            },],
            opponent: [
              {
              dead: false,
              healthbar: 100,
              number: 0,
              name: 'bulbazor',
              attackOne: 'root',
              attackOneMin: 5,
              attackOneMax: 10,
              attackTwo: 'leaf lash',
              attackTwoMin: 15,
              attackTwoMax: 20,
              attackThree: 'rubble',
              attackThreeMin: 5,
              attackThreeMax: 10,
              attackFour: 'dash',
              attackFourMin: 7,
              attackFourMax: 12
            },
            {
              dead: false,
              healthbar: 100,
              number: 1,
              name: 'charmendar',
              attackOne: 'root',
              attackOneMin: 5,
              attackOneMax: 10,
              attackTwo: 'leaf lash',
              attackTwoMin: 15,
              attackTwoMax: 20,
              attackThree: 'rubble',
              attackThreeMin: 5,
              attackThreeMax: 10,
              attackFour: 'dash',
              attackFourMin: 7,
              attackFourMax: 12
            }
            ]
          }
    },
    mutations: Mutations,
    getters: Getters
});

export default store;