const Bank = artifacts.require("Bank");

contract("Bank", async (accounts) => {
  // accounts are the list of account created by the Truffle (i.e. 10 key pair)
  // by default, the first account will deploy the contract
  it("should make deployer the owner", async () => {
    let bank = await Bank.deployed(); // get the deployed Bank contract
    let owner = await bank.owner(); // call the getter on public state variable, https://solidity.readthedocs.io/en/v0.7.1/contracts.html#getter-functions
    assert.equal(owner, accounts[0]); // compare the expected owner with the actual owner
  });

  it("can deposit correctly", async () => {
    let bank = await Bank.deployed();
    // sending 3 Ether to deposit() function from accounts[4],
    // Note that deposit() function in the contract doesn't have any input parameter,
    // but in test, we are allowed to pass one optional special object specifying ethers to send to this
    // contract while we are making this function call.
    // Another similar example here: https://www.trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts#making-a-transaction
    let result = await bank.deposit({
      from: accounts[4],
      value: web3.utils.toWei("3"), // all amount are expressed in wei, this is 3 Ether in wei
    });

    // get deposited balance
    let deposited = await bank.balance({ from: accounts[4] });
    assert.equal(deposited.toString(), web3.utils.toWei("3"));
  });

  it("can withdraw less than despoited", async () => {
    let bank = await Bank.deployed();
    await bank.deposit({
      from: accounts[0],
      value: web3.utils.toWei("3"),
    });
    await bank.withdraw(web3.utils.toWei("2.9"), { from: accounts[0] });

    let deposited = await bank.balance({ from: accounts[0] });
    assert.equal(deposited.toString(), web3.utils.toWei("0.1"));
  });
});
