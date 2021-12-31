const attackCalculator = (min, max) => {
    return Math.floor(Math.random() * (max - min  + 1) + min);
    }

export default {
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
  }