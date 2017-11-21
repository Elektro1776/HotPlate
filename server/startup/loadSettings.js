import fs from 'fs';
import path from 'path';

const defaultSettingsPath = path.resolve(process.cwd(), 'server/defaultSettings/defaultSettings.json');
const devSettingsPath = path.resolve(process.cwd(), 'server/devSettings/dev.settings.json');

/**
Class to load our Default or Dev settings if there are any.
* @class
*/
class LoadSettings {
  /**
  Filters our keys passed in from loadDevSettings
  * @param {Object} obj - Settings object passed in.
  * @returns {Array} returns array of all the keys that have a value
  */
  filterKeys = (obj) => Object.keys(obj)
    .filter(this.checkForDevSetting.bind(this, obj));
  /**
    * Check for any Dev Settings that are added by developer
    * @param {Object} settings  the full devSettings object.
    * @param {String} key the key used to check if there is a setting.
    * @returns {String} the key used to access the devSettings prop value.
  */
  checkForDevSetting = (settings, key) => {
    if (settings[key]) {
      if (settings[key] instanceof Object) {
        this.loadDevConnectionSettings(settings[key]);
        return;
      }
      return key;
    }
  }
  /**
  Attach the config settings defined by the dev to the process object.
  * @param {Object} connectionObj the connection object read from delevoper.settings.json.
  * @returns {void}
  */
  loadDevConnectionSettings = (connectionObj) => {
    this.filterKeys(connectionObj).map((key) => {
      process.env[key] = connectionObj[key];
    });
  }
  /**
  * Loads the devSettings onto process.env object if we read the seetings successfully. Rejects with error < Promise >
  @returns {void} resolves or rejects the promise
  */
  loadDevSettings = () => new Promise((resolve, reject) => {
    fs.readFile(devSettingsPath, (err, data) => {
      const settings = JSON.parse(data);
      if (!err) {
        this.filterKeys(settings)
          .map((key) => {
            process.env[key] = settings[key];
          },
          );
        resolve();
      }
      reject(err);
    });
  });
  /**
  * Loads the default settings and tries to attach any custom dev settings to the process.env object.
  * @param {LoadSettings~settingsCallback} cb - callback function passed in from init method on start.js file.
  * @returns {void}
  */
  loadDefaultSettings = (cb) => {
    fs.readFile(defaultSettingsPath, (err, data) => {
      if (!err) {
        const defaultSettings = JSON.parse(data);
        this.defaultSettings = defaultSettings;
        this.loadDevSettings().then((devSettings) => {
          cb(defaultSettings);
        });
        // TODO Need to add error handling here...
      }
      // TODO Need to add error handling AND here...
    });
  }
}
const instance = new LoadSettings();

export { instance as LoadSettings };
