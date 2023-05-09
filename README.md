# CSE426SmartContract
### Requirement
* Ganache
* Node.js
* **npm** command
* MetaMask

### Running the Program
* Open Ganache
* Click on **Quick Start** on Ganache
* On MetaMask click **forget password** 
* Use **MNEMONIC** from Ganache
* Open a terminal
* cd contract
* run command **truffle migrate -reset**
* Copy **Contract Address** from the result of the command
* cd ..
* cd app/src
* Open **app.js** change the **ContractAddress** to the Address just Copy
* Save and Exit
* cd ..
* npm install
* npm start
* Go to localhost:3000

### Online Website ###
* https://cse426smartcontract.onrender.com/

### Running Program Online ###
* create render account
* download the program and save it to your github
* On local, go to contract folder
* run command **truffle migrate --network sepolia**
* Copy the **contract address**
* go to app folder on your github
* go to src folder
* edit app.js file, and change the contract address to the address just copy
* Connect github and render account
* Create new web service
* connect to github project that you save the program
* on the redner website new web service
* name will website name
* Region select where your web service will run
* Branch used main
* Root Directory use app folder
* Build coomand will be npm install
* Start Command will be npm start
* at last click on create web service
* Wait for the app to deploy
* the app will now deploy on https://**Website Name**.onrender.com
