# How to start
* install linter, linter-eslint, linter-ui-default on atom or vb(hopefully they exist similarly in its ecosystem... ben ;) ) packages. Please do not work on any code until you have linting set up!

# Install and Commands to run everything
1. Run `yarn install` from the root directory first
2. Then `cd client && yarn install`
3. `yarn start` to run the dev server for the first time 
  * If you have already have run `yarn start` you can skip straight to `yarn start:react`  
  * This starts the mongod process as well as the server  
    * If you receive the error `child process failed to start` then you have 2 options.  
      - You can change the prestart script to say `mongod --fork --logpath /logs/mongodb.log --verbose`,  
          1. Kill the server with `yarn pm2 delete all`
          2. Rerun `yarn start`  
      - Otherwise you can kill your instance of running mongo with the following commands  
          1. `mongo`  
          2. `use admin`  
          3. `db.shutdownServer()`  
          4. These have now killed your instance of mongod and you can rerun `yarn start`  
  4. Now you can run `yarn pm2 logs`
  5. Followed by `yarn start:react`
  * If you need to kill this process then you can by hitting `ctrl+c` in the terminal that is running it
  * This will have a server for logs running on port 3000, a connection to the mongo, and a server for react based on port 8080
  * You will now see a browser automatically open that has HMR and auto updating for client/server code without any refreshing!
