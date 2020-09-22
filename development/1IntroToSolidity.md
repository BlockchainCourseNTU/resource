# 1. Introduction to Solidity - The Basics

[CryptoZombies](https://cryptozombies.io/) is a game-based tutorial that teaches you all things technical about blockchains and also, how to make smart contracts in Solidity. You are suggested to play the game and use this tutorial as a reference material.

## 1. Data Types 
#### 1.1 Value Types
Value types are the data that is passed by value.
##### 1.1.1 Bool 
 
Bool type only has 2 possible values, `true` or `false`. They allow the following operators:

* `!`(logical negation)
* `&&`(logical and)
* `||`(logical or)
* `==`(equality)
* `!=`(inequality)

##### 1.1.2 Integers
Size of integers ranges from int8/uint8 to int256/uint256, in steps of 8. They allow the following operators:

* Comparisons: `<=`, `<`, `==`, `!=`, `>=`, `>` (evaluate to bool)
* Bit operators: `&`, `|`, `^` (bitwise exclusive or), `~`(bitwise negation)
* Shift operators: `<<`(left shift), `>>`(right shift)
* Arithmetic operators: `+`, `-`, unary`-`, `*`, `/`, `%`(modulo), `**`(exponentation)

##### 1.1.3 Address 
There are two main types of this class:

* **Address**: Holds a 20 byte value (size of an Ethereum address).
* **Address Payable**: Same as address, but with the additional members transfer and send.

They allow the following operators: `<=`, `<`, `==`, `!=`, `>=`, `>`

The transfer function fails if the balance of the current contract is not large enough or if the Ether transfer is rejected by the receiving account. The transfer function reverts on failure.

Send is the low-level counterpart of transfer. They are both [members of addresses](https://solidity.readthedocs.io/en/v0.7.0/types.html?highlight=send#members-of-addresses). If the execution fails, the current contract will not stop with an exception, but `send` will retutn `false`.

Example of Transfer & Send

```solidity
  address payable = address(0x123);
  address myAddress = address(this);
  if(x.balance < 10 && myAddress.balance >= 10)
    x.transfer(10);
```
  
##### 1.1.4 Contract Types 

* Contracts do not support any operators.
* The members of contract types are the external functions of the contract including public state variables.
* For a contract C, type(C) returns type information about the contract.

##### 1.1.5 String Literals 

```solidity
bytes32 a = "stringliteral"
string b = "stringliteral"
a == b
Hex "DEADBEEF"
"\n\"\'\\abc\
def"
```
##### 1.1.6 Enum 

```solidity
pragma solidity>=0.4.16<0.6.0;

contract test{
 enum ActionChoices{ GoLeft, GoRight, GoStraight, SitStill }
 ActionChoices choice;
 ActionChoices constant defaultChoice = ActionChoices.GoStraight;
 
 function setGoStraight() public {
  choice = ActionChoices.GoStraight;
 }
 
 function getChoice() public view returns (ActionChoices) {
  return choice;
 }
 
 function getDefaultChoice() public pure returns (uint) {
  return unit(defaultChoice);
 }
}
```
In the above example, since enum types are not part of ABI, the signature of "getChoice" will be automatically changed to "getChoice() returns (uint8)" for all matters external to Solidity. The integer type used is just large enough to hold all enum values. If you have more than 256 values, "uint16" will be used.

#### 1.2 Reference Types and Data Structures 
Reference types are the data that is passed by reference. They are either Arrays, Structs or Data Locations.
##### 1.2.1 Arrays 

```solidity
// Arrays
bytes32[5] nicknames; // static array
bytes32[] names; // dynamic array
uint newLength = names.push(); // adding returns new length of the array

// Length
names.length; // get length
names.length = 1; // lengths can be set (for dynamic arrays in storage only)

// multidimensional array
uint x[][5]; // arr with 5 dynamic array elements (opp order of most languages)
```
##### 1.2.2 Structs 

```solidity
struct Bank {
 address owner;
 uint balance;
}
Bank b = Bank({
 owner: msg.sender,
 balance: 5
});
// or 
Bank c = Bank(msg.sender, 5);

c.balance = 4; // Set to new value
delete b; // Sets to initial value, set all variables in struct to 0, except mappings
```
##### 1.2.3 [Data Locations](https://solidity.readthedocs.io/en/v0.7.0/types.html?highlight=data%20locations#data-location) 

* memory
* storage
* calldata
##### 1.2.4 Mappings 

```solidity
// Dictionaries (any type to any other type)
mapping (string=>uint) public balances;
balances["charles"] = 1;
```
Result of `balances["charles"]` is 0, since all non-set key values return zeroes.

```
// "public" allows following from another contract
contractName.balances("charles");
// "public" created a getter (but not setter) like the following:
function balances(string _account) returns (uint balance) {
 return balances[_account];
}
```

```solidity
// Nested mappings
mapping(address => mapping (address => uint)) public custodians;

// To delete
delete balances["John"];
delete balances; // Set all elements to 0
```
## 2. [Functions](https://solidity.readthedocs.io/en/v0.7.0/structure-of-a-contract.html?highlight=functions#functions) 
#### 2.1 Function Basics 

* function name
* argType1 arg1, ...
* access classifier
   * public - all can access
   * external - cannot be accessed internally, only externally
   * internal - only this contract and contracts derived from it can access
   * private - can be accessed only from this contract 
* returnType(optional return var name)

```solidity
function withdraw(uint withdrawAmount) public returns (uint remainingBal) {
 require(withdrawAmount <= balances[msg.sender]);
 
 balances[msg.sender] -= withdrawAmount;
 
 msg.sender.transfer(withdrawAmount);
 
 return balances[msg.sender];
}
```

**IMPORTANT**: Access classifiers determine who can USE your functions, but everyone can see them, since

#### 2.2 [Payable Function](https://solidity.readthedocs.io/en/v0.7.0/060-breaking-changes.html?highlight=payable%20function#new-features) 
Only functions marked as payable can receive Ether. Non-payable functions with Ether values will be routed to default function.

```solidity
function deposit() public payable returns (uint) {
 // Use 'require' to test user inputs, 'assert' for internal invariants
 // Here we are making sure that there isn't an overflow issue
 require((balances[msg.sender] + msg.value) >= balances[msg.sender]);
 
 balances[msg.sender] += msg.value;
 
 LogDepositMade(msg.sender, msg.value); // fire event
 
 return balances[msg.sender];
}
```

#### 2.3 [Fallback Function](https://solidity.readthedocs.io/en/v0.7.0/contracts.html?highlight=fallback#fallback-function) 
Intuitively, this can be thought of as the default behavior when the contract does not recognize the command.

* Invoked when a function is called which does not match any other contract function
* Only one per contract
* No arguments, returns nothing
* Typically payable: enables contract to receive Ether sent directly to it

```solidity
function() external payable {
 require(msg.value >= prize || msg.sender == owner);
 king.transfer(msg.value);
 king = msg.sender;
 prize = msg.value;
}
```


#### 2.4 [Constructors](https://solidity.readthedocs.io/en/v0.7.0/structure-of-a-contract.html?highlight=functions#functions) 

* Create an instance of the contract with the given arguments
* Only one allowed, cannot be overloaded
* 2 Implementations:
 * function [contractName] (arg1, arg2 ...)
 * constructor (arg1, arg2 ...)

```solidity
contract SimpleBank { // contract name should be CapWords
 // 
 mapping (address => uint) private balances;
}
```

## 3. Global Variables 
#### 3.1 Currency Units 

* Currency units are tracked as **uints**
* A number can take a postfix of **wei**, **finney**, **szabo** or **ether** to convert between denominations of Ether.

```solidity
// Currency Units
// Currency is defined using wei, the smallest unit of Ether
uint minAmunt = 1 wei;
uint a = 1 ether; // 1 ether == 10**18 wei
uint b = 1 finney; // 1 ether == 1000 finney

// Currency uints without a postfix are assumed to be wei
require(a == 10**18 && b == 10**15); // true
```
#### 3.2 Time 

* Solidity tracks time as a Unix TimeStamp, 
* A number can take a postfix of **seconds**, **minutes**, **hours**, etc. to convert between denominations of Ether.

```
// Time units
1 == 1 seconds
1 minutes ==  60 seconds

now; // returns current Unix TimeStamp
// Note that this can be manipulated by miners, so use carefully
```
#### 3.3 this 

```solidity
this; // address of contract
// often used at end of contract life to transfer remaining balance to party
this.balance;
this.someFunction(); // calls func externally via call, not via internal jump
```

#### 3.4 [MSG, TX](https://solidity.readthedocs.io/en/v0.7.0/units-and-global-variables.html?highlight=msg#block-and-transaction-properties) 

```solidity
// msg - Current message received by the contract
msg.sender; // address of sender
msg.value; // amount of ether provided to this contract in wei, function should be marked "payable"
msg.data; // bytes, complete call data
msg.gas; // remaining gas

// tx - This transaction
tx.origin; // address of sender of the transaction
tx.gasprice; // gas price of the transaction
```

Differnece between `msg.sender` and `tx.origin`:

In this case, for contract B, `msg.sender: address A` and `tx.origin: address A`; 
for contract C, `msg.sender: address B` and `tx.origin: address A`.


## 4. External Contracts 
Contracts in Solidity is similar to the concept of classes in object-oriented languages.

```solidity
contract InfoFeed {
 function info() returns (uint) {
  return 42;
 }
}
```

In another file, we will do the following:

```solidity
import "./";

contract Consumer {

 InfoFeed feed; // points to contract on blockchain
 
 // Set feed to new instance of contract
 function createNewFeed(){
   // new instance created, constructor call
   feed = new InfoFeed();
 }
 
 // Set feed to existing contract instance
 function setFeed(address addr) {
   feed = InfoFeed(addr);
 }
 
 function callFeed() {
   feed.info();
 }
}
```

## 5. [Modifiers](https://solidity.readthedocs.io/en/v0.7.0/cheatsheet.html?highlight=modifiers#modifiers) 
Modifiers validate inputs to functions such as minimal balance or user auth.

For example, for a function that transfers balances from one address to another:
```solidity
function transferBalance(address from, address to) public onlyOwner {
 balances[to] += balances[from];
 balances[from] = 0;
}

// '_' (underscore) often included as last line in body, and indicates
// the function being called should be placed here
modifier onlyOwner() {
 require(msg.sender == owner);
 _;
}

modifier onlyOwner() {
 require(now >= _time);
 _;
}
```
#### References

1. [Blockchain@Berkeley Slides](https://drive.google.com/file/d/1ceFHDQyZB7WUP-EMnUbki3Ooir1ULBz0/view)

2. [Blockchain@NTU Slides](https://docs.google.com/presentation/d/10f86TBXPca66OE_xw2f2W9ZOVLkp8KR8iLkw7xdQElI/edit?usp=sharing)

[Ethernaut](https://ethernaut.openzeppelin.com/) is a CTF-style game focused on smart contract development and security.

For any grammar details, please refer to the [Solidity documentation](https://solidity.readthedocs.io/en/latest/).

First version by:

![alt text](https://github.com/BlockchainCourseNTU/resource/blob/huangyuan/development/pictures/logo.png)
