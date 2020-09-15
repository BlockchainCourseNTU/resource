<h1> Advanced Topics in Solidity </h1>
<h2> 1. Practice Safemath </h2>

<a href="https://docs.openzeppelin.com/contracts/2.x/api/math#SafeMath">SafeMath</a> is a library that wraps over Solidity's
arithmetic operations with added overflow checks.

Programmers usually assume that an overflow raises an error, which is the standard behavior in high level programming languages. `SafeMath` restores this intuition by reverting the transaction when an
 operation overflows.
 
 Here is a <a href="https://medium.com/coinmonks/practicing-safemath-with-solidity-and-openzeppelin-cde4cba9ce39">post</a> about how to use `SafeMath` in contracts.
 
<h2> 2. Tokens and Token Contracts </h2>
Click <a href="https://docs.openzeppelin.com/contracts/2.x/tokens#:~:text=A%20token%20contract%20is%20simply,that%20someone%20wrote%20and%20deployed%22.">here</a> for an introduction to tokens and token contracts.

Click <a href="https://docs.openzeppelin.com/contracts/3.x/api/token/erc20">here</a> if you are interested in the detailed design and programming of ERC20 token.

<h2> 3. Smart Contract Security </h2>
Smart contracts may contain many vulnerabilities. In 2016, a hacker stole $50 million from the <a href="https://www.technologyreview.com/2016/05/17/160160/the-autonomous-corporation-called-the-dao-is-not-a-good-way-to-spend-130-million/">so-called Decentralized Autonomous Organization</a>. Ilya Sergey, a computer scientist from University College London, coauthored a <a href="https://arxiv.org/pdf/1802.06038.pdf">study</a> on the topic of smart contract security, found around 34,000 smart contracts out of one million to be vulnerable.

<a href="https://consensys.github.io/smart-contract-best-practices/">Here</a> is a nice document of knowledge of security considerations that we as engineers should have.

<h2> 4. Events </h2>

About how to use Event: <a href="https://www.tutorialspoint.com/solidity/solidity_events.htm">here</a>.
<h2> 5. Interface </h2>
<h2> 6. Pure Function </h2>
<a href="https://www.tutorialspoint.com/solidity/solidity_pure_functions.htm#:~:text=Pure%20functions%20ensure%20that%20they,throw%20warning%20in%20such%20cases.">Pure Functions</a> in Solidity are restricted to be unable to read or modify the state. This is a way to reduce the possibility of affecting other procedures and causing security issues.

<h2> 7. DelegateCall, CallData, CallCode </h2>

In Solidity, when we want to call a function from another contract, if we know target contract ABI, we can directly use function signature. However, if we don't know the ABI of target contract, we use `call()` or `delegatecall()`. DelegateCall is a calling mechanism of how caller contract calls target contract function. Read this <a href="https://medium.com/coinmonks/delegatecall-calling-another-contract-function-in-solidity-b579f804178c">post</a> for details on how to use them. In the case of `delegatecall()`, do take note of the order of the field variables! The functionality of `callcode()` is quite similar to that of `delegatecall()`. See the <a href="https://ethereum.stackexchange.com/questions/3667/difference-between-call-callcode-and-delegatecall">differences</a> between them in this post.

`delegatecall()` is actually a special variant of a <a href="https://solidity.readthedocs.io/en/v0.4.21/introduction-to-smart-contracts.html#message-calls">message call</a>. In message calls, the called contract will have access to the call payload - which will be provided in a separate area called the **calldata**.


<h2> 8. Inline Assembly </h2>
This feature of Solidity allows you to interleave Solidity statements with inline assembly in a language close to the one of the Ethereum virtual machine. Look at its <a href="https://solidity.readthedocs.io/en/v0.7.1/assembly.html">documentation</a> to have a closer look.
The language used for inline assembly is called <a href="https://solidity.readthedocs.io/en/v0.7.1/yul.html#yul">Yul</a>.

<h5>Other resources:</h5>
1. Latest version of <a href="https://solidity.readthedocs.io/en/v0.7.1/">Solidity documentation</a>


First Version by: 
![alt text](https://github.com/BlockchainCourseNTU/resource/blob/huangyuan/development/pictures/logo.png)
