import { createStore } from 'vuex';
const attackCalculator = (min, max) => {
    return Math.floor(Math.random() * (max - min  + 1) + min);
    }

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
    mutations: {
        selectedHandler(state, nr) {
          state.selectedCharacter = nr;
        },
        attackHandlerMethod(state, payload) {
        let min;
        let max;
        switch(payload.attack) {
            case 'one':
                min = state.yourCharacter[state.selectedCharacter].attackOneMin;
                max = state.yourCharacter[state.selectedCharacter].attackOneMax;
                break;
            case 'two':
                min = state.yourCharacter[state.selectedCharacter].attackTwoMin;
                max = state.yourCharacter[state.selectedCharacter].attackTwoMax;
                break;
            case 'three':
                min = state.yourCharacter[state.selectedCharacter].attackThreeMin;
                max = state.yourCharacter[state.selectedCharacter].attackThreeMax;
                break;
            case 'four':
                min = state.yourCharacter[state.selectedCharacter].attackFourMin;
                max = state.yourCharacter[state.selectedCharacter].attackFourMax;
                break;
        }
          state.animation = true;
          setTimeout(() => {
            state.animation = false;
          }, 301);
          const value = attackCalculator(min, max);
          if(state.opponent[state.currentOpponent].healthbar - value <= 0) {
            state.opponent[state.currentOpponent].healthbar = 0;
            state.opponent[state.currentOpponent].dead = true;
            state.yourCharacter[state.selectedCharacter].experience += 20;
          if(state.opponent[state.currentOpponent + 1]) {
              setTimeout(() => {
              state.currentOpponent++;
              state.opponent[state.currentOpponent].healthbar = 100;
            }, 2000);
            }
            else {
              alert('End of combat');
            }
            return;
          }
          else {
            state.opponent[state.currentOpponent].healthbar -= value;
          }
          // const opponentAttack = '';
          const rndm = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          let opponentAttackValue;
          const that = state;
          switch(rndm) {
              case 1:
              opponentAttackValue = attackCalculator(that.opponent[0].attackOneMin, that.opponent[0].attackOneMax);
              break;
            case 2:
              opponentAttackValue = attackCalculator(that.opponent[0].attackTwoMin, that.opponent[0].attackTwoMax);
              break;
            case 3:
              opponentAttackValue = attackCalculator(that.opponent[0].attackThreeMin, that.opponent[0].attackThreeMax);
              break;
            case 4:
              opponentAttackValue = attackCalculator(that.opponent[0].attackFourMin, that.opponent[0].attackFourMax);
              break;   
          }
          if(state.yourCharacter[state.selectedCharacter].healthbar - opponentAttackValue <= 0) {
            state.yourCharacter[state.selectedCharacter].healthbar = 0;
            state.yourCharacter[0].dead = true;
            state.yourCharacter[state.selectedCharacter].disableButtons = true;
            return;
          }
          else {
            state.yourCharacter[state.selectedCharacter].healthbar -= opponentAttackValue;
          }
        }
      },
      getters: {
        totalHealth(state) {
            let total = 0;
            let x;
            for(x in state.yourCharacter) {
            total += state.yourCharacter[x].healthbar;
            }
            if(total > 0) {
            return total;
            }
            else {
            alert('you lost');
            return 0;
            }
        },
        characters(state) {
            return state.yourCharacter;
        },
        character(state) {
            return state.yourCharacter[state.selectedCharacter];
        },
        enemy(state) {
            return state.opponent[state.currentOpponent];
        },
        currentHealth(state) {
            return state.yourCharacter[state.selectedCharacter].healthbar;
        },
        enemyHealth(state) {
            return state.opponent[state.currentOpponent].healthbar;
        },
        animation(state) {
            return state.animation;
        },
        characterMediumHealth(state) {
            if(state.opponent[state.currentOpponent].healthbar > 50) {
                return false;
            }
            else {
                return true;
            }
        },
        characterLowHealth(state) {
            if( state.opponent[state.currentOpponent].healthbar <= 20){
                return true;
            }
        },
        enemyMediumHealth(state) {
            if(state.opponent[state.currentOpponent].healthbar > 50) {
                return false;
            }
            else {
                return true;
            }
        },
        enemyLowHealth(state) {
            if(state.opponent[state.currentOpponent].healthbar <= 20){
                return true;
            }
        },
        experience(state) {
            return state.yourCharacter[state.selectedCharacter].experience;
        }
        }
});

export default store;