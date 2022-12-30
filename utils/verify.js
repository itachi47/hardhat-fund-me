const { run } = require("hardhat")


const verify = async (contractAddress, args) => {
    console.log("Verifying contact...")

    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("alredy verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }