import { LoadSettings } from './loadSettings';

import chalk from 'chalk';

export default {
  init() {
    console.info(chalk`{green Loading Default Settings For ignition....\n}`);
    LoadSettings.loadDefaultSettings((defaultSettings) => {
      const { connection } = defaultSettings;
      const defaultServerPort = defaultSettings.port;
      const defaultDB = defaultSettings.database;
      const defDBConUser = connection.DB_USER;
      const defDBConHost = connection.DB_HOST;
      const defDBConPassword = connection.DB_PASSWORD;
      const defDB_Name = connection.DB_NAME;
      const defDBConPort = connection.DB_PORT;
      let finalSettings;
      let DB_HOST;
      let DB_USER;
      let DB_PASSWORD;
      let DB_NAME;
      let DB_PORT;
      let SERVER_PORT;
      if (process.env.DB_HOST) {
        DB_HOST = process.env.DB_HOST || defDBConHost;
        DB_USER = process.env.DB_USER || defDBConUser;
        DB_PASSWORD = process.env.DB_PASSWORD || defDBConPassword;
        DB_NAME = process.env.DB_NAME || defDB_Name;
        DB_PORT = process.env.DB_PORT || defDBConPort;
        SERVER_PORT = process.env.PORT || defaultServerPort;

        finalSettings = {
          SERVER_PORT,
          DB_HOST,
          DB_USER,
          DB_PASSWORD,
          DB_NAME,
          DB_PORT,
        };
      } else {
        DB_HOST = defDBConHost;
        DB_USER = defDBConUser;
        DB_PASSWORD = defDBConPassword;
        DB_NAME = defDB_Name;
        DB_PORT = defDBConPort;
        SERVER_PORT = defaultServerPort;

        finalSettings = {
          SERVER_PORT,
          DB_HOST,
          DB_USER,
          DB_PASSWORD,
          DB_NAME,
          DB_PORT,
        };
        // console.info(chalk`{green FINAL Settings\n ${Object.keys(finalSettings).map((key) => `${key}: ${finalSettings[key]}\n`)}}`)
        console.info(chalk`{green Default Settings Loaded!\n }`);
      }
    });
  },

  createAdminUser() {

  },
};
