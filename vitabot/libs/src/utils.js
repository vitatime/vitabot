/**
 * Created on 4/5/2018.
 * @author vita
 * @desc utility functions
 */

const utils = (function() {
  /**
   * @desc Sleeps ms amount of time plus random delay
   * Undefined check is helpful because me.ping is undefined
   * in single player
   * @param  {number} ms sleep for
   * @param  {number} add=50 upper number for rand
   */
  const delay = (ms = 10, add = 50) => delay(ms, rand(1, add));

  /**
   * @desc Make a copy of an Object
   * @param  {object} obj the object to copy
   * @returns {object} the copied object
   */
  const cloneObject = obj => JSON.parse(JSON.stringify(obj));

  /**
   * @desc Remove certain values from an array and return copy
   * @param  {array} arr the array to filter
   * @param  {array} values the values to remove
   * @returns {array} the newly filtered array
   */
  const removeArrayValue = (arr, ...values) => arr.filter(i => !values.includes(i));

  /**
   * @desc Takes in profile data from D2Bot and converts it
   * to lower case for consistency
   * @param  {object} obj D2Bot profile to convert
   * @returns {object} the lower case D2Bot profile
   */
  const parseProfile = (obj) => {
    let result = {};
    const parsedTag = obj.Tag.split(',');

    result.password = parsedTag[0];
    result.singlePlayer = parsedTag.includes('sp');

    Object.keys(obj).forEach(key => {
      result[key.toLowerCase()] = obj[key];
    });

    return result;
  };

  /**
<<<<<<< HEAD
   * @desc Include all files in a folder
=======
   * Include all files in a folder
   * path param must end with '/' - probably should change this
>>>>>>> parent of 4210efe... Code tidy, added badges
   * @param  {string} folder folder to include
   */
  const includeAll = path => {
    const fileList = dopen('libs/' + path).getFiles();

    // We have to remove libs from path because the include core function
    // uses a different path to dopen..
    path = path.split('/').filter(f => f !== 'libs').join('/');

    fileList.forEach(f => !isIncluded(path + f) && include(path + f));
  };

  return {
    delay: delay,
    cloneObject: cloneObject,
    removeArrayValue: removeArrayValue,
    parseProfile: parseProfile,
    includeAll: includeAll,
  };
}());
