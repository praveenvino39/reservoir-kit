import {getClient as $eNUu9$getClient, LogLevel as $eNUu9$LogLevel} from "@reservoir0x/reservoir-sdk";
import {arrayify as $eNUu9$arrayify} from "ethers/lib/utils";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $94f7b90399ca5107$exports = {};

$parcel$export($94f7b90399ca5107$exports, "adaptEthersSigner", () => $94f7b90399ca5107$export$e88664dcee9d76ee);


const $94f7b90399ca5107$export$e88664dcee9d76ee = (signer)=>{
    return {
        address: async ()=>{
            return signer.getAddress();
        },
        handleSignMessageStep: async (stepItem)=>{
            const client = (0, $eNUu9$getClient)();
            const signData = stepItem.data?.sign;
            let signature;
            if (signData) {
                // Request user signature
                if (signData.signatureKind === "eip191") {
                    client.log([
                        "Execute Steps: Signing with eip191"
                    ], (0, $eNUu9$LogLevel).Verbose);
                    if (signData.message.match(/0x[0-9a-fA-F]{64}/)) // If the message represents a hash, we need to convert it to raw bytes first
                    signature = await signer.signMessage((0, $eNUu9$arrayify)(signData.message));
                    else signature = await signer.signMessage(signData.message);
                } else if (signData.signatureKind === "eip712") {
                    client.log([
                        "Execute Steps: Signing with eip712"
                    ], (0, $eNUu9$LogLevel).Verbose);
                    signature = await signer._signTypedData(signData.domain, signData.types, signData.value);
                }
            }
            return signature;
        },
        handleSendTransactionStep: async (chainId, stepItem)=>{
            const { gas: gas , ...stepData } = stepItem.data;
            const transaction = await signer.sendTransaction({
                ...stepData,
                ...gas && {
                    gasLimit: gas
                }
            });
            return transaction.hash;
        }
    };
};




export {$94f7b90399ca5107$export$e88664dcee9d76ee as adaptEthersSigner};
//# sourceMappingURL=index.module.js.map
