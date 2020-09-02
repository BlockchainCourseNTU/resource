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

<h2> 4. Events </h2>
<h2> 5. Interface </h2>
<h2> 6. Pure Function </h2>
<a href="https://www.tutorialspoint.com/solidity/solidity_pure_functions.htm#:~:text=Pure%20functions%20ensure%20that%20they,throw%20warning%20in%20such%20cases.">Pure Functions</a> in Solidity are restricted to be unable to read or modify the state. This is a way to reduce the possibility of affecting other procedures and causing security issues.

<h2> 7. DelegateCall, CallData, CallCode </h2>

<h2> 8. Inline Assembly </h2>
<h2> 9.  </h2>
<a href="https://consensys.github.io/smart-contract-best-practices/"></a>
