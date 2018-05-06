/**
 * Created on 5/05/2018.
 * @author vita
 * @desc utility functions for Out Of Game actions
 */

const oogUtils = (function() {
  /**
   * @desc Get a control
   * @param {object} param find control object (LOBBY_CREATE_GAME_CONTROL)
   * @returns {object} returns the control object
   */
  const getControl = ({ type, x, y, xsize, ysize, }) => (
    getControl(type, x, y, xsize, ysize)
  );

  /**
   * @desc Clicks a control
   * @param {object} param click a control (LOBBY_CREATE_GAME_CONTROL)
   * @returns {boolean} if the click was successful
   */
  const click = ({ type, x, y, xsize, ysize, targetx, targety, }) => {
    const control = getControl(type, x, y, xsize, ysize);

    return control && control.click(targetx, targety);
  };

  /**
   * @desc Get the text of a control
   * @param {object} con control to get text off (LOBBY_CREATE_GAME_CONTROL)
   * @returns {array} array of newline split strings
   */
  const getText = (con) => {
    const control = getControl(con);

    if (!control) {
      return false;
    }

    return control.getText();
  };

  /**
   * @desc Set the text of a control
   * @param {object} con control to set the text (LOBBY_CREATE_GAME_CONTROL)
   * @param {string} text set the control text to this
   * @returns {boolean} if the text was set
   */
  const setText = (con, text) => {
    if (!text) {
      return false;
    }

    const control = getControl(con);

    if (!control) {
      return false;
    }

    if (control.text === text) {
      return true;
    }

    return control.setText(text);
  };

  return {
    getControl: getControl,
    click: click,
    getText: getText,
    setText: setText,
  };
}());
