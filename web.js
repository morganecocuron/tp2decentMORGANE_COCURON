import { PinataSDK } from "pinata-web3";
import { PinataSDK } from "@pinata/sdk";
import fs from "fs";
import path from "path";

const pinata = new PinataSDK({
    pinataApiKey: process.env.PINATA_API_KEY,
    pinataSecretApiKey: process.env.PINATA_SECRET_API_KEY,
    pinataGateway: "sapphire-reasonable-magpie-78.mypinata.cloud",
});


async function main() {
    try {
        const filePath = path.join(__dirname, "Test.txt");  // Changez ce chemin selon vos besoins
        const fileStream = fs.createReadStream(filePath);
        const upload = await pinata.pinFileToIPFS(fileStream);
        console.log(upload);
    } catch (error) {
        console.log(error);
    }
}


main();