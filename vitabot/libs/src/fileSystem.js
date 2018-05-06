/**
 * Created on 6/13/2017.
 * @author vita
 * @desc functions for manipulating json files - txt files just use core functions
 */

const fileSystem = (function(format = 2) {
  /**
   * @desc Create a JSON file with the given object
   * @param  {string} file path to the file to create
   * @param  {object} obj the json object to write to file
   * @param  {number} format json format
   */
  const create = (file, obj, format) => (
    FileTools.writeText(file, JSON.stringify(obj, null, format))
  );

  /**
   * @desc Reads a JSON file
   * @param {string} file path of the file to read
   * @returns {object} returns a json object
   */
  const read = file => JSON.parse(FileTools.readText(file));

  /**
   * @desc Update a particular key in a json file
   * @param {string} file path to the file
   * @param {string} key key to update
   * @param {value} value update the key to this value
   * @param {number} format json format
   */
  const update = (file, key, value, format) => {
    let obj = read(file);

    // deep nested key
    if (key.includes('.')) {
      this.deepUpdate(obj, key, value);
    } else {
      if (!obj.hasOwnProperty(key)) {
        return false;
      }

      if (Array.isArray(obj[key])) {
        if (!obj[key].includes(value)) {
          obj[key].push(value);
        }
      } else {
        obj[key] = value;
      }
    }

    return FileTools.writeText(file, JSON.stringify(obj, null, format));
  };

  /**
   * @desc Remove a element from an array in a json file
   * @param {string} file path to the file
   * @param {string} key key to update must be array
   * @param {any} value value to remove
   * @param {number} format json format
   */
  const removeFromArray = (file, key, value, format) => {
    let obj = read(file);

    // deep nested key
    if (key.includes('.')) {
      this.deepUpdate(obj, key, value, true);
    } else {
      if (!obj.hasOwnProperty(key)) {
        return false;
      }

      if (!obj.hasOwnProperty(key) && !Array.isArray(obj[key])) {
        return false;
      }

      let arr = obj[key];

      if (arr.includes(value)) {
        arr.splice(arr.indexOf(value), 1);
      }
    }

    return FileTools.writeText(file, JSON.stringify(obj, null, format));
  };

  /**
   * @desc Updates a deep nested object property
   * @param {object} obj object to update
   * @param {string} path object prop to update 'object.prop1.prop2'
   * @param {string} value update prop to this value
   * @param {boolean} remove remove value from array
   */
  const deepUpdate = (obj, path, value, remove) => {
    let nodes = path.split('.');

    while (nodes.length > 1) {
      obj = obj[nodes.shift()];
    }

    if (Array.isArray(obj[nodes[0]])) {
      let arr = obj[nodes[0]];

      if (remove && arr.includes(value)) {
        arr.splice(arr.indexOf(value), 1);
      } else if (!remove && !arr.includes(value)) {
        arr.push(value);
      }
    } else {
      obj[nodes[0]] = value;
    }
  };

  return {
    create: create,
    read: read,
    update: update,
    removeFromArray: removeFromArray,
    deepUpdate: deepUpdate,
  };
}());
