/**
 * Created on 5/05/2018.
 * @author vita
 * @desc handle events
 */

const events = (profile) => {
  const evts = {};

  // populate events
  ALL_EVENTS.forEach(type => {
    evts[type] = [];
  });

  /**
   * @desc Add an event callback
   * @param {string} type type of event to add (COPYDATA)
   * @param {function} fn function to call on event
   */
  const add = (type, fn) => evts[type].push(fn);

  /**
   * @desc Execute all callbacks for event type
   * @param {string} type type of event to execute (COPYDATA)
   * @param {array} args arguments for callback functions
   */
  const execute = (type, ...args) => evts[type].forEach(fn => fn(args));

  return {
    add: add,
    removeById: removeById,
    execute: execute,
  };
};
