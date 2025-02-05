# `chatbot-ic`

just a simple chatbot build using react,motoko and gemini api

To get started clone the  repo by running

```
   git clone https://github.com/elizabethdacadelearn/icp-chabot
   cd icp-chabot
   npm i
 ```

  navigate to frontend and create .env file and then add your gemini api key by naming it tp `GEMINI_API_KEY=""`

  ```
   cd chat/src/chat_frontend
   touch .env
   add gemini api key by naming it to GEMINI_API_KEY=""
```


## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```
enjoy our chabot
