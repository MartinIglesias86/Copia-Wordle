const hre = require("hardhat");

async function main() {

    const Criptdle = await hre.ethers.getContractFactory("Criptdle");
    const criptdle = await Criptdle.deploy();
    await criptdle.deployed();

    console.log("La direccion del contrato es: ", criptdle.address);
    /*
    let tx = await criptdle.createWord("sushi");
    tx = await criptdle.createWord("cake");
    tx = await criptdle.createWord("fork");
    tx = await criptdle.createWord("glass");
    tx = await criptdle.readWords();
    console.log(tx);

    tx = await criptdle.useWord("glass");
    tx = await criptdle.words("glass");
    console.log(tx);
    */
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });