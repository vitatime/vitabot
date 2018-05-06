/**
 * Created on 5/05/2018.
 * @author vita
 * @desc the base actions that all profiles need Out Of Game
 *       it is extended with specific actions (leader/follower)
 */

// TODO: lobby chat
// loginErr
// tcpOrOpen
const baseOogActions = function(profile) {
  let utcRetry = 0;
  let mutedKey = false;

  // TODO: join channel
  /**
   * @desc Click create game
   */
  const lobby = () => oogUtils.click(LOBBY_CREATE_GAME_CONTROL);

  /**
   * @desc Actions for lobby chat
   * Joins a channel
   */
  const lobbyChat = () => {
    if (!mutedKey) {
      mutedKey = oogUtils.muteCheck();
    }

    const channel = oogUtils.getChannel();

    if (!mutedKey && (channel && !oogUtils.channelCheck(channel))) {
      say('/join ' + channel);
    }

    return oogUtils.click(LOBBY_CREATE_GAME_CONTROL);
  };

  /**
   * @desc Actions for login screen, logs into account
   * @param {object} param profile object
   */
  const login = ({ account, password, }) => {
    if (!account || !password) {
      return false;
    }

    oogUtils.setText(LOGIN_ACCOUNT_TEXTBOX, account);
    oogUtils.setText(LOGIN_PASSWORD_TEXTBOX, password);

    return oogUtils.click(LOGIN_LOGIN_CONTROL);
  };

  /**
   * @desc Selects a character
   * @param {object} param profile object
   */
  const charSelect = ({ character, singlePlayer, }) => {
    // single player fix
    if (!singlePlayer && !oogUtils.getControl(CHARACTER_SELECT_REALM_LABEL)) {
      return oogUtils.click(CHARACTER_SELECT_EXIT_CONTROL);
    }

    if (!character || !oogUtils.getCharacterList().includes(character)) {
      return false;
    }

    const char = oogUtils.getCharacter(character);

    if (!char) {
      return false;
    }

    oogUtils.click(char);
    oogUtils.click(CHARACTER_SELECT_OK_CONTROL);

    return true;
  };

  /**
   * @desc Select a difficulty on single player
   * @param {object} param profile object
   */
  const singlePlayerDifficulty = ({ difficulty, }) => (
    oogUtils.click(SINGLE_PLAYER_DIFFICULTY_CONTROLS[difficulty.toLowerCase()])
  );

  /**
   * @desc Click single player, select a realm or login
   * @param {object} param profile object
   */
  const mainMenu = ({ realm, singlePlayer, }) => {
    if (singlePlayer) {
      return oogUtils.click(MAIN_MENU_SINGLE_PLAYER_CONTROL);
    }

    if (realm && !oogUtils.checkGateway(realm)) {
      return oogUtils.click(MAIN_MENU_GATEWAY_CONTROL);
    }

    return oogUtils.click(MAIN_MENU_LOGIN_CONTROL);
  };

  /**
   * @desc Select a realm
   * @param {object} param profile object
   */
  const gatewaySelect = ({ realm, }) => {
    if (!realm) {
      return false;
    }

    realm = realm.toLowerCase();

    if (!REALM_LABELS[realm]) {
      return false;
    }

    oogUtils.click(REALM_LABELS[realm]);
    oogUtils.click(GATEWAY_OK_CONTROL);

    return true;
  };

  /**
   * @desc Login to other multiplayer TCP
   */
  const otherMultiplayer = () => (
    oogUtils.click(OTHER_MULTIPLAYER_TCP_CONTROL)
  );

  /**
   * @desc  If we're connecting for too long click cancel
   * and then try again
   * @returns {boolean} false if we didn't get past connecting
   */
  const mainMenuConnecting = () => {
    let tick = getTickCount();

    while (getTickCount() - tick < (profile.starter.connectingTimeout * 1000)) {
      if (OOG_LOCATIONS[getLocation()] !== 'mainMenuConnecting') {
        break;
      }

      delay(10);
    }

    if (OOG_LOCATIONS[getLocation()] === 'mainMenuConnecting') {
      oogUtils.click(MAIN_MENU_CONNECTING_CANCEL_CONTROL);

      return false;
    }

    return true;
  };

  /**
   * @desc Exit the credits screen
   */
  const credits = () => (
    oogUtils.click(CREDITS_EXIT_CONTROL)
  );

  /**
   * @desc Exit the cinematics screen
   */
  const cinematics = () => (
    oogUtils.click(CINEMATICS_CANCEL_CONTROL)
  );

  // make messages constants
  const loginErr = () => {
    let text = oogUtils.getText(LOGIN_ERROR_LABEL).join(' ').toLowerCase();

    if (text.includes('has been disabled')) {
      // handle
    }

    if (text.includes('password you have entered is incorrect')) {
      // handle
    }

    if (text.includes('that account does not exist')) {
      // handle
    }

    // invalid cdkey
    // disconnected
  };

  const tcpOrOpen = () => {
    /*
    if (starterprofile.otherMultiplayer.hosts.includes(me.profile)) {
        return oogManager.click(oog.control.otherMultiplayer.host);
    }

    if (starterprofile.otherMultiplayer.joins.hasOwnProperty(me.profile)) {
        return oogManager.click(oog.control.otherMultiplayer.join);
    }

    return true;
    */
  };

  return {
    lobby: lobby,
    lobbyChat: lobbyChat,
    login: login,
    charSelect: charSelect,
    singlePlayerDifficulty: singlePlayerDifficulty,
    mainMenu: mainMenu,
    gatewaySelect: gatewaySelect,
    otherMultiplayer: otherMultiplayer,
    mainMenuConnecting: mainMenuConnecting,
    loginErr: loginErr,
    tcpOrOpen: tcpOrOpen,
    credits: credits,
    cinematics: cinematics,
  };
};
