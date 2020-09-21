import React from "react";
import { updateDeposit, BankContractAddress, Testnet } from "./bank.js";

// example from doc: https://reactjs.org/docs/forms.html#controlled-components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", address: "0x0", deposit: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  handleQuery = async () => {
    let result = await updateDeposit(this.state.input);
    this.setState({
      address: result.address,
      deposit: result.deposit,
    });
  };

  render() {
    return (
      <>
        <h1>Welcome to Bank dApp</h1>
        <p>Bank Contract Address: {BankContractAddress}</p>
        <p>Network: {Testnet}</p>
        <input
          type="text"
          placeholder="Enter address to query"
          value={this.state.value}
          onChange={this.handleChange}
        />{" "}
        <input type="submit" value="Query Deposit" onClick={this.handleQuery} />
        <p>
          Query Result: {this.state.address} has deposit of {this.state.deposit}{" "}
          wei
        </p>
      </>
    );
  }
}

export default App;
