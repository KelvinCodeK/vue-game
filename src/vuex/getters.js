export default {
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
        if(state.yourCharacter[state.selectedCharacter].healthbar <= 50 && state.yourCharacter[state.selectedCharacter].healthbar > 20) {
            return true;
        }
        else {
            return false;
        }
    },
    characterLowHealth(state) {
        if(state.yourCharacter[state.selectedCharacter].healthbar <= 20){
            return true;
        }
          else {
          return false;
        }
    },
    enemyMediumHealth(state) {
        if(state.opponent[state.currentOpponent].healthbar <= 50 && state.opponent[state.currentOpponent].healthbar > 20) {
            return true;
        }
        else {
            return false;
        }
    },
    enemyLowHealth(state) {
        if(state.opponent[state.currentOpponent].healthbar <= 20){
            return true;
        }
        else {
          return false;
        }
        },
    experience(state) {
        return state.yourCharacter[state.selectedCharacter].experience;
    }
    }