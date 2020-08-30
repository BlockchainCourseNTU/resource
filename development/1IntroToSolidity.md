<h1>1. Introduction to Solidity - The Basics </h1>
<h2> 1. Data Types </h2>
<h4> 1.1 Value Types </h4>
Value types are the data that is passed by value.
<h5> 1.1.1 Bool </h5>
Bool type only has 2 possible values, `true` or `false`. They allow the following operators:

* !(logical negation)
* &&(logical and)
* ||(logical or)
* ==(equality)
* !=(inequality)

<h5> 1.1.2 Integers </h5>
Size of integers ranges from int8/uint8 to int256/uint256, in steps of 8. They allow the following operators:

* Comparisons: <=, <, ==, !=, >=, > (evaluate to bool)
* Bit operators: &, |, ^ (bitwise exclusive or), ~(bitwise negation)
* Shift operators: <<(left shift), >>(right shift)
* Arithmetic operators: +, -, unary-, *, /, %(modulo), **(exponentation)

<h5> 1.1.3 Address </h5>
There are two main types of this class:

* **Address**: Holds a 20 byte value (size of an Ethereum address).
* **Address Payable**: Same as address, but with the additional members transfer and send.

They allow the following operators: <=, <, ==, !=, >=, >

The transfer function fails if the balance of the current contract is not large enough or if the Ether transfer is rejected by the receiving account. The transfer function reverts on failure.

Send is the low-level counterpart of transfer. If the execution fails, the current contract will not stop with an 

Example of Transfer & Send

<code>
  address payable = address(0x123);
  address myAddress = address(this);
  if(x.balance < 10 && myAddress.balance >= 10)
    x.transfer(10);
</code>
  
<h5> 1.1.4 Contract Types </h5>

* Contracts do not support any operators.
* The members of contract types are the external functions of the contract including public state variables.
* For a contract C, type(C) returns type information about the contract.

<h5> 1.1.5 String Literals </h5>

<h5> 1.1.6 Enum </h5>

<h4> 1.2 Reference Types </h4>
<h4> 1.3 Data Structures </h4>
<h2> 2. Functions </h2>

* function name

* argType1 arg1, ...

* access classifier
   * public - all can access
   * external - cannot be accessed internally, only externally
   * internal - only this contract and contracts derived from it can access
   * private - can be accessed only from this contract
   
* returnType(optional return var name)

Value types are the data that is passed by reference. They are either Arrays, Structs or Data Locations.
<h4>References</h4>

1. <a href="https://drive.google.com/file/d/1ceFHDQyZB7WUP-EMnUbki3Ooir1ULBz0/view">Blockchain@Berkeley Slides</a>

2. <a href="">Blockchain@NTU Slides</a>

<a href="https://cryptozombies.io/">CryptoZombies</a> is a game-based tutorial that teaches you all things technical about blockchains and also, how to make smart contracts in Solidity. 
For any grammar details, please refer to the <a href="https://solidity.readthedocs.io/en/latest/">Solidity documentation</a>.
