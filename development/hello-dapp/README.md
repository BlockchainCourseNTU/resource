# How to build a dApp -- a minimally sufficient guide

This is a hands-on workshop for CZ4153/CE4153, aiming to introduce some commonly used tools and libraries for building a full-blown dApp on Ethereum.

We will cover:

- How to use [truffle framework](https://www.trufflesuite.com/docs/truffle/overview) for smart contract development
- How to use [ganache](https://www.trufflesuite.com/docs/ganache/overview) for local testing
- How to deploy your smart contract to live testnet(s)
- How to use [web3](https://web3js.readthedocs.io/en/v1.2.11/getting-started.html) or [ethers.js](https://github.com/ethers-io/ethers.js/) to connect to your smart contract on chain

We assume you already understand the following, thus will _NOT_ cover:

- How Ethereum blockchain work
- How to write Solidity smart contract

## Concepts Overview

Read through [this ](./Workshop-dApp.pdf) brief introduction of key concepts of dApp development first

## Step 0: Prerequisite & Installation

Make sure the following are installed:

- [node](https://nodejs.org/en/) v8.9.4 or later
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/) (you can test by running `npm -v` or `yarn -v`)

Next, install truffle:

```sh
npm install truffle -g # or if you're using yarn: yarn global add truffle
truffle version # ensure successful installation
```

Then, install ganache [here](https://www.trufflesuite.com/ganache).

## Step 1: Write Smart Contracts

Create your own project folder and create a truffle project inside:

```sh
mkdir -p <PATH-TO-YOUR-PROJECT>/<PROJECT-REPO>/ && cd <PATH-TO-YOUR-PROJECT>/<PROJECT-REPO>/
git init
truffle init
```

Now your folder structure should look like:

```sh
├── contracts # this is where your smart contracts will go
│   └── Migrations.sol
├── migrations # this is where your deployment scripts will go
│   └── 1_initial_migration.js
├── test # this is where your unit tests will go
└── truffle-config.js # this is Truffle configuration file, default comments explain available options
```

Write/Add your simple `[./contracts/Bank.sol](./contracts/Banks.sol)` contract.

Try to compile your contracts:

```sh
truffle compile
```

Now you should see a new folder named `build/` inside which are `Bank.json` and `Migrations.json` -- these are the **artifacts** of your contracts, and you **should never edit them** manually, as they are used by the truffle framework during deployment etc.

## Step 2: Migrate/Deploy Your Smart Contracts Locally

## Step 3:

## Step 4:
