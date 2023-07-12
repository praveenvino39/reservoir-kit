var $9eZPt$reservoir0xreservoirsdk = require("@reservoir0x/reservoir-sdk");
var $9eZPt$etherslibutils = require("ethers/lib/utils");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $557aa315c334ab67$exports = {};

$parcel$export($557aa315c334ab67$exports, "adaptEthersSigner", () => $557aa315c334ab67$export$e88664dcee9d76ee);


const $557aa315c334ab67$export$e88664dcee9d76ee = (signer)=>{
    return {
        address: async ()=>{
            return signer.getAddress();
        },
        handleSignMessageStep: async (stepItem)=>{
            const client = (0, $9eZPt$reservoir0xreservoirsdk.getClient)();
            const signData = stepItem.data?.sign;
            let signature;
            if (signData) {
                // Request user signature
                if (signData.signatureKind === "eip191") {
                    client.log([
                        "Execute Steps: Signing with eip191"
                    ], (0, $9eZPt$reservoir0xreservoirsdk.LogLevel).Verbose);
                    if (signData.message.match(/0x[0-9a-fA-F]{64}/)) // If the message represents a hash, we need to convert it to raw bytes first
                    signature = await signer.signMessage((0, $9eZPt$etherslibutils.arrayify)(signData.message));
                    else signature = await signer.signMessage(signData.message);
                } else if (signData.signatureKind === "eip712") {
                    client.log([
                        "Execute Steps: Signing with eip712"
                    ], (0, $9eZPt$reservoir0xreservoirsdk.LogLevel).Verbose);
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


$parcel$exportWildcard(module.exports, $557aa315c334ab67$exports);


//# sourceMappingURL=index.js.map
