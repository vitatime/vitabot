
const leaderOogActions = function(profile) {
  const createGame = ({ gameName, gamePass, difficulty, }) => {
    difficulty = difficulty.toLowerCase();

    oogUtils.setText(CREATE_GAME_NAME_TEXTBOX, gameName);
    oogUtils.setText(CREATE_GAME_PASS_TEXTBOX, gamePass);
    oogUtils.click(DIFFICULTY_CONTROLS[difficulty]);

    if (profile.starter.createGameDelay) {
      util.delay(profile.starter.createGameDelay * 1000);
    }

    return oogUtils.click(CREATE_GAME_CREATE_CONTROL);
  };

  return {
    createGame: createGame,
  };
};
