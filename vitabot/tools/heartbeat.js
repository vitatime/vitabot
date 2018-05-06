/**
 *  @desc   Keep a link with d2bot#. If it's lost, the d2 window is killed
 *          modded for vitabot - This should be done with setInterval or something else
 *          don't use a whole thread for this - setInterval doesn't seem to be working
 */

function main() {
  include('src/json2.js');
  include('src/utils.js');
  include('external/d2bot.js');

  D2Bot.init();

  while (true) {
    D2Bot.heartBeat();
    delay(2500);
  }
}
