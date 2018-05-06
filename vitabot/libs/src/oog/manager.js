/**
 * Created on 5/05/2018.
 * @author vita
 * @desc manage everything Out Of Game related
 */

const oogManager = function(profile) {
  /**
   * @desc Perform a action based on current location
   */
  const action = () => {
    const locationAction = OOG_LOCATIONS[getLocation()];

    if (!locationAction) {
      return false;
    }

    return profile.actions[locationAction](profile);
  };

  /**
   * @desc Initialize connection to D2Bot
   * General startup operations
   */
  const init = () => {
    while (!profile.handle) {
      delay(50);
    }

    DataFile.updateStats('handle', profile.handle);
    D2Bot.init();
    load('tools/heartbeat.js');
    D2Bot.requestGameInfo();
    D2Bot.getProfile();

    // wait for profile/game from d2bot - baseCopyData()
    // may need change
    while (Object.keys(profile).length <= 1) {
      delay(50);
    }

    // wait for obj parsing in asynchronus callback - baseCopyData()
    delay(250);
  };

  /**
   * @desc Ingame loop
   */
  const inGameLoop = () => {
    // do stuff
  };

  return {
    action: action,
    init: init,
    inGameLoop: inGameLoop,
  };
};
