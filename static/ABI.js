var abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "employee",
				"type": "address"
			}
		],
		"name": "AddEmployee",
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
				"internalType": "uint256",
				"name": "unit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AddItem",
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
				"name": "city",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "acc",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "employee",
				"type": "address"
			}
		],
		"name": "AddShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "shops_unit",
				"type": "string"
			}
		],
		"name": "AddUnit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "shop",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "item_index",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "BuyItem",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "reject_index",
				"type": "uint256"
			}
		],
		"name": "CancelReject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "unit_length",
				"type": "uint256"
			}
		],
		"name": "Deployed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "shop",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "item_index",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "grade",
				"type": "uint256"
			}
		],
		"name": "GradeItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "reject_index",
				"type": "uint256"
			}
		],
		"name": "ProcessReject",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "RejectPurchase",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetEmployeeShop",
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
				"name": "shop_account",
				"type": "address"
			}
		],
		"name": "GetItems",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "unit",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "def_amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "grades",
						"type": "uint256[]"
					}
				],
				"internalType": "struct MarketPlace.Item[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetMyPurchases",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "customer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "shop",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "shop_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "item_index",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "item_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "enum MarketPlace.Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct MarketPlace.Purchase[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetMyRejects",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "customer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "shop",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "shop_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "item_index",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "item_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "enum MarketPlace.Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct MarketPlace.Purchase[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetShopRejects",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "customer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "shop",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "shop_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "item_index",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "item_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "enum MarketPlace.Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct MarketPlace.Purchase[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetShops",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "address payable",
						"name": "account",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "created",
						"type": "bool"
					}
				],
				"internalType": "struct MarketPlace.Shop[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetUnits",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]