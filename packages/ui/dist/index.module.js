import $TBcmg$react, {createContext as $TBcmg$createContext, useState as $TBcmg$useState, useRef as $TBcmg$useRef, useCallback as $TBcmg$useCallback, useEffect as $TBcmg$useEffect, useContext as $TBcmg$useContext, useMemo as $TBcmg$useMemo, useSyncExternalStore as $TBcmg$useSyncExternalStore, forwardRef as $TBcmg$forwardRef} from "react";
import $TBcmg$swr, {SWRConfig as $TBcmg$SWRConfig, useSWRConfig as $TBcmg$useSWRConfig} from "swr";
import {Provider as $TBcmg$Provider, Arrow as $TBcmg$Arrow, Root as $TBcmg$Root, Trigger as $TBcmg$Trigger, Content as $TBcmg$Content} from "@radix-ui/react-tooltip";
import {redDark as $TBcmg$redDark, indigoDark as $TBcmg$indigoDark, indigoDarkA as $TBcmg$indigoDarkA, slateDark as $TBcmg$slateDark, blackA as $TBcmg$blackA, green as $TBcmg$green, indigo as $TBcmg$indigo, indigoA as $TBcmg$indigoA, red as $TBcmg$red, gray as $TBcmg$gray, whiteA as $TBcmg$whiteA} from "@radix-ui/colors";
import {createClient as $TBcmg$createClient, setParams as $TBcmg$setParams, LogLevel as $TBcmg$LogLevel, getClient as $TBcmg$getClient, customChains as $TBcmg$customChains} from "@reservoir0x/reservoir-sdk";
import {createStitches as $TBcmg$createStitches, keyframes as $TBcmg$keyframes, styled as $TBcmg$styled} from "@stitches/react";
import $TBcmg$swrinfinite from "swr/infinite";
import {useAccount as $TBcmg$useAccount, useNetwork as $TBcmg$useNetwork, useSwitchNetwork as $TBcmg$useSwitchNetwork, useWalletClient as $TBcmg$useWalletClient, useBalance as $TBcmg$useBalance, useContractRead as $TBcmg$useContractRead} from "wagmi";
import {zeroAddress as $TBcmg$zeroAddress, parseUnits as $TBcmg$parseUnits, formatUnits as $TBcmg$formatUnits, formatEther as $TBcmg$formatEther} from "viem";
import {getNetwork as $TBcmg$getNetwork, getWalletClient as $TBcmg$getWalletClient} from "wagmi/actions";
import {mainnet as $TBcmg$mainnet, goerli as $TBcmg$goerli} from "wagmi/chains";
import {faCircleExclamation as $TBcmg$faCircleExclamation, faCheckCircle as $TBcmg$faCheckCircle, faSpinner as $TBcmg$faSpinner, faCube as $TBcmg$faCube, faWallet as $TBcmg$faWallet, faChevronLeft as $TBcmg$faChevronLeft, faClose as $TBcmg$faClose, faLock as $TBcmg$faLock, faInfoCircle as $TBcmg$faInfoCircle, faMinus as $TBcmg$faMinus, faPlus as $TBcmg$faPlus, faChevronDown as $TBcmg$faChevronDown, faPenNib as $TBcmg$faPenNib, faCalendar as $TBcmg$faCalendar, faMagnifyingGlass as $TBcmg$faMagnifyingGlass, faEnvelopeOpen as $TBcmg$faEnvelopeOpen, faCircleCheck as $TBcmg$faCircleCheck, faCircleNotch as $TBcmg$faCircleNotch, faImage as $TBcmg$faImage, faGasPump as $TBcmg$faGasPump, faPause as $TBcmg$faPause, faPlay as $TBcmg$faPlay, faShoppingCart as $TBcmg$faShoppingCart, faRefresh as $TBcmg$faRefresh, faArrowUp as $TBcmg$faArrowUp, faArrowDown as $TBcmg$faArrowDown, faTriangleExclamation as $TBcmg$faTriangleExclamation, faCircleInfo as $TBcmg$faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon as $TBcmg$FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {motion as $TBcmg$motion, AnimatePresence as $TBcmg$AnimatePresence} from "framer-motion";
import {Arrow as $TBcmg$Arrow1, Root as $TBcmg$Root1, Trigger as $TBcmg$Trigger1, Content as $TBcmg$Content1, Portal as $TBcmg$Portal} from "@radix-ui/react-popover";
import {useMediaQuery as $TBcmg$useMediaQuery, useMeasure as $TBcmg$useMeasure} from "@react-hookz/web";
import {Title as $TBcmg$Title, Close as $TBcmg$Close, Overlay as $TBcmg$Overlay, Content as $TBcmg$Content2, Root as $TBcmg$Root2, DialogTrigger as $TBcmg$DialogTrigger, DialogPortal as $TBcmg$DialogPortal} from "@radix-ui/react-dialog";
import {Trigger as $TBcmg$Trigger2, Content as $TBcmg$Content3, ItemText as $TBcmg$ItemText, Value as $TBcmg$Value, Icon as $TBcmg$Icon, Root as $TBcmg$Root3, Portal as $TBcmg$Portal1, ScrollUpButton as $TBcmg$ScrollUpButton, Viewport as $TBcmg$Viewport, ScrollDownButton as $TBcmg$ScrollDownButton, Item as $TBcmg$Item} from "@radix-ui/react-select";
import $TBcmg$dayjs from "dayjs";
import {Root as $TBcmg$Root4, Thumb as $TBcmg$Thumb} from "@radix-ui/react-switch";
import $TBcmg$dayjspluginrelativeTimejs from "dayjs/plugin/relativeTime.js";
import $TBcmg$reactflatpickr from "react-flatpickr";
import {Root as $TBcmg$Root5, Viewport as $TBcmg$Viewport1, Scrollbar as $TBcmg$Scrollbar, Thumb as $TBcmg$Thumb1, Corner as $TBcmg$Corner} from "@radix-ui/react-scroll-area";
import {CollapsibleContent as $TBcmg$CollapsibleContent, Root as $TBcmg$Root6, Trigger as $TBcmg$Trigger3} from "@radix-ui/react-collapsible";
import {Root as $TBcmg$Root7, Track as $TBcmg$Track, Range as $TBcmg$Range, Thumb as $TBcmg$Thumb2} from "@radix-ui/react-slider";
import {Root as $TBcmg$Root8, Item as $TBcmg$Item1} from "@radix-ui/react-toggle-group";
import * as $TBcmg$viemchains from "viem/chains";

/// <reference path="./types/parcel.d.ts" />
//Providers


const $7e16985c42c068dc$export$8e8f484d816a71e3 = (overrides)=>{
    return {
        radii: {
            borderRadius: overrides?.borderRadius || "4px"
        },
        fonts: {
            body: overrides?.font || "sans-serif",
            button: overrides?.buttonFont || overrides?.font || "sans-serif",
            headline: overrides?.headlineFont || overrides?.font || "sans-serif"
        }
    };
};


function $1fa63d73b4d6b2f8$export$2e2bcd8739ae039(overrides) {
    let sharedTheme = (0, $7e16985c42c068dc$export$8e8f484d816a71e3)(overrides);
    return {
        colors: {
            ...(0, $TBcmg$redDark),
            ...(0, $TBcmg$indigoDark),
            ...(0, $TBcmg$indigoDarkA),
            ...(0, $TBcmg$slateDark),
            ...(0, $TBcmg$blackA),
            ...(0, $TBcmg$green),
            // accent colors
            accentBase: "$indigo1",
            accentBgSubtle: "$indigo2",
            accentBg: "$indigo3",
            accentBgHover: "$indigo4",
            accentBgActive: "$indigo5",
            accentLine: "$indigo6",
            accentBorder: "$indigo7",
            accentBorderHover: overrides?.primaryColor || "$indigo8",
            accentSolid: overrides?.primaryColor || "$indigo9",
            accentSolidHover: overrides?.primaryHoverColor || overrides?.primaryColor || "$indigo10",
            accentText: "$indigo11",
            accentTextContrast: "$indigo12",
            // neutral colors
            neutralBase: "$slate1",
            neutralBgSubtle: "$slate2",
            neutralBg: "$slate3",
            neutralBgHover: "$slate4",
            neutralBgActive: "$slate5",
            neutralLine: "$slate6",
            neutralBorder: "$slate7",
            neutralBorderHover: "$slate8",
            neutralSolid: "$slate9",
            neutralSolidHover: "$slate10",
            neutralText: "$slate11",
            neutralTextContrast: "$slate12",
            // secondary colors
            secondaryBase: "$indigoA1",
            secondaryBgSubtle: "$indigoA2",
            secondaryBg: "$indigoA3",
            secondaryBgHover: "$indigoA4",
            secondaryBgActive: "$indigoA5",
            secondaryLine: "$indigoA6",
            secondaryBorder: "$indigoA7",
            secondaryBorderHover: "$indigoA8",
            secondarySolid: "$indigoA9",
            secondarySolidHover: "$indigoA10",
            secondaryText: "$indigoA11",
            secondaryTextContrast: "$indigoA12",
            // general colors
            borderColor: overrides?.borderColor || "$neutralBorder",
            textColor: overrides?.textColor || "$neutralTextContrast",
            focusColor: "$neutralTextContrast",
            errorText: "$red12",
            errorAccent: "$red10",
            successAccent: "$green10",
            // component colors
            reservoirLogoColor: "#ECEDEE",
            inputBackground: "$neutralBgHover",
            buttonTextColor: overrides?.buttonTextColor || "white",
            buttonTextHoverColor: overrides?.buttonTextHoverColor || "white",
            overlayBackground: overrides?.overlayBackground || "$blackA10",
            headerBackground: overrides?.headerBackground || "$neutralBgHover",
            footerBackground: overrides?.footerBackground || "$neutralBg",
            contentBackground: overrides?.contentBackground || "$neutralBgSubtle",
            wellBackground: overrides?.wellBackground || "$neutralBase",
            popoverBackground: overrides?.popoverBackground || "$neutralBgActive"
        },
        assets: {
            ethIcon: overrides?.ethIcon || "purple"
        },
        ...sharedTheme
    };
}




var $fe6ce5c2ceb86f27$exports = {};
$fe6ce5c2ceb86f27$exports = JSON.parse('{"name":"@reservoir0x/reservoir-kit-ui","description":"ReservoirKit is the official frontend kit to get you started building dApps with the ReservoirProtocol.","version":"1.2.2","author":"Reservoir Protocol","license":"MIT","source":"src/index.ts","exports":"./dist/index.module.js","module":"dist/index.module.js","types":"dist/index.d.ts","type":"module","files":["dist"],"keywords":["nft","reservoir","reservoirkit","protocol","sdk"],"sideEffects":false,"scripts":{"clean":"rm -rf dist","version":"yarn version","version:package":"sh ../../scripts/package-version.sh","version:update":"yarn version ${0}; PACKAGE_VERSION=$(yarn version:package); git add -A; git commit -m \\"\uD83C\uDF89 Release ui package v$PACKAGE_VERSION\\"; git tag v${PACKAGE_VERSION}-UI; git push --tags;","version:prerelease":"yarn version prerelease; RC_VERSION=$(yarn version:package); git add -A; git commit -m \\"✨ Prerelease ui package v$RC_VERSION\\"; git tag v${RC_VERSION}-UI; git push --tags;","changelog":"node ../../scripts/generate-changelog.js package=ui"},"dependencies":{"@fortawesome/fontawesome-svg-core":"^6.1.1","@fortawesome/free-solid-svg-icons":"^6.1.1","@fortawesome/react-fontawesome":"^0.2.0","@radix-ui/colors":"^0.1.8","@radix-ui/react-collapsible":"1.0.3","@radix-ui/react-dialog":"1.0.4","@radix-ui/react-popover":"1.0.6","@radix-ui/react-scroll-area":"1.0.4","@radix-ui/react-select":"1.2.2","@radix-ui/react-slider":"1.1.2","@radix-ui/react-switch":"1.0.3","@radix-ui/react-toggle-group":"1.0.4","@radix-ui/react-tooltip":"1.0.6","@react-hookz/web":"^19.2.0","@reservoir0x/reservoir-sdk":"^1.1.15","@stitches/react":"1.3.1-1","dayjs":"^1.11.4","flatpickr":"^4.6.13","framer-motion":"^6.4.2","react-flatpickr":"^3.10.13","swr":"2.0.1"},"peerDependencies":{"react":"^18.0","react-dom":"^18.0","viem":"~1.0.6","wagmi":"~1.2.1"},"repository":{"type":"git","url":"https://github.com/reservoirprotocol/reservoir-kit"}}');


const $2deec6552e3d4fa0$export$61eba4f5b935df88 = /*#__PURE__*/ (0, $TBcmg$createContext)(null);
const $2deec6552e3d4fa0$export$9d733ffc7f61c45c = function({ children: children , options: options  }) {
    const [clientContext, _] = (0, $TBcmg$useState)((0, $TBcmg$createClient)({
        ...options,
        uiVersion: (0, $fe6ce5c2ceb86f27$exports.version)
    }));
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($2deec6552e3d4fa0$export$61eba4f5b935df88.Provider, {
        value: clientContext
    }, children);
};





const { createTheme: $4a58f4053e821189$export$25d302a5b900a763 , keyframes: $4a58f4053e821189$export$d25ddfdf17c3ad3e , styled: $4a58f4053e821189$export$3817b7a54a07cec7 , globalCss: $4a58f4053e821189$export$db53682eef82cc11 , getCssText: $4a58f4053e821189$export$681e449128971c74 , theme: $4a58f4053e821189$export$bca14c5b3b88a9c9 , config: $4a58f4053e821189$export$e506a1d27d1eaa20  } = (0, $TBcmg$createStitches)({
    theme: {
        space: {
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            5: "32px",
            6: "64px"
        },
        fontSizes: {},
        fontWeights: {},
        fonts: {
            body: "sans-serif",
            button: "$body"
        },
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        radii: {
            borderRadius: 0
        },
        shadows: {},
        transitions: {}
    },
    utils: {
        // MARGIN
        m: (value)=>({
                margin: value
            }),
        mx: (value)=>({
                marginLeft: value,
                marginRight: value
            }),
        my: (value)=>({
                marginTop: value,
                marginBottom: value
            }),
        mt: (value)=>({
                marginTop: value
            }),
        mb: (value)=>({
                marginBottom: value
            }),
        ml: (value)=>({
                marginLeft: value
            }),
        mr: (value)=>({
                marginRight: value
            }),
        // PADDING
        p: (value)=>({
                padding: value
            }),
        px: (value)=>({
                paddingLeft: value,
                paddingRight: value
            }),
        py: (value)=>({
                paddingTop: value,
                paddingBottom: value
            }),
        pt: (value)=>({
                paddingTop: value
            }),
        pb: (value)=>({
                paddingBottom: value
            }),
        pl: (value)=>({
                paddingLeft: value
            }),
        pr: (value)=>({
                paddingRight: value
            }),
        // DIMENSIONS
        w: (value)=>({
                width: value
            }),
        h: (value)=>({
                height: value
            }),
        size: (value)=>({
                width: value,
                height: value
            })
    },
    media: {
        bp1: "(min-width: 600px)",
        bp2: "(min-width: 905px)",
        bp3: "(min-width: 1240px)",
        bp4: "(min-width: 1440px)",
        motion: "(prefers-reduced-motion)",
        hover: "(any-hover: hover)",
        dark: "(prefers-color-scheme: dark)",
        light: "(prefers-color-scheme: light)"
    },
    prefix: "rk"
});



const $36299c87cce4672d$export$a6f1ecf08e412113 = (apiKey, clientVersion)=>{
    const headers = {
        "x-rkui-version": (0, $fe6ce5c2ceb86f27$exports.version)
    };
    if (apiKey) headers["x-api-key"] = apiKey;
    if (clientVersion) headers["x-rkc-version"] = clientVersion;
    return headers;
};
const $36299c87cce4672d$export$77754e0ac9f8aba3 = (params)=>{
    let resource;
    let apiKey;
    let clientVersion;
    if (Array.isArray(params)) {
        resource = params[0];
        apiKey = params[1];
        clientVersion = params[2];
    } else resource = params;
    const headers = $36299c87cce4672d$export$a6f1ecf08e412113(apiKey, clientVersion);
    return fetch(resource, {
        headers: headers
    }).then((res)=>{
        if (res.headers.get("deprecation") === "true") console.warn(`Warning: API ${res.url} is deprecated. Stability and performance may be affected.`);
        return res.json();
    }).catch((e)=>{
        throw e;
    });
};
const $36299c87cce4672d$export$6f9d915eee0c027b = {
    fetcher: $36299c87cce4672d$export$77754e0ac9f8aba3,
    revalidateOnFocus: false
};



const $dc47145da9e25ac7$var$fpFadeInDown = (0, $4a58f4053e821189$export$d25ddfdf17c3ad3e)({
    "0%": {
        opacity: 0,
        transform: "translate3d(0, -20px, 0)"
    },
    "100%": {
        opacity: 1,
        transform: "translate3d(0, 0, 0)"
    }
});
const $dc47145da9e25ac7$var$calendarCss = (0, $4a58f4053e821189$export$db53682eef82cc11)({
    ".flatpickr-calendar": {
        opacity: 0,
        display: "none",
        textAlign: "center",
        visibility: "hidden",
        padding: 20,
        animation: "none",
        direction: "ltr",
        fontSize: 14,
        lineHeight: "24px",
        borderRadius: 5,
        position: "absolute",
        width: 307.875,
        boxSizing: "border-box",
        touchAction: "manipulation",
        backgroundColor: "$contentBackground",
        boxShadow: "1px 0 0 #20222c, -1px 0 0 #20222c, 0 1px 0 #20222c, 0 -1px 0 #20222c, 0 3px 13px rgba(0,0,0,0.08)",
        border: "1px solid $borderColor",
        fontFamily: "$body"
    },
    ".flatpickr-calendar.open": {
        opacity: 1,
        maxHeight: 640,
        visibility: "visible",
        display: "inline-block",
        zIndex: 99999,
        pointerEvents: "all"
    },
    ".flatpickr-calendar.inline": {
        opacity: 1,
        maxHeight: 640,
        visibility: "visible",
        display: "block",
        position: "relative",
        top: 2
    },
    ".flatpickr-calendar.animate.open": {
        animation: `${$dc47145da9e25ac7$var$fpFadeInDown} 300ms cubic-bezier(0.23, 1, 0.32, 1)`
    },
    ".flatpickr-calendar.static": {
        position: "absolute",
        top: "calc(100% + 2px)"
    },
    ".flatpickr-calendar.static.open": {
        zIndex: 999,
        display: "block"
    },
    ".flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7)": {
        boxShadow: "none !important"
    },
    ".flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1)": {
        boxShadow: "-2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6"
    },
    ".flatpickr-calendar .hasWeeks .dayContainer": {
        borderBottom: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: 0
    },
    ".flatpickr-calendar .hasTime .dayContainer": {
        borderBottom: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    ".flatpickr-calendar.hasTime .flatpickr-time": {
        height: 40
    },
    ".flatpickr-calendar.noCalendar.hasTime .flatpickr-time": {
        height: "auto"
    },
    ".flatpickr-calendar:before": {
        position: "absolute",
        display: "block",
        pointerEvents: "none",
        border: "solid transparent",
        content: "",
        height: 0,
        width: 0,
        left: 22,
        borderWidth: 5,
        margin: "0 -5px"
    },
    ".flatpickr-calendar:after": {
        position: "absolute",
        display: "block",
        pointerEvents: "none",
        border: "solid transparent",
        content: "",
        height: 0,
        width: 0,
        left: 22,
        borderWidth: 4,
        margin: "0 -4px"
    },
    ".flatpickr-calendar.rightMost:before, .flatpickr-calendar.arrowRight:before, .flatpickr-calendar.rightMost:after, .flatpickr-calendar.arrowRight:after": {
        left: "auto",
        right: 22
    },
    ".flatpickr-calendar.arrowCenter:before, .flatpickr-calendar.arrowCenter:after": {
        left: "50%",
        right: "50%"
    },
    ".flatpickr-calendar.arrowTop:before, .flatpickr-calendar.arrowTop:after": {
        bottom: "100%"
    },
    ".flatpickr-calendar.arrowTop:before": {
        display: "none"
    },
    ".flatpickr-calendar.arrowTop:after": {
        display: "none"
    },
    ".flatpickr-calendar.arrowBottom:before, .flatpickr-calendar.arrowBottom:after": {
        top: "100%"
    },
    ".flatpickr-calendar.arrowBottom:before": {
        display: "none"
    },
    ".flatpickr-calendar.arrowBottom:after": {
        display: "none"
    },
    ".flatpickr-calendar:focus": {
        outline: 0
    },
    ".flatpickr-wrapper": {
        position: "relative",
        display: "inline-block"
    },
    ".flatpickr-months": {
        display: "flex"
    },
    ".flatpickr-months .flatpickr-month": {
        backgroundColor: "$contentBackground",
        color: "$neutralTextContrast",
        fill: "$neutralTextContrast",
        height: 34,
        lineHeight: "1px",
        textAlign: "center",
        position: "relative",
        userSelect: "none",
        overflow: "hidden",
        flex: 1,
        marginBottom: 8
    },
    ".flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month": {
        userSelect: "none",
        textDecoration: "none",
        cursor: "pointer",
        position: "absolute",
        top: 20,
        height: 34,
        padding: 10,
        zIndex: 3,
        color: "$neutralText",
        fill: "$neutralText"
    },
    ".flatpickr-months .flatpickr-prev-month.flatpickr-disabled, .flatpickr-months .flatpickr-next-month.flatpickr-disabled": {
        display: "none"
    },
    ".flatpickr-months .flatpickr-prev-month i, .flatpickr-months .flatpickr-next-month i": {
        position: "relative"
    },
    ".flatpickr-months .flatpickr-prev-month.flatpickr-prev-month, .flatpickr-months .flatpickr-next-month.flatpickr-prev-month": {
        left: 0
    },
    ".flatpickr-months .flatpickr-prev-month.flatpickr-next-month, .flatpickr-months .flatpickr-next-month.flatpickr-next-month": {
        right: 0
    },
    ".flatpickr-months .flatpickr-prev-month:hover, .flatpickr-months .flatpickr-next-month:hover": {
        color: "$neutralText"
    },
    ".flatpickr-months .flatpickr-prev-month:hover svg, .flatpickr-months .flatpickr-next-month:hover svg": {
        fill: "$neutralTextContrast"
    },
    ".flatpickr-months .flatpickr-prev-month svg, .flatpickr-months .flatpickr-next-month svg": {
        width: 14,
        height: 14
    },
    ".flatpickr-months .flatpickr-prev-month svg path, .flatpickr-months .flatpickr-next-month svg path": {
        transition: "fill 0.1s",
        fill: "inherit"
    },
    ".numInputWrapper": {
        position: "relative",
        height: "auto"
    },
    ".numInputWrapper input, .numInputWrapper span": {
        display: "inline-block"
    },
    ".numInputWrapper input": {
        width: "100%"
    },
    ".numInputWrapper input::-ms-clear": {
        display: "none"
    },
    ".numInputWrapper input::-webkit-outer-spin-button, .numInputWrapper input::-webkit-inner-spin-button": {
        margin: 0,
        "-webkit-appearance": "none"
    },
    ".numInputWrapper span": {
        position: "absolute",
        right: 0,
        width: 14,
        padding: "0 4px 0 2px",
        height: "50%",
        lineHeight: "50%",
        opacity: 0,
        cursor: "pointer",
        boxSizing: "border-box"
    },
    ".numInputWrapper span:hover": {
        background: "$neutralBgHover"
    },
    ".numInputWrapper span:active": {
        background: "$neutralBgActive"
    },
    ".numInputWrapper span:after": {
        display: "block",
        content: "",
        position: "absolute"
    },
    ".numInputWrapper span.arrowUp": {
        top: 0,
        borderBottom: 0
    },
    ".numInputWrapper span.arrowUp:after": {
        borderLeft: "4px solid transparent",
        borderRight: "4px solid transparent",
        borderBottom: "4px solid $neutralText",
        top: "26%"
    },
    ".numInputWrapper span.arrowDown": {
        top: "50%"
    },
    ".numInputWrapper span.arrowDown:after": {
        borderLeft: "4px solid transparent",
        borderRight: "4px solid transparent",
        borderTop: "4px solid $neutralText",
        top: "40%"
    },
    ".numInputWrapper span svg": {
        width: "inherit",
        height: "auto"
    },
    ".numInputWrapper span svg path": {
        fill: "$neutralBgHover"
    },
    ".numInputWrapper:hover": {
        background: "$neutralBgHover"
    },
    ".numInputWrapper:hover span": {
        opacity: 1
    },
    ".flatpickr-current-month": {
        fontSize: "135%",
        fontWeight: 300,
        color: "$neutralText",
        position: "absolute",
        width: "83%",
        left: "12.5%",
        lineHeight: "1px",
        height: 34,
        display: "flex",
        alignItems: "center",
        gap: 12,
        textAlign: "center",
        transform: "translate3d(0px, 0px, 0px)"
    },
    ".flatpickr-current-month span.cur-month": {
        fontFamily: "inherit",
        fontWeight: 700,
        color: "$neutralText",
        display: "inline-block",
        marginLeft: "0.5ch",
        padding: 0
    },
    ".flatpickr-current-month span.cur-month:hover": {
        background: "rgba(192,187,167,0.05)"
    },
    ".flatpickr-current-month .numInputWrapper": {
        width: "7ch\0",
        display: "inline-block"
    },
    ".flatpickr-current-month .numInputWrapper span.arrowUp:after": {
        borderBottomColor: "$neutralText"
    },
    ".flatpickr-current-month .numInputWrapper span.arrowDown:after": {
        borderTopColor: "$neutralText"
    },
    ".flatpickr-current-month input.cur-year": {
        backgroundColor: "transparent",
        boxSizing: "border-box",
        color: "$neutralText",
        cursor: "text",
        margin: 0,
        display: "inline-block",
        fontSize: "inherit",
        fontFamily: "inherit",
        lineHeight: "inherit",
        height: "auto",
        border: 0,
        borderRadius: 0,
        verticalAlign: "initial",
        appearance: "textfield",
        padding: "4px 0px"
    },
    ".flatpickr-current-month input.cur-year:focus": {
        outline: 0
    },
    ".flatpickr-current-month input.cur-year[disabled], .flatpickr-current-month input.cur-year[disabled]:hover": {
        fontSize: "100%",
        color: "$neutralText",
        background: "transparent",
        pointerEvents: "none"
    },
    ".flatpickr-current-month .flatpickr-monthDropdown-months": {
        appearance: "menulist",
        backgroundColor: "transparent",
        border: "none",
        borderRadius: 0,
        boxSizing: "border-box",
        color: "$neutralText",
        cursor: "pointer",
        fontSize: "inherit",
        fontFamily: "inherit",
        height: "auto",
        lineHeight: "inherit",
        outline: "none",
        position: "relative",
        verticalAlign: "initial",
        width: "auto",
        padding: "4px 8px"
    },
    ".flatpickr-current-month .flatpickr-monthDropdown-months:focus, .flatpickr-current-month .flatpickr-monthDropdown-months:active": {
        outline: "none"
    },
    ".flatpickr-current-month .flatpickr-monthDropdown-months:hover": {
        backgroundColor: "$neutralBgHover"
    },
    ".flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month": {
        backgroundColor: "$neutralBg",
        outline: "none",
        padding: 0
    },
    ".flatpickr-weekdays": {
        backgroundColor: "transparent",
        color: "$neutralText",
        textAlign: "center",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        alignItems: "center",
        height: 28,
        border: "transparent",
        marginBottom: 8
    },
    ".flatpickr-weekdays .flatpickr-weekdaycontainer": {
        display: "flex",
        flex: 1
    },
    "span.flatpickr-weekday": {
        cursor: "default",
        fontSize: "90%",
        background: "transparent",
        color: "$neutralText",
        lineHeight: "1px",
        margin: 0,
        textAlign: "center",
        display: "block",
        flex: 1,
        fontWeight: "bolder"
    },
    ".dayContainer, .flatpickr-weeks": {
        padding: "1px 0 0 0"
    },
    ".flatpickr-days": {
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
        width: 307.875,
        marginBottom: 12
    },
    ".flatpickr-days:focus": {
        outline: 0
    },
    ".dayContainer": {
        padding: 0,
        outline: 0,
        textAlign: "left",
        width: 307.875,
        minWidth: 307.875,
        maxWidth: 307.875,
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        "-ms-flex-pack": "justify",
        justifyContent: "space-around",
        transform: "translate3d(0px, 0px, 0px)",
        opacity: 1
    },
    ".dayContainer + .dayContainer": {
        boxShadow: "-1px 0 0 #20222c"
    },
    ".flatpickr-day": {
        background: "none",
        border: "1px solid transparent",
        borderRadius: 150,
        boxSizing: "border-box",
        color: "$neutralText",
        cursor: "pointer",
        fontWeight: 400,
        width: "14.2857143%",
        flexBasis: "14.2857143%",
        maxWidth: 39,
        height: 39,
        lineHeight: "39px",
        margin: 0,
        display: "inline-block",
        position: "relative",
        "-webkit-box-pack": "center",
        "-ms-flex-pack": "center",
        justifyContent: "center",
        textAlign: "center"
    },
    ".flatpickr-day.inRange, .flatpickr-day.prevMonthDay.inRange, .flatpickr-day.nextMonthDay.inRange, .flatpickr-day.today.inRange, .flatpickr-day.prevMonthDay.today.inRange, .flatpickr-day.nextMonthDay.today.inRange, .flatpickr-day:hover, .flatpickr-day.prevMonthDay:hover, .flatpickr-day.nextMonthDay:hover, .flatpickr-day:focus, .flatpickr-day.prevMonthDay:focus, .flatpickr-day.nextMonthDay:focus": {
        cursor: "pointer",
        outline: 0,
        backgroundColor: "$accentBg",
        borderColor: "$neutralBorder"
    },
    ".flatpickr-day.today": {
        borderColor: "$neutralBorder"
    },
    ".flatpickr-day.today:hover, .flatpickr-day.today:focus": {
        borderColor: "$neutralBorder",
        backgroundColor: "$neutralBg",
        color: "$buttonTextColor"
    },
    ".flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay": {
        backgroundColor: "$accentBg",
        boxShadow: "none",
        color: "$neutralTextContrast",
        borderColor: "$borderColor"
    },
    ".flatpickr-day.selected.startRange, .flatpickr-day.startRange.startRange, .flatpickr-day.endRange.startRange": {
        borderRadius: "50px 0 0 50px"
    },
    ".flatpickr-day.selected.endRange, .flatpickr-day.startRange.endRange, .flatpickr-day.endRange.endRange": {
        borderRadius: "0 50px 50px 0"
    },
    ".flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1))": {
        boxShadow: "-10px 0 0 #80cbc4"
    },
    ".flatpickr-day.selected.startRange.endRange, .flatpickr-day.startRange.startRange.endRange, .flatpickr-day.endRange.startRange.endRange": {
        borderRadius: 50
    },
    ".flatpickr-day.inRange": {
        borderRadius: 0,
        boxShadow: "-5px 0 0 #646c8c, 5px 0 0 #646c8c"
    },
    ".flatpickr-day.flatpickr-disabled, .flatpickr-day.flatpickr-disabled:hover, .flatpickr-day.prevMonthDay, .flatpickr-day.nextMonthDay, .flatpickr-day.notAllowed, .flatpickr-day.notAllowed.prevMonthDay, .flatpickr-day.notAllowed.nextMonthDay": {
        color: "$neutralText",
        background: "transparent",
        borderColor: "transparent",
        cursor: "default"
    },
    ".flatpickr-day.flatpickr-disabled, .flatpickr-day.flatpickr-disabled:hover": {
        cursor: "not-allowed",
        color: "$neutralText",
        opacity: 0.5
    },
    ".flatpickr-day.week.selected": {
        borderRadius: 0,
        boxShadow: "-5px 0 0 #80cbc4, 5px 0 0 #80cbc4"
    },
    ".flatpickr-day.hidden": {
        visibility: "hidden"
    },
    ".rangeMode .flatpickr-day": {
        marginTop: 1
    },
    ".flatpickr-weekwrapper": {
        float: "left"
    },
    ".flatpickr-weekwrapper .flatpickr-weeks": {
        padding: "0 12px",
        boxShadow: "1px 0 0 #20222c"
    },
    ".flatpickr-weekwrapper .flatpickr-weekday": {
        float: "none",
        width: "100%",
        lineHeight: "28px"
    },
    ".flatpickr-weekwrapper span.flatpickr-day, .flatpickr-weekwrapper span.flatpickr-day:hover": {
        display: "block",
        width: "100%",
        maxWidth: "none",
        color: "$neutralText",
        background: "transparent",
        cursor: "default",
        border: "none"
    },
    ".flatpickr-innerContainer": {
        display: "flex",
        boxSizing: "border-box",
        overflow: "hidden"
    },
    ".flatpickr-rContainer": {
        display: "inline-block",
        padding: 0,
        boxSizing: "border-box"
    },
    ".flatpickr-time": {
        textAlign: "center",
        outline: 0,
        height: 0,
        lineHeight: "40px",
        maxHeight: 40,
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex"
    },
    ".flatpickr-time:after": {
        content: "",
        display: "table",
        clear: "both"
    },
    ".flatpickr-time .numInputWrapper": {
        flex: 1,
        width: "40%",
        height: 40,
        float: "left"
    },
    ".flatpickr-time .numInputWrapper span.arrowUp:after": {
        borderBottomColor: "$neutralText"
    },
    ".flatpickr-time .numInputWrapper span.arrowDown:after": {
        borderTopColor: "$neutralText"
    },
    ".flatpickr-time.hasSeconds .numInputWrapper": {
        width: "26%"
    },
    ".flatpickr-time.time24hr .numInputWrapper": {
        width: "49%"
    },
    ".flatpickr-time input": {
        background: "transparent",
        boxShadow: "none",
        border: 0,
        borderRadius: 0,
        textAlign: "center",
        margin: 0,
        padding: 0,
        height: "inherit",
        lineHeight: "inherit",
        color: "$neutralText",
        fontSize: 14,
        position: "relative",
        boxSizing: "border-box",
        appearance: "textfield"
    },
    ".flatpickr-time input.flatpickr-hour": {},
    ".flatpickr-time input.flatpickr-minute, .flatpickr-time input.flatpickr-second": {
        fontWeight: 400
    },
    ".flatpickr-time input:focus": {
        outline: 0,
        border: 0
    },
    ".flatpickr-time .flatpickr-time-separator, .flatpickr-time .flatpickr-am-pm": {
        height: "inherit",
        float: "left",
        lineHeight: "inherit",
        color: "$neutralText",
        fontWeight: "bold",
        width: "2%",
        userSelect: "none",
        "-ms-flex-item-align": "center",
        alignSelf: "center"
    },
    ".flatpickr-time .flatpickr-am-pm": {
        outline: 0,
        width: "18%",
        cursor: "pointer",
        textAlign: "center",
        fontWeight: 400
    },
    ".flatpickr-time input:hover, .flatpickr-time .flatpickr-am-pm:hover, .flatpickr-time input:focus, .flatpickr-time .flatpickr-am-pm:focus": {
        background: "$neutralBgHover"
    },
    ".flatpickr-input[readonly]": {
        cursor: "pointer"
    },
    ".flatpickr-input.flatpickr-mobile": {
        "&::-webkit-inner-spin-button": {
            display: "none",
            "-webkit-appearance": "none"
        },
        "&::-webkit-calendar-picker-indicator": {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "none"
        },
        "&::-webkit-datetime-edit": {
            display: "none",
            "-webkit-appearance": "none"
        },
        "&::-webkit-date-and-time-value": {
            display: "none",
            "-webkit-appearance": "none"
        }
    },
    "@-moz-document url-prefix()": {
        "@media only screen and (max-width: 600px)": {
            '.flatpickr-input[type="text"]': {
                color: "transparent"
            }
        }
    }
});
var $dc47145da9e25ac7$export$2e2bcd8739ae039 = $dc47145da9e25ac7$var$calendarCss;



const $3fd7a7c58aadc6ae$var$useMutationObservable = (callback, el, options)=>{
    const [observer, setObserver] = (0, $TBcmg$useState)(null);
    (0, $TBcmg$useEffect)(()=>{
        if (observer) observer.disconnect();
        if (!el || typeof window === "undefined" || !("MutationObserver" in window)) return;
        const obs = new MutationObserver(callback);
        obs.observe(el, options);
        setObserver(obs);
        return ()=>{
            obs.disconnect();
        };
    }, [
        el,
        callback,
        options
    ]);
    return observer;
};
var $3fd7a7c58aadc6ae$export$2e2bcd8739ae039 = $3fd7a7c58aadc6ae$var$useMutationObservable;


const $f4609ce2cb6b416b$export$2c657da244d00bd6 = /*#__PURE__*/ (0, $TBcmg$createContext)(undefined);
const $f4609ce2cb6b416b$export$f66a1c3c9465af21 = /*#__PURE__*/ (0, $TBcmg$createContext)({});
const $f4609ce2cb6b416b$var$defaultOptions = {
    chains: [
        {
            baseApiUrl: "https://api.reservoir.tools",
            id: 1,
            active: true
        }
    ]
};
const $f4609ce2cb6b416b$var$classNameObserverOptions = {
    attributeFilter: [
        "class"
    ]
};
const $f4609ce2cb6b416b$export$14ec072536e53e19 = function({ children: children , options: options = $f4609ce2cb6b416b$var$defaultOptions , theme: theme , swrOptions: swrOptions = {}  }) {
    const [globalTheme, setGlobalTheme] = (0, $TBcmg$useState)();
    const [providerOptions, setProviderOptions] = (0, $TBcmg$useState)({});
    const currentTheme = (0, $TBcmg$useRef)(null);
    const classNameCallback = (0, $TBcmg$useCallback)((mutationList)=>{
        mutationList.forEach((mutation)=>{
            const body = mutation.target;
            if (mutation.attributeName === "class" && body && !body.className.includes(currentTheme.current)) document.body.classList.add(currentTheme.current);
        });
    }, [
        currentTheme
    ]);
    (0, $3fd7a7c58aadc6ae$export$2e2bcd8739ae039)(classNameCallback, typeof window !== "undefined" ? document.body : null, $f4609ce2cb6b416b$var$classNameObserverOptions);
    (0, $dc47145da9e25ac7$export$2e2bcd8739ae039)();
    (0, $TBcmg$useEffect)(()=>{
        let newTheme = (0, $4a58f4053e821189$export$25d302a5b900a763)(theme ? theme : (0, $1fa63d73b4d6b2f8$export$2e2bcd8739ae039)());
        let oldTheme = currentTheme.current;
        currentTheme.current = newTheme;
        document.body.classList.add(newTheme);
        if (oldTheme) document.body.classList.remove(oldTheme);
        setGlobalTheme(newTheme);
    }, [
        JSON.stringify(theme)
    ]);
    (0, $TBcmg$useEffect)(()=>{
        setProviderOptions(options);
    }, [
        options
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($f4609ce2cb6b416b$export$2c657da244d00bd6.Provider, {
        value: globalTheme
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Provider, null, /*#__PURE__*/ (0, $TBcmg$react).createElement($f4609ce2cb6b416b$export$f66a1c3c9465af21.Provider, {
        value: providerOptions
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $2deec6552e3d4fa0$export$9d733ffc7f61c45c), {
        options: options
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$SWRConfig), {
        value: {
            ...(0, $36299c87cce4672d$export$6f9d915eee0c027b),
            ...swrOptions
        }
    }, children)))));
};






function $3663d60eaf20fbf3$export$2e2bcd8739ae039() {
    return (0, $TBcmg$useContext)((0, $2deec6552e3d4fa0$export$61eba4f5b935df88));
}


function $7c7b75a236ce465b$export$2e2bcd8739ae039(collection, chainId, swrOptions = {}) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    const pathname = `${chain?.baseApiUrl}/collections/${collection}/attributes/all/v2`;
    const path = collection ? new URL(pathname) : null;
    const { data: data , mutate: mutate , error: error , isValidating: isValidating  } = (0, $TBcmg$swr)(path ? [
        path.href,
        chain?.apiKey,
        client?.version
    ] : null, null, {
        revalidateOnMount: true,
        ...swrOptions
    });
    const collections = data && data.attributes ? data.attributes : null;
    return {
        response: data,
        data: collections,
        mutate: mutate,
        error: error,
        isValidating: isValidating
    };
}





function $5e2a1f52f4fac2ad$export$2e2bcd8739ae039(getKey, options, limit) {
    const { mutate: globalMutate  } = (0, $TBcmg$useSWRConfig)();
    const [keys, setKeys] = (0, $TBcmg$useState)([]);
    const response = (0, $TBcmg$swrinfinite)((pageIndex, previousPageData)=>{
        const params = getKey(pageIndex, previousPageData);
        const key = params && params[0] ? params[0] : null;
        if (key && !keys.includes(key)) setKeys([
            ...keys,
            key
        ]);
        return params;
    }, null, options);
    const { size: size , error: error , setSize: setSize , mutate: mutate  } = response;
    const data = response.data;
    let hasNextPage;
    if (limit !== undefined) hasNextPage = size === 0 || Boolean(data?.[size - 1]?.collections?.length === limit);
    else hasNextPage = size === 0 || Boolean(data?.[size - 1]?.continuation);
    const isFetchingInitialData = !data && !error && size > 0;
    const isFetchingPage = size > 0 && (isFetchingInitialData || data && typeof data[size - 1] === "undefined");
    const fetchNextPage = ()=>{
        if (!isFetchingPage && hasNextPage) setSize((size)=>size + 1);
    };
    const resetCache = ()=>{
        setSize(0);
        return mutate(undefined, {
            revalidate: false
        }).then(()=>{
            globalMutate((key)=>{
                const url = key && key[0] ? key[0] : null;
                if (url) return keys.includes(url);
                return false;
            }, undefined, false).then(()=>{
                setKeys([]);
            });
        });
    };
    return {
        ...response,
        hasNextPage: hasNextPage,
        isFetchingInitialData: isFetchingInitialData,
        isFetchingPage: isFetchingPage,
        resetCache: resetCache,
        fetchNextPage: fetchNextPage
    };
}



function $e5a3042549429464$export$2e2bcd8739ae039(options, swrOptions = {}, enabled = true, chainId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const response = (0, $5e2a1f52f4fac2ad$export$2e2bcd8739ae039)((pageIndex, previousPageData)=>{
        if (!enabled) return null;
        const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
        const url = new URL(`${chain?.baseApiUrl || ""}/orders/bids/v5`);
        let query = options || {};
        if (query.normalizeRoyalties === undefined && client?.normalizeRoyalties !== undefined) query.normalizeRoyalties = client?.normalizeRoyalties;
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        (0, $TBcmg$setParams)(url, query);
        return [
            url.href,
            chain?.apiKey,
            client?.version
        ];
    }, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    const bids = (0, $TBcmg$useMemo)(()=>response.data?.flatMap((page)=>page.orders || []) ?? [], [
        response.data
    ]);
    return {
        ...response,
        data: bids
    };
}







function $57dcd81a309fc6e2$export$2e2bcd8739ae039(chainId) {
    const { chains: chains  } = (0, $TBcmg$useNetwork)();
    return $57dcd81a309fc6e2$export$de76f26780462518(chains, chainId);
}
const $57dcd81a309fc6e2$export$de76f26780462518 = (chains, chainId)=>{
    const client = (0, $TBcmg$getClient)();
    const reservoirChain = chainId ? client.chains.find((chain)=>chain.id === chainId) : client.currentChain();
    let chain = chains.find((chain)=>reservoirChain?.id === chain.id);
    if (!chain && chains.length > 0) chain = chains[0];
    const ETHChains = [
        (0, $TBcmg$mainnet).id,
        (0, $TBcmg$goerli).id
    ];
    if (!chain || !chain.nativeCurrency || ETHChains.includes(chain.id)) return {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        address: (0, $TBcmg$zeroAddress),
        chainId: chain?.id || (0, $TBcmg$mainnet).id
    };
    else return {
        ...chain.nativeCurrency,
        address: (0, $TBcmg$zeroAddress),
        chainId: chain.id
    };
};








var $ad5b3085b935ed8c$export$de7bcda3c490bf18;
(function(CheckoutStatus) {
    CheckoutStatus[CheckoutStatus["Idle"] = 0] = "Idle";
    CheckoutStatus[CheckoutStatus["Approving"] = 1] = "Approving";
    CheckoutStatus[CheckoutStatus["Finalizing"] = 2] = "Finalizing";
    CheckoutStatus[CheckoutStatus["Complete"] = 3] = "Complete";
})($ad5b3085b935ed8c$export$de7bcda3c490bf18 || ($ad5b3085b935ed8c$export$de7bcda3c490bf18 = {}));
var $ad5b3085b935ed8c$export$6adf53dcf2d42374;
(function(CheckoutTransactionError) {
    CheckoutTransactionError[CheckoutTransactionError["Unknown"] = 0] = "Unknown";
    CheckoutTransactionError[CheckoutTransactionError["PiceMismatch"] = 1] = "PiceMismatch";
    CheckoutTransactionError[CheckoutTransactionError["InsufficientBalance"] = 2] = "InsufficientBalance";
    CheckoutTransactionError[CheckoutTransactionError["UserDenied"] = 3] = "UserDenied";
})($ad5b3085b935ed8c$export$6adf53dcf2d42374 || ($ad5b3085b935ed8c$export$6adf53dcf2d42374 = {}));
const $ad5b3085b935ed8c$var$CartStorageKey = `reservoirkit.cart.${(0, $fe6ce5c2ceb86f27$exports.version)}`;
function $ad5b3085b935ed8c$var$cartStore({ feesOnTopBps: feesOnTopBps , persist: persist = true  }) {
    const { address: address  } = (0, $TBcmg$useAccount)();
    const { chains: chains  } = (0, $TBcmg$useNetwork)();
    const { switchNetworkAsync: switchNetworkAsync  } = (0, $TBcmg$useSwitchNetwork)();
    const cartData = (0, $TBcmg$useRef)({
        totalPrice: 0,
        feesOnTopBps: undefined,
        items: [],
        pools: {},
        isValidating: false,
        transaction: null
    });
    const subscribers = (0, $TBcmg$useRef)(new Set());
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    (0, $TBcmg$useEffect)(()=>{
        if (persist && typeof window !== "undefined" && window.localStorage) {
            const storedCart = window.localStorage.getItem($ad5b3085b935ed8c$var$CartStorageKey);
            if (storedCart) {
                const rehydratedCart = JSON.parse(storedCart);
                const currency = getCartCurrency(rehydratedCart.items, rehydratedCart.chain?.id || 1);
                const pools = calculatePools(rehydratedCart.items);
                const { totalPrice: totalPrice , feeOnTop: feeOnTop  } = calculatePricing(rehydratedCart.items, currency, cartData.current.feesOnTopBps);
                cartData.current = {
                    ...cartData.current,
                    chain: rehydratedCart.items.length > 0 ? rehydratedCart.chain : undefined,
                    items: rehydratedCart.items,
                    pools: pools,
                    totalPrice: totalPrice,
                    feeOnTop: feeOnTop,
                    currency: currency
                };
                subscribers.current.forEach((callback)=>callback());
                validate();
            }
        }
    }, []);
    (0, $TBcmg$useEffect)(()=>{
        const currency = getCartCurrency(cartData.current.items, cartData.current.chain?.id || 1);
        const pools = calculatePools(cartData.current.items);
        const { totalPrice: totalPrice , feeOnTop: feeOnTop  } = calculatePricing(cartData.current.items, currency, feesOnTopBps);
        cartData.current = {
            ...cartData.current,
            pools: pools,
            totalPrice: totalPrice,
            feesOnTopBps: feesOnTopBps,
            feeOnTop: feeOnTop,
            currency: currency
        };
        commit();
    }, [
        feesOnTopBps
    ]);
    const get = (0, $TBcmg$useCallback)(()=>cartData.current, []);
    const set = (0, $TBcmg$useCallback)((value)=>{
        cartData.current = {
            ...cartData.current,
            ...value
        };
        commit();
    }, []);
    const subscribe = (0, $TBcmg$useCallback)((callback)=>{
        subscribers.current.add(callback);
        return ()=>subscribers.current.delete(callback);
    }, []);
    const commit = (0, $TBcmg$useCallback)(()=>{
        subscribers.current.forEach((callback)=>callback());
        if (persist && typeof window !== "undefined" && window.localStorage) window.localStorage.setItem($ad5b3085b935ed8c$var$CartStorageKey, JSON.stringify(cartData.current));
    }, [
        persist
    ]);
    const calculatePools = (0, $TBcmg$useCallback)((items)=>{
        const pools = {};
        items.forEach((item)=>{
            if (item.poolId) {
                if (!pools[item.poolId] && item.poolPrices) {
                    pools[item.poolId] = {
                        prices: item.poolPrices,
                        itemCount: 1
                    };
                    item.price = item.poolPrices[0];
                } else if (item.poolPrices) {
                    item.price = item.poolPrices[pools[item.poolId].itemCount];
                    pools[item.poolId].itemCount += 1;
                }
            }
        });
        return pools;
    }, []);
    const calculatePricing = (0, $TBcmg$useCallback)((items, currency, feesOnTopBps)=>{
        let feeOnTop = 0;
        let subtotal = items.reduce((total, { price: price , order: order  })=>{
            let amount = price?.amount?.decimal;
            if (price?.currency?.contract !== currency?.contract) amount = price?.amount?.native;
            if (amount && order?.quantity) amount = amount * order?.quantity;
            return total += amount || 0;
        }, 0);
        if (feesOnTopBps) feeOnTop = feesOnTopBps.reduce((total, feeOnTopBps)=>{
            const [_, feeBps] = feeOnTopBps.split(":");
            total += Number(feeBps || 0) / 10000 * subtotal;
            return total;
        }, 0);
        subtotal = subtotal + feeOnTop;
        return {
            totalPrice: subtotal,
            feeOnTop: feeOnTop
        };
    }, []);
    const getCartCurrency = (0, $TBcmg$useCallback)((items, chainId)=>{
        let currencies = new Set();
        let currenciesData = {};
        for(let i = 0; i < items.length; i++){
            const currency = items[i].price?.currency;
            if (currency?.contract) {
                currencies.add(currency.contract);
                currenciesData[currency.contract] = currency;
            }
            if (currencies.size > 1) break;
        }
        if (currencies.size > 1) return (0, $57dcd81a309fc6e2$export$de76f26780462518)(chains, chainId);
        else if (currencies.size > 0) return Object.values(currenciesData)[0];
    }, [
        chains
    ]);
    const fetchTokens = (0, $TBcmg$useCallback)(async (tokenIds, chainId)=>{
        if (!tokenIds || tokenIds.length === 0) return {
            tokens: []
        };
        const reservoirChain = client?.chains.find((chain)=>chain.id === chainId);
        const url = new URL(`${reservoirChain?.baseApiUrl}/tokens/v6`);
        const query = {
            tokens: tokenIds,
            limit: 100,
            includeDynamicPricing: true
        };
        if (client?.normalizeRoyalties !== undefined) query.normalizeRoyalties = client?.normalizeRoyalties;
        (0, $TBcmg$setParams)(url, query);
        const params = [
            url.href
        ];
        if (reservoirChain?.apiKey) params.push(reservoirChain.apiKey);
        if (client?.version) params.push(client.version);
        const response = await (0, $36299c87cce4672d$export$77754e0ac9f8aba3)(params);
        return {
            tokens: response.tokens
        };
    }, [
        client
    ]);
    const fetchOrders = (0, $TBcmg$useCallback)(async (orderIds, chainId)=>{
        if (!orderIds || orderIds.length === 0) return {
            orders: []
        };
        const reservoirChain = client?.chains.find((chain)=>chain.id === chainId);
        const url = new URL(`${reservoirChain?.baseApiUrl}/orders/asks/v4`);
        const query = {
            ids: orderIds,
            limit: 1000,
            includeCriteriaMetadata: true
        };
        if (client?.normalizeRoyalties !== undefined) query.normalizeRoyalties = client?.normalizeRoyalties;
        (0, $TBcmg$setParams)(url, query);
        const params = [
            url.href
        ];
        if (reservoirChain?.apiKey) params.push(reservoirChain.apiKey);
        if (client?.version) params.push(client.version);
        const response = await (0, $36299c87cce4672d$export$77754e0ac9f8aba3)(params);
        return {
            orders: response.orders
        };
    }, [
        client
    ]);
    const convertTokenToItem = (0, $TBcmg$useCallback)((tokenData)=>{
        const token = tokenData.token;
        const market = tokenData.market;
        if (!token?.tokenId || !token.collection?.id) return;
        const dynamicPricing = market?.floorAsk?.dynamicPricing;
        let order = undefined;
        if (token.kind === "erc1155" && market?.floorAsk) order = {
            id: market?.floorAsk?.id || "",
            quantityRemaining: market?.floorAsk?.quantityRemaining || 1,
            quantity: 1,
            maker: market?.floorAsk?.maker || ""
        };
        return {
            token: {
                id: token.tokenId,
                name: token.name || ""
            },
            collection: {
                id: token.collection.id,
                name: token.collection.name || ""
            },
            order: order,
            price: dynamicPricing?.kind === "pool" ? undefined : market?.floorAsk?.price,
            poolId: dynamicPricing?.kind === "pool" ? dynamicPricing.data?.pool : undefined,
            poolPrices: dynamicPricing?.kind === "pool" ? dynamicPricing.data?.prices : undefined
        };
    }, []);
    const convertOrderToItem = (0, $TBcmg$useCallback)((orderData)=>{
        let criteria = orderData.criteria?.data;
        if (!criteria?.token?.tokenId || !criteria.collection?.id) return;
        return {
            token: {
                id: criteria.token.tokenId,
                name: criteria.token.name || ""
            },
            collection: {
                id: criteria.collection.id,
                name: criteria.collection.name || ""
            },
            order: {
                id: orderData.id,
                quantityRemaining: orderData.quantityRemaining || 1,
                quantity: 1,
                maker: orderData.maker
            },
            price: orderData.price,
            poolId: undefined,
            poolPrices: undefined
        };
    }, []);
    const clear = (0, $TBcmg$useCallback)(()=>{
        cartData.current = {
            ...cartData.current,
            items: [],
            pools: {},
            totalPrice: 0,
            feeOnTop: 0,
            chain: undefined
        };
        commit();
    }, [
        commit
    ]);
    const clearTransaction = (0, $TBcmg$useCallback)(()=>{
        cartData.current = {
            ...cartData.current,
            transaction: null,
            pendingTransactionId: undefined
        };
        commit();
    }, [
        commit
    ]);
    const setQuantity = (0, $TBcmg$useCallback)((orderId, quantity)=>{
        const updatedItems = [
            ...cartData.current.items
        ];
        let item = updatedItems.find((item)=>item.order?.id === orderId);
        if (item?.order && (quantity > 0 || quantity == -1)) {
            if (quantity > item?.order?.quantityRemaining) quantity = item?.order?.quantityRemaining;
            item.order = {
                ...item.order,
                quantity: quantity
            };
        }
        if (quantity == -1) cartData.current = {
            ...cartData.current,
            items: updatedItems
        };
        else {
            const currency = getCartCurrency(updatedItems, cartData.current.chain?.id || 1);
            const { totalPrice: totalPrice , feeOnTop: feeOnTop  } = calculatePricing(updatedItems, currency, cartData.current.feesOnTopBps);
            cartData.current = {
                ...cartData.current,
                items: updatedItems,
                totalPrice: totalPrice,
                feeOnTop: feeOnTop,
                currency: currency
            };
        }
        commit();
    }, [
        commit
    ]);
    const add = (0, $TBcmg$useCallback)(async (items, chainId)=>{
        try {
            if (cartData.current.chain && chainId != cartData.current.chain?.id) throw `ChainId: ${chainId}, is different than the cart chainId (${cartData.current.chain?.id})`;
            if (cartData.current.isValidating) throw "Currently validating, adding items temporarily disabled";
            const updatedItems = [
                ...cartData.current.items
            ];
            const currentIds = cartData.current.items.map((item)=>`${item.collection.id}:${item.token.id}`);
            const currentOrderIds = cartData.current.items.map((item)=>item.order?.id);
            const tokensToFetch = [];
            const tokens = [];
            const ordersToFetch = [];
            const tokensByMaker = updatedItems.reduce((map, item)=>{
                if (item.order) {
                    const maker = item.order?.maker;
                    if (!map[maker]) map[maker] = [];
                    map[maker].push(`${item.collection.id}:${item.token.id}`);
                }
                return map;
            }, {});
            items.forEach((item)=>{
                const token = item;
                const asyncToken = item;
                const asyncOrder = item;
                if (token.token) {
                    if (!currentIds.includes(`${token.token?.collection?.id}:${token.token?.tokenId}`)) tokens.push(token);
                } else if (asyncToken && asyncToken.id && !currentIds.includes(asyncToken.id)) tokensToFetch.push(asyncToken.id);
                else if (asyncOrder && asyncOrder.orderId && !currentOrderIds.includes(asyncOrder.orderId)) ordersToFetch.push(asyncOrder.orderId);
            });
            const promises = [];
            if (tokensToFetch.length > 0) promises.push(new Promise(async (resolve)=>{
                const { tokens: fetchedTokens  } = await fetchTokens(tokensToFetch, chainId);
                fetchedTokens?.forEach((tokenData)=>{
                    const item = convertTokenToItem(tokenData);
                    const id = `${item?.collection.id}:${item?.token.id}`;
                    const maker = tokenData.market?.floorAsk?.maker;
                    const duplicateListingDetected = item && maker && tokensByMaker[maker] && tokensByMaker[maker].includes(id);
                    if (duplicateListingDetected) client?.log([
                        "Detected adding duplicate listing to cart, aborting",
                        tokenData,
                        updatedItems
                    ], (0, $TBcmg$LogLevel).Error);
                    else if (item) updatedItems.push(item);
                });
                resolve();
            }));
            if (ordersToFetch.length > 0) promises.push(new Promise(async (resolve)=>{
                const { orders: fetchedOrders  } = await fetchOrders(ordersToFetch, chainId);
                fetchedOrders?.forEach((orderData)=>{
                    const item = convertOrderToItem(orderData);
                    const id = `${item?.collection.id}:${item?.token.id}`;
                    const duplicateListingDetected = item && tokensByMaker[orderData.maker] && tokensByMaker[orderData.maker].includes(id);
                    if (duplicateListingDetected) client?.log([
                        "Detected adding duplicate listing to cart, aborting",
                        orderData,
                        updatedItems
                    ], (0, $TBcmg$LogLevel).Error);
                    else if (item) updatedItems.push(item);
                });
                resolve();
            }));
            if (promises.length > 0) {
                cartData.current.isValidating = true;
                subscribers.current.forEach((callback)=>callback());
                await Promise.allSettled(promises);
            }
            if (tokens.length > 0) tokens.forEach((token)=>{
                if (token.market?.floorAsk?.maker?.toLowerCase() !== address?.toLowerCase() && token.token?.owner?.toLowerCase() !== address?.toLowerCase()) {
                    const item = convertTokenToItem(token);
                    if (item) updatedItems.push(item);
                }
            });
            const pools = calculatePools(updatedItems);
            const currency = getCartCurrency(updatedItems, chainId);
            const { totalPrice: totalPrice , feeOnTop: feeOnTop  } = calculatePricing(updatedItems, currency, cartData.current.feesOnTopBps);
            cartData.current = {
                ...cartData.current,
                isValidating: false,
                items: updatedItems,
                totalPrice: totalPrice,
                feeOnTop: feeOnTop,
                currency: currency,
                pools: pools
            };
            if (!cartData.current.chain) cartData.current.chain = client?.chains.find((chain)=>chain.id === chainId) || client?.currentChain() || undefined;
            commit();
        } catch (e) {
            if (cartData.current.isValidating) {
                cartData.current.isValidating = false;
                commit();
            }
            throw e;
        }
    }, [
        fetchTokens,
        commit,
        address
    ]);
    /**
     * @param ids An array of order ids or token keys. Tokens should be in the format `collection:token`
     */ const remove = (0, $TBcmg$useCallback)((ids)=>{
        if (cartData.current.isValidating) {
            console.warn("Currently validating, removing items temporarily disabled");
            return;
        }
        const updatedItems = [];
        const removedItems = [];
        cartData.current.items.forEach((item)=>{
            const key = `${item.collection.id}:${item.token.id}`;
            const orderId = item.order?.id;
            if (orderId && ids.includes(orderId)) removedItems.push(item);
            else if (ids.includes(key)) removedItems.push(item);
            else updatedItems.push(item);
        });
        const pools = calculatePools(updatedItems);
        const currency = getCartCurrency(updatedItems, cartData.current.chain?.id || 1);
        const { totalPrice: totalPrice , feeOnTop: feeOnTop  } = calculatePricing(updatedItems, currency, cartData.current.feesOnTopBps);
        //Suppress pool price changes if the removed item was from the pool
        const removedPoolIds = removedItems.reduce((poolIds, item)=>{
            if (item.poolId) poolIds.push(item.poolId);
            return poolIds;
        }, []);
        updatedItems.forEach((item)=>{
            if (item.poolId && removedPoolIds.includes(item.poolId)) item.previousPrice = item.price;
        });
        cartData.current = {
            ...cartData.current,
            items: updatedItems,
            pools: pools,
            totalPrice: totalPrice,
            feeOnTop: feeOnTop,
            currency: currency
        };
        if (updatedItems.length === 0) cartData.current.chain = undefined;
        commit();
    }, []);
    const validate = (0, $TBcmg$useCallback)(async ()=>{
        try {
            if (cartData.current.items.length === 0) return false;
            cartData.current = {
                ...cartData.current,
                isValidating: true
            };
            commit();
            const items = [
                ...cartData.current.items
            ];
            const positionMap = cartData.current.items.reduce((items, item, index)=>{
                if (item.order?.id) items[`${item.order.id}`] = index;
                else if (item.collection.id && item.token?.id) items[`${item.collection.id}:${item.token.id}`] = index;
                return items;
            }, {}) || {};
            const tokensToFetch = [];
            const ordersToFetch = [];
            //find tokens and order ids to fetch
            cartData.current.items.map((item)=>{
                if (item.order?.id) ordersToFetch.push(item.order.id);
                else {
                    const contract = item.collection.id.split(":")[0];
                    tokensToFetch.push(`${contract}:${item.token.id}`);
                }
            });
            //fetch tokens and orders in tandem
            const promises = [];
            if (ordersToFetch.length > 0) promises.push(fetchOrders(ordersToFetch, cartData.current.chain?.id));
            if (tokensToFetch.length > 0) promises.push(fetchTokens(tokensToFetch, cartData.current.chain?.id));
            const responses = await Promise.allSettled(promises);
            // hashmap of items to remove { orderId/tokenId: item index }
            let itemsToRemove = {};
            responses.forEach((response)=>{
                if (response.status === "fulfilled") {
                    const ordersResponse = response.value;
                    const tokensResponse = response.value;
                    if (ordersResponse && ordersResponse.orders) // process orders response
                    ordersResponse.orders.map((order)=>{
                        let index = positionMap[order.id];
                        if (address && order.maker.toLowerCase() === address?.toLowerCase()) itemsToRemove[order.id] = index;
                        else if (order.status !== "active") items[index] = {
                            ...items[index],
                            price: undefined
                        };
                    });
                    else if (tokensResponse && tokensResponse.tokens) // process tokens response
                    tokensResponse.tokens.map(({ token: token , market: market  })=>{
                        const index = positionMap[`${token?.collection?.id}:${token?.tokenId}`];
                        if (address && (token?.owner?.toLowerCase() === address?.toLowerCase() || market?.floorAsk?.maker?.toLowerCase() === address?.toLowerCase())) {
                            if (token?.collection?.id && token?.tokenId) itemsToRemove[`${token.collection.id}:${token.tokenId}`] = index;
                        } else {
                            const dynamicPricing = market?.floorAsk?.dynamicPricing;
                            items[index] = {
                                ...items[index],
                                previousPrice: items[index].price,
                                price: market?.floorAsk?.price,
                                poolId: dynamicPricing?.kind === "pool" ? dynamicPricing.data?.pool : undefined,
                                poolPrices: dynamicPricing?.kind === "pool" ? dynamicPricing.data?.prices : undefined
                            };
                            if (token?.name) items[index].token.name = token.name;
                            if (token?.collection?.name) items[index].collection.name = token.collection.name;
                        }
                    });
                }
            });
            // Remove all items in itemsToRemove
            if (Object.values(itemsToRemove).length > 0) Object.values(itemsToRemove).map((index)=>{
                items.splice(index, 1);
            });
            const pools = calculatePools(items);
            const currency = getCartCurrency(items, cartData.current.chain?.id || 1);
            const { totalPrice: totalPrice , feeOnTop: feeOnTop  } = calculatePricing(items, currency, cartData.current.feesOnTopBps);
            cartData.current = {
                ...cartData.current,
                items: items,
                pools: pools,
                isValidating: false,
                totalPrice: totalPrice,
                feeOnTop: feeOnTop,
                currency: currency
            };
            commit();
            return true;
        } catch (e) {
            if (cartData.current.isValidating) {
                cartData.current.isValidating = false;
                commit();
            }
            throw e;
        }
    }, [
        fetchTokens,
        fetchOrders,
        address
    ]);
    const checkout = (0, $TBcmg$useCallback)(async (options = {})=>{
        if (!client) throw "Reservoir SDK not initialized";
        const { chain: activeChain  } = await (0, $TBcmg$getNetwork)();
        if (cartData.current.chain && cartData.current.chain?.id !== activeChain?.id) {
            const chain = await switchNetworkAsync?.(cartData.current.chain.id);
            if (chain?.id !== cartData.current.chain.id) throw "Active chain does not match cart chain";
        }
        const wallet = await (0, $TBcmg$getWalletClient)({
            chainId: cartData.current.chain?.id
        });
        if (!wallet) throw "Wallet/Signer not available";
        let isMixedCurrency = false;
        const tokens = cartData.current.items.reduce((items, { token: token , collection: collection , price: price , order: order  })=>{
            if (price) {
                const contract = collection.id.split(":")[0];
                items?.push({
                    token: order?.id ? undefined : `${contract}:${token.id}`,
                    orderId: order?.id,
                    quantity: order?.quantity
                });
                if (price.currency?.contract != cartData.current.currency?.contract) isMixedCurrency = true;
            }
            return items;
        }, []);
        if (!tokens || tokens.length === 0) throw "Cart is empty";
        const chainCurrency = (0, $57dcd81a309fc6e2$export$de76f26780462518)(chains, cartData.current.chain?.id || 1);
        const currencyChain = client.chains.find((chain)=>chainCurrency.chainId = chain.id);
        const feeOnTop = cartData.current.feeOnTop ? cartData.current.feeOnTop : 0;
        const expectedPrice = cartData.current.totalPrice - feeOnTop;
        let currencyDecimals = cartData.current.currency?.decimals || 18;
        if (isMixedCurrency) {
            options.currency = (0, $TBcmg$zeroAddress);
            currencyDecimals = chainCurrency.decimals;
        }
        if (feeOnTop) {
            if (cartData.current.feesOnTopBps) {
                const fixedFees = cartData.current.feesOnTopBps.map((fullFee)=>{
                    const [referrer, feeBps] = fullFee.split(":");
                    const fee = Number((0, $TBcmg$parseUnits)(`${expectedPrice}`, currencyDecimals) * BigInt(feeBps)) / 10000;
                    const atomicUnitsFee = (0, $TBcmg$formatUnits)(BigInt(fee), 0);
                    return `${referrer}:${atomicUnitsFee}`;
                });
                options.feesOnTop = fixedFees;
            }
        }
        if (options.partial === undefined) options.partial = true;
        const transactionId = `${new Date().getTime()}`;
        cartData.current = {
            ...cartData.current,
            pendingTransactionId: transactionId,
            transaction: {
                id: transactionId,
                chain: cartData.current.chain || currencyChain || client.chains[0],
                items: cartData.current.items,
                status: $ad5b3085b935ed8c$export$de7bcda3c490bf18.Approving
            }
        };
        commit();
        client.actions.buyToken({
            expectedPrice: expectedPrice,
            wallet: wallet,
            items: tokens,
            options: options,
            onProgress: (steps, path)=>{
                if (!steps) return;
                if (transactionId != cartData.current.pendingTransactionId) return;
                let status = cartData.current.transaction?.status || $ad5b3085b935ed8c$export$de7bcda3c490bf18.Approving;
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                const currentStepIndex = executableSteps.findIndex((step)=>{
                    currentStepItem = step.items?.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStep.error) return;
                executableSteps.findIndex((step)=>{
                    currentStepItem = step.items?.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                if (currentStep.items?.every((item)=>item.txHash)) {
                    status = $ad5b3085b935ed8c$export$de7bcda3c490bf18.Finalizing;
                    if (cartData.current.items.length > 0) {
                        cartData.current.items = [];
                        cartData.current.pools = {};
                        cartData.current.totalPrice = 0;
                        cartData.current.currency = undefined;
                        cartData.current.chain = undefined;
                    }
                }
                if (steps.every((step)=>!step.items || step.items.length == 0 || step.items?.every((item)=>item.status === "complete"))) status = $ad5b3085b935ed8c$export$de7bcda3c490bf18.Complete;
                if (cartData.current.transaction?.status != status && (status === $ad5b3085b935ed8c$export$de7bcda3c490bf18.Finalizing || status === $ad5b3085b935ed8c$export$de7bcda3c490bf18.Complete)) {
                    cartData.current.items = [];
                    cartData.current.pools = {};
                    cartData.current.totalPrice = 0;
                    cartData.current.currency = undefined;
                    cartData.current.chain = undefined;
                }
                if (cartData.current.transaction) {
                    cartData.current.transaction.status = status;
                    cartData.current.transaction.currentStep = currentStep;
                    if (currentStepItem) {
                        cartData.current.transaction.txHash = currentStepItem?.txHash;
                        cartData.current.transaction.steps = steps;
                        cartData.current.transaction.path = path;
                    }
                }
                commit();
            }
        }).catch((e)=>{
            if (transactionId != cartData.current.pendingTransactionId) return;
            let error = e;
            let errorType = $ad5b3085b935ed8c$export$6adf53dcf2d42374.Unknown;
            const errorStatus = error?.statusCode;
            if (error?.message && error?.message.includes("ETH balance")) errorType = $ad5b3085b935ed8c$export$6adf53dcf2d42374.InsufficientBalance;
            else if (error?.code && error?.code == 4001) errorType = $ad5b3085b935ed8c$export$6adf53dcf2d42374.UserDenied;
            else {
                let message = "Oops, something went wrong. Please try again.";
                if (errorStatus >= 400 && errorStatus < 500) message = error.message;
                if (error?.type && error?.type === "price mismatch") {
                    errorType = $ad5b3085b935ed8c$export$6adf53dcf2d42374.PiceMismatch;
                    message = error.message;
                }
                //@ts-ignore: Should be fixed in an update to typescript
                error = new Error(message, {
                    cause: error
                });
            }
            if (cartData.current.transaction) {
                cartData.current.transaction.status = $ad5b3085b935ed8c$export$de7bcda3c490bf18.Idle;
                cartData.current.transaction.error = error;
                cartData.current.transaction.errorType = errorType;
                if (cartData.current.chain?.id == cartData.current.transaction.chain.id) {
                    const items = [
                        ...cartData.current.transaction.items
                    ];
                    const pools = calculatePools(items);
                    const currency = getCartCurrency(items, cartData.current.transaction.chain.id);
                    const { totalPrice: totalPrice , feeOnTop: feeOnTop  } = calculatePricing(items, currency, cartData.current.feesOnTopBps);
                    cartData.current.items = items;
                    cartData.current.pools = pools;
                    cartData.current.currency = currency;
                    cartData.current.totalPrice = totalPrice;
                    cartData.current.feeOnTop = feeOnTop;
                    cartData.current.chain = cartData.current.transaction.chain;
                }
                commit();
                validate();
            }
        });
    }, [
        client,
        switchNetworkAsync
    ]);
    return {
        get: get,
        set: set,
        subscribe: subscribe,
        setQuantity: setQuantity,
        add: add,
        remove: remove,
        clear: clear,
        clearTransaction: clearTransaction,
        validate: validate,
        checkout: checkout
    };
}
const $ad5b3085b935ed8c$export$5558332cef65f159 = /*#__PURE__*/ (0, $TBcmg$createContext)(null);
const $ad5b3085b935ed8c$export$9081b9c87ee4e12e = function({ children: children , feesOnTopBps: feesOnTopBps , persist: persist  }) {
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($ad5b3085b935ed8c$export$5558332cef65f159.Provider, {
        value: $ad5b3085b935ed8c$var$cartStore({
            feesOnTopBps: feesOnTopBps,
            persist: persist
        })
    }, children);
};



function $95b0bed557a4469f$export$2e2bcd8739ae039(selector) {
    const cart = (0, $TBcmg$useContext)((0, $ad5b3085b935ed8c$export$5558332cef65f159));
    if (!cart) throw new Error("Cart not found");
    const data = (0, $TBcmg$useSyncExternalStore)(cart.subscribe, ()=>selector(cart.get()), ()=>selector(cart.get()));
    const { clear: clear , remove: remove , add: add , validate: validate , checkout: checkout , clearTransaction: clearTransaction , setQuantity: setQuantity  } = cart;
    return {
        data: data,
        clear: clear,
        clearTransaction: clearTransaction,
        setQuantity: setQuantity,
        remove: remove,
        add: add,
        validate: validate,
        checkout: checkout,
        set: cart.set
    };
}




const $b5d8dec284676ed1$var$createBaseUrl = (config)=>{
    if (config?.proxy) return `${config.proxy}?`;
    if (config?.apiKey) return `https://pro-api.coingecko.com/api/v3/coins/markets?x_cg_pro_api_key={${config.apiKey}}&`;
    return "https://api.coingecko.com/api/v3/coins/markets?";
};
function $b5d8dec284676ed1$export$2e2bcd8739ae039(vs_currency, symbols = "eth", id = "") {
    const providerOptionsContext = (0, $TBcmg$useContext)((0, $f4609ce2cb6b416b$export$f66a1c3c9465af21));
    const baseUrl = $b5d8dec284676ed1$var$createBaseUrl(providerOptionsContext?.coinGecko);
    if (symbols.includes(",")) id = symbols.split(",").map((id)=>providerOptionsContext.coinGecko?.coinIds?.[id]).join(",");
    else id = id ? id : providerOptionsContext.coinGecko?.coinIds?.[symbols] || "";
    const { data: data  } = (0, $TBcmg$swr)(vs_currency ? `${baseUrl}vs_currency=${vs_currency}&symbols=${symbols}&ids=${id}` : null, null, {
        refreshInterval: 300000
    });
    if (data && data.length > 0) return data.map((conversion)=>({
            price: conversion.current_price,
            symbol: (conversion.symbol || "").toUpperCase(),
            coinGeckoId: conversion.id
        }));
    return [];
}



function $3ec5bd98aa11a4af$export$2e2bcd8739ae039(options, swrOptions = {}, chainId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    const response = (0, $5e2a1f52f4fac2ad$export$2e2bcd8739ae039)((pageIndex, previousPageData)=>{
        if (!options || !options.collection && !options.collectionsSetId && !options.community) return null;
        const url = new URL(`${chain?.baseApiUrl}/collections/activity/v6`);
        let query = {
            ...options
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        (0, $TBcmg$setParams)(url, query);
        return [
            url.href,
            chain?.apiKey,
            client?.version
        ];
    }, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    const activities = response.data?.flatMap((page)=>page.activities || []) ?? [];
    return {
        ...response,
        data: activities
    };
}



function $afd6276a623787c2$export$2e2bcd8739ae039(options, swrOptions = {}, chainId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    const response = (0, $5e2a1f52f4fac2ad$export$2e2bcd8739ae039)((pageIndex, previousPageData)=>{
        if (!options) return null;
        const url = new URL(`${chain?.baseApiUrl}/collections/v5`);
        let query = {
            ...options
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        if (query.normalizeRoyalties === undefined && client?.normalizeRoyalties !== undefined) query.normalizeRoyalties = client.normalizeRoyalties;
        (0, $TBcmg$setParams)(url, query);
        return [
            url.href,
            chain?.apiKey,
            client?.version
        ];
    }, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    const collections = response.data?.flatMap((page)=>page?.collections || []) ?? [];
    return {
        ...response,
        data: collections
    };
}





function $074b4666df4341a7$export$2e2bcd8739ae039(options, swrOptions = {}, chainId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    const response = (0, $5e2a1f52f4fac2ad$export$2e2bcd8739ae039)((pageIndex, previousPageData)=>{
        if (!options) return null;
        const url = new URL(`${chain?.baseApiUrl}/tokens/v6`);
        let query = {
            ...options
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        if (query.normalizeRoyalties === undefined && client?.normalizeRoyalties !== undefined) query.normalizeRoyalties = client.normalizeRoyalties;
        (0, $TBcmg$setParams)(url, query);
        return [
            url.href,
            chain?.apiKey,
            client?.version
        ];
    }, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    const tokens = (0, $TBcmg$useMemo)(()=>response.data?.flatMap((page)=>page.tokens || []) ?? [], [
        response.data
    ]);
    return {
        ...response,
        data: tokens
    };
}


function $7eca4ecf85dae226$export$2e2bcd8739ae039(options = {}, swrOptions = {}, chainId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const tokensResponse = (0, $074b4666df4341a7$export$2e2bcd8739ae039)({
        includeDynamicPricing: true,
        ...options
    }, swrOptions, chainId);
    const { data: cartItems , ...cartActions } = (0, $95b0bed557a4469f$export$2e2bcd8739ae039)((cart)=>cart.items);
    const { data: cartPools  } = (0, $95b0bed557a4469f$export$2e2bcd8739ae039)((cart)=>cart.pools);
    const { data: cartChain  } = (0, $95b0bed557a4469f$export$2e2bcd8739ae039)((cart)=>cart.chain);
    const cartRequiresReordering = (0, $TBcmg$useMemo)(()=>Object.values(cartPools).some((pool)=>pool.itemCount > 0), [
        cartPools
    ]);
    const itemsMap = (0, $TBcmg$useMemo)(()=>{
        return cartItems.reduce((itemMap, item)=>{
            itemMap[`${item.collection.id}:${item.token.id}`] = item;
            return itemMap;
        }, {});
    }, [
        cartItems
    ]);
    let dynamicTokens;
    if (cartChain && (chainId === cartChain?.id || chainId === undefined && client?.currentChain()?.id === cartChain?.id)) {
        dynamicTokens = tokensResponse.data.map((tokenData)=>{
            const id = `${tokenData?.token?.collection?.id}:${tokenData?.token?.tokenId}`;
            const cartItem = itemsMap[id];
            const dynamicTokenData = {
                ...tokenData,
                isInCart: cartItem !== undefined
            };
            const floorAsk = tokenData?.market?.floorAsk;
            const isInPool = floorAsk?.dynamicPricing?.kind === "pool";
            const poolId = isInPool ? floorAsk?.dynamicPricing?.data?.pool : undefined;
            const poolPrices = isInPool ? floorAsk?.dynamicPricing?.data?.prices : undefined;
            if (cartItem) {
                if (dynamicTokenData.market?.floorAsk && cartItem.poolId && cartItem.price && cartItem.price.amount?.decimal != dynamicTokenData.market?.floorAsk?.price) dynamicTokenData.market.floorAsk.price = cartItem.price;
            } else if (isInPool && poolId && poolPrices && floorAsk && dynamicTokenData.market?.floorAsk) {
                const nextPoolCartIndex = cartPools[poolId] ? cartPools[poolId].itemCount : 0;
                if (nextPoolCartIndex >= poolPrices.length) dynamicTokenData.market.floorAsk.price = undefined;
                else if (poolPrices && poolPrices[nextPoolCartIndex]) dynamicTokenData.market.floorAsk.price = poolPrices[nextPoolCartIndex];
            }
            return dynamicTokenData;
        });
        if (cartRequiresReordering && (!options || !options.sortBy || options.sortBy === "floorAskPrice")) dynamicTokens.sort((a, b)=>{
            const aPrice = a.market?.floorAsk?.price?.amount?.decimal;
            const bPrice = b.market?.floorAsk?.price?.amount?.decimal;
            if (aPrice === undefined) return 1;
            else if (bPrice === undefined) return -1;
            else if (!options || !options.sortDirection || options.sortDirection === "asc") return aPrice - bPrice;
            else return bPrice - aPrice;
        });
    } else dynamicTokens = tokensResponse.data.map((tokenData)=>{
        const floorAsk = tokenData?.market?.floorAsk;
        const isInPool = floorAsk?.dynamicPricing?.kind === "pool";
        const poolPrices = isInPool ? floorAsk?.dynamicPricing?.data?.prices : undefined;
        if (tokenData.market?.floorAsk && poolPrices && poolPrices[0]) tokenData.market.floorAsk.price = poolPrices[0];
        return tokenData;
    });
    return {
        ...tokensResponse,
        data: dynamicTokens,
        ...cartActions
    };
}




function $b9d7d4ec194b807a$export$2e2bcd8739ae039(options, swrOptions = {}, enabled = true, chainId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    const response = (0, $5e2a1f52f4fac2ad$export$2e2bcd8739ae039)((pageIndex, previousPageData)=>{
        if (!enabled) return null;
        const url = new URL(`${chain?.baseApiUrl || ""}/orders/asks/v4`);
        let query = options || {};
        if (query.normalizeRoyalties === undefined && client?.normalizeRoyalties !== undefined) query.normalizeRoyalties = client.normalizeRoyalties;
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        (0, $TBcmg$setParams)(url, query);
        return [
            url.href,
            chain?.apiKey,
            client?.version
        ];
    }, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    const listings = response.data?.flatMap((page)=>page.orders || []) ?? [];
    return {
        ...response,
        data: listings
    };
}



function $6b5464cef6d36d49$export$2e2bcd8739ae039(query, swrOptions, chainId) {
    const { address: address  } = (0, $TBcmg$useAccount)();
    let queryOptions = {
        maker: address
    };
    if (query) queryOptions = {
        ...queryOptions,
        ...query
    };
    return (0, $b9d7d4ec194b807a$export$2e2bcd8739ae039)(queryOptions, swrOptions, address !== undefined, chainId);
}



function $1161fbe6cb10f8e1$export$2e2bcd8739ae039(options, swrOptions = {}, chaindId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chaindId !== undefined ? client?.chains.find((chain)=>chain.id === chaindId) : client?.currentChain();
    const response = (0, $5e2a1f52f4fac2ad$export$2e2bcd8739ae039)((pageIndex, previousPageData)=>{
        if (!options) return null;
        const url = new URL(`${chain?.baseApiUrl}/search/activities/v1`);
        let query = {
            ...options
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        (0, $TBcmg$setParams)(url, query);
        return [
            url.href,
            chain?.apiKey,
            client?.version
        ];
    }, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    const activities = response.data?.flatMap((page)=>page.activities || []) ?? [];
    return {
        ...response,
        data: activities
    };
}



function $a6a22af2ea7cc64d$export$2e2bcd8739ae039(token, options, swrOptions = {}, chainId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    const response = (0, $5e2a1f52f4fac2ad$export$2e2bcd8739ae039)((pageIndex, previousPageData)=>{
        if (!token) return null;
        const url = new URL(`${chain?.baseApiUrl}/tokens/${token}/activity/v5`);
        let query = {
            ...options
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        (0, $TBcmg$setParams)(url, query);
        return [
            url.href,
            chain?.apiKey,
            client?.version
        ];
    }, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    const activities = response.data?.flatMap((page)=>page.activities || []) ?? [];
    return {
        ...response,
        data: activities
    };
}



function $f03c3cbef8c597c8$export$2e2bcd8739ae039(user, options, swrOptions = {}, chainId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    let defaultLimit = 20;
    const response = (0, $5e2a1f52f4fac2ad$export$2e2bcd8739ae039)((pageIndex, previousPageData)=>{
        if (!user) return null;
        const url = new URL(`${chain?.baseApiUrl || ""}/users/${user}/collections/v3`);
        let query = {
            offset: pageIndex * (options?.limit || defaultLimit),
            limit: options?.limit || defaultLimit,
            ...options
        };
        if (previousPageData?.collections && previousPageData?.collections?.length === 0) return null;
        (0, $TBcmg$setParams)(url, query);
        return [
            url.href,
            chain?.apiKey,
            client?.version
        ];
    }, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    }, options?.limit || defaultLimit);
    const collections = response.data?.flatMap((page)=>page.collections || []) ?? [];
    return {
        ...response,
        data: collections
    };
}



function $df89d2f0bf3a2e94$export$2e2bcd8739ae039(users, options, swrOptions = {}, chainId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    const response = (0, $5e2a1f52f4fac2ad$export$2e2bcd8739ae039)((pageIndex, previousPageData)=>{
        if (!users) return null;
        const url = new URL(`${chain?.baseApiUrl}/users/activity/v6`);
        let query = {
            ...options,
            users: users
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        (0, $TBcmg$setParams)(url, query);
        return [
            url.href,
            chain?.apiKey,
            client?.version
        ];
    }, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    const activities = response.data?.flatMap((page)=>page.activities || []) ?? [];
    return {
        ...response,
        data: activities
    };
}



function $adb61885b37a317b$export$2e2bcd8739ae039(user, options, swrOptions = {}, chainId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    const response = (0, $5e2a1f52f4fac2ad$export$2e2bcd8739ae039)((pageIndex, previousPageData)=>{
        if (!user) return null;
        const url = new URL(`${chain?.baseApiUrl}/users/${user}/tokens/v7`);
        let query = {
            ...options
        };
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        if (query.normalizeRoyalties === undefined && client?.normalizeRoyalties !== undefined) query.normalizeRoyalties = client.normalizeRoyalties;
        (0, $TBcmg$setParams)(url, query);
        return [
            url.href,
            chain?.apiKey,
            client?.version
        ];
    }, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    const tokens = response.data?.flatMap((page)=>page.tokens || []) ?? [];
    return {
        ...response,
        data: tokens
    };
}



function $9e5d58301bd315fe$export$2e2bcd8739ae039(user, options, swrOptions = {}, chainId) {
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    const response = (0, $5e2a1f52f4fac2ad$export$2e2bcd8739ae039)((pageIndex, previousPageData)=>{
        if (!user) return null;
        const url = new URL(`${chain?.baseApiUrl || ""}/orders/users/${user}/top-bids/v2`);
        let query = options || {};
        if (previousPageData && !previousPageData.continuation) return null;
        else if (previousPageData && pageIndex > 0) query.continuation = previousPageData.continuation;
        if (query.normalizeRoyalties === undefined && client?.normalizeRoyalties !== undefined) query.normalizeRoyalties = client.normalizeRoyalties;
        (0, $TBcmg$setParams)(url, query);
        return [
            url.href,
            chain?.apiKey,
            client?.version
        ];
    }, {
        revalidateOnMount: true,
        revalidateFirstPage: false,
        ...swrOptions
    });
    const bids = response.data?.flatMap((page)=>page.topBids || []) ?? [];
    return {
        ...response,
        data: bids
    };
}




function $e235ec7f4c2cf2ae$export$2e2bcd8739ae039(overrides) {
    let sharedTheme = (0, $7e16985c42c068dc$export$8e8f484d816a71e3)(overrides);
    return {
        colors: {
            ...(0, $TBcmg$indigo),
            ...(0, $TBcmg$indigoA),
            ...(0, $TBcmg$red),
            ...(0, $TBcmg$gray),
            ...(0, $TBcmg$blackA),
            ...(0, $TBcmg$whiteA),
            ...(0, $TBcmg$green),
            // accent colors
            accentBase: "$indigo1",
            accentBgSubtle: "$indigo2",
            accentBg: "$indigo3",
            accentBgHover: "$indigo4",
            accentBgActive: "$indigo5",
            accentLine: "$indigo6",
            accentBorder: "$indigo7",
            accentBorderHover: overrides?.primaryColor || "$indigo8",
            accentSolid: overrides?.primaryColor || "$indigo9",
            accentSolidHover: overrides?.primaryHoverColor || overrides?.primaryColor || "$indigo10",
            accentText: "$indigo11",
            accentTextContrast: "$indigo12",
            // neutral colors
            neutralBase: "$gray1",
            neutralBgSubtle: "white",
            neutralBg: "$gray3",
            neutralBgHover: "$gray2",
            neutralBgActive: "$gray5",
            neutralLine: "$gray6",
            neutralBorder: "$gray7",
            neutralBorderHover: "$gray8",
            neutralSolid: "$gray9",
            neutralSolidHover: "$gray10",
            neutralText: "$gray11",
            neutralTextContrast: "$gray12",
            // secondary colors
            secondaryBase: "$indigoA1",
            secondaryBgSubtle: "$indigoA2",
            secondaryBg: "$indigoA3",
            secondaryBgHover: "$indigoA4",
            secondaryBgActive: "$indigoA5",
            secondaryLine: "$indigoA6",
            secondaryBorder: "$indigoA7",
            secondaryBorderHover: "$indigoA8",
            secondarySolid: "$indigoA9",
            secondarySolidHover: "$indigoA10",
            secondaryText: "$indigoA11",
            secondaryTextContrast: "$indigoA12",
            // general colors
            borderColor: overrides?.borderColor || "$neutralBorder",
            textColor: overrides?.textColor || "$neutralTextContrast",
            focusColor: "$neutralTextContrast",
            errorText: "$red12",
            errorAccent: "$red10",
            successAccent: "$green10",
            // component colors
            reservoirLogoColor: "#11181C",
            buttonTextColor: overrides?.buttonTextColor || "white",
            buttonTextHoverColor: overrides?.buttonTextHoverColor || "white",
            inputBackground: "$neutralBgHover",
            overlayBackground: overrides?.overlayBackground || "$blackA10",
            headerBackground: overrides?.headerBackground || "$neutralBgHover",
            footerBackground: overrides?.footerBackground || "$neutralBgHover",
            contentBackground: overrides?.contentBackground || "$neutralBgSubtle",
            wellBackground: overrides?.wellBackground || "$gray3",
            popoverBackground: overrides?.popoverBackground || "$neutralBase"
        },
        assets: {
            ethIcon: overrides?.ethIcon || "gray"
        },
        ...sharedTheme
    };
}




const $b69d00be56c1bdb6$var$useFallbackState = (defaultValue, state)=>{
    const _state = (0, $TBcmg$useState)(defaultValue);
    if (state) return state;
    return _state;
};
var $b69d00be56c1bdb6$export$2e2bcd8739ae039 = $b69d00be56c1bdb6$var$useFallbackState;




const $a663831c1deeb453$export$ec39d0bf2d6d1efb = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("a", {
    backgroundColor: "transparent",
    cursor: "pointer",
    fontFamily: "$body",
    fontSize: 16,
    color: "inherit",
    textDecoration: "inherit",
    $$focusColor: "$colors$neutralTextContrast",
    "&:focus-visible": {
        color: "$neutralTextContrast",
        outline: "none",
        borderRadius: 4,
        boxShadow: "0 0 0 2px $$focusColor"
    },
    variants: {
        color: {
            primary: {
                color: "$accentText",
                "&:hover": {
                    color: "$accentSolidHover"
                }
            },
            gray: {
                color: "$neutralText",
                "&:hover": {
                    color: "$accentText"
                }
            },
            error: {
                color: "$errorAccent"
            }
        },
        weight: {
            heavy: {
                fontWeight: 700
            },
            medium: {
                fontWeight: 500
            }
        }
    },
    defaultVariants: {
        color: "gray",
        weight: "heavy"
    }
});
var $a663831c1deeb453$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $TBcmg$forwardRef)(({ children: children , ...props }, forwardedRef)=>/*#__PURE__*/ (0, $TBcmg$react).createElement($a663831c1deeb453$export$ec39d0bf2d6d1efb, {
        ref: forwardedRef,
        ...props,
        tabIndex: 0
    }, children));


var $0af15c1ef5e8ac4a$export$2e2bcd8739ae039 = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("div", {
    boxSizing: "border-box",
    borderStyle: "solid",
    borderWidth: 0
});


const $e6a4e3d86984e475$var$Button = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("button", {
    backgroundColor: "transparent",
    backgroundImage: "none",
    outline: "none",
    fontWeight: 700,
    fontSize: 16,
    fontFamily: "$button",
    transition: "background-color 250ms linear",
    gap: "$space$2",
    display: "inline-flex",
    justifyContent: "center",
    color: "$buttonTextColor",
    alignItems: "center",
    lineHeight: "20px",
    $$focusColor: "$colors$focusColor",
    cursor: "pointer",
    border: 0,
    borderWidth: 0,
    "&:focus-visible": {
        boxShadow: "0 0 0 2px $$focusColor"
    },
    "&:disabled": {
        backgroundColor: "$neutralBorder",
        color: "$neutralText",
        cursor: "default"
    },
    "&:disabled:hover": {
        backgroundColor: "$neutralBorderHover",
        color: "$neutralText",
        cursor: "default"
    },
    variants: {
        color: {
            primary: {
                backgroundColor: "$accentSolid",
                color: "$buttonTextColor",
                "&:hover": {
                    backgroundColor: "$accentSolidHover",
                    color: "$buttonTextHoverColor"
                }
            },
            secondary: {
                backgroundColor: "$neutralBgHover",
                color: "$textColor",
                "&:hover": {
                    backgroundColor: "$neutralBgActive"
                }
            },
            ghost: {
                backgroundColor: "transparent",
                p: 0
            }
        },
        corners: {
            rounded: {
                borderRadius: "$borderRadius"
            },
            pill: {
                borderRadius: 99999
            },
            circle: {
                borderRadius: "99999px",
                alignItems: "center",
                justifyContent: "center"
            }
        },
        size: {
            none: {},
            xs: {
                p: "$space$3",
                lineHeight: "16px",
                minHeight: 40
            },
            small: {
                px: "$space$3",
                py: "$space$4",
                lineHeight: "12px",
                minHeight: 44
            },
            medium: {
                px: "$space$5",
                py: "$space$3",
                minHeight: 44
            },
            large: {
                px: "$space$5",
                py: "$space$4",
                minHeight: 52
            }
        }
    },
    compoundVariants: [
        {
            size: "xs",
            corners: "circle",
            css: {
                height: 40,
                width: 40,
                p: 0
            }
        },
        {
            size: "small",
            corners: "circle",
            css: {
                height: 44,
                width: 44,
                p: 0
            }
        },
        {
            size: "medium",
            corners: "circle",
            css: {
                height: 44,
                width: 44,
                p: 0
            }
        },
        {
            size: "large",
            corners: "circle",
            css: {
                height: 52,
                width: 52,
                p: 0
            }
        }
    ],
    defaultVariants: {
        color: "primary",
        corners: "rounded",
        size: "medium"
    }
});
var $e6a4e3d86984e475$export$2e2bcd8739ae039 = $e6a4e3d86984e475$var$Button;



const $602940fa56061b3b$var$flexCss = {
    display: "flex",
    boxSizing: "border-box",
    borderStyle: "solid",
    borderWidth: 0,
    variants: {
        align: {
            start: {
                alignItems: "flex-start"
            },
            center: {
                alignItems: "center"
            },
            end: {
                alignItems: "flex-end"
            },
            stretch: {
                alignItems: "stretch"
            },
            baseline: {
                alignItems: "baseline"
            }
        },
        justify: {
            start: {
                justifyContent: "flex-start"
            },
            center: {
                justifyContent: "center"
            },
            end: {
                justifyContent: "flex-end"
            },
            between: {
                justifyContent: "space-between"
            }
        },
        direction: {
            row: {
                flexDirection: "row"
            },
            column: {
                flexDirection: "column"
            },
            rowReverse: {
                flexDirection: "row-reverse"
            },
            columnReverse: {
                flexDirection: "column-reverse"
            }
        },
        wrap: {
            noWrap: {
                flexWrap: "nowrap"
            },
            wrap: {
                flexWrap: "wrap"
            },
            wrapReverse: {
                flexWrap: "wrap-reverse"
            }
        }
    }
};
var $602940fa56061b3b$export$2e2bcd8739ae039 = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("div", $602940fa56061b3b$var$flexCss);
const $602940fa56061b3b$export$d31dc64e78f336f = (0, $4a58f4053e821189$export$3817b7a54a07cec7)((0, $TBcmg$motion).div, $602940fa56061b3b$var$flexCss);


const $6f54b4a5aad888ed$var$isSafariBrowser = ()=>typeof window !== "undefined" && navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1;
function $6f54b4a5aad888ed$export$a81f732198733497(num, fixed) {
    const re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
    const fixedNum = num.toString().match(re);
    return fixedNum ? fixedNum[0] : num;
}
function $6f54b4a5aad888ed$export$f5dd818bff069720(amount, maximumFractionDigits = 2) {
    const { format: format  } = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: maximumFractionDigits
    });
    if (!amount) return "-";
    return format(amount);
}
const $6f54b4a5aad888ed$var$truncateFractionAndFormat = (parts, digits)=>{
    return parts.map(({ type: type , value: value  })=>{
        if (type !== "fraction" || !value || value.length < digits) return value;
        let formattedValue = "";
        for(let idx = 0; idx < value.length && idx < digits; idx++)formattedValue += value[idx];
        return formattedValue;
    }).reduce((string, part)=>string + part);
};
/**
 *  Convert ETH values to human readable formats
 * @param amount An ETH amount
 * @param maximumFractionDigits Number of decimal digits
 * @returns returns the ETH value as a `string` or `-` if the amount is `null` or `undefined`
 */ function $6f54b4a5aad888ed$export$87710fd8420713d9(amount, maximumFractionDigits, decimals = 18) {
    if (typeof amount === "undefined" || amount === null) return "-";
    const amountToFormat = typeof amount === "number" ? amount : +(0, $TBcmg$formatUnits)(BigInt(amount), decimals || 18);
    const amountFraction = `${amount}`.split(".")[1];
    const isSafari = $6f54b4a5aad888ed$var$isSafariBrowser();
    const formatOptions = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 20,
        useGrouping: true,
        notation: "compact",
        compactDisplay: "short"
    };
    // New issue introduced in Safari v16 causes a regression and now need lessPrecision flagged in format options
    if (isSafari) //@ts-ignore
    formatOptions.roundingPriority = "lessPrecision";
    const parts = new Intl.NumberFormat("en-US", formatOptions).formatToParts(amountToFormat);
    // Safari has a few bugs with the fraction part of formatToParts, sometimes rounding when unnecessary and
    // when amount is in the thousands not properly representing the value in compact display. Until the bug is fixed
    // this workaround should help. bugzilla bug report: https://bugs.webkit.org/show_bug.cgi?id=249231
    // Update: this has been fixed, but still applied for >v15.3 and <v16
    if (isSafari) {
        const partTypes = parts.map((part)=>part.type);
        const partsIncludesFraction = partTypes.includes("fraction");
        const partsIncludeCompactIdentifier = partTypes.includes("compact");
        if (amountFraction) {
            if (!partsIncludesFraction && !partsIncludeCompactIdentifier) {
                const integerIndex = parts.findIndex((part)=>part.type === "integer");
                parts.splice(integerIndex + 1, 0, {
                    type: "decimal",
                    value: "."
                }, {
                    type: "fraction",
                    value: amountFraction
                });
            }
        } else if (!partsIncludesFraction && partsIncludeCompactIdentifier) {
            const compactIdentifier = parts.find((part)=>part.type === "compact");
            const integerIndex = parts.findIndex((part)=>part.type === "integer");
            const integer = parts[integerIndex];
            if (compactIdentifier?.value === "K" && integer) {
                const fraction = `${amount}`.replace(integer.value, "")[0];
                if (fraction && Number(fraction) > 0) parts.splice(integerIndex + 1, 0, {
                    type: "decimal",
                    value: "."
                }, {
                    type: "fraction",
                    value: fraction
                });
            }
        }
    }
    if (parts && parts.length > 0) {
        const lowestValue = Number(`0.${new Array(maximumFractionDigits).join("0")}1`);
        if (amountToFormat > 1000) return $6f54b4a5aad888ed$var$truncateFractionAndFormat(parts, 1);
        else if (amountToFormat < 1 && amountToFormat < lowestValue && amountToFormat !== 0) return `< ${lowestValue}`;
        else return $6f54b4a5aad888ed$var$truncateFractionAndFormat(parts, maximumFractionDigits);
    } else return typeof amount === "string" || typeof amount === "number" ? `${amount}` : "";
}




var $38b6348718e47dcf$export$2e2bcd8739ae039 = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("span", {
    color: "$textColor",
    fontFamily: "$body",
    letterSpacing: 0,
    margin: 0,
    variants: {
        color: {
            base: {
                color: "$textColor"
            },
            subtle: {
                color: "$neutralText"
            },
            error: {
                color: "$errorAccent"
            },
            errorLight: {
                color: "$errorText"
            },
            accent: {
                color: "$accentText"
            },
            success: {
                color: "$successAccent"
            },
            button: {
                color: "$buttonTextColor"
            }
        },
        style: {
            h2: {
                fontWeight: 700,
                fontSize: 48,
                fontFamily: "$headline"
            },
            h3: {
                fontWeight: 700,
                fontSize: 32,
                fontFamily: "$headline"
            },
            h4: {
                fontWeight: 700,
                fontSize: 24,
                fontFamily: "$headline"
            },
            h5: {
                fontWeight: 700,
                fontSize: 20,
                fontFamily: "$headline"
            },
            h6: {
                fontWeight: 700,
                fontSize: 16,
                fontFamily: "$headline"
            },
            subtitle1: {
                fontWeight: 500,
                fontSize: 16
            },
            subtitle2: {
                fontWeight: 500,
                fontSize: 12
            },
            body1: {
                fontWeight: 400,
                fontSize: 16
            },
            body2: {
                fontWeight: 400,
                fontSize: 14
            },
            body3: {
                fontWeight: 400,
                fontSize: 12
            },
            tiny: {
                fontWeight: 500,
                fontSize: 10,
                color: "$neutralSolidHover"
            }
        },
        italic: {
            true: {
                fontStyle: "italic"
            }
        },
        ellipsify: {
            true: {
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
            }
        }
    },
    compoundVariants: [
        {
            style: "tiny",
            color: "base",
            css: {
                color: "$textColor"
            }
        }
    ],
    defaultVariants: {
        style: "body1",
        color: "base"
    }
});


const $916b743aad99c93e$var$FormatCrypto = ({ amount: amount , maximumFractionDigits: maximumFractionDigits = 4 , decimals: decimals = 18 , css: css , textStyle: textStyle = "subtitle2" , textColor: textColor = "base" , children: children  })=>{
    const value = (0, $6f54b4a5aad888ed$export$87710fd8420713d9)(amount, maximumFractionDigits, decimals);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center",
        css: {
            gap: "$1"
        }
    }, value !== "-" ? children : null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: textStyle,
        color: textColor,
        css: css,
        as: "p"
    }, value));
};
var $916b743aad99c93e$export$2e2bcd8739ae039 = $916b743aad99c93e$var$FormatCrypto;






var $72916f97ef55a375$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $TBcmg$react).createElement("svg", {
        width: "auto",
        height: "100%",
        viewBox: "5 0 15 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M11.9441 17.97L4.58008 13.62L11.9431 24L19.3131 13.62L11.9411 17.97H11.9441V17.97ZM12.0561 0L4.69008 12.223L12.0551 16.577L19.4201 12.227L12.0561 0Z",
        fill: "black"
    }));



var $dc8d2782b4d6e176$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $TBcmg$react).createElement("svg", {
        width: "auto",
        height: "100%",
        viewBox: "5 0 15 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement("g", {
        clipPath: "url(#clip0_2127_56739)"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M11.9979 0L11.8369 0.546928V16.4161L11.9979 16.5767L19.3641 12.2225L11.9979 0Z",
        fill: "#343434"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M11.9979 0L4.63159 12.2225L11.9979 16.5767V8.87428V0Z",
        fill: "#8C8C8C"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M11.998 17.9714L11.9072 18.0821V23.7349L11.998 23.9999L19.3686 13.6195L11.998 17.9714Z",
        fill: "#3C3C3B"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M11.9979 23.9999V17.9714L4.63159 13.6195L11.9979 23.9999Z",
        fill: "#8C8C8C"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M11.998 16.5767L19.3642 12.2225L11.998 8.87427V16.5767Z",
        fill: "#141414"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M4.63159 12.2225L11.9979 16.5767V8.87427L4.63159 12.2225Z",
        fill: "#393939"
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement("defs", null, /*#__PURE__*/ (0, $TBcmg$react).createElement("clipPath", {
        id: "clip0_2127_56739"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement("rect", {
        width: "24",
        height: "24",
        fill: "white"
    }))));



var $b2cf897cad2fb98b$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $TBcmg$react).createElement("svg", {
        width: "auto",
        height: "100%",
        viewBox: "5 0 15 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M12.3654 8.87477V0L5 12.2224L12.3654 8.87477Z",
        fill: "#8A92B2"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M12.3654 16.5772V8.87477L5 12.2224L12.3654 16.5772ZM12.3654 8.87477L19.7322 12.2224L12.3654 0V8.87477Z",
        fill: "#62688F"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M12.3655 8.87476V16.5772L19.7322 12.2224L12.3655 8.87476Z",
        fill: "#454A75"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M12.3654 17.972L5 13.6199L12.3654 23.9999V17.972Z",
        fill: "#8A92B2"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M19.7363 13.6199L12.3655 17.972V23.9999L19.7363 13.6199Z",
        fill: "#62688F"
    }));


const $01f02cf0ad39d100$var$EthLogo = ()=>{
    const themeContext = (0, $TBcmg$useContext)((0, $f4609ce2cb6b416b$export$2c657da244d00bd6));
    const ethIcon = themeContext && themeContext ? themeContext["assets"]["ethIcon"]["value"] : "glyph";
    switch(ethIcon){
        case "glyph":
            return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $72916f97ef55a375$export$2e2bcd8739ae039), null);
        case "gray":
            return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $dc8d2782b4d6e176$export$2e2bcd8739ae039), null);
        case "purple":
            return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b2cf897cad2fb98b$export$2e2bcd8739ae039), null);
    }
};
var $01f02cf0ad39d100$export$2e2bcd8739ae039 = $01f02cf0ad39d100$var$EthLogo;







const $539986c326843873$var$wrappedContracts = {
    1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    5: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    10: "0x4200000000000000000000000000000000000006",
    56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    137: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    42161: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    999: "0x8a5027ea12f45a13deb6CB96A07913c6e192BE84",
    80001: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
    84531: "0x4200000000000000000000000000000000000006",
    534353: "0xa1EA0B2354F5A344110af2b6AD68e75545009a03",
    7777777: "0x4200000000000000000000000000000000000006",
    11155111: "0x7b79995e5f793a07bc00c21412e50ecae098e7f9"
};
var $539986c326843873$export$2e2bcd8739ae039 = $539986c326843873$var$wrappedContracts;



var $5db90028f86e062a$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ (0, $TBcmg$react).createElement("svg", {
        width: "auto",
        height: "100%",
        viewBox: "0 0 15 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M7.49721 0L0 12.4432L7.49721 9.03511V0Z",
        fill: "#AE1955"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M7.49721 9.03506L0 12.4432L7.49721 16.8767V9.03506Z",
        fill: "#801D45"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M14.9959 12.4433L7.49731 0V9.03511L14.9959 12.4433Z",
        fill: "#801D45"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M7.49731 16.8767L14.9959 12.4432L11.2466 10.7391L7.49731 9.03506V16.8767Z",
        fill: "#641D3B"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M0 13.8661L7.49721 24.4337V18.2968L0 13.8661Z",
        fill: "#AE1955"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M7.49731 18.2968V24.4337L15.0001 13.8661L7.49731 18.2968Z",
        fill: "#801D45"
    }));


const $facfb14f3ab47807$var$StyledImg = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("img", {});
const $facfb14f3ab47807$var$CryptoCurrencyIcon = ({ address: address = (0, $TBcmg$zeroAddress) , chainId: chainId , css: css  })=>{
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chainCurrency = (0, $57dcd81a309fc6e2$export$2e2bcd8739ae039)(chainId);
    const chain = client?.chains.find((chain)=>chain.id === chainCurrency.chainId);
    if (chainCurrency.symbol === "ETH") {
        if ((0, $TBcmg$zeroAddress) === address) return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                display: "flex",
                ...css
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $01f02cf0ad39d100$export$2e2bcd8739ae039), null));
        if ((0, $539986c326843873$export$2e2bcd8739ae039)[chainCurrency.chainId] === address) return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                display: "flex",
                ...css
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $5db90028f86e062a$export$2e2bcd8739ae039), null));
    }
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($facfb14f3ab47807$var$StyledImg, {
        src: `${chain?.baseApiUrl}/redirect/currency/${address}/icon/v1`,
        css: css
    });
};
var $facfb14f3ab47807$export$2e2bcd8739ae039 = $facfb14f3ab47807$var$CryptoCurrencyIcon;









const $656b4c95fe3d553c$export$c27ee0ad710f7559 = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Arrow, {
    fill: "$neutralBgHover"
});
const $656b4c95fe3d553c$var$PopoverArrow = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Arrow1, {
    fill: "$neutralBgHover"
});
const $656b4c95fe3d553c$var$Tooltip = ({ children: children , content: content , open: open , defaultOpen: defaultOpen , onOpenChange: onOpenChange , delayDuration: delayDuration = 0 , ...props })=>{
    const isSmallDevice = (0, $TBcmg$useMediaQuery)("only screen and (max-width : 768px)");
    if (isSmallDevice) return /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Root1, {
        open: open,
        defaultOpen: defaultOpen,
        onOpenChange: onOpenChange
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Trigger1, {
        style: {
            backgroundColor: "transparent",
            borderWidth: 0,
            padding: 0,
            display: "flex"
        }
    }, children), /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Content1, {
        sideOffset: 2,
        side: "bottom",
        align: "center",
        style: {
            zIndex: 100,
            outline: "none"
        },
        ...props
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($656b4c95fe3d553c$var$PopoverArrow, null), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            zIndex: 9999,
            $$shadowColor: "$colors$gray7",
            boxShadow: "0px 1px 5px rgba(0,0,0,0.2)",
            borderRadius: 8,
            overflow: "hidden"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            background: "$neutralBgHover",
            p: "$2"
        }
    }, content))));
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Root, {
        open: open,
        defaultOpen: defaultOpen,
        onOpenChange: onOpenChange,
        delayDuration: delayDuration
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Trigger, {
        style: {
            backgroundColor: "transparent",
            borderWidth: 0,
            padding: 0,
            display: "flex"
        }
    }, children), /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Content, {
        sideOffset: 2,
        side: "bottom",
        align: "center",
        style: {
            zIndex: 100
        },
        ...props
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($656b4c95fe3d553c$export$c27ee0ad710f7559, null), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            zIndex: 9999,
            $$shadowColor: "$colors$gray7",
            boxShadow: "0px 1px 5px rgba(0,0,0,0.2)",
            borderRadius: 8,
            overflow: "hidden"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            background: "$neutralBgHover",
            p: "$2"
        }
    }, content))));
};
var $656b4c95fe3d553c$export$2e2bcd8739ae039 = $656b4c95fe3d553c$var$Tooltip;




const $bedde9b021cf9a1c$var$FormatCryptoCurrency = ({ amount: amount , address: address = (0, $TBcmg$zeroAddress) , maximumFractionDigits: maximumFractionDigits , logoWidth: logoWidth = 14 , textStyle: textStyle , css: css , textColor: textColor , decimals: decimals , chainId: chainId , symbol: symbol  })=>{
    const { chain: activeChain  } = (0, $TBcmg$useNetwork)();
    const blockExplorerBaseUrl = activeChain?.blockExplorers?.default?.url || "https://etherscan.io";
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $916b743aad99c93e$export$2e2bcd8739ae039), {
        css: css,
        textColor: textColor,
        textStyle: textStyle,
        amount: amount,
        maximumFractionDigits: maximumFractionDigits,
        decimals: decimals
    }, symbol ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $656b4c95fe3d553c$export$2e2bcd8739ae039), {
        side: "top",
        content: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
            href: `${blockExplorerBaseUrl}/address/${address}`,
            target: "_blank",
            weight: "medium",
            css: {
                fontSize: 14
            },
            onClick: (event)=>event.stopPropagation()
        }, symbol)
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $facfb14f3ab47807$export$2e2bcd8739ae039), {
        css: {
            height: logoWidth
        },
        address: address,
        chainId: chainId
    })) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $facfb14f3ab47807$export$2e2bcd8739ae039), {
        css: {
            height: logoWidth
        },
        address: address,
        chainId: chainId
    }));
};
var $bedde9b021cf9a1c$export$2e2bcd8739ae039 = $bedde9b021cf9a1c$var$FormatCryptoCurrency;



const $fafed10a0d83e98f$var$FormatCurrency = ({ amount: amount , maximumFractionDigits: maximumFractionDigits = 2 , currency: currency = "USD" , ...props })=>{
    const [formattedValue, setFormattedValue] = (0, $TBcmg$useState)("");
    (0, $TBcmg$useEffect)(()=>{
        if (amount) {
            const lowestValue = Number(`0.${new Array(maximumFractionDigits).join("0")}1`);
            const tooLow = +amount < lowestValue;
            const formatted = new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: currency
            }).format(tooLow ? lowestValue : +amount);
            setFormattedValue(tooLow ? `< ${formatted}` : formatted);
        } else setFormattedValue("");
    }, [
        amount,
        maximumFractionDigits
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        ...props,
        style: props.style || "subtitle2",
        color: props.color || "base"
    }, formattedValue);
};
var $fafed10a0d83e98f$export$2e2bcd8739ae039 = $fafed10a0d83e98f$var$FormatCurrency;






const $bbced143042e1aed$var$LoaderContainer = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "$neutralText"
});
function $bbced143042e1aed$export$2e2bcd8739ae039(props) {
    const { icon: icon , ...containerProps } = props;
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($bbced143042e1aed$var$LoaderContainer, {
        ...containerProps
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$motion).div, {
        initial: {
            rotate: 0
        },
        transition: {
            repeat: Infinity,
            duration: 1,
            ease: "linear"
        },
        animate: {
            rotate: 360
        }
    }, icon ? icon : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faSpinner),
        width: 20,
        height: 20
    })));
}







const $e92d8c2581b5f9df$var$Progress = ({ title: title , txHash: txHash , blockExplorerBaseUrl: blockExplorerBaseUrl  })=>{
    const { chain: activeChain  } = (0, $TBcmg$useNetwork)();
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        css: {
            alignItems: "center",
            gap: "$4",
            mt: "$5",
            mb: "$3"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6"
    }, title), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            color: "$neutralText"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: txHash ? (0, $TBcmg$faCube) : (0, $TBcmg$faWallet),
        style: {
            width: "32px",
            height: "32px",
            marginTop: "12px 0px"
        }
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
        color: "primary",
        weight: "medium",
        css: {
            fontSize: 12,
            visibility: txHash ? "visible" : "hidden"
        },
        href: blockExplorerBaseUrl,
        target: "_blank"
    }, "View on ", activeChain?.blockExplorers?.default.name || "Etherscan"));
};
var $e92d8c2581b5f9df$export$2e2bcd8739ae039 = $e92d8c2581b5f9df$var$Progress;














const $768c94381da6e8b2$var$useMediaQuery = (query)=>{
    const [matches, setMatches] = (0, $TBcmg$useState)(false);
    (0, $TBcmg$useEffect)(()=>{
        const media = window.matchMedia(query);
        if (media.matches !== matches) setMatches(media.matches);
        const listener = ()=>{
            setMatches(media.matches);
        };
        media.addEventListener("change", listener);
        return ()=>media.removeEventListener("change", listener);
    }, [
        matches,
        query
    ]);
    return matches;
};
var $768c94381da6e8b2$export$2e2bcd8739ae039 = $768c94381da6e8b2$var$useMediaQuery;


const $2fec296c1c0f429e$export$c6fdb837b070b4ff = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Overlay, {
    backgroundColor: "$overlayBackground",
    position: "fixed",
    inset: 0,
    zIndex: 1000
});
const $2fec296c1c0f429e$export$a14718312a4275d3 = /*#__PURE__*/ (0, $TBcmg$forwardRef)(({ ...props }, forwardedRef)=>/*#__PURE__*/ (0, $TBcmg$react).createElement($2fec296c1c0f429e$export$c6fdb837b070b4ff, {
        ...props,
        forceMount: true,
        asChild: true
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$motion).div, {
        ref: forwardedRef,
        transition: {
            duration: 0.5
        },
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    })));
const $2fec296c1c0f429e$export$7c6e2c02157bb7d2 = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Content2, {
    backgroundColor: "$contentBackground",
    borderRadius: "$borderRadius",
    $$shadowColor: "$colors$gray7",
    boxShadow: "box-shadow: 0px 2px 16px $$shadowColor",
    border: "1px solid $borderColor",
    position: "fixed",
    left: "50%",
    maxWidth: 516,
    top: "100%",
    width: "100%",
    zIndex: 1000,
    "&:focus": {
        outline: "none"
    },
    "@media(max-width: 520px)": {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        border: 0
    }
});
const $2fec296c1c0f429e$export$43a7eb3180015c73 = /*#__PURE__*/ (0, $TBcmg$forwardRef)(({ children: children , ...props }, forwardedRef)=>{
    const isMobile = (0, $768c94381da6e8b2$export$2e2bcd8739ae039)("(max-width: 520px)");
    const animation = isMobile ? {
        initial: {
            opacity: 0,
            bottom: "-100%",
            top: "auto",
            left: 0
        },
        animate: {
            opacity: 1,
            bottom: 0,
            top: "auto",
            left: 0
        },
        exit: {
            opacity: 0,
            bottom: "-100%",
            top: "auto",
            left: 0
        }
    } : {
        initial: {
            opacity: 0,
            top: "14%",
            transform: "translateX(-50%)"
        },
        animate: {
            opacity: 1,
            top: "9%",
            transform: "translateX(-50%)"
        },
        exit: {
            opacity: 0,
            top: "14%",
            transform: "translateX(-50%)"
        }
    };
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($2fec296c1c0f429e$export$7c6e2c02157bb7d2, {
        forceMount: true,
        asChild: true,
        ...props
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$motion).div, {
        key: isMobile + "modal",
        ref: forwardedRef,
        transition: {
            type: isMobile ? "tween" : "spring",
            duration: 0.5
        },
        ...animation
    }, children));
});
const $2fec296c1c0f429e$export$c8d6a95fc1e37f93 = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($2fec296c1c0f429e$export$43a7eb3180015c73, {});
const $2fec296c1c0f429e$export$3ddf2d174ce01153 = /*#__PURE__*/ (0, $TBcmg$forwardRef)(({ children: children , trigger: trigger , portalProps: portalProps , onOpenChange: onOpenChange , open: open , size: size , ...props }, forwardedRef)=>{
    const [dialogOpen, setDialogOpen] = (0, $TBcmg$useState)(false);
    (0, $TBcmg$useEffect)(()=>{
        if (open !== undefined && open !== dialogOpen) {
            setDialogOpen(open);
            if (onOpenChange) onOpenChange(open);
        }
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Root2, {
        onOpenChange: (open)=>{
            setDialogOpen(open);
            if (onOpenChange) onOpenChange(open);
        },
        open: dialogOpen
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$DialogTrigger, {
        asChild: true
    }, trigger), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$AnimatePresence), null, dialogOpen && /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$DialogPortal, {
        forceMount: true,
        ...portalProps
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($2fec296c1c0f429e$export$a14718312a4275d3, null), /*#__PURE__*/ (0, $TBcmg$react).createElement($2fec296c1c0f429e$export$c8d6a95fc1e37f93, {
        ref: forwardedRef,
        ...props,
        forceMount: true,
        css: {
            maxWidth: size === (0, $32d03e1adcee2721$export$e8598848ef5f29c0).MD ? 516 : 750
        }
    }, children))));
});




const $d20859f9b2cb3548$var$ReservoirText = (props)=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement("svg", {
        width: "50",
        height: "10",
        viewBox: "0 0 50 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M0.104492 8.99985V2.75985C0.608492 2.72385 1.11249 2.72385 1.62849 2.75985L1.73649 3.77985H1.80849C2.00049 2.97585 2.78049 2.63985 3.87249 2.63985C3.92049 3.04785 3.92049 3.71985 3.87249 4.12785C2.51649 4.12785 2.14449 4.40385 1.82049 5.26785V8.99985C1.40049 9.05985 0.512492 9.05985 0.104492 8.99985Z"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M10.2115 5.02785V6.40785C9.40749 6.46785 7.55949 6.47985 6.52749 6.41985V6.71985C6.52749 7.57185 7.01949 7.72785 8.05149 7.72785C8.75949 7.72785 9.26349 7.66785 9.93549 7.53585C9.98349 7.94385 9.98349 8.51985 9.93549 8.92785C9.09549 9.07185 8.42349 9.14385 7.63149 9.14385C5.90349 9.14385 4.81149 8.62785 4.81149 7.10385V4.70385C4.81149 3.10785 5.96349 2.63985 7.55949 2.63985C9.14349 2.63985 10.2115 3.31185 10.2115 5.02785ZM8.53149 5.36385V4.95585C8.53149 4.13985 8.06349 4.04385 7.53549 4.04385C7.00749 4.04385 6.52749 4.13985 6.52749 4.95585V5.42385L7.45149 5.36385H8.53149Z"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M15.9181 6.94785V7.53585C15.9181 8.69985 15.0061 9.14385 13.5181 9.14385C12.8821 9.14385 12.1501 9.09585 11.4661 8.97585C11.4061 8.54385 11.4061 8.05185 11.4661 7.63185C12.1141 7.73985 12.7621 7.77585 13.2661 7.77585C13.7461 7.77585 14.2021 7.73985 14.2021 7.33185V7.10385C14.2021 6.75585 13.9621 6.69585 13.5541 6.58785L12.4741 6.27585C11.7901 6.08385 11.4181 5.65185 11.4181 4.85985V4.19985C11.4181 3.08385 12.3781 2.63985 13.9021 2.63985C14.5021 2.63985 15.1261 2.68785 15.8221 2.83185C15.8821 3.26385 15.8821 3.74385 15.8221 4.16385C15.0901 4.03185 14.6221 3.99585 14.0941 3.99585C13.5781 3.99585 13.1341 4.03185 13.1341 4.43985V4.66785C13.1341 4.96785 13.4101 5.07585 13.7821 5.18385L14.7901 5.45985C15.5341 5.66385 15.9181 6.03585 15.9181 6.94785Z"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M22.5865 5.02785V6.40785C21.7825 6.46785 19.9345 6.47985 18.9025 6.41985V6.71985C18.9025 7.57185 19.3945 7.72785 20.4265 7.72785C21.1345 7.72785 21.6385 7.66785 22.3105 7.53585C22.3585 7.94385 22.3585 8.51985 22.3105 8.92785C21.4705 9.07185 20.7985 9.14385 20.0065 9.14385C18.2785 9.14385 17.1865 8.62785 17.1865 7.10385V4.70385C17.1865 3.10785 18.3385 2.63985 19.9345 2.63985C21.5185 2.63985 22.5865 3.31185 22.5865 5.02785ZM20.9065 5.36385V4.95585C20.9065 4.13985 20.4385 4.04385 19.9105 4.04385C19.3825 4.04385 18.9025 4.13985 18.9025 4.95585V5.42385L19.8265 5.36385H20.9065Z"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M24.0811 8.99985V2.75985C24.5851 2.72385 25.0891 2.72385 25.6051 2.75985L25.7131 3.77985H25.7851C25.9771 2.97585 26.7571 2.63985 27.8491 2.63985C27.8971 3.04785 27.8971 3.71985 27.8491 4.12785C26.4931 4.12785 26.1211 4.40385 25.7971 5.26785V8.99985C25.3771 9.05985 24.4891 9.05985 24.0811 8.99985Z"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M30.1801 8.99985L28.2601 2.80785C28.6801 2.74785 29.5681 2.74785 29.9761 2.80785L31.2841 7.42785L32.5801 2.80785C32.9881 2.74785 33.8401 2.74785 34.2481 2.80785L32.3401 8.99985C31.8121 9.05985 30.7081 9.05985 30.1801 8.99985Z"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M40.7087 4.66785V7.13985C40.7087 8.62785 39.5807 9.14385 37.9007 9.14385C36.2207 9.14385 35.0927 8.62785 35.0927 7.13985V4.66785C35.0927 3.11985 36.2207 2.63985 37.9007 2.63985C39.5807 2.63985 40.7087 3.11985 40.7087 4.66785ZM38.9927 6.76785V5.01585C38.9927 4.18785 38.4887 4.09185 37.9007 4.09185C37.3007 4.09185 36.8087 4.18785 36.8087 5.01585V6.76785C36.8087 7.58385 37.3007 7.67985 37.9007 7.67985C38.4887 7.67985 38.9927 7.58385 38.9927 6.76785Z"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M42.3037 8.99985V2.80785C42.7117 2.74785 43.5997 2.74785 44.0197 2.80785V8.99985C43.5997 9.05985 42.7117 9.05985 42.3037 8.99985ZM44.0917 0.467852L44.0557 1.83585C43.6357 1.89585 42.6877 1.89585 42.2557 1.83585L42.2317 0.467852C42.6637 0.407852 43.6597 0.407852 44.0917 0.467852Z"
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("path", {
        d: "M45.7725 8.99985V2.75985C46.2765 2.72385 46.7805 2.72385 47.2965 2.75985L47.4045 3.77985H47.4765C47.6685 2.97585 48.4485 2.63985 49.5405 2.63985C49.5885 3.04785 49.5885 3.71985 49.5405 4.12785C48.1845 4.12785 47.8125 4.40385 47.4885 5.26785V8.99985C47.0685 9.05985 46.1805 9.05985 45.7725 8.99985Z"
    }));
};
var $d20859f9b2cb3548$export$2e2bcd8739ae039 = $d20859f9b2cb3548$var$ReservoirText;


const $32d03e1adcee2721$var$Title = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Title, {
    margin: 0
});
var $32d03e1adcee2721$export$e8598848ef5f29c0;
(function(ModalSize) {
    ModalSize[ModalSize["MD"] = 0] = "MD";
    ModalSize[ModalSize["LG"] = 1] = "LG";
})($32d03e1adcee2721$export$e8598848ef5f29c0 || ($32d03e1adcee2721$export$e8598848ef5f29c0 = {}));
const $32d03e1adcee2721$export$e6ff31bff12b7ff4 = (0, $4a58f4053e821189$export$3817b7a54a07cec7)((0, $d20859f9b2cb3548$export$2e2bcd8739ae039), {
    fill: "$neutralText",
    "&:hover": {
        fill: "$neutralSolid"
    }
});
const $32d03e1adcee2721$export$2b77a92f1a5ad772 = /*#__PURE__*/ (0, $TBcmg$forwardRef)(({ title: title , children: children , trigger: trigger , onBack: onBack , open: open , size: size = $32d03e1adcee2721$export$e8598848ef5f29c0.MD , onOpenChange: onOpenChange , loading: loading , onPointerDownOutside: onPointerDownOutside , onFocusCapture: onFocusCapture  }, forwardedRef)=>{
    const providerOptionsContext = (0, $TBcmg$useContext)((0, $f4609ce2cb6b416b$export$f66a1c3c9465af21));
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $2fec296c1c0f429e$export$3ddf2d174ce01153), {
        ref: forwardedRef,
        trigger: trigger,
        open: open,
        onOpenChange: onOpenChange,
        size: size,
        onPointerDownOutside: onPointerDownOutside,
        onFocusCapture: onFocusCapture
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            p: 16,
            backgroundColor: "$headerBackground",
            alignItems: "center",
            justifyContent: "space-between",
            borderTopRightRadius: "$borderRadius",
            borderTopLeftRadius: "$borderRadius"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($32d03e1adcee2721$var$Title, {
        css: {
            alignItems: "center",
            display: "flex"
        }
    }, onBack && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
        color: "ghost",
        size: "none",
        css: {
            mr: "$2",
            color: "$neutralText"
        },
        onClick: onBack
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faChevronLeft),
        width: 16,
        height: 16
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6"
    }, title)), /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Close, {
        asChild: true
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
        color: "ghost",
        size: "none",
        css: {
            color: "$neutralText"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faClose),
        width: 16,
        height: 16
    })))), loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), {
        css: {
            minHeight: 242,
            backgroundColor: "$contentBackground"
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            maxHeight: "85vh",
            overflowY: "auto"
        }
    }, children), !providerOptionsContext.disablePoweredByReservoir && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center",
        css: {
            mx: "auto",
            alignItems: "center",
            justifyContent: "center",
            pb: 12,
            gap: "$1",
            visibility: "$poweredByReservoirVisibility",
            borderBottomRightRadius: "$borderRadius",
            borderBottomLeftRadius: "$borderRadius"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            color: "$neutralBorderHover"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faLock),
        width: 9,
        height: 10
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "tiny",
        color: "subtle",
        css: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            fontWeight: 400,
            lineHeight: "12px",
            color: "$neutralText"
        }
    }, "Powered by", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
        href: "https://reservoir.tools/",
        target: "_blank",
        weight: "heavy",
        color: "gray",
        css: {
            height: 12,
            fontSize: 12,
            "&:hover": {
                color: "$neutralSolid",
                fill: "$neutralSolid"
            }
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($32d03e1adcee2721$export$e6ff31bff12b7ff4, null)))));
});









var $9051fde5e764f5e2$export$2e2bcd8739ae039 = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("div", {
    display: "grid",
    variants: {
        align: {
            start: {
                alignItems: "start"
            },
            center: {
                alignItems: "center"
            },
            end: {
                alignItems: "end"
            },
            stretch: {
                alignItems: "stretch"
            },
            baseline: {
                alignItems: "baseline"
            }
        },
        justify: {
            start: {
                justifyContent: "start"
            },
            center: {
                justifyContent: "center"
            },
            end: {
                justifyContent: "end"
            },
            between: {
                justifyContent: "space-between"
            }
        },
        flow: {
            row: {
                gridAutoFlow: "row"
            },
            column: {
                gridAutoFlow: "column"
            },
            dense: {
                gridAutoFlow: "dense"
            },
            rowDense: {
                gridAutoFlow: "row dense"
            },
            columnDense: {
                gridAutoFlow: "column dense"
            }
        }
    }
});









const $b3c42dc96a91e1fd$var$Arrow = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Arrow1, {
    width: 15,
    height: 7,
    fill: "$popoverBackground"
});
const $b3c42dc96a91e1fd$var$Content = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Content1, {
    filter: "drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.75))",
    zIndex: 1000
});
const $b3c42dc96a91e1fd$var$RKPopover = ({ children: children , content: content , side: side = "bottom" , width: width = "100%" , ...props })=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Root1, {
        ...props
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Trigger1, {
        style: {
            backgroundColor: "transparent",
            borderWidth: 0,
            cursor: "pointer",
            padding: 0
        }
    }, children), /*#__PURE__*/ (0, $TBcmg$react).createElement($b3c42dc96a91e1fd$var$Content, {
        side: side
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($b3c42dc96a91e1fd$var$Arrow, null), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            p: "$3",
            maxWidth: 320,
            overflowY: "auto",
            maxHeight: 322,
            width: width,
            borderRadius: 8,
            backgroundColor: "$popoverBackground"
        }
    }, content)));
};
$b3c42dc96a91e1fd$var$RKPopover.Root = $TBcmg$Root1;
$b3c42dc96a91e1fd$var$RKPopover.Portal = $TBcmg$Portal;
$b3c42dc96a91e1fd$var$RKPopover.Trigger = $TBcmg$Trigger1;
$b3c42dc96a91e1fd$var$RKPopover.Arrow = $b3c42dc96a91e1fd$var$Arrow;
$b3c42dc96a91e1fd$var$RKPopover.Content = $b3c42dc96a91e1fd$var$Content;
var $b3c42dc96a91e1fd$export$2e2bcd8739ae039 = $b3c42dc96a91e1fd$var$RKPopover;


const $a813136de1d75d50$var$InfoTooltip = ({ side: side , content: content , width: width , kind: kind = "info"  })=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c42dc96a91e1fd$export$2e2bcd8739ae039), {
        side: side,
        width: width,
        content: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            as: "p"
        }, content)
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            color: kind === "error" ? "$errorAccent" : "$neutralText"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faInfoCircle)
    })));
};
var $a813136de1d75d50$export$2e2bcd8739ae039 = $a813136de1d75d50$var$InfoTooltip;


const $6a7867ba1ffb99fc$var$Img = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("img", {
    height: 56,
    width: 56
});
const $6a7867ba1ffb99fc$var$TokenPrimitive = ({ img: img , name: name , collection: collection , currencyContract: currencyContract , currencyDecimals: currencyDecimals , currencySymbol: currencySymbol , expires: expires , warning: warning , source: source , usdPrice: usdPrice , price: price , isUnavailable: isUnavailable , priceSubtitle: priceSubtitle , royaltiesBps: royaltiesBps , quantity: quantity  })=>{
    const royaltyPercent = royaltiesBps ? royaltiesBps / 100 : royaltiesBps;
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            justifyContent: "space-between",
            alignItems: "center"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle",
        css: {
            mb: 10,
            display: "block"
        }
    }, name ? "Item" : "Collection"), priceSubtitle && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle",
        css: {
            mb: 10,
            display: "block"
        }
    }, priceSubtitle)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        justify: "between"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            alignItems: "center",
            gap: 8
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($6a7867ba1ffb99fc$var$Img, {
        src: img,
        alt: name,
        css: {
            borderRadius: 4,
            overflow: "hidden",
            visibility: !img || img.length === 0 ? "hidden" : "visible",
            flexShrink: 0,
            objectFit: "cover"
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $9051fde5e764f5e2$export$2e2bcd8739ae039), {
        css: {
            rowGap: 2
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center",
        css: {
            gap: "$2",
            mr: "$4",
            overflow: "hidden"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6",
        ellipsify: true,
        color: isUnavailable ? "subtle" : "base"
    }, name ? name : collection), expires && quantity && quantity > 1 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            p: "$1 ",
            background: "$neutralBgHover",
            borderRadius: 4,
            mr: "auto"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "tiny",
        color: "base",
        css: {
            minWidth: "max-content"
        }
    }, quantity, " items")) : null), name && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3",
        color: isUnavailable ? "subtle" : "base"
    }, collection), !!expires && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "tiny"
    }, "Expires ", expires), !expires && quantity && quantity > 1 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            p: "$1 ",
            background: "$neutralBgHover",
            borderRadius: 4,
            mr: "auto"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "tiny",
        color: "base"
    }, quantity, " ", quantity > 1 ? "items" : "item")) : null, !expires && !quantity && royaltiesBps ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3",
        color: "subtle",
        css: {
            display: "flex",
            gap: "$1"
        }
    }, "Creator Royalties: ", royaltyPercent, "%", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a813136de1d75d50$export$2e2bcd8739ae039), {
        side: "right",
        width: 200,
        content: "A fee on every order that goes to the collection creator."
    })) : null)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $9051fde5e764f5e2$export$2e2bcd8739ae039), {
        css: {
            justifyItems: "end",
            alignContent: "start",
            rowGap: 4
        }
    }, source && /*#__PURE__*/ (0, $TBcmg$react).createElement($6a7867ba1ffb99fc$var$Img, {
        src: source,
        alt: "Source Icon",
        css: {
            w: 17,
            h: 17,
            borderRadius: 99999,
            overflow: "hidden"
        }
    }), price ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
        amount: price,
        textColor: isUnavailable ? "subtle" : "base",
        address: currencyContract,
        decimals: currencyDecimals,
        symbol: currencySymbol,
        logoWidth: 14.5
    }) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: isUnavailable ? "subtle" : "base"
    }, "--"), usdPrice ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
        amount: usdPrice,
        style: "tiny",
        color: "subtle"
    }) : null, warning && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "error"
    }, warning))));
};
var $6a7867ba1ffb99fc$export$2e2bcd8739ae039 = $6a7867ba1ffb99fc$var$TokenPrimitive;


const $7320ceede6f15138$var$TokenLineItem = ({ tokenDetails: tokenDetails , collection: collection , usdConversion: usdConversion = 0 , isUnavailable: isUnavailable , price: price , priceSubtitle: priceSubtitle , warning: warning , currency: currency , expires: expires , sourceImg: sourceImg , css: css , showRoyalties: showRoyalties , quantity: quantity  })=>{
    if (!tokenDetails) return null;
    const usdPrice = price * usdConversion;
    const name = tokenDetails?.token?.name || `#${tokenDetails?.token?.tokenId}`;
    const collectionName = tokenDetails?.token?.collection?.name || collection?.name || "";
    const img = tokenDetails?.token?.imageSmall ? tokenDetails.token.imageSmall : collection?.image;
    const royaltiesBps = showRoyalties && collection?.royalties ? collection.royalties.bps : undefined;
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            p: "$4",
            borderBottom: "1px solid $borderColor",
            ...css
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6a7867ba1ffb99fc$export$2e2bcd8739ae039), {
        img: img,
        name: name,
        price: price,
        usdPrice: usdPrice,
        collection: collectionName,
        currencyContract: currency?.contract,
        currencyDecimals: currency?.decimals,
        currencySymbol: currency?.symbol,
        expires: expires,
        warning: warning,
        source: sourceImg || "",
        isUnavailable: isUnavailable,
        priceSubtitle: priceSubtitle,
        royaltiesBps: royaltiesBps,
        quantity: quantity
    }));
};
var $7320ceede6f15138$export$2e2bcd8739ae039 = $7320ceede6f15138$var$TokenLineItem;







var $1cf2d84a10342ca7$export$b41ddf00b39567e8;
(function(BuyStep) {
    BuyStep[BuyStep["Checkout"] = 0] = "Checkout";
    BuyStep[BuyStep["Approving"] = 1] = "Approving";
    BuyStep[BuyStep["Complete"] = 2] = "Complete";
    BuyStep[BuyStep["Unavailable"] = 3] = "Unavailable";
})($1cf2d84a10342ca7$export$b41ddf00b39567e8 || ($1cf2d84a10342ca7$export$b41ddf00b39567e8 = {}));
const $1cf2d84a10342ca7$export$8913f774683cde87 = ({ open: open , tokenId: tokenId , collectionId: collectionId , orderId: orderId , feesOnTopBps: feesOnTopBps , feesOnTopFixed: feesOnTopFixed , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    const { data: wallet  } = (0, $TBcmg$useWalletClient)();
    const [totalPrice, setTotalPrice] = (0, $TBcmg$useState)(0);
    const [averageUnitPrice, setAverageUnitPrice] = (0, $TBcmg$useState)(0);
    const [path, setPath] = (0, $TBcmg$useState)([]);
    const [isFetchingPath, setIsFetchingPath] = (0, $TBcmg$useState)(false);
    const [currency, setCurrency] = (0, $TBcmg$useState)();
    const [mixedCurrencies, setMixedCurrencies] = (0, $TBcmg$useState)(false);
    const [feeOnTop, setFeeOnTop] = (0, $TBcmg$useState)(0);
    const [buyStep, setBuyStep] = (0, $TBcmg$useState)($1cf2d84a10342ca7$export$b41ddf00b39567e8.Checkout);
    const [transactionError, setTransactionError] = (0, $TBcmg$useState)();
    const [hasEnoughCurrency, setHasEnoughCurrency] = (0, $TBcmg$useState)(true);
    const [stepData, setStepData] = (0, $TBcmg$useState)(null);
    const [steps, setSteps] = (0, $TBcmg$useState)(null);
    const [quantity, setQuantity] = (0, $TBcmg$useState)(1);
    const { chain: activeChain  } = (0, $TBcmg$useNetwork)();
    const chainCurrency = (0, $57dcd81a309fc6e2$export$2e2bcd8739ae039)();
    const blockExplorerBaseUrl = activeChain?.blockExplorers?.default?.url || "https://etherscan.io";
    const contract = collectionId ? collectionId?.split(":")[0] : undefined;
    const { data: tokens , mutate: mutateTokens  } = (0, $074b4666df4341a7$export$2e2bcd8739ae039)(open && {
        tokens: [
            `${contract}:${tokenId}`
        ],
        includeLastSale: true,
        includeQuantity: true,
        normalizeRoyalties: normalizeRoyalties
    }, {
        revalidateFirstPage: true
    });
    const { data: collections , mutate: mutateCollection  } = (0, $afd6276a623787c2$export$2e2bcd8739ae039)(open && {
        id: collectionId,
        normalizeRoyalties: normalizeRoyalties
    });
    const { address: address  } = (0, $TBcmg$useAccount)();
    const { data: balance  } = (0, $TBcmg$useBalance)({
        address: address,
        token: currency?.contract !== (0, $TBcmg$zeroAddress) ? currency?.contract : undefined,
        watch: open,
        formatUnits: currency?.decimals
    });
    const collection = collections && collections[0] ? collections[0] : undefined;
    const token = tokens && tokens.length > 0 ? tokens[0] : undefined;
    const is1155 = token?.token?.kind === "erc1155";
    const { data: listingsData , mutate: mutateListings , isValidating: isValidatingListing  } = (0, $b9d7d4ec194b807a$export$2e2bcd8739ae039)({
        token: `${contract}:${tokenId}`,
        ids: orderId,
        normalizeRoyalties: normalizeRoyalties,
        status: "active",
        limit: 1,
        sortBy: "price"
    }, {
        revalidateFirstPage: true
    }, open && orderId && orderId.length > 0 ? true : false);
    const listing = (0, $TBcmg$useMemo)(()=>listingsData.find((listing)=>listing.maker !== address), [
        listingsData
    ]);
    const quantityRemaining = (0, $TBcmg$useMemo)(()=>{
        if (orderId) return listing?.quantityRemaining || 0;
        else if (is1155) return path ? path.reduce((total, pathItem)=>total + (pathItem.quantity || 0), 0) : 0;
        else return token?.market?.floorAsk?.quantityRemaining || 0;
    }, [
        listing,
        token,
        path,
        is1155,
        orderId
    ]);
    const usdConversion = (0, $b5d8dec284676ed1$export$2e2bcd8739ae039)(open && token ? "USD" : undefined, currency?.symbol);
    const usdPrice = usdConversion.length > 0 ? usdConversion[0].price : 0;
    const feeUsd = feeOnTop * usdPrice;
    const totalUsd = totalPrice * usdPrice;
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const { chain: chain  } = (0, $TBcmg$useNetwork)();
    const addFundsLink = currency?.contract ? `https://jumper.exchange/?toChain=${chain?.id}&toToken=${currency?.contract}` : `https://jumper.exchange/?toChain=${chain?.id}`;
    const fetchPath = (0, $TBcmg$useCallback)(()=>{
        if (!open || !client || !tokenId || !contract || !wallet || !is1155 || orderId) {
            setPath(undefined);
            return;
        }
        setIsFetchingPath(true);
        const options = {
            onlyPath: true,
            partial: true
        };
        if (normalizeRoyalties !== undefined) options.normalizeRoyalties = normalizeRoyalties;
        client.actions.buyToken({
            options: options,
            items: [
                {
                    token: `${contract}:${tokenId}`,
                    quantity: 1000,
                    fillType: "trade"
                }
            ],
            wallet: wallet,
            onProgress: ()=>{},
            precheck: true
        }).then((response)=>{
            if (response && response.path) setPath(response.path);
            else setPath([]);
        }).catch((err)=>{
            setPath([]);
            throw err;
        }).finally(()=>{
            setIsFetchingPath(false);
        });
    }, [
        open,
        client,
        wallet,
        tokenId,
        contract,
        is1155,
        orderId,
        normalizeRoyalties
    ]);
    (0, $TBcmg$useEffect)(()=>{
        fetchPath();
    }, [
        fetchPath
    ]);
    const buyToken = (0, $TBcmg$useCallback)(()=>{
        if (!wallet) {
            const error = new Error("Missing a wallet/signer");
            setTransactionError(error);
            throw error;
        }
        if (!tokenId || !collectionId) {
            const error = new Error("Missing tokenId or collectionId");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        const contract = collectionId?.split(":")[0];
        let options = {};
        if (feesOnTopBps && feesOnTopBps?.length > 0) {
            const fixedFees = feesOnTopBps.map((fullFee)=>{
                const [referrer, feeBps] = fullFee.split(":");
                const totalFeeTruncated = (0, $6f54b4a5aad888ed$export$a81f732198733497)(totalPrice - feeOnTop, currency?.decimals || 18);
                const fee = Number((0, $TBcmg$parseUnits)(`${Number(totalFeeTruncated)}`, currency?.decimals || 18) * BigInt(feeBps)) / 10000;
                const atomicUnitsFee = (0, $TBcmg$formatUnits)(BigInt(fee), 0);
                return `${referrer}:${atomicUnitsFee}`;
            });
            options.feesOnTop = fixedFees;
        } else if (feesOnTopFixed && feesOnTopFixed.length > 0) options.feesOnTop = feesOnTopFixed;
        else if (!feesOnTopFixed && !feesOnTopBps) delete options.feesOnTop;
        if (normalizeRoyalties !== undefined) options.normalizeRoyalties = normalizeRoyalties;
        setBuyStep($1cf2d84a10342ca7$export$b41ddf00b39567e8.Approving);
        const items = [];
        const item = {
            fillType: "trade",
            quantity: quantity
        };
        if (is1155) options.partial = true;
        if (orderId) item.orderId = orderId;
        else item.token = `${contract}:${tokenId}`;
        items.push(item);
        client.actions.buyToken({
            items: items,
            expectedPrice: totalPrice - feeOnTop,
            wallet: wallet,
            onProgress: (steps)=>{
                if (!steps) return;
                setSteps(steps);
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                const currentStepIndex = executableSteps.findIndex((step)=>{
                    currentStepItem = step.items?.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStepItem) setStepData({
                    totalSteps: stepCount,
                    stepProgress: currentStepIndex,
                    currentStep: currentStep,
                    currentStepItem: currentStepItem
                });
                else if (steps.every((step)=>!step.items || step.items.length == 0 || step.items?.every((item)=>item.status === "complete"))) setBuyStep($1cf2d84a10342ca7$export$b41ddf00b39567e8.Complete);
            },
            options: options
        }).catch((e)=>{
            const error = e;
            if (error && error?.message && error?.message.includes("ETH balance")) setHasEnoughCurrency(false);
            else {
                const errorType = error?.type;
                const errorStatus = error?.statusCode;
                let message = "Oops, something went wrong. Please try again.";
                if (errorType && errorType === "price mismatch") message = error.message;
                if (errorStatus >= 400 && errorStatus < 500) message = error.message;
                //@ts-ignore: Should be fixed in an update to typescript
                const transactionError = new Error(message, {
                    cause: error
                });
                setTransactionError(transactionError);
                if (orderId) mutateListings();
                mutateCollection();
                mutateTokens();
                fetchPath();
            }
            setBuyStep($1cf2d84a10342ca7$export$b41ddf00b39567e8.Checkout);
            setStepData(null);
            setSteps(null);
        });
    }, [
        tokenId,
        collectionId,
        orderId,
        feesOnTopBps,
        feesOnTopFixed,
        quantity,
        normalizeRoyalties,
        is1155,
        client,
        currency,
        totalPrice,
        mutateListings,
        mutateTokens,
        mutateCollection
    ]);
    (0, $TBcmg$useEffect)(()=>{
        let currency;
        if (!token || orderId && !listing && isValidatingListing || is1155 && !path && isFetchingPath) {
            setBuyStep($1cf2d84a10342ca7$export$b41ddf00b39567e8.Unavailable);
            setTotalPrice(0);
            setAverageUnitPrice(0);
            setCurrency(undefined);
            setMixedCurrencies(false);
            return;
        }
        let total = 0;
        if (orderId) {
            total = (listing?.price?.amount?.decimal || 0) * quantity;
            if (listing?.price?.currency) {
                currency = listing?.price?.currency;
                setCurrency(currency);
            }
            setMixedCurrencies(false);
        } else if (is1155) {
            let orders = {};
            let mixedCurrencies = false;
            let currencies = [];
            let nativeTotal = 0;
            let orderCurrencyTotal = 0;
            let totalQuantity = 0;
            if (path && path.length > 0) {
                for(let i = 0; i < path.length; i++){
                    const pathItem = path[i];
                    const pathQuantity = pathItem.quantity || 0;
                    const pathPrice = pathItem.totalPrice || 0;
                    const listingId = pathItem.orderId;
                    if (!pathItem?.currency || !listingId) continue;
                    const quantityLeft = quantity - totalQuantity;
                    if (!currencies.includes(pathItem.currency)) {
                        currencies.push(pathItem.currency);
                        mixedCurrencies = currencies.length >= 2;
                    }
                    let quantityToTake = 0;
                    if (quantityLeft >= pathQuantity) quantityToTake = pathQuantity;
                    else quantityToTake = quantityLeft;
                    nativeTotal += (pathItem.buyInQuote || pathPrice) * quantityToTake;
                    orderCurrencyTotal += pathPrice * quantityToTake;
                    orders[listingId] = quantityToTake;
                    totalQuantity += quantityToTake;
                    if (totalQuantity === quantity) break;
                }
                total = mixedCurrencies ? nativeTotal : orderCurrencyTotal;
                currency = mixedCurrencies ? {
                    contract: chainCurrency.address,
                    symbol: chainCurrency.symbol,
                    decimals: chainCurrency.decimals
                } : {
                    contract: path[0].currency,
                    symbol: path[0].currencySymbol,
                    decimals: path[0].currencyDecimals
                };
                setCurrency(currency);
                setMixedCurrencies(mixedCurrencies);
            }
        } else if (token?.market?.floorAsk) {
            total = token.market.floorAsk.price?.amount?.decimal || 0;
            if (token.market.floorAsk.price?.currency) {
                currency = token.market.floorAsk.price?.currency;
                setCurrency(currency);
            }
            setMixedCurrencies(false);
        }
        if (total > 0) {
            if (feesOnTopBps && feesOnTopBps.length > 0) {
                const fees = feesOnTopBps.reduce((totalFees, feeOnTop)=>{
                    const [_, fee] = feeOnTop.split(":");
                    return totalFees + Number(fee) / 10000 * total;
                }, 0);
                total += fees;
                setFeeOnTop(fees);
            } else if (feesOnTopFixed && feesOnTopFixed.length > 0) {
                const fees = feesOnTopFixed.reduce((totalFees, feeOnTop)=>{
                    const [_, fee] = feeOnTop.split(":");
                    const parsedFee = (0, $TBcmg$formatUnits)(BigInt(fee), currency?.decimals || 18);
                    return totalFees + Number(parsedFee);
                }, 0);
                total += fees;
                setFeeOnTop(fees);
            }
            setTotalPrice(total);
            setAverageUnitPrice(total / quantity);
            setBuyStep($1cf2d84a10342ca7$export$b41ddf00b39567e8.Checkout);
        } else {
            setBuyStep($1cf2d84a10342ca7$export$b41ddf00b39567e8.Unavailable);
            setTotalPrice(0);
            setAverageUnitPrice(0);
            setCurrency(undefined);
            setMixedCurrencies(false);
        }
    }, [
        listing,
        path,
        isValidatingListing,
        isFetchingPath,
        is1155,
        orderId,
        feesOnTopBps,
        feesOnTopFixed,
        feeOnTop,
        client,
        quantity,
        token,
        chainCurrency.address
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (balance) {
            const totalPriceTruncated = (0, $6f54b4a5aad888ed$export$a81f732198733497)(totalPrice, currency?.decimals || 18);
            if (!balance.value) setHasEnoughCurrency(false);
            else if (balance.value < (0, $TBcmg$parseUnits)(`${totalPriceTruncated}`, currency?.decimals || 18)) setHasEnoughCurrency(false);
            else setHasEnoughCurrency(true);
        }
    }, [
        totalPrice,
        balance,
        currency
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (!open) {
            setBuyStep($1cf2d84a10342ca7$export$b41ddf00b39567e8.Checkout);
            setTransactionError(null);
            setStepData(null);
            setSteps(null);
            setQuantity(1);
            setPath(undefined);
        }
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, children({
        loading: !listing && isValidatingListing || !token || isFetchingPath || is1155 && !path && !orderId,
        token: token,
        collection: collection,
        listing: listing,
        quantityAvailable: quantityRemaining || 1,
        currency: currency,
        mixedCurrencies: mixedCurrencies,
        totalPrice: totalPrice,
        averageUnitPrice: averageUnitPrice,
        feeOnTop: feeOnTop,
        buyStep: buyStep,
        transactionError: transactionError,
        hasEnoughCurrency: hasEnoughCurrency,
        addFundsLink: addFundsLink,
        feeUsd: feeUsd,
        totalUsd: totalUsd,
        usdPrice: usdPrice,
        balance: balance?.value,
        address: address,
        blockExplorerBaseUrl: blockExplorerBaseUrl,
        steps: steps,
        stepData: stepData,
        quantity: quantity,
        setQuantity: setQuantity,
        setBuyStep: setBuyStep,
        buyToken: buyToken
    }));
};




const $2e70e0c380877307$var$ProgressBar = ({ value: value , max: max , ...props })=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        ...props,
        css: {
            width: "100%",
            gap: "$2",
            ...props.css
        }
    }, [
        ...Array(max)
    ].map((_item, i)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            key: i,
            css: {
                height: 4,
                borderRadius: 99999,
                flex: 1,
                background: "linear-gradient(to left, $neutralBorderHover 50%, $accentSolid 50%) right",
                backgroundSize: "200% 100%",
                backgroundPosition: i + 1 <= value ? "left" : "right",
                transition: "all 0.5s ease"
            }
        })));
};
var $2e70e0c380877307$export$2e2bcd8739ae039 = $2e70e0c380877307$var$ProgressBar;






const $822ff51685ab152b$var$PseudoInput = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("div", {
    all: "unset",
    width: "auto",
    padding: "$4",
    borderRadius: "$space$2",
    fontFamily: "$body",
    fontSize: 16,
    fontWeight: 400,
    color: "$neutralText",
    backgroundColor: "$inputBackground"
});
var $822ff51685ab152b$export$2e2bcd8739ae039 = $822ff51685ab152b$var$PseudoInput;





const $c1ab7eea10f2afe3$var$QuantityButton = (0, $4a58f4053e821189$export$3817b7a54a07cec7)((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
    color: "$neutralSolid",
    backgroundColor: "transparent",
    "&:disabled": {
        backgroundColor: "$transparent",
        color: "$neutralBorderHover"
    },
    "&:disabled:hover": {
        backgroundColor: "$transparent",
        color: "$neutralBorderHover"
    },
    defaultVariants: {
        color: "ghost"
    }
});
const $c1ab7eea10f2afe3$var$QuantityInput = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("input", {
    border: 0,
    background: "none",
    fontSize: 16,
    maxWidth: 53,
    textAlign: "center"
});
const $c1ab7eea10f2afe3$var$QuantitySelector = ({ max: max , min: min , quantity: quantity , setQuantity: setQuantity , css: css  })=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $822ff51685ab152b$export$2e2bcd8739ae039), {
        css: {
            gap: "$1",
            direction: "column",
            display: "flex",
            alignItems: "center",
            p: 0,
            ...css
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($c1ab7eea10f2afe3$var$QuantityButton, {
        css: {
            px: 20
        },
        disabled: quantity <= min,
        onClick: ()=>{
            setQuantity(quantity - 1);
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faMinus),
        width: "16",
        height: "16",
        style: {
            height: 16
        }
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement($c1ab7eea10f2afe3$var$QuantityInput, {
        value: quantity == -1 ? "" : quantity,
        onChange: (e)=>{
            if (e.target.value === "") {
                setQuantity(-1);
                return;
            }
            const newQuantity = Number(e.target.value || 0);
            if (newQuantity && newQuantity >= min && newQuantity <= max) setQuantity(newQuantity);
            else setQuantity(quantity);
        },
        onBlur: (e)=>{
            if (e.target.value === "") setQuantity(min);
            else if (Number(e.target.value) > max) setQuantity(max);
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement($c1ab7eea10f2afe3$var$QuantityButton, {
        css: {
            px: 20
        },
        disabled: quantity >= max,
        onClick: ()=>{
            setQuantity(quantity + 1);
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faPlus),
        width: "16",
        height: "16",
        style: {
            height: 16
        }
    })));
};
var $c1ab7eea10f2afe3$export$2e2bcd8739ae039 = $c1ab7eea10f2afe3$var$QuantitySelector;



const $8befffb57023ead8$var$ModalCopy = {
    titleInsufficientFunds: "Add Funds",
    titleUnavilable: "Selected item is no longer Available",
    titleDefault: "Complete Checkout",
    ctaClose: "Close",
    ctaCheckout: "Checkout",
    ctaInsufficientFunds: "Add Funds",
    ctaGoToToken: "",
    ctaAwaitingValidation: "Waiting for transaction to be validated",
    ctaAwaitingApproval: "Waiting for approval...",
    ctaCopyAddress: "Copy Wallet Address"
};
function $8befffb57023ead8$var$titleForStep(step, copy) {
    switch(step){
        case (0, $1cf2d84a10342ca7$export$b41ddf00b39567e8).Unavailable:
            return copy.titleUnavilable;
        default:
            return copy.titleDefault;
    }
}
function $8befffb57023ead8$export$7055e49b90860ae6({ openState: openState , trigger: trigger , tokenId: tokenId , collectionId: collectionId , orderId: orderId , feesOnTopBps: feesOnTopBps , feesOnTopFixed: feesOnTopFixed , normalizeRoyalties: normalizeRoyalties , copyOverrides: copyOverrides , onPurchaseComplete: onPurchaseComplete , onPurchaseError: onPurchaseError , onClose: onClose , onGoToToken: onGoToToken  }) {
    const copy = {
        ...$8befffb57023ead8$var$ModalCopy,
        ...copyOverrides
    };
    const [open, setOpen] = (0, $b69d00be56c1bdb6$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const { chain: activeChain  } = (0, $TBcmg$useNetwork)();
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $1cf2d84a10342ca7$export$8913f774683cde87), {
        open: open,
        tokenId: tokenId,
        collectionId: collectionId,
        orderId: orderId,
        feesOnTopBps: feesOnTopBps,
        feesOnTopFixed: feesOnTopFixed,
        normalizeRoyalties: normalizeRoyalties
    }, ({ loading: loading , token: token , collection: collection , quantityAvailable: quantityAvailable , quantity: quantity , averageUnitPrice: averageUnitPrice , currency: currency , mixedCurrencies: mixedCurrencies , totalPrice: totalPrice , feeOnTop: feeOnTop , buyStep: buyStep , transactionError: transactionError , hasEnoughCurrency: hasEnoughCurrency , addFundsLink: addFundsLink , steps: steps , stepData: stepData , feeUsd: feeUsd , totalUsd: totalUsd , usdPrice: usdPrice , balance: balance , address: address , blockExplorerBaseUrl: blockExplorerBaseUrl , setQuantity: setQuantity , setBuyStep: setBuyStep , buyToken: buyToken  })=>{
        const title = $8befffb57023ead8$var$titleForStep(buyStep, copy);
        (0, $TBcmg$useEffect)(()=>{
            if (buyStep === (0, $1cf2d84a10342ca7$export$b41ddf00b39567e8).Complete && onPurchaseComplete) {
                const data = {
                    tokenId: tokenId,
                    collectionId: collectionId,
                    maker: address
                };
                if (steps) data.steps = steps;
                onPurchaseComplete(data);
            }
        }, [
            buyStep
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (transactionError && onPurchaseError) {
                const data = {
                    tokenId: tokenId,
                    collectionId: collectionId,
                    maker: address
                };
                onPurchaseError(transactionError, data);
            }
        }, [
            transactionError
        ]);
        const executableSteps = steps?.filter((step)=>step.items && step.items.length > 0) || [];
        const lastStepItems = executableSteps[executableSteps.length - 1]?.items || [];
        const purchaseTxHashes = stepData?.currentStep?.items?.reduce((txHashes, item)=>{
            item.salesData?.forEach((saleData)=>{
                if (saleData.txHash) txHashes.add(saleData.txHash);
            });
            return txHashes;
        }, new Set()) || [];
        const totalPurchases = Array.from(purchaseTxHashes).length;
        const failedPurchases = totalPurchases - (stepData?.currentStep?.items?.length || 0);
        const successfulPurchases = totalPurchases - failedPurchases;
        const finalTxHash = lastStepItems[lastStepItems.length - 1]?.txHash;
        const price = totalPrice || token?.token?.lastSale?.price?.amount?.decimal || 0;
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $32d03e1adcee2721$export$2b77a92f1a5ad772), {
            trigger: trigger,
            title: title,
            open: open,
            onOpenChange: (open)=>{
                if (!open && onClose) {
                    const data = {
                        tokenId: tokenId,
                        collectionId: collectionId,
                        maker: address
                    };
                    onClose(data, stepData, buyStep);
                }
                setOpen(open);
            },
            loading: loading
        }, buyStep === (0, $1cf2d84a10342ca7$export$b41ddf00b39567e8).Unavailable && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $7320ceede6f15138$export$2e2bcd8739ae039), {
            tokenDetails: token,
            collection: collection,
            usdConversion: usdPrice || 0,
            isUnavailable: true,
            price: quantity > 1 ? averageUnitPrice : price,
            currency: currency,
            priceSubtitle: quantity > 1 ? "Average Price" : undefined,
            showRoyalties: true
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                setOpen(false);
            },
            css: {
                m: "$4"
            }
        }, copy.ctaClose)), buyStep === (0, $1cf2d84a10342ca7$export$b41ddf00b39567e8).Checkout && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                color: "$errorAccent",
                p: "$4",
                gap: "$2",
                background: "$wellBackground"
            },
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCircleExclamation),
            width: 16,
            height: 16
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "errorLight"
        }, transactionError.message)), mixedCurrencies && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                color: "$errorAccent",
                p: "$4",
                gap: "$2",
                background: "$wellBackground"
            },
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCircleExclamation),
            width: 16,
            height: 16
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "errorLight"
        }, "Mixed currency listings are only available to checkout with ", currency?.symbol || "ETH", ".")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $7320ceede6f15138$export$2e2bcd8739ae039), {
            tokenDetails: token,
            collection: collection,
            usdConversion: usdPrice || 0,
            price: quantity > 1 ? averageUnitPrice : price,
            currency: currency,
            css: {
                border: 0
            },
            priceSubtitle: quantity > 1 ? "Average Price" : undefined,
            showRoyalties: true
        }), quantityAvailable > 1 && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                borderBottom: "1px solid $borderColor"
            },
            justify: "between"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                gap: "$1"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3"
        }, "Quantity"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "subtle"
        }, (0, $6f54b4a5aad888ed$export$f5dd818bff069720)(quantityAvailable), " items available")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $c1ab7eea10f2afe3$export$2e2bcd8739ae039), {
            min: 1,
            max: quantityAvailable,
            quantity: quantity,
            setQuantity: (quantity)=>{
                setQuantity(quantity);
            }
        })), feeOnTop > 0 && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            justify: "between",
            css: {
                pt: "$4",
                px: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2"
        }, "Referral Fee"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            amount: feeOnTop,
            address: currency?.contract,
            decimals: currency?.decimals,
            symbol: currency?.symbol
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            justify: "end"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
            amount: feeUsd,
            color: "subtle",
            css: {
                pr: "$4"
            }
        }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            justify: "between",
            css: {
                pt: "$4",
                px: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6"
        }, "Total"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            textStyle: "h6",
            amount: totalPrice,
            address: currency?.contract,
            decimals: currency?.decimals,
            symbol: currency?.symbol
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            justify: "end"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
            amount: totalUsd,
            color: "subtle",
            css: {
                mr: "$4"
            }
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                width: "100%"
            }
        }, hasEnoughCurrency ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: buyToken,
            css: {
                width: "100%"
            },
            color: "primary"
        }, copy.ctaCheckout) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            css: {
                mb: "$3"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            css: {
                mr: "$3"
            },
            color: "error",
            style: "body3"
        }, "Insufficient Balance"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            amount: balance,
            address: currency?.contract,
            decimals: currency?.decimals,
            symbol: currency?.symbol,
            textStyle: "body3"
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                window.open(addFundsLink, "_blank");
            },
            css: {
                width: "100%"
            }
        }, copy.ctaInsufficientFunds)))), buyStep === (0, $1cf2d84a10342ca7$export$b41ddf00b39567e8).Approving && token && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $7320ceede6f15138$export$2e2bcd8739ae039), {
            tokenDetails: token,
            collection: collection,
            usdConversion: usdPrice || 0,
            price: quantity > 1 ? averageUnitPrice : price,
            currency: currency,
            priceSubtitle: quantity > 1 ? "Average Price" : undefined,
            quantity: quantity
        }), stepData && stepData.totalSteps > 1 && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $2e70e0c380877307$export$2e2bcd8739ae039), {
            css: {
                px: "$4",
                mt: "$3"
            },
            value: stepData?.stepProgress || 0,
            max: stepData?.totalSteps || 0
        }), !stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), {
            css: {
                height: 206
            }
        }), stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e92d8c2581b5f9df$export$2e2bcd8739ae039), {
            title: stepData?.currentStep.action || "",
            txHash: stepData?.currentStepItem.txHash,
            blockExplorerBaseUrl: `${blockExplorerBaseUrl}/tx/${stepData?.currentStepItem.txHash}`
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: true,
            css: {
                m: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), stepData?.currentStepItem.txHash ? copy.ctaAwaitingValidation : copy.ctaAwaitingApproval)), buyStep === (0, $1cf2d84a10342ca7$export$b41ddf00b39567e8).Complete && token && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                py: "$5",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }
        }, totalPurchases === 1 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h5",
            css: {
                textAlign: "center",
                mt: 24,
                mb: 24
            }
        }, "Congratulations!")) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: failedPurchases ? "$errorAccent" : "$successAccent"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: failedPurchases ? (0, $TBcmg$faCircleExclamation) : (0, $TBcmg$faCheckCircle),
            fontSize: 32
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h5",
            css: {
                textAlign: "center",
                mt: 24,
                mb: 24
            }
        }, failedPurchases ? `${successfulPurchases} ${successfulPurchases > 1 ? "items" : "item"} purchased, ${failedPurchases} ${failedPurchases > 1 ? "items" : "item"} failed` : "Congrats! Purchase was successful.")), totalPurchases === 1 && /*#__PURE__*/ (0, $TBcmg$react).createElement("img", {
            src: token?.token?.imageSmall,
            style: {
                width: 100,
                height: 100
            }
        }), totalPurchases > 1 && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                gap: "$2"
            }
        }, stepData?.currentStep.items?.map((item)=>{
            const txHash = item.txHash ? `${item.txHash.slice(0, 4)}...${item.txHash.slice(-4)}` : "";
            return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
                href: `${blockExplorerBaseUrl}/tx/${item?.txHash}`,
                color: "primary",
                weight: "medium",
                target: "_blank",
                css: {
                    fontSize: 12
                }
            }, "View transaction: ", txHash);
        })), totalPurchases === 1 && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                mb: 24,
                mt: 24,
                maxWidth: "100%"
            },
            align: "center",
            justify: "center"
        }, !!token.token?.collection?.image && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                mr: "$1"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement("img", {
            src: token.token?.collection?.image,
            style: {
                width: 24,
                height: 24,
                borderRadius: "50%"
            }
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            css: {
                maxWidth: "100%"
            },
            ellipsify: true
        }, token?.token?.name ? token?.token?.name : `#${token?.token?.tokenId}`)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                mb: "$2"
            },
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: "$successAccent",
                mr: "$2"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCheckCircle)
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body1"
        }, "Your transaction went through successfully")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
            color: "primary",
            weight: "medium",
            css: {
                fontSize: 12
            },
            href: `${blockExplorerBaseUrl}/tx/${finalTxHash}`,
            target: "_blank"
        }, "View on", " ", activeChain?.blockExplorers?.default.name || "Etherscan"))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                flexDirection: "column",
                gap: "$3",
                "@bp1": {
                    flexDirection: "row"
                }
            }
        }, !!onGoToToken ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                setOpen(false);
            },
            css: {
                flex: 1
            },
            color: "ghost"
        }, copy.ctaClose), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            style: {
                flex: 1
            },
            color: "primary",
            onClick: ()=>{
                onGoToToken();
            }
        }, copy.ctaGoToToken.length > 0 ? copy.ctaGoToToken : `Go to ${successfulPurchases > 1 ? "Tokens" : "Token"}`)) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                setOpen(false);
            },
            style: {
                flex: 1
            },
            color: "primary"
        }, copy.ctaClose))));
    });
}
$8befffb57023ead8$export$7055e49b90860ae6.Custom = (0, $1cf2d84a10342ca7$export$8913f774683cde87);










function $f9c59e90de25e993$export$2e2bcd8739ae039({ message: message , css: css  }) {
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            color: "$errorAccent",
            p: "$4",
            gap: "$2",
            background: "$wellBackground",
            ...css
        },
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faCircleExclamation),
        width: 16,
        height: 16
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3",
        color: "errorLight"
    }, message || "Oops, something went wrong. Please try again."));
}







const $53b68d251033efcb$var$StyledTrigger = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Trigger2, {
    boxSizing: "border-box",
    borderWidth: 0,
    width: "100%",
    px: "$4",
    py: "$3",
    borderRadius: "$borderRadius",
    fontfamily: "$body",
    fontSize: 16,
    display: "flex",
    justifyContent: "space-between",
    color: "$neutralTextContrast",
    backgroundColor: "$inputBackground",
    $$focusColor: "$colors$accentBorderHover",
    "&:placeholder": {
        color: "$neutralText"
    },
    "&:focus": {
        boxShadow: "0 0 0 2px $$focusColor"
    }
});
const $53b68d251033efcb$var$StyledContent = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Content3, {
    backgroundColor: "$inputBackground",
    color: "$textColor",
    borderRadius: "$borderRadius",
    overflow: "hidden",
    $$focusColor: "$colors$accentBorderHover",
    boxShadow: "0 0 0 2px $$focusColor"
});
const $53b68d251033efcb$var$textCss = {
    color: "$textColor",
    fontFamily: "$body",
    letterSpacing: 0
};
const $53b68d251033efcb$var$StyledItemText = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$ItemText, $53b68d251033efcb$var$textCss);
const $53b68d251033efcb$var$StyledValue = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Value, $53b68d251033efcb$var$textCss);
const $53b68d251033efcb$var$SelectDownIcon = /*#__PURE__*/ (0, $TBcmg$forwardRef)(({ ...props }, forwardedRef)=>/*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Icon, {
        asChild: true,
        ref: forwardedRef,
        ...props
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            color: "$neutralSolidHover"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faChevronDown),
        width: "14",
        color: ""
    }))));
const $53b68d251033efcb$export$863d5f18a1f54f2d = ({ children: children , trigger: trigger , css: css , ...props })=>/*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Root3, {
        ...props
    }, trigger ? trigger : /*#__PURE__*/ (0, $TBcmg$react).createElement($53b68d251033efcb$var$StyledTrigger, {
        css: {
            ...$53b68d251033efcb$var$textCss,
            ...css
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($53b68d251033efcb$var$StyledValue, {
        placeholder: props.placeholder
    }, props.value), /*#__PURE__*/ (0, $TBcmg$react).createElement($53b68d251033efcb$var$SelectDownIcon, null)), /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Portal1, {
        style: {
            zIndex: 1000000
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($53b68d251033efcb$var$StyledContent, null, /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$ScrollUpButton, null), /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Viewport, null, children), /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$ScrollDownButton, null))));
const $53b68d251033efcb$var$StyledItem = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Item, {
    cursor: "pointer",
    py: "$3",
    px: "$4",
    color: "$textColor",
    fontFamily: "$body",
    letterSpacing: 0,
    "&:hover": {
        background: "$neutralBgActive"
    }
});
$53b68d251033efcb$export$863d5f18a1f54f2d.Item = $53b68d251033efcb$var$StyledItem;
$53b68d251033efcb$export$863d5f18a1f54f2d.ItemText = $53b68d251033efcb$var$StyledItemText;
$53b68d251033efcb$export$863d5f18a1f54f2d.Trigger = $53b68d251033efcb$var$StyledTrigger;
$53b68d251033efcb$export$863d5f18a1f54f2d.Value = $53b68d251033efcb$var$StyledValue;
$53b68d251033efcb$export$863d5f18a1f54f2d.DownIcon = $53b68d251033efcb$var$SelectDownIcon;
var $53b68d251033efcb$export$2e2bcd8739ae039 = $53b68d251033efcb$export$863d5f18a1f54f2d;








function $a55c35dc2c5dd82a$export$2e2bcd8739ae039(marketplaces, tokenId, collectionId) {
    const [unapprovedMarketplaces, setUnapprovedMarketplaces] = (0, $TBcmg$useState)([]);
    const [isFetching, setIsFetching] = (0, $TBcmg$useState)(false);
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const { data: wallet  } = (0, $TBcmg$useWalletClient)();
    (0, $TBcmg$useEffect)(()=>{
        if (wallet && client && tokenId && collectionId && marketplaces.length > 0) {
            const listings = marketplaces.map((market)=>{
                const listing = {
                    token: `${collectionId}:${tokenId}`,
                    weiPrice: "100000000000000000",
                    //@ts-ignore
                    orderbook: market.orderbook,
                    //@ts-ignore
                    orderKind: market.orderKind
                };
                return listing;
            });
            setIsFetching(true);
            client.actions.listToken({
                listings: listings,
                wallet: wallet,
                precheck: true
            }).then((data)=>{
                const steps = data;
                const approvalStep = steps.find((step)=>step.kind === "transaction" && step.items && step.items.length > 0);
                if (approvalStep && approvalStep.items) setUnapprovedMarketplaces(approvalStep.items.reduce((unapproved, item)=>{
                    if (item.status === "incomplete" && item.orderIndexes !== undefined) {
                        const listingOrderKinds = listings.filter((_, i)=>item.orderIndexes?.includes(i)).map((listing)=>listing.orderKind);
                        marketplaces.forEach((marketplace)=>{
                            if (listingOrderKinds.includes(marketplace.orderKind)) unapproved.push(marketplace);
                        });
                    }
                    return unapproved;
                }, []));
                else if (unapprovedMarketplaces.length > 0) setUnapprovedMarketplaces([]);
                setIsFetching(false);
            }).catch(()=>{
                setIsFetching(false);
            });
        } else if (unapprovedMarketplaces.length > 0) setUnapprovedMarketplaces([]);
    }, [
        client,
        wallet,
        tokenId,
        collectionId,
        marketplaces.length
    ]);
    return {
        data: unapprovedMarketplaces,
        isFetching: isFetching
    };
}


var $49ea92be0f1fc634$export$2e2bcd8739ae039 = ()=>{
    const client = (0, $TBcmg$getClient)();
    let reservoirTitleEl = document.querySelector("meta[property='reservoir:title']");
    let title = null;
    if (reservoirTitleEl) title = reservoirTitleEl.getAttribute("content");
    if (!title && client && client.source) title = client.source;
    else if (!title) title = location ? location.hostname.replace("www.", "") : "";
    const reservoirIconEl = document.querySelector("meta[property='reservoir:icon']");
    let icon = null;
    if (reservoirIconEl) icon = reservoirIconEl.getAttribute("content");
    if (!icon) {
        const favicon = document.querySelector("link[rel*='icon']");
        if (favicon) icon = favicon.getAttribute("href");
    }
    return {
        title: title,
        icon: icon
    };
};





function $6bcc64b528de3c29$export$2e2bcd8739ae039(collectionId, listingEnabledOnly, fees, royaltyBps, chainId) {
    const [marketplaces, setMarketplaces] = (0, $TBcmg$useState)([]);
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const chain = chainId !== undefined ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    const path = new URL(`${chain?.baseApiUrl}/collections/${collectionId}/supported-marketplaces/v1`);
    const { data: data  } = (0, $TBcmg$swr)(collectionId ? [
        path.href,
        chain?.apiKey,
        client?.version
    ] : null, null);
    (0, $TBcmg$useEffect)(()=>{
        if (data && data.marketplaces) {
            let updatedMarketplaces = data.marketplaces;
            if (listingEnabledOnly) updatedMarketplaces = updatedMarketplaces.filter((marketplace)=>marketplace.listingEnabled && marketplace.orderbook !== "x2y2");
            updatedMarketplaces.forEach((marketplace)=>{
                if (marketplace.orderbook === "reservoir") {
                    const data = (0, $49ea92be0f1fc634$export$2e2bcd8739ae039)();
                    marketplace.name = data.title;
                    marketplace.domain = client?.source;
                    const marketplaceFees = fees || client?.marketplaceFees;
                    const feeBps = marketplaceFees?.reduce((total, fee)=>{
                        const bps = Number(fee.split(":")[1]);
                        total += bps;
                        return total;
                    }, 0);
                    marketplace.fee = {
                        bps: feeBps || 0,
                        percent: (feeBps || 0) / 100
                    };
                    if (data.icon) marketplace.imageUrl = data.icon;
                }
                if (marketplace.orderbook === "opensea" && royaltyBps !== undefined) {
                    const osFee = royaltyBps && royaltyBps >= 50 ? 0 : 50 - (royaltyBps || 0);
                    marketplace.fee = {
                        bps: osFee,
                        percent: osFee / 100
                    };
                } else if (marketplace.fee) marketplace.fee.percent = (marketplace.fee.bps || 0) / 100;
                marketplace.price = 0;
                marketplace.truePrice = 0;
                marketplace.isSelected = marketplace.orderbook === "reservoir" ? true : false;
            });
            setMarketplaces(updatedMarketplaces);
        }
    }, [
        data,
        listingEnabledOnly,
        chainId,
        fees,
        royaltyBps
    ]);
    return [
        marketplaces,
        setMarketplaces
    ];
}





const $a5f511417a938f00$var$MANIFOLD_ABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "getRoyaltyView",
        outputs: [
            {
                internalType: "address payable[]",
                name: "recipients",
                type: "address[]"
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
function $a5f511417a938f00$export$2e2bcd8739ae039({ contract: contract , tokenId: tokenId , value: value , enabled: enabled , chainId: chainId = (0, $TBcmg$mainnet).id  }) {
    let manifoldContract = "";
    switch(chainId){
        case (0, $TBcmg$mainnet).id:
            manifoldContract = "0x0385603ab55642cb4dd5de3ae9e306809991804f";
            break;
        case (0, $TBcmg$goerli).id:
            manifoldContract = "0xe7c9Cb6D966f76f3B5142167088927Bf34966a1f";
            break;
        case 137:
            manifoldContract = "0x28EdFcF0Be7E86b07493466e7631a213bDe8eEF2";
            break;
    }
    const currency = (0, $57dcd81a309fc6e2$export$2e2bcd8739ae039)(chainId);
    const amount = value ? value : (0, $TBcmg$parseUnits)("1", currency.decimals || 18);
    return (0, $TBcmg$useContractRead)({
        chainId: chainId,
        address: manifoldContract,
        abi: $a5f511417a938f00$var$MANIFOLD_ABI,
        args: [
            contract,
            tokenId,
            amount
        ],
        functionName: "getRoyaltyView",
        enabled: enabled && tokenId && contract && amount ? true : false,
        cacheTime: 60000
    });
}




const $4dd727d17c3f54df$var$expirationOptions = [
    {
        text: "1 Hour",
        value: "hour",
        relativeTime: 1,
        relativeTimeUnit: "h"
    },
    {
        text: "12 Hours",
        value: "12 hours",
        relativeTime: 12,
        relativeTimeUnit: "h"
    },
    {
        text: "1 Day",
        value: "1 day",
        relativeTime: 1,
        relativeTimeUnit: "d"
    },
    {
        text: "3 Day",
        value: "3 days",
        relativeTime: 3,
        relativeTimeUnit: "d"
    },
    {
        text: "1 Week",
        value: "week",
        relativeTime: 1,
        relativeTimeUnit: "w"
    },
    {
        text: "1 Month",
        value: "month",
        relativeTime: 1,
        relativeTimeUnit: "M"
    },
    {
        text: "3 Months",
        value: "3 months",
        relativeTime: 3,
        relativeTimeUnit: "M"
    },
    {
        text: "6 Months",
        value: "6 months",
        relativeTime: 6,
        relativeTimeUnit: "M"
    }
];
var $4dd727d17c3f54df$export$2e2bcd8739ae039 = $4dd727d17c3f54df$var$expirationOptions;



var $0dfcd962a810a554$export$7f4afd65e1e67072;
(function(ListStep) {
    ListStep[ListStep["SelectMarkets"] = 0] = "SelectMarkets";
    ListStep[ListStep["SetPrice"] = 1] = "SetPrice";
    ListStep[ListStep["ListItem"] = 2] = "ListItem";
    ListStep[ListStep["Complete"] = 3] = "Complete";
})($0dfcd962a810a554$export$7f4afd65e1e67072 || ($0dfcd962a810a554$export$7f4afd65e1e67072 = {}));
const $0dfcd962a810a554$var$isCurrencyAllowed = (currency, marketplace)=>{
    if (marketplace.listingEnabled) {
        if (currency.contract === (0, $TBcmg$zeroAddress)) return true;
        switch(marketplace.orderbook){
            case "reservoir":
                return true;
            case "opensea":
                return marketplace.paymentTokens?.find((token)=>token.address === currency.contract) !== undefined;
        }
    }
    return false;
};
const $0dfcd962a810a554$export$5cb91f178b51ac3 = ({ open: open , tokenId: tokenId , collectionId: collectionId , currencies: currencies , normalizeRoyalties: normalizeRoyalties , enableOnChainRoyalties: enableOnChainRoyalties = false , oracleEnabled: oracleEnabled = false , feesBps: feesBps , children: children  })=>{
    const { data: wallet  } = (0, $TBcmg$useWalletClient)();
    const account = (0, $TBcmg$useAccount)();
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const [listStep, setListStep] = (0, $TBcmg$useState)($0dfcd962a810a554$export$7f4afd65e1e67072.SelectMarkets);
    const [listingData, setListingData] = (0, $TBcmg$useState)([]);
    const [allMarketplaces] = (0, $6bcc64b528de3c29$export$2e2bcd8739ae039)(collectionId, true, feesBps);
    const [loadedInitalPrice, setLoadedInitalPrice] = (0, $TBcmg$useState)(false);
    const [transactionError, setTransactionError] = (0, $TBcmg$useState)();
    const [stepData, setStepData] = (0, $TBcmg$useState)(null);
    const [localMarketplace, setLocalMarketplace] = (0, $TBcmg$useState)(null);
    const chainCurrency = (0, $57dcd81a309fc6e2$export$2e2bcd8739ae039)();
    const defaultCurrency = {
        contract: chainCurrency.address,
        symbol: chainCurrency.symbol
    };
    const [currency, setCurrency] = (0, $TBcmg$useState)(currencies && currencies[0] ? currencies[0] : defaultCurrency);
    const [quantity, setQuantity] = (0, $TBcmg$useState)(1);
    const contract = collectionId ? collectionId?.split(":")[0] : undefined;
    const { data: collections  } = (0, $afd6276a623787c2$export$2e2bcd8739ae039)(open && {
        id: collectionId,
        normalizeRoyalties: normalizeRoyalties
    });
    const collection = collections && collections[0] ? collections[0] : undefined;
    const [expirationOption, setExpirationOption] = (0, $TBcmg$useState)((0, $4dd727d17c3f54df$export$2e2bcd8739ae039)[5]);
    const { data: onChainRoyalties , isFetching: isFetchingOnChainRoyalties  } = (0, $a5f511417a938f00$export$2e2bcd8739ae039)({
        contract: contract,
        tokenId: tokenId,
        chainId: chainCurrency.chainId,
        enabled: enableOnChainRoyalties && open
    });
    let royaltyBps = collection?.royalties?.bps;
    const onChainRoyaltyBps = (0, $TBcmg$useMemo)(()=>{
        const totalRoyalty = onChainRoyalties?.[1].reduce((total, royalty)=>{
            total += parseFloat((0, $TBcmg$formatUnits)(royalty, currency.decimals || 18));
            return total;
        }, 0);
        if (totalRoyalty) return totalRoyalty / 1 * 10000;
        return 0;
    }, [
        onChainRoyalties,
        chainCurrency
    ]);
    if (enableOnChainRoyalties && onChainRoyaltyBps) royaltyBps = onChainRoyaltyBps;
    const [marketplaces, setMarketplaces] = (0, $6bcc64b528de3c29$export$2e2bcd8739ae039)(collectionId, true, feesBps, royaltyBps);
    const { data: unapprovedMarketplaces , isFetching: isFetchingUnapprovedMarketplaces  } = (0, $a55c35dc2c5dd82a$export$2e2bcd8739ae039)(marketplaces, open ? tokenId : undefined, open ? contract : undefined);
    const { data: tokens  } = (0, $074b4666df4341a7$export$2e2bcd8739ae039)(open && {
        tokens: [
            `${contract}:${tokenId}`
        ],
        includeAttributes: true,
        includeLastSale: true,
        normalizeRoyalties: normalizeRoyalties
    }, {
        revalidateFirstPage: true
    });
    const token = tokens && tokens.length > 0 ? tokens[0] : undefined;
    const is1155 = token?.token?.kind === "erc1155";
    const { data: userTokens  } = (0, $adb61885b37a317b$export$2e2bcd8739ae039)(open && is1155 ? account.address : undefined, {
        tokens: [
            `${contract}:${tokenId}`
        ]
    });
    const quantityAvailable = is1155 && userTokens[0] ? Number(userTokens[0].ownership?.tokenCount || 1) : 1;
    const coinConversion = (0, $b5d8dec284676ed1$export$2e2bcd8739ae039)(open ? "USD" : undefined, currency.symbol, currency.coinGeckoId);
    const usdPrice = coinConversion.length > 0 ? coinConversion[0].price : 0;
    const toggleMarketplace = (marketplace)=>{
        const updatedMarketplaces = marketplaces.map((market)=>{
            if (market.name == marketplace.name) return {
                ...market,
                isSelected: !market.isSelected
            };
            else return market;
        });
        const hasNonNativeMarketplace = updatedMarketplaces.find((marketplace)=>marketplace.isSelected && marketplace.orderbook !== "reservoir");
        if (hasNonNativeMarketplace) setQuantity(1);
        setMarketplaces(updatedMarketplaces);
    };
    const setMarketPrice = (price, market)=>{
        let updatedMarketplaces = marketplaces.map((marketplace)=>{
            if (marketplace.name == market.name) return {
                ...marketplace,
                price: price,
                truePrice: price
            };
            return marketplace;
        });
        setMarketplaces(updatedMarketplaces);
    };
    (0, $TBcmg$useEffect)(()=>{
        if (open && token && collection && !loadedInitalPrice && allMarketplaces.length > 0) {
            let updatedMarketplaces = allMarketplaces.map((marketplace)=>{
                const listingEnabled = $0dfcd962a810a554$var$isCurrencyAllowed(currency, marketplace);
                return {
                    ...marketplace,
                    price: "",
                    truePrice: "",
                    listingEnabled: listingEnabled,
                    isSelected: listingEnabled ? marketplace.isSelected : false
                };
            });
            setMarketplaces(updatedMarketplaces);
            setLoadedInitalPrice(true);
        }
    }, [
        token,
        collection,
        loadedInitalPrice,
        open,
        marketplaces.length
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (open && loadedInitalPrice) {
            let updatedMarketplaces = allMarketplaces.map((marketplace)=>{
                const listingEnabled = $0dfcd962a810a554$var$isCurrencyAllowed(currency, marketplace);
                return {
                    ...marketplace,
                    listingEnabled: listingEnabled,
                    isSelected: listingEnabled ? marketplace.isSelected : false
                };
            });
            setMarketplaces(updatedMarketplaces);
        }
    }, [
        open,
        currency
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (marketplaces) setLocalMarketplace(marketplaces.find((marketplace)=>marketplace.orderbook === "reservoir") || null);
        else setLocalMarketplace(null);
    }, [
        marketplaces
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (!open) {
            setListStep($0dfcd962a810a554$export$7f4afd65e1e67072.SelectMarkets);
            setTransactionError(null);
            if (marketplaces.length > 0) setMarketplaces(marketplaces.map((marketplace)=>{
                return {
                    ...marketplace,
                    isSelected: marketplace.orderbook === "reservoir"
                };
            }));
            setLoadedInitalPrice(false);
            setStepData(null);
            setExpirationOption((0, $4dd727d17c3f54df$export$2e2bcd8739ae039)[5]);
            setQuantity(1);
        }
        setCurrency(currencies && currencies[0] ? currencies[0] : defaultCurrency);
    }, [
        open
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (currencies && currencies.length > 5) console.warn("The ListModal UI was designed to have a maximum of 5 currencies, going above 5 may degrade the user experience.");
    }, [
        currencies
    ]);
    const listToken = (0, $TBcmg$useCallback)(()=>{
        if (!wallet) {
            const error = new Error("Missing a wallet/signer");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        setTransactionError(null);
        const listingData = [];
        let expirationTime = null;
        if (expirationOption.relativeTime && expirationOption.relativeTimeUnit) expirationTime = (0, $TBcmg$dayjs)().add(expirationOption.relativeTime, expirationOption.relativeTimeUnit).unix().toString();
        marketplaces.forEach((market)=>{
            if (market.isSelected) {
                const listing = {
                    token: `${contract}:${tokenId}`,
                    weiPrice: ((0, $TBcmg$parseUnits)(`${+market.price}`, currency.decimals || 18) * BigInt(quantity)).toString(),
                    //@ts-ignore
                    orderbook: market.orderbook,
                    //@ts-ignore
                    orderKind: market.orderKind
                };
                if (enableOnChainRoyalties && onChainRoyalties && listing.orderKind?.includes("seaport")) {
                    const royalties = onChainRoyalties[0].map((recipient, i)=>{
                        const bps = parseFloat((0, $TBcmg$formatUnits)(onChainRoyalties[1][i], currency.decimals || 18)) / 1 * 10000;
                        return `${recipient}:${bps}`;
                    });
                    listing.automatedRoyalties = false;
                    listing.fees = [
                        ...royalties
                    ];
                }
                if (listing.orderbook === "reservoir") {
                    const fees = feesBps || client.marketplaceFees;
                    if (fees) {
                        if (!listing.fees) listing.fees = [];
                        listing.fees = listing.fees.concat(fees);
                    }
                }
                if (quantity > 1) listing.quantity = quantity;
                if (expirationTime) listing.expirationTime = expirationTime;
                if (currency && currency.contract != (0, $TBcmg$zeroAddress)) listing.currency = currency.contract;
                if (oracleEnabled) listing.options = {
                    [`${listing.orderKind}`]: {
                        useOffChainCancellation: true
                    }
                };
                listingData.push({
                    listing: listing,
                    marketplace: market
                });
            }
        });
        setListingData(listingData);
        setListStep($0dfcd962a810a554$export$7f4afd65e1e67072.ListItem);
        client.actions.listToken({
            listings: listingData.map((data)=>data.listing),
            wallet: wallet,
            onProgress: (steps)=>{
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let incompleteStepItemIndex = null;
                let incompleteStepIndex = null;
                executableSteps.find((step, i)=>{
                    if (!step.items) return false;
                    incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
                    if (incompleteStepItemIndex !== -1) {
                        incompleteStepIndex = i;
                        return true;
                    }
                });
                if (incompleteStepIndex === null || incompleteStepItemIndex === null) {
                    const currentStep = executableSteps[executableSteps.length - 1];
                    const currentStepItem = currentStep.items ? currentStep.items[currentStep.items.length] : null;
                    setListStep($0dfcd962a810a554$export$7f4afd65e1e67072.Complete);
                    const listings = currentStepItem && currentStepItem.orderIndexes !== undefined ? listingData.filter((_, i)=>currentStepItem.orderIndexes?.includes(i)) : [
                        listingData[listingData.length - 1]
                    ];
                    setStepData({
                        totalSteps: stepCount,
                        stepProgress: stepCount,
                        currentStep: currentStep,
                        listingData: listings
                    });
                } else {
                    const currentStep = executableSteps[incompleteStepIndex];
                    const listingIndexes = new Set();
                    currentStep.items?.forEach(({ orderIndexes: orderIndexes , status: status  })=>{
                        if (status === "incomplete") orderIndexes?.forEach((orderIndex)=>{
                            listingIndexes.add(orderIndex);
                        });
                    });
                    const listings = Array.from(listingIndexes).map((index)=>listingData[index]);
                    setStepData({
                        totalSteps: stepCount,
                        stepProgress: incompleteStepIndex,
                        currentStep: executableSteps[incompleteStepIndex],
                        listingData: listings
                    });
                }
            }
        }).catch((e)=>{
            const error = e;
            //@ts-ignore
            const transactionError = new Error(error?.message || "", {
                cause: error
            });
            setTransactionError(transactionError);
        });
    }, [
        client,
        marketplaces,
        wallet,
        collectionId,
        tokenId,
        expirationOption,
        currency,
        quantity,
        enableOnChainRoyalties,
        onChainRoyalties,
        feesBps
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, children({
        token: token,
        quantityAvailable: quantityAvailable,
        collection: collection,
        listStep: listStep,
        usdPrice: usdPrice,
        expirationOption: expirationOption,
        expirationOptions: $4dd727d17c3f54df$export$2e2bcd8739ae039,
        marketplaces: marketplaces,
        unapprovedMarketplaces: unapprovedMarketplaces,
        isFetchingUnapprovedMarketplaces: isFetchingUnapprovedMarketplaces,
        isFetchingOnChainRoyalties: isFetchingOnChainRoyalties,
        localMarketplace: localMarketplace,
        listingData: listingData,
        transactionError: transactionError,
        stepData: stepData,
        currencies: currencies || [
            defaultCurrency
        ],
        currency: currency,
        quantity: quantity,
        royaltyBps: royaltyBps,
        setListStep: setListStep,
        toggleMarketplace: toggleMarketplace,
        setMarketPrice: setMarketPrice,
        setCurrency: setCurrency,
        setExpirationOption: setExpirationOption,
        setQuantity: setQuantity,
        listToken: listToken
    }));
};
$0dfcd962a810a554$export$5cb91f178b51ac3.displayName = "ListModalRenderer";









const $b9dbc4deb8b847bf$var$optimizeImage = (imageHref, width)=>{
    if (!imageHref) return "";
    let url = new URL(imageHref);
    if (url.host === "lh3.googleusercontent.com") {
        if (imageHref.includes("=s") || imageHref.includes("=w")) {
            let newImage = imageHref.split("=");
            return `${newImage[0]}=w${width}`;
        }
        return `${imageHref}=w${width}`;
    }
    return imageHref;
};
var $b9dbc4deb8b847bf$export$2e2bcd8739ae039 = $b9dbc4deb8b847bf$var$optimizeImage;


const $dddafdadc17c858b$var$Img = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("img", {
    width: "100%",
    "@bp1": {
        height: 150,
        width: 150
    },
    borderRadius: "$borderRadius"
});
const $dddafdadc17c858b$var$Token = ({ token: token , collection: collection  })=>{
    const img = token?.token?.imageSmall ? token.token.imageSmall : (0, $b9dbc4deb8b847bf$export$2e2bcd8739ae039)(collection?.image, 250);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            mr: "$4",
            width: 120,
            "@bp1": {
                mr: 0,
                width: "100%"
            }
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle",
        css: {
            mb: "$1",
            display: "block"
        }
    }, "Item"), /*#__PURE__*/ (0, $TBcmg$react).createElement($dddafdadc17c858b$var$Img, {
        src: img,
        css: {
            mb: "$2",
            visibility: !img || img.length === 0 ? "hidden" : "visible",
            objectFit: "cover"
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6",
        css: {
            flex: 1
        },
        as: "h6",
        ellipsify: true
    }, token?.token?.name || `#${token?.token?.tokenId}`), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle",
        as: "p",
        ellipsify: true
    }, token?.token?.collection?.name)));
};
var $dddafdadc17c858b$export$2e2bcd8739ae039 = $dddafdadc17c858b$var$Token;







const $bf67ac886f7190ba$var$FormatWrappedCurrency = ({ logoWidth: logoWidth , address: address , ...props })=>{
    const { chain: activeChain , chains: chains  } = (0, $TBcmg$useNetwork)();
    let chain = chains.find((chain)=>activeChain?.id === chain.id);
    if (!chain && chains.length > 0) chain = chains[0];
    else chain = activeChain;
    const contractAddress = chain?.id !== undefined && chain.id in (0, $539986c326843873$export$2e2bcd8739ae039) ? (0, $539986c326843873$export$2e2bcd8739ae039)[chain.id] : (0, $539986c326843873$export$2e2bcd8739ae039)[1];
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
        ...props,
        address: address || contractAddress
    });
};
var $bf67ac886f7190ba$export$2e2bcd8739ae039 = $bf67ac886f7190ba$var$FormatWrappedCurrency;


const $21b0b93f5539af30$var$Stat = ({ label: label , value: value , symbol: symbol , asNative: asNative = false , asWrapped: asWrapped = false , address: address , ...props })=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center",
        justify: "between",
        className: "rk-stat-well",
        css: {
            backgroundColor: "$wellBackground",
            p: "$2",
            borderRadius: "$borderRadius",
            overflow: "hidden"
        },
        ...props
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            flex: 1,
            minWidth: "0",
            alignItems: "center",
            gap: "$2",
            mr: "$1"
        }
    }, label), asNative && !asWrapped && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
        amount: value,
        textStyle: "subtitle2",
        address: address,
        symbol: symbol
    }), asWrapped && !asNative && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bf67ac886f7190ba$export$2e2bcd8739ae039), {
        amount: value,
        address: address,
        symbol: symbol,
        textStyle: "subtitle2"
    }), !asNative && !asWrapped && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        as: "p",
        css: {
            marginLeft: "$2"
        },
        ellipsify: true
    }, value ? value : "-"));
$21b0b93f5539af30$var$Stat.toString = ()=>".rk-stat-well";
var $21b0b93f5539af30$export$2e2bcd8739ae039 = $21b0b93f5539af30$var$Stat;



const $6ce006317df879a9$var$TokenStats = ({ token: token , collection: collection , royaltyBps: royaltyBps = 0  })=>{
    let attributeFloor = token?.token?.attributes ? Math.max(...token.token.attributes.map((attr)=>Number(attr.floorAskPrice)), 0) : 0;
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            width: "100%",
            flexDirection: "row",
            "@bp1": {
                width: 220,
                flexDirection: "column"
            },
            p: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $dddafdadc17c858b$export$2e2bcd8739ae039), {
        collection: collection,
        token: token
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            flex: 1,
            mt: "$4",
            [`& ${0, $21b0b93f5539af30$export$2e2bcd8739ae039}:not(:last-child)`]: {
                mb: "$1"
            },
            mb: "$3"
        }
    }, [
        {
            id: 0,
            label: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle",
                css: {
                    minWidth: "0"
                },
                ellipsify: true
            }, "Creator Royalties"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a813136de1d75d50$export$2e2bcd8739ae039), {
                side: "right",
                width: 200,
                content: "A fee on every order that goes to the collection creator."
            })),
            value: `${royaltyBps * 0.01}%`
        },
        {
            id: 1,
            label: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle",
                css: {
                    minWidth: "0"
                },
                ellipsify: true
            }, "Last Sale"),
            value: token?.token?.lastSale?.price?.amount?.decimal || null,
            address: token?.token?.lastSale?.price?.currency?.contract,
            symbol: token?.token?.lastSale?.price?.currency?.symbol,
            asNative: true
        },
        {
            id: 2,
            label: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle",
                css: {
                    minWidth: "0"
                },
                ellipsify: true
            }, "Collection Floor"),
            value: collection?.floorAsk?.price?.amount?.native || 0,
            address: collection?.floorAsk?.price?.currency?.contract,
            symbol: collection?.floorAsk?.price?.currency?.symbol,
            asNative: true
        },
        {
            id: 3,
            label: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle",
                css: {
                    minWidth: "0"
                },
                ellipsify: true
            }, "Highest Trait Floor"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a813136de1d75d50$export$2e2bcd8739ae039), {
                side: "right",
                width: 200,
                content: "The floor price of the most valuable trait of a token."
            })),
            value: attributeFloor || collection?.floorAsk?.price?.amount?.native || 0,
            symbol: attributeFloor ? undefined : collection?.floorAsk?.price?.currency?.symbol,
            asNative: true
        }
    ].map((stat)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $21b0b93f5539af30$export$2e2bcd8739ae039), {
            key: stat.id,
            ...stat
        }))));
};
var $6ce006317df879a9$export$2e2bcd8739ae039 = $6ce006317df879a9$var$TokenStats;






const $2a86e3e4b64ecdab$var$StyledSwitch = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Root4, {
    all: "unset",
    cursor: "pointer",
    width: 46,
    height: 24,
    backgroundColor: "$neutralBgActive",
    borderRadius: "9999px",
    position: "relative",
    transition: "background-color 250ms linear",
    $$focusColor: "$colors$accentBorder",
    '&[data-state="checked"]': {
        backgroundColor: "$accentSolid"
    },
    "&:focus-visible": {
        boxShadow: "0 0 0 2px $$focusColor"
    }
});
const $2a86e3e4b64ecdab$var$Thumb = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Thumb, {
    display: "block",
    width: 20,
    height: 20,
    backgroundColor: "$buttonTextColor",
    borderRadius: "9999px",
    transition: "transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    transform: "translateX(4px)",
    willChange: "transform",
    $$borderColor: "$borderColor",
    //boxShadow: '0 0 0 1px $$borderColor',
    '&[data-state="checked"]': {
        transform: "translateX(22px)"
    }
});
const $2a86e3e4b64ecdab$var$Switch = (props)=>/*#__PURE__*/ (0, $TBcmg$react).createElement($2a86e3e4b64ecdab$var$StyledSwitch, {
        ...props
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($2a86e3e4b64ecdab$var$Thumb, null));
var $2a86e3e4b64ecdab$export$2e2bcd8739ae039 = $2a86e3e4b64ecdab$var$Switch;


const $b3c78645bdc4b2a4$var$MarketplaceToggle = ({ marketplace: marketplace , onSelection: onSelection , ...props })=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        ...props,
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            mr: "$2"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement("img", {
        src: marketplace.imageUrl,
        style: {
            height: 32,
            width: 32,
            borderRadius: 4
        }
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body2",
        css: {
            flex: 1
        }
    }, marketplace.name), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle",
        css: {
            mr: "$2"
        }
    }, "Marketplace fee: ", marketplace.fee?.percent, "%"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $2a86e3e4b64ecdab$export$2e2bcd8739ae039), {
        checked: marketplace.isSelected,
        onCheckedChange: onSelection
    }));
var $b3c78645bdc4b2a4$export$2e2bcd8739ae039 = $b3c78645bdc4b2a4$var$MarketplaceToggle;







const $5c0c2c3952297d70$var$StyledInput = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("input", {
    all: "unset",
    width: "100%",
    px: 16,
    py: 12,
    borderRadius: 8,
    fontFamily: "$body",
    fontSize: 16,
    color: "$neutralTextContrast",
    backgroundColor: "$inputBackground",
    $$focusColor: "$colors$accentBorderHover",
    "&:placeholder": {
        color: "$neutralText"
    },
    "&:focus": {
        boxShadow: "0 0 0 2px $$focusColor"
    },
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0
    },
    "&[type=number]": {
        "-moz-appearance": "textfield"
    }
});
const $5c0c2c3952297d70$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, $TBcmg$forwardRef)(({ children: children , icon: icon , containerCss: containerCss , iconCss: iconCss , ...props }, forwardedRef)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            ...containerCss,
            position: "relative"
        }
    }, icon && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: 16,
            color: "$neutralTextContrast",
            pointerEvents: "none",
            ...iconCss
        }
    }, icon), /*#__PURE__*/ (0, $TBcmg$react).createElement($5c0c2c3952297d70$var$StyledInput, {
        css: {
            pl: icon ? 48 : 16,
            ...props.css
        },
        ref: forwardedRef,
        ...props
    })));
var $5c0c2c3952297d70$export$2e2bcd8739ae039 = $5c0c2c3952297d70$export$f5b8910cec6cf069;





const $09a27344989ccc4f$export$e7345cb65e28db6f = ({ triggerCss: triggerCss , valueCss: valueCss , currencies: currencies , currency: currency , setCurrency: setCurrency  })=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039), {
        trigger: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).Trigger, {
            css: {
                width: "auto",
                p: 0,
                backgroundColor: "transparent",
                ...triggerCss
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).Value, {
            asChild: true
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            css: {
                ...valueCss
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $facfb14f3ab47807$export$2e2bcd8739ae039), {
            address: currency.contract,
            css: {
                height: 18
            }
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle1",
            color: "subtle",
            css: {
                ml: "$1"
            }
        }, currency.symbol)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).DownIcon, {
            style: {
                marginLeft: 6
            }
        })))),
        value: currency.contract,
        onValueChange: (value)=>{
            const option = currencies.find((option)=>option.contract == value);
            if (option) setCurrency(option);
        }
    }, currencies.map((option)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).Item, {
            key: option.contract,
            value: option.contract
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).ItemText, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            css: {
                gap: "$1"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $facfb14f3ab47807$export$2e2bcd8739ae039), {
            address: option.contract,
            css: {
                height: 18
            }
        }), option.symbol)))));
};


const $eeb0b846144b8094$var$MarketplacePriceInput = ({ marketplace: marketplace , collection: collection , currency: currency , currencies: currencies , setCurrency: setCurrency , usdPrice: usdPrice , quantity: quantity = 1 , nativeOnly: nativeOnly , onChange: onChange , onBlur: onBlur , ...props })=>{
    let profit = (1 - (marketplace.fee?.percent || 0) / 100 - (collection?.royalties?.bps || 0) * 0.0001) * Number(marketplace.truePrice) * quantity;
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        ...props,
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, !nativeOnly ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            mr: "$2"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement("img", {
        src: marketplace.imageUrl,
        style: {
            height: 32,
            width: 32,
            borderRadius: 4
        }
    })) : null, nativeOnly && currencies.length > 1 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $09a27344989ccc4f$export$e7345cb65e28db6f), {
        currency: currency,
        currencies: currencies,
        setCurrency: setCurrency,
        triggerCss: {
            mr: "$3",
            backgroundColor: "$neutralBgActive",
            borderRadius: 4,
            p: "$3",
            width: 120
        },
        valueCss: {
            justifyContent: "space-between",
            width: "100%"
        }
    }) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            width: "auto",
            height: 20
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $facfb14f3ab47807$export$2e2bcd8739ae039), {
        css: {
            height: 18
        },
        address: currency.contract
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body1",
        color: "subtle",
        css: {
            ml: "$1",
            mr: "$4"
        },
        as: "p"
    }, currency.symbol))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            flex: 1
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $5c0c2c3952297d70$export$2e2bcd8739ae039), {
        type: "number",
        value: marketplace.price,
        onChange: onChange,
        onBlur: onBlur,
        placeholder: "Enter a listing price"
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "end",
        css: {
            ml: "$3"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
        amount: profit,
        address: currency.contract,
        decimals: currency.decimals,
        symbol: currency?.symbol,
        textStyle: "h6",
        logoWidth: 18
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
        amount: profit * (usdPrice || 0),
        style: "subtitle2",
        color: "subtle"
    })));
};
var $eeb0b846144b8094$export$2e2bcd8739ae039 = $eeb0b846144b8094$var$MarketplacePriceInput;












(0, $TBcmg$dayjs).extend((0, $TBcmg$dayjspluginrelativeTimejs));
function $2f4c390a81073897$export$2e2bcd8739ae039(timestamp) {
    const [timeSince, setTimeSince] = (0, $TBcmg$useState)("");
    (0, $TBcmg$useEffect)(()=>{
        if (timestamp) setTimeSince((0, $TBcmg$dayjs).unix(timestamp).fromNow());
        else setTimeSince("");
    }, [
        timestamp
    ]);
    return timeSince;
}


const $773d945a602cf39a$var$Img = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("img", {
    width: 16,
    height: 16
});
const $773d945a602cf39a$var$ListingStat = ({ listing: listing , marketImg: marketImg , currency: currency , ...props })=>{
    const timeSince = (0, $2f4c390a81073897$export$2e2bcd8739ae039)(listing.expirationTime ? +listing.expirationTime : 0);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        className: "rk-stat-well",
        css: {
            backgroundColor: "$wellBackground",
            p: "$2",
            borderRadius: "$borderRadius",
            gap: "$1"
        },
        ...props
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        justify: "between"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
        amount: listing.weiPrice,
        textStyle: "subtitle2",
        address: currency.contract,
        decimals: currency.decimals,
        symbol: currency?.symbol
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement($773d945a602cf39a$var$Img, {
        src: marketImg
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle",
        as: "p",
        css: {
            flex: 1
        }
    }, listing.expirationTime ? `Expires ${timeSince}` : "No Expiration"));
};
$773d945a602cf39a$var$ListingStat.toString = ()=>".rk-stat-well";
var $773d945a602cf39a$export$2e2bcd8739ae039 = $773d945a602cf39a$var$ListingStat;


const $cbb82f380362051c$var$TokenListingDetails = ({ token: token , collection: collection , listingData: listingData , currency: currency  })=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            width: "100%",
            flexDirection: "row",
            "@bp1": {
                width: 220,
                flexDirection: "column"
            },
            p: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $dddafdadc17c858b$export$2e2bcd8739ae039), {
        collection: collection,
        token: token
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            flex: 1,
            mt: "$4",
            [`& ${0, $21b0b93f5539af30$export$2e2bcd8739ae039}:not(:last-child)`]: {
                mb: "$1"
            },
            mb: "$3"
        }
    }, listingData.map((data, i)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $773d945a602cf39a$export$2e2bcd8739ae039), {
            key: i,
            listing: data.listing,
            marketImg: data.marketplace.imageUrl || "",
            currency: currency
        }))));
var $cbb82f380362051c$export$2e2bcd8739ae039 = $cbb82f380362051c$var$TokenListingDetails;






const $0f4eeb921315fd4d$var$Img = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("img", {
    width: 56,
    height: 56,
    borderRadius: 4,
    objectFit: "cover",
    "& + img": {
        ml: -20
    }
});
const $0f4eeb921315fd4d$var$ProgressDot = (0, $4a58f4053e821189$export$3817b7a54a07cec7)((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
    borderRadius: "50%",
    width: 5,
    height: 5
});
const $0f4eeb921315fd4d$var$loadingStart = (0, $4a58f4053e821189$export$d25ddfdf17c3ad3e)({
    "0%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    },
    "20%": {
        transform: "scale(1)",
        backgroundColor: "$accentText"
    },
    "100%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    }
});
const $0f4eeb921315fd4d$var$loadingMiddle = (0, $4a58f4053e821189$export$d25ddfdf17c3ad3e)({
    "0%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    },
    "20%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    },
    "40%": {
        transform: "scale(1)",
        backgroundColor: "$accentText"
    },
    "100%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    }
});
const $0f4eeb921315fd4d$var$loadingEnd = (0, $4a58f4053e821189$export$d25ddfdf17c3ad3e)({
    "0%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    },
    "40%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    },
    "60%": {
        transform: "scale(1)",
        backgroundColor: "$accentText"
    },
    "100%": {
        transform: "scale(0.8)",
        backgroundColor: "$neutralSolid"
    }
});
const $0f4eeb921315fd4d$var$TransactionProgress = ({ fromImg: fromImg , toImgs: toImgs , ...props })=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        ...props,
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($0f4eeb921315fd4d$var$Img, {
        src: fromImg
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            gap: "$1",
            mx: 23
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($0f4eeb921315fd4d$var$ProgressDot, {
        css: {
            animation: `${$0f4eeb921315fd4d$var$loadingStart} 1s ease-in-out infinite`
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement($0f4eeb921315fd4d$var$ProgressDot, {
        css: {
            animation: `${$0f4eeb921315fd4d$var$loadingMiddle} 1s ease-in-out infinite`
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement($0f4eeb921315fd4d$var$ProgressDot, {
        css: {
            animation: `${$0f4eeb921315fd4d$var$loadingEnd} 1s ease-in-out infinite`
        }
    })), toImgs.map((src, i)=>/*#__PURE__*/ (0, $TBcmg$react).createElement($0f4eeb921315fd4d$var$Img, {
            key: i,
            src: src
        })));
};
var $0f4eeb921315fd4d$export$2e2bcd8739ae039 = $0f4eeb921315fd4d$var$TransactionProgress;








const $d6ae44a4b381214a$var$SigninStep = ({ css: css  })=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            color: "$neutralText",
            ...css
        },
        direction: "column",
        justify: "center",
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6",
        color: "base",
        css: {
            mb: "$2",
            textAlign: "center"
        }
    }, "Sign in to Blur"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle",
        css: {
            mb: 20,
            textAlign: "center"
        }
    }, "This is a one-time approval process that takes place once a month"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faPenNib),
        width: 32,
        height: 32,
        style: {
            height: 32
        }
    }));
};
var $d6ae44a4b381214a$export$2e2bcd8739ae039 = $d6ae44a4b381214a$var$SigninStep;





const $5bc22b51ac8fa039$var$ModalCopy = {
    title: "List Item for sale",
    ctaClose: "Close",
    ctaSetPrice: "Set your price",
    ctaList: "List for Sale",
    ctaAwaitingApproval: "Waiting for Approval",
    ctaEditListing: "Edit Listing",
    ctaRetry: "Retry",
    ctaGoToToken: "Go to Token"
};
const $5bc22b51ac8fa039$var$Image = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("img", {});
const $5bc22b51ac8fa039$var$Span = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("span", {});
const $5bc22b51ac8fa039$var$ContentContainer = (0, $4a58f4053e821189$export$3817b7a54a07cec7)((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
    width: "100%",
    borderColor: "$borderColor",
    flexDirection: "column",
    "@bp1": {
        flexDirection: "row"
    }
});
const $5bc22b51ac8fa039$var$MainContainer = (0, $4a58f4053e821189$export$3817b7a54a07cec7)((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
    flex: 1,
    borderColor: "$borderColor",
    borderTopWidth: 1,
    borderLeftWidth: 0,
    "@bp1": {
        borderTopWidth: 0,
        borderLeftWidth: 1
    },
    defaultVariants: {
        direction: "column"
    }
});
const $5bc22b51ac8fa039$var$MINIMUM_AMOUNT = 0.000001;
function $5bc22b51ac8fa039$export$d23efc006864db2f({ openState: openState , trigger: trigger , tokenId: tokenId , collectionId: collectionId , currencies: currencies , nativeOnly: nativeOnly , normalizeRoyalties: normalizeRoyalties , enableOnChainRoyalties: enableOnChainRoyalties = false , oracleEnabled: oracleEnabled = false , copyOverrides: copyOverrides , feesBps: feesBps , onGoToToken: onGoToToken , onListingComplete: onListingComplete , onListingError: onListingError , onClose: onClose  }) {
    const copy = {
        ...$5bc22b51ac8fa039$var$ModalCopy,
        ...copyOverrides
    };
    const [open, setOpen] = (0, $b69d00be56c1bdb6$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const reservoirChain = client?.currentChain();
    const [marketplacesToApprove, setMarketplacesToApprove] = (0, $TBcmg$useState)([]);
    const providerOptionsContext = (0, $TBcmg$useContext)((0, $f4609ce2cb6b416b$export$f66a1c3c9465af21));
    if (oracleEnabled) nativeOnly = true;
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0dfcd962a810a554$export$5cb91f178b51ac3), {
        open: open,
        tokenId: tokenId,
        collectionId: collectionId,
        currencies: currencies,
        normalizeRoyalties: normalizeRoyalties,
        enableOnChainRoyalties: enableOnChainRoyalties,
        oracleEnabled: oracleEnabled,
        feesBps: feesBps
    }, ({ token: token , quantityAvailable: quantityAvailable , collection: collection , usdPrice: usdPrice , listStep: listStep , expirationOption: expirationOption , expirationOptions: expirationOptions , marketplaces: marketplaces , unapprovedMarketplaces: unapprovedMarketplaces , isFetchingOnChainRoyalties: isFetchingOnChainRoyalties , localMarketplace: localMarketplace , listingData: listingData , transactionError: transactionError , stepData: stepData , currencies: currencies , currency: currency , quantity: quantity , royaltyBps: royaltyBps , setListStep: setListStep , listToken: listToken , setMarketPrice: setMarketPrice , setCurrency: setCurrency , toggleMarketplace: toggleMarketplace , setExpirationOption: setExpirationOption , setQuantity: setQuantity  })=>{
        const tokenImage = token && token.token?.imageSmall ? token.token.imageSmall : collection?.image;
        (0, $TBcmg$useEffect)(()=>{
            if (nativeOnly) setListStep((0, $0dfcd962a810a554$export$7f4afd65e1e67072).SetPrice);
        }, [
            nativeOnly,
            open
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (unapprovedMarketplaces.length > 0) {
                const unapprovedNames = unapprovedMarketplaces.reduce((names, marketplace)=>{
                    if (marketplace.name && localMarketplace?.orderKind !== marketplace.orderKind) names.push(marketplace.name);
                    return names;
                }, []);
                setMarketplacesToApprove(marketplaces.filter((marketplace)=>marketplace.isSelected && marketplace.name && unapprovedNames.includes(marketplace.name)));
            } else setMarketplacesToApprove([]);
        }, [
            unapprovedMarketplaces,
            marketplaces,
            localMarketplace
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (listStep === (0, $0dfcd962a810a554$export$7f4afd65e1e67072).Complete && onListingComplete) {
                const data = {
                    tokenId: tokenId,
                    collectionId: collectionId,
                    listings: listingData
                };
                onListingComplete(data);
            }
        }, [
            listStep
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (transactionError && onListingError) {
                const data = {
                    tokenId: tokenId,
                    collectionId: collectionId,
                    listings: listingData
                };
                onListingError(transactionError, data);
            }
        }, [
            transactionError
        ]);
        const availableMarketplaces = marketplaces.filter((market)=>{
            const isNative = market.orderbook === "reservoir";
            return nativeOnly ? market.listingEnabled && isNative : market.listingEnabled;
        });
        const selectedMarketplaces = availableMarketplaces.filter((marketplace)=>marketplace.isSelected);
        const quantitySelectionAvailable = selectedMarketplaces.every((marketplace)=>marketplace.orderbook === "reservoir" || marketplace.orderbook === "opensea");
        let loading = !token || !collection || (enableOnChainRoyalties ? isFetchingOnChainRoyalties : false);
        const contentContainerCss = {
            borderBottomWidth: providerOptionsContext.disablePoweredByReservoir ? 0 : 1,
            marginBottom: providerOptionsContext.disablePoweredByReservoir ? 0 : 12
        };
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $32d03e1adcee2721$export$2b77a92f1a5ad772), {
            trigger: trigger,
            size: (0, $32d03e1adcee2721$export$e8598848ef5f29c0).LG,
            title: copy.title,
            open: open,
            onOpenChange: (open)=>{
                if (!open && onClose) {
                    const data = {
                        tokenId: tokenId,
                        collectionId: collectionId,
                        listings: listingData
                    };
                    onClose(data, stepData, listStep);
                }
                setOpen(open);
            },
            loading: loading
        }, !loading && listStep == (0, $0dfcd962a810a554$export$7f4afd65e1e67072).SelectMarkets && /*#__PURE__*/ (0, $TBcmg$react).createElement($5bc22b51ac8fa039$var$ContentContainer, {
            css: {
                ...contentContainerCss
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6ce006317df879a9$export$2e2bcd8739ae039), {
            token: token,
            collection: collection,
            royaltyBps: royaltyBps
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement($5bc22b51ac8fa039$var$MainContainer, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                flex: 1
            }
        }, currencies.length > 1 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle1",
            as: (0, $602940fa56061b3b$export$2e2bcd8739ae039),
            css: {
                mb: "$4",
                gap: "$2",
                alignItems: "center"
            }
        }, "List item in", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $09a27344989ccc4f$export$e7345cb65e28db6f), {
            currency: currency,
            currencies: currencies,
            setCurrency: setCurrency
        })) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle1",
            as: "h3",
            css: {
                mb: "$4"
            }
        }, availableMarketplaces.length > 1 ? "Select Marketplaces" : "Available Marketplace"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            as: "p",
            color: "subtle"
        }, "Default"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            css: {
                mb: "$4",
                mt: "$2"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                mr: "$2"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement("img", {
            src: localMarketplace?.imageUrl || "",
            style: {
                height: 32,
                width: 32,
                borderRadius: 4,
                visibility: localMarketplace?.imageUrl ? "visible" : "hidden"
            }
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                mr: "$2",
                flex: 1
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3"
        }, localMarketplace?.name), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                alignItems: "center",
                gap: 8
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "subtle",
            as: "div"
        }, "on Reservoir"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a813136de1d75d50$export$2e2bcd8739ae039), {
            side: "bottom",
            width: 200,
            content: "Listings made on this marketplace will be distributed across the reservoir ecosystem"
        }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            css: {
                mr: "$2"
            }
        }, "Marketplace fee:", " ", (localMarketplace?.fee?.bps || 0) / 10000 * 100, "%")), availableMarketplaces.length > 1 && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            as: "p",
            css: {
                mb: "$2"
            }
        }, "Select other marketplaces to list on"), availableMarketplaces.filter((marketplace)=>marketplace.orderbook !== "reservoir").map((marketplace)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
                key: marketplace.name,
                css: {
                    mb: "$3"
                }
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c78645bdc4b2a4$export$2e2bcd8739ae039), {
                marketplace: marketplace,
                onSelection: ()=>{
                    toggleMarketplace(marketplace);
                }
            })))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                width: "100%"
            }
        }, marketplacesToApprove.length > 0 && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            color: "accent",
            style: "subtitle2",
            css: {
                my: 10,
                width: "100%",
                textAlign: "center",
                display: "block"
            }
        }, `Additional Gas fee required to approve listing (${marketplacesToApprove.map((marketplace)=>marketplace.name).join(", ")})`), oracleEnabled && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "subtle",
            css: {
                mb: 10,
                textAlign: "center",
                width: "100%",
                display: "block"
            }
        }, "You can change or cancel your listing for free on", " ", localMarketplace?.name, "."), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>setListStep((0, $0dfcd962a810a554$export$7f4afd65e1e67072).SetPrice),
            css: {
                width: "100%"
            }
        }, copy.ctaSetPrice)))), !loading && listStep == (0, $0dfcd962a810a554$export$7f4afd65e1e67072).SetPrice && /*#__PURE__*/ (0, $TBcmg$react).createElement($5bc22b51ac8fa039$var$ContentContainer, {
            css: {
                ...contentContainerCss
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6ce006317df879a9$export$2e2bcd8739ae039), {
            token: token,
            collection: collection,
            royaltyBps: royaltyBps
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement($5bc22b51ac8fa039$var$MainContainer, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                flex: 1
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            css: {
                mb: "$4"
            }
        }, !nativeOnly ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            color: "ghost",
            size: "none",
            css: {
                mr: "$2",
                color: "$neutralText"
            },
            onClick: ()=>setListStep((0, $0dfcd962a810a554$export$7f4afd65e1e67072).SelectMarkets)
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faChevronLeft),
            width: 16,
            height: 16
        })) : null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle1",
            as: "h3"
        }, "Set Your Price")), quantityAvailable > 1 && quantitySelectionAvailable && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                mb: "$2"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: "div",
            css: {
                mb: "$2"
            },
            style: "subtitle2",
            color: "subtle"
        }, "Quantity"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039), {
            value: `${quantity}`,
            onValueChange: (value)=>{
                setQuantity(Number(value));
            }
        }, [
            ...Array(quantityAvailable)
        ].map((_a, i)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).Item, {
                key: i,
                value: `${i + 1}`
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).ItemText, null, i + 1))))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            css: {
                mb: 24,
                display: "inline-block"
            }
        }, quantityAvailable, " items available")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                mb: "$2"
            },
            justify: "between"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            as: "p"
        }, quantityAvailable > 1 && quantitySelectionAvailable ? "Unit Price" : "Price"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                alignItems: "center",
                gap: 8
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            as: "p"
        }, quantityAvailable > 1 && quantitySelectionAvailable ? "Total Profit" : "Profit"), nativeOnly ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c42dc96a91e1fd$export$2e2bcd8739ae039), {
            side: "left",
            content: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                direction: "column",
                css: {
                    gap: "$3"
                }
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                justify: "between",
                css: {
                    gap: "$4"
                }
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "body3"
            }, "Marketplace Fee"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle"
            }, localMarketplace?.fee?.percent || 0, "%")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                justify: "between",
                css: {
                    gap: "$4"
                }
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "body3"
            }, "Creator Royalties"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle"
            }, (royaltyBps || 0) * 0.01, "%")))
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: "$neutralText"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faInfoCircle)
        }))) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a813136de1d75d50$export$2e2bcd8739ae039), {
            side: "left",
            width: 200,
            content: `How much ${currency.symbol} you will receive after marketplace fees and creator royalties are subtracted.`
        }))), selectedMarketplaces.map((marketplace)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
                key: marketplace.name,
                css: {
                    mb: "$3"
                }
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $eeb0b846144b8094$export$2e2bcd8739ae039), {
                marketplace: marketplace,
                collection: collection,
                currency: currency,
                currencies: currencies,
                setCurrency: setCurrency,
                usdPrice: usdPrice,
                quantity: quantity,
                nativeOnly: nativeOnly,
                onChange: (e)=>{
                    setMarketPrice(e.target.value, marketplace);
                },
                onBlur: ()=>{
                    if (marketplace.price === "") setMarketPrice(0, marketplace);
                }
            }), marketplace.truePrice !== "" && marketplace.truePrice !== null && Number(marketplace.truePrice) !== 0 && Number(marketplace.truePrice) < $5bc22b51ac8fa039$var$MINIMUM_AMOUNT && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "body2",
                color: "error"
            }, "Amount must be higher than ", $5bc22b51ac8fa039$var$MINIMUM_AMOUNT)), collection && collection?.floorAsk?.price?.amount?.native !== undefined && marketplace.truePrice !== "" && marketplace.truePrice !== null && Number(marketplace.truePrice) !== 0 && Number(marketplace.truePrice) >= $5bc22b51ac8fa039$var$MINIMUM_AMOUNT && currency.contract === (0, $TBcmg$zeroAddress) && Number(marketplace.truePrice) < collection?.floorAsk?.price.amount.native && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "body2",
                color: "error"
            }, "Price is", " ", Math.round((collection.floorAsk.price.amount.native - +marketplace.truePrice) / ((collection.floorAsk.price.amount.native + +marketplace.truePrice) / 2) * 100000) / 1000, "% below the floor")))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                mb: "$3",
                mt: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: "div",
            css: {
                mb: "$2"
            },
            style: "subtitle2",
            color: "subtle"
        }, "Expiration Date"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039), {
            value: expirationOption?.text || "",
            onValueChange: (value)=>{
                const option = expirationOptions.find((option)=>option.value == value);
                if (option) setExpirationOption(option);
            }
        }, expirationOptions.map((option)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).Item, {
                key: option.text,
                value: option.value
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).ItemText, null, option.text)))))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                width: "100%"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: selectedMarketplaces.some((marketplace)=>marketplace.price === "" || marketplace.price == 0 || Number(marketplace.price) < $5bc22b51ac8fa039$var$MINIMUM_AMOUNT),
            onClick: listToken,
            css: {
                width: "100%"
            }
        }, copy.ctaList)))), !loading && listStep == (0, $0dfcd962a810a554$export$7f4afd65e1e67072).ListItem && /*#__PURE__*/ (0, $TBcmg$react).createElement($5bc22b51ac8fa039$var$ContentContainer, {
            css: {
                ...contentContainerCss
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $cbb82f380362051c$export$2e2bcd8739ae039), {
            token: token,
            collection: collection,
            listingData: listingData,
            currency: currency
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement($5bc22b51ac8fa039$var$MainContainer, {
            css: {
                p: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $2e70e0c380877307$export$2e2bcd8739ae039), {
            value: stepData?.stepProgress || 0,
            max: stepData?.totalSteps || 0
        }), transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $f9c59e90de25e993$export$2e2bcd8739ae039), {
            css: {
                mt: 24
            }
        }), stepData && stepData.currentStep.id === "auth" ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $d6ae44a4b381214a$export$2e2bcd8739ae039), {
            css: {
                mt: 48,
                mb: "$4",
                gap: 20
            }
        }) : null, stepData && stepData.currentStep.id !== "auth" ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            css: {
                textAlign: "center",
                mt: 48,
                mb: 28
            },
            style: "subtitle1"
        }, stepData.currentStep.kind === "transaction" ? "Approve access to items\nin your wallet" : "Confirm listing in your wallet"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0f4eeb921315fd4d$export$2e2bcd8739ae039), {
            justify: "center",
            fromImg: tokenImage,
            toImgs: stepData?.listingData.map((listing)=>listing.marketplace.imageUrl || "")
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            css: {
                textAlign: "center",
                mt: 24,
                maxWidth: 395,
                mx: "auto",
                mb: "$4"
            },
            style: "body3",
            color: "subtle"
        }, stepData?.currentStep.description)) : null, !stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                height: "100%"
            },
            justify: "center",
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null)), !transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                width: "100%",
                mt: "auto"
            },
            disabled: true
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), copy.ctaAwaitingApproval), transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                mt: "auto",
                gap: 10
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            color: "secondary",
            css: {
                flex: 1
            },
            onClick: ()=>setListStep((0, $0dfcd962a810a554$export$7f4afd65e1e67072).SetPrice)
        }, copy.ctaEditListing), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                flex: 1
            },
            onClick: ()=>listToken()
        }, copy.ctaRetry)))), !loading && listStep == (0, $0dfcd962a810a554$export$7f4afd65e1e67072).Complete && /*#__PURE__*/ (0, $TBcmg$react).createElement($5bc22b51ac8fa039$var$ContentContainer, {
            css: {
                ...contentContainerCss
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $cbb82f380362051c$export$2e2bcd8739ae039), {
            token: token,
            collection: collection,
            listingData: listingData,
            currency: currency
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement($5bc22b51ac8fa039$var$MainContainer, {
            css: {
                p: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $2e70e0c380877307$export$2e2bcd8739ae039), {
            value: stepData?.totalSteps || 0,
            max: stepData?.totalSteps || 0
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            justify: "center",
            direction: "column",
            css: {
                flex: 1,
                textAlign: "center",
                py: "$5"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: "$successAccent",
                mb: 24
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCheckCircle),
            size: "3x"
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h5",
            css: {
                mb: "$2"
            },
            as: "h5"
        }, "Your item has been listed!"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "subtle",
            as: "p",
            css: {
                mb: 24,
                maxWidth: 300,
                overflow: "hidden"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            color: "accent",
            ellipsify: true,
            style: "body3"
        }, token?.token?.name ? token?.token?.name : `#${token?.token?.tokenId}`), " ", "from", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement($5bc22b51ac8fa039$var$Span, {
            css: {
                color: "$accentText"
            }
        }, token?.token?.collection?.name), " ", "has been listed for sale"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            as: "p",
            css: {
                mb: "$3"
            }
        }, "View Listing on"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                gap: "$3"
            }
        }, listingData.map((data)=>{
            const source = data.listing.orderbook === "reservoir" && client?.source ? client?.source : data.marketplace.domain;
            return /*#__PURE__*/ (0, $TBcmg$react).createElement("a", {
                key: data.listing.orderbook,
                target: "_blank",
                href: `${reservoirChain?.baseApiUrl}/redirect/sources/${source}/tokens/${token?.token?.contract}:${token?.token?.tokenId}/link/v2`
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement($5bc22b51ac8fa039$var$Image, {
                css: {
                    width: 24
                },
                src: data.marketplace.imageUrl
            }));
        }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                flexDirection: "column",
                gap: "$3",
                "@bp1": {
                    flexDirection: "row"
                }
            }
        }, !!onGoToToken ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                setOpen(false);
            },
            css: {
                flex: 1
            },
            color: "secondary"
        }, copy.ctaClose), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            style: {
                flex: 1
            },
            color: "primary",
            onClick: ()=>{
                onGoToToken();
            }
        }, copy.ctaGoToToken)) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                setOpen(false);
            },
            style: {
                flex: 1
            },
            color: "primary"
        }, copy.ctaClose)))));
    });
}
$5bc22b51ac8fa039$export$d23efc006864db2f.Custom = (0, $0dfcd962a810a554$export$5cb91f178b51ac3);








//@ts-ignore
const $b31bbf36f2fe9ca4$var$Flatpickr = (0, $TBcmg$reactflatpickr).default;
var $b31bbf36f2fe9ca4$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $TBcmg$forwardRef)(({ options: options , onChange: onChange , value: value , defaultValue: defaultValue , ...inputProps }, forwardedRef)=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($b31bbf36f2fe9ca4$var$Flatpickr, {
        ref: forwardedRef,
        value: value,
        options: {
            dateFormat: "m/d/Y h:i K",
            ...options
        },
        onChange: onChange,
        defaultValue: defaultValue,
        render: ({ defaultValue: defaultValue  }, ref)=>{
            return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $5c0c2c3952297d70$export$2e2bcd8739ae039), {
                ...inputProps,
                ref: ref,
                defaultValue: defaultValue
            });
        }
    });
});










const $ccbd22d7b24d8923$var$wrappedContractNames = {
    1: "WETH",
    5: "WETH",
    10: "WETH",
    56: "WBNB",
    137: "WMATIC",
    42161: "WETH",
    999: "WETH",
    80001: "WMATIC",
    84531: "WETH",
    534353: "WETH",
    7777777: "WETH",
    11155111: "WETH"
};
var $ccbd22d7b24d8923$export$2e2bcd8739ae039 = $ccbd22d7b24d8923$var$wrappedContractNames;




const $2b3bdb31da73e768$var$expirationOptions = [
    ...(0, $4dd727d17c3f54df$export$2e2bcd8739ae039),
    {
        text: "Custom",
        value: "custom",
        relativeTime: null,
        relativeTimeUnit: null
    }
];
var $2b3bdb31da73e768$export$7a92ddb9e11f37f7;
(function(BidStep) {
    BidStep[BidStep["SetPrice"] = 0] = "SetPrice";
    BidStep[BidStep["Offering"] = 1] = "Offering";
    BidStep[BidStep["Complete"] = 2] = "Complete";
})($2b3bdb31da73e768$export$7a92ddb9e11f37f7 || ($2b3bdb31da73e768$export$7a92ddb9e11f37f7 = {}));
const $2b3bdb31da73e768$export$89d91658eb2b6698 = ({ open: open , tokenId: tokenId , collectionId: collectionId , attribute: attribute , normalizeRoyalties: normalizeRoyalties , currencies: currencies , oracleEnabled: oracleEnabled = false , feesBps: feesBps , children: children  })=>{
    const { data: wallet  } = (0, $TBcmg$useWalletClient)();
    const [bidStep, setBidStep] = (0, $TBcmg$useState)($2b3bdb31da73e768$export$7a92ddb9e11f37f7.SetPrice);
    const [transactionError, setTransactionError] = (0, $TBcmg$useState)();
    const [bidAmountPerUnit, setBidAmountPerUnit] = (0, $TBcmg$useState)("");
    const [quantity, setQuantity] = (0, $TBcmg$useState)(1);
    const [expirationOption, setExpirationOption] = (0, $TBcmg$useState)($2b3bdb31da73e768$var$expirationOptions[3]);
    const [hasEnoughNativeCurrency, setHasEnoughNativeCurrency] = (0, $TBcmg$useState)(false);
    const [hasEnoughWrappedCurrency, setHasEnoughWrappedCurrency] = (0, $TBcmg$useState)(false);
    const [amountToWrap, setAmountToWrap] = (0, $TBcmg$useState)("");
    const [stepData, setStepData] = (0, $TBcmg$useState)(null);
    const [bidData, setBidData] = (0, $TBcmg$useState)(null);
    const contract = collectionId ? collectionId?.split(":")[0] : undefined;
    const [trait, setTrait] = (0, $TBcmg$useState)(attribute);
    const [attributes, setAttributes] = (0, $TBcmg$useState)();
    const chainCurrency = (0, $57dcd81a309fc6e2$export$2e2bcd8739ae039)();
    const nativeWrappedContractAddress = chainCurrency.chainId in (0, $539986c326843873$export$2e2bcd8739ae039) ? (0, $539986c326843873$export$2e2bcd8739ae039)[chainCurrency.chainId] : (0, $539986c326843873$export$2e2bcd8739ae039)[1];
    const nativeWrappedContractName = chainCurrency.chainId in (0, $ccbd22d7b24d8923$export$2e2bcd8739ae039) ? (0, $ccbd22d7b24d8923$export$2e2bcd8739ae039)[chainCurrency.chainId] : (0, $ccbd22d7b24d8923$export$2e2bcd8739ae039)[1];
    const defaultCurrency = {
        contract: nativeWrappedContractAddress,
        symbol: nativeWrappedContractName
    };
    const [currency, setCurrency] = (0, $TBcmg$useState)(currencies && currencies[0] ? currencies[0] : defaultCurrency);
    const wrappedContractAddress = currency ? currency.contract : nativeWrappedContractAddress;
    const wrappedContractName = currency ? currency.symbol : nativeWrappedContractName;
    const { data: tokens  } = (0, $074b4666df4341a7$export$2e2bcd8739ae039)(open && tokenId !== undefined && {
        tokens: [
            `${contract}:${tokenId}`
        ],
        includeTopBid: true,
        normalizeRoyalties: normalizeRoyalties
    }, {
        revalidateFirstPage: true
    });
    const { data: traits  } = (0, $7c7b75a236ce465b$export$2e2bcd8739ae039)(open && !tokenId ? collectionId : undefined);
    const { data: collections  } = (0, $afd6276a623787c2$export$2e2bcd8739ae039)(open && {
        id: collectionId,
        includeTopBid: true,
        normalizeRoyalties: normalizeRoyalties
    });
    const collection = collections && collections[0] ? collections[0] : undefined;
    const token = tokens && tokens.length > 0 ? tokens[0] : undefined;
    const usdConversion = (0, $b5d8dec284676ed1$export$2e2bcd8739ae039)(open ? "USD" : undefined, wrappedContractName);
    const usdPrice = usdConversion.length > 0 ? usdConversion[0].price : null;
    const totalBidAmount = Number(bidAmountPerUnit) * Math.max(1, quantity);
    const totalBidAmountUsd = totalBidAmount * (usdPrice || 0);
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const { address: address  } = (0, $TBcmg$useAccount)();
    const { data: balance  } = (0, $TBcmg$useBalance)({
        address: address,
        watch: open,
        chainId: client?.currentChain()?.id
    });
    const { data: wrappedBalance  } = (0, $TBcmg$useBalance)({
        token: wrappedContractAddress,
        address: address,
        watch: open,
        chainId: client?.currentChain()?.id
    });
    const { chain: chain  } = (0, $TBcmg$useNetwork)();
    const canAutomaticallyConvert = !currency || currency.contract === nativeWrappedContractAddress;
    let convertLink = "";
    if (canAutomaticallyConvert) convertLink = chain?.id === (0, $TBcmg$mainnet).id || chain?.id === (0, $TBcmg$goerli).id ? `https://app.uniswap.org/#/swap?theme=dark&exactAmount=${amountToWrap}&chain=${chain?.network || "mainnet"}&inputCurrency=eth&outputCurrency=${wrappedContractAddress}` : `https://app.uniswap.org/#/swap?theme=dark&exactAmount=${amountToWrap}`;
    else convertLink = `https://jumper.exchange/?toChain=${chain?.id}&toToken=${wrappedContractAddress}`;
    const feeBps = (0, $TBcmg$useMemo)(()=>{
        let bpsFees = feesBps || client?.marketplaceFees;
        if (bpsFees) return bpsFees.reduce((total, fee)=>{
            const bps = Number(fee.split(":")[1]);
            total += bps;
            return total;
        }, 0);
    }, [
        feesBps,
        client?.marketplaceFees,
        currency
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (totalBidAmount !== 0) {
            const bid = (0, $TBcmg$parseUnits)(`${totalBidAmount}`, wrappedBalance?.decimals || 18);
            if (!wrappedBalance?.value || wrappedBalance?.value < bid) {
                setHasEnoughWrappedCurrency(false);
                const wrappedAmount = wrappedBalance?.value || 0n;
                const amountToWrap = bid - wrappedAmount;
                setAmountToWrap((0, $6f54b4a5aad888ed$export$87710fd8420713d9)(amountToWrap, 5));
                if (!balance?.value || balance.value < amountToWrap) setHasEnoughNativeCurrency(false);
                else setHasEnoughNativeCurrency(true);
            } else {
                setHasEnoughWrappedCurrency(true);
                setHasEnoughNativeCurrency(true);
                setAmountToWrap("");
            }
        } else {
            setHasEnoughNativeCurrency(true);
            setHasEnoughWrappedCurrency(true);
            setAmountToWrap("");
        }
    }, [
        totalBidAmount,
        balance,
        wrappedBalance
    ]);
    (0, $TBcmg$useEffect)(()=>{
        const validAttributes = traits ? traits.filter((attribute)=>attribute.values && attribute.values.length > 0) : undefined;
        setAttributes(validAttributes);
    }, [
        traits
    ]);
    (0, $TBcmg$useEffect)(()=>{
        const validAttributes = traits ? traits.filter((attribute)=>attribute.values && attribute.values.length > 0) : undefined;
        setAttributes(validAttributes);
    }, [
        traits
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (!open) {
            setBidStep($2b3bdb31da73e768$export$7a92ddb9e11f37f7.SetPrice);
            setExpirationOption($2b3bdb31da73e768$var$expirationOptions[3]);
            setHasEnoughNativeCurrency(false);
            setHasEnoughWrappedCurrency(false);
            setAmountToWrap("");
            setBidAmountPerUnit("");
            setQuantity(1);
            setStepData(null);
            setBidData(null);
            setTransactionError(null);
            setTrait(undefined);
        } else setTrait(attribute);
        setCurrency(currencies && currencies[0] ? currencies[0] : defaultCurrency);
    }, [
        open
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (currencies && currencies.length > 5) console.warn("The BidModal UI was designed to have a maximum of 5 currencies, going above 5 may degrade the user experience.");
    }, [
        currencies
    ]);
    const placeBid = (0, $TBcmg$useCallback)(()=>{
        if (!wallet) {
            const error = new Error("Missing a wallet/signer");
            setTransactionError(error);
            throw error;
        }
        if (!tokenId && !collectionId) {
            const error = new Error("Missing tokenId and collectionId");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        setBidStep($2b3bdb31da73e768$export$7a92ddb9e11f37f7.Offering);
        setTransactionError(null);
        setBidData(null);
        const atomicBidAmount = (0, $TBcmg$parseUnits)(`${totalBidAmount}`, currency?.decimals || 18).toString();
        const bid = {
            weiPrice: atomicBidAmount,
            orderbook: "reservoir",
            orderKind: "seaport",
            attributeKey: trait?.key,
            attributeValue: trait?.value
        };
        if (feesBps && feesBps?.length > 0) bid.fees = feesBps;
        else if (!feesBps) delete bid.fees;
        if (currency) bid.currency = currency.contract;
        if (tokenId && collectionId) {
            const contract = collectionId ? collectionId?.split(":")[0] : undefined;
            bid.token = `${contract}:${tokenId}`;
        } else if (collectionId) bid.collection = collectionId;
        if (expirationOption.relativeTime) {
            if (expirationOption.relativeTimeUnit) bid.expirationTime = (0, $TBcmg$dayjs)().add(expirationOption.relativeTime, expirationOption.relativeTimeUnit).unix().toString();
            else bid.expirationTime = `${expirationOption.relativeTime}`;
        }
        if (oracleEnabled) bid.options = {
            "seaport-v1.4": {
                useOffChainCancellation: true
            }
        };
        if (quantity > 1) bid.quantity = quantity;
        setBidData(bid);
        client.actions.placeBid({
            wallet: wallet,
            bids: [
                bid
            ],
            onProgress: (steps)=>{
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let incompleteStepItemIndex = null;
                let incompleteStepIndex = null;
                executableSteps.find((step, i)=>{
                    if (!step.items) return false;
                    incompleteStepItemIndex = step.items.findIndex((item)=>item.status == "incomplete");
                    if (incompleteStepItemIndex !== -1) {
                        incompleteStepIndex = i;
                        return true;
                    }
                });
                if (incompleteStepIndex !== null) setStepData({
                    totalSteps: stepCount,
                    stepProgress: incompleteStepIndex,
                    currentStep: executableSteps[incompleteStepIndex]
                });
                else setBidStep($2b3bdb31da73e768$export$7a92ddb9e11f37f7.Complete);
            }
        }).catch((e)=>{
            //@ts-ignore
            const transactionError = new Error(e?.message || "", {
                cause: e
            });
            setTransactionError(transactionError);
        });
    }, [
        tokenId,
        collectionId,
        currency,
        client,
        wallet,
        totalBidAmount,
        expirationOption,
        trait,
        quantity,
        feesBps
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, children({
        token: token,
        collection: collection,
        attributes: attributes,
        usdPrice: usdPrice,
        balance: balance,
        wrappedBalance: wrappedBalance,
        wrappedContractName: wrappedContractName,
        wrappedContractAddress: wrappedContractAddress,
        convertLink: convertLink,
        canAutomaticallyConvert: canAutomaticallyConvert,
        bidAmountPerUnit: bidAmountPerUnit,
        totalBidAmount: totalBidAmount,
        quantity: quantity,
        setQuantity: setQuantity,
        bidData: bidData,
        totalBidAmountUsd: totalBidAmountUsd,
        bidStep: bidStep,
        hasEnoughNativeCurrency: hasEnoughNativeCurrency,
        hasEnoughWrappedCurrency: hasEnoughWrappedCurrency,
        amountToWrap: amountToWrap,
        transactionError: transactionError,
        expirationOption: expirationOption,
        expirationOptions: $2b3bdb31da73e768$var$expirationOptions,
        stepData: stepData,
        currencies: currencies || [
            defaultCurrency
        ],
        currency: currency,
        feeBps: feeBps,
        setCurrency: setCurrency,
        setBidStep: setBidStep,
        setBidAmountPerUnit: setBidAmountPerUnit,
        setExpirationOption: setExpirationOption,
        setTrait: setTrait,
        trait: trait,
        placeBid: placeBid
    }));
};








const $701ede7bb0226ef1$var$Img = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("img", {
    width: "100%",
    "@bp1": {
        height: 100,
        width: 100
    },
    borderRadius: "$borderRadius"
});
const $701ede7bb0226ef1$var$TokenStatsHeader = ({ token: token , collection: collection  })=>{
    const img = token?.token?.imageSmall ? token.token.imageSmall : (0, $b9dbc4deb8b847bf$export$2e2bcd8739ae039)(collection?.image, 250);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            mr: "$4",
            marginBottom: "$4",
            width: 120,
            "@bp1": {
                mr: 0,
                width: "100%"
            }
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle",
        css: {
            mb: "$1",
            display: "block"
        }
    }, token ? "Item" : "Collection"), /*#__PURE__*/ (0, $TBcmg$react).createElement($701ede7bb0226ef1$var$Img, {
        src: img,
        css: {
            mb: "$2",
            visibility: !img || img.length === 0 ? "hidden" : "visible",
            objectFit: "cover"
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6",
        css: {
            flex: 1
        },
        as: "h6",
        ellipsify: true
    }, token?.token ? token.token.name || `#${token.token.tokenId}` : collection?.name), token && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle",
        as: "p",
        ellipsify: true
    }, token?.token?.collection?.name)));
};
var $701ede7bb0226ef1$export$2e2bcd8739ae039 = $701ede7bb0226ef1$var$TokenStatsHeader;







const $a35f78717490c037$var$SelectedAttribute = ({ attributeKey: attributeKey , attributeValue: attributeValue  })=>{
    const isMobile = (0, $768c94381da6e8b2$export$2e2bcd8739ae039)("(max-width: 520px)");
    if (!attributeKey || !attributeValue) return null;
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            padding: "$2",
            borderRadius: 4,
            backgroundColor: "$neutralBgHover",
            marginBottom: "$4",
            overflow: "hidden",
            gap: "$1",
            justifyContent: "space-between",
            maxWidth: "100%",
            "@bp1": {
                justifyContent: "start",
                width: "fit-content"
            }
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        color: "accent",
        style: "subtitle2"
    }, attributeKey, `${isMobile ? "" : ":"}`), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        css: {
            maxWidth: 200,
            overflow: "hidden",
            textOverflow: "ellipsis"
        }
    }, attributeValue));
};
var $a35f78717490c037$export$2e2bcd8739ae039 = $a35f78717490c037$var$SelectedAttribute;


const $c86e9b1d4c21b978$var$TokenStats = ({ token: token , collection: collection , trait: trait  })=>{
    let stats = [];
    stats.push({
        id: 0,
        label: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            css: {
                minWidth: "0"
            },
            ellipsify: true
        }, "Creator Royalties"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a813136de1d75d50$export$2e2bcd8739ae039), {
            side: "right",
            width: 200,
            content: "A fee on every order that goes to the collection creator."
        })),
        value: (collection?.royalties?.bps || 0) * 0.01 + "%"
    }, {
        id: 1,
        label: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            css: {
                minWidth: "0"
            },
            ellipsify: true
        }, "Highest Offer"),
        value: token ? token.market?.topBid?.price?.amount?.decimal || null : collection?.topBid?.price?.amount?.decimal || null,
        address: token ? token?.market?.topBid?.price?.currency?.contract : collection?.topBid?.price?.currency?.contract,
        symbol: token ? token?.market?.topBid?.price?.currency?.symbol : collection?.topBid?.price?.currency?.symbol,
        asWrapped: true
    });
    if (token) stats.push({
        id: 2,
        label: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            css: {
                minWidth: "0"
            },
            ellipsify: true
        }, "List Price"),
        value: token.market?.floorAsk?.price?.amount?.decimal || null,
        symbol: token?.market?.floorAsk?.price?.currency?.symbol,
        address: token?.market?.floorAsk?.price?.currency?.contract,
        asNative: true
    });
    else if (!token && collection) stats.push({
        id: 2,
        label: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            css: {
                minWidth: "0"
            },
            ellipsify: true
        }, "Floor"),
        value: collection?.floorAsk?.price?.amount?.decimal || null,
        symbol: collection?.floorAsk?.price?.currency?.symbol,
        address: collection?.floorAsk?.price?.currency?.contract,
        asNative: true
    });
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            width: "100%",
            flexDirection: "row",
            "@bp1": {
                width: 220,
                flexDirection: "column"
            },
            p: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $701ede7bb0226ef1$export$2e2bcd8739ae039), {
        collection: collection,
        token: token
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $9051fde5e764f5e2$export$2e2bcd8739ae039), {
        css: {
            flex: 1,
            alignContent: "start",
            width: "100%",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a35f78717490c037$export$2e2bcd8739ae039), {
        attributeKey: trait?.key,
        attributeValue: trait?.value
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            flex: 1,
            [`& ${0, $21b0b93f5539af30$export$2e2bcd8739ae039}:not(:last-child)`]: {
                mb: "$1"
            }
        }
    }, stats.map((stat)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $21b0b93f5539af30$export$2e2bcd8739ae039), {
            key: stat.id,
            ...stat
        })))));
};
var $c86e9b1d4c21b978$export$2e2bcd8739ae039 = $c86e9b1d4c21b978$var$TokenStats;














const $a41e80caa2a6e61f$var$TransactionBidDetails = ({ token: token , collection: collection , bidData: bidData  })=>{
    const [value, setValue] = (0, $TBcmg$useState)("");
    const timeSince = (0, $2f4c390a81073897$export$2e2bcd8739ae039)(bidData?.expirationTime ? +bidData.expirationTime : 0);
    (0, $TBcmg$useEffect)(()=>{
        setValue(bidData ? (0, $TBcmg$formatEther)(BigInt(bidData.weiPrice)) : "");
    }, [
        bidData
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            width: "100%",
            flexDirection: "row",
            "@bp1": {
                width: 220,
                flexDirection: "column"
            },
            p: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $701ede7bb0226ef1$export$2e2bcd8739ae039), {
        collection: collection,
        token: token
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            flex: 1,
            mb: "$3"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a35f78717490c037$export$2e2bcd8739ae039), {
        attributeKey: bidData?.attributeKey,
        attributeValue: bidData?.attributeValue
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        className: "rk-stat-well",
        css: {
            backgroundColor: "$wellBackground",
            p: "$2",
            borderRadius: "$borderRadius",
            gap: "$1"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        justify: "between"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2"
    }, "Offer Price"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bf67ac886f7190ba$export$2e2bcd8739ae039), {
        amount: +value,
        textStyle: "subtitle2",
        address: bidData?.currency
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle",
        as: "p",
        css: {
            flex: 1
        }
    }, bidData?.expirationTime ? `Expires ${timeSince}` : "No Expiration"))));
};
var $a41e80caa2a6e61f$export$2e2bcd8739ae039 = $a41e80caa2a6e61f$var$TransactionBidDetails;








const $9340aeb7dd0cf09a$var$SCROLLBAR_SIZE = 10;
const $9340aeb7dd0cf09a$var$ScrollArea = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Root5, {
    height: 322,
    borderRadius: "$space$2",
    overflow: "hidden",
    boxShadow: `0 2px 10px $inputBackground`
});
const $9340aeb7dd0cf09a$var$ScrollAreaViewport = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Viewport1, {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    borderRadius: "inherit"
});
const $9340aeb7dd0cf09a$var$ScrollAreaScrollbar = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Scrollbar, {
    display: "flex",
    // ensures no selection
    userSelect: "none",
    // disable browser handling of all panning and zooming gestures on touch devices
    touchAction: "none",
    padding: 2,
    background: "$inputBackground",
    transition: "background 160ms ease-out",
    "&:hover": {
        background: "$inputBackground"
    },
    '&[data-orientation="vertical"]': {
        width: $9340aeb7dd0cf09a$var$SCROLLBAR_SIZE
    },
    '&[data-orientation="horizontal"]': {
        flexDirection: "column",
        height: $9340aeb7dd0cf09a$var$SCROLLBAR_SIZE
    }
});
const $9340aeb7dd0cf09a$var$ScrollAreaThumb = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Thumb1, {
    flex: 1,
    background: "$wellBackground",
    borderRadius: $9340aeb7dd0cf09a$var$SCROLLBAR_SIZE,
    // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
    position: "relative",
    "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        minWidth: 44,
        minHeight: 44
    }
});
const $9340aeb7dd0cf09a$var$ScrollAreaCorner = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Corner, {
    background: "$wellBackground"
});
const $9340aeb7dd0cf09a$var$RKScrollArea = ({ children: children , ...props })=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($9340aeb7dd0cf09a$var$ScrollArea, {
        ...props
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($9340aeb7dd0cf09a$var$ScrollAreaViewport, null, children), /*#__PURE__*/ (0, $TBcmg$react).createElement($9340aeb7dd0cf09a$var$ScrollAreaScrollbar, {
        orientation: "vertical"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($9340aeb7dd0cf09a$var$ScrollAreaThumb, null)), /*#__PURE__*/ (0, $TBcmg$react).createElement($9340aeb7dd0cf09a$var$ScrollAreaScrollbar, {
        orientation: "horizontal"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($9340aeb7dd0cf09a$var$ScrollAreaThumb, null)), /*#__PURE__*/ (0, $TBcmg$react).createElement($9340aeb7dd0cf09a$var$ScrollAreaCorner, null));
};
$9340aeb7dd0cf09a$var$RKScrollArea.Root = $9340aeb7dd0cf09a$var$ScrollArea;
$9340aeb7dd0cf09a$var$RKScrollArea.Viewport = $9340aeb7dd0cf09a$var$ScrollAreaViewport;
$9340aeb7dd0cf09a$var$RKScrollArea.Scrollbar = $9340aeb7dd0cf09a$var$ScrollAreaScrollbar;
$9340aeb7dd0cf09a$var$RKScrollArea.Thumb = $9340aeb7dd0cf09a$var$ScrollAreaThumb;
$9340aeb7dd0cf09a$var$RKScrollArea.Corner = $9340aeb7dd0cf09a$var$ScrollAreaCorner;
var $9340aeb7dd0cf09a$export$2e2bcd8739ae039 = $9340aeb7dd0cf09a$var$RKScrollArea;



const $f8d8cda59d836a2f$var$AttributeSelector = ({ attributes: attributes , setTrait: setTrait , setOpen: setOpen , tokenCount: tokenCount  })=>{
    const [results, setResults] = (0, $TBcmg$useState)([]);
    const [query, setQuery] = (0, $TBcmg$useState)("");
    (0, $TBcmg$useEffect)(()=>{
        if (query === "") setResults(attributes);
        else {
            let results = [];
            attributes?.forEach((attribute)=>{
                const values = attribute.values?.filter(({ value: value  })=>value.toLowerCase().includes(query.toLowerCase()));
                if (values && values.length > 0) results?.push({
                    ...attribute,
                    values: values
                });
            });
            setResults(results ? [
                ...results
            ] : []);
        }
    }, [
        query
    ]);
    if (!attributes) return null;
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            maxWidth: 500,
            zIndex: 1000,
            padding: "$4",
            overflowY: "auto",
            borderRadius: "$space$2",
            backgroundColor: "$popoverBackground"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $5c0c2c3952297d70$export$2e2bcd8739ae039), {
        css: {
            marginBottom: "$4",
            padding: "$space$4 $space$4 $space$4 48px"
        },
        placeholder: "Filter attribute",
        value: query,
        onChange: (e)=>setQuery(e.target.value),
        iconCss: {
            top: "26px",
            color: "$neutralText"
        },
        icon: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faMagnifyingGlass),
            width: 16,
            height: 16
        })
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $9340aeb7dd0cf09a$export$2e2bcd8739ae039), {
        css: {
            minWidth: "80vw",
            "@bp1": {
                minWidth: 468
            }
        }
    }, results?.map(({ key: key , values: values  })=>{
        if (values?.length === 0) return null;
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            key: key,
            css: {
                paddingRight: "$4",
                marginBottom: 24
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle1",
            color: "accent",
            as: "div",
            css: {
                marginBottom: "$4"
            }
        }, key), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $9051fde5e764f5e2$export$2e2bcd8739ae039), {
            css: {
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "$2",
                "@bp1": {
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
                }
            }
        }, values?.map(({ value: value , count: count , floorAskPrice: floorAskPrice  })=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
                key: value,
                css: {
                    display: "grid",
                    alignContent: "space-between",
                    cursor: "pointer",
                    backgroundColor: "$contentBackground",
                    borderRadius: "$space$2",
                    $$shadowColor: "$colors$gray7",
                    boxShadow: "box-shadow: 0px 2px 16px $$shadowColor",
                    border: "1px solid $borderColor",
                    width: "100%",
                    padding: "12px 16px"
                },
                as: "button",
                onClick: ()=>{
                    setTrait({
                        key: key,
                        value: value,
                        floorAskPrice: floorAskPrice
                    });
                    setOpen(false);
                }
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                justify: "between",
                css: {
                    gap: "$2",
                    marginBottom: "$1"
                }
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                css: {
                    maxWidth: 85,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign: "start"
                },
                style: "subtitle2"
            }, value), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
                css: {
                    flex: "none"
                }
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
                amount: floorAskPrice,
                logoWidth: 10,
                maximumFractionDigits: 1,
                textStyle: "subtitle2"
            }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                justify: "between",
                css: {
                    gap: "$2"
                }
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "body3",
                color: "subtle"
            }, count && tokenCount ? `${Math.round(count / tokenCount * 100)}%` : "-"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "body3",
                color: "subtle"
            }, "floor"))))));
    })));
};
var $f8d8cda59d836a2f$export$2e2bcd8739ae039 = $f8d8cda59d836a2f$var$AttributeSelector;








const $587a01049d5141ff$var$ModalCopy = {
    titleSetPrice: "Make an Offer",
    titleConfirm: "Complete Offer",
    titleComplete: "Offer Submitted",
    ctaBidDisabled: "Enter a Price",
    ctaBid: "",
    ctaConvertManually: "Convert Manually",
    ctaConvertAutomatically: "",
    ctaAwaitingApproval: "Waiting for Approval",
    ctaEditOffer: "Edit Offer",
    ctaRetry: "Retry",
    ctaViewOffers: "View Offers",
    ctaClose: "Close"
};
function $587a01049d5141ff$var$titleForStep(step, copy) {
    switch(step){
        case (0, $2b3bdb31da73e768$export$7a92ddb9e11f37f7).SetPrice:
            return copy.titleSetPrice;
        case (0, $2b3bdb31da73e768$export$7a92ddb9e11f37f7).Offering:
            return copy.titleConfirm;
        case (0, $2b3bdb31da73e768$export$7a92ddb9e11f37f7).Complete:
            return copy.titleComplete;
    }
}
const $587a01049d5141ff$var$ContentContainer = (0, $4a58f4053e821189$export$3817b7a54a07cec7)((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
    width: "100%",
    flexDirection: "column",
    "@bp1": {
        flexDirection: "row"
    },
    borderColor: "$borderColor"
});
const $587a01049d5141ff$var$MainContainer = (0, $4a58f4053e821189$export$3817b7a54a07cec7)((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
    flex: 1,
    borderColor: "$borderColor",
    borderTopWidth: 1,
    borderLeftWidth: 0,
    "@bp1": {
        borderTopWidth: 0,
        borderLeftWidth: 1
    },
    defaultVariants: {
        direction: "column"
    }
});
const $587a01049d5141ff$var$minimumDate = (0, $TBcmg$dayjs)().add(1, "h").format("MM/DD/YYYY h:mm A");
function $587a01049d5141ff$export$556cfc4a654987bd({ openState: openState , trigger: trigger , tokenId: tokenId , collectionId: collectionId , attribute: attribute , normalizeRoyalties: normalizeRoyalties , currencies: currencies , oracleEnabled: oracleEnabled = false , copyOverrides: copyOverrides , feesBps: feesBps , onViewOffers: onViewOffers , onClose: onClose , onBidComplete: onBidComplete , onBidError: onBidError  }) {
    const copy = {
        ...$587a01049d5141ff$var$ModalCopy,
        ...copyOverrides
    };
    const [open, setOpen] = (0, $b69d00be56c1bdb6$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const datetimeElement = (0, $TBcmg$useRef)(null);
    const [stepTitle, setStepTitle] = (0, $TBcmg$useState)("");
    const [localMarketplace, setLocalMarketplace] = (0, $TBcmg$useState)(null);
    const [attributesSelectable, setAttributesSelectable] = (0, $TBcmg$useState)(false);
    (0, $TBcmg$useEffect)(()=>{
        setLocalMarketplace((0, $49ea92be0f1fc634$export$2e2bcd8739ae039)());
    }, []);
    const [attributeSelectorOpen, setAttributeSelectorOpen] = (0, $TBcmg$useState)(false);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $2b3bdb31da73e768$export$89d91658eb2b6698), {
        open: open,
        tokenId: tokenId,
        collectionId: collectionId,
        attribute: attribute,
        normalizeRoyalties: normalizeRoyalties,
        oracleEnabled: oracleEnabled,
        currencies: currencies,
        feesBps: feesBps
    }, ({ token: token , collection: collection , attributes: attributes , bidStep: bidStep , expirationOption: expirationOption , expirationOptions: expirationOptions , wrappedBalance: wrappedBalance , wrappedContractName: wrappedContractName , wrappedContractAddress: wrappedContractAddress , bidAmountPerUnit: bidAmountPerUnit , totalBidAmount: totalBidAmount , totalBidAmountUsd: totalBidAmountUsd , quantity: quantity , setQuantity: setQuantity , hasEnoughNativeCurrency: hasEnoughNativeCurrency , hasEnoughWrappedCurrency: hasEnoughWrappedCurrency , amountToWrap: amountToWrap , balance: balance , convertLink: convertLink , canAutomaticallyConvert: canAutomaticallyConvert , transactionError: transactionError , stepData: stepData , bidData: bidData , currencies: currencies , currency: currency , setCurrency: setCurrency , setBidAmountPerUnit: setBidAmountPerUnit , setExpirationOption: setExpirationOption , setBidStep: setBidStep , setTrait: setTrait , trait: trait , placeBid: placeBid  })=>{
        const [expirationDate, setExpirationDate] = (0, $TBcmg$useState)("");
        const tokenCount = collection?.tokenCount ? +collection.tokenCount : undefined;
        const itemImage = token && token.token?.imageSmall ? token.token?.imageSmall : collection?.image;
        const providerOptionsContext = (0, $TBcmg$useContext)((0, $f4609ce2cb6b416b$export$f66a1c3c9465af21));
        const quantityEnabled = !tokenId || token?.token?.kind === "erc1155";
        (0, $TBcmg$useEffect)(()=>{
            if (stepData) switch(stepData.currentStep.kind){
                case "signature":
                    setStepTitle("Confirm Offer");
                    break;
                default:
                    setStepTitle(stepData.currentStep.action);
                    break;
            }
        }, [
            stepData
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (expirationOption && expirationOption.relativeTime) {
                const newExpirationTime = expirationOption.relativeTimeUnit ? (0, $TBcmg$dayjs)().add(expirationOption.relativeTime, expirationOption.relativeTimeUnit) : (0, $TBcmg$dayjs).unix(expirationOption.relativeTime);
                setExpirationDate(newExpirationTime.format("MM/DD/YYYY h:mm A"));
            } else setExpirationDate("");
        }, [
            expirationOption
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (bidStep === (0, $2b3bdb31da73e768$export$7a92ddb9e11f37f7).Complete && onBidComplete) {
                const data = {
                    tokenId: tokenId,
                    collectionId: collectionId,
                    bidData: bidData
                };
                onBidComplete(data);
            }
        }, [
            bidStep
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (transactionError && onBidError) {
                const data = {
                    tokenId: tokenId,
                    collectionId: collectionId,
                    bidData: bidData
                };
                onBidError(transactionError, data);
            }
        }, [
            transactionError
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (open && attributes && !tokenId && attribute) setTrait(attribute);
            else setTrait(undefined);
            if (open && attributes && !tokenId) {
                let attributeCount = 0;
                for(let i = 0; i < attributes.length; i++){
                    attributeCount += attributes[i].attributeCount || 0;
                    if (attributeCount >= 2000) break;
                }
                if (attributeCount >= 2000) setAttributesSelectable(false);
                else setAttributesSelectable(true);
            } else setAttributesSelectable(false);
        }, [
            open,
            attributes
        ]);
        const contentContainerCss = {
            borderBottomWidth: providerOptionsContext.disablePoweredByReservoir ? 0 : 1,
            marginBottom: providerOptionsContext.disablePoweredByReservoir ? 0 : 12
        };
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $32d03e1adcee2721$export$2b77a92f1a5ad772), {
            size: bidStep !== (0, $2b3bdb31da73e768$export$7a92ddb9e11f37f7).Complete ? (0, $32d03e1adcee2721$export$e8598848ef5f29c0).LG : (0, $32d03e1adcee2721$export$e8598848ef5f29c0).MD,
            trigger: trigger,
            title: $587a01049d5141ff$var$titleForStep(bidStep, copy),
            open: open,
            onOpenChange: (open)=>{
                if (!open && onClose) {
                    const data = {
                        tokenId: tokenId,
                        collectionId: collectionId,
                        bidData: bidData
                    };
                    onClose(data, stepData, bidStep);
                }
                setOpen(open);
            },
            loading: !collection,
            onPointerDownOutside: (e)=>{
                if (e.target instanceof Element && datetimeElement.current?.flatpickr?.calendarContainer && datetimeElement.current.flatpickr.calendarContainer.contains(e.target)) e.preventDefault();
            },
            onFocusCapture: (e)=>{
                e.stopPropagation();
            }
        }, bidStep === (0, $2b3bdb31da73e768$export$7a92ddb9e11f37f7).SetPrice && collection && /*#__PURE__*/ (0, $TBcmg$react).createElement($587a01049d5141ff$var$ContentContainer, {
            css: {
                ...contentContainerCss
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $c86e9b1d4c21b978$export$2e2bcd8739ae039), {
            token: token ? token : undefined,
            collection: collection,
            trait: trait
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement($587a01049d5141ff$var$MainContainer, {
            css: {
                p: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            justify: "between"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "tiny",
            color: "subtle"
        }, "Offer Amount ", quantityEnabled ? "and Quantity" : null), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: (0, $602940fa56061b3b$export$2e2bcd8739ae039),
            css: {
                gap: "$1"
            },
            align: "center",
            style: "tiny"
        }, "Balance:", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bf67ac886f7190ba$export$2e2bcd8739ae039), {
            logoWidth: 10,
            textStyle: "tiny",
            amount: wrappedBalance?.value,
            address: wrappedContractAddress,
            decimals: wrappedBalance?.decimals,
            symbol: wrappedBalance?.symbol
        }), " ")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                mt: "$2",
                gap: quantityEnabled ? "$2" : 20
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: (0, $602940fa56061b3b$export$2e2bcd8739ae039),
            css: {
                gap: "$2",
                "@bp1": {
                    ml: "$3"
                },
                flexShrink: 0
            },
            align: "center",
            style: "body1",
            color: "subtle"
        }, currencies.length > 1 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $09a27344989ccc4f$export$e7345cb65e28db6f), {
            currency: currency,
            currencies: currencies,
            setCurrency: setCurrency,
            triggerCss: {
                width: 90
            }
        }) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $facfb14f3ab47807$export$2e2bcd8739ae039), {
            css: {
                height: 20
            },
            address: wrappedContractAddress
        }), wrappedContractName)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $5c0c2c3952297d70$export$2e2bcd8739ae039), {
            type: "number",
            value: bidAmountPerUnit,
            onChange: (e)=>{
                setBidAmountPerUnit(e.target.value);
            },
            placeholder: "Enter price",
            containerCss: {
                width: "100%"
            },
            css: {
                textAlign: "center",
                "@bp1": {
                    textAlign: "left"
                }
            }
        }), quantityEnabled ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                display: "none",
                "@bp1": {
                    display: "flex"
                }
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $c1ab7eea10f2afe3$export$2e2bcd8739ae039), {
            quantity: quantity,
            setQuantity: setQuantity,
            min: 1,
            max: 999999,
            css: {
                maxWidth: 180
            }
        })) : null), quantityEnabled ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            css: {
                width: "100%",
                display: "flex",
                mt: "$2",
                gap: "$2",
                "@bp1": {
                    display: "none"
                }
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            css: {
                width: 90,
                flexShrink: 0
            }
        }, "Quantity"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $c1ab7eea10f2afe3$export$2e2bcd8739ae039), {
            quantity: quantity,
            setQuantity: setQuantity,
            min: 1,
            max: 999999,
            css: {
                justifyContent: "space-between",
                width: "100%"
            }
        })) : null, quantityEnabled ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            css: {
                gap: "$2",
                mt: "$3",
                mb: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle"
        }, "Total Offer Price"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bf67ac886f7190ba$export$2e2bcd8739ae039), {
            logoWidth: 16,
            textStyle: "subtitle2",
            amount: totalBidAmount,
            address: currency?.contract,
            decimals: currency?.decimals,
            symbol: currency?.symbol
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
            style: "tiny",
            color: "subtle",
            amount: totalBidAmountUsd
        })) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
            css: {
                marginLeft: "auto",
                mt: "$2",
                display: "inline-block",
                minHeight: 15
            },
            style: "tiny",
            amount: totalBidAmountUsd
        }), attributes && attributes.length > 0 && (attributesSelectable || trait) && !tokenId && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: (0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039),
            css: {
                mb: "$2"
            },
            style: "tiny",
            color: "subtle"
        }, "Attributes"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c42dc96a91e1fd$export$2e2bcd8739ae039).Root, {
            open: attributeSelectorOpen,
            onOpenChange: attributesSelectable ? setAttributeSelectorOpen : undefined
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c42dc96a91e1fd$export$2e2bcd8739ae039).Trigger, {
            asChild: true
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $822ff51685ab152b$export$2e2bcd8739ae039), null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            justify: "between",
            css: {
                gap: "$2",
                alignItems: "center",
                color: "$neutralText"
            }
        }, trait ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                maxWidth: 385,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            color: "accent",
            style: "subtitle1"
        }, trait?.key, ":", " "), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle1"
        }, trait?.value)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                alignItems: "center",
                gap: "$2"
            }
        }, trait?.floorAskPrice && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                flex: "none"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            amount: trait?.floorAskPrice,
            maximumFractionDigits: 2,
            logoWidth: 11
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            style: {
                cursor: "pointer"
            },
            onClick: (e)=>{
                e.preventDefault();
                setTrait(undefined);
            },
            icon: (0, $TBcmg$faClose),
            width: 16,
            height: 16
        }))) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            css: {
                color: "$neutralText"
            }
        }, "All Attributes"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faChevronDown),
            width: 16,
            height: 16
        }))))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c42dc96a91e1fd$export$2e2bcd8739ae039).Content, {
            sideOffset: -50
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $f8d8cda59d836a2f$export$2e2bcd8739ae039), {
            attributes: attributes,
            tokenCount: tokenCount,
            setTrait: setTrait,
            setOpen: setAttributeSelectorOpen
        })))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: (0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039),
            css: {
                mt: "$4",
                mb: "$2"
            },
            style: "tiny",
            color: "subtle"
        }, "Expiration Date"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                gap: "$2",
                mb: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039), {
            css: {
                flex: 1,
                "@bp1": {
                    width: 160,
                    flexDirection: "row"
                }
            },
            value: expirationOption?.text || "",
            onValueChange: (value)=>{
                const option = expirationOptions.find((option)=>option.value == value);
                if (option) setExpirationOption(option);
            }
        }, expirationOptions.map((option)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).Item, {
                key: option.text,
                value: option.value
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).ItemText, null, option.text)))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b31bbf36f2fe9ca4$export$2e2bcd8739ae039), {
            ref: datetimeElement,
            icon: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
                icon: (0, $TBcmg$faCalendar),
                width: 14,
                height: 16
            }),
            value: expirationDate,
            options: {
                minDate: $587a01049d5141ff$var$minimumDate,
                enableTime: true,
                minuteIncrement: 1
            },
            defaultValue: expirationDate,
            onChange: (e)=>{
                if (Array.isArray(e)) {
                    const customOption = expirationOptions.find((option)=>option.value === "custom");
                    if (customOption) setExpirationOption({
                        ...customOption,
                        relativeTime: e[0] / 1000
                    });
                }
            },
            containerCss: {
                width: 46,
                "@bp1": {
                    flex: 1,
                    width: "100%"
                }
            },
            css: {
                padding: 0,
                "@bp1": {
                    padding: "12px 16px 12px 48px"
                }
            }
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                width: "100%",
                mt: "auto"
            }
        }, oracleEnabled && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "subtle",
            css: {
                mb: 10,
                textAlign: "center",
                width: "100%",
                display: "block"
            }
        }, "You can change or cancel your offer for free on", " ", localMarketplace?.title, "."), bidAmountPerUnit === "" && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: true,
            css: {
                width: "100%"
            }
        }, copy.ctaBidDisabled), bidAmountPerUnit !== "" && hasEnoughWrappedCurrency && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>placeBid(),
            css: {
                width: "100%"
            }
        }, copy.ctaBid.length > 0 ? copy.ctaBid : token && token.token ? "Make an Offer" : trait ? "Make an Attribute Offer" : "Make a Collection Offer"), bidAmountPerUnit !== "" && !hasEnoughWrappedCurrency && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, !hasEnoughNativeCurrency && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                gap: "$2",
                mt: 10
            },
            justify: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "error"
        }, balance?.symbol || "ETH", " Balance"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            amount: balance?.value,
            symbol: balance?.symbol
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                gap: "$2",
                mt: 10,
                overflow: "hidden",
                flexDirection: "column-reverse",
                "@bp1": {
                    flexDirection: "row"
                }
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                flex: "1 0 auto"
            },
            color: "secondary",
            onClick: ()=>{
                window.open(convertLink, "_blank");
            }
        }, copy.ctaConvertManually), canAutomaticallyConvert && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                flex: 1,
                maxHeight: 44
            },
            disabled: !hasEnoughNativeCurrency,
            onClick: ()=>placeBid()
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            color: "button",
            ellipsify: true
        }, copy.ctaConvertAutomatically.length > 0 ? copy.ctaConvertAutomatically : `Convert ${amountToWrap} ${balance?.symbol || "ETH"} for me`))))))), bidStep === (0, $2b3bdb31da73e768$export$7a92ddb9e11f37f7).Offering && collection && /*#__PURE__*/ (0, $TBcmg$react).createElement($587a01049d5141ff$var$ContentContainer, {
            css: {
                ...contentContainerCss
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a41e80caa2a6e61f$export$2e2bcd8739ae039), {
            token: token ? token : undefined,
            collection: collection,
            bidData: bidData
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement($587a01049d5141ff$var$MainContainer, {
            css: {
                p: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $2e70e0c380877307$export$2e2bcd8739ae039), {
            value: stepData?.stepProgress || 0,
            max: stepData?.totalSteps || 0
        }), transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $f9c59e90de25e993$export$2e2bcd8739ae039), {
            css: {
                mt: 24
            }
        }), stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            css: {
                textAlign: "center",
                mt: 48,
                mb: 28
            },
            style: "subtitle1"
        }, stepTitle), stepData.currentStep.kind === "signature" && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0f4eeb921315fd4d$export$2e2bcd8739ae039), {
            justify: "center",
            fromImg: itemImage || "",
            toImgs: [
                localMarketplace?.icon || ""
            ]
        }), stepData.currentStep.kind !== "signature" && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            justify: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                background: "$neutralLine",
                borderRadius: 8
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $facfb14f3ab47807$export$2e2bcd8739ae039), {
            css: {
                height: 56,
                width: 56
            },
            address: wrappedContractAddress
        }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            css: {
                textAlign: "center",
                mt: 24,
                maxWidth: 395,
                mx: "auto",
                mb: "$4"
            },
            style: "body2",
            color: "subtle"
        }, stepData?.currentStep.description)), !stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                height: "100%"
            },
            justify: "center",
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null)), !transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                width: "100%",
                mt: "auto"
            },
            disabled: true
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), copy.ctaAwaitingApproval), transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                mt: "auto",
                gap: 10
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            color: "secondary",
            css: {
                flex: 1
            },
            onClick: ()=>setBidStep((0, $2b3bdb31da73e768$export$7a92ddb9e11f37f7).SetPrice)
        }, copy.ctaEditOffer), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                flex: 1
            },
            onClick: ()=>placeBid()
        }, copy.ctaRetry)))), bidStep === (0, $2b3bdb31da73e768$export$7a92ddb9e11f37f7).Complete && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center",
            css: {
                p: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: "$successAccent",
                mt: 48
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCheckCircle),
            style: {
                width: "32px",
                height: "32px"
            }
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h5",
            css: {
                textAlign: "center",
                mt: 36,
                mb: 80
            }
        }, "Offer Submitted!"), onViewOffers ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                width: "100%"
            },
            onClick: ()=>{
                onViewOffers();
            }
        }, copy.ctaViewOffers) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                width: "100%"
            },
            onClick: ()=>{
                setOpen(false);
            }
        }, copy.ctaClose)));
    });
}
$587a01049d5141ff$export$556cfc4a654987bd.Custom = (0, $2b3bdb31da73e768$export$89d91658eb2b6698);











var $be959054ceb8cef7$export$f4dd52ca63b5fdde;
(function(AcceptBidStep) {
    AcceptBidStep[AcceptBidStep["Checkout"] = 0] = "Checkout";
    AcceptBidStep[AcceptBidStep["Auth"] = 1] = "Auth";
    AcceptBidStep[AcceptBidStep["ApproveMarketplace"] = 2] = "ApproveMarketplace";
    AcceptBidStep[AcceptBidStep["Finalizing"] = 3] = "Finalizing";
    AcceptBidStep[AcceptBidStep["Complete"] = 4] = "Complete";
    AcceptBidStep[AcceptBidStep["Unavailable"] = 5] = "Unavailable";
})($be959054ceb8cef7$export$f4dd52ca63b5fdde || ($be959054ceb8cef7$export$f4dd52ca63b5fdde = {}));
const $be959054ceb8cef7$export$2d08bd3f57775802 = ({ open: open , tokens: tokens , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const { data: wallet  } = (0, $TBcmg$useWalletClient)();
    const [stepData, setStepData] = (0, $TBcmg$useState)(null);
    const [prices, setPrices] = (0, $TBcmg$useState)([]);
    const [acceptBidStep, setAcceptBidStep] = (0, $TBcmg$useState)($be959054ceb8cef7$export$f4dd52ca63b5fdde.Checkout);
    const [transactionError, setTransactionError] = (0, $TBcmg$useState)();
    const [txHash, setTxHash] = (0, $TBcmg$useState)(null);
    const { chain: activeChain  } = (0, $TBcmg$useNetwork)();
    const blockExplorerBaseUrl = activeChain?.blockExplorers?.etherscan?.url || "https://etherscan.io";
    const [isFetchingBidPath, setIsFetchingBidPath] = (0, $TBcmg$useState)(false);
    const [bidsPath, setBidsPath] = (0, $TBcmg$useState)(null);
    const _tokenIds = tokens.map((token)=>{
        const contract = (token?.collectionId || "").split(":")[0];
        return `${contract}:${token.tokenId}`;
    });
    const { data: tokensData , mutate: mutateTokens , isValidating: isFetchingTokenData  } = (0, $074b4666df4341a7$export$2e2bcd8739ae039)(open && {
        tokens: _tokenIds,
        normalizeRoyalties: normalizeRoyalties
    }, {
        revalidateFirstPage: true
    });
    const enhancedTokens = (0, $TBcmg$useMemo)(()=>{
        const tokensDataMap = tokensData.reduce((map, data)=>{
            map[`${data.token?.contract}:${data.token?.tokenId}`] = data;
            return map;
        }, {});
        const tokensBidPathMap = bidsPath?.reduce((map, path)=>{
            const key = `${path.contract}:${path.tokenId}`;
            const mapPath = map[key];
            if (!mapPath) map[key] = [
                path
            ];
            else mapPath.push(path);
            return map;
        }, {}) || {};
        return tokens.reduce((enhancedTokens, token)=>{
            const contract = token.collectionId.split(":")[0];
            const dataMapKey = `${contract}:${token.tokenId}`;
            const tokenData = tokensDataMap[dataMapKey];
            const bidIds = token.bidIds?.filter((bidId)=>bidId.length > 0) || [];
            const bidsPath = tokensBidPathMap[dataMapKey] ? tokensBidPathMap[dataMapKey] : [];
            if (!bidIds.length) enhancedTokens.push({
                ...token,
                bidIds: tokenData?.market?.topBid?.id ? [
                    tokenData.market.topBid.id
                ] : [],
                tokenData: tokenData,
                bidsPath: bidsPath
            });
            else enhancedTokens.push({
                ...token,
                bidIds: token.bidIds || [],
                tokenData: tokenData,
                bidsPath: bidsPath
            });
            return enhancedTokens;
        }, []);
    }, [
        tokensData,
        tokens,
        bidsPath
    ]);
    const bidTokenMap = (0, $TBcmg$useMemo)(()=>enhancedTokens.reduce((map, token)=>{
            token.bidIds.forEach((bidId)=>{
                map[bidId] = token;
            });
            return map;
        }, {}), [
        enhancedTokens
    ]);
    const fetchBidsPath = (0, $TBcmg$useCallback)((tokens)=>{
        if (!wallet || !client) {
            setIsFetchingBidPath(false);
            return;
        }
        setIsFetchingBidPath(true);
        let options = {
            onlyPath: true,
            partial: true
        };
        if (normalizeRoyalties !== undefined) options.normalizeRoyalties = normalizeRoyalties;
        const items = tokens?.reduce((items, token)=>{
            if (tokens) {
                const contract = token.collectionId.split(":")[0];
                const bids = token.bidIds ? token.bidIds.filter((bid)=>bid.length > 0) : [];
                if (bids && bids.length > 0) bids.forEach((bidId)=>{
                    items.push({
                        orderId: bidId,
                        token: `${contract}:${token.tokenId}`
                    });
                });
                else items.push({
                    token: `${contract}:${token.tokenId}`
                });
            }
            return items;
        }, []);
        client.actions.acceptOffer({
            items: items,
            wallet: wallet,
            options: options,
            precheck: true,
            onProgress: ()=>{}
        }).then((data)=>{
            setBidsPath("path" in data ? data["path"] : null);
        }).finally(()=>{
            setIsFetchingBidPath(false);
        });
    }, [
        client,
        wallet,
        normalizeRoyalties
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (open) fetchBidsPath(tokens);
    }, [
        client,
        tokens,
        open
    ]);
    const currencySymbols = (0, $TBcmg$useMemo)(()=>Array.from(enhancedTokens.reduce((symbols, { bidsPath: bidsPath  })=>{
            bidsPath.forEach(({ currencySymbol: currencySymbol  })=>{
                if (currencySymbol) symbols.add(currencySymbol);
            });
            return symbols;
        }, new Set())).join(","), [
        enhancedTokens
    ]);
    const conversions = (0, $b5d8dec284676ed1$export$2e2bcd8739ae039)(open && currencySymbols.length > 0 ? "USD" : undefined, currencySymbols);
    const usdPrices = (0, $TBcmg$useMemo)(()=>conversions.reduce((map, price)=>{
            map[price.symbol] = price;
            return map;
        }, {}), [
        conversions
    ]);
    const acceptBid = (0, $TBcmg$useCallback)(()=>{
        setTransactionError(null);
        if (!wallet) {
            const error = new Error("Missing a wallet/signer");
            setTransactionError(error);
            throw error;
        }
        if (!bidsPath) {
            const error = new Error("Missing bids to accept");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            setTransactionError(null);
            throw error;
        }
        let options = {
            partial: true
        };
        if (normalizeRoyalties !== undefined) options.normalizeRoyalties = normalizeRoyalties;
        setAcceptBidStep($be959054ceb8cef7$export$f4dd52ca63b5fdde.ApproveMarketplace);
        const items = bidsPath.map(({ orderId: orderId , tokenId: tokenId , contract: contract  })=>({
                orderId: orderId,
                token: `${contract}:${tokenId}`
            }));
        const expectedPrice = {};
        for(let currency in prices)expectedPrice[currency] = prices[currency].netAmount;
        let hasError = false;
        client.actions.acceptOffer({
            expectedPrice: expectedPrice,
            wallet: wallet,
            items: items,
            onProgress: (steps, path)=>{
                if (!steps || hasError) return;
                setBidsPath(path);
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                let currentStepIndex = 0;
                executableSteps.find((step, index)=>{
                    currentStepIndex = index;
                    currentStepItem = step.items?.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStepItem) {
                    setStepData({
                        totalSteps: stepCount,
                        currentStep: currentStep,
                        currentStepItem: currentStepItem,
                        steps: steps
                    });
                    if (currentStep.id === "auth") setAcceptBidStep($be959054ceb8cef7$export$f4dd52ca63b5fdde.Auth);
                    else if (currentStep.id === "nft-approval") setAcceptBidStep($be959054ceb8cef7$export$f4dd52ca63b5fdde.ApproveMarketplace);
                    else if (currentStep.id === "sale") {
                        if (currentStep.items?.every((item)=>item.txHash !== undefined)) setAcceptBidStep($be959054ceb8cef7$export$f4dd52ca63b5fdde.Finalizing);
                        else setAcceptBidStep($be959054ceb8cef7$export$f4dd52ca63b5fdde.ApproveMarketplace);
                    }
                } else if (executableSteps.every((step)=>!step.items || step.items.length == 0 || step.items?.every((item)=>item.status === "complete"))) {
                    setAcceptBidStep($be959054ceb8cef7$export$f4dd52ca63b5fdde.Complete);
                    const lastStepItem = currentStep.items ? currentStep.items[currentStep.items?.length - 1] : undefined;
                    if (lastStepItem) setStepData({
                        totalSteps: stepCount,
                        steps: steps,
                        currentStep: currentStep,
                        currentStepItem: lastStepItem
                    });
                }
            },
            options: options
        }).catch((e)=>{
            const error = e;
            const errorType = error?.type;
            let message = "Oops, something went wrong. Please try again.";
            if (errorType && errorType === "price mismatch") message = error.message;
            //@ts-ignore
            const transactionError = new Error(message, {
                cause: error
            });
            hasError = true;
            setTransactionError(transactionError);
            setAcceptBidStep($be959054ceb8cef7$export$f4dd52ca63b5fdde.Checkout);
            setStepData(null);
            fetchBidsPath(tokens);
            mutateTokens();
        });
    }, [
        bidsPath,
        bidTokenMap,
        client,
        wallet,
        prices,
        mutateTokens
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (bidsPath && bidsPath.length > 0) {
            const prices = bidsPath.reduce((map, { quote: quote , currency: currency , currencyDecimals: currencyDecimals , currencySymbol: currencySymbol , builtInFees: builtInFees , feesOnTop: feesOnTop , totalPrice: totalPrice  })=>{
                const netAmount = quote || 0;
                const amount = totalPrice || 0;
                let royalty = 0;
                let marketplaceFee = 0;
                if (currency && currencySymbol) {
                    builtInFees?.forEach((fee)=>{
                        switch(fee.kind){
                            case "marketplace":
                                marketplaceFee = fee.amount || 0;
                                break;
                            case "royalty":
                                royalty = fee.amount || 0;
                                break;
                        }
                    });
                    feesOnTop?.forEach((fee)=>{
                        switch(fee.kind){
                            case "marketplace":
                                marketplaceFee = fee.amount || 0;
                                break;
                            case "royalty":
                                royalty = fee.amount || 0;
                                break;
                        }
                    });
                    if (!map[currencySymbol]) map[currencySymbol] = {
                        netAmount: netAmount,
                        amount: amount,
                        currency: {
                            contract: currency,
                            symbol: currencySymbol,
                            decimals: currencyDecimals
                        },
                        royalty: royalty,
                        marketplaceFee: marketplaceFee
                    };
                    else if (map[currencySymbol]) {
                        map[currencySymbol].netAmount += netAmount;
                        map[currencySymbol].amount += amount;
                        map[currencySymbol].royalty += royalty;
                        map[currencySymbol].marketplaceFee += marketplaceFee;
                    }
                }
                return map;
            }, {});
            setPrices(Object.values(prices));
            if (acceptBidStep === $be959054ceb8cef7$export$f4dd52ca63b5fdde.Unavailable) setAcceptBidStep($be959054ceb8cef7$export$f4dd52ca63b5fdde.Checkout);
        } else if (!isFetchingBidPath) {
            setPrices([]);
            setAcceptBidStep($be959054ceb8cef7$export$f4dd52ca63b5fdde.Unavailable);
        }
    }, [
        client,
        bidsPath,
        isFetchingBidPath
    ]);
    const { address: address  } = (0, $TBcmg$useAccount)();
    (0, $TBcmg$useEffect)(()=>{
        if (!open) {
            setAcceptBidStep($be959054ceb8cef7$export$f4dd52ca63b5fdde.Checkout);
            setTxHash(null);
            setStepData(null);
            setTransactionError(null);
        }
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, children({
        loading: isFetchingBidPath || isFetchingTokenData,
        tokensData: enhancedTokens,
        acceptBidStep: acceptBidStep,
        transactionError: transactionError,
        txHash: txHash,
        usdPrices: usdPrices,
        prices: prices,
        address: address,
        blockExplorerBaseUrl: blockExplorerBaseUrl,
        acceptBid: acceptBid,
        setAcceptBidStep: setAcceptBidStep,
        stepData: stepData
    }));
};






const $200c3b96aa855ca1$var$Img = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("img", {
    height: 56,
    width: 56
});
const $200c3b96aa855ca1$var$AcceptBidLineItem = ({ img: img , token: token , collection: collection , sourceImg: sourceImg , price: price , netAmount: netAmount , fees: fees , currency: currency , decimals: decimals  })=>{
    const royaltiesBps = fees?.reduce((total, fee)=>{
        if (fee?.kind === "royalty") total += fee?.bps || 0;
        return total;
    }, 0);
    const isUnavailable = !price;
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            p: "$4",
            borderBottom: "1px solid $borderColor",
            gap: "$2"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($200c3b96aa855ca1$var$Img, {
        src: img,
        alt: "Token Image",
        css: {
            borderRadius: 4,
            overflow: "hidden",
            visibility: !img || img.length === 0 ? "hidden" : "visible",
            flexShrink: 0,
            objectFit: "cover",
            filter: isUnavailable ? "grayscale(1)" : "unset"
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "start",
        justify: "center",
        css: {
            gap: 2,
            mr: "auto"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6",
        color: isUnavailable ? "subtle" : "base"
    }, token.name || `#${token.id}`), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3",
        color: isUnavailable ? "subtle" : "base"
    }, collection?.name), royaltiesBps ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3",
        color: "subtle"
    }, "Creator Royalties: ", royaltiesBps / 100, "%") : null), isUnavailable ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        color: "error",
        style: "body3",
        css: {
            display: "flex",
            alignItems: "center",
            flexShrink: 0
        }
    }, "Offer no longer available") : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $656b4c95fe3d553c$export$2e2bcd8739ae039), {
        side: "left",
        content: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                gap: "$2"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                gap: "$1"
            },
            justify: "between"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3"
        }, "Total Offer Value"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            amount: price,
            address: currency,
            decimals: decimals,
            textStyle: "subtitle2"
        })), fees?.map((fee, i)=>{
            let feeName = "Misc Fee";
            switch(fee.kind){
                case "marketplace":
                    feeName = "Marketplace Fee";
                    break;
                case "royalty":
                    feeName = "Creator Royalties";
                    break;
            }
            return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                justify: "between",
                key: i
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "body3",
                color: "subtle",
                css: {
                    mr: "$1"
                }
            }, feeName), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "body3",
                color: "subtle",
                css: {
                    ml: "auto"
                }
            }, "-"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
                amount: fee.amount,
                address: currency,
                decimals: decimals,
                textStyle: "subtitle2"
            }));
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            justify: "between",
            css: {
                gap: "$1"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3"
        }, "You Get"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            amount: netAmount,
            address: currency,
            decimals: decimals,
            textStyle: "subtitle2"
        })))
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "end",
        justify: "center",
        css: {
            gap: "$1",
            ml: "auto",
            height: "100%"
        }
    }, sourceImg && /*#__PURE__*/ (0, $TBcmg$react).createElement($200c3b96aa855ca1$var$Img, {
        src: sourceImg,
        css: {
            height: 16,
            width: 16
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
        amount: price,
        address: currency,
        decimals: decimals,
        textStyle: "subtitle2"
    }))));
};
var $200c3b96aa855ca1$export$2e2bcd8739ae039 = $200c3b96aa855ca1$var$AcceptBidLineItem;






const $1e2f6c55518d39c3$var$slideDown = (0, $TBcmg$keyframes)({
    from: {
        height: 0
    },
    to: {
        height: "var(--radix-collapsible-content-height)"
    }
});
const $1e2f6c55518d39c3$var$slideUp = (0, $TBcmg$keyframes)({
    from: {
        height: "var(--radix-collapsible-content-height)"
    },
    to: {
        height: 0
    }
});
const $1e2f6c55518d39c3$export$aadde00976f34151 = (0, $TBcmg$styled)($TBcmg$CollapsibleContent, {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    '&[data-state="open"]': {
        animation: `${$1e2f6c55518d39c3$var$slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`
    },
    '&[data-state="closed"]': {
        animation: `${$1e2f6c55518d39c3$var$slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`
    }
});
const $1e2f6c55518d39c3$export$2ad57374564f8390 = (0, $TBcmg$styled)($TBcmg$Root6, {
    borderRadius: 8,
    overflow: "hidden"
});
const $1e2f6c55518d39c3$export$6eb0f7ddcda6131f = /*#__PURE__*/ (0, $TBcmg$forwardRef)(({ children: children , trigger: trigger , contentProps: contentProps , open: open , onOpenChange: onOpenChange , ...props }, forwardedRef)=>{
    const [collapsibleOpen, setCollapsibleOpen] = (0, $TBcmg$useState)(false);
    (0, $TBcmg$useEffect)(()=>{
        if (open !== undefined && open !== collapsibleOpen) {
            setCollapsibleOpen(open);
            if (onOpenChange) onOpenChange(open);
        }
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($1e2f6c55518d39c3$export$2ad57374564f8390, {
        ...props,
        onOpenChange: (open)=>{
            setCollapsibleOpen(open);
            if (onOpenChange) onOpenChange(open);
        },
        open: collapsibleOpen
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Trigger3, {
        asChild: true
    }, trigger), /*#__PURE__*/ (0, $TBcmg$react).createElement($1e2f6c55518d39c3$export$aadde00976f34151, {
        ref: forwardedRef,
        ...contentProps
    }, children));
});









const $257531ce0e45ad5e$export$45aa975411b5e199 = ({ title: title , isInProgress: isInProgress , isComplete: isComplete , children: children , open: open , css: css , onOpenChange: onOpenChange  })=>{
    (0, $TBcmg$useEffect)(()=>{
        if (isComplete) onOpenChange(false);
    }, [
        isComplete
    ]);
    let backgroundColor = "transparent";
    let borderColor = "$neutralLine";
    if (isComplete) {
        backgroundColor = "$green6";
        borderColor = "$green9";
    } else if (isInProgress) {
        backgroundColor = "$accentSolid";
        borderColor = "$accentLine";
    }
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $1e2f6c55518d39c3$export$2ad57374564f8390), {
        open: open,
        onOpenChange: onOpenChange,
        css: {
            backgroundColor: "$gray3",
            ...css
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Trigger3, {
        asChild: true
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        justify: "between",
        css: {
            p: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center",
        css: {
            gap: "$3"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            width: 18,
            height: 18,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderStyle: "solid",
            borderWidth: 4,
            borderRadius: 999
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        css: {
            color: isComplete ? "$neutralText" : "$textColor"
        }
    }, title)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            color: "$neutralSolid",
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transition: ".3s"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faChevronDown)
    })))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $1e2f6c55518d39c3$export$aadde00976f34151), null, children));
};








const $94585ecf38154231$var$StyledImg = (0, $TBcmg$styled)("img");
const $94585ecf38154231$var$Img = (props)=>{
    const [imageBroken, setImageBroken] = (0, $TBcmg$useState)(false);
    (0, $TBcmg$useEffect)(()=>{
        if (imageBroken) setImageBroken(false);
    }, [
        props.src
    ]);
    return imageBroken || !props.src ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            ...props.css,
            background: "$neutralBgActive"
        },
        justify: "center",
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faImage),
        size: "2x"
    })) : /*#__PURE__*/ (0, $TBcmg$react).createElement($94585ecf38154231$var$StyledImg, {
        ...props,
        onError: (e)=>{
            setImageBroken(true);
        }
    });
};
var $94585ecf38154231$export$2e2bcd8739ae039 = $94585ecf38154231$var$Img;





const $33f57f7d3eb24b91$var$StyledImg = (0, $TBcmg$styled)((0, $94585ecf38154231$export$2e2bcd8739ae039), {
    width: 24,
    height: 24,
    borderRadius: 4
});
const $33f57f7d3eb24b91$var$Spinner = ()=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), {
        css: {
            display: "flex",
            alignItems: "center"
        },
        icon: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                color: "$accentSolidHover"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCircleNotch),
            width: 16,
            height: 16
        }))
    });
const $33f57f7d3eb24b91$export$9db3c5389236a920 = ({ step: step , tokensData: tokensData , chain: chain , open: open , isCurrentStep: isCurrentStep  })=>{
    const [collapsibleOpen, setCollapsibleOpen] = (0, $TBcmg$useState)(false);
    const isComplete = step && step.items?.every((item)=>item?.status == "complete") ? true : false;
    (0, $TBcmg$useEffect)(()=>{
        if (open !== undefined && open !== collapsibleOpen) setCollapsibleOpen(open);
    }, [
        open
    ]);
    const pathMap = (0, $TBcmg$useMemo)(()=>tokensData.reduce((paths, tokenData)=>{
            tokenData.bidsPath.forEach((bidPath)=>{
                if (bidPath.orderId) paths[bidPath.orderId] = bidPath;
            });
            return paths;
        }, {}), [
        tokensData
    ]);
    const tokensMap = (0, $TBcmg$useMemo)(()=>tokensData.reduce((map, tokenData)=>{
            const contract = (tokenData?.collectionId || "").split(":")[0];
            map[`${contract}:${tokenData.tokenId}`] = tokenData;
            return map;
        }, {}), []);
    if (step.id !== "sale" && step.id !== "nft-approval") return null;
    const title = step.id === "sale" ? "Confirm Sale" : "Approve Collections";
    const disabled = !step.items || !step.items.length;
    const baseApiUrl = chain?.baseApiUrl;
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $257531ce0e45ad5e$export$45aa975411b5e199), {
        title: title,
        open: disabled ? false : collapsibleOpen,
        onOpenChange: disabled ? ()=>{} : setCollapsibleOpen,
        isInProgress: isCurrentStep,
        isComplete: isComplete,
        css: {
            margin: 12
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $9051fde5e764f5e2$export$2e2bcd8739ae039), {
        css: {
            px: "$4",
            pb: "$2",
            gridTemplateColumns: "auto 1fr 16px",
            gridRowGap: 24
        }
    }, step?.items?.map((item, i)=>{
        const paths = item.orderIds?.map((id)=>pathMap[id]) || [];
        const marketplaces = Array.from(paths.reduce((marketplaces, path)=>{
            if (path.source) marketplaces.add(path.source);
            return marketplaces;
        }, new Set())).join(",");
        if (step.id === "sale") {
            const images = paths.reduce((images, path)=>{
                const tokenKey = `${path?.contract}:${path?.tokenId}`;
                const tokenData = tokensMap[tokenKey]?.tokenData;
                const image = tokenData?.token?.imageSmall || baseApiUrl ? `${baseApiUrl}/redirect/tokens/${tokenKey}/image/v1?imageSize=small` : null;
                if (image && images.length < 4) images.push(image);
                return images;
            }, []);
            return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, {
                key: i
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                css: {
                    mr: "$2"
                }
            }, images.map((image, i)=>/*#__PURE__*/ (0, $TBcmg$react).createElement($33f57f7d3eb24b91$var$StyledImg, {
                    key: i,
                    src: image,
                    css: {
                        marginLeft: i > 0 ? -14 : 0
                    }
                }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "body2",
                color: "subtle",
                css: {
                    display: "flex",
                    alignItems: "center"
                }
            }, "Confirm sale of ", paths.length, " ", paths.length > 1 ? "items" : "item", " on", " ", marketplaces.length > 0 ? marketplaces : "exchange"), isCurrentStep ? /*#__PURE__*/ (0, $TBcmg$react).createElement($33f57f7d3eb24b91$var$Spinner, null) : null);
        } else {
            const path = paths.length > 0 ? paths[0] : null;
            const tokenKey = `${path?.contract}:${path?.tokenId}`;
            const collection = tokensMap[tokenKey]?.tokenData?.token?.collection;
            const collectionName = collection?.name || "Collection";
            const collectionImage = collection?.image || baseApiUrl ? `${baseApiUrl}/redirect/collections/${path?.contract}/image/v1` : "";
            const sourceImages = paths.map((path)=>`${baseApiUrl}/redirect/sources/${path.source}/logo/v2`);
            return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, {
                key: i
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                css: {
                    mr: "$2"
                }
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement($33f57f7d3eb24b91$var$StyledImg, {
                src: collectionImage
            }), sourceImages.map((src, i)=>/*#__PURE__*/ (0, $TBcmg$react).createElement($33f57f7d3eb24b91$var$StyledImg, {
                    key: i,
                    src: src,
                    css: {
                        marginLeft: -14
                    }
                }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "body2",
                color: "subtle",
                css: {
                    display: "flex",
                    alignItems: "center"
                }
            }, "Approve ", collectionName, " for", " ", marketplaces.length > 0 ? marketplaces : "trading"), isCurrentStep ? /*#__PURE__*/ (0, $TBcmg$react).createElement($33f57f7d3eb24b91$var$Spinner, null) : null);
        }
    })));
};






const $ece9f53dc41fb378$var$Img = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("img", {
    height: 56,
    width: 56,
    borderRadius: 4,
    overflow: "hidden",
    flexShrink: 0,
    objectFit: "cover"
});
const $ece9f53dc41fb378$var$AcceptBidSummaryLineItem = ({ tokensData: tokensData , prices: prices , usdPrices: usdPrices , chain: chain  })=>{
    const imgs = (0, $TBcmg$useMemo)(()=>{
        if (!tokensData || tokensData.length <= 0) return [];
        const imgs = [];
        const baseApiUrl = chain?.baseApiUrl;
        for(var i = 0; i < tokensData.length; i++){
            const token = tokensData[i];
            const contract = (token?.collectionId || "").split(":")[0];
            const tokenId = `${contract}:${token?.tokenId}`;
            if (token?.tokenData?.token?.imageSmall || baseApiUrl) imgs.push(`${baseApiUrl}/redirect/tokens/${tokenId}/image/v1?imageSize=small`);
            if (imgs.length > 2) break;
        }
        return imgs;
    }, [
        tokensData,
        chain
    ]);
    const itemCount = (0, $TBcmg$useMemo)(()=>tokensData.reduce((total, tokenData)=>{
            tokenData.bidsPath.forEach((path)=>{
                total += path.quantity || 0;
            });
            return total;
        }, 0), [
        tokensData
    ]);
    const usdPrice = (0, $TBcmg$useMemo)(()=>{
        let missingConversion = false;
        const totalUsd = prices.reduce((total, { amount: amount , currency: currency  })=>{
            const conversion = usdPrices[currency.symbol];
            if (conversion) total += conversion.price * amount;
            else missingConversion = true;
            return total;
        }, 0);
        return missingConversion ? 0 : totalUsd;
    }, [
        prices,
        usdPrices
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        css: {
            p: "$4",
            borderBottom: "1px solid $borderColor",
            gap: "$2"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        justify: "between"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        color: "subtle",
        style: "subtitle2"
    }, "Item"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        color: "subtle",
        style: "subtitle2"
    }, "You Get")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            mr: "$4",
            position: "relative"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($ece9f53dc41fb378$var$Img, {
        src: imgs[0],
        alt: "Token Image",
        css: {
            visibility: !imgs[0] ? "hidden" : "visible",
            mr: itemCount > 1 && imgs[1] ? 8 : 0
        }
    }), itemCount > 1 && imgs[1] ? /*#__PURE__*/ (0, $TBcmg$react).createElement($ece9f53dc41fb378$var$Img, {
        src: imgs[1],
        alt: "Token Image",
        css: {
            position: "absolute",
            right: -5,
            zIndex: -1,
            opacity: 0.5
        }
    }) : null), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6"
    }, itemCount, " ", itemCount > 1 ? "Items" : "Item"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "end",
        justify: "end",
        direction: "column",
        css: {
            ml: "auto",
            gap: "$2"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center"
    }, prices.map(({ netAmount: netAmount , currency: currency  }, i)=>{
        return /*#__PURE__*/ (0, $TBcmg$react).createElement("span", {
            key: i
        }, i > 0 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            color: "subtle",
            style: "subtitle2",
            css: {
                mx: "$1"
            }
        }, "+") : null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            amount: netAmount,
            address: currency.contract,
            decimals: currency.decimals,
            textStyle: "h6",
            logoWidth: 19
        }));
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
        amount: usdPrice,
        style: "tiny",
        color: "subtle"
    }))));
};
var $ece9f53dc41fb378$export$2e2bcd8739ae039 = $ece9f53dc41fb378$var$AcceptBidSummaryLineItem;


const $d8c34b3c598b5433$var$ModalCopy = {
    title: "Accept Offering.....",
    ctaAccept: "Accept",
    ctaAwaitingApproval: "Waiting for Approval",
    ctaClose: "Close",
    ctaDone: "Done"
};
function $d8c34b3c598b5433$export$91ee3fa7c9f4e6c2({ openState: openState , trigger: trigger , tokens: tokens , normalizeRoyalties: normalizeRoyalties , copyOverrides: copyOverrides , onBidAccepted: onBidAccepted , onClose: onClose , onBidAcceptError: onBidAcceptError , onCurrentStepUpdate: onCurrentStepUpdate  }) {
    const [open, setOpen] = (0, $b69d00be56c1bdb6$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const copy = {
        ...$d8c34b3c598b5433$var$ModalCopy,
        ...copyOverrides
    };
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $be959054ceb8cef7$export$2d08bd3f57775802), {
        open: open,
        tokens: tokens,
        normalizeRoyalties: normalizeRoyalties
    }, ({ loading: loading , acceptBidStep: acceptBidStep , transactionError: transactionError , txHash: txHash , usdPrices: usdPrices , prices: prices , tokensData: tokensData , address: address , blockExplorerBaseUrl: blockExplorerBaseUrl , stepData: stepData , acceptBid: acceptBid  })=>{
        const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
        const chain = client?.currentChain();
        (0, $TBcmg$useEffect)(()=>{
            if (acceptBidStep === (0, $be959054ceb8cef7$export$f4dd52ca63b5fdde).Complete && onBidAccepted) {
                const data = {
                    tokens: tokensData,
                    maker: address
                };
                if (txHash) data.txHash = txHash;
                onBidAccepted(data);
            }
        }, [
            acceptBidStep
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (transactionError && onBidAcceptError) {
                const data = {
                    tokens: tokensData,
                    maker: address
                };
                onBidAcceptError(transactionError, data);
            }
        }, [
            transactionError
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (stepData && onCurrentStepUpdate) onCurrentStepUpdate(stepData);
        }, [
            stepData
        ]);
        const bidCount = (0, $TBcmg$useMemo)(()=>tokensData.reduce((total, tokenData)=>total += tokenData.bidsPath.length, 0), [
            tokensData
        ]);
        const salesTxHashes = stepData?.currentStep?.items?.reduce((txHashes, item)=>{
            item.salesData?.forEach((saleData)=>{
                if (saleData.txHash) txHashes.add(saleData.txHash);
            });
            return txHashes;
        }, new Set()) || [];
        const totalSales = Array.from(salesTxHashes).length;
        const failedSales = totalSales - (stepData?.currentStep?.items?.length || 0);
        const successfulSales = totalSales - failedSales;
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $32d03e1adcee2721$export$2b77a92f1a5ad772), {
            trigger: trigger,
            title: copy.title,
            open: open,
            onOpenChange: (open)=>{
                if (!open && onClose) {
                    const data = {
                        tokens: tokensData,
                        maker: address
                    };
                    onClose(data, stepData, acceptBidStep);
                }
                setOpen(open);
            },
            loading: loading
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement("h1", null, "Hello World"), acceptBidStep === (0, $be959054ceb8cef7$export$f4dd52ca63b5fdde).Unavailable && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                mt: 80
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: "$neutralSolidHover",
                m: "0 auto"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faEnvelopeOpen),
            style: {
                height: 24,
                width: 24
            }
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            css: {
                mt: "$2",
                mb: 74,
                textAlign: "center"
            }
        }, "Offers are no longer available"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>setOpen(false),
            css: {
                m: "$4",
                flex: 1
            }
        }, copy.ctaClose)), acceptBidStep === (0, $be959054ceb8cef7$export$f4dd52ca63b5fdde).Checkout && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                color: "$errorAccent",
                p: "$4",
                gap: "$2",
                background: "$wellBackground"
            },
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCircleExclamation),
            width: 16,
            height: 16
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "errorLight"
        }, transactionError.message)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            justify: "between",
            css: {
                px: "$4",
                pt: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle"
        }, bidCount > 1 ? `${bidCount} Items` : "Item"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle"
        }, "Total Offer Value")), tokensData.map(({ tokenData: tokenData , bidsPath: bidsPath  }, i)=>{
            if (!bidsPath || !bidsPath.length) return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $200c3b96aa855ca1$export$2e2bcd8739ae039), {
                key: i,
                token: {
                    name: tokenData?.token?.name || "",
                    id: tokenData?.token?.tokenId || ""
                },
                collection: {
                    id: tokenData?.token?.collection?.id || "",
                    name: tokenData?.token?.collection?.name || ""
                },
                img: tokenData?.token?.imageSmall || tokenData?.token?.collection?.image || ""
            });
            else return bidsPath.map((bidPath)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $200c3b96aa855ca1$export$2e2bcd8739ae039), {
                    key: i,
                    token: {
                        name: tokenData?.token?.name || "",
                        id: tokenData?.token?.tokenId || ""
                    },
                    collection: {
                        id: tokenData?.token?.collection?.id || "",
                        name: tokenData?.token?.collection?.name || ""
                    },
                    img: tokenData?.token?.imageSmall || tokenData?.token?.collection?.image || "",
                    netAmount: bidPath.quote,
                    price: bidPath.totalPrice,
                    fees: bidPath.builtInFees,
                    currency: bidPath.currency,
                    decimals: bidPath.currencyDecimals,
                    sourceImg: bidPath.source ? `https://api.reservoir.tools/redirect/sources/${bidPath.source}/logo/v2` : ""
                }));
        }), prices.map((price, i)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $1e2f6c55518d39c3$export$6eb0f7ddcda6131f), {
                key: i,
                trigger: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                    justify: "between",
                    css: {
                        p: "$4"
                    }
                }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                    style: "h6"
                }, price.currency?.symbol, " You Get", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                    css: {
                        color: "$neutralSolidHover",
                        ml: "$2"
                    }
                }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
                    icon: (0, $TBcmg$faChevronDown),
                    width: 16,
                    height: 16
                }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                    direction: "column",
                    css: {
                        gap: "$1"
                    }
                }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
                    amount: price.netAmount,
                    decimals: price.currency?.decimals,
                    address: price.currency?.contract,
                    symbol: price.currency?.symbol,
                    textStyle: "h6"
                }), price.currency?.symbol && usdPrices[price.currency.symbol] ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
                    color: "subtle",
                    style: "tiny",
                    amount: usdPrices[price.currency.symbol].price * price.amount,
                    css: {
                        textAlign: "end"
                    }
                }) : null))
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                css: {
                    gap: "$2",
                    padding: "$4",
                    paddingTop: 0
                },
                direction: "column"
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                justify: "between"
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle"
            }, "Total ", price.currency?.symbol, " Offer Value"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
                amount: price.amount,
                decimals: price.currency?.decimals,
                address: price.currency?.contract,
                symbol: price.currency?.symbol,
                textStyle: "subtitle2"
            })), price.royalty > 0 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                justify: "between"
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle"
            }, "Creator Royalties"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                css: {
                    ml: "auto"
                },
                style: "subtitle2",
                color: "subtle"
            }, "-"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
                amount: price.royalty,
                decimals: price.currency?.decimals,
                address: price.currency?.contract,
                symbol: price.currency?.symbol,
                textStyle: "subtitle2"
            })) : null, price.marketplaceFee > 0 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
                justify: "between"
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                style: "subtitle2",
                color: "subtle"
            }, "Marketplace Fee"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                css: {
                    ml: "auto"
                },
                style: "subtitle2",
                color: "subtle"
            }, "-"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
                amount: price.marketplaceFee,
                decimals: price.currency?.decimals,
                address: price.currency?.contract,
                symbol: price.currency?.symbol,
                textStyle: "subtitle2"
            })) : null))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                flex: 1,
                m: "$4"
            },
            color: "primary",
            onClick: acceptBid
        }, copy.ctaAccept)), acceptBidStep === (0, $be959054ceb8cef7$export$f4dd52ca63b5fdde).Auth && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $ece9f53dc41fb378$export$2e2bcd8739ae039), {
            tokensData: tokensData,
            usdPrices: usdPrices,
            prices: prices,
            chain: chain
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $d6ae44a4b381214a$export$2e2bcd8739ae039), {
            css: {
                mt: 48,
                mb: 60,
                gap: 20
            }
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: true,
            css: {
                m: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), copy.ctaAwaitingApproval)), acceptBidStep === (0, $be959054ceb8cef7$export$f4dd52ca63b5fdde).ApproveMarketplace && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $ece9f53dc41fb378$export$2e2bcd8739ae039), {
            tokensData: tokensData,
            usdPrices: usdPrices,
            prices: prices,
            chain: chain
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            css: {
                m: "$4",
                textAlign: "center"
            }
        }, "Confirm Selling"), stepData?.steps.map((step)=>step?.items && step.items.length > 0 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $33f57f7d3eb24b91$export$9db3c5389236a920), {
                key: step.id,
                step: step,
                tokensData: tokensData,
                chain: chain,
                isCurrentStep: stepData.currentStep.id === step.id,
                open: stepData.currentStep.id === step.id
            }) : null), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: true,
            css: {
                m: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), copy.ctaAwaitingApproval)), acceptBidStep === (0, $be959054ceb8cef7$export$f4dd52ca63b5fdde).Finalizing && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            justify: "center",
            css: {
                gap: "$4",
                pb: "$5"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $ece9f53dc41fb378$export$2e2bcd8739ae039), {
            tokensData: tokensData,
            usdPrices: usdPrices,
            prices: prices,
            chain: chain
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            css: {
                textAlign: "center"
            }
        }, "Finalizing on blockchain"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            css: {
                textAlign: "center",
                px: "$4"
            }
        }, "You can close this modal while it finalizes on the blockchain. The transaction will continue in the background."), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: "$neutralSolid",
                width: 32,
                height: 32,
                m: "0 auto"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCube),
            style: {
                width: 32,
                height: 32
            }
        }))), acceptBidStep === (0, $be959054ceb8cef7$export$f4dd52ca63b5fdde).Complete && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                py: "$5",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: failedSales ? "$errorAccent" : "$successAccent"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: failedSales ? (0, $TBcmg$faCircleExclamation) : (0, $TBcmg$faCircleCheck),
            fontSize: 32
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h5",
            css: {
                my: 24
            }
        }, failedSales ? `${successfulSales} ${successfulSales > 1 ? "items" : "item"} sold, ${failedSales} ${failedSales > 1 ? "items" : "item"} failed` : `${totalSales > 1 ? "Offers" : "Offer"} accepted!`), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                gap: "$2",
                mb: "$3"
            }
        }, stepData?.currentStep?.items?.map((item)=>{
            const txHash = item.txHash ? `${item.txHash.slice(0, 4)}...${item.txHash.slice(-4)}` : "";
            return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
                href: `${blockExplorerBaseUrl}/tx/${item?.txHash}`,
                color: "primary",
                weight: "medium",
                target: "_blank",
                css: {
                    fontSize: 12
                }
            }, "View transaction: ", txHash);
        }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                flexDirection: "column",
                gap: "$3",
                "@bp1": {
                    flexDirection: "row"
                }
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                width: "100%"
            },
            onClick: ()=>{
                setOpen(false);
            }
        }, copy.ctaDone))));
    });
}
$d8c34b3c598b5433$export$91ee3fa7c9f4e6c2.Custom = (0, $be959054ceb8cef7$export$2d08bd3f57775802);









var $03948d0d1ea50134$export$c5c5c857eaef0fde;
(function(CancelStep) {
    CancelStep[CancelStep["Cancel"] = 0] = "Cancel";
    CancelStep[CancelStep["Approving"] = 1] = "Approving";
    CancelStep[CancelStep["Complete"] = 2] = "Complete";
})($03948d0d1ea50134$export$c5c5c857eaef0fde || ($03948d0d1ea50134$export$c5c5c857eaef0fde = {}));
const $03948d0d1ea50134$export$d2f670ba420b64c2 = ({ open: open , bidId: bidId , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    const { data: wallet  } = (0, $TBcmg$useWalletClient)();
    const [cancelStep, setCancelStep] = (0, $TBcmg$useState)($03948d0d1ea50134$export$c5c5c857eaef0fde.Cancel);
    const [transactionError, setTransactionError] = (0, $TBcmg$useState)();
    const [stepData, setStepData] = (0, $TBcmg$useState)(null);
    const [steps, setSteps] = (0, $TBcmg$useState)(null);
    const { chain: activeChain  } = (0, $TBcmg$useNetwork)();
    const blockExplorerBaseUrl = activeChain?.blockExplorers?.default.url || "https://etherscan.io";
    const { data: bids , isFetchingPage: isFetchingPage  } = (0, $e5a3042549429464$export$2e2bcd8739ae039)({
        ids: bidId,
        normalizeRoyalties: normalizeRoyalties,
        includeCriteriaMetadata: true,
        includeRawData: true
    }, {
        revalidateFirstPage: true
    }, open && bidId ? true : false);
    const bid = bids && bids[0] ? bids[0] : undefined;
    const currency = bid?.price?.currency;
    const coinConversion = (0, $b5d8dec284676ed1$export$2e2bcd8739ae039)(open && bid ? "USD" : undefined, currency?.symbol);
    const usdPrice = coinConversion.length > 0 ? coinConversion[0].price : 0;
    const totalUsd = usdPrice * (bid?.price?.amount?.decimal || 0);
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const cancelOrder = (0, $TBcmg$useCallback)(()=>{
        if (!wallet) {
            const error = new Error("Missing a wallet/signer");
            setTransactionError(error);
            throw error;
        }
        if (!bidId) {
            const error = new Error("Missing bid id to cancel");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        setCancelStep($03948d0d1ea50134$export$c5c5c857eaef0fde.Approving);
        client.actions.cancelOrder({
            ids: [
                bidId
            ],
            wallet: wallet,
            onProgress: (steps)=>{
                if (!steps) return;
                setSteps(steps);
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                const currentStepIndex = executableSteps.findIndex((step)=>{
                    currentStepItem = step.items?.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStepItem) setStepData({
                    totalSteps: stepCount,
                    stepProgress: currentStepIndex,
                    currentStep: currentStep,
                    currentStepItem: currentStepItem
                });
                else if (steps.every((step)=>!step.items || step.items.length == 0 || step.items?.every((item)=>item.status === "complete"))) setCancelStep($03948d0d1ea50134$export$c5c5c857eaef0fde.Complete);
            }
        }).catch((e)=>{
            const error = e;
            const errorStatus = error?.statusCode;
            let message = "Oops, something went wrong. Please try again.";
            if (errorStatus >= 400 && errorStatus < 500) message = error.message;
            const transactionError = new Error(message, {
                cause: error
            });
            setTransactionError(transactionError);
            setCancelStep($03948d0d1ea50134$export$c5c5c857eaef0fde.Cancel);
            setStepData(null);
            setSteps(null);
        });
    }, [
        bidId,
        client,
        wallet
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (!open) {
            setCancelStep($03948d0d1ea50134$export$c5c5c857eaef0fde.Cancel);
            setTransactionError(null);
            setStepData(null);
            setSteps(null);
        }
    }, [
        open
    ]);
    let tokenId;
    if (bid?.criteria?.kind === "token") tokenId = bid?.tokenSetId?.split(":")[2];
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, children({
        loading: isFetchingPage !== undefined ? isFetchingPage : true,
        bid: bid,
        tokenId: tokenId,
        cancelStep: cancelStep,
        transactionError: transactionError,
        usdPrice: usdPrice,
        totalUsd: totalUsd,
        blockExplorerBaseUrl: blockExplorerBaseUrl,
        steps: steps,
        stepData: stepData,
        setCancelStep: setCancelStep,
        cancelOrder: cancelOrder
    }));
};








const $140a00430df0958e$var$ModalCopy = {
    title: "Cancel Offer",
    ctaCancel: "Continue to Cancel",
    ctaAwaitingApproval: "Waiting for approval...",
    ctaAwaitingValidation: "Waiting for transaction to be validated",
    ctaClose: "Close"
};
function $140a00430df0958e$export$89d1e00b7fa831db({ openState: openState , bidId: bidId , trigger: trigger , normalizeRoyalties: normalizeRoyalties , copyOverrides: copyOverrides , onClose: onClose , onCancelComplete: onCancelComplete , onCancelError: onCancelError  }) {
    const copy = {
        ...$140a00430df0958e$var$ModalCopy,
        ...copyOverrides
    };
    const [open, setOpen] = (0, $b69d00be56c1bdb6$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const { chain: activeChain  } = (0, $TBcmg$useNetwork)();
    const reservoirChain = client?.currentChain();
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $03948d0d1ea50134$export$d2f670ba420b64c2), {
        bidId: bidId,
        open: open,
        normalizeRoyalties: normalizeRoyalties
    }, ({ loading: loading , bid: bid , tokenId: tokenId , cancelStep: cancelStep , transactionError: transactionError , stepData: stepData , totalUsd: totalUsd , blockExplorerBaseUrl: blockExplorerBaseUrl , cancelOrder: cancelOrder  })=>{
        const expires = (0, $2f4c390a81073897$export$2e2bcd8739ae039)(bid?.expiration);
        const collectionId = bid?.criteria?.data?.collection?.id;
        const bidImg = tokenId ? `${reservoirChain?.baseApiUrl}/redirect/tokens/${collectionId}:${tokenId}/image/v1?imageSize=small` : `${reservoirChain?.baseApiUrl}/redirect/collections/${collectionId}/image/v1`;
        const isAttributeOffer = bid?.criteria?.kind === "attribute";
        (0, $TBcmg$useEffect)(()=>{
            if (cancelStep === (0, $03948d0d1ea50134$export$c5c5c857eaef0fde).Complete && onCancelComplete) {
                const data = {
                    bid: bid,
                    stepData: stepData
                };
                onCancelComplete(data);
            }
        }, [
            cancelStep
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (transactionError && onCancelError) {
                const data = {
                    bid: bid,
                    stepData: stepData
                };
                onCancelError(transactionError, data);
            }
        }, [
            transactionError
        ]);
        const isBidAvailable = bid && (bid.status === "active" || bid.status === "inactive") && !loading;
        const isOracleOrder = bid?.isNativeOffChainCancellable;
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $32d03e1adcee2721$export$2b77a92f1a5ad772), {
            trigger: trigger,
            title: copy.title,
            open: open,
            onOpenChange: (open)=>{
                if (!open && onClose) {
                    const data = {
                        bid: bid,
                        stepData: stepData
                    };
                    onClose(data, cancelStep);
                }
                setOpen(open);
            },
            loading: loading
        }, !isBidAvailable && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            justify: "center",
            css: {
                px: "$4",
                py: "$6"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            css: {
                textAlign: "center"
            }
        }, "Selected bid is no longer available")), isBidAvailable && cancelStep === (0, $03948d0d1ea50134$export$c5c5c857eaef0fde).Cancel && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                color: "$errorAccent",
                p: "$4",
                gap: "$2",
                background: "$wellBackground"
            },
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCircleExclamation),
            width: 16,
            height: 16
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "errorLight"
        }, transactionError.message)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                borderBottom: "1px solid $borderColor"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6a7867ba1ffb99fc$export$2e2bcd8739ae039), {
            img: bidImg,
            name: bid?.criteria?.data?.token?.name,
            price: bid?.price?.amount?.decimal,
            usdPrice: totalUsd,
            collection: bid?.criteria?.data?.collection?.name || "",
            currencyContract: bid?.price?.currency?.contract,
            currencyDecimals: bid?.price?.currency?.decimals,
            currencySymbol: bid?.price?.currency?.symbol,
            expires: expires,
            source: bid?.source?.icon || "",
            priceSubtitle: "Offer"
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "subtle",
            css: {
                mt: "$3",
                mr: "$3",
                ml: "$3",
                textAlign: "center"
            }
        }, !isOracleOrder ? "This action will cancel your offer. You will be prompted to confirm this cancellation from your wallet. A gas fee is required." : "This will cancel your offer for free. You will be prompted to confirm this cancellation from your wallet."), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: cancelOrder,
            css: {
                m: "$4"
            }
        }, !isOracleOrder && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faGasPump),
            width: "16",
            height: "16"
        }), copy.ctaCancel)), cancelStep === (0, $03948d0d1ea50134$export$c5c5c857eaef0fde).Approving && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                borderBottom: "1px solid $borderColor"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6a7867ba1ffb99fc$export$2e2bcd8739ae039), {
            img: bidImg,
            name: bid?.criteria?.data?.token?.name,
            price: bid?.price?.amount?.decimal,
            usdPrice: totalUsd,
            collection: bid?.criteria?.data?.collection?.name || "",
            currencyContract: bid?.price?.currency?.contract,
            currencyDecimals: bid?.price?.currency?.decimals,
            currencySymbol: bid?.price?.currency?.symbol,
            expires: expires,
            source: bid?.source?.icon || "",
            priceSubtitle: "Offer"
        })), !stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), {
            css: {
                height: 206
            }
        }), stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e92d8c2581b5f9df$export$2e2bcd8739ae039), {
            title: stepData?.currentStepItem.txHash ? "Finalizing on blockchain" : "Confirm cancelation in your wallet",
            txHash: stepData?.currentStepItem.txHash,
            blockExplorerBaseUrl: `${blockExplorerBaseUrl}/tx/${stepData?.currentStepItem.txHash}`
        }), isAttributeOffer && !stepData?.currentStepItem.txHash && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            justify: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "subtle",
            css: {
                maxWidth: 400,
                textAlign: "center",
                mx: "$3"
            }
        }, "This will cancel your offer on all items that were included in this attribute offer."))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: true,
            css: {
                m: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), stepData?.currentStepItem.txHash ? copy.ctaAwaitingValidation : copy.ctaAwaitingApproval)), cancelStep === (0, $03948d0d1ea50134$export$c5c5c857eaef0fde).Complete && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                py: "$5",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h5",
            css: {
                mb: "$2"
            }
        }, "Offer Canceled!"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "subtle",
            css: {
                mb: 24
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, "Your", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "accent"
        }, bid?.source?.name), " ", "offer for", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "accent"
        }, bid?.criteria?.data?.token?.name || bid?.criteria?.data?.collection?.name, " "), "at ", bid?.price?.amount?.decimal, " ", bid?.price?.currency?.symbol, " has been canceled.")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
            color: "primary",
            weight: "medium",
            css: {
                fontSize: 12
            },
            href: `${blockExplorerBaseUrl}/tx/${stepData?.currentStepItem.txHash}`,
            target: "_blank"
        }, "View on", " ", activeChain?.blockExplorers?.default.name || "Etherscan")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                setOpen(false);
            },
            css: {
                m: "$4"
            }
        }, copy.ctaClose)));
    });
}
$140a00430df0958e$export$89d1e00b7fa831db.Custom = (0, $03948d0d1ea50134$export$d2f670ba420b64c2);









var $6e7449d8ef933807$export$c5c5c857eaef0fde;
(function(CancelStep) {
    CancelStep[CancelStep["Cancel"] = 0] = "Cancel";
    CancelStep[CancelStep["Approving"] = 1] = "Approving";
    CancelStep[CancelStep["Complete"] = 2] = "Complete";
})($6e7449d8ef933807$export$c5c5c857eaef0fde || ($6e7449d8ef933807$export$c5c5c857eaef0fde = {}));
const $6e7449d8ef933807$export$784ecbb108ae6a2c = ({ open: open , listingId: listingId , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    const { data: wallet  } = (0, $TBcmg$useWalletClient)();
    const [cancelStep, setCancelStep] = (0, $TBcmg$useState)($6e7449d8ef933807$export$c5c5c857eaef0fde.Cancel);
    const [transactionError, setTransactionError] = (0, $TBcmg$useState)();
    const [stepData, setStepData] = (0, $TBcmg$useState)(null);
    const [steps, setSteps] = (0, $TBcmg$useState)(null);
    const { chain: activeChain  } = (0, $TBcmg$useNetwork)();
    const blockExplorerBaseUrl = activeChain?.blockExplorers?.default.url || "https://etherscan.io";
    const { data: listings , isFetchingPage: isFetchingPage  } = (0, $b9d7d4ec194b807a$export$2e2bcd8739ae039)({
        ids: listingId,
        normalizeRoyalties: normalizeRoyalties,
        includeCriteriaMetadata: true,
        includeRawData: true
    }, {
        revalidateFirstPage: true
    }, open && listingId ? true : false);
    const listing = listings && listings[0] ? listings[0] : undefined;
    const currency = listing?.price?.currency;
    const coinConversion = (0, $b5d8dec284676ed1$export$2e2bcd8739ae039)(open && listing ? "USD" : undefined, currency?.symbol);
    const usdPrice = coinConversion.length > 0 ? coinConversion[0].price : 0;
    const totalUsd = usdPrice * (listing?.price?.amount?.decimal || 0);
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const cancelOrder = (0, $TBcmg$useCallback)(()=>{
        if (!wallet) {
            const error = new Error("Missing a wallet/signer");
            setTransactionError(error);
            throw error;
        }
        if (!listingId) {
            const error = new Error("Missing list id to cancel");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        setCancelStep($6e7449d8ef933807$export$c5c5c857eaef0fde.Approving);
        client.actions.cancelOrder({
            ids: [
                listingId
            ],
            wallet: wallet,
            onProgress: (steps)=>{
                if (!steps) return;
                setSteps(steps);
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                const currentStepIndex = executableSteps.findIndex((step)=>{
                    currentStepItem = step.items?.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStepItem) setStepData({
                    totalSteps: stepCount,
                    stepProgress: currentStepIndex,
                    currentStep: currentStep,
                    currentStepItem: currentStepItem
                });
                else if (steps.every((step)=>!step.items || step.items.length == 0 || step.items?.every((item)=>item.status === "complete"))) setCancelStep($6e7449d8ef933807$export$c5c5c857eaef0fde.Complete);
            }
        }).catch((e)=>{
            const error = e;
            const errorStatus = error?.statusCode;
            let message = "Oops, something went wrong. Please try again.";
            if (errorStatus >= 400 && errorStatus < 500) message = error.message;
            //@ts-ignore: Should be fixed in an update to typescript
            const transactionError = new Error(message, {
                cause: error
            });
            setTransactionError(transactionError);
            setCancelStep($6e7449d8ef933807$export$c5c5c857eaef0fde.Cancel);
            setStepData(null);
            setSteps(null);
        });
    }, [
        listingId,
        client,
        wallet
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (!open) {
            setCancelStep($6e7449d8ef933807$export$c5c5c857eaef0fde.Cancel);
            setTransactionError(null);
            setStepData(null);
            setSteps(null);
        }
    }, [
        open
    ]);
    const tokenId = listing?.tokenSetId?.split(":")[2];
    const contract = listing?.tokenSetId?.split(":")[1];
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, children({
        loading: isFetchingPage !== undefined ? isFetchingPage : true,
        listing: listing,
        tokenId: tokenId,
        contract: contract,
        cancelStep: cancelStep,
        transactionError: transactionError,
        usdPrice: usdPrice,
        totalUsd: totalUsd,
        blockExplorerBaseUrl: blockExplorerBaseUrl,
        steps: steps,
        stepData: stepData,
        setCancelStep: setCancelStep,
        cancelOrder: cancelOrder
    }));
};








const $8a7188f82a67e5bb$var$ModalCopy = {
    title: "Cancel Listing",
    ctaCancel: "Continue to Cancel",
    ctaAwaitingApproval: "Waiting for approval...",
    ctaAwaitingValidation: "Waiting for transaction to be validated",
    ctaClose: "Close"
};
function $8a7188f82a67e5bb$export$5ccdc2f8532db25b({ openState: openState , listingId: listingId , trigger: trigger , normalizeRoyalties: normalizeRoyalties , copyOverrides: copyOverrides , onClose: onClose , onCancelComplete: onCancelComplete , onCancelError: onCancelError  }) {
    const copy = {
        ...$8a7188f82a67e5bb$var$ModalCopy,
        ...copyOverrides
    };
    const [open, setOpen] = (0, $b69d00be56c1bdb6$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const { chain: activeChain  } = (0, $TBcmg$useNetwork)();
    const reservoirChain = client?.currentChain();
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6e7449d8ef933807$export$784ecbb108ae6a2c), {
        listingId: listingId,
        open: open,
        normalizeRoyalties: normalizeRoyalties
    }, ({ loading: loading , listing: listing , tokenId: tokenId , contract: contract , cancelStep: cancelStep , transactionError: transactionError , stepData: stepData , totalUsd: totalUsd , blockExplorerBaseUrl: blockExplorerBaseUrl , cancelOrder: cancelOrder  })=>{
        const expires = (0, $2f4c390a81073897$export$2e2bcd8739ae039)(listing?.expiration);
        const listingImg = tokenId ? `${reservoirChain?.baseApiUrl}/redirect/tokens/${contract}:${tokenId}/image/v1?imageSize=small` : `${reservoirChain?.baseApiUrl}/redirect/collections/${contract}/image/v1`;
        (0, $TBcmg$useEffect)(()=>{
            if (cancelStep === (0, $6e7449d8ef933807$export$c5c5c857eaef0fde).Complete && onCancelComplete) {
                const data = {
                    listing: listing,
                    stepData: stepData
                };
                onCancelComplete(data);
            }
        }, [
            cancelStep
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (transactionError && onCancelError) {
                const data = {
                    listing: listing,
                    stepData: stepData
                };
                onCancelError(transactionError, data);
            }
        }, [
            transactionError
        ]);
        const isListingAvailable = listing && (listing.status === "active" || listing.status === "inactive") && !loading;
        const isOracleOrder = listing?.isNativeOffChainCancellable;
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $32d03e1adcee2721$export$2b77a92f1a5ad772), {
            trigger: trigger,
            title: copy.title,
            open: open,
            onOpenChange: (open)=>{
                if (!open && onClose) {
                    const data = {
                        listing: listing,
                        stepData: stepData
                    };
                    onClose(data, cancelStep);
                }
                setOpen(open);
            },
            loading: loading
        }, !isListingAvailable && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            justify: "center",
            css: {
                px: "$4",
                py: "$6"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            css: {
                textAlign: "center"
            }
        }, "Selected listing is no longer available")), isListingAvailable && cancelStep === (0, $6e7449d8ef933807$export$c5c5c857eaef0fde).Cancel && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                color: "$errorAccent",
                p: "$4",
                gap: "$2",
                background: "$wellBackground"
            },
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCircleExclamation),
            width: 16,
            height: 16
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "errorLight"
        }, transactionError.message)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                borderBottom: "1px solid $borderColor"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6a7867ba1ffb99fc$export$2e2bcd8739ae039), {
            img: listingImg,
            name: listing.criteria?.data?.token?.name,
            price: listing?.price?.amount?.decimal,
            usdPrice: totalUsd,
            collection: listing.criteria?.data?.collection?.name || "",
            currencyContract: listing.price?.currency?.contract,
            currencyDecimals: listing?.price?.currency?.decimals,
            currencySymbol: listing?.price?.currency?.symbol,
            expires: expires,
            source: listing?.source?.icon || ""
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "subtle",
            css: {
                mt: "$3",
                mr: "$3",
                ml: "$3",
                textAlign: "center"
            }
        }, !isOracleOrder ? "This action will cancel your listing. You will be prompted to confirm this cancellation from your wallet. A gas fee is required." : "This will cancel your listing for free. You will be prompted to confirm this cancellation from your wallet."), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: cancelOrder,
            css: {
                m: "$4"
            }
        }, !isOracleOrder && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faGasPump),
            width: "16",
            height: "16"
        }), copy.ctaCancel)), cancelStep === (0, $6e7449d8ef933807$export$c5c5c857eaef0fde).Approving && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                borderBottom: "1px solid $borderColor"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6a7867ba1ffb99fc$export$2e2bcd8739ae039), {
            img: listingImg,
            name: listing?.criteria?.data?.token?.name,
            price: listing?.price?.amount?.decimal,
            usdPrice: totalUsd,
            collection: listing?.criteria?.data?.collection?.name || "",
            currencyContract: listing?.price?.currency?.contract,
            currencyDecimals: listing?.price?.currency?.decimals,
            currencySymbol: listing?.price?.currency?.symbol,
            expires: expires,
            source: listing?.source?.icon || ""
        })), !stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), {
            css: {
                height: 206
            }
        }), stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e92d8c2581b5f9df$export$2e2bcd8739ae039), {
            title: stepData?.currentStepItem.txHash ? "Finalizing on blockchain" : "Confirm cancelation in your wallet",
            txHash: stepData?.currentStepItem.txHash,
            blockExplorerBaseUrl: `${blockExplorerBaseUrl}/tx/${stepData?.currentStepItem.txHash}`
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: true,
            css: {
                m: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), stepData?.currentStepItem.txHash ? copy.ctaAwaitingValidation : copy.ctaAwaitingApproval)), cancelStep === (0, $6e7449d8ef933807$export$c5c5c857eaef0fde).Complete && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                py: "$5",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h5",
            css: {
                mb: "$2"
            }
        }, "Listing Canceled!"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "subtle",
            css: {
                mb: 24
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, "Your", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "accent"
        }, listing?.source?.name), " ", "listing for", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "accent"
        }, listing?.criteria?.data?.token?.name || listing?.criteria?.data?.collection?.name, " "), "at ", listing?.price?.amount?.decimal, " ", listing?.price?.currency?.symbol, " has been canceled.")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
            color: "primary",
            weight: "medium",
            css: {
                fontSize: 12
            },
            href: `${blockExplorerBaseUrl}/tx/${stepData?.currentStepItem.txHash}`,
            target: "_blank"
        }, "View on", " ", activeChain?.blockExplorers?.default.name || "Etherscan")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                setOpen(false);
            },
            css: {
                m: "$4"
            }
        }, copy.ctaClose)));
    });
}
$8a7188f82a67e5bb$export$5ccdc2f8532db25b.Custom = (0, $6e7449d8ef933807$export$784ecbb108ae6a2c);


















var $c3a477f35c10f10a$export$1662ceb9c43bf6c3;
(function(EditBidStep) {
    EditBidStep[EditBidStep["Edit"] = 0] = "Edit";
    EditBidStep[EditBidStep["Approving"] = 1] = "Approving";
    EditBidStep[EditBidStep["Complete"] = 2] = "Complete";
})($c3a477f35c10f10a$export$1662ceb9c43bf6c3 || ($c3a477f35c10f10a$export$1662ceb9c43bf6c3 = {}));
const $c3a477f35c10f10a$export$f31689e1a4df1b06 = ({ open: open , bidId: bidId , tokenId: tokenId , collectionId: collectionId , attribute: attribute , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    const { data: wallet  } = (0, $TBcmg$useWalletClient)();
    const [editBidStep, setEditBidStep] = (0, $TBcmg$useState)($c3a477f35c10f10a$export$1662ceb9c43bf6c3.Edit);
    const [transactionError, setTransactionError] = (0, $TBcmg$useState)();
    const [stepData, setStepData] = (0, $TBcmg$useState)(null);
    const [steps, setSteps] = (0, $TBcmg$useState)(null);
    const [bidAmount, setBidAmount] = (0, $TBcmg$useState)("");
    const [expirationOption, setExpirationOption] = (0, $TBcmg$useState)((0, $4dd727d17c3f54df$export$2e2bcd8739ae039)[5]);
    const [hasEnoughNativeCurrency, setHasEnoughNativeCurrency] = (0, $TBcmg$useState)(false);
    const [hasEnoughWrappedCurrency, setHasEnoughWrappedCurrency] = (0, $TBcmg$useState)(false);
    const [amountToWrap, setAmountToWrap] = (0, $TBcmg$useState)("");
    const [trait, setTrait] = (0, $TBcmg$useState)(attribute);
    const [attributes, setAttributes] = (0, $TBcmg$useState)();
    const chainCurrency = (0, $57dcd81a309fc6e2$export$2e2bcd8739ae039)();
    const nativeWrappedContractAddress = chainCurrency.chainId in (0, $539986c326843873$export$2e2bcd8739ae039) ? (0, $539986c326843873$export$2e2bcd8739ae039)[chainCurrency.chainId] : (0, $539986c326843873$export$2e2bcd8739ae039)[1];
    const nativeWrappedContractName = chainCurrency.chainId in (0, $ccbd22d7b24d8923$export$2e2bcd8739ae039) ? (0, $ccbd22d7b24d8923$export$2e2bcd8739ae039)[chainCurrency.chainId] : (0, $ccbd22d7b24d8923$export$2e2bcd8739ae039)[1];
    const { data: bids  } = (0, $e5a3042549429464$export$2e2bcd8739ae039)({
        ids: bidId,
        normalizeRoyalties: normalizeRoyalties,
        includeCriteriaMetadata: true,
        includeRawData: true
    }, {
        revalidateFirstPage: true
    }, open && bidId ? true : false);
    const bid = bids && bids[0] ? bids[0] : undefined;
    const contract = bid?.tokenSetId?.split(":")[1];
    const currency = bid?.price?.currency;
    const isOracleOrder = bid?.isNativeOffChainCancellable;
    const wrappedContractAddress = currency ? currency.contract : nativeWrappedContractAddress;
    const wrappedContractName = currency ? currency.symbol : nativeWrappedContractName;
    (0, $TBcmg$useEffect)(()=>{
        if (bid?.price?.amount?.decimal) setBidAmount(bid?.price?.amount?.decimal.toString());
    }, [
        bid?.price
    ]);
    const coinConversion = (0, $b5d8dec284676ed1$export$2e2bcd8739ae039)(open && bid ? "USD" : undefined, wrappedContractName);
    const usdPrice = coinConversion.length > 0 ? coinConversion[0].price : 0;
    const bidAmountUsd = +bidAmount * (usdPrice || 0);
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const { address: address  } = (0, $TBcmg$useAccount)();
    const { data: balance  } = (0, $TBcmg$useBalance)({
        address: address,
        watch: open
    });
    const { data: wrappedBalance  } = (0, $TBcmg$useBalance)({
        token: wrappedContractAddress,
        address: address,
        watch: open,
        chainId: client?.currentChain()?.id
    });
    const { chain: chain  } = (0, $TBcmg$useNetwork)();
    const canAutomaticallyConvert = !currency || currency.contract === nativeWrappedContractAddress;
    let convertLink = "";
    if (canAutomaticallyConvert) convertLink = chain?.id === (0, $TBcmg$mainnet).id || chain?.id === (0, $TBcmg$goerli).id ? `https://app.uniswap.org/#/swap?theme=dark&exactAmount=${amountToWrap}&chain=${chain?.network || "mainnet"}&inputCurrency=eth&outputCurrency=${wrappedContractAddress}` : `https://app.uniswap.org/#/swap?theme=dark&exactAmount=${amountToWrap}`;
    else convertLink = `https://jumper.exchange/?toChain=${chain?.id}&toToken=${wrappedContractAddress}`;
    const isTokenBid = bid?.criteria?.kind == "token";
    const { data: traits  } = (0, $7c7b75a236ce465b$export$2e2bcd8739ae039)(open && !isTokenBid ? collectionId : undefined);
    const { data: collections  } = (0, $afd6276a623787c2$export$2e2bcd8739ae039)(open && {
        id: collectionId,
        includeTopBid: true,
        normalizeRoyalties: normalizeRoyalties
    });
    const collection = collections && collections[0] ? collections[0] : undefined;
    let royaltyBps = collection?.royalties?.bps;
    const { data: tokens  } = (0, $074b4666df4341a7$export$2e2bcd8739ae039)(open && {
        tokens: [
            `${contract}:${tokenId}`
        ],
        includeAttributes: true,
        normalizeRoyalties: normalizeRoyalties
    }, {
        revalidateFirstPage: true
    });
    const token = tokens && tokens.length > 0 ? tokens[0] : undefined;
    (0, $TBcmg$useEffect)(()=>{
        if (bidAmount !== "") {
            const bid = (0, $TBcmg$parseUnits)(`${Number(bidAmount)}`, wrappedBalance?.decimals || 18);
            if (!wrappedBalance?.value || wrappedBalance?.value < bid) {
                setHasEnoughWrappedCurrency(false);
                const wrappedAmount = wrappedBalance?.value || 0n;
                const amountToWrap = bid - wrappedAmount;
                setAmountToWrap((0, $6f54b4a5aad888ed$export$87710fd8420713d9)(amountToWrap, 5));
                if (!balance?.value || balance.value < amountToWrap) setHasEnoughNativeCurrency(false);
                else setHasEnoughNativeCurrency(true);
            } else {
                setHasEnoughWrappedCurrency(true);
                setHasEnoughNativeCurrency(true);
                setAmountToWrap("");
            }
        } else {
            setHasEnoughNativeCurrency(true);
            setHasEnoughWrappedCurrency(true);
            setAmountToWrap("");
        }
    }, [
        bidAmount,
        balance,
        wrappedBalance
    ]);
    (0, $TBcmg$useEffect)(()=>{
        const validAttributes = traits ? traits.filter((attribute)=>attribute.values && attribute.values.length > 0) : undefined;
        setAttributes(validAttributes);
    }, [
        traits
    ]);
    (0, $TBcmg$useEffect)(()=>{
        //@ts-ignore
        if (bid?.criteria?.kind == "attribute" && bid?.criteria?.data.attribute) //@ts-ignore
        setTrait(bid?.criteria?.data?.attribute);
    }, [
        bid
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (!open) {
            setEditBidStep($c3a477f35c10f10a$export$1662ceb9c43bf6c3.Edit);
            setExpirationOption((0, $4dd727d17c3f54df$export$2e2bcd8739ae039)[3]);
            setHasEnoughNativeCurrency(false);
            setHasEnoughWrappedCurrency(false);
            setAmountToWrap("");
            setBidAmount("");
            setStepData(null);
            setTransactionError(null);
            setTrait(undefined);
        } else setTrait(attribute);
    }, [
        open
    ]);
    const editBid = (0, $TBcmg$useCallback)(()=>{
        if (!wallet) {
            const error = new Error("Missing a wallet/signer");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        if (!bidId) {
            const error = new Error("Missing bid id to edit");
            setTransactionError(error);
            throw error;
        }
        if (!isOracleOrder) {
            const error = new Error("Not an oracle powered offer");
            setTransactionError(error);
            throw error;
        }
        setTransactionError(null);
        let expirationTime = null;
        if (expirationOption.relativeTime && expirationOption.relativeTimeUnit) expirationTime = (0, $TBcmg$dayjs)().add(expirationOption.relativeTime, expirationOption.relativeTimeUnit).unix().toString();
        const bid = {
            weiPrice: (0, $TBcmg$parseUnits)(`${Number(bidAmount)}`, wrappedBalance?.decimals || 18).toString(),
            orderbook: "reservoir",
            orderKind: "seaport-v1.4",
            attributeKey: trait?.key,
            attributeValue: trait?.value
        };
        if (isTokenBid && tokenId && collectionId) {
            const contract = collectionId ? collectionId?.split(":")[0] : undefined;
            bid.token = `${contract}:${tokenId}`;
        } else if (collectionId) bid.collection = collectionId;
        if (nativeWrappedContractAddress != wrappedContractAddress) bid.currency = wrappedContractAddress;
        if (expirationTime) bid.expirationTime = expirationTime;
        bid.options = {
            "seaport-v1.4": {
                useOffChainCancellation: true,
                replaceOrderId: bidId
            }
        };
        setEditBidStep($c3a477f35c10f10a$export$1662ceb9c43bf6c3.Approving);
        client.actions.placeBid({
            bids: [
                bid
            ],
            wallet: wallet,
            onProgress: (steps)=>{
                if (!steps) return;
                setSteps(steps);
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                const currentStepIndex = executableSteps.findIndex((step)=>{
                    currentStepItem = step.items?.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStepItem) setStepData({
                    totalSteps: stepCount,
                    stepProgress: currentStepIndex,
                    currentStep: currentStep,
                    currentStepItem: currentStepItem
                });
                else if (steps.every((step)=>!step.items || step.items.length == 0 || step.items?.every((item)=>item.status === "complete"))) setEditBidStep($c3a477f35c10f10a$export$1662ceb9c43bf6c3.Complete);
            }
        }).catch((e)=>{
            const error = e;
            //@ts-ignore: Should be fixed in an update to typescript
            const transactionError = new Error(error?.message || "", {
                cause: error
            });
            setTransactionError(transactionError);
            setEditBidStep($c3a477f35c10f10a$export$1662ceb9c43bf6c3.Edit);
            setStepData(null);
            setSteps(null);
        });
    }, [
        client,
        wallet,
        collectionId,
        tokenId,
        expirationOption,
        trait,
        bidAmount,
        wrappedBalance,
        wrappedContractAddress,
        nativeWrappedContractAddress
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, children({
        loading: !bid || !collection,
        bid: bid,
        attributes: attributes,
        trait: trait,
        tokenId: tokenId,
        contract: contract,
        isOracleOrder: isOracleOrder,
        isTokenBid: isTokenBid,
        bidAmount: bidAmount,
        bidAmountUsd: bidAmountUsd,
        token: token,
        currency: currency,
        collection: collection,
        editBidStep: editBidStep,
        transactionError: transactionError,
        hasEnoughNativeCurrency: hasEnoughNativeCurrency,
        hasEnoughWrappedCurrency: hasEnoughWrappedCurrency,
        balance: balance,
        wrappedBalance: wrappedBalance,
        wrappedContractName: wrappedContractName,
        wrappedContractAddress: wrappedContractAddress,
        amountToWrap: amountToWrap,
        convertLink: convertLink,
        canAutomaticallyConvert: canAutomaticallyConvert,
        royaltyBps: royaltyBps,
        expirationOptions: $4dd727d17c3f54df$export$2e2bcd8739ae039,
        expirationOption: expirationOption,
        usdPrice: usdPrice,
        steps: steps,
        stepData: stepData,
        setTrait: setTrait,
        setBidAmount: setBidAmount,
        setExpirationOption: setExpirationOption,
        setEditBidStep: setEditBidStep,
        editBid: editBid
    }));
};







const $cc999d237a46714e$var$ModalCopy = {
    title: "Edit Offer",
    ctaClose: "Close",
    ctaConfirm: "Confirm",
    ctaConvertManually: "Convert Manually",
    ctaConvertAutomatically: "",
    ctaAwaitingApproval: "Waiting for approval...",
    ctaAwaitingValidation: "Waiting for transaction to be validated"
};
function $cc999d237a46714e$export$799450c9ce92504c({ openState: openState , bidId: bidId , tokenId: tokenId , collectionId: collectionId , trigger: trigger , normalizeRoyalties: normalizeRoyalties , copyOverrides: copyOverrides , onClose: onClose , onEditBidComplete: onEditBidComplete , onEditBidError: onEditBidError  }) {
    const copy = {
        ...$cc999d237a46714e$var$ModalCopy,
        ...copyOverrides
    };
    const [open, setOpen] = (0, $b69d00be56c1bdb6$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $c3a477f35c10f10a$export$f31689e1a4df1b06), {
        bidId: bidId,
        tokenId: tokenId,
        collectionId: collectionId,
        open: open,
        normalizeRoyalties: normalizeRoyalties
    }, ({ loading: loading , bid: bid , attributes: attributes , trait: trait , isOracleOrder: isOracleOrder , isTokenBid: isTokenBid , bidAmount: bidAmount , bidAmountUsd: bidAmountUsd , token: token , collection: collection , editBidStep: editBidStep , transactionError: transactionError , hasEnoughNativeCurrency: hasEnoughNativeCurrency , hasEnoughWrappedCurrency: hasEnoughWrappedCurrency , amountToWrap: amountToWrap , balance: balance , wrappedBalance: wrappedBalance , wrappedContractName: wrappedContractName , wrappedContractAddress: wrappedContractAddress , canAutomaticallyConvert: canAutomaticallyConvert , convertLink: convertLink , royaltyBps: royaltyBps , expirationOptions: expirationOptions , expirationOption: expirationOption , usdPrice: usdPrice , stepData: stepData , setTrait: setTrait , setBidAmount: setBidAmount , setExpirationOption: setExpirationOption , editBid: editBid  })=>{
        const [attributeSelectorOpen, setAttributeSelectorOpen] = (0, $TBcmg$useState)(false);
        const [attributesSelectable, setAttributesSelectable] = (0, $TBcmg$useState)(false);
        const tokenCount = collection?.tokenCount ? +collection.tokenCount : undefined;
        const itemImage = isTokenBid ? bid?.criteria?.data?.token?.image || token?.token?.imageSmall : bid?.criteria?.data?.collection?.image || collection?.image;
        const previousBidsExpiration = (0, $2f4c390a81073897$export$2e2bcd8739ae039)(bid?.expiration);
        (0, $TBcmg$useEffect)(()=>{
            if (editBidStep === (0, $c3a477f35c10f10a$export$1662ceb9c43bf6c3).Complete && onEditBidComplete) {
                const data = {
                    bid: bid,
                    stepData: stepData
                };
                onEditBidComplete(data);
            }
        }, [
            editBidStep
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (transactionError && onEditBidError) {
                const data = {
                    bid: bid,
                    stepData: stepData
                };
                onEditBidError(transactionError, data);
            }
        }, [
            transactionError
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (open && attributes) {
                let attributeCount = 0;
                for(let i = 0; i < attributes.length; i++){
                    attributeCount += attributes[i].attributeCount || 0;
                    if (attributeCount >= 2000) break;
                }
                if (attributeCount >= 2000) setAttributesSelectable(false);
                else setAttributesSelectable(true);
            } else setAttributesSelectable(false);
        }, [
            open,
            attributes
        ]);
        const isBidAvailable = bid && bid.status === "active" && !loading;
        const isBidEditable = bid && bid.status === "active" && !loading && isOracleOrder;
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $32d03e1adcee2721$export$2b77a92f1a5ad772), {
            trigger: trigger,
            title: copy.title,
            open: open,
            onOpenChange: (open)=>{
                if (!open && onClose) {
                    const data = {
                        bid: bid,
                        stepData: stepData
                    };
                    onClose(data, editBidStep);
                }
                setOpen(open);
            },
            loading: loading
        }, !isBidAvailable && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            justify: "center",
            css: {
                px: "$4",
                py: "$6"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            css: {
                textAlign: "center"
            }
        }, "Selected offer is no longer available")), !isBidEditable && isBidAvailable && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            justify: "center",
            css: {
                px: "$4",
                py: "$6"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            css: {
                textAlign: "center"
            }
        }, "Selected offer is not an oracle order, so cannot be edited.")), isBidEditable && editBidStep === (0, $c3a477f35c10f10a$export$1662ceb9c43bf6c3).Edit && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                color: "$errorAccent",
                p: "$4",
                gap: "$2",
                background: "$wellBackground"
            },
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCircleExclamation),
            width: 16,
            height: 16
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "errorLight"
        }, transactionError.message)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                borderBottom: "1px solid $borderColor"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6a7867ba1ffb99fc$export$2e2bcd8739ae039), {
            img: itemImage,
            name: bid?.criteria?.data?.token?.name,
            price: bid?.price?.amount?.decimal,
            priceSubtitle: "Price",
            royaltiesBps: royaltyBps,
            usdPrice: bid?.price?.amount?.decimal * (usdPrice || 0),
            collection: bid?.criteria?.data?.collection?.name || "",
            currencyContract: bid?.price?.currency?.contract,
            currencyDecimals: bid?.price?.currency?.decimals,
            currencySymbol: bid?.price?.currency?.symbol,
            expires: previousBidsExpiration,
            source: bid?.source?.icon || ""
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                px: "$4",
                py: "$2"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                mb: "$2"
            },
            justify: "between"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            as: "p"
        }, "Set New Offer"), wrappedBalance?.value ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: (0, $602940fa56061b3b$export$2e2bcd8739ae039),
            css: {
                gap: "$1"
            },
            align: "center",
            style: "tiny"
        }, "Balance:", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bf67ac886f7190ba$export$2e2bcd8739ae039), {
            logoWidth: 10,
            textStyle: "tiny",
            amount: wrappedBalance?.value,
            decimals: wrappedBalance?.decimals,
            address: wrappedContractAddress,
            symbol: wrappedBalance?.symbol
        }), " ") : null), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                gap: "$2"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: (0, $602940fa56061b3b$export$2e2bcd8739ae039),
            css: {
                gap: "$2",
                flexShrink: 0
            },
            align: "center",
            style: "body1",
            color: "subtle"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $facfb14f3ab47807$export$2e2bcd8739ae039), {
            css: {
                height: 20
            },
            address: wrappedContractAddress
        }), wrappedContractName), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $5c0c2c3952297d70$export$2e2bcd8739ae039), {
            type: "number",
            value: bidAmount,
            onChange: (e)=>{
                setBidAmount(e.target.value);
            },
            placeholder: "Enter price here",
            containerCss: {
                width: "100%"
            },
            css: {
                color: "$neutralText",
                textAlign: "left"
            }
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
            css: {
                marginLeft: "auto",
                mt: "$2",
                display: "inline-block",
                minHeight: 15
            },
            style: "tiny",
            amount: bidAmountUsd
        }), attributes && attributes.length > 0 && (attributesSelectable || trait) && !isTokenBid && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                mb: "$3"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: "div",
            css: {
                mb: "$2"
            },
            style: "subtitle2",
            color: "subtle"
        }, "Attributes"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c42dc96a91e1fd$export$2e2bcd8739ae039).Root, {
            open: attributeSelectorOpen,
            onOpenChange: attributesSelectable ? setAttributeSelectorOpen : undefined
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c42dc96a91e1fd$export$2e2bcd8739ae039).Trigger, {
            asChild: true
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $822ff51685ab152b$export$2e2bcd8739ae039), null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            justify: "between",
            css: {
                gap: "$2",
                alignItems: "center",
                color: "$neutralText"
            }
        }, trait ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                maxWidth: 385,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            color: "accent",
            style: "subtitle1"
        }, trait?.key, ":", " "), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle1"
        }, trait?.value)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                alignItems: "center",
                gap: "$2"
            }
        }, trait?.floorAskPrice && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                flex: "none"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            amount: trait?.floorAskPrice,
            maximumFractionDigits: 2,
            logoWidth: 11
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            style: {
                cursor: "pointer"
            },
            onClick: (e)=>{
                e.preventDefault();
                setTrait(undefined);
            },
            icon: (0, $TBcmg$faClose),
            width: 16,
            height: 16
        }))) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            css: {
                color: "$neutralText"
            }
        }, "All Attributes"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faChevronDown),
            width: 16,
            height: 16
        }))))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c42dc96a91e1fd$export$2e2bcd8739ae039).Content, {
            sideOffset: -50
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $f8d8cda59d836a2f$export$2e2bcd8739ae039), {
            attributes: attributes,
            tokenCount: tokenCount,
            setTrait: setTrait,
            setOpen: setAttributeSelectorOpen
        })))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                mb: "$3"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: "div",
            css: {
                mb: "$2"
            },
            style: "subtitle2",
            color: "subtle"
        }, "Expiration Date"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039), {
            value: expirationOption?.text || "",
            onValueChange: (value)=>{
                const option = expirationOptions.find((option)=>option.value == value);
                if (option) setExpirationOption(option);
            }
        }, expirationOptions.map((option)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).Item, {
                key: option.text,
                value: option.value
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).ItemText, null, option.text))))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                gap: "$3",
                py: "$3"
            }
        }, hasEnoughWrappedCurrency ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                setOpen(false);
            },
            color: "secondary",
            css: {
                flex: 1
            }
        }, copy.ctaClose), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: bidAmount === "" || bidAmount === "0",
            onClick: editBid,
            css: {
                flex: 1
            }
        }, copy.ctaConfirm)) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                width: "100%",
                mt: "auto"
            }
        }, !hasEnoughNativeCurrency && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                gap: "$2",
                mt: 10
            },
            justify: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "error"
        }, balance?.symbol || "ETH", " Balance"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            amount: balance?.value,
            symbol: balance?.symbol
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                gap: "$2",
                mt: 10,
                overflow: "hidden",
                flexDirection: "column-reverse",
                "@bp1": {
                    flexDirection: "row"
                }
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                flex: "1 0 auto"
            },
            color: "secondary",
            onClick: ()=>{
                window.open(convertLink, "_blank");
            }
        }, copy.ctaConvertManually), canAutomaticallyConvert && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                flex: 1,
                maxHeight: 44
            },
            disabled: !hasEnoughNativeCurrency,
            onClick: editBid
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            color: "button",
            ellipsify: true
        }, copy.ctaConvertAutomatically.length > 0 ? copy.ctaConvertAutomatically : `Convert ${amountToWrap} ${balance?.symbol || "ETH"} for me`))))))), editBidStep === (0, $c3a477f35c10f10a$export$1662ceb9c43bf6c3).Approving && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                borderBottom: "1px solid $borderColor"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6a7867ba1ffb99fc$export$2e2bcd8739ae039), {
            img: itemImage,
            name: bid?.criteria?.data?.token?.name,
            price: Number(bidAmount),
            usdPrice: bidAmountUsd,
            collection: collection?.name || "",
            currencyContract: bid?.price?.currency?.contract,
            currencyDecimals: bid?.price?.currency?.decimals,
            currencySymbol: bid?.price?.currency?.symbol,
            expires: `in ${expirationOption.text.toLowerCase()}`,
            source: bid?.source?.icon || ""
        })), !stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), {
            css: {
                height: 206
            }
        }), stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e92d8c2581b5f9df$export$2e2bcd8739ae039), {
            title: stepData?.currentStepItem.txHash ? "Finalizing on blockchain" : "Approve Reservoir Oracle to update the offer",
            txHash: stepData?.currentStepItem.txHash
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: true,
            css: {
                m: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), stepData?.currentStepItem.txHash ? copy.ctaAwaitingValidation : copy.ctaAwaitingApproval)), editBidStep === (0, $c3a477f35c10f10a$export$1662ceb9c43bf6c3).Complete && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                py: "$5",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: "$successAccent",
                mb: 24
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCheckCircle),
            size: "3x"
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h5",
            css: {
                mb: "$4"
            }
        }, "Offer Updated!"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "subtle",
            css: {
                mb: 24
            }
        }, "Your offer for", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "base"
        }, token?.token?.name), " ", "has been updated.")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                setOpen(false);
            },
            css: {
                m: "$4"
            }
        }, copy.ctaClose)));
    });
}
$cc999d237a46714e$export$799450c9ce92504c.Custom = (0, $c3a477f35c10f10a$export$f31689e1a4df1b06);












var $15b40f9f8236e7c4$export$3a845fe90ed2a8d8;
(function(EditListingStep) {
    EditListingStep[EditListingStep["Edit"] = 0] = "Edit";
    EditListingStep[EditListingStep["Approving"] = 1] = "Approving";
    EditListingStep[EditListingStep["Complete"] = 2] = "Complete";
})($15b40f9f8236e7c4$export$3a845fe90ed2a8d8 || ($15b40f9f8236e7c4$export$3a845fe90ed2a8d8 = {}));
const $15b40f9f8236e7c4$export$10f582750caac37a = ({ open: open , listingId: listingId , tokenId: tokenId , collectionId: collectionId , normalizeRoyalties: normalizeRoyalties , enableOnChainRoyalties: enableOnChainRoyalties = false , children: children  })=>{
    const { data: wallet  } = (0, $TBcmg$useWalletClient)();
    const account = (0, $TBcmg$useAccount)();
    const [editListingStep, setEditListingStep] = (0, $TBcmg$useState)($15b40f9f8236e7c4$export$3a845fe90ed2a8d8.Edit);
    const [transactionError, setTransactionError] = (0, $TBcmg$useState)();
    const [stepData, setStepData] = (0, $TBcmg$useState)(null);
    const [steps, setSteps] = (0, $TBcmg$useState)(null);
    const [price, setPrice] = (0, $TBcmg$useState)(0);
    const [quantity, setQuantity] = (0, $TBcmg$useState)(1);
    const { data: listings  } = (0, $b9d7d4ec194b807a$export$2e2bcd8739ae039)({
        ids: listingId,
        normalizeRoyalties: normalizeRoyalties,
        includeCriteriaMetadata: true,
        includeRawData: true
    }, {
        revalidateFirstPage: true
    }, open && listingId ? true : false);
    const listing = listings && listings[0] ? listings[0] : undefined;
    const contract = listing?.tokenSetId?.split(":")[1];
    const currency = listing?.price?.currency;
    const isOracleOrder = listing?.isNativeOffChainCancellable;
    (0, $TBcmg$useEffect)(()=>{
        if (listing?.price?.amount?.decimal) setPrice(listing?.price?.amount?.decimal);
    }, [
        listing?.price
    ]);
    const coinConversion = (0, $b5d8dec284676ed1$export$2e2bcd8739ae039)(open && listing ? "USD" : undefined, currency?.symbol);
    const usdPrice = coinConversion.length > 0 ? coinConversion[0].price : 0;
    const totalUsd = usdPrice * (listing?.price?.amount?.decimal || 0);
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const [expirationOption, setExpirationOption] = (0, $TBcmg$useState)((0, $4dd727d17c3f54df$export$2e2bcd8739ae039)[5]);
    const { data: collections  } = (0, $afd6276a623787c2$export$2e2bcd8739ae039)(open && {
        id: collectionId,
        normalizeRoyalties: normalizeRoyalties
    });
    const collection = collections && collections[0] ? collections[0] : undefined;
    let royaltyBps = collection?.royalties?.bps;
    (0, $TBcmg$useEffect)(()=>{
        if (!open) {
            setEditListingStep($15b40f9f8236e7c4$export$3a845fe90ed2a8d8.Edit);
            setTransactionError(null);
            setStepData(null);
            setExpirationOption((0, $4dd727d17c3f54df$export$2e2bcd8739ae039)[5]);
            setQuantity(1);
        }
    }, [
        open
    ]);
    const { data: tokens  } = (0, $074b4666df4341a7$export$2e2bcd8739ae039)(open && {
        tokens: [
            `${contract}:${tokenId}`
        ],
        includeAttributes: true,
        normalizeRoyalties: normalizeRoyalties
    }, {
        revalidateFirstPage: true
    });
    const token = tokens && tokens.length > 0 ? tokens[0] : undefined;
    const is1155 = token?.token?.kind === "erc1155";
    const { data: userTokens  } = (0, $adb61885b37a317b$export$2e2bcd8739ae039)(open && is1155 ? account.address : undefined, {
        tokens: [
            `${contract}:${tokenId}`
        ]
    });
    const quantityAvailable = is1155 && userTokens[0] ? Number(userTokens[0].ownership?.tokenCount || 1) : 1;
    const chainCurrency = (0, $57dcd81a309fc6e2$export$2e2bcd8739ae039)();
    const { data: onChainRoyalties  } = (0, $a5f511417a938f00$export$2e2bcd8739ae039)({
        contract: contract,
        tokenId: tokenId,
        chainId: chainCurrency.chainId,
        enabled: enableOnChainRoyalties && open
    });
    const onChainRoyaltyBps = (0, $TBcmg$useMemo)(()=>{
        const totalRoyalty = onChainRoyalties?.[1].reduce((total, royalty)=>{
            total += parseFloat((0, $TBcmg$formatUnits)(royalty, currency?.decimals || 18));
            return total;
        }, 0);
        if (totalRoyalty) return totalRoyalty / 1 * 10000;
        return 0;
    }, [
        onChainRoyalties,
        chainCurrency
    ]);
    if (enableOnChainRoyalties && onChainRoyaltyBps) royaltyBps = onChainRoyaltyBps;
    const editListing = (0, $TBcmg$useCallback)(()=>{
        if (!wallet) {
            const error = new Error("Missing a wallet/signer");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        if (!listingId) {
            const error = new Error("Missing list id to edit");
            setTransactionError(error);
            throw error;
        }
        if (!isOracleOrder) {
            const error = new Error("Not an oracle order");
            setTransactionError(error);
            throw error;
        }
        setTransactionError(null);
        let expirationTime = null;
        if (expirationOption.relativeTime && expirationOption.relativeTimeUnit) expirationTime = (0, $TBcmg$dayjs)().add(expirationOption.relativeTime, expirationOption.relativeTimeUnit).unix().toString();
        const listing = {
            token: `${contract}:${tokenId}`,
            weiPrice: ((0, $TBcmg$parseUnits)(`${price}`, currency?.decimals || 18) * BigInt(quantity)).toString(),
            orderbook: "reservoir",
            orderKind: "seaport-v1.4"
        };
        if (quantity > 1) listing.quantity = quantity;
        if (expirationTime) listing.expirationTime = expirationTime;
        if (currency && currency.contract != (0, $TBcmg$zeroAddress)) listing.currency = currency.contract;
        listing.options = {
            "seaport-v1.4": {
                useOffChainCancellation: true,
                replaceOrderId: listingId
            }
        };
        setEditListingStep($15b40f9f8236e7c4$export$3a845fe90ed2a8d8.Approving);
        client.actions.listToken({
            listings: [
                listing
            ],
            wallet: wallet,
            onProgress: (steps)=>{
                if (!steps) return;
                setSteps(steps);
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                const currentStepIndex = executableSteps.findIndex((step)=>{
                    currentStepItem = step.items?.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStepItem) setStepData({
                    totalSteps: stepCount,
                    stepProgress: currentStepIndex,
                    currentStep: currentStep,
                    currentStepItem: currentStepItem
                });
                else if (steps.every((step)=>!step.items || step.items.length == 0 || step.items?.every((item)=>item.status === "complete"))) setEditListingStep($15b40f9f8236e7c4$export$3a845fe90ed2a8d8.Complete);
            }
        }).catch((e)=>{
            const error = e;
            const transactionError = new Error(error?.message || "", {
                cause: error
            });
            setTransactionError(transactionError);
            setEditListingStep($15b40f9f8236e7c4$export$3a845fe90ed2a8d8.Edit);
            setStepData(null);
            setSteps(null);
        });
    }, [
        client,
        wallet,
        collectionId,
        tokenId,
        expirationOption,
        price,
        currency,
        quantity,
        contract
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (!open) {
            setEditListingStep($15b40f9f8236e7c4$export$3a845fe90ed2a8d8.Edit);
            setTransactionError(null);
            setStepData(null);
            setSteps(null);
        }
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, children({
        loading: !listing || !token || !collection,
        listing: listing,
        tokenId: tokenId,
        contract: contract,
        isOracleOrder: isOracleOrder,
        currency: currency,
        token: token,
        price: price,
        quantityAvailable: quantityAvailable,
        collection: collection,
        quantity: quantity,
        expirationOption: expirationOption,
        expirationOptions: $4dd727d17c3f54df$export$2e2bcd8739ae039,
        editListingStep: editListingStep,
        transactionError: transactionError,
        usdPrice: usdPrice,
        totalUsd: totalUsd,
        royaltyBps: royaltyBps,
        steps: steps,
        stepData: stepData,
        setPrice: setPrice,
        setQuantity: setQuantity,
        setExpirationOption: setExpirationOption,
        setEditListingStep: setEditListingStep,
        editListing: editListing
    }));
};










const $3aa1464aad3fe241$var$PriceInput = ({ price: price , collection: collection , currency: currency , usdPrice: usdPrice , quantity: quantity = 1 , onChange: onChange , onBlur: onBlur , ...props })=>{
    let profit = (1 - (collection?.royalties?.bps || 0) * 0.0001) * (price || 0) * quantity;
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        ...props,
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            width: "auto",
            height: 20
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $facfb14f3ab47807$export$2e2bcd8739ae039), {
        css: {
            height: 18
        },
        address: currency?.contract
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body1",
        color: "subtle",
        css: {
            ml: "$1",
            mr: "$4"
        },
        as: "p"
    }, currency?.symbol)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            flex: 1
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $5c0c2c3952297d70$export$2e2bcd8739ae039), {
        type: "number",
        value: price,
        onChange: onChange,
        onBlur: onBlur,
        placeholder: "Enter a listing price"
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "end",
        css: {
            ml: "$3"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
        amount: profit,
        address: currency?.contract,
        decimals: currency?.decimals,
        symbol: currency?.symbol,
        textStyle: "h6",
        logoWidth: 18
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
        amount: profit * (usdPrice || 0),
        style: "subtitle2",
        color: "subtle"
    })));
};
var $3aa1464aad3fe241$export$2e2bcd8739ae039 = $3aa1464aad3fe241$var$PriceInput;




const $e8302fb60e57543b$var$ModalCopy = {
    title: "Edit Listing",
    ctaClose: "Close",
    ctaConfirm: "Confirm",
    ctaConvertManually: "Convert Manually",
    ctaConvertAutomatically: "",
    ctaAwaitingApproval: "Waiting for approval...",
    ctaAwaitingValidation: "Waiting for transaction to be validated"
};
const $e8302fb60e57543b$var$MINIMUM_AMOUNT = 0.000001;
function $e8302fb60e57543b$export$7856870a29100de3({ openState: openState , listingId: listingId , tokenId: tokenId , collectionId: collectionId , trigger: trigger , normalizeRoyalties: normalizeRoyalties , enableOnChainRoyalties: enableOnChainRoyalties = false , copyOverrides: copyOverrides , onClose: onClose , onEditListingComplete: onEditListingComplete , onEditListingError: onEditListingError  }) {
    const copy = {
        ...$e8302fb60e57543b$var$ModalCopy,
        ...copyOverrides
    };
    const [open, setOpen] = (0, $b69d00be56c1bdb6$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $15b40f9f8236e7c4$export$10f582750caac37a), {
        listingId: listingId,
        tokenId: tokenId,
        collectionId: collectionId,
        open: open,
        normalizeRoyalties: normalizeRoyalties,
        enableOnChainRoyalties: enableOnChainRoyalties
    }, ({ loading: loading , listing: listing , token: token , price: price , currency: currency , isOracleOrder: isOracleOrder , quantityAvailable: quantityAvailable , collection: collection , quantity: quantity , expirationOption: expirationOption , expirationOptions: expirationOptions , editListingStep: editListingStep , transactionError: transactionError , usdPrice: usdPrice , totalUsd: totalUsd , royaltyBps: royaltyBps , stepData: stepData , setPrice: setPrice , setQuantity: setQuantity , setExpirationOption: setExpirationOption , editListing: editListing  })=>{
        const expires = (0, $2f4c390a81073897$export$2e2bcd8739ae039)(listing?.expiration);
        const profit = (1 - (collection?.royalties?.bps || 0) * 0.0001) * (price || 0) * quantity;
        const updatedTotalUsd = profit * usdPrice;
        (0, $TBcmg$useEffect)(()=>{
            if (editListingStep === (0, $15b40f9f8236e7c4$export$3a845fe90ed2a8d8).Complete && onEditListingComplete) {
                const data = {
                    listing: listing,
                    stepData: stepData
                };
                onEditListingComplete(data);
            }
        }, [
            editListingStep
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (transactionError && onEditListingError) {
                const data = {
                    listing: listing,
                    stepData: stepData
                };
                onEditListingError(transactionError, data);
            }
        }, [
            transactionError
        ]);
        const isListingAvailable = listing && (listing.status === "active" || listing.status === "inactive") && !loading;
        const isListingEditable = listing && listing.status === "active" && !loading && isOracleOrder;
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $32d03e1adcee2721$export$2b77a92f1a5ad772), {
            trigger: trigger,
            title: copy.title,
            open: open,
            onOpenChange: (open)=>{
                if (!open && onClose) {
                    const data = {
                        listing: listing,
                        stepData: stepData
                    };
                    onClose(data, editListingStep);
                }
                setOpen(open);
            },
            loading: loading
        }, !isListingAvailable && !loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            justify: "center",
            css: {
                px: "$4",
                py: "$6"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            css: {
                textAlign: "center"
            }
        }, "Selected listing is no longer available")), !isListingEditable && isListingAvailable && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            justify: "center",
            css: {
                px: "$4",
                py: "$6"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            css: {
                textAlign: "center"
            }
        }, "Selected listing is not an oracle order, so cannot be edited.")), isListingEditable && editListingStep === (0, $15b40f9f8236e7c4$export$3a845fe90ed2a8d8).Edit && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, transactionError && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                color: "$errorAccent",
                p: "$4",
                gap: "$2",
                background: "$wellBackground"
            },
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCircleExclamation),
            width: 16,
            height: 16
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "errorLight"
        }, transactionError.message)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                borderBottom: "1px solid $borderColor"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6a7867ba1ffb99fc$export$2e2bcd8739ae039), {
            img: token?.token?.imageSmall,
            name: listing.criteria?.data?.token?.name,
            price: listing?.price?.amount?.decimal,
            priceSubtitle: "Price",
            royaltiesBps: royaltyBps,
            usdPrice: totalUsd,
            collection: listing.criteria?.data?.collection?.name || "",
            currencyContract: listing.price?.currency?.contract,
            currencyDecimals: listing?.price?.currency?.decimals,
            currencySymbol: listing?.price?.currency?.symbol,
            expires: expires,
            source: listing?.source?.icon || "",
            quantity: listing?.quantityRemaining
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                px: "$4",
                py: "$2"
            }
        }, quantityAvailable > 1 && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                mb: "$2"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: "div",
            css: {
                mb: "$2"
            },
            style: "subtitle2",
            color: "subtle"
        }, "Quantity"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039), {
            value: `${quantity}`,
            onValueChange: (value)=>{
                setQuantity(Number(value));
            }
        }, [
            ...Array(quantityAvailable)
        ].map((_a, i)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).Item, {
                key: i,
                value: `${i + 1}`
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).ItemText, null, i + 1))))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            css: {
                mb: 24,
                display: "inline-block"
            }
        }, quantityAvailable, " items available")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                mb: "$2"
            },
            justify: "between"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            as: "p"
        }, "Set New Price"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                alignItems: "center",
                gap: 8
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            as: "p"
        }, "You Get"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a813136de1d75d50$export$2e2bcd8739ae039), {
            side: "left",
            width: 200,
            content: `How much ${currency?.symbol} you will receive after creator royalties are subtracted.`
        }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                gap: "$2"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $3aa1464aad3fe241$export$2e2bcd8739ae039), {
            price: price,
            collection: collection,
            currency: currency,
            usdPrice: usdPrice,
            quantity: quantity,
            onChange: (e)=>{
                if (e.target.value === "") setPrice(undefined);
                else setPrice(Number(e.target.value));
            },
            onBlur: ()=>{
                if (price === undefined) setPrice(0);
            }
        }), price !== undefined && price !== null && price !== 0 && price < $e8302fb60e57543b$var$MINIMUM_AMOUNT && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "error"
        }, "Amount must be higher than ", $e8302fb60e57543b$var$MINIMUM_AMOUNT)), collection && collection?.floorAsk?.price?.amount?.native !== undefined && price !== undefined && price !== null && price !== 0 && price >= $e8302fb60e57543b$var$MINIMUM_AMOUNT && currency?.contract === (0, $TBcmg$zeroAddress) && price < collection?.floorAsk?.price.amount.native && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "error"
        }, "Price is", " ", Math.round((collection.floorAsk.price.amount.native - price) / ((collection.floorAsk.price.amount.native + price) / 2) * 100000) / 1000, "% below the floor"))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                mb: "$3",
                mt: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            as: "div",
            css: {
                mb: "$2"
            },
            style: "subtitle2",
            color: "subtle"
        }, "Expiration Date"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039), {
            value: expirationOption?.text || "",
            onValueChange: (value)=>{
                const option = expirationOptions.find((option)=>option.value == value);
                if (option) setExpirationOption(option);
            }
        }, expirationOptions.map((option)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).Item, {
                key: option.text,
                value: option.value
            }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $53b68d251033efcb$export$2e2bcd8739ae039).ItemText, null, option.text))))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                gap: "$3",
                py: "$3"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                setOpen(false);
            },
            color: "secondary",
            css: {
                flex: 1
            }
        }, copy.ctaClose), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: price === undefined || price === 0 || price < $e8302fb60e57543b$var$MINIMUM_AMOUNT,
            onClick: editListing,
            css: {
                flex: 1
            }
        }, copy.ctaConfirm)))), editListingStep === (0, $15b40f9f8236e7c4$export$3a845fe90ed2a8d8).Approving && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                borderBottom: "1px solid $borderColor"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $6a7867ba1ffb99fc$export$2e2bcd8739ae039), {
            img: token?.token?.imageSmall,
            name: token?.token?.name,
            price: profit,
            usdPrice: updatedTotalUsd,
            collection: collection?.name || "",
            currencyContract: listing?.price?.currency?.contract,
            currencyDecimals: listing?.price?.currency?.decimals,
            currencySymbol: listing?.price?.currency?.symbol,
            expires: `in ${expirationOption.text.toLowerCase()}`,
            source: listing?.source?.icon || "",
            quantity: quantity
        })), !stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), {
            css: {
                height: 206
            }
        }), stepData && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e92d8c2581b5f9df$export$2e2bcd8739ae039), {
            title: stepData?.currentStepItem.txHash ? "Finalizing on blockchain" : "Approve Reservoir Oracle to update the listing",
            txHash: stepData?.currentStepItem.txHash
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: true,
            css: {
                m: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), stepData?.currentStepItem.txHash ? copy.ctaAwaitingValidation : copy.ctaAwaitingApproval)), editListingStep === (0, $15b40f9f8236e7c4$export$3a845fe90ed2a8d8).Complete && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center",
            css: {
                width: "100%"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center",
            css: {
                p: "$4",
                py: "$5",
                textAlign: "center"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: "$successAccent",
                mb: 24
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCheckCircle),
            size: "3x"
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h5",
            css: {
                mb: "$4"
            }
        }, "Listing Updated!"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "subtle",
            css: {
                mb: 24
            }
        }, "Your listing for", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "base"
        }, token?.token?.name), " ", "has been updated.")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            onClick: ()=>{
                setOpen(false);
            },
            css: {
                m: "$4"
            }
        }, copy.ctaClose)));
    });
}
$e8302fb60e57543b$export$7856870a29100de3.Custom = (0, $15b40f9f8236e7c4$export$10f582750caac37a);










const $d32e4d6e5c9320f4$var$SliderRoot = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Root7, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    userSelect: "none",
    touchAction: "none",
    width: 200,
    height: 20
});
const $d32e4d6e5c9320f4$var$SliderTrack = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Track, {
    backgroundColor: "$neutralBorder",
    position: "relative",
    flexGrow: 1,
    borderRadius: "9999px",
    height: 8
});
const $d32e4d6e5c9320f4$var$SliderRange = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Range, {
    position: "absolute",
    backgroundColor: "$accentSolid",
    borderRadius: "9999px",
    height: "100%"
});
const $d32e4d6e5c9320f4$var$SliderThumb = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Thumb2, {
    display: "block",
    cursor: "pointer",
    width: 20,
    height: 20,
    backgroundColor: "$accentSolid",
    borderRadius: 10,
    border: "1px solid $neutralLine",
    "&:hover": {
        backgroundColor: "$accentSolidHover"
    },
    "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 5px $neutralBgSubtle`
    }
});
const $d32e4d6e5c9320f4$var$Slider = (props)=>/*#__PURE__*/ (0, $TBcmg$react).createElement($d32e4d6e5c9320f4$var$SliderRoot, {
        ...props
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($d32e4d6e5c9320f4$var$SliderTrack, null, /*#__PURE__*/ (0, $TBcmg$react).createElement($d32e4d6e5c9320f4$var$SliderRange, null)), /*#__PURE__*/ (0, $TBcmg$react).createElement($d32e4d6e5c9320f4$var$SliderThumb, null));
var $d32e4d6e5c9320f4$export$2e2bcd8739ae039 = $d32e4d6e5c9320f4$var$Slider;





var $3252fd4b8efa16bf$var$Size;
(function(Size) {
    Size[Size["SM"] = 0] = "SM";
    Size[Size["LG"] = 1] = "LG";
})($3252fd4b8efa16bf$var$Size || ($3252fd4b8efa16bf$var$Size = {}));
const $3252fd4b8efa16bf$export$c48a33806654dd82 = ({ itemCount: itemCount , images: images , totalPrice: totalPrice , usdPrice: usdPrice , currency: currency , chain: chain , size: size = $3252fd4b8efa16bf$var$Size.LG  })=>{
    const itemSubject = itemCount > 1 ? "items" : "item";
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        justify: "between",
        align: "center",
        css: {
            width: "100%"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center",
        css: {
            gap: size == $3252fd4b8efa16bf$var$Size.SM ? "$3" : "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), null, images.map((image)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $94585ecf38154231$export$2e2bcd8739ae039), {
            src: image,
            key: image,
            css: {
                borderRadius: 4,
                objectFit: "cover",
                height: size == $3252fd4b8efa16bf$var$Size.SM ? 40 : 56,
                width: size == $3252fd4b8efa16bf$var$Size.SM ? 40 : 56,
                "& + img, & + div": {
                    marginLeft: size == $3252fd4b8efa16bf$var$Size.SM ? -32 : -48,
                    zIndex: -1
                }
            }
        }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: size == $3252fd4b8efa16bf$var$Size.SM ? "subtitle2" : "h6"
    }, itemCount, " ", itemSubject)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "end",
        css: {
            gap: "$1"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
        textStyle: size == $3252fd4b8efa16bf$var$Size.SM ? "subtitle2" : "h6",
        amount: totalPrice,
        address: currency?.contract,
        decimals: currency?.decimals,
        symbol: currency?.symbol,
        logoWidth: size == $3252fd4b8efa16bf$var$Size.SM ? 12 : 18,
        chainId: chain?.id
    }), usdPrice && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
        amount: usdPrice * totalPrice,
        style: "subtitle2",
        color: "subtle",
        css: {
            textAlign: "end"
        }
    })));
};




const $add635cbf9f5888f$export$d7253bf947e7aaac = ({ item: item , pathMap: pathMap , usdPrice: usdPrice , chain: chain , open: open  })=>{
    const [collapsibleOpen, setCollapsibleOpen] = (0, $TBcmg$useState)(false);
    const isComplete = item && item?.status == "complete";
    const itemCount = item?.orderIds?.length || 1;
    function processOrders(orderIds) {
        let totalPrice = 0;
        let images = [];
        orderIds.forEach((orderId)=>{
            const path = pathMap[orderId];
            if (path) {
                let imageRedirect = `${chain?.baseApiUrl}/redirect/tokens/${path.contract}:${path.tokenId}/image/v1?imageSize=small`;
                images.push(imageRedirect);
                totalPrice += path.quote || 0;
            }
        });
        images = images.slice(0, 2);
        return {
            totalPrice: totalPrice,
            images: images
        };
    }
    const { totalPrice: totalPrice , images: images  } = processOrders(item?.orderIds);
    (0, $TBcmg$useEffect)(()=>{
        if (open !== undefined && open !== collapsibleOpen) setCollapsibleOpen(open);
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $257531ce0e45ad5e$export$45aa975411b5e199), {
        title: "Approve transaction",
        open: collapsibleOpen,
        onOpenChange: setCollapsibleOpen,
        isComplete: isComplete
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        justify: "between",
        align: "center",
        css: {
            px: "$4",
            pb: "$2"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $3252fd4b8efa16bf$export$c48a33806654dd82), {
        usdPrice: usdPrice,
        itemCount: itemCount,
        totalPrice: totalPrice,
        images: images,
        size: 0
    })));
};









const $cc9e3055d5f50dff$var$StyledToggleGroup = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Root8, {
    p: 2,
    backgroundColor: "$neutralBgHover",
    display: "flex",
    borderRadius: 99999,
    gap: "$1"
});
const $cc9e3055d5f50dff$export$af3ec21f6cfb5e30 = ({ children: children , ...props })=>/*#__PURE__*/ (0, $TBcmg$react).createElement($cc9e3055d5f50dff$var$StyledToggleGroup, {
        ...props
    }, children);
const $cc9e3055d5f50dff$export$a3dec5345aded9a8 = (0, $4a58f4053e821189$export$3817b7a54a07cec7)($TBcmg$Item1, {
    all: "unset",
    cursor: "pointer",
    backgroundColor: "$neutralBgHover",
    color: "$textColor",
    py: 8,
    px: 16,
    borderRadius: 99999,
    $$focusColor: "$colors$accentBorderHover",
    "&:hover": {
        backgroundColor: "$neutralBgActive"
    },
    "&[data-state=on]": {
        backgroundColor: "$neutralBgSubtle",
        pointerEvents: "none"
    },
    "&:focus": {
        position: "relative",
        boxShadow: "0 0 0 2px $$focusColor"
    }
});


const $37c1e2b59bdb2f0d$export$569eb7a0a04958d = ({ isItemsToggled: isItemsToggled , setIsItemsToggled: setIsItemsToggled , currency: currency  })=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $cc9e3055d5f50dff$export$af3ec21f6cfb5e30), {
        type: "single",
        value: isItemsToggled ? "items" : "currency",
        onValueChange: (value)=>{
            if (value === "items") setIsItemsToggled(true);
            else setIsItemsToggled(false);
        },
        css: {
            width: "min-content",
            borderRadius: 8,
            height: 44,
            boxSizing: "border-box"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $cc9e3055d5f50dff$export$a3dec5345aded9a8), {
        value: "items",
        css: {
            borderRadius: 8
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        css: {
            fontSize: 14
        }
    }, "Items")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $cc9e3055d5f50dff$export$a3dec5345aded9a8), {
        value: "currency",
        css: {
            borderRadius: 8
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        css: {
            fontSize: 14
        }
    }, currency.symbol.toUpperCase())));
};





const $f99c1089a7d382c4$export$6d749757b51f11b0 = ({ name: name , image: image , amount: amount , currency: currency  })=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $656b4c95fe3d553c$export$2e2bcd8739ae039), {
        content: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            as: "p"
        }, name),
        side: "top",
        sideOffset: -6
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        css: {
            width: 60,
            borderRadius: 8,
            backgroundColor: "$neutralBg",
            overflow: "hidden"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $94585ecf38154231$export$2e2bcd8739ae039), {
        src: image,
        css: {
            width: 60,
            height: 60
        },
        width: 20
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            px: "$1",
            py: "$2"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
        amount: amount,
        address: currency.address,
        decimals: currency.decimals,
        symbol: currency.symbol,
        maximumFractionDigits: amount && amount >= 10 ? 2 : 3,
        css: {
            whiteSpace: "nowrap"
        }
    }))));
};







var $f99c3f30def4cffc$export$de6922b83abf2eed;
(function(SweepStep) {
    SweepStep[SweepStep["Idle"] = 0] = "Idle";
    SweepStep[SweepStep["Approving"] = 1] = "Approving";
    SweepStep[SweepStep["Finalizing"] = 2] = "Finalizing";
    SweepStep[SweepStep["Complete"] = 3] = "Complete";
})($f99c3f30def4cffc$export$de6922b83abf2eed || ($f99c3f30def4cffc$export$de6922b83abf2eed = {}));
const $f99c3f30def4cffc$export$8727d8535fbca2ab = ({ open: open , collectionId: collectionId , feesOnTopBps: feesOnTopBps , feesOnTopFixed: feesOnTopFixed , normalizeRoyalties: normalizeRoyalties , children: children  })=>{
    const { data: wallet  } = (0, $TBcmg$useWalletClient)();
    const account = (0, $TBcmg$useAccount)();
    const [selectedTokens, setSelectedTokens] = (0, $TBcmg$useState)([]);
    const [itemAmount, setItemAmount] = (0, $TBcmg$useState)(undefined);
    const [ethAmount, setEthAmount] = (0, $TBcmg$useState)(undefined);
    const [isItemsToggled, setIsItemsToggled] = (0, $TBcmg$useState)(true);
    const [maxInput, setMaxInput] = (0, $TBcmg$useState)(0);
    const [sweepStep, setSweepStep] = (0, $TBcmg$useState)($f99c3f30def4cffc$export$de6922b83abf2eed.Idle);
    const [stepData, setStepData] = (0, $TBcmg$useState)(null);
    const [transactionError, setTransactionError] = (0, $TBcmg$useState)();
    const [hasEnoughCurrency, setHasEnoughCurrency] = (0, $TBcmg$useState)(true);
    const [feeOnTop, setFeeOnTop] = (0, $TBcmg$useState)(0);
    const chainCurrency = (0, $57dcd81a309fc6e2$export$2e2bcd8739ae039)();
    const [currency, setCurrency] = (0, $TBcmg$useState)(chainCurrency);
    const isChainCurrency = currency.address === chainCurrency.address;
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const currentChain = client?.currentChain();
    const { chains: chains  } = (0, $TBcmg$useNetwork)();
    const chain = chains.find((chain)=>chain.id === currentChain?.id);
    const blockExplorerBaseUrl = chain?.blockExplorers?.default?.url || "https://etherscan.io";
    const [fetchedInitialTokens, setFetchedInitialTokens] = (0, $TBcmg$useState)(false);
    const [tokens, setTokens] = (0, $TBcmg$useState)(undefined);
    const fetchBuyPath = (0, $TBcmg$useCallback)(()=>{
        if (!wallet || !client) return;
        let options = {
            partial: true,
            onlyPath: true
        };
        if (normalizeRoyalties !== undefined) options.normalizeRoyalties = normalizeRoyalties;
        client?.actions.buyToken({
            items: [
                {
                    collection: collectionId,
                    quantity: 50,
                    fillType: "trade"
                }
            ],
            expectedPrice: undefined,
            options: options,
            wallet: wallet,
            precheck: true,
            onProgress: ()=>{}
        }).then((data)=>{
            setTokens("path" in data ? data["path"] : undefined);
        }).finally(()=>{
            setFetchedInitialTokens(true);
        });
    }, [
        client,
        wallet,
        normalizeRoyalties,
        collectionId,
        currency
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (open) fetchBuyPath();
    }, [
        client,
        wallet,
        open
    ]);
    // Update currency
    const updateCurrency = (0, $TBcmg$useCallback)((tokens)=>{
        let currencies = new Set();
        let currenciesData = {};
        for(let i = 0; i < tokens.length; i++){
            const token = tokens[i];
            if (token.currency) {
                currencies.add(token.currency);
                currenciesData[token.currency] = {
                    contract: token.currency,
                    symbol: token.currencySymbol,
                    decimals: token.currencyDecimals
                };
            }
            if (currencies.size > 1) break;
        }
        if (currencies.size > 1) {
            if (currency?.address != chainCurrency?.address) setCurrency(chainCurrency);
        } else if (currencies.size > 0) {
            let otherCurrency = Object.values(currenciesData)[0];
            if (otherCurrency?.contract != currency?.address) setCurrency({
                symbol: otherCurrency?.symbol,
                decimals: otherCurrency?.decimals,
                name: "",
                address: otherCurrency?.contract,
                chainId: chain?.id
            });
        }
    }, [
        chain,
        chainCurrency
    ]);
    // update currency based on selected tokens
    (0, $TBcmg$useEffect)(()=>{
        updateCurrency(selectedTokens);
    }, [
        selectedTokens
    ]);
    const total = (0, $TBcmg$useMemo)(()=>{
        const updatedTotal = selectedTokens?.reduce((total, token)=>{
            return total + (token?.currency != chainCurrency.address && isChainCurrency ? token?.buyInQuote || 0 : token?.totalPrice || 0);
        }, 0);
        let fees = 0;
        if (feesOnTopBps && feesOnTopBps.length > 0) fees = feesOnTopBps.reduce((totalFees, feeOnTop)=>{
            const [_, fee] = feeOnTop.split(":");
            return totalFees + Number(fee) / 10000 * updatedTotal;
        }, 0);
        else if (feesOnTopFixed && feesOnTopFixed.length > 0) fees = feesOnTopFixed.reduce((totalFees, feeOnTop)=>{
            const [_, fee] = feeOnTop.split(":");
            const parsedFee = (0, $TBcmg$formatUnits)(BigInt(fee), currency?.decimals || 18);
            return totalFees + Number(parsedFee);
        }, 0);
        setFeeOnTop(fees);
        return updatedTotal + fees;
    }, [
        selectedTokens,
        feesOnTopBps,
        feesOnTopFixed,
        currency,
        isChainCurrency
    ]);
    const coinConversion = (0, $b5d8dec284676ed1$export$2e2bcd8739ae039)(open ? "USD" : undefined, currency?.symbol);
    const usdPrice = coinConversion.length > 0 ? coinConversion[0].price : 0;
    const feeUsd = feeOnTop * usdPrice;
    const totalUsd = usdPrice * (total || 0);
    const { data: balance  } = (0, $TBcmg$useBalance)({
        chainId: chain?.id,
        address: account.address,
        token: currency?.address !== (0, $TBcmg$zeroAddress) ? currency?.address : undefined,
        watch: open,
        formatUnits: currency?.decimals
    });
    // Determine if user has enough funds
    (0, $TBcmg$useEffect)(()=>{
        if (balance) {
            const totalPriceTruncated = (0, $6f54b4a5aad888ed$export$a81f732198733497)(total, currency?.decimals || 18);
            if (!balance.value) setHasEnoughCurrency(false);
            else if (balance?.value < (0, $TBcmg$parseUnits)(`${totalPriceTruncated}`, currency?.decimals || 18)) setHasEnoughCurrency(false);
            else setHasEnoughCurrency(true);
        }
    }, [
        total,
        balance,
        currency
    ]);
    const availableTokens = (0, $TBcmg$useMemo)(()=>{
        if (!tokens) return [];
        return tokens;
    }, [
        tokens,
        account
    ]);
    const cheapestAvailablePrice = availableTokens?.[0]?.totalPrice || 0;
    (0, $TBcmg$useEffect)(()=>{
        setItemAmount(1);
        setEthAmount(cheapestAvailablePrice);
    }, [
        availableTokens.length
    ]);
    // set max input
    (0, $TBcmg$useEffect)(()=>{
        if (isItemsToggled) setMaxInput(Math.min(availableTokens.length, 50));
        else {
            const maxEth = availableTokens.slice(0, 50).reduce((total, token)=>{
                total += token?.currency != chainCurrency.address && isChainCurrency ? token?.buyInQuote || 0 : token?.totalPrice || 0;
                return total;
            }, 0);
            setMaxInput(maxEth);
        }
    }, [
        availableTokens,
        isItemsToggled
    ]);
    const calculateTokensToAdd = (0, $TBcmg$useCallback)(()=>{
        let totalEthPrice = 0;
        let tokensToAdd = [];
        for (let token of availableTokens){
            if (ethAmount && totalEthPrice + (token?.totalPrice || 0) <= ethAmount && tokensToAdd.length < 50) {
                totalEthPrice += token?.totalPrice || 0;
                tokensToAdd.push(token);
            } else break;
        }
        return tokensToAdd;
    }, [
        availableTokens,
        ethAmount
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (isItemsToggled) {
            const updatedTokens = availableTokens?.slice(0, itemAmount);
            setSelectedTokens(updatedTokens);
        } else setSelectedTokens(calculateTokensToAdd());
    }, [
        isItemsToggled,
        ethAmount,
        itemAmount
    ]);
    // reset selectedItems when toggle changes
    (0, $TBcmg$useEffect)(()=>{
        setItemAmount(1);
        setEthAmount(cheapestAvailablePrice);
    }, [
        isItemsToggled
    ]);
    // reset state on close
    (0, $TBcmg$useEffect)(()=>{
        if (!open) {
            setSelectedTokens([]);
            setTokens(undefined);
            setItemAmount(undefined);
            setEthAmount(undefined);
            setSweepStep($f99c3f30def4cffc$export$de6922b83abf2eed.Idle);
            setIsItemsToggled(true);
            setTransactionError(null);
            setFetchedInitialTokens(false);
        }
    }, [
        open
    ]);
    const sweepTokens = (0, $TBcmg$useCallback)(()=>{
        if (!wallet) {
            const error = new Error("Missing a wallet/signer");
            setTransactionError(error);
            throw error;
        }
        if (!client) {
            const error = new Error("ReservoirClient was not initialized");
            setTransactionError(error);
            throw error;
        }
        setTransactionError(null);
        let options = {
            partial: true
        };
        if (feesOnTopBps && feesOnTopBps?.length > 0) {
            const fixedFees = feesOnTopBps.map((fullFee)=>{
                const [referrer, feeBps] = fullFee.split(":");
                const totalFeeTruncated = (0, $6f54b4a5aad888ed$export$a81f732198733497)(total - feeOnTop, currency?.decimals || 18);
                const fee = Number((0, $TBcmg$parseUnits)(`${Number(totalFeeTruncated)}`, currency?.decimals || 18) * BigInt(feeBps)) / 10000;
                const atomicUnitsFee = (0, $TBcmg$formatUnits)(BigInt(fee), 0);
                return `${referrer}:${atomicUnitsFee}`;
            });
            options.feesOnTop = fixedFees;
        }
        if (feesOnTopFixed && feesOnTopFixed.length > 0) options.feesOnTop = feesOnTopFixed;
        else if (!feesOnTopFixed && !feesOnTopBps) delete options.feesOnTop;
        if (normalizeRoyalties !== undefined) options.normalizeRoyalties = normalizeRoyalties;
        if (!selectedTokens || selectedTokens.length === 0) {
            const error = new Error("No tokens to sweep");
            setTransactionError(error);
            throw error;
        }
        setSweepStep($f99c3f30def4cffc$export$de6922b83abf2eed.Approving);
        client.actions.buyToken({
            items: [
                {
                    collection: collectionId,
                    quantity: selectedTokens.length
                }
            ],
            expectedPrice: total - feeOnTop,
            wallet: wallet,
            options: options,
            onProgress: (steps, path)=>{
                if (!steps) return;
                const executableSteps = steps.filter((step)=>step.items && step.items.length > 0);
                let stepCount = executableSteps.length;
                let currentStepItem;
                const currentStepIndex = executableSteps.findIndex((step)=>{
                    currentStepItem = step.items?.find((item)=>item.status === "incomplete");
                    return currentStepItem;
                });
                const currentStep = currentStepIndex > -1 ? executableSteps[currentStepIndex] : executableSteps[stepCount - 1];
                if (currentStepItem) setStepData({
                    totalSteps: stepCount,
                    stepProgress: currentStepIndex,
                    currentStep: currentStep,
                    currentStepItem: currentStepItem,
                    path: path
                });
                if (currentStep.items?.every((item)=>item.txHash)) setSweepStep($f99c3f30def4cffc$export$de6922b83abf2eed.Finalizing);
                if (steps.every((step)=>!step.items || step.items.length == 0 || step.items?.every((item)=>item.status === "complete"))) setSweepStep($f99c3f30def4cffc$export$de6922b83abf2eed.Complete);
            }
        }).catch((e)=>{
            const error = e;
            const transactionError = new Error(error?.message || "", {
                cause: error
            });
            setTransactionError(transactionError);
            setSweepStep($f99c3f30def4cffc$export$de6922b83abf2eed.Idle);
            fetchBuyPath();
        });
    }, [
        selectedTokens,
        client,
        wallet,
        total,
        normalizeRoyalties,
        chain,
        collectionId,
        currency,
        feesOnTopBps,
        feesOnTopFixed
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, children({
        loading: !fetchedInitialTokens,
        address: account?.address,
        selectedTokens: selectedTokens,
        setSelectedTokens: setSelectedTokens,
        itemAmount: itemAmount,
        setItemAmount: setItemAmount,
        ethAmount: ethAmount,
        setEthAmount: setEthAmount,
        isItemsToggled: isItemsToggled,
        setIsItemsToggled: setIsItemsToggled,
        maxInput: maxInput,
        setMaxInput: setMaxInput,
        currency: currency,
        chainCurrency: chainCurrency,
        isChainCurrency: isChainCurrency,
        total: total,
        totalUsd: totalUsd,
        feeOnTop: feeOnTop,
        feeUsd: feeUsd,
        usdPrice: usdPrice,
        currentChain: currentChain,
        availableTokens: availableTokens,
        tokens: tokens,
        balance: balance?.value,
        hasEnoughCurrency: hasEnoughCurrency,
        blockExplorerBaseUrl: blockExplorerBaseUrl,
        transactionError: transactionError,
        stepData: stepData,
        setStepData: setStepData,
        sweepStep: sweepStep,
        setSweepStep: setSweepStep,
        sweepTokens: sweepTokens
    }));
};


const $ecf99860a3fcdd2e$var$ModalCopy = {
    title: "Buy",
    ctaClose: "Close",
    ctaBuy: "Buy",
    ctaBuyDisabled: "Select Items to Buy..***",
    ctaInsufficientFunds: "Add Funds to Purchase",
    ctaAwaitingApproval: "Waiting for Approval..."
};
function $ecf99860a3fcdd2e$export$2536c4e1bdf96841({ openState: openState , trigger: trigger , collectionId: collectionId , feesOnTopBps: feesOnTopBps , feesOnTopFixed: feesOnTopFixed , normalizeRoyalties: normalizeRoyalties , copyOverrides: copyOverrides , onSweepComplete: onSweepComplete , onSweepError: onSweepError , onClose: onClose  }) {
    const copy = {
        ...$ecf99860a3fcdd2e$var$ModalCopy,
        ...copyOverrides
    };
    const [open, setOpen] = (0, $b69d00be56c1bdb6$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $f99c3f30def4cffc$export$8727d8535fbca2ab), {
        open: open,
        collectionId: collectionId,
        feesOnTopBps: feesOnTopBps,
        feesOnTopFixed: feesOnTopFixed,
        normalizeRoyalties: normalizeRoyalties
    }, ({ loading: loading , address: address , selectedTokens: selectedTokens , itemAmount: itemAmount , setItemAmount: setItemAmount , ethAmount: ethAmount , setEthAmount: setEthAmount , isItemsToggled: isItemsToggled , setIsItemsToggled: setIsItemsToggled , maxInput: maxInput , currency: currency , chainCurrency: chainCurrency , isChainCurrency: isChainCurrency , total: total , totalUsd: totalUsd , feeOnTop: feeOnTop , feeUsd: feeUsd , usdPrice: usdPrice , currentChain: currentChain , availableTokens: availableTokens , balance: balance , hasEnoughCurrency: hasEnoughCurrency , blockExplorerBaseUrl: blockExplorerBaseUrl , transactionError: transactionError , stepData: stepData , sweepStep: sweepStep , sweepTokens: sweepTokens  })=>{
        (0, $TBcmg$useEffect)(()=>{
            if (sweepStep === (0, $f99c3f30def4cffc$export$de6922b83abf2eed).Complete && onSweepComplete) {
                const data = {
                    collectionId: collectionId,
                    maker: address,
                    stepData: stepData
                };
                onSweepComplete(data);
            }
        }, [
            sweepStep
        ]);
        (0, $TBcmg$useEffect)(()=>{
            if (transactionError && onSweepError) {
                const data = {
                    collectionId: collectionId,
                    maker: address,
                    stepData: stepData
                };
                onSweepError(transactionError, data);
            }
        }, [
            transactionError
        ]);
        const hasTokens = availableTokens && availableTokens.length > 0;
        const images = selectedTokens.slice(0, 2).map((token)=>{
            return `${currentChain?.baseApiUrl}/redirect/tokens/${token.contract}:${token.tokenId}/image/v1?imageSize=small`;
        });
        const pathMap = stepData?.path ? stepData.path.reduce((paths, path)=>{
            if (path.orderId) paths[path.orderId] = path;
            return paths;
        }, {}) : {};
        const salesTxHashes = stepData?.currentStep?.items?.reduce((txHashes, item)=>{
            item.salesData?.forEach((saleData)=>{
                if (saleData.txHash) txHashes.add(saleData.txHash);
            });
            return txHashes;
        }, new Set()) || [];
        const totalSales = Array.from(salesTxHashes).length;
        const failedSales = totalSales - (stepData?.currentStep?.items?.length || 0);
        const successfulSales = totalSales - failedSales;
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $32d03e1adcee2721$export$2b77a92f1a5ad772), {
            trigger: trigger,
            title: copy.title,
            open: open,
            loading: loading,
            onOpenChange: (open)=>{
                if (!open && onClose) {
                    const data = {
                        collectionId: collectionId,
                        maker: address,
                        stepData: stepData
                    };
                    onClose(data, sweepStep);
                }
                setOpen(open);
            }
        }, !loading && !hasTokens ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center",
            css: {
                py: "$6",
                px: "$4",
                gap: "$3"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            css: {
                textAlign: "center"
            }
        }, "No available items were found for this collection.")) : null, !loading && hasTokens && sweepStep === (0, $f99c3f30def4cffc$export$de6922b83abf2eed).Idle && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                px: "$4",
                pt: "$4",
                pb: "$2"
            }
        }, transactionError ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $f9c59e90de25e993$export$2e2bcd8739ae039), null) : null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $d32e4d6e5c9320f4$export$2e2bcd8739ae039), {
            min: 0,
            max: isItemsToggled ? Math.min(50, maxInput) : maxInput,
            step: isItemsToggled ? 1 : Math.min(0.01, availableTokens?.[0]?.totalPrice || 0.01),
            value: isItemsToggled ? [
                itemAmount || 0
            ] : [
                ethAmount || 0
            ],
            onValueChange: (value)=>{
                if (isItemsToggled) setItemAmount(value[0]);
                else setEthAmount(value[0]);
            },
            css: {
                width: "100%",
                my: "$3"
            }
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            css: {
                gap: "$3",
                mb: 20
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $5c0c2c3952297d70$export$2e2bcd8739ae039), {
            value: isItemsToggled ? itemAmount || "" : ethAmount || "",
            type: "number",
            placeholder: "0",
            step: isItemsToggled ? 1 : 0.01,
            onChange: (e)=>{
                const inputValue = Number(e.target.value);
                if (e.target.value == "") {
                    setItemAmount(undefined);
                    setEthAmount(undefined);
                } else if (isItemsToggled) setItemAmount(Math.min(Math.max(inputValue, 0), maxInput) // min: 0, max: maxInput
                );
                else setEthAmount(Math.min(Math.max(inputValue, 0), maxInput));
            },
            css: {
                textAlign: "center",
                width: "100%",
                height: 44,
                boxSizing: "border-box",
                "&::placeholder": {
                    paddingLeft: 12
                }
            },
            containerCss: {
                width: "100%"
            }
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $37c1e2b59bdb2f0d$export$569eb7a0a04958d), {
            isItemsToggled: isItemsToggled,
            setIsItemsToggled: setIsItemsToggled,
            currency: currency
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                height: 185,
                overflowY: "auto",
                mb: "$4"
            }
        }, selectedTokens && selectedTokens.length > 0 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $9051fde5e764f5e2$export$2e2bcd8739ae039), {
            css: {
                gridTemplateColumns: "repeat(5,minmax(0,1fr))",
                "@bp1": {
                    gridTemplateColumns: "repeat(7,minmax(0,1fr))"
                },
                gap: 8
            }
        }, selectedTokens.map((token, i)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $f99c1089a7d382c4$export$6d749757b51f11b0), {
                key: `${token?.tokenId}-${i}`,
                name: `#${token.tokenId}`,
                image: `${currentChain?.baseApiUrl}/redirect/tokens/${token.contract}:${token.tokenId}/image/v1?imageSize=small`,
                currency: currency,
                amount: token?.currency != chainCurrency.address && isChainCurrency ? token?.buyInQuote : token?.totalPrice
            }))) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "subtle",
            css: {
                textAlign: "center",
                my: "auto"
            }
        }, "Selected items will appear here")), feeOnTop > 0 && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                width: "100%",
                py: "$4",
                gap: "$1"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            justify: "between"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2"
        }, "Referral Fee"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            amount: feeOnTop,
            address: currency?.address,
            decimals: currency?.decimals,
            symbol: currency?.symbol
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            justify: "end"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
            amount: feeUsd,
            color: "subtle"
        }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            justify: "between",
            align: "start",
            css: {
                height: 34
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6"
        }, "Total"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "end",
            css: {
                gap: "$1"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            textStyle: "h6",
            amount: total,
            address: currency?.address,
            decimals: currency?.decimals,
            symbol: currency?.symbol,
            logoWidth: 18
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
            amount: totalUsd,
            style: "tiny",
            color: "subtle"
        })))), hasEnoughCurrency ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                m: "$4"
            },
            disabled: !(selectedTokens.length > 0) || !hasEnoughCurrency,
            onClick: sweepTokens
        }, selectedTokens.length > 0 ? copy.ctaBuy : copy.ctaBuyDisabled) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center",
            css: {
                px: "$3"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            css: {
                mr: "$3"
            },
            color: "error",
            style: "body3"
        }, "Insufficient Balance"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            amount: balance,
            address: currency?.address,
            decimals: currency?.decimals,
            symbol: currency?.symbol,
            textStyle: "body3"
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                my: "$4",
                width: "100%"
            },
            disabled: true,
            onClick: sweepTokens
        }, copy.ctaInsufficientFunds))), !loading && sweepStep === (0, $f99c3f30def4cffc$export$de6922b83abf2eed).Approving && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                borderBottom: "1px solid $neutralBorder"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $3252fd4b8efa16bf$export$c48a33806654dd82), {
            itemCount: selectedTokens.length,
            images: images,
            totalPrice: total,
            usdPrice: usdPrice,
            currency: currency,
            chain: currentChain
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center",
            css: {
                p: "$4",
                overflowY: "auto"
            }
        }, stepData?.currentStep == undefined ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                py: "$5"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null)) : null, stepData?.currentStep && stepData.currentStep.id === "auth" ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $d6ae44a4b381214a$export$2e2bcd8739ae039), {
            css: {
                mt: 48,
                mb: "$4",
                gap: 20
            }
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: true,
            css: {
                mt: "$4",
                width: "100%"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), copy.ctaAwaitingApproval)) : null, stepData?.currentStep && stepData?.currentStep?.id !== "auth" ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, stepData?.currentStep?.items && stepData?.currentStep?.items.length > 1 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                gap: "$4",
                width: "100%"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6",
            css: {
                textAlign: "center"
            }
        }, "Approve Purchases"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle"
        }, "Due to limitations with Blur, the purchase of these items needs to be split into", " ", stepData?.currentStep?.items.length, " separate transactions."), stepData?.currentStep?.items.map((item)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $add635cbf9f5888f$export$d7253bf947e7aaac), {
                item: item,
                pathMap: pathMap,
                usdPrice: totalUsd,
                chain: currentChain,
                open: true
            }))) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center",
            css: {
                gap: "$4",
                pt: "$4",
                width: "100%"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6"
        }, "Confirm transaction in your wallet"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: "$neutralText"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faWallet),
            style: {
                width: "32px",
                height: "32px",
                margin: "12px 0px"
            }
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: true,
            css: {
                mt: "$4",
                width: "100%"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), copy.ctaAwaitingApproval))) : null)), !loading && sweepStep === (0, $f99c3f30def4cffc$export$de6922b83abf2eed).Finalizing && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column"
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                p: "$4",
                borderBottom: "1px solid $neutralBorder"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $3252fd4b8efa16bf$export$c48a33806654dd82), {
            itemCount: selectedTokens.length,
            images: images,
            totalPrice: total,
            usdPrice: totalUsd,
            currency: currency,
            chain: currentChain
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center",
            justify: "center",
            css: {
                gap: "$4",
                px: "$4",
                py: "$5"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6"
        }, "Finalizing on blockchain"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "subtle",
            css: {
                textAlign: "center"
            }
        }, "You can close this modal while it finalizes on the blockchain. The transaction will continue in the background."), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: "$neutralSolid"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faCube),
            style: {
                width: 32,
                height: 32
            }
        })))), sweepStep === (0, $f99c3f30def4cffc$export$de6922b83abf2eed).Complete && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center",
            css: {
                width: "100%",
                p: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center",
            css: {
                px: "$4",
                py: "$5",
                gap: 24
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: failedSales ? "$errorAccent" : "$successAccent"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: failedSales ? (0, $TBcmg$faCircleExclamation) : (0, $TBcmg$faCheckCircle),
            fontSize: 32
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h5",
            css: {
                textAlign: "center"
            }
        }, failedSales ? `${successfulSales} ${successfulSales > 1 ? "items" : "item"} purchased, ${failedSales} ${failedSales > 1 ? "items" : "item"} failed` : "Congrats! Purchase was successful."), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                gap: "$2",
                mb: "$3"
            }
        }, stepData?.currentStep?.items?.map((item)=>{
            const txHash = item.txHash ? `${item.txHash.slice(0, 4)}...${item.txHash.slice(-4)}` : "";
            return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
                href: `${blockExplorerBaseUrl}/tx/${item?.txHash}`,
                color: "primary",
                weight: "medium",
                target: "_blank",
                css: {
                    fontSize: 12
                }
            }, "View transaction: ", txHash);
        }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            css: {
                width: "100%"
            },
            onClick: ()=>setOpen(false)
        }, copy.ctaClose)));
    });
}
$ecf99860a3fcdd2e$export$2536c4e1bdf96841.Custom = (0, $f99c3f30def4cffc$export$8727d8535fbca2ab);





let $0e20de6a6de69864$var$modelViewerInjected = false;
const $0e20de6a6de69864$var$importScript = (src)=>{
    if (document) {
        const script = document.createElement("script");
        script.async = true;
        script.src = src;
        script.type = "module";
        document.body.appendChild(script);
    }
};
const $0e20de6a6de69864$var$useModelViewer = (enabled)=>{
    (0, $TBcmg$useEffect)(()=>{
        if (enabled && !$0e20de6a6de69864$var$modelViewerInjected) {
            $0e20de6a6de69864$var$modelViewerInjected = true;
            $0e20de6a6de69864$var$importScript("https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js");
        }
    }, [
        enabled
    ]);
};
var $0e20de6a6de69864$export$2e2bcd8739ae039 = $0e20de6a6de69864$var$useModelViewer;








const $4104b64cb3336525$var$MediaPlayButton = ({ mediaRef: mediaRef  })=>{
    const [playing, setPlaying] = (0, $TBcmg$useState)(false);
    (0, $TBcmg$useEffect)(()=>{
        if (mediaRef.current) {
            mediaRef.current.onplaying = ()=>{
                setPlaying(true);
            };
            mediaRef.current.onpause = ()=>{
                setPlaying(false);
            };
        }
        return ()=>{
            if (mediaRef.current) {
                mediaRef.current.onplaying = null;
                mediaRef.current.onpause = null;
            }
        };
    }, [
        mediaRef
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
        css: {
            zIndex: 5,
            position: "absolute",
            right: 16,
            bottom: 16,
            backdropFilter: "blur(2px)",
            background: "rgba(105, 113, 119, 0.5)",
            width: 48,
            height: 48,
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            "&:hover": {
                background: "rgba(105, 113, 119, 0.7)"
            }
        },
        onClick: (e)=>{
            e.preventDefault();
            if (mediaRef.current) {
                if (mediaRef.current.paused) mediaRef.current.play();
                else mediaRef.current.pause();
            }
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: playing ? (0, $TBcmg$faPause) : (0, $TBcmg$faPlay),
        width: 24,
        height: 24
    }));
};
var $4104b64cb3336525$export$2e2bcd8739ae039 = $4104b64cb3336525$var$MediaPlayButton;







const $f03f6cdb7e860913$var$TokenFallback = ({ style: style , className: className , token: token , chainId: chainId , onRefreshClicked: onRefreshClicked  })=>{
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const reservoirChain = chainId ? client?.chains.find((chain)=>chain.id === chainId) : client?.currentChain();
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        justify: "center",
        align: "center",
        direction: "column",
        css: {
            gap: "$2",
            aspectRatio: "1/1",
            p: "$2",
            ...style
        },
        className: className
    }, token?.collection?.image && /*#__PURE__*/ (0, $TBcmg$react).createElement("img", {
        style: {
            width: 64,
            height: 64,
            objectFit: "cover",
            borderRadius: 8
        },
        src: token?.collection?.image
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body2",
        css: {
            textAlign: "center"
        }
    }, "No Content Available"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
        color: "secondary",
        onClick: (e)=>{
            e.preventDefault();
            if (!reservoirChain) throw "ReservoirClient missing chain configuration";
            onRefreshClicked();
            const url = `${reservoirChain?.baseApiUrl}/tokens/refresh/v1`;
            const body = {
                token: `${token?.collection?.id}:${token?.tokenId}`
            };
            const headers = {
                ...(0, $36299c87cce4672d$export$a6f1ecf08e412113)(reservoirChain?.apiKey, client?.version),
                "Content-Type": "application/json"
            };
            fetch(url, {
                headers: headers,
                method: "POST",
                body: JSON.stringify(body)
            }).then((res)=>res.json()).catch((e)=>{
                throw e;
            });
        }
    }, "Refresh"));
};
var $f03f6cdb7e860913$export$2e2bcd8739ae039 = $f03f6cdb7e860913$var$TokenFallback;


const $b11e5b18b62632d1$export$b7d45a46da28b4d3 = (token)=>{
    let extension = null;
    if (token?.media) {
        const pieces = token.media.split("/");
        const file = pieces && pieces[pieces.length - 1] ? pieces[pieces.length - 1] : null;
        const matches = file ? file.match("(\\.[^.]+)$") : null;
        extension = matches && matches[0] ? matches[0].replace(".", "") : null;
    }
    return extension ? extension : null;
};
const $b11e5b18b62632d1$var$TokenMedia = ({ preview: preview , token: token , style: style , className: className , modelViewerOptions: modelViewerOptions = {} , videoOptions: videoOptions = {} , audioOptions: audioOptions = {} , iframeOptions: iframeOptions = {} , fallback: fallback , onError: onError = ()=>{} , onRefreshToken: onRefreshToken = ()=>{}  })=>{
    const mediaRef = (0, $TBcmg$useRef)(null);
    const themeContext = (0, $TBcmg$useContext)((0, $f4609ce2cb6b416b$export$2c657da244d00bd6));
    let borderRadius = themeContext?.radii?.borderRadius?.value || "0";
    const [error, setError] = (0, $TBcmg$useState)(null);
    const media = token?.media;
    const tokenPreview = token?.image;
    const mediaType = $b11e5b18b62632d1$export$b7d45a46da28b4d3(token);
    const defaultStyle = {
        width: "150px",
        height: "150px",
        objectFit: "cover",
        borderRadius: borderRadius,
        position: "relative"
    };
    const computedStyle = {
        ...defaultStyle,
        ...style
    };
    (0, $0e20de6a6de69864$export$2e2bcd8739ae039)(!preview && mediaType && (mediaType === "gltf" || mediaType === "glb") ? true : false);
    const [measurements, containerRef] = (0, $TBcmg$useMeasure)();
    const isContainerLarge = (measurements?.width || 0) >= 360;
    if (!token && !preview) {
        console.warn("A token object or a media url are required!");
        return null;
    }
    if (error || !media && !tokenPreview) {
        let fallbackElement;
        if (fallback) fallbackElement = fallback(mediaType);
        if (!fallbackElement) fallbackElement = /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $f03f6cdb7e860913$export$2e2bcd8739ae039), {
            style: style,
            className: className,
            token: token,
            onRefreshClicked: onRefreshToken
        });
        return fallbackElement;
    }
    const onErrorCb = (e)=>{
        setError(e);
        onError(e.nativeEvent);
    };
    if (preview || !media) return /*#__PURE__*/ (0, $TBcmg$react).createElement("img", {
        alt: "Token Image",
        src: tokenPreview,
        style: {
            ...computedStyle,
            visibility: !tokenPreview || tokenPreview.length === 0 ? "hidden" : "visible"
        },
        className: className,
        onError: onErrorCb
    });
    // VIDEO
    if (mediaType === "mp4") return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        className: className,
        style: computedStyle,
        ref: containerRef
    }, !isContainerLarge && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $4104b64cb3336525$export$2e2bcd8739ae039), {
        mediaRef: mediaRef
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("video", {
        style: computedStyle,
        className: className,
        poster: tokenPreview,
        ...videoOptions,
        controls: isContainerLarge,
        loop: true,
        playsInline: true,
        onError: onErrorCb,
        ref: mediaRef
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement("source", {
        src: media,
        type: "video/mp4"
    }), "Your browser does not support the", /*#__PURE__*/ (0, $TBcmg$react).createElement("code", null, "video"), " element."));
    // AUDIO
    if (mediaType === "wav" || mediaType === "mp3") return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        className: className,
        style: computedStyle,
        ref: containerRef
    }, !isContainerLarge && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $4104b64cb3336525$export$2e2bcd8739ae039), {
        mediaRef: mediaRef
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("img", {
        alt: "Audio Poster",
        src: tokenPreview,
        style: {
            position: "absolute",
            height: "100%",
            width: "100%",
            visibility: !tokenPreview || tokenPreview.length === 0 ? "hidden" : "visible",
            objectFit: "cover"
        },
        onError: onErrorCb
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement("audio", {
        src: media,
        ...audioOptions,
        onError: onErrorCb,
        ref: mediaRef,
        controls: isContainerLarge,
        style: {
            position: "absolute",
            bottom: 16,
            left: 16,
            width: "calc(100% - 32px)"
        }
    }, "Your browser does not support the", /*#__PURE__*/ (0, $TBcmg$react).createElement("code", null, "audio"), " element."));
    // 3D
    if (mediaType === "gltf" || mediaType === "glb") return /*#__PURE__*/ (0, $TBcmg$react).createElement("model-viewer", {
        src: media,
        ar: true,
        "ar-modes": "webxr scene-viewer quick-look",
        poster: tokenPreview,
        "seamless-poster": true,
        "shadow-intensity": "1",
        "camera-controls": true,
        "enable-pan": true,
        ...modelViewerOptions,
        style: computedStyle,
        className: className,
        onError: onErrorCb
    });
    //Image
    if (mediaType === "png" || mediaType === "jpeg" || mediaType === "jpg" || mediaType === "gif") return /*#__PURE__*/ (0, $TBcmg$react).createElement("img", {
        alt: "Token Image",
        src: media,
        className: className,
        style: {
            ...computedStyle,
            visibility: !media || media.length === 0 ? "hidden" : "visible"
        },
        onError: onErrorCb
    });
    // HTML
    if (mediaType === "html" || mediaType === null || mediaType === undefined || mediaType === "other" || mediaType === "svg") return /*#__PURE__*/ (0, $TBcmg$react).createElement("iframe", {
        style: computedStyle,
        className: className,
        src: media,
        sandbox: "allow-scripts",
        frameBorder: "0",
        ...iframeOptions
    });
    return /*#__PURE__*/ (0, $TBcmg$react).createElement("img", {
        alt: "Token Image",
        src: tokenPreview,
        style: {
            ...computedStyle,
            visibility: !tokenPreview || tokenPreview.length === 0 ? "hidden" : "visible"
        },
        className: className,
        onError: onErrorCb
    });
};
var $b11e5b18b62632d1$export$2e2bcd8739ae039 = $b11e5b18b62632d1$var$TokenMedia;




















const $d35781847bc1a968$var$CartItemImage = (0, $4a58f4053e821189$export$3817b7a54a07cec7)("img", {
    width: 56,
    height: 56,
    borderRadius: 4,
    objectFit: "cover"
});
const $d35781847bc1a968$var$CloseButton = (0, $4a58f4053e821189$export$3817b7a54a07cec7)((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
    position: "absolute",
    width: 24,
    height: 24,
    top: -8,
    right: -8,
    flexShrink: 0,
    defaultVariants: {
        size: "none",
        corners: "circle"
    }
});
const $d35781847bc1a968$var$CartItem = ({ item: item , usdConversion: usdConversion , tokenUrl: tokenUrl  })=>{
    const { token: token , collection: collection , order: order  } = item;
    const contract = collection.id.split(":")[0];
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const { remove: remove , data: cartCurrency , setQuantity: setQuantity  } = (0, $95b0bed557a4469f$export$2e2bcd8739ae039)((cart)=>cart.currency);
    const { data: cartChain  } = (0, $95b0bed557a4469f$export$2e2bcd8739ae039)((cart)=>cart.chain);
    const currencyConverted = item.price && item.price?.currency?.contract !== cartCurrency?.contract;
    let price = currencyConverted ? item.price?.amount?.native : item.price?.amount?.decimal;
    let previousPrice = item.previousPrice?.currency?.contract !== cartCurrency?.contract ? item.previousPrice?.amount?.native : item.previousPrice?.amount?.decimal;
    let priceDiff = 0;
    let priceIncrease = false;
    let priceDecrease = false;
    if (price !== undefined && previousPrice !== undefined) {
        priceDiff = Math.abs((price - previousPrice) / price * 100);
        priceIncrease = price > previousPrice;
        priceDecrease = price < previousPrice;
    }
    let usdPrice = (usdConversion || 0) * (price || 0);
    const reservoirChain = client?.chains.find((chain)=>cartChain?.id === chain.id);
    if (price && order?.quantity) {
        price = price * order.quantity;
        usdPrice = usdPrice * order.quantity;
    }
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        css: {
            transition: "background-color 0.25s ease-in-out",
            "&:hover": {
                backgroundColor: "$neutralBgHover"
            }
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        onClick: ()=>{
            let chain = Object.values($TBcmg$viemchains).find((chain)=>cartChain?.id === chain.id);
            if (!chain) chain = Object.values((0, $TBcmg$customChains)).find((chain)=>chain.id === (reservoirChain?.id || 1));
            let url = tokenUrl;
            if (!url && cartChain) {
                let tokenMetaKey = null;
                if (cartChain.id === $TBcmg$viemchains.mainnet.id) tokenMetaKey = "reservoir:token-url-mainnet";
                else tokenMetaKey = `reservoir:token-url-${chain?.name.toLowerCase()}`;
                const tokenMetaTag = document.querySelector(`meta[property='${tokenMetaKey}']`);
                if (tokenMetaTag) url = tokenMetaTag.getAttribute("content") || undefined;
            }
            if (url) window.location.href = url.replace("${contract}", contract).replace("${tokenId}", token.id);
        },
        css: {
            width: "100%",
            px: 24,
            py: 8,
            cursor: "pointer"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            position: "relative",
            minWidth: 0,
            flexShrink: 0
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($d35781847bc1a968$var$CartItemImage, {
        src: `${reservoirChain?.baseApiUrl}/redirect/tokens/${contract}:${token.id}/image/v1?imageSize=small`,
        css: !price ? {
            filter: "grayscale(1)"
        } : {},
        onError: ({ currentTarget: currentTarget  })=>{
            const collectionImage = `${reservoirChain?.baseApiUrl}/redirect/collections/${collection.id}/image/v1`;
            if (currentTarget.src != collectionImage) currentTarget.src = collectionImage;
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement($d35781847bc1a968$var$CloseButton, {
        css: {
            "&:hover": {
                background: "$errorAccent"
            },
            background: !item.price ? "$errorAccent" : "$neutralSolid"
        },
        onClick: (e)=>{
            e.stopPropagation();
            e.preventDefault();
            if (order?.id) remove([
                order?.id
            ]);
            else remove([
                `${collection.id}:${token.id}`
            ]);
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faClose),
        width: "16",
        height: "16"
    }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        justify: "center",
        css: {
            gap: 2,
            ml: "$2",
            minWidth: 0
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center",
        css: {
            gap: "$1"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6",
        color: price ? undefined : "subtle",
        ellipsify: true
    }, token.name ? token.name : `#${token.id}`)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3",
        color: "subtle",
        ellipsify: true
    }, collection.name), !price && !order?.id && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3",
        color: "error"
    }, "Item no longer available"), !price && order?.id && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3",
        color: "error"
    }, "Listing no longer available"), !priceIncrease && !priceDecrease && currencyConverted && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            gap: "$1",
            color: "$accentSolidHover"
        },
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3",
        color: "accent"
    }, "Currency converted")), priceIncrease && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            gap: "$1",
            color: "$accentSolidHover"
        },
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        width: "11",
        icon: (0, $TBcmg$faArrowUp)
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body2",
        color: "accent"
    }, "Price has gone up ", (0, $6f54b4a5aad888ed$export$f5dd818bff069720)(priceDiff), "%")), priceDecrease && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            gap: "$1",
            color: "$accentSolidHover"
        },
        align: "center"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        width: "11",
        icon: (0, $TBcmg$faArrowDown)
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3",
        color: "accent"
    }, "Price went down ", (0, $6f54b4a5aad888ed$export$f5dd818bff069720)(priceDiff), "%"))), price ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        justify: "center",
        css: {
            ml: "auto",
            flexShrink: 0,
            gap: "$1",
            "> div": {
                ml: "auto"
            }
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
        textStyle: "subtitle2",
        amount: price,
        address: cartCurrency?.contract,
        decimals: cartCurrency?.decimals,
        symbol: cartCurrency?.symbol,
        logoWidth: 12,
        chainId: cartChain?.id
    }), usdPrice && usdPrice > 0 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
        amount: usdPrice,
        style: "tiny",
        color: "subtle",
        css: {
            textAlign: "end"
        }
    }) : null) : null), order && order?.quantityRemaining > 1 && price ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        justify: "between",
        align: "center",
        css: {
            width: "100%",
            px: 24,
            pb: 8,
            gap: "$3"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "start",
        css: {
            gap: "$1",
            overflow: "hidden",
            minWidth: 0
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3"
    }, "Quantity"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "body3",
        color: "subtle",
        ellipsify: true,
        css: {
            width: "100%"
        }
    }, (0, $6f54b4a5aad888ed$export$f5dd818bff069720)(order.quantityRemaining), " items available")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $c1ab7eea10f2afe3$export$2e2bcd8739ae039), {
        min: 1,
        max: order.quantityRemaining,
        quantity: order.quantity,
        setQuantity: (number)=>setQuantity(order.id, number),
        css: {
            border: "1px solid $neutralBorder",
            background: "none"
        }
    })) : null);
};
var $d35781847bc1a968$export$2e2bcd8739ae039 = $d35781847bc1a968$var$CartItem;






const $24b598a037d3635f$var$CartToast = ({ kind: kind = "success" , message: message , link: link  })=>{
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            width: "100%",
            background: "$wellBackground",
            p: "$2",
            borderRadius: "$borderRadius",
            mb: "$2"
        }
    }, kind === "success" && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        color: "success"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faCircleCheck),
        width: "16",
        height: "16"
    })), kind === "error" && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        color: "error"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faTriangleExclamation),
        width: "16",
        height: "16"
    })), kind === "warning" && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        color: "error"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faCircleInfo),
        width: "16",
        height: "16"
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        css: {
            ml: "$1",
            mt: 3
        },
        style: "body3"
    }, message), link);
};
var $24b598a037d3635f$export$2e2bcd8739ae039 = $24b598a037d3635f$var$CartToast;








const $d85ea08aba63d084$export$6c07efeb053daea6 = ({ open: open , children: children  })=>{
    const client = (0, $3663d60eaf20fbf3$export$2e2bcd8739ae039)();
    const [hasEnoughCurrency, setHasEnoughCurrency] = (0, $TBcmg$useState)(true);
    const { data: data , clear: clear , clearTransaction: clearTransaction , validate: validate , remove: remove , add: add , checkout: checkout  } = (0, $95b0bed557a4469f$export$2e2bcd8739ae039)((cart)=>cart);
    const { isValidating: isValidating , totalPrice: totalPrice , items: items , currency: currency , transaction: transaction , feeOnTop: feeOnTop , chain: cartChain  } = data;
    const usdConversion = (0, $b5d8dec284676ed1$export$2e2bcd8739ae039)(open ? "USD" : undefined, currency?.symbol || currency?.name);
    const usdPrice = usdConversion.length > 0 ? usdConversion[0].price : null;
    const { chains: chains  } = (0, $TBcmg$useNetwork)();
    const chain = chains.find((chain)=>chain.id === transaction?.chain.id);
    const blockExplorerBaseUrl = chain?.blockExplorers?.default?.url || "https://etherscan.io";
    const cartCurrencyConverted = items.some((item)=>item.price && item.price?.currency?.contract !== currency?.contract);
    (0, $TBcmg$useEffect)(()=>{
        if (open) validate();
        else if (transaction?.status === (0, $ad5b3085b935ed8c$export$de7bcda3c490bf18).Complete || transaction?.error) clearTransaction();
    }, [
        open
    ]);
    const unavailableItems = (0, $TBcmg$useMemo)(()=>items.filter((item)=>!item.price), [
        items
    ]);
    const priceChangeItems = (0, $TBcmg$useMemo)(()=>items.filter(({ previousPrice: previousPrice , price: price  })=>previousPrice && price?.amount?.decimal !== undefined && previousPrice.amount?.decimal !== price?.amount?.decimal), [
        items
    ]);
    const { address: address  } = (0, $TBcmg$useAccount)();
    const { data: balance  } = (0, $TBcmg$useBalance)({
        chainId: cartChain?.id || client?.currentChain()?.id,
        address: address,
        token: currency?.contract !== (0, $TBcmg$zeroAddress) ? currency?.contract : undefined,
        watch: open,
        formatUnits: currency?.decimals
    });
    (0, $TBcmg$useEffect)(()=>{
        if (balance) {
            const totalPriceTruncated = (0, $6f54b4a5aad888ed$export$a81f732198733497)(totalPrice, currency?.decimals || 18);
            if (!balance.value) setHasEnoughCurrency(false);
            else if (balance.value < (0, $TBcmg$parseUnits)(`${totalPriceTruncated}`, currency?.decimals || 18)) setHasEnoughCurrency(false);
            else setHasEnoughCurrency(true);
        }
    }, [
        totalPrice,
        balance,
        currency
    ]);
    (0, $TBcmg$useEffect)(()=>{
        if (hasEnoughCurrency && transaction?.errorType === (0, $ad5b3085b935ed8c$export$6adf53dcf2d42374).InsufficientBalance) setHasEnoughCurrency(false);
    }, [
        transaction
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, children({
        loading: isValidating,
        items: items,
        unavailableItems: unavailableItems,
        priceChangeItems: priceChangeItems,
        currency: currency,
        cartCurrencyConverted: cartCurrencyConverted,
        totalPrice: totalPrice,
        feeOnTop: feeOnTop,
        usdPrice: usdPrice,
        hasEnoughCurrency: hasEnoughCurrency,
        balance: balance?.value,
        transaction: transaction,
        blockExplorerBaseUrl: blockExplorerBaseUrl,
        cartChain: cartChain,
        checkout: checkout,
        clear: clear,
        remove: remove,
        add: add,
        validate: validate
    }));
};
var $d85ea08aba63d084$export$2e2bcd8739ae039 = $d85ea08aba63d084$export$6c07efeb053daea6;


















const $e6bafed94e2990ae$var$Title = (0, $TBcmg$styled)($TBcmg$Title, {
    margin: 0
});
function $e6bafed94e2990ae$export$603c1193809598d4({ items: items , totalPrice: totalPrice , usdPrice: usdPrice , currency: currency , cartChain: cartChain , blockExplorerBaseUrl: blockExplorerBaseUrl , transaction: transaction , open: open , setCartPopoverOpen: setCartPopoverOpen  }) {
    const [dialogOpen, setDialogOpen] = (0, $TBcmg$useState)(false);
    const providerOptionsContext = (0, $TBcmg$useContext)((0, $f4609ce2cb6b416b$export$f66a1c3c9465af21));
    const images = items.slice(0, 2).map((item)=>{
        const { token: token , collection: collection  } = item;
        const contract = collection.id.split(":")[0];
        return `${cartChain?.baseApiUrl}/redirect/tokens/${contract}:${token.id}/image/v1?imageSize=small`;
    });
    const salesTxHashes = transaction?.currentStep?.items?.reduce((txHashes, item)=>{
        item.salesData?.forEach((saleData)=>{
            if (saleData.txHash) txHashes.add(saleData.txHash);
        });
        return txHashes;
    }, new Set()) || [];
    const totalSales = Array.from(salesTxHashes).length;
    const failedSales = totalSales - (transaction?.currentStep?.items?.length || 0);
    const successfulSales = totalSales - failedSales;
    const pathMap = transaction?.path ? transaction.path.reduce((paths, path)=>{
        if (path.orderId) paths[path.orderId] = path;
        return paths;
    }, {}) : {};
    (0, $TBcmg$useEffect)(()=>{
        if (open !== undefined && open !== dialogOpen) setDialogOpen(open);
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Root2, {
        onOpenChange: (open)=>{
            setDialogOpen(open);
            if (!open) setCartPopoverOpen(false);
        },
        open: dialogOpen
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$AnimatePresence), null, dialogOpen && /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$DialogPortal, {
        forceMount: true
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $2fec296c1c0f429e$export$a14718312a4275d3), {
        style: {
            zIndex: 1002
        }
    }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $2fec296c1c0f429e$export$c8d6a95fc1e37f93), {
        forceMount: true,
        css: {
            zIndex: 1003
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            p: 16,
            backgroundColor: "$headerBackground",
            alignItems: "center",
            justifyContent: "space-between",
            borderTopRightRadius: "$borderRadius",
            borderTopLeftRadius: "$borderRadius"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement($e6bafed94e2990ae$var$Title, {
        css: {
            alignItems: "center",
            display: "flex"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6"
    }, "Complete Checkout")), /*#__PURE__*/ (0, $TBcmg$react).createElement($TBcmg$Close, {
        asChild: true
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
        color: "ghost",
        size: "none",
        css: {
            color: "$neutralText"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faClose),
        width: 16,
        height: 16
    })))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            maxHeight: "85vh",
            overflowY: "auto"
        }
    }, transaction?.status === (0, $ad5b3085b935ed8c$export$de7bcda3c490bf18).Approving && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            p: "$4",
            borderBottom: "1px solid $neutralBorder"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $3252fd4b8efa16bf$export$c48a33806654dd82), {
        itemCount: items.length,
        images: images,
        totalPrice: totalPrice,
        usdPrice: usdPrice,
        currency: currency,
        chain: cartChain
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        css: {
            p: "$4",
            overflowY: "auto"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "center",
        justify: "center",
        css: {
            color: "$neutralBorderHover",
            flex: 1,
            gap: "$5"
        }
    }, transaction?.currentStep == undefined ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            py: "$5"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null)) : null, transaction?.currentStep && transaction?.currentStep?.id === "auth" ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $d6ae44a4b381214a$export$2e2bcd8739ae039), {
        css: {
            mt: 48,
            mb: "$4",
            gap: 20
        }
    }) : null, transaction?.currentStep && transaction?.currentStep?.id !== "auth" ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$react).Fragment, null, transaction?.currentStep?.items && transaction.currentStep?.items.length > 1 ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        css: {
            gap: "$4",
            width: "100%"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6",
        css: {
            textAlign: "center"
        }
    }, "Approve Purchases"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle"
    }, "Due to limitations with Blur, the purchase of these items needs to be split into", " ", transaction?.currentStep?.items.length, " ", "separate transactions."), transaction.currentStep?.items.map((item)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $add635cbf9f5888f$export$d7253bf947e7aaac), {
            item: item,
            pathMap: pathMap,
            usdPrice: usdPrice,
            chain: cartChain,
            open: true
        }))) : /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "center",
        css: {
            gap: "$4",
            py: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6"
    }, "Confirm transaction in your wallet"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            color: "$neutralText"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faWallet),
        style: {
            width: "32px",
            height: "32px",
            margin: "12px 0px"
        }
    })))) : null)), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
        disabled: true,
        css: {
            m: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), "Waiting for Approval...")), transaction?.status === (0, $ad5b3085b935ed8c$export$de7bcda3c490bf18).Finalizing && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column"
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        css: {
            px: "$4",
            py: "$5"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "center",
        justify: "center",
        css: {
            gap: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h6"
    }, "Finalizing on blockchain"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "subtitle2",
        color: "subtle",
        css: {
            textAlign: "center"
        }
    }, "You can close this modal while it finalizes on the blockchain. The transaction will continue in the background."), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faCube),
        style: {
            height: 24,
            width: 24
        }
    }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
        disabled: true,
        css: {
            m: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), null), "Waiting to be Validated...")), transaction?.status === (0, $ad5b3085b935ed8c$export$de7bcda3c490bf18).Complete && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "center",
        css: {
            width: "100%",
            p: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "center",
        css: {
            width: "100%",
            p: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        align: "center",
        css: {
            px: "$4",
            py: "$5",
            gap: 24
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            color: failedSales ? "$errorAccent" : "$successAccent"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: failedSales ? (0, $TBcmg$faCircleExclamation) : (0, $TBcmg$faCheckCircle),
        fontSize: 32
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "h5",
        css: {
            textAlign: "center"
        }
    }, failedSales ? `${successfulSales} ${successfulSales > 1 ? "items" : "item"} purchased, ${failedSales} ${failedSales > 1 ? "items" : "item"} failed` : "Congrats! Purchase was successful."), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        direction: "column",
        css: {
            gap: "$2",
            mb: "$3"
        }
    }, transaction.currentStep?.items?.map((item)=>{
        const txHash = item.txHash ? `${item.txHash.slice(0, 4)}...${item.txHash.slice(-4)}` : "";
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
            href: `${blockExplorerBaseUrl}/tx/${item?.txHash}`,
            color: "primary",
            weight: "medium",
            target: "_blank",
            css: {
                fontSize: 12
            }
        }, "View transaction: ", txHash);
    })))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        css: {
            width: "100%",
            p: "$4"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
        css: {
            width: "100%"
        },
        onClick: ()=>setDialogOpen(false)
    }, "Close")))), !providerOptionsContext.disablePoweredByReservoir && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
        align: "center",
        css: {
            mx: "auto",
            alignItems: "center",
            justifyContent: "center",
            pb: 12,
            gap: "$1",
            visibility: "$poweredByReservoirVisibility",
            borderBottomRightRadius: "$borderRadius",
            borderBottomLeftRadius: "$borderRadius"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
        css: {
            color: "$neutralBorderHover"
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
        icon: (0, $TBcmg$faLock),
        width: 9,
        height: 10
    })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
        style: "tiny",
        color: "subtle",
        css: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            lineHeight: "12px",
            fontWeight: 400,
            color: "$neutralText"
        }
    }, "Powered by", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
        href: "https://reservoir.tools/",
        target: "_blank",
        weight: "heavy",
        color: "gray",
        css: {
            height: 12,
            fontSize: 12,
            "&:hover": {
                color: "$neutralSolid",
                fill: "$neutralSolid"
            }
        }
    }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $32d03e1adcee2721$export$e6ff31bff12b7ff4), null))))))));
}



const $6649489e0491bc82$var$scaleUp = (0, $4a58f4053e821189$export$d25ddfdf17c3ad3e)({
    "0%": {
        opacity: 0,
        transform: "scale(0.9) translateY(-10px)"
    },
    "100%": {
        opacity: 1,
        transform: "scale(1) translateY(0)"
    }
});
const $6649489e0491bc82$var$scaleDown = (0, $4a58f4053e821189$export$d25ddfdf17c3ad3e)({
    "0%": {
        opacity: 1,
        transform: "scale(1) translateY(0)"
    },
    "100%": {
        opacity: 0,
        transform: "scale(0.9) translateY(-10px)"
    }
});
const $6649489e0491bc82$var$CONTENT_OFFSET = 8;
function $6649489e0491bc82$export$15123b0cb184ed6e({ trigger: trigger , side: side , openState: openState , tokenUrl: tokenUrl , onConnectWallet: onConnectWallet  }) {
    const [popoverTrigger, setPopoverTrigger] = (0, $TBcmg$useState)(null);
    const [open, setOpen] = (0, $b69d00be56c1bdb6$export$2e2bcd8739ae039)(openState ? openState[0] : false, openState);
    const providerOptionsContext = (0, $TBcmg$useContext)((0, $f4609ce2cb6b416b$export$f66a1c3c9465af21));
    const [displayPendingTransaction, setDisplayPendingTransaction] = (0, $TBcmg$useState)(false);
    const [purchaseComplete, setPurchaseComplete] = (0, $TBcmg$useState)(false);
    const { isConnected: isConnected  } = (0, $TBcmg$useAccount)();
    (0, $TBcmg$useEffect)(()=>{
        if (!open) {
            setDisplayPendingTransaction(false);
            setPurchaseComplete(false);
        }
    }, [
        open
    ]);
    const triggerBottom = (0, $TBcmg$useMemo)(()=>(popoverTrigger?.offsetTop || 0) + (popoverTrigger?.offsetHeight || 0) + $6649489e0491bc82$var$CONTENT_OFFSET, [
        trigger
    ]);
    return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $d85ea08aba63d084$export$2e2bcd8739ae039), {
        open: open
    }, ({ loading: loading , items: items , unavailableItems: unavailableItems , priceChangeItems: priceChangeItems , totalPrice: totalPrice , feeOnTop: feeOnTop , usdPrice: usdPrice , hasEnoughCurrency: hasEnoughCurrency , balance: balance , currency: currency , cartCurrencyConverted: cartCurrencyConverted , transaction: transaction , blockExplorerBaseUrl: blockExplorerBaseUrl , cartChain: cartChain , remove: remove , clear: clear , checkout: checkout  })=>{
        (0, $TBcmg$useEffect)(()=>{
            if (transaction?.status === (0, $ad5b3085b935ed8c$export$de7bcda3c490bf18).Complete) {
                setDisplayPendingTransaction(false);
                setPurchaseComplete(true);
            }
        }, [
            transaction?.status
        ]);
        const unavailableItemsSubject = unavailableItems.length > 1 ? "items" : "item";
        const priceChangeItemsSubject = priceChangeItems.length > 1 ? "items prices" : "item price";
        const isCartEmpty = items.length === 0;
        const hasValidItems = items.length > unavailableItems.length;
        return /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c42dc96a91e1fd$export$2e2bcd8739ae039).Root, {
            modal: true,
            open: open,
            onOpenChange: setOpen
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c42dc96a91e1fd$export$2e2bcd8739ae039).Trigger, {
            asChild: true,
            ref: setPopoverTrigger
        }, trigger), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $b3c42dc96a91e1fd$export$2e2bcd8739ae039).Content, {
            side: side,
            sideOffset: $6649489e0491bc82$var$CONTENT_OFFSET,
            css: {
                display: "flex",
                flexDirection: "column",
                zIndex: 1001,
                transformOrigin: "var(--radix-popover-content-transform-origin)",
                animation: `${open ? $6649489e0491bc82$var$scaleUp : $6649489e0491bc82$var$scaleDown} 0.2s ease-in-out`,
                overflowY: "auto",
                borderRadius: "$borderRadius",
                $$shadowColor: "$colors$gray7",
                boxShadow: "box-shadow: 0px 2px 16px $$shadowColor",
                border: "1px solid $borderColor",
                p: 24,
                minHeight: 500,
                width: 395,
                maxHeight: `calc(100vh - ${triggerBottom || 0}px - (25px * 2) - 10px)`,
                backgroundColor: "$contentBackground",
                boxSizing: "border-box",
                "@media(max-width: 520px)": {
                    height: `calc(100vh - ${triggerBottom || 0}px - (25px * 2))`,
                    width: "100vw",
                    minHeight: "100%"
                }
            }
        }, loading && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bbced143042e1aed$export$2e2bcd8739ae039), {
            css: {
                backgroundColor: "$contentBackground",
                position: "absolute",
                inset: 0,
                opacity: 0.6,
                zIndex: 10000
            }
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            css: {
                mb: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6"
        }, "Cartyyyyyyy"), !isCartEmpty && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            justify: "center",
            css: {
                background: "$accentBgActive",
                height: 20,
                width: 20,
                borderRadius: "99999px",
                ml: "$2"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2"
        }, items.length)), !isCartEmpty && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2",
            color: "accent",
            css: {
                cursor: "pointer",
                ml: 24,
                "&:hover": {
                    color: "$accentSolidHover"
                }
            },
            onClick: clear
        }, "Clear All"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            size: "none",
            color: "ghost",
            css: {
                color: "$neutralSolid",
                ml: "auto"
            },
            onClick: ()=>{
                setOpen(false);
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faClose),
            width: "16",
            height: "16"
        }))), cartCurrencyConverted && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $24b598a037d3635f$export$2e2bcd8739ae039), {
            kind: "warning",
            message: `Mixed currency items are only available to be checked out with ${currency?.symbol}`
        }), unavailableItems.length > 0 && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $24b598a037d3635f$export$2e2bcd8739ae039), {
            kind: "error",
            message: `${unavailableItems.length} ${unavailableItemsSubject} no longer available`,
            link: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
                color: "accent",
                style: "subtitle2",
                css: {
                    ml: "auto",
                    mt: 3,
                    cursor: "pointer"
                },
                onClick: (e)=>{
                    e.preventDefault();
                    remove(unavailableItems.map((item)=>`${item.collection.id}:${item.token.id}`));
                }
            }, "Remove ", unavailableItemsSubject)
        }), priceChangeItems.length > 0 && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $24b598a037d3635f$export$2e2bcd8739ae039), {
            kind: "warning",
            message: `${priceChangeItems.length} ${priceChangeItemsSubject} updated`
        }), transaction?.error && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $24b598a037d3635f$export$2e2bcd8739ae039), {
            kind: "error",
            message: transaction.errorType === (0, $ad5b3085b935ed8c$export$6adf53dcf2d42374).UserDenied ? "User denied transaction signature." : transaction.error.message
        }), purchaseComplete && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $24b598a037d3635f$export$2e2bcd8739ae039), {
            message: `Transaction Complete`,
            link: /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
                href: `${blockExplorerBaseUrl}/tx/${transaction?.txHash}`,
                target: "_blank",
                css: {
                    ml: "auto",
                    fontSize: 12,
                    mt: 2
                },
                weight: "medium",
                color: "primary"
            }, "Etherscan")
        }), !isCartEmpty && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                gap: "$4",
                mb: "$4",
                overflowY: "auto",
                mx: -24
            }
        }, items.map((item)=>/*#__PURE__*/ (0, $TBcmg$react).createElement((0, $d35781847bc1a968$export$2e2bcd8739ae039), {
                key: `${item.collection.id}:${item.token.id}`,
                item: item,
                usdConversion: usdPrice,
                tokenUrl: tokenUrl
            }))), isCartEmpty && !(displayPendingTransaction && transaction?.status === (0, $ad5b3085b935ed8c$export$de7bcda3c490bf18).Finalizing) && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            align: "center",
            justify: "center",
            css: {
                color: "$neutralBorderHover",
                flex: 1,
                gap: "$5"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faShoppingCart),
            width: "30",
            height: "30",
            style: {
                height: 30
            }
        }), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body2",
            color: "subtle"
        }, "No items in your cart - TESTINGGG")), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            css: {
                mt: "auto",
                pb: 10
            }
        }, !isCartEmpty && feeOnTop ? /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                mb: "$4"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "subtitle2"
        }, "Referrer Fee"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            justify: "center",
            css: {
                ml: "auto",
                gap: "$1",
                "> div": {
                    ml: "auto"
                }
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            textStyle: "subtitle2",
            amount: feeOnTop,
            address: currency?.contract,
            decimals: currency?.decimals,
            symbol: currency?.symbol,
            logoWidth: 12,
            chainId: cartChain?.id
        }), usdPrice && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
            amount: usdPrice * feeOnTop,
            style: "subtitle2",
            color: "subtle",
            css: {
                textAlign: "end"
            }
        }))) : null, !isCartEmpty && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            css: {
                mb: 28
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "h6"
        }, "Total"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            direction: "column",
            justify: "center",
            css: {
                ml: "auto",
                gap: "$1",
                "> div": {
                    ml: "auto"
                }
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            textStyle: "h6",
            amount: totalPrice,
            address: currency?.contract,
            decimals: currency?.decimals,
            symbol: currency?.symbol,
            logoWidth: 18,
            chainId: cartChain?.id
        }), usdPrice && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $fafed10a0d83e98f$export$2e2bcd8739ae039), {
            amount: usdPrice * totalPrice,
            style: "subtitle2",
            color: "subtle",
            css: {
                textAlign: "end"
            }
        }))), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6bafed94e2990ae$export$603c1193809598d4), {
            open: (transaction?.status == (0, $ad5b3085b935ed8c$export$de7bcda3c490bf18).Approving || transaction?.status == (0, $ad5b3085b935ed8c$export$de7bcda3c490bf18).Finalizing || transaction?.status == (0, $ad5b3085b935ed8c$export$de7bcda3c490bf18).Complete) && !transaction?.error,
            items: items,
            currency: currency,
            totalPrice: totalPrice,
            usdPrice: usdPrice || 0,
            transaction: transaction,
            cartChain: cartChain,
            blockExplorerBaseUrl: blockExplorerBaseUrl,
            setCartPopoverOpen: setOpen
        }), !hasEnoughCurrency && isConnected && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            justify: "center",
            css: {
                mb: "$2",
                gap: "$2"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "body3",
            color: "error"
        }, "Insufficient balance"), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $bedde9b021cf9a1c$export$2e2bcd8739ae039), {
            textStyle: "body3",
            amount: balance,
            address: currency?.contract,
            decimals: currency?.decimals,
            symbol: currency?.symbol,
            logoWidth: 10
        })), isCartEmpty && !displayPendingTransaction && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: true
        }, "Select Items to Buy...."), !isCartEmpty && hasValidItems && (transaction?.status === (0, $ad5b3085b935ed8c$export$de7bcda3c490bf18).Idle || !displayPendingTransaction) && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            disabled: !hasEnoughCurrency && isConnected,
            onClick: async ()=>{
                if (!isConnected) onConnectWallet?.();
                else checkout().then(()=>{
                    setDisplayPendingTransaction(true);
                }).catch((e)=>{
                    console.error(e);
                    setDisplayPendingTransaction(false);
                });
            }
        }, hasEnoughCurrency || !isConnected ? "Purchase" : "Add Funds to Purchase"), !isCartEmpty && !hasValidItems && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $e6a4e3d86984e475$export$2e2bcd8739ae039), {
            color: "secondary",
            onClick: ()=>{
                clear();
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faRefresh),
            width: "16",
            height: "16"
        }), "Refresh Cart"), !providerOptionsContext.disablePoweredByReservoir && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $602940fa56061b3b$export$2e2bcd8739ae039), {
            align: "center",
            css: {
                mx: "auto",
                alignItems: "center",
                justifyContent: "center",
                mt: 26,
                gap: "$1",
                visibility: "$poweredByReservoirVisibility"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                color: "$neutralBorderHover"
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $TBcmg$FontAwesomeIcon), {
            icon: (0, $TBcmg$faLock),
            width: 9,
            height: 10
        })), /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $38b6348718e47dcf$export$2e2bcd8739ae039), {
            style: "tiny",
            color: "subtle",
            css: {
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                lineHeight: "14px",
                fontWeight: 400,
                color: "$neutralText"
            }
        }, "Powered by", " ", /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $a663831c1deeb453$export$2e2bcd8739ae039), {
            href: "https://reservoir.tools/",
            target: "_blank",
            weight: "heavy",
            color: "gray",
            css: {
                height: 12,
                fontSize: 12,
                "&:hover": {
                    color: "$neutralSolid",
                    fill: "$neutralSolid"
                }
            }
        }, /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $32d03e1adcee2721$export$e6ff31bff12b7ff4), null)))))), open && /*#__PURE__*/ (0, $TBcmg$react).createElement((0, $0af15c1ef5e8ac4a$export$2e2bcd8739ae039), {
            css: {
                backgroundColor: "$overlayBackground",
                position: "fixed",
                inset: 0,
                zIndex: 1000
            }
        }));
    });
}
$6649489e0491bc82$export$15123b0cb184ed6e.Custom = (0, $d85ea08aba63d084$export$2e2bcd8739ae039);
var $6649489e0491bc82$export$2e2bcd8739ae039 = $6649489e0491bc82$export$15123b0cb184ed6e;





export {$f4609ce2cb6b416b$export$14ec072536e53e19 as ReservoirKitProvider, $2deec6552e3d4fa0$export$9d733ffc7f61c45c as ReservoirClientProvider, $afd6276a623787c2$export$2e2bcd8739ae039 as useCollections, $3ec5bd98aa11a4af$export$2e2bcd8739ae039 as useCollectionActivity, $df89d2f0bf3a2e94$export$2e2bcd8739ae039 as useUsersActivity, $3663d60eaf20fbf3$export$2e2bcd8739ae039 as useReservoirClient, $074b4666df4341a7$export$2e2bcd8739ae039 as useTokens, $1161fbe6cb10f8e1$export$2e2bcd8739ae039 as useSearchActivities, $a6a22af2ea7cc64d$export$2e2bcd8739ae039 as useTokenActivity, $b5d8dec284676ed1$export$2e2bcd8739ae039 as useCoinConversion, $b9d7d4ec194b807a$export$2e2bcd8739ae039 as useListings, $6b5464cef6d36d49$export$2e2bcd8739ae039 as useOwnerListings, $7c7b75a236ce465b$export$2e2bcd8739ae039 as useAttributes, $e5a3042549429464$export$2e2bcd8739ae039 as useBids, $adb61885b37a317b$export$2e2bcd8739ae039 as useUserTokens, $9e5d58301bd315fe$export$2e2bcd8739ae039 as useUserTopBids, $f03c3cbef8c597c8$export$2e2bcd8739ae039 as useUserCollections, $95b0bed557a4469f$export$2e2bcd8739ae039 as useCart, $7eca4ecf85dae226$export$2e2bcd8739ae039 as useDynamicTokens, $e235ec7f4c2cf2ae$export$2e2bcd8739ae039 as lightTheme, $1fa63d73b4d6b2f8$export$2e2bcd8739ae039 as darkTheme, $8befffb57023ead8$export$7055e49b90860ae6 as BuyModal, $1cf2d84a10342ca7$export$b41ddf00b39567e8 as BuyStep, $5bc22b51ac8fa039$export$d23efc006864db2f as ListModal, $0dfcd962a810a554$export$7f4afd65e1e67072 as ListStep, $587a01049d5141ff$export$556cfc4a654987bd as BidModal, $2b3bdb31da73e768$export$7a92ddb9e11f37f7 as BidStep, $d8c34b3c598b5433$export$91ee3fa7c9f4e6c2 as AcceptBidModal, $be959054ceb8cef7$export$f4dd52ca63b5fdde as AcceptBidStep, $140a00430df0958e$export$89d1e00b7fa831db as CancelBidModal, $03948d0d1ea50134$export$c5c5c857eaef0fde as CancelBidStep, $8a7188f82a67e5bb$export$5ccdc2f8532db25b as CancelListingModal, $6e7449d8ef933807$export$c5c5c857eaef0fde as CancelListingStep, $cc999d237a46714e$export$799450c9ce92504c as EditBidModal, $c3a477f35c10f10a$export$1662ceb9c43bf6c3 as EditBidStep, $e8302fb60e57543b$export$7856870a29100de3 as EditListingModal, $15b40f9f8236e7c4$export$3a845fe90ed2a8d8 as EditListingStep, $ecf99860a3fcdd2e$export$2536c4e1bdf96841 as SweepModal, $f99c3f30def4cffc$export$de6922b83abf2eed as SweepStep, $b11e5b18b62632d1$export$2e2bcd8739ae039 as TokenMedia, $b11e5b18b62632d1$export$b7d45a46da28b4d3 as extractMediaType, $6649489e0491bc82$export$2e2bcd8739ae039 as CartPopover, $ad5b3085b935ed8c$export$9081b9c87ee4e12e as CartProvider};
//# sourceMappingURL=index.module.js.map
