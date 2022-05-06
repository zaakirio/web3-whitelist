import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const whiteListContract = await ethers.getContractFactory("Whitelist");
    const whitelist = await whiteListContract.deploy("10");
    await whitelist.deployed();

    expect(await whitelist.maxAddresses).to.equal("10");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
