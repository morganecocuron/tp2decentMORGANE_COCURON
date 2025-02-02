import { PinataSDK } from "pinata-web3";


const pinata = new PinataSDK({
    pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyMzRhODllZC1kZTlmLTQxNDgtOTgwMC0zYzViZWEyMTI1OTUiLCJlbWFpbCI6Im1vcmdhbmUuY29jdXJvbkBlZHUuZGV2aW5jaS5mciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJlYjNiMDIyNTA2YTQ5MTQwOTdiNiIsInNjb3BlZEtleVNlY3JldCI6IjUzOWM5ZTRjODcyMjdkZTIwOWYwYWU4MjUyYjQ2YWJhMDg4MDBhYWVmMjdkMzVmMDNkYzRiMjhlZjc3ZjUxZGYiLCJleHAiOjE3NzAwNjIzNjd9.xOuTW0uuj-cn8OYyRwcBF4bA_GT6-wD-vtMzaFvegrc",
    pinataGateway: "sapphire-reasonable-magpie-78.mypinata.cloud",
});


async function main() {
    try {
        const file = new File(["hello everyone !!!"], "Test.txt", { type: "text/plain" });
        const upload = await pinata.upload.file(file);
        console.log(upload);
    } catch (error) {
        console.log(error);
    }
}


await main();