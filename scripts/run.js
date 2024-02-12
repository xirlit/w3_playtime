const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('PlayTime');
    const gameContract = await gameContractFactory.deploy(
        ["Peepo Sad", "Peepo Happy", "Peepo Bussiness"],       // Names
        ["https://i.kym-cdn.com/photos/images/original/001/865/673/cc9.png", // Images
            "https://i.redd.it/zqd26f1n4id61.png",
            "https://i.redd.it/sp7o79ing0c71.png"],
        [450, 250, 150],                    // HP values
        [10, 50, 100]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();