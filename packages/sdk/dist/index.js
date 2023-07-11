var $lPQI4$axios = require("axios");
var $lPQI4$viem = require("viem");
var $lPQI4$viemchains = require("viem/chains");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $3ba04d43fdd1e5a5$exports = {};

$parcel$export($3ba04d43fdd1e5a5$exports, "ReservoirClient", () => $3ba04d43fdd1e5a5$export$d0c36b5db6a81704);
$parcel$export($3ba04d43fdd1e5a5$exports, "getClient", () => $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c);
$parcel$export($3ba04d43fdd1e5a5$exports, "createClient", () => $3ba04d43fdd1e5a5$export$5d730b7aed1a3eb0);

const $dc6d45909770cbab$export$29294a3e855ae137 = {
    id: 7777777,
    name: "Zora",
    network: "zora",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                "https://rpc.zora.co"
            ]
        },
        public: {
            http: [
                "https://rpc.zora.co"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Zora explorer",
            url: "https://explorer.zora.co"
        },
        default: {
            name: "Zora explorer",
            url: "https://explorer.zora.co"
        }
    }
};
const $dc6d45909770cbab$export$3755fcd3ba6f95fe = {
    id: 999,
    name: "Zora Testnet",
    network: "zora-testnet",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                "https://testnet.rpc.zora.co"
            ]
        },
        public: {
            http: [
                "https://testnet.rpc.zora.co"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Zora Testnet explorer",
            url: "https://testnet.explorer.zora.co"
        },
        default: {
            name: "Zora Testnet explorer",
            url: "https://testnet.explorer.zora.co"
        }
    }
};
const $dc6d45909770cbab$export$14635688a51e4f9f = {
    zora: $dc6d45909770cbab$export$29294a3e855ae137,
    zoraTestnet: $dc6d45909770cbab$export$3755fcd3ba6f95fe
};

var $b747246cb5dd2c78$export$243e62d78d3b544d;
(function(LogLevel) {
    LogLevel[LogLevel["Verbose"] = 4] = "Verbose";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Warn"] = 2] = "Warn";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["None"] = 0] = "None";
})($b747246cb5dd2c78$export$243e62d78d3b544d || ($b747246cb5dd2c78$export$243e62d78d3b544d = {}));
const $b747246cb5dd2c78$export$bef1f36f5486a6a3 = (params, level, currentLevel)=>{
    if (currentLevel >= level) {
        const data = params.reduce((params, param, i)=>{
            if ((i + 1) % 2) params.push("\n");
            params.push(param);
            return params;
        }, []);
        switch(level){
            case $b747246cb5dd2c78$export$243e62d78d3b544d.Info:
                console.info(...data);
                break;
            case $b747246cb5dd2c78$export$243e62d78d3b544d.Error:
                console.error(...data);
                break;
            case $b747246cb5dd2c78$export$243e62d78d3b544d.Warn:
                console.warn(...data);
                break;
            default:
                console.log(...data);
                break;
        }
    }
};




