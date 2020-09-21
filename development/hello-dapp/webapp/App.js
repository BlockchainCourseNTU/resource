import React from "react";
import {
  updateDeposit,
  newDeposit,
  BankContractAddress,
  Testnet,
} from "./bank.js";

// example from doc: https://reactjs.org/docs/forms.html#controlled-components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryInput: "",
      depositInput: 0,
      address: "0x0",
      deposit: 0,
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handleNewDeposit = this.handleNewDeposit.bind(this);
  }
  handleQueryChange = (e) => {
    this.setState({ queryInput: e.target.value });
  };
  handleQuery = async () => {
    let result = await updateDeposit(this.state.queryInput);
    this.setState({
      address: result.address,
      deposit: result.deposit,
    });
  };
  handleDepositChange = (e) => {
    this.setState({ depositInput: e.target.value });
  };
  handleNewDeposit = async () => {
    await newDeposit(this.state.depositInput);
  };

  render() {
    return (
      <>
        <h1>Welcome to Bank dApp</h1>
        <p>Bank Contract Address: {BankContractAddress}</p>
        <p>Network: {Testnet}</p>
        <hr />
        <input
          type="text"
          placeholder="Enter address to query"
          value={this.state.value}
          onChange={this.handleQueryChange}
        />{" "}
        <input type="submit" value="Query Deposit" onClick={this.handleQuery} />
        <p>
          Query Result: {this.state.address} has deposit of {this.state.deposit}{" "}
          wei
        </p>
        <hr />
        <input
          type="text"
          placeholder="Enter amount (in Ether)"
          value={this.state.value}
          onChange={this.handleDepositChange}
        />{" "}
        <input
          type="submit"
          value="New Deposit"
          onClick={this.handleNewDeposit}
        />
      </>
    );
  }
}

export default App;
