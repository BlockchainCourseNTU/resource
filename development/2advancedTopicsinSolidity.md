# Advanced Topics in Solidity 
## 1. Practice Safemath 

[SafeMath](https://docs.openzeppelin.com/contracts/2.x/api/math#SafeMath) is a library that wraps over Solidity's
arithmetic operations with added overflow checks.

Programmers usually assume that an overflow raises an error, which is the standard behavior in high level programming languages. `SafeMath` restores this intuition by reverting the transaction when an
 operation overflows.
 
 Here is a [post](https://medium.com/coinmonks/practicing-safemath-with-solidity-and-openzeppelin-cde4cba9ce39) about how to use `SafeMath` in contracts.
 
## 2. Tokens and Token Contracts 
Click [here](https://docs.openzeppelin.com/contracts/2.x/tokens#:~:text=A%20token%20contract%20is%20simply,that%20someone%20wrote%20and%20deployed%22.) for an introduction to tokens and token contracts.

Click [here](https://docs.openzeppelin.com/contracts/3.x/api/token/erc20) if you are interested in the detailed design and programming of ERC20 token.

## 3. Smart Contract Security
Smart contracts may contain many vulnerabilities. In 2016, a hacker stole $50 million from the so-called [Decentralized Autonomous Organization](https://www.technologyreview.com/2016/05/17/160160/the-autonomous-corporation-called-the-dao-is-not-a-good-way-to-spend-130-million/). Ilya Sergey, a computer scientist from University College London, coauthored a [study](https://arxiv.org/pdf/1802.06038.pdf) on the topic of smart contract security, found around 34,000 smart contracts out of one million to be vulnerable.

[Here](https://consensys.github.io/smart-contract-best-practices/) is a nice document of knowledge of security considerations that we as engineers should have.

## 4. Events

About how to use Event: <a href="https://www.tutorialspoint.com/solidity/solidity_events.htm">here</a>.
## 5. Interface
[Interface](https://solidity.readthedocs.io/en/v0.7.0/contracts.html#interfaces) is a useful feature added since Solidity 0.6.2.
## 6. Pure Function
[Pure Functions](https://www.tutorialspoint.com/solidity/solidity_pure_functions.htm#:~:text=Pure%20functions%20ensure%20that%20they,throw%20warning%20in%20such%20cases.) in Solidity are restricted to be unable to read or modify the state. This is a way to reduce the possibility of affecting other procedures and causing security issues.

## 7. DelegateCall, CallData, CallCode 

In Solidity, when we want to call a function from another contract, if we know target contract ABI, we can directly use function signature. However, if we don't know the ABI of target contract, we use `call()` or `delegatecall()`. DelegateCall is a calling mechanism of how caller contract calls target contract function. Read this [post](https://medium.com/coinmonks/delegatecall-calling-another-contract-function-in-solidity-b579f804178c) for details on how to use them. In the case of `delegatecall()`, do take note of the order of the field variables! The functionality of `callcode()` is quite similar to that of `delegatecall()`. See the [differences](https://ethereum.stackexchange.com/questions/3667/difference-between-call-callcode-and-delegatecall) between them in this post.

`delegatecall()` is actually a special variant of a [message call](https://solidity.readthedocs.io/en/v0.4.21/introduction-to-smart-contracts.html#message-calls). In message calls, the called contract will have access to the call payload - which will be provided in a separate area called the **calldata**.


## 8. Inline Assembly 
This feature of Solidity allows you to interleave Solidity statements with inline assembly in a language close to the one of the Ethereum virtual machine. Look at its <a href="https://solidity.readthedocs.io/en/v0.7.1/assembly.html">documentation</a> to have a closer look.
The language used for inline assembly is called [Yul](https://solidity.readthedocs.io/en/v0.7.1/yul.html#yul).

##### Other resources:
1. Latest version of <a href="https://solidity.readthedocs.io/en/v0.7.1/">Solidity documentation]


First Version by: 

![alt text](https://github.com/BlockchainCourseNTU/resource/blob/huangyuan/development/pictures/logo.png)
