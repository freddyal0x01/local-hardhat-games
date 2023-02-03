// add the game address here and update the contract name if necessary
// const gameAddr = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
// const contractName = "Game2";

// const gameAddr = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
// const contractName = "Game3";

const gameAddr = "0x0B306BF915C4d645ff596e518fAf3F9669b97016";
const contractName = "Game4";

// const gameAddr = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
// const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // Game1
    // const tx = await game.win()

    // Game2
    // do whatever you need to do to win the game here:
    // const tx1 = await game.setX(25);
    // await tx1.wait();
    // const tx2 = await game.setY(25);
    // await tx2.wait();
    // const tx3 = await game.win();

    // Game3
    // const tx = await game.win(45);

    // Game4

    // const tx = await game.win(56);

    // console.log(tx);

    // Game5
    // await game.giveMeAllowance(20000);

    // await game.mint(15000);

    // const tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
