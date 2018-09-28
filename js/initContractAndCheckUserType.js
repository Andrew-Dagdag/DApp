
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
  console.log("Web3 Detected! " + web3.currentProvider.constructor.name);

  web3.eth.defaultAccount = web3.eth.accounts[0];
  console.log("Printing the account[0]");
  console.log(web3.eth.defaultAccount);
  

  var contractABI = web3.eth.contract([
    {
      "constant": true,
      "inputs": [
        {
          "name": "_class",
          "type": "string"
        }
      ],
      "name": "getClassSize",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_class",
          "type": "string"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getStudent",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_teacher",
          "type": "address"
        }
      ],
      "name": "addTeacher",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_teacher",
          "type": "address"
        },
        {
          "name": "_class",
          "type": "string"
        }
      ],
      "name": "addTeacherClass",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_student",
          "type": "address"
        },
        {
          "name": "_class",
          "type": "string"
        }
      ],
      "name": "addStudentToClass",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_filename",
          "type": "string"
        },
        {
          "name": "_class",
          "type": "string"
        }
      ],
      "name": "addAssignment",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ]);
  
  var contract = contractABI.at("0xe50a23A73C5885bc01916a19A189187396cCD2B4");
  
  console.log("HELLO HELLO HELLO \n");
  console.log(contract);
} else {
  // set the provider you want from Web3.providers
  console.log("Please install metamask");
}