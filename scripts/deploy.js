const hre = require("hardhat");

async function main() {

    const Criptdle = await hre.ethers.getContractFactory("Criptdle");
    const criptdle = await Criptdle.deploy();
    await criptdle.deployed();

    console.log("La direccion del contrato es: ", criptdle.address);
    
    // let tx = await criptdle.createWord("ether");
    // tx = await criptdle.createWord("btc");
    // tx = await criptdle.createWord("fork");
    // tx = await criptdle.createWord("hash");
    // tx = await criptdle.createWord("swap");
    // tx = await criptdle.createWord("hodl");
    // tx = await criptdle.createWord("memecoin");
    // tx = await criptdle.createWord("blockchain");
    // tx = await criptdle.createWord("atom");
    // tx = await criptdle.createWord("usdt");

    // tx = await criptdle.getWord();

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });