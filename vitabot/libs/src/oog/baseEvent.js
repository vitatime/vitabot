/**
 * Created on 5/05/2018.
 * @author vita
 * @desc Base event listeners for Out Of Game containing
 *       actions that should be common across all profiles
 */

/**
 * @desc Base copydata handler, responds to D2Bot, ping requests, mule actions
 * @param {object} profile the profile object
 * @param {number} mode used to descrine the type of message (PING_REQUEST)
 * @param {string} data the message received
 */
const baseCopyData = (profile, mode, data) => {
  if (data === 'Handle') {
    profile.handle = mode;

    return true;
  }

  data = JSON.parse(data);

  switch (mode) {
    case D2BOT_GAME_DATA:
      Object.assign(profile, data);

      break;
    case D2BOT_PROFILE_DATA:
      Object.assign(profile, utils.parseProfile(data));

      break;
    case PING_REQUEST:
      sendCopyData(null, me.windowtitle, 4, 'pingrep');

      break;
    case CRASH_INFORMATION:
      if (data) {
      // gameInfo.crashInfo = JSON.parse(data);
      }

      break;
  }

  return true;
};
