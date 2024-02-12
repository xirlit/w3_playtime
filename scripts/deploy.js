const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('PlayTime');
    const gameContract = await gameContractFactory.deploy(
        ["Peepo Sad", "Peepo Happy", "Peepo Bussiness"],
        ["https://i.kym-cdn.com/photos/images/original/001/865/673/cc9.png",
            "https://i.redd.it/zqd26f1n4id61.png",
            "https://i.redd.it/sp7o79ing0c71.png"],
        [450, 250, 150],
        [10, 50, 100]
    );

    console.log("Deploying...");
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;

    console.log("Minting...");
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");

    console.log("Minting...");
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");

    console.log("Minting...");
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");

    console.log("Minting...");
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");

    console.log("Done deploying and minting!");

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