function $87c17edcee2f1608$export$ae9c7a4ba934c882(wallet) {
    return wallet.transport !== undefined;
}
const $87c17edcee2f1608$export$578785c07cb9817 = (wallet)=>{
    return {
        address: async ()=>{
            let address = wallet.account?.address;
            if (!address) [address] = await wallet.getAddresses();
            return address;
        },
        handleSignMessageStep: async (stepItem)=>{
            const client = (0, $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c)();
            const signData = stepItem.data?.sign;
            let signature;
            if (signData) {
                if (signData.signatureKind === "eip191") {
                    client.log([
                        "Execute Steps: Signing with eip191"
                    ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
                    if (signData.message.match(/0x[0-9a-fA-F]{64}/)) // If the message represents a hash, we need to convert it to raw bytes first
                    signature = await wallet.signMessage({
                        account: wallet.account,
                        message: (0, $lPQI4$viem.toBytes)(signData.message).toString()
                    });
                    else signature = await wallet.signMessage({
                        account: wallet.account,
                        message: signData.message
                    });
                } else if (signData.signatureKind === "eip712") {
                    client.log([
                        "Execute Steps: Signing with eip712"
                    ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
                    signature = await wallet.signTypedData({
                        account: wallet.account,
                        domain: signData.domain,
                        types: signData.types,
                        primaryType: signData.primaryType,
                        message: signData.value
                    });
                }
            }
            return signature;
        },
        handleSendTransactionStep: async (chainId, stepItem)=>{
            let viemChain;
            const customChain = Object.values((0, $dc6d45909770cbab$export$14635688a51e4f9f)).find((chain)=>chain.id === (chainId || 1));
            if (customChain) viemChain = customChain;
            else viemChain = Object.values($lPQI4$viemchains).find((chain)=>chain.id === (chainId || 1)) || $lPQI4$viemchains.mainnet;
            const stepData = stepItem.data;
            return await wallet.sendTransaction({
                chain: viemChain,
                data: stepData.data,
                account: wallet.account ?? stepData.from,
                to: stepData.to,
                value: (0, $lPQI4$viem.hexToBigInt)(stepData.value || 0),
                ...stepData.maxFeePerGas && {
                    maxFeePerGas: (0, $lPQI4$viem.hexToBigInt)(stepData.maxFeePerGas)
                },
                ...stepData.maxPriorityFeePerGas && {
                    maxPriorityFeePerGas: (0, $lPQI4$viem.hexToBigInt)(stepData.maxPriorityFeePerGas)
                },
                ...stepData.gas && {
                    gas: (0, $lPQI4$viem.hexToBigInt)(stepData.gas)
                }
            });
        }
    };
};


(0, ($parcel$interopDefault($lPQI4$axios))).interceptors.response.use((_res)=>{
    if (_res.headers["Deprecation"] === "true") console.warn(`Warning: API ${_res.config.url} is deprecated. Stability and performance may be affected.`);
    return _res;
});
const $af1a36115b20e29b$export$4432d0b5215ac33e = (0, ($parcel$interopDefault($lPQI4$axios)));


async function $8f16fb6674bc87a2$export$f014594cc879f602(request, dataParser, maximumAttempts = 15, attemptCount = 0) {
    if (attemptCount >= maximumAttempts) throw `Failed to get data after ${attemptCount} attempt(s), aborting`;
    async function getData() {
        let res = await (0, $af1a36115b20e29b$export$4432d0b5215ac33e).request(request);
        return res.data;
    }
    const json = await getData();
    // Check if the data exists
    const dataExists = dataParser(json);
    if (dataExists) return json;
    // The response is still unchanged. Check again in five seconds
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    attemptCount++;
    await $8f16fb6674bc87a2$export$f014594cc879f602(request, dataParser, maximumAttempts, attemptCount);
}
async function $8f16fb6674bc87a2$export$d2c70568ef790b87(request, validate, maximumAttempts = 15, attemptCount = 0) {
    if (attemptCount >= maximumAttempts) throw `Failed to get an ok response after ${attemptCount} attempt(s), aborting`;
    const res = await (0, $af1a36115b20e29b$export$4432d0b5215ac33e).request(request);
    if (!validate) validate = (res)=>res.status === 200;
    // Check that the response from an endpoint updated
    if (validate(res)) return true;
    else {
        // The response is still unchanged. Check again in five seconds
        await new Promise((resolve)=>setTimeout(resolve, 5000));
        attemptCount++;
        await $8f16fb6674bc87a2$export$d2c70568ef790b87(request, validate, maximumAttempts, attemptCount);
    }
}






/**
 *  Set URL query params using a typed objects
 *
 * This will convert an object
 *
 * ```js
 *  {
 *    foo: 'bar',
 *    age: 50,
 *  }
 * ```
 *
 * into a query string
 *
 * `?foo=bar&age=50`
 *
 * and append it to URL provided
 *
 * `https://api.example.com/tokens?foo=bar&age=50`
 *
 * @param url An URL instance
 * @param query An object containing all needed query params.
 */ function $0fd5f57dc6013621$export$dc1827290674c112(url, query) {
    Object.keys(query).map((key)=>{
        let value = query[key];
        if (value !== undefined) {
            if (Array.isArray(value)) value.forEach((item)=>{
                url.searchParams.append(key, item);
            });
            else url.searchParams.append(key, query[key]?.toString());
        }
        return url;
    });
}


var $134f7602d1733f79$exports = {};
$134f7602d1733f79$exports = JSON.parse('{"name":"@reservoir0x/reservoir-sdk","version":"1.1.15","description":"An SDK that can be used in any javascript/typescript context to easily interact with Reservoir liquidity APIs","source":"src/index.ts","main":"dist/index.js","module":"dist/index.module.js","types":"dist/index.d.ts","author":"Reservoir Protocol","license":"MIT","files":["dist"],"scripts":{"clean":"rm -rf dist","test":"jest","version":"yarn version","version:package":"sh ../../scripts/package-version.sh","version:update":"yarn version ${0}; PACKAGE_VERSION=$(yarn version:package); git add -A; git commit -m \\"\uD83C\uDF89 Release client package v$PACKAGE_VERSION\\"; git tag v${PACKAGE_VERSION}-SDK; git push --tags;","syncApi":"node ./sync-api.mjs","changelog":"node ../../scripts/generate-changelog.js package=sdk"},"repository":{"type":"git","url":"https://github.com/reservoirprotocol/reservoir-kit"},"sideEffects":false,"keywords":["nft","reservoir","reservoir-sdk","reservoirkit","protocol","sdk"],"dependencies":{"axios":"^0.27.2"},"publishConfig":{"access":"public"},"devDependencies":{"@types/jest":"^29.5.2","jest":"^29.5.0","openapi-typescript":"^5.4.1","ts-jest":"^29.1.0"},"peerDependencies":{"viem":"~1.0.6"}}');



const $09796638e4c51207$export$d4f1f65ba9b7c38c = (request, data)=>{
    const isBuy = request.url?.includes("/execute/buy");
    const isSell = request.url?.includes("/execute/sell");
    const isBid = request.url?.includes("/execute/bid");
    const isList = request.url?.includes("/execute/list");
    const isCancel = request.url?.includes("/execute/cancel");
    let name;
    const hasError = data?.error || data?.steps.some((step)=>step.error);
    if (isBuy) name = hasError ? "purchase_error" : "purchase_complete";
    else if (isSell) name = hasError ? "accept_offer_error" : "accept_offer_complete";
    else if (isBid) name = hasError ? "offer_error" : "offer_complete";
    else if (isList) name = hasError ? "listing_error" : "listing_complete";
    else if (isCancel) name = hasError ? "cancel_error" : "cancel_complete";
    else name = "unknown";
    return {
        name: name,
        data: data
    };
};



async function $491ee1b8d6fb7155$export$2d85f13e6286dded(chainId, viemClient, item, step, wallet, setTx) {
    const txHash = await wallet.handleSendTransactionStep(chainId, item, step);
    if (!txHash) throw "Transaction hash not returned from sendTransaction method";
    setTx(txHash);
    await viemClient.waitForTransactionReceipt({
        hash: txHash,
        onReplaced: (replacement)=>{
            setTx(replacement.transaction.hash);
            (0, $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c)()?.log([
                "Transaction replaced",
                replacement
            ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
        }
    });
    return true;
}







function $44a06f72699012b1$export$10778341345d1fe9(data) {
    const client = (0, $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c)();
    const { request: request , stepId: stepId , error: error , requestId: requestId , txHash: txHash  } = data;
    if (!requestId) {
        client.log([
            "Execute Results: skipping reporting results, missing requestId"
        ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
        return null;
    }
    const headers = {
        "x-rkc-version": (0, $134f7602d1733f79$exports.version)
    };
    if (request.headers && request.headers["x-api-key"]) headers["x-api-key"] = request.headers["x-api-key"];
    if (request.headers && client?.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
    const params = {
        requestId: requestId,
        txHash: txHash,
        stepId: stepId
    };
    if (error && error.message) params.errorMessage = error.message;
    else if (error) try {
        params.errorMessage = JSON.stringify(error);
    } catch (e) {
        params.errorMessage = "Unknown error";
    }
    client.log([
        "Execute Results: posting results",
        params
    ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
    return (0, $af1a36115b20e29b$export$4432d0b5215ac33e).post(`${request.baseURL}/execute/results/v1`, params, {
        headers: headers
    }).catch((e)=>{
        client.log([
            "Execute Results: failed to post results",
            e
        ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
    });
}


function $350ec40f38382016$var$checkExpectedPrice(quote, isSell, isBuy, expectedPrice) {
    let error = null;
    if (expectedPrice === undefined) {
        error = {
            type: "price mismatch",
            message: `Attention: the offer price of this token is now ${quote}`
        };
        return;
    }
    // Check if the user is selling
    if (isSell && Number((quote - expectedPrice).toFixed(6)) < -0.00001) error = {
        type: "price mismatch",
        message: `Attention: the offer price of this token is now ${quote}`
    };
    // Check if the user is buying
    if (isBuy && Number((quote - expectedPrice).toFixed(6)) > 0.00001) error = {
        type: "price mismatch",
        message: `Attention: the price of this token is now ${quote}`
    };
    return error;
}
async function $350ec40f38382016$export$21ece85d7636deb(request, wallet, setState, newJson, expectedPrice, chainId, gas) {
    const client = (0, $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c)();
    let reservoirChain = client?.currentChain();
    if (chainId) reservoirChain = client.chains.find((chain)=>chain.id === chainId) || null;
    let viemChain;
    const customChain = Object.values((0, $dc6d45909770cbab$export$14635688a51e4f9f)).find((chain)=>chain.id === (reservoirChain?.id || 1));
    if (customChain) viemChain = customChain;
    else viemChain = Object.values($lPQI4$viemchains).find((chain)=>chain.id === (reservoirChain?.id || 1)) || $lPQI4$viemchains.mainnet;
    const viemClient = (0, $lPQI4$viem.createPublicClient)({
        chain: viemChain,
        transport: (0, $lPQI4$viem.http)()
    });
    let json = newJson;
    try {
        if (!request.headers) request.headers = {};
        if (reservoirChain?.baseApiUrl) request.baseURL = reservoirChain.baseApiUrl;
        if (reservoirChain?.apiKey) request.headers["x-api-key"] = reservoirChain.apiKey;
        if (client?.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
        request.headers["x-rkc-version"] = (0, $134f7602d1733f79$exports.version);
        if (!json) {
            client.log([
                "Execute Steps: Fetching Steps",
                request
            ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
            const res = await (0, $af1a36115b20e29b$export$4432d0b5215ac33e).request(request);
            json = res.data;
            if (res.status !== 200) throw json;
            client.log([
                "Execute Steps: Steps retrieved",
                json
            ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
        }
        // Handle errors
        if (json.error || !json.steps) throw json;
        const isBuy = request.url?.includes("/execute/buy") || false;
        const isSell = request.url?.includes("/execute/sell") || false;
        // Handle price changes to protect users from paying more
        // than expected when buying and selling for less than expected
        const path = json.path;
        if (path && expectedPrice) {
            client.log([
                "Execute Steps: checking expected price",
                "expected price",
                expectedPrice,
                "path",
                path
            ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
            let error;
            if (typeof expectedPrice === "number") {
                const quote = path.reduce((total, { quote: quote , buyInQuote: buyInQuote  })=>{
                    total += buyInQuote || quote || 0;
                    return total;
                }, 0);
                error = $350ec40f38382016$var$checkExpectedPrice(quote, isSell, isBuy, expectedPrice);
            } else {
                const quotes = path.reduce((quotes, { quote: quote , buyInQuote: buyInQuote , currency: currency  })=>{
                    if (currency) {
                        if (!quotes[currency]) quotes[currency] = buyInQuote || quote || 0;
                        else quotes[currency] += buyInQuote || quote || 0;
                    }
                    return quotes;
                }, {});
                const quoteEntries = Object.entries(quotes);
                for(let i = 0; i < quoteEntries.length; i++){
                    const [currency, quote] = quoteEntries[i];
                    error = $350ec40f38382016$var$checkExpectedPrice(quote, isSell, isBuy, expectedPrice[currency]);
                    if (error) break;
                }
            }
            if (error) {
                json.steps[0].error = error.message;
                json.steps[0].errorData = json.path;
                setState([
                    ...json?.steps
                ], path);
                throw error;
            }
        }
        // Update state on first call or recursion
        setState([
            ...json?.steps
        ], path);
        let incompleteStepIndex = -1;
        let incompleteStepItemIndex = -1;
        json.steps.find((step, i)=>{
            if (!step.items) return false;
            incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
            if (incompleteStepItemIndex !== -1) {
                incompleteStepIndex = i;
                return true;
            }
        });
        // There are no more incomplete steps
        if (incompleteStepIndex === -1) {
            client.log([
                "Execute Steps: all steps complete"
            ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
            client._sendEvent((0, $09796638e4c51207$export$d4f1f65ba9b7c38c)(request, json), reservoirChain?.id || 1);
            return;
        }
        const step = json.steps[incompleteStepIndex];
        let stepItems = json.steps[incompleteStepIndex].items;
        if (!stepItems) {
            client.log([
                "Execute Steps: skipping step, no items in step"
            ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
            return;
        }
        let { kind: kind  } = step;
        let stepItem = stepItems[incompleteStepItemIndex];
        // If step item is missing data, poll until it is ready
        if (!stepItem.data) {
            client.log([
                "Execute Steps: step item data is missing, begin polling"
            ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
            json = await (0, $8f16fb6674bc87a2$export$f014594cc879f602)(request, (json)=>{
                client.log([
                    "Execute Steps: step item data is missing, polling",
                    json
                ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
                const data = json;
                return data?.steps?.[incompleteStepIndex].items?.[incompleteStepItemIndex].data ? true : false;
            });
            if (!json.steps || !json.steps[incompleteStepIndex].items) throw json;
            const items = json.steps[incompleteStepIndex].items;
            if (!items || !items[incompleteStepItemIndex] || !items[incompleteStepItemIndex].data) throw json;
            stepItems = items;
            stepItem = items[incompleteStepItemIndex];
            setState([
                ...json?.steps
            ], path);
        }
        client.log([
            `Execute Steps: Begin processing step items for: ${step.action}`
        ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
        const promises = stepItems.filter((stepItem)=>stepItem.status === "incomplete").map((stepItem)=>{
            return new Promise(async (resolve, reject)=>{
                try {
                    const stepData = stepItem.data;
                    if (!json) return;
                    // Handle each step based on it's kind
                    switch(kind){
                        // Make an on-chain transaction
                        case "transaction":
                            try {
                                client.log([
                                    "Execute Steps: Begin transaction step for, sending transaction"
                                ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
                                if (gas !== undefined) stepItem.data.gas = gas;
                                await (0, $491ee1b8d6fb7155$export$2d85f13e6286dded)(reservoirChain?.id || 1, viemClient, stepItem, step, wallet, (tx)=>{
                                    client.log([
                                        "Execute Steps: Transaction step, got transaction",
                                        tx
                                    ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
                                    stepItem.txHash = tx;
                                    if (json) setState([
                                        ...json.steps
                                    ], path);
                                });
                                client.log([
                                    "Execute Steps: Transaction finished, starting to poll for confirmation"
                                ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
                                //Implicitly poll the confirmation url to confirm the transaction went through
                                const confirmationUrl = new URL(`${request.baseURL}/transactions/${stepItem.txHash}/synced/v1`);
                                const headers = {
                                    "x-rkc-version": (0, $134f7602d1733f79$exports.version)
                                };
                                if (request.headers && request.headers["x-api-key"]) headers["x-api-key"] = request.headers["x-api-key"];
                                if (request.headers && client?.uiVersion) request.headers["x-rkui-version"] = client.uiVersion;
                                await (0, $8f16fb6674bc87a2$export$d2c70568ef790b87)({
                                    url: confirmationUrl.href,
                                    method: "get",
                                    headers: headers
                                }, (res)=>{
                                    client.log([
                                        "Execute Steps: Polling for confirmation",
                                        res
                                    ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
                                    return res && res.data.synced;
                                });
                                //Confirm that on-chain tx has been picked up by the indexer
                                if (step.id === "sale" && stepItem.txHash && (isSell || isBuy)) {
                                    client.log([
                                        "Execute Steps: Polling sales to verify transaction was indexed"
                                    ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
                                    const indexerConfirmationUrl = new URL(`${request.baseURL}/sales/v4`);
                                    const queryParams = {
                                        txHash: stepItem.txHash
                                    };
                                    (0, $0fd5f57dc6013621$export$dc1827290674c112)(indexerConfirmationUrl, queryParams);
                                    let salesData = {};
                                    await (0, $8f16fb6674bc87a2$export$d2c70568ef790b87)({
                                        url: indexerConfirmationUrl.href,
                                        method: "get",
                                        headers: headers
                                    }, (res)=>{
                                        client.log([
                                            "Execute Steps: Polling sales to check if indexed",
                                            res
                                        ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
                                        if (res.status === 200) {
                                            salesData = res.data;
                                            return salesData.sales && salesData.sales.length > 0 ? true : false;
                                        }
                                        return false;
                                    });
                                    stepItem.salesData = salesData.sales;
                                    setState([
                                        ...json?.steps
                                    ], path);
                                }
                                (0, $44a06f72699012b1$export$10778341345d1fe9)({
                                    request: request,
                                    stepId: step.id,
                                    requestId: json?.requestId,
                                    txHash: stepItem.txHash
                                });
                            } catch (e) {
                                (0, $44a06f72699012b1$export$10778341345d1fe9)({
                                    request: request,
                                    stepId: step.id,
                                    requestId: json?.requestId,
                                    txHash: stepItem.txHash,
                                    error: e
                                });
                                throw e;
                            }
                            break;
                        // Sign a message
                        case "signature":
                            {
                                let signature;
                                const signData = stepData["sign"];
                                const postData = stepData["post"];
                                client.log([
                                    "Execute Steps: Begin signature step"
                                ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
                                if (signData) {
                                    signature = await wallet.handleSignMessageStep(stepItem, step);
                                    if (signature) request.params = {
                                        ...request.params,
                                        signature: signature
                                    };
                                }
                                if (postData) {
                                    client.log([
                                        "Execute Steps: Posting order"
                                    ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
                                    const postOrderUrl = new URL(`${request.baseURL}${postData.endpoint}`);
                                    try {
                                        const getData = async function() {
                                            const headers = {
                                                "Content-Type": "application/json",
                                                "x-rkc-version": (0, $134f7602d1733f79$exports.version)
                                            };
                                            if (request.headers && request.headers["x-api-key"]) headers["x-api-key"] = request.headers["x-api-key"];
                                            let response = await (0, $af1a36115b20e29b$export$4432d0b5215ac33e).post(postOrderUrl.href, JSON.stringify(postData.body), {
                                                method: postData.method,
                                                headers: headers,
                                                params: request.params
                                            });
                                            return response;
                                        };
                                        const res = await getData();
                                        if (res.status > 299 || res.status < 200) throw res.data;
                                        if (res.data.results) stepItem.orderData = res.data.results;
                                        else if (res.data && res.data.orderId) stepItem.orderData = [
                                            {
                                                orderId: res.data.orderId,
                                                crossPostingOrderId: res.data.crossPostingOrderId,
                                                orderIndex: res.data.orderIndex || 0
                                            }
                                        ];
                                        setState([
                                            ...json?.steps
                                        ], path);
                                    } catch (err) {
                                        throw err;
                                    }
                                }
                                break;
                            }
                        default:
                            break;
                    }
                    stepItem.status = "complete";
                    setState([
                        ...json?.steps
                    ], path);
                    resolve(stepItem);
                } catch (e) {
                    const error = e;
                    const errorMessage = error ? error.message : "Error: something went wrong";
                    if (error && json?.steps) {
                        json.steps[incompleteStepIndex].error = errorMessage;
                        stepItem.error = errorMessage;
                        setState([
                            ...json?.steps
                        ], path);
                    }
                    reject(error);
                }
            });
        });
        await Promise.all(promises);
        // Recursively call executeSteps()
        await $350ec40f38382016$export$21ece85d7636deb(request, wallet, setState, json);
    } catch (err) {
        let blockNumber = 0n;
        try {
            blockNumber = await viemClient.getBlockNumber();
        } catch (blockError) {
            client.log([
                "Execute Steps: Failed to get block number",
                blockError
            ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Error);
        }
        client.log([
            "Execute Steps: An error occurred",
            err,
            "Block Number:",
            blockNumber
        ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Error);
        const error = err;
        const errorMessage = error ? error.message : "Error: something went wrong";
        if (json) {
            json.error = errorMessage;
            setState([
                ...json?.steps
            ], json.path);
        }
        client._sendEvent((0, $09796638e4c51207$export$d4f1f65ba9b7c38c)(request, json), reservoirChain?.id || 1);
        throw err;
    }
}




function $b3114c59012a233a$export$b5fe3f66a567bec0(config = {}) {
    const client = (0, $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c)();
    const currentReservoirChain = client.currentChain();
    const headers = {
        "Content-Type": "application/json",
        "x-rkc-version": (0, $134f7602d1733f79$exports.version)
    };
    if (currentReservoirChain?.apiKey) headers["x-api-key"] = currentReservoirChain.apiKey;
    return (0, $af1a36115b20e29b$export$4432d0b5215ac33e).request({
        headers: headers,
        ...config
    });
}




async function $6aa510e6f7e872cf$export$ed27da83bcbea2e5(data) {
    const { items: items , expectedPrice: expectedPrice , wallet: wallet , chainId: chainId , onProgress: onProgress , precheck: precheck , gas: gas  } = data;
    const reservoirWallet = (0, $87c17edcee2f1608$export$ae9c7a4ba934c882)(wallet) ? (0, $87c17edcee2f1608$export$578785c07cb9817)(wallet) : wallet;
    const taker = await reservoirWallet.address();
    const client = (0, $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c)();
    const options = data.options || {};
    let baseApiUrl = client.currentChain()?.baseApiUrl;
    if (chainId) baseApiUrl = client.chains.find((chain)=>chain.id === chainId)?.baseApiUrl || baseApiUrl;
    if (!client.currentChain()) throw new ReferenceError("ReservoirClient missing chain configuration");
    try {
        const params = {
            items: items,
            taker: taker,
            source: client.source || undefined,
            ...options
        };
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        const request = {
            url: `${baseApiUrl}/execute/sell/v7`,
            method: "post",
            data: params
        };
        if (precheck) {
            const apiKey = client.currentChain()?.apiKey;
            if (!request.headers) request.headers = {};
            if (apiKey && request.headers) request.headers["x-api-key"] = apiKey;
            if (client?.uiVersion && request.headers) request.headers["x-rkui-version"] = client.uiVersion;
            const res = await (0, ($parcel$interopDefault($lPQI4$axios))).request(request);
            if (res.status !== 200) throw res.data;
            const data = res.data;
            onProgress(data["steps"], data["path"]);
            return data;
        } else {
            await (0, $350ec40f38382016$export$21ece85d7636deb)(request, reservoirWallet, onProgress, undefined, expectedPrice, chainId, gas);
            return true;
        }
    } catch (err) {
        items.forEach(({ token: token  })=>{
            const data = {
                token: token
            };
            (0, $b3114c59012a233a$export$b5fe3f66a567bec0)({
                method: "POST",
                url: `${baseApiUrl}/tokens/refresh/v1`,
                data: JSON.stringify(data)
            }).catch(()=>{});
        });
        throw err;
    }
}






async function $2900a3fccc680cdb$export$5e1997c166a16792(data) {
    const { items: items , expectedPrice: expectedPrice , wallet: wallet , chainId: chainId , onProgress: onProgress , precheck: precheck , gas: gas  } = data;
    const client = (0, $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c)();
    const reservoirWallet = (0, $87c17edcee2f1608$export$ae9c7a4ba934c882)(wallet) ? (0, $87c17edcee2f1608$export$578785c07cb9817)(wallet) : wallet;
    const taker = await reservoirWallet.address();
    const options = data.options || {};
    let baseApiUrl = client.currentChain()?.baseApiUrl;
    if (chainId) baseApiUrl = client.chains.find((chain)=>chain.id === chainId)?.baseApiUrl || baseApiUrl;
    const errHandler = ()=>{
        items.forEach(({ token: token  })=>{
            if (token) {
                const data = {
                    token: token
                };
                (0, $b3114c59012a233a$export$b5fe3f66a567bec0)({
                    method: "POST",
                    url: `${baseApiUrl}/tokens/refresh/v1`,
                    data: JSON.stringify(data)
                }).catch(()=>{});
            }
        });
    };
    if (!baseApiUrl) throw new ReferenceError("ReservoirClient missing chain configuration");
    try {
        const params = {
            items: items,
            taker: taker,
            source: client.source || undefined,
            ...options
        };
        if (client.normalizeRoyalties !== undefined && params.normalizeRoyalties === undefined) params.normalizeRoyalties = client.normalizeRoyalties;
        const request = {
            url: `${baseApiUrl}/execute/buy/v7`,
            method: "post",
            data: params
        };
        if (precheck) {
            const apiKey = client.currentChain()?.apiKey;
            if (!request.headers) request.headers = {};
            if (apiKey && request.headers) request.headers["x-api-key"] = apiKey;
            if (client?.uiVersion && request.headers) request.headers["x-rkui-version"] = client.uiVersion;
            const res = await (0, ($parcel$interopDefault($lPQI4$axios))).request(request);
            if (res.status !== 200) throw res.data;
            const data = res.data;
            onProgress(data["steps"], data["path"]);
            return data;
        } else return (0, $350ec40f38382016$export$21ece85d7636deb)(request, reservoirWallet, onProgress, undefined, expectedPrice, chainId, gas);
    } catch (err) {
        errHandler();
        throw err;
    }
}





async function $9da3efecff90165e$export$1d5423ff89b08a3c(data) {
    const { ids: ids , wallet: wallet , chainId: chainId , onProgress: onProgress , gas: gas  } = data;
    const client = (0, $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c)();
    const reservoirWallet = (0, $87c17edcee2f1608$export$ae9c7a4ba934c882)(wallet) ? (0, $87c17edcee2f1608$export$578785c07cb9817)(wallet) : wallet;
    const options = data.options || {};
    let baseApiUrl = client.currentChain()?.baseApiUrl;
    if (chainId) baseApiUrl = client.chains.find((chain)=>chain.id === chainId)?.baseApiUrl || baseApiUrl;
    if (!baseApiUrl) throw new ReferenceError("ReservoirClient missing chain configuration");
    if (ids.length === 0) throw {
        message: "No order ids specified"
    };
    try {
        await (0, $350ec40f38382016$export$21ece85d7636deb)({
            method: "post",
            url: `${baseApiUrl}/execute/cancel/v3`,
            data: {
                orderIds: ids,
                ...options
            }
        }, reservoirWallet, onProgress, undefined, undefined, chainId, gas);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}







async function $e6311912d65ef991$export$c5dd9dc6df16df31(data) {
    const { listings: listings , wallet: wallet , chainId: chainId , onProgress: onProgress = ()=>{} , precheck: precheck  } = data;
    const client = (0, $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c)();
    const reservoirWallet = (0, $87c17edcee2f1608$export$ae9c7a4ba934c882)(wallet) ? (0, $87c17edcee2f1608$export$578785c07cb9817)(wallet) : wallet;
    const maker = await reservoirWallet.address();
    let baseApiUrl = client.currentChain()?.baseApiUrl;
    if (chainId) baseApiUrl = client.chains.find((chain)=>chain.id === chainId)?.baseApiUrl || baseApiUrl;
    if (!baseApiUrl) throw new ReferenceError("ReservoirClient missing chain configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || undefined
        };
        listings.forEach((listing)=>{
            if ((!listing.orderbook || listing.orderbook === "reservoir") && client.marketplaceFees && !("fees" in listing)) listing.fees = client.marketplaceFees;
            if (!("automatedRoyalties" in listing) && "automatedRoyalties" in client) listing.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = listings;
        const request = {
            url: `${baseApiUrl}/execute/list/v5`,
            method: "post",
            data: data,
            headers: {
                "x-rkc-version": (0, $134f7602d1733f79$exports.version)
            }
        };
        if (precheck) {
            const apiKey = client.currentChain()?.apiKey;
            if (apiKey && request.headers) request.headers["x-api-key"] = apiKey;
            if (client?.uiVersion && request.headers) request.headers["x-rkui-version"] = client.uiVersion;
            const res = await (0, $af1a36115b20e29b$export$4432d0b5215ac33e).request(request);
            if (res.status !== 200) throw res.data;
            const data = res.data;
            onProgress(data["steps"]);
            return data["steps"];
        } else await (0, $350ec40f38382016$export$21ece85d7636deb)(request, reservoirWallet, onProgress, undefined, undefined, chainId);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}





async function $03cb0e173c530a14$export$6d65a5902ff15306({ bids: bids , wallet: wallet , chainId: chainId , onProgress: onProgress  }) {
    const client = (0, $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c)();
    const reservoirWallet = (0, $87c17edcee2f1608$export$ae9c7a4ba934c882)(wallet) ? (0, $87c17edcee2f1608$export$578785c07cb9817)(wallet) : wallet;
    const maker = await reservoirWallet.address();
    let baseApiUrl = client.currentChain()?.baseApiUrl;
    if (chainId) baseApiUrl = client.chains.find((chain)=>chain.id === chainId)?.baseApiUrl || baseApiUrl;
    if (!baseApiUrl) throw new ReferenceError("ReservoirClient missing configuration");
    try {
        const data = {
            maker: maker,
            source: client.source || undefined
        };
        bids.forEach((bid)=>{
            if (!bid.token && !bid.collection && !bid.tokenSetId && (!bid.attributeKey || !bid.attributeValue)) throw {
                message: "Some bid data is missing",
                data: bid
            };
            if ((!bid.orderbook || bid.orderbook === "reservoir") && client.marketplaceFees && !("fees" in bid)) bid.fees = client.marketplaceFees;
            if (!("automatedRoyalties" in bid) && "automatedRoyalties" in client) bid.automatedRoyalties = client.automatedRoyalties;
        });
        data.params = bids;
        await (0, $350ec40f38382016$export$21ece85d7636deb)({
            url: `${baseApiUrl}/execute/bid/v5`,
            method: "post",
            data: data
        }, reservoirWallet, onProgress, undefined, undefined, chainId);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}


const $9723f31f8b2849e8$var$actions = {
    acceptOffer: $6aa510e6f7e872cf$export$ed27da83bcbea2e5,
    buyToken: $2900a3fccc680cdb$export$5e1997c166a16792,
    cancelOrder: $9da3efecff90165e$export$1d5423ff89b08a3c,
    listToken: $e6311912d65ef991$export$c5dd9dc6df16df31,
    placeBid: $03cb0e173c530a14$export$6d65a5902ff15306
};
var $9723f31f8b2849e8$export$2e2bcd8739ae039 = $9723f31f8b2849e8$var$actions;


var $86e1aed4c9e0543e$exports = {};

$parcel$export($86e1aed4c9e0543e$exports, "executeSteps", () => $350ec40f38382016$export$21ece85d7636deb);
$parcel$export($86e1aed4c9e0543e$exports, "setParams", () => $0fd5f57dc6013621$export$dc1827290674c112);
$parcel$export($86e1aed4c9e0543e$exports, "pollUntilOk", () => $8f16fb6674bc87a2$export$d2c70568ef790b87);
$parcel$export($86e1aed4c9e0543e$exports, "pollUntilHasData", () => $8f16fb6674bc87a2$export$f014594cc879f602);
$parcel$export($86e1aed4c9e0543e$exports, "request", () => $b3114c59012a233a$export$b5fe3f66a567bec0);
$parcel$export($86e1aed4c9e0543e$exports, "log", () => $b747246cb5dd2c78$export$bef1f36f5486a6a3);
$parcel$export($86e1aed4c9e0543e$exports, "LogLevel", () => $b747246cb5dd2c78$export$243e62d78d3b544d);
$parcel$export($86e1aed4c9e0543e$exports, "axios", () => $af1a36115b20e29b$export$4432d0b5215ac33e);
$parcel$export($86e1aed4c9e0543e$exports, "adaptViemWallet", () => $87c17edcee2f1608$export$578785c07cb9817);
$parcel$export($86e1aed4c9e0543e$exports, "customChains", () => $dc6d45909770cbab$export$14635688a51e4f9f);












let $3ba04d43fdd1e5a5$var$_client;
let $3ba04d43fdd1e5a5$var$_eventListeners = [];
class $3ba04d43fdd1e5a5$export$d0c36b5db6a81704 {
    log(message, level = (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Info) {
        return (0, $b747246cb5dd2c78$export$bef1f36f5486a6a3)(message, level, this.logLevel);
    }
    constructor(options){
        this.utils = {
            ...$86e1aed4c9e0543e$exports
        };
        this.actions = (0, $9723f31f8b2849e8$export$2e2bcd8739ae039);
        this.version = (0, $134f7602d1733f79$exports.version);
        this.chains = options.chains;
        this.uiVersion = options.uiVersion;
        this.automatedRoyalties = options.automatedRoyalties;
        this.marketplaceFees = options.marketplaceFees;
        this.normalizeRoyalties = options.normalizeRoyalties;
        this.source = options.source;
        this.logLevel = options.logLevel !== undefined ? options.logLevel : (0, $b747246cb5dd2c78$export$243e62d78d3b544d).None;
    }
    configure(options) {
        this.source = options.source ? options.source : this.source;
        this.uiVersion = options.uiVersion ? options.uiVersion : this.uiVersion;
        this.chains = options.chains ? options.chains : this.chains;
        this.marketplaceFees = options.marketplaceFees ? options.marketplaceFees : this.marketplaceFees;
        this.automatedRoyalties = options.automatedRoyalties;
        this.normalizeRoyalties = options.normalizeRoyalties !== undefined ? options.normalizeRoyalties : this.normalizeRoyalties;
        this.logLevel = options.logLevel !== undefined ? options.logLevel : (0, $b747246cb5dd2c78$export$243e62d78d3b544d).None;
    }
    currentChain() {
        if (this.chains && this.chains.length > 0) {
            const defaultChain = this.chains.find((chain)=>chain.active);
            if (defaultChain) return defaultChain;
            return this.chains[0];
        }
        return null;
    }
    /**
     * Add an Event Listener
     * @param listener A function to callback whenever an event is emitted
     */ addEventListener(listener) {
        $3ba04d43fdd1e5a5$var$_eventListeners.push(listener);
    }
    /**
     * Remove an Event Listener
     * @param listener The listener function to remove
     */ removeEventListener(listener) {
        $3ba04d43fdd1e5a5$var$_eventListeners = $3ba04d43fdd1e5a5$var$_eventListeners.filter((item)=>listener !== item);
    }
    /**
     * Remove all Event Listeners
     */ clearEventListeners() {
        $3ba04d43fdd1e5a5$var$_eventListeners = [];
    }
    /**
     * Internal method to send events to listeners, not to be used directly
     * @param listener A function to callback whenever an event is emitted
     */ _sendEvent(event, chainId) {
        this.log([
            `ReservoirClient: Sending Event to ${$3ba04d43fdd1e5a5$var$_eventListeners.length} listeners`,
            event,
            chainId
        ], (0, $b747246cb5dd2c78$export$243e62d78d3b544d).Verbose);
        $3ba04d43fdd1e5a5$var$_eventListeners.forEach((listener)=>{
            listener(event, chainId);
        });
    }
}
function $3ba04d43fdd1e5a5$export$6bb76d6eba7e258c() {
    return $3ba04d43fdd1e5a5$var$_client;
}
function $3ba04d43fdd1e5a5$export$5d730b7aed1a3eb0(options) {
    if (!$3ba04d43fdd1e5a5$var$_client) $3ba04d43fdd1e5a5$var$_client = new $3ba04d43fdd1e5a5$export$d0c36b5db6a81704(options);
    else $3ba04d43fdd1e5a5$var$_client.configure(options);
    return $3ba04d43fdd1e5a5$var$_client;
}



var $531f255ebced7701$exports = {};
var $5fa3934f713bacf0$exports = {};
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */ 

$parcel$exportWildcard($531f255ebced7701$exports, $5fa3934f713bacf0$exports);


$parcel$exportWildcard(module.exports, $3ba04d43fdd1e5a5$exports);
$parcel$exportWildcard(module.exports, $86e1aed4c9e0543e$exports);
$parcel$exportWildcard(module.exports, $531f255ebced7701$exports);


//# sourceMappingURL=index.js.map
