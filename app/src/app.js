web3 = null
AccountAddress = {}
Contract = null
ContractAddress = "0x3361329775885d9BfB52D02B0f300254100dfb94"
abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "addSkin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "buySkin",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "putSkinForSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "skinIdToIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "skins",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "forSale",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SkinsLen",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

window.onload = function(){
  connectMetaMask()
  EventListener()
};

window.ethereum.on("accountsChanged", () => {
  GetAccountAddress()
  Update()
});

window.ethereum.on("chainChanged", () => {
  GetAccountAddress()
  Update()
});

async function Update(){
	if (Contract != null){
		NumberOfSkin = await Contract.methods.SkinsLen().call()
		if (NumberOfSkin > 0){
			ListAll = document.getElementById('ListOfSkin')
			ListOwn = document.getElementById('ListOfOwnSkin')
			ListAll.innerHTML = null
			ListOwn.innerHTML = null
			for (i=0;i<NumberOfSkin;i++){
				result = await Contract.methods.skins(i).call()
				NotHaveIt = true
				if (result[1] == AccountAddress){
					ListOwn.innerHTML += "<tr><th scope='row'>"+ i +"</th><td>" + result[0] +"</td><td>" + web3.utils.fromWei(result[2].toString(),'ether') +" ether</td><td>" + result[3] + "</td></tr>"
				}
				else{
					ListAll.innerHTML += "<tr><th scope='row'>"+ i +"</th><td>" + result[0] +"</td><td>"+ result[1] +"</td><td>" + web3.utils.fromWei(result[2].toString(),'ether') +" ether</td><td>" + result[3] +"</td></tr>"
				}
			}
		}
	}
}

function connectMetaMask(){
  if (typeof web3 !== "undefined") {
    // MetaMask is install
    web3 = new Web3(Web3.givenProvider);
  }
  else {
    console.log("Need to install MetaMask")
  }
  ethereum.request({ method: "eth_requestAccounts" });
  GetAccountAddress()
}

async function GetAccountAddress(){
  // get account address
  AccountAddress = (await web3.eth.getAccounts())[0];
  document.getElementById('AAddress').innerHTML = AccountAddress
  // init SC
  if (Contract == null){
    Contract = new web3.eth.Contract(abi,ContractAddress,{})
  }
}

function EventListener(){
  	// connect button
  	const ConnectButton = document.getElementById('connect');
  	ConnectButton.addEventListener('click', function(e) {
    	connectMetaMask()
		Update()
  	});
  	// reload button
  	const ReloadButton = document.getElementById('refresh')
  	ReloadButton.addEventListener('click', function(e){
		Update()
  	});
  	// Add skin button
  	const AddSkinButton = document.getElementById('add')
  	AddSkinButton.addEventListener('click', function(e){
		value = document.getElementById('name').value
		document.getElementById('name').value = null
    	Contract.methods
		.addSkin(value)
		.send({from: AccountAddress})
		.on("receipt", (receipt) => {
			Update()
    	    alert("Success")
      	})
      	.on("error", (err) => {
        	alert("Error")
      	});
	});
	// Buy Button
	const BuyButton = document.getElementById('Buy')
	BuyButton.addEventListener('click', function(e){
		SkinID = document.getElementById('TokenID').value
		PayAmount = document.getElementById("PayAmount").value
		Contract.methods
		.buySkin(SkinID)
		.send({
			from: AccountAddress,
			value: web3.utils.toWei(PayAmount.toString(),'ether'),
			gasLimit: 500000
		})
		.on("receipt", (receipt) => {
			Update()
    	    alert("Success")
      	})
      	.on("error", (err) => {
        	alert("Error")
      	});
		document.getElementById('TokenID').value = null
		document.getElementById("PayAmount").value = null
	});
	// Sell Button
	const SellButton = document.getElementById('Sale')
	SellButton.addEventListener('click', function(e){
		TokenID = document.getElementById('SkinName').value
		price = document.getElementById('Price').value
		Contract.methods
		.putSkinForSale(TokenID,web3.utils.toWei(price.toString(),'ether'))
		.send({from: AccountAddress})
		.on("receipt", (receipt) => {
			Update()
    	    alert("Success")
      	})
      	.on("error", (err) => {
        	alert("Error")
      	});
		document.getElementById('SkinName').value = null
		document.getElementById('Price').value = null
	});
	// Approve Button
	const ApproveButton = document.getElementById('Approve')
	ApproveButton.addEventListener('click', function(e){
		address = document.getElementById("Address").value
		TokenId = document.getElementById('SkinId').value
		Contract.methods
		.approve(address,TokenId)
		.send({from: AccountAddress})
		.on("receipt", (receipt) => {
			Update()
    	    alert("Success")
      	})
      	.on("error", (err) => {
        	alert("Error")
      	});
		document.getElementById("Address").value = null
		document.getElementById("SkinId").value = null
	});
}
