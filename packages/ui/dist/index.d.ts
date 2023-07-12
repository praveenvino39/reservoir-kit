import React, { FC, ReactNode, ComponentPropsWithoutRef, Dispatch, ReactElement, SetStateAction, CSSProperties, VideoHTMLAttributes, AudioHTMLAttributes, IframeHTMLAttributes, ComponentPropsWithRef } from "react";
import { ReservoirClientOptions, paths, Execute, ReservoirChain, ReservoirClientActions, SellPath } from "@reservoir0x/reservoir-sdk";
import { SWRConfig, SWRConfiguration } from "swr";
import { SWRInfiniteConfiguration } from "swr/infinite";
import * as Popover from "@radix-ui/react-popover";
import * as DialogPrimitive from "@radix-ui/react-dialog";
export interface ReservoirKitTheme {
    radii: {
        borderRadius: string;
    };
    fonts: {
        body: string;
        button: string;
        headline: string;
    };
    colors: ReservoirKitThemeColors;
    assets: {
        ethIcon: 'glyph' | 'gray' | 'purple';
    };
}
interface ReservoirKitThemeColors {
    accentBase: string;
    accentBgSubtle: string;
    accentBg: string;
    accentBgHover: string;
    accentBgActive: string;
    accentLine: string;
    accentBorder: string;
    accentBorderHover: string;
    accentSolid: string;
    accentSolidHover: string;
    accentText: string;
    accentTextContrast: string;
    neutralBase: string;
    neutralBgSubtle: string;
    neutralBg: string;
    neutralBgHover: string;
    neutralBgActive: string;
    neutralLine: string;
    neutralBorder: string;
    neutralBorderHover: string;
    neutralSolid: string;
    neutralSolidHover: string;
    neutralText: string;
    neutralTextContrast: string;
    secondaryBase: string;
    secondaryBgSubtle: string;
    secondaryBg: string;
    secondaryBgHover: string;
    secondaryBgActive: string;
    secondaryLine: string;
    secondaryBorder: string;
    secondaryBorderHover: string;
    secondarySolid: string;
    secondarySolidHover: string;
    secondaryText: string;
    secondaryTextContrast: string;
    borderColor: string;
    textColor: string;
    focusColor: string;
    errorText: string;
    errorAccent: string;
    successAccent: string;
    reservoirLogoColor: string;
    inputBackground: string;
    buttonTextColor: string;
    buttonTextHoverColor: string;
    overlayBackground: string;
    headerBackground: string;
    footerBackground: string;
    contentBackground: string;
    wellBackground: string;
    popoverBackground: string;
}
type ReservoirKitOverrides = {
    borderRadius?: string;
    font?: string;
    buttonFont?: string;
    buttonTextColor?: string;
    buttonTextHoverColor?: string;
    headlineFont?: string;
    primaryColor?: string;
    primaryHoverColor?: string;
    wellBackground?: string;
    textColor?: string;
    headerBackground?: string;
    contentBackground?: string;
    footerBackground?: string;
    overlayBackground?: string;
    popoverBackground?: string;
    borderColor?: string;
    ethIcon?: ReservoirKitTheme['assets']['ethIcon'];
};
export function lightTheme(overrides?: ReservoirKitOverrides): ReservoirKitTheme;
export function darkTheme(overrides?: ReservoirKitOverrides): ReservoirKitTheme;
interface ReservoirClientProviderProps {
    children: ReactNode;
    options: ReservoirClientOptions;
}
export const ReservoirClientProvider: FC<ReservoirClientProviderProps>;
type CoinId = {
    [key: string]: string;
};
type CoinGecko = {
    proxy?: string;
    apiKey?: string;
    coinIds?: CoinId;
};
type ReservoirKitProviderOptions = {
    disablePoweredByReservoir?: boolean;
    coinGecko?: CoinGecko;
};
interface ReservoirKitProviderProps {
    children: ReactNode;
    options?: ReservoirClientOptions & ReservoirKitProviderOptions;
    theme?: ReservoirKitTheme;
    swrOptions?: ComponentPropsWithoutRef<typeof SWRConfig>['value'];
}
export const ReservoirKitProvider: FC<ReservoirKitProviderProps>;
type CollectionsQuery = paths['/collections/v5']['get']['parameters']['query'];
export function useCollections(options?: CollectionsQuery | false, swrOptions?: SWRInfiniteConfiguration, chainId?: number): {
    data: {
        id?: string | undefined;
        slug?: string | undefined;
        createdAt?: string | undefined;
        name?: string | undefined;
        image?: string | undefined;
        banner?: string | undefined;
        discordUrl?: string | undefined;
        externalUrl?: string | undefined;
        twitterUsername?: string | undefined;
        openseaVerificationStatus?: string | undefined;
        description?: string | undefined;
        sampleImages?: string[] | undefined;
        tokenCount?: string | undefined;
        onSaleCount?: string | undefined;
        primaryContract?: string | undefined;
        tokenSetId?: string | undefined;
        royalties?: {
            recipient?: string | undefined;
            breakdown?: {
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            bps?: number | undefined;
        } | undefined;
        allRoyalties?: {
            [key: string]: unknown;
        } | undefined;
        lastBuy?: {
            value?: number | undefined;
            timestamp?: number | undefined;
        } | undefined;
        floorAsk?: {
            id?: string | undefined;
            sourceDomain?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            maker?: string | undefined;
            validFrom?: number | undefined;
            validUntil?: number | undefined;
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
            } | undefined;
        } | undefined;
        topBid?: {
            id?: string | undefined;
            sourceDomain?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            maker?: string | undefined;
            validFrom?: number | undefined;
            validUntil?: number | undefined;
        } | undefined;
        rank?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
            allTime?: number | undefined;
        } | undefined;
        volume?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
            allTime?: number | undefined;
        } | undefined;
        volumeChange?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
        } | undefined;
        floorSale?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
        } | undefined;
        floorSaleChange?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
        } | undefined;
        salesCount?: {
            "1day"?: number | undefined;
            "7day"?: number | undefined;
            "30day"?: number | undefined;
            allTime?: number | undefined;
        } | undefined;
        collectionBidSupported?: boolean | undefined;
        ownerCount?: number | undefined;
        attributes?: {
            key?: string | undefined;
            kind?: string | undefined;
            count?: number | undefined;
        }[] | undefined;
        contractKind?: string | undefined;
        mintedTimestamp?: number | undefined;
        mintStages?: {
            stage: string;
            tokenId?: string | undefined;
            kind: string;
            price: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            };
            startTime?: number | undefined;
            endTime?: number | undefined;
            maxMintsPerWallet?: number | undefined;
        }[] | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        continuation?: string | undefined;
        collections?: {
            id?: string | undefined;
            slug?: string | undefined;
            createdAt?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            banner?: string | undefined;
            discordUrl?: string | undefined;
            externalUrl?: string | undefined;
            twitterUsername?: string | undefined;
            openseaVerificationStatus?: string | undefined;
            description?: string | undefined;
            sampleImages?: string[] | undefined;
            tokenCount?: string | undefined;
            onSaleCount?: string | undefined;
            primaryContract?: string | undefined;
            tokenSetId?: string | undefined;
            royalties?: {
                recipient?: string | undefined;
                breakdown?: {
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                bps?: number | undefined;
            } | undefined;
            allRoyalties?: {
                [key: string]: unknown;
            } | undefined;
            lastBuy?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            floorAsk?: {
                id?: string | undefined;
                sourceDomain?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                token?: {
                    contract?: string | undefined;
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
            topBid?: {
                id?: string | undefined;
                sourceDomain?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
            } | undefined;
            rank?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volume?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volumeChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSale?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSaleChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            salesCount?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            collectionBidSupported?: boolean | undefined;
            ownerCount?: number | undefined;
            attributes?: {
                key?: string | undefined;
                kind?: string | undefined;
                count?: number | undefined;
            }[] | undefined;
            contractKind?: string | undefined;
            mintedTimestamp?: number | undefined;
            mintStages?: {
                stage: string;
                tokenId?: string | undefined;
                kind: string;
                price: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                };
                startTime?: number | undefined;
                endTime?: number | undefined;
                maxMintsPerWallet?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        continuation?: string | undefined;
        collections?: {
            id?: string | undefined;
            slug?: string | undefined;
            createdAt?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            banner?: string | undefined;
            discordUrl?: string | undefined;
            externalUrl?: string | undefined;
            twitterUsername?: string | undefined;
            openseaVerificationStatus?: string | undefined;
            description?: string | undefined;
            sampleImages?: string[] | undefined;
            tokenCount?: string | undefined;
            onSaleCount?: string | undefined;
            primaryContract?: string | undefined;
            tokenSetId?: string | undefined;
            royalties?: {
                recipient?: string | undefined;
                breakdown?: {
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                bps?: number | undefined;
            } | undefined;
            allRoyalties?: {
                [key: string]: unknown;
            } | undefined;
            lastBuy?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            floorAsk?: {
                id?: string | undefined;
                sourceDomain?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                token?: {
                    contract?: string | undefined;
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
            topBid?: {
                id?: string | undefined;
                sourceDomain?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
            } | undefined;
            rank?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volume?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volumeChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSale?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSaleChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            salesCount?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            collectionBidSupported?: boolean | undefined;
            ownerCount?: number | undefined;
            attributes?: {
                key?: string | undefined;
                kind?: string | undefined;
                count?: number | undefined;
            }[] | undefined;
            contractKind?: string | undefined;
            mintedTimestamp?: number | undefined;
            mintStages?: {
                stage: string;
                tokenId?: string | undefined;
                kind: string;
                price: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                };
                startTime?: number | undefined;
                endTime?: number | undefined;
                maxMintsPerWallet?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
type CollectionActivityQuery = paths['/collections/activity/v6']['get']['parameters']['query'];
export function useCollectionActivity(options?: CollectionActivityQuery | false, swrOptions?: SWRInfiniteConfiguration, chainId?: number): {
    data: {
        type?: string | undefined;
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        price?: {
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            amount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
            netAmount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
        } | undefined;
        amount?: number | undefined;
        timestamp?: number | undefined;
        createdAt?: string | undefined;
        contract?: string | undefined;
        token?: {
            tokenId?: string | undefined;
            tokenName?: string | undefined;
            tokenImage?: string | undefined;
        } | undefined;
        collection?: {
            collectionId?: string | undefined;
            collectionName?: string | undefined;
            collectionImage?: string | undefined;
        } | undefined;
        txHash?: string | undefined;
        logIndex?: number | undefined;
        batchIndex?: number | undefined;
        order?: {
            id?: string | undefined;
            side?: "ask" | "bid" | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            createdAt?: string | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            createdAt?: string | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
type UsersActivityBaseQuery = paths['/users/activity/v6']['get']['parameters']['query'];
type UsersQuery = UsersActivityBaseQuery['users'] | undefined;
type UsersActivityQuery = Omit<UsersActivityBaseQuery, 'users'>;
export function useUsersActivity(users?: UsersQuery, options?: UsersActivityQuery | false, swrOptions?: SWRInfiniteConfiguration, chainId?: number): {
    data: {
        type?: string | undefined;
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        price?: {
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            amount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
            netAmount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
        } | undefined;
        amount?: number | undefined;
        timestamp?: number | undefined;
        contract?: string | undefined;
        token?: {
            tokenId?: string | undefined;
            tokenName?: string | undefined;
            tokenImage?: string | undefined;
            lastBuy?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            lastSell?: {
                value?: number | undefined;
                timestamp?: number | undefined;
            } | undefined;
            tokenRarityScore?: number | undefined;
            tokenRarityRank?: number | undefined;
            tokenMedia?: string | undefined;
        } | undefined;
        collection?: {
            collectionId?: string | undefined;
            collectionName?: string | undefined;
            collectionImage?: string | undefined;
        } | undefined;
        txHash?: string | undefined;
        logIndex?: number | undefined;
        batchIndex?: number | undefined;
        order?: {
            id?: string | undefined;
            side?: "ask" | "bid" | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        createdAt?: string | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                lastSell?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                tokenRarityScore?: number | undefined;
                tokenRarityRank?: number | undefined;
                tokenMedia?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            createdAt?: string | undefined;
        }[] | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                lastSell?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                tokenRarityScore?: number | undefined;
                tokenRarityRank?: number | undefined;
                tokenMedia?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            createdAt?: string | undefined;
        }[] | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
type TokensQuery = paths['/tokens/v6']['get']['parameters']['query'];
export function useTokens(options?: TokensQuery | false, swrOptions?: SWRInfiniteConfiguration, chainId?: number): {
    data: {
        token?: {
            contract: string;
            tokenId: string;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            imageSmall?: string | undefined;
            imageLarge?: string | undefined;
            metadata?: {
                [key: string]: unknown;
            } | undefined;
            media?: string | undefined;
            kind?: string | undefined;
            isFlagged?: boolean | undefined;
            lastFlagUpdate?: string | undefined;
            lastFlagChange?: string | undefined;
            supply?: number | undefined;
            remainingSupply?: number | undefined;
            rarity?: number | undefined;
            rarityRank?: number | undefined;
            collection?: {
                id?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                slug?: string | undefined;
            } | undefined;
            lastSale?: {
                id?: string | undefined;
                saleId?: string | undefined;
                token?: {
                    contract?: string | undefined;
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
                orderSource?: string | undefined;
                orderSide?: "ask" | "bid" | undefined;
                orderKind?: string | undefined;
                orderId?: string | undefined;
                from?: string | undefined;
                to?: string | undefined;
                amount?: string | undefined;
                fillSource?: string | undefined;
                block?: number | undefined;
                txHash?: string | undefined;
                logIndex?: number | undefined;
                batchIndex?: number | undefined;
                timestamp?: number | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                washTradingScore?: number | undefined;
                royaltyFeeBps?: number | undefined;
                marketplaceFeeBps?: number | undefined;
                paidFullRoyalty?: boolean | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    bps?: number | undefined;
                    recipient?: string | undefined;
                }[] | undefined;
                isDeleted?: boolean | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            owner?: string | undefined;
            attributes?: {
                key?: string | undefined;
                kind?: string | undefined;
                value: string;
                tokenCount?: number | undefined;
                onSaleCount?: number | undefined;
                floorAskPrice?: number | undefined;
                topBidValue?: number | undefined;
                createdAt?: string | undefined;
            }[] | undefined;
        } | undefined;
        market?: {
            floorAsk?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                dynamicPricing?: {
                    kind?: "dutch" | "pool" | undefined;
                    data?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
            } | undefined;
            topBid?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        tokens?: {
            token?: {
                contract: string;
                tokenId: string;
                name?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                imageSmall?: string | undefined;
                imageLarge?: string | undefined;
                metadata?: {
                    [key: string]: unknown;
                } | undefined;
                media?: string | undefined;
                kind?: string | undefined;
                isFlagged?: boolean | undefined;
                lastFlagUpdate?: string | undefined;
                lastFlagChange?: string | undefined;
                supply?: number | undefined;
                remainingSupply?: number | undefined;
                rarity?: number | undefined;
                rarityRank?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                    slug?: string | undefined;
                } | undefined;
                lastSale?: {
                    id?: string | undefined;
                    saleId?: string | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                        } | undefined;
                    } | undefined;
                    orderSource?: string | undefined;
                    orderSide?: "ask" | "bid" | undefined;
                    orderKind?: string | undefined;
                    orderId?: string | undefined;
                    from?: string | undefined;
                    to?: string | undefined;
                    amount?: string | undefined;
                    fillSource?: string | undefined;
                    block?: number | undefined;
                    txHash?: string | undefined;
                    logIndex?: number | undefined;
                    batchIndex?: number | undefined;
                    timestamp?: number | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    washTradingScore?: number | undefined;
                    royaltyFeeBps?: number | undefined;
                    marketplaceFeeBps?: number | undefined;
                    paidFullRoyalty?: boolean | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        bps?: number | undefined;
                        recipient?: string | undefined;
                    }[] | undefined;
                    isDeleted?: boolean | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                owner?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    value: string;
                    tokenCount?: number | undefined;
                    onSaleCount?: number | undefined;
                    floorAskPrice?: number | undefined;
                    topBidValue?: number | undefined;
                    createdAt?: string | undefined;
                }[] | undefined;
            } | undefined;
            market?: {
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    quantityFilled?: number | undefined;
                    quantityRemaining?: number | undefined;
                    dynamicPricing?: {
                        kind?: "dutch" | "pool" | undefined;
                        data?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        tokens?: {
            token?: {
                contract: string;
                tokenId: string;
                name?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                imageSmall?: string | undefined;
                imageLarge?: string | undefined;
                metadata?: {
                    [key: string]: unknown;
                } | undefined;
                media?: string | undefined;
                kind?: string | undefined;
                isFlagged?: boolean | undefined;
                lastFlagUpdate?: string | undefined;
                lastFlagChange?: string | undefined;
                supply?: number | undefined;
                remainingSupply?: number | undefined;
                rarity?: number | undefined;
                rarityRank?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                    slug?: string | undefined;
                } | undefined;
                lastSale?: {
                    id?: string | undefined;
                    saleId?: string | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                        } | undefined;
                    } | undefined;
                    orderSource?: string | undefined;
                    orderSide?: "ask" | "bid" | undefined;
                    orderKind?: string | undefined;
                    orderId?: string | undefined;
                    from?: string | undefined;
                    to?: string | undefined;
                    amount?: string | undefined;
                    fillSource?: string | undefined;
                    block?: number | undefined;
                    txHash?: string | undefined;
                    logIndex?: number | undefined;
                    batchIndex?: number | undefined;
                    timestamp?: number | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    washTradingScore?: number | undefined;
                    royaltyFeeBps?: number | undefined;
                    marketplaceFeeBps?: number | undefined;
                    paidFullRoyalty?: boolean | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        bps?: number | undefined;
                        recipient?: string | undefined;
                    }[] | undefined;
                    isDeleted?: boolean | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                owner?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    value: string;
                    tokenCount?: number | undefined;
                    onSaleCount?: number | undefined;
                    floorAskPrice?: number | undefined;
                    topBidValue?: number | undefined;
                    createdAt?: string | undefined;
                }[] | undefined;
            } | undefined;
            market?: {
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    quantityFilled?: number | undefined;
                    quantityRemaining?: number | undefined;
                    dynamicPricing?: {
                        kind?: "dutch" | "pool" | undefined;
                        data?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
type TokenActivityQuery = paths['/tokens/{token}/activity/v5']['get']['parameters']['query'];
export function useTokenActivity(token: string, options?: TokenActivityQuery | false, swrOptions?: SWRInfiniteConfiguration, chainId?: number): {
    data: {
        type?: string | undefined;
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        price?: {
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            amount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
            netAmount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
        } | undefined;
        amount?: number | undefined;
        timestamp?: number | undefined;
        createdAt?: string | undefined;
        contract?: string | undefined;
        token?: {
            tokenId?: string | undefined;
            tokenName?: string | undefined;
            tokenImage?: string | undefined;
        } | undefined;
        collection?: {
            collectionId?: string | undefined;
            collectionName?: string | undefined;
            collectionImage?: string | undefined;
        } | undefined;
        txHash?: string | undefined;
        logIndex?: number | undefined;
        batchIndex?: number | undefined;
        order?: {
            id?: string | undefined;
            side?: "ask" | "bid" | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            createdAt?: string | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            createdAt?: string | undefined;
            contract?: string | undefined;
            token?: {
                tokenId?: string | undefined;
                tokenName?: string | undefined;
                tokenImage?: string | undefined;
            } | undefined;
            collection?: {
                collectionId?: string | undefined;
                collectionName?: string | undefined;
                collectionImage?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
type SearchActivitiesQuery = paths['/search/activities/v1']['get']['parameters']['query'];
export function useSearchActivities(options?: SearchActivitiesQuery | false, swrOptions?: SWRInfiniteConfiguration, chaindId?: number): {
    data: {
        type?: string | undefined;
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        price?: {
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            amount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
            netAmount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
        } | undefined;
        amount?: number | undefined;
        timestamp?: number | undefined;
        createdAt?: string | undefined;
        contract?: string | undefined;
        token?: {
            id?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            media?: string | undefined;
        } | undefined;
        collection?: {
            id?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
        } | undefined;
        txHash?: string | undefined;
        logIndex?: number | undefined;
        batchIndex?: number | undefined;
        order?: {
            id?: string | undefined;
            side?: "ask" | "bid" | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            createdAt?: string | undefined;
            contract?: string | undefined;
            token?: {
                id?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                media?: string | undefined;
            } | undefined;
            collection?: {
                id?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        continuation?: string | undefined;
        activities?: {
            type?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            amount?: number | undefined;
            timestamp?: number | undefined;
            createdAt?: string | undefined;
            contract?: string | undefined;
            token?: {
                id?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                media?: string | undefined;
            } | undefined;
            collection?: {
                id?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
            } | undefined;
            txHash?: string | undefined;
            logIndex?: number | undefined;
            batchIndex?: number | undefined;
            order?: {
                id?: string | undefined;
                side?: "ask" | "bid" | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
export function useCoinConversion(vs_currency?: string, symbols?: string, id?: string): {
    price: number;
    symbol: string;
}[];
export function useReservoirClient(): import("~/../sdk/dist").ReservoirClient | null;
type AsksQuery = paths['/orders/asks/v4']['get']['parameters']['query'];
export function useListings(options: AsksQuery, swrOptions?: SWRInfiniteConfiguration, enabled?: boolean, chainId?: number): {
    data: {
        id: string;
        kind: string;
        side: "buy" | "sell";
        status?: string | undefined;
        tokenSetId: string;
        tokenSetSchemaHash: string;
        contract?: string | undefined;
        maker: string;
        taker: string;
        price?: {
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            amount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
            netAmount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
        } | undefined;
        validFrom: number;
        validUntil: number;
        quantityFilled?: number | undefined;
        quantityRemaining?: number | undefined;
        dynamicPricing?: {
            kind?: "dutch" | undefined;
            data?: {
                price?: {
                    start?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    end?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                time?: {
                    start?: number | undefined;
                    end?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        criteria?: {
            kind?: "token" | undefined;
            data?: {
                token?: {
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        source?: {
            [key: string]: unknown;
        } | undefined;
        feeBps?: number | undefined;
        feeBreakdown?: {
            kind?: string | undefined;
            recipient?: string | undefined;
            bps?: number | undefined;
        }[] | undefined;
        expiration: number;
        isReservoir?: boolean | undefined;
        isDynamic?: boolean | undefined;
        createdAt: string;
        updatedAt: string;
        originatedAt?: string | undefined;
        rawData?: {
            [key: string]: unknown;
        } | undefined;
        isNativeOffChainCancellable?: boolean | undefined;
        depth?: {
            price?: number | undefined;
            quantity?: number | undefined;
        }[] | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            status?: string | undefined;
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            dynamicPricing?: {
                kind?: "dutch" | undefined;
                data?: {
                    price?: {
                        start?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        end?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    time?: {
                        start?: number | undefined;
                        end?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            originatedAt?: string | undefined;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
            isNativeOffChainCancellable?: boolean | undefined;
            depth?: {
                price?: number | undefined;
                quantity?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            status?: string | undefined;
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            dynamicPricing?: {
                kind?: "dutch" | undefined;
                data?: {
                    price?: {
                        start?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        end?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    time?: {
                        start?: number | undefined;
                        end?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            originatedAt?: string | undefined;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
            isNativeOffChainCancellable?: boolean | undefined;
            depth?: {
                price?: number | undefined;
                quantity?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
export function useOwnerListings(query?: paths['/orders/asks/v4']['get']['parameters']['query'] | false, swrOptions?: SWRConfiguration, chainId?: number): {
    data: {
        id: string;
        kind: string;
        side: "buy" | "sell";
        status?: string | undefined;
        tokenSetId: string;
        tokenSetSchemaHash: string;
        contract?: string | undefined;
        maker: string;
        taker: string;
        price?: {
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            amount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
            netAmount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
        } | undefined;
        validFrom: number;
        validUntil: number;
        quantityFilled?: number | undefined;
        quantityRemaining?: number | undefined;
        dynamicPricing?: {
            kind?: "dutch" | undefined;
            data?: {
                price?: {
                    start?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    end?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                time?: {
                    start?: number | undefined;
                    end?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        criteria?: {
            kind?: "token" | undefined;
            data?: {
                token?: {
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        source?: {
            [key: string]: unknown;
        } | undefined;
        feeBps?: number | undefined;
        feeBreakdown?: {
            kind?: string | undefined;
            recipient?: string | undefined;
            bps?: number | undefined;
        }[] | undefined;
        expiration: number;
        isReservoir?: boolean | undefined;
        isDynamic?: boolean | undefined;
        createdAt: string;
        updatedAt: string;
        originatedAt?: string | undefined;
        rawData?: {
            [key: string]: unknown;
        } | undefined;
        isNativeOffChainCancellable?: boolean | undefined;
        depth?: {
            price?: number | undefined;
            quantity?: number | undefined;
        }[] | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            status?: string | undefined;
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            dynamicPricing?: {
                kind?: "dutch" | undefined;
                data?: {
                    price?: {
                        start?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        end?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    time?: {
                        start?: number | undefined;
                        end?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            originatedAt?: string | undefined;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
            isNativeOffChainCancellable?: boolean | undefined;
            depth?: {
                price?: number | undefined;
                quantity?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            status?: string | undefined;
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            dynamicPricing?: {
                kind?: "dutch" | undefined;
                data?: {
                    price?: {
                        start?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        end?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    time?: {
                        start?: number | undefined;
                        end?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            originatedAt?: string | undefined;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
            isNativeOffChainCancellable?: boolean | undefined;
            depth?: {
                price?: number | undefined;
                quantity?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
type BidsQuery = paths['/orders/bids/v5']['get']['parameters']['query'];
export function useBids(options: BidsQuery, swrOptions?: SWRInfiniteConfiguration, enabled?: boolean, chainId?: number): {
    data: {
        id: string;
        kind: string;
        side: "buy" | "sell";
        status?: string | undefined;
        tokenSetId: string;
        tokenSetSchemaHash: string;
        contract?: string | undefined;
        maker: string;
        taker: string;
        price?: {
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            amount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
            netAmount?: {
                raw?: string | undefined;
                decimal?: number | undefined;
                usd?: number | undefined;
                native?: number | undefined;
            } | undefined;
        } | undefined;
        validFrom: number;
        validUntil: number;
        quantityFilled?: number | undefined;
        quantityRemaining?: number | undefined;
        dynamicPricing?: {
            kind?: "dutch" | undefined;
            data?: {
                price?: {
                    start?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    end?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                time?: {
                    start?: number | undefined;
                    end?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        criteria?: {
            kind?: "token" | undefined;
            data?: {
                token?: {
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        source?: {
            [key: string]: unknown;
        } | undefined;
        feeBps?: number | undefined;
        feeBreakdown?: {
            kind?: string | undefined;
            recipient?: string | undefined;
            bps?: number | undefined;
        }[] | undefined;
        expiration: number;
        isReservoir?: boolean | undefined;
        isDynamic?: boolean | undefined;
        createdAt: string;
        updatedAt: string;
        originatedAt?: string | undefined;
        rawData?: {
            [key: string]: unknown;
        } | undefined;
        isNativeOffChainCancellable?: boolean | undefined;
        depth?: {
            price?: number | undefined;
            quantity?: number | undefined;
        }[] | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            status?: string | undefined;
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            dynamicPricing?: {
                kind?: "dutch" | undefined;
                data?: {
                    price?: {
                        start?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        end?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    time?: {
                        start?: number | undefined;
                        end?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            originatedAt?: string | undefined;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
            isNativeOffChainCancellable?: boolean | undefined;
            depth?: {
                price?: number | undefined;
                quantity?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        orders?: {
            id: string;
            kind: string;
            side: "buy" | "sell";
            status?: string | undefined;
            tokenSetId: string;
            tokenSetSchemaHash: string;
            contract?: string | undefined;
            maker: string;
            taker: string;
            price?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            validFrom: number;
            validUntil: number;
            quantityFilled?: number | undefined;
            quantityRemaining?: number | undefined;
            dynamicPricing?: {
                kind?: "dutch" | undefined;
                data?: {
                    price?: {
                        start?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        end?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    time?: {
                        start?: number | undefined;
                        end?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBps?: number | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            expiration: number;
            isReservoir?: boolean | undefined;
            isDynamic?: boolean | undefined;
            createdAt: string;
            updatedAt: string;
            originatedAt?: string | undefined;
            rawData?: {
                [key: string]: unknown;
            } | undefined;
            isNativeOffChainCancellable?: boolean | undefined;
            depth?: {
                price?: number | undefined;
                quantity?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
export function useAttributes(collection?: string | undefined, chainId?: number, swrOptions?: SWRConfiguration): {
    response: {
        attributes?: {
            key: string;
            attributeCount?: number | undefined;
            kind: "string" | "number" | "date" | "range";
            minRange?: number | undefined;
            maxRange?: number | undefined;
            values?: {
                value: string;
                count?: number | undefined;
                floorAskPrice?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    } | undefined;
    data: {
        key: string;
        attributeCount?: number | undefined;
        kind: "string" | "number" | "date" | "range";
        minRange?: number | undefined;
        maxRange?: number | undefined;
        values?: {
            value: string;
            count?: number | undefined;
            floorAskPrice?: number | undefined;
        }[] | undefined;
    }[] | null;
    mutate: import("swr/_internal").KeyedMutator<{
        attributes?: {
            key: string;
            attributeCount?: number | undefined;
            kind: "string" | "number" | "date" | "range";
            minRange?: number | undefined;
            maxRange?: number | undefined;
            values?: {
                value: string;
                count?: number | undefined;
                floorAskPrice?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    }>;
    error: any;
    isValidating: boolean;
};
type UserTokenQuery = paths['/users/{user}/tokens/v7']['get']['parameters']['query'];
export function useUserTokens(user?: string | undefined, options?: UserTokenQuery | false, swrOptions?: SWRInfiniteConfiguration, chainId?: number): {
    data: {
        token?: {
            contract?: string | undefined;
            tokenId?: string | undefined;
            kind?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            imageSmall?: string | undefined;
            imageLarge?: string | undefined;
            metadata?: {
                [key: string]: unknown;
            } | undefined;
            supply?: number | undefined;
            remainingSupply?: number | undefined;
            rarityScore?: number | undefined;
            rarityRank?: number | undefined;
            media?: string | undefined;
            collection?: {
                id?: string | undefined;
                name?: string | undefined;
                imageUrl?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                floorAskPrice?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                royaltiesBps?: number | undefined;
                royalties?: {
                    bps?: number | undefined;
                    recipient?: string | undefined;
                }[] | undefined;
            } | undefined;
            lastSale?: {
                id?: string | undefined;
                saleId?: string | undefined;
                token?: {
                    contract?: string | undefined;
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
                orderSource?: string | undefined;
                orderSide?: "ask" | "bid" | undefined;
                orderKind?: string | undefined;
                orderId?: string | undefined;
                from?: string | undefined;
                to?: string | undefined;
                amount?: string | undefined;
                fillSource?: string | undefined;
                block?: number | undefined;
                txHash?: string | undefined;
                logIndex?: number | undefined;
                batchIndex?: number | undefined;
                timestamp?: number | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                washTradingScore?: number | undefined;
                royaltyFeeBps?: number | undefined;
                marketplaceFeeBps?: number | undefined;
                paidFullRoyalty?: boolean | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    bps?: number | undefined;
                    recipient?: string | undefined;
                }[] | undefined;
                isDeleted?: boolean | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            topBid?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
            } | undefined;
            lastAppraisalValue?: number | undefined;
            attributes?: {
                key?: string | undefined;
                kind?: string | undefined;
                value: string;
                tokenCount?: number | undefined;
                onSaleCount?: number | undefined;
                floorAskPrice?: number | undefined;
                topBidValue?: number | undefined;
                createdAt?: string | undefined;
            }[] | undefined;
        } | undefined;
        ownership?: {
            tokenCount?: string | undefined;
            onSaleCount?: string | undefined;
            floorAsk?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                kind?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                rawData?: {
                    [key: string]: unknown;
                } | undefined;
                isNativeOffChainCancellable?: boolean | undefined;
            } | undefined;
            acquiredAt?: string | undefined;
        } | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        tokens?: {
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                imageSmall?: string | undefined;
                imageLarge?: string | undefined;
                metadata?: {
                    [key: string]: unknown;
                } | undefined;
                supply?: number | undefined;
                remainingSupply?: number | undefined;
                rarityScore?: number | undefined;
                rarityRank?: number | undefined;
                media?: string | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    imageUrl?: string | undefined;
                    openseaVerificationStatus?: string | undefined;
                    floorAskPrice?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    royaltiesBps?: number | undefined;
                    royalties?: {
                        bps?: number | undefined;
                        recipient?: string | undefined;
                    }[] | undefined;
                } | undefined;
                lastSale?: {
                    id?: string | undefined;
                    saleId?: string | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                        } | undefined;
                    } | undefined;
                    orderSource?: string | undefined;
                    orderSide?: "ask" | "bid" | undefined;
                    orderKind?: string | undefined;
                    orderId?: string | undefined;
                    from?: string | undefined;
                    to?: string | undefined;
                    amount?: string | undefined;
                    fillSource?: string | undefined;
                    block?: number | undefined;
                    txHash?: string | undefined;
                    logIndex?: number | undefined;
                    batchIndex?: number | undefined;
                    timestamp?: number | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    washTradingScore?: number | undefined;
                    royaltyFeeBps?: number | undefined;
                    marketplaceFeeBps?: number | undefined;
                    paidFullRoyalty?: boolean | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        bps?: number | undefined;
                        recipient?: string | undefined;
                    }[] | undefined;
                    isDeleted?: boolean | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                lastAppraisalValue?: number | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    value: string;
                    tokenCount?: number | undefined;
                    onSaleCount?: number | undefined;
                    floorAskPrice?: number | undefined;
                    topBidValue?: number | undefined;
                    createdAt?: string | undefined;
                }[] | undefined;
            } | undefined;
            ownership?: {
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    kind?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                    rawData?: {
                        [key: string]: unknown;
                    } | undefined;
                    isNativeOffChainCancellable?: boolean | undefined;
                } | undefined;
                acquiredAt?: string | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        tokens?: {
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                imageSmall?: string | undefined;
                imageLarge?: string | undefined;
                metadata?: {
                    [key: string]: unknown;
                } | undefined;
                supply?: number | undefined;
                remainingSupply?: number | undefined;
                rarityScore?: number | undefined;
                rarityRank?: number | undefined;
                media?: string | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    imageUrl?: string | undefined;
                    openseaVerificationStatus?: string | undefined;
                    floorAskPrice?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    royaltiesBps?: number | undefined;
                    royalties?: {
                        bps?: number | undefined;
                        recipient?: string | undefined;
                    }[] | undefined;
                } | undefined;
                lastSale?: {
                    id?: string | undefined;
                    saleId?: string | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                        } | undefined;
                    } | undefined;
                    orderSource?: string | undefined;
                    orderSide?: "ask" | "bid" | undefined;
                    orderKind?: string | undefined;
                    orderId?: string | undefined;
                    from?: string | undefined;
                    to?: string | undefined;
                    amount?: string | undefined;
                    fillSource?: string | undefined;
                    block?: number | undefined;
                    txHash?: string | undefined;
                    logIndex?: number | undefined;
                    batchIndex?: number | undefined;
                    timestamp?: number | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    washTradingScore?: number | undefined;
                    royaltyFeeBps?: number | undefined;
                    marketplaceFeeBps?: number | undefined;
                    paidFullRoyalty?: boolean | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        bps?: number | undefined;
                        recipient?: string | undefined;
                    }[] | undefined;
                    isDeleted?: boolean | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                lastAppraisalValue?: number | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    value: string;
                    tokenCount?: number | undefined;
                    onSaleCount?: number | undefined;
                    floorAskPrice?: number | undefined;
                    topBidValue?: number | undefined;
                    createdAt?: string | undefined;
                }[] | undefined;
            } | undefined;
            ownership?: {
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    kind?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                    rawData?: {
                        [key: string]: unknown;
                    } | undefined;
                    isNativeOffChainCancellable?: boolean | undefined;
                } | undefined;
                acquiredAt?: string | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
type _BidsQuery1 = paths['/orders/users/{user}/top-bids/v2']['get']['parameters']['query'];
export function useUserTopBids(user?: string, options?: _BidsQuery1, swrOptions?: SWRInfiniteConfiguration, chainId?: number): {
    data: {
        id?: string | undefined;
        price?: number | undefined;
        value?: number | undefined;
        maker?: string | undefined;
        createdAt?: string | undefined;
        validFrom?: number | undefined;
        validUntil?: number | undefined;
        floorDifferencePercentage?: number | undefined;
        source?: {
            [key: string]: unknown;
        } | undefined;
        feeBreakdown?: {
            kind?: string | undefined;
            recipient?: string | undefined;
            bps?: number | undefined;
        }[] | undefined;
        criteria?: {
            kind?: "token" | undefined;
            data?: {
                token?: {
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        token?: {
            contract?: string | undefined;
            tokenId?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            floorAskPrice?: number | undefined;
            lastSalePrice?: number | undefined;
            collection?: {
                id?: string | undefined;
                name?: string | undefined;
                imageUrl?: string | undefined;
                floorAskPrice?: number | undefined;
            } | undefined;
        } | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        totalTokensWithBids?: number | undefined;
        topBids?: {
            id?: string | undefined;
            price?: number | undefined;
            value?: number | undefined;
            maker?: string | undefined;
            createdAt?: string | undefined;
            validFrom?: number | undefined;
            validUntil?: number | undefined;
            floorDifferencePercentage?: number | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                floorAskPrice?: number | undefined;
                lastSalePrice?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    imageUrl?: string | undefined;
                    floorAskPrice?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        totalTokensWithBids?: number | undefined;
        topBids?: {
            id?: string | undefined;
            price?: number | undefined;
            value?: number | undefined;
            maker?: string | undefined;
            createdAt?: string | undefined;
            validFrom?: number | undefined;
            validUntil?: number | undefined;
            floorDifferencePercentage?: number | undefined;
            source?: {
                [key: string]: unknown;
            } | undefined;
            feeBreakdown?: {
                kind?: string | undefined;
                recipient?: string | undefined;
                bps?: number | undefined;
            }[] | undefined;
            criteria?: {
                kind?: "token" | undefined;
                data?: {
                    token?: {
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            token?: {
                contract?: string | undefined;
                tokenId?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                floorAskPrice?: number | undefined;
                lastSalePrice?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    imageUrl?: string | undefined;
                    floorAskPrice?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
type UserCollectionsQuery = paths['/users/{user}/collections/v3']['get']['parameters']['query'];
export function useUserCollections(user?: string, options?: UserCollectionsQuery, swrOptions?: SWRInfiniteConfiguration, chainId?: number): {
    data: {
        collection?: {
            id?: string | undefined;
            slug?: string | undefined;
            name?: string | undefined;
            image?: string | undefined;
            banner?: string | undefined;
            discordUrl?: string | undefined;
            externalUrl?: string | undefined;
            twitterUsername?: string | undefined;
            openseaVerificationStatus?: string | undefined;
            description?: string | undefined;
            sampleImages?: string[] | undefined;
            tokenCount?: string | undefined;
            tokenSetId?: string | undefined;
            primaryContract?: string | undefined;
            floorAskPrice?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            topBidValue?: {
                currency?: {
                    contract?: string | undefined;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals?: number | undefined;
                } | undefined;
                amount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
                netAmount?: {
                    raw?: string | undefined;
                    decimal?: number | undefined;
                    usd?: number | undefined;
                    native?: number | undefined;
                } | undefined;
            } | undefined;
            topBidMaker?: string | undefined;
            topBidSourceDomain?: string | undefined;
            rank?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volume?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
                allTime?: number | undefined;
            } | undefined;
            volumeChange?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
            floorSale?: {
                "1day"?: number | undefined;
                "7day"?: number | undefined;
                "30day"?: number | undefined;
            } | undefined;
        } | undefined;
        ownership?: {
            tokenCount?: string | undefined;
            onSaleCount?: string | undefined;
            liquidCount?: string | undefined;
        } | undefined;
    }[];
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        collections?: {
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                tokenSetId?: string | undefined;
                primaryContract?: string | undefined;
                floorAskPrice?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                topBidValue?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                topBidMaker?: string | undefined;
                topBidSourceDomain?: string | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
            } | undefined;
            ownership?: {
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                liquidCount?: string | undefined;
            } | undefined;
        }[] | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        collections?: {
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                tokenSetId?: string | undefined;
                primaryContract?: string | undefined;
                floorAskPrice?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                topBidValue?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                topBidMaker?: string | undefined;
                topBidSourceDomain?: string | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
            } | undefined;
            ownership?: {
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                liquidCount?: string | undefined;
            } | undefined;
        }[] | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
type Token = NonNullable<ReturnType<typeof useTokens>['data'][0]>;
type FloorAsk = NonNullable<NonNullable<Token['market']>['floorAsk']>;
type CartItemPrice = FloorAsk['price'];
export enum CheckoutStatus {
    Idle = 0,
    Approving = 1,
    Finalizing = 2,
    Complete = 3
}
export enum CheckoutTransactionError {
    Unknown = 0,
    PiceMismatch = 1,
    InsufficientBalance = 2,
    UserDenied = 3
}
type CartItem = {
    token: {
        id: string;
        name: string;
    };
    collection: {
        id: string;
        name: string;
    };
    order?: {
        id: string;
        quantityRemaining: number;
        quantity: number;
        maker: string;
    };
    price: CartItemPrice;
    poolId?: string;
    poolPrices?: CartItemPrice[];
    previousPrice?: CartItemPrice;
};
export type Cart = {
    totalPrice: number;
    currency?: NonNullable<CartItemPrice>['currency'];
    feeOnTop?: number;
    feesOnTopBps?: string[];
    items: CartItem[];
    pools: Record<string, {
        prices: CartItemPrice[];
        itemCount: number;
    }>;
    isValidating: boolean;
    chain?: ReservoirChain;
    pendingTransactionId?: string;
    transaction: {
        id?: string;
        txHash?: string;
        chain: ReservoirChain;
        items: CartItem[];
        error?: Error;
        errorType?: CheckoutTransactionError;
        status: CheckoutStatus;
        steps?: Execute['steps'];
        path?: Execute['path'];
        currentStep?: Execute['steps'][0];
    } | null;
};
type CartProviderProps = {
    children: ReactNode;
    feesOnTopBps?: string[];
    persist?: boolean;
};
export const CartProvider: FC<CartProviderProps>;
export function useCart<SelectorOutput>(selector: (store: Cart) => SelectorOutput): {
    data: SelectorOutput;
    clear: () => void;
    clearTransaction: () => void;
    setQuantity: (orderId: string, quantity: number) => void;
    remove: (ids: string[]) => void;
    add: (items: ({
        token?: {
            contract: string;
            tokenId: string;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            imageSmall?: string | undefined;
            imageLarge?: string | undefined;
            metadata?: {
                [key: string]: unknown;
            } | undefined;
            media?: string | undefined;
            kind?: string | undefined;
            isFlagged?: boolean | undefined;
            lastFlagUpdate?: string | undefined;
            lastFlagChange?: string | undefined;
            supply?: number | undefined;
            remainingSupply?: number | undefined;
            rarity?: number | undefined;
            rarityRank?: number | undefined;
            collection?: {
                id?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                slug?: string | undefined;
            } | undefined;
            lastSale?: {
                id?: string | undefined;
                saleId?: string | undefined;
                token?: {
                    contract?: string | undefined;
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
                orderSource?: string | undefined;
                orderSide?: "ask" | "bid" | undefined;
                orderKind?: string | undefined;
                orderId?: string | undefined;
                from?: string | undefined;
                to?: string | undefined;
                amount?: string | undefined;
                fillSource?: string | undefined;
                block?: number | undefined;
                txHash?: string | undefined;
                logIndex?: number | undefined;
                batchIndex?: number | undefined;
                timestamp?: number | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                washTradingScore?: number | undefined;
                royaltyFeeBps?: number | undefined;
                marketplaceFeeBps?: number | undefined;
                paidFullRoyalty?: boolean | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    bps?: number | undefined;
                    recipient?: string | undefined;
                }[] | undefined;
                isDeleted?: boolean | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            owner?: string | undefined;
            attributes?: {
                key?: string | undefined;
                kind?: string | undefined;
                value: string;
                tokenCount?: number | undefined;
                onSaleCount?: number | undefined;
                floorAskPrice?: number | undefined;
                topBidValue?: number | undefined;
                createdAt?: string | undefined;
            }[] | undefined;
        } | undefined;
        market?: {
            floorAsk?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                dynamicPricing?: {
                    kind?: "dutch" | "pool" | undefined;
                    data?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
            } | undefined;
            topBid?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } | {
        orderId: string;
    } | {
        id: string;
    })[], chainId: number) => Promise<void>;
    validate: () => Promise<boolean>;
    checkout: (options?: Partial<Omit<{
        items: {
            collection?: string | undefined;
            token?: string | undefined;
            quantity?: number | undefined;
            orderId?: string | undefined;
            rawOrder?: {
                kind: "flow" | "x2y2" | "opensea" | "looks-rare" | "universe" | "zeroex-v4" | "seaport" | "seaport-v1.4" | "seaport-v1.5" | "alienswap" | "blur-partial" | "rarible" | "sudoswap" | "nftx";
                data: {
                    [key: string]: unknown;
                };
            } | undefined;
            fillType?: "mint" | "trade" | undefined;
            preferredOrderSource?: string | undefined;
            exactOrderSource?: string | undefined;
            exclusions?: {
                orderId: string;
                price?: string | undefined;
            }[] | undefined;
        }[];
        taker: string;
        relayer?: string | undefined;
        onlyPath?: boolean | undefined;
        preview?: "depth" | undefined;
        forceRouter?: boolean | undefined;
        currency?: string | undefined;
        normalizeRoyalties?: boolean | undefined;
        allowInactiveOrderIds?: boolean | undefined;
        source?: string | undefined;
        feesOnTop?: string[] | undefined;
        partial?: boolean | undefined;
        skipBalanceCheck?: boolean | undefined;
        excludeEOA?: boolean | undefined;
        maxFeePerGas?: string | undefined;
        maxPriorityFeePerGas?: string | undefined;
        usePermit?: boolean | undefined;
        x2y2ApiKey?: string | undefined;
        openseaApiKey?: string | undefined;
        blurAuth?: string | undefined;
    }, "source" | "items">> | undefined) => Promise<void>;
    set: (value: Partial<Cart>) => void;
};
type DynamicTokens = (ReturnType<typeof useTokens>['data'][0] & {
    isInCart?: boolean;
})[];
export function useDynamicTokens(options?: Parameters<typeof useTokens>['0'], swrOptions?: SWRInfiniteConfiguration, chainId?: number): {
    clear: () => void;
    clearTransaction: () => void;
    setQuantity: (orderId: string, quantity: number) => void;
    remove: (ids: string[]) => void;
    add: (items: ({
        token?: {
            contract: string;
            tokenId: string;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            imageSmall?: string | undefined;
            imageLarge?: string | undefined;
            metadata?: {
                [key: string]: unknown;
            } | undefined;
            media?: string | undefined;
            kind?: string | undefined;
            isFlagged?: boolean | undefined;
            lastFlagUpdate?: string | undefined;
            lastFlagChange?: string | undefined;
            supply?: number | undefined;
            remainingSupply?: number | undefined;
            rarity?: number | undefined;
            rarityRank?: number | undefined;
            collection?: {
                id?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                slug?: string | undefined;
            } | undefined;
            lastSale?: {
                id?: string | undefined;
                saleId?: string | undefined;
                token?: {
                    contract?: string | undefined;
                    tokenId?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
                orderSource?: string | undefined;
                orderSide?: "ask" | "bid" | undefined;
                orderKind?: string | undefined;
                orderId?: string | undefined;
                from?: string | undefined;
                to?: string | undefined;
                amount?: string | undefined;
                fillSource?: string | undefined;
                block?: number | undefined;
                txHash?: string | undefined;
                logIndex?: number | undefined;
                batchIndex?: number | undefined;
                timestamp?: number | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                washTradingScore?: number | undefined;
                royaltyFeeBps?: number | undefined;
                marketplaceFeeBps?: number | undefined;
                paidFullRoyalty?: boolean | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    bps?: number | undefined;
                    recipient?: string | undefined;
                }[] | undefined;
                isDeleted?: boolean | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            owner?: string | undefined;
            attributes?: {
                key?: string | undefined;
                kind?: string | undefined;
                value: string;
                tokenCount?: number | undefined;
                onSaleCount?: number | undefined;
                floorAskPrice?: number | undefined;
                topBidValue?: number | undefined;
                createdAt?: string | undefined;
            }[] | undefined;
        } | undefined;
        market?: {
            floorAsk?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                dynamicPricing?: {
                    kind?: "dutch" | "pool" | undefined;
                    data?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
            } | undefined;
            topBid?: {
                id?: string | undefined;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                maker?: string | undefined;
                validFrom?: number | undefined;
                validUntil?: number | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } | {
        orderId: string;
    } | {
        id: string;
    })[], chainId: number) => Promise<void>;
    validate: () => Promise<boolean>;
    checkout: (options?: Partial<Omit<{
        items: {
            collection?: string | undefined;
            token?: string | undefined;
            quantity?: number | undefined;
            orderId?: string | undefined;
            rawOrder?: {
                kind: "flow" | "x2y2" | "opensea" | "looks-rare" | "universe" | "zeroex-v4" | "seaport" | "seaport-v1.4" | "seaport-v1.5" | "alienswap" | "blur-partial" | "rarible" | "sudoswap" | "nftx";
                data: {
                    [key: string]: unknown;
                };
            } | undefined;
            fillType?: "mint" | "trade" | undefined;
            preferredOrderSource?: string | undefined;
            exactOrderSource?: string | undefined;
            exclusions?: {
                orderId: string;
                price?: string | undefined;
            }[] | undefined;
        }[];
        taker: string;
        relayer?: string | undefined;
        onlyPath?: boolean | undefined;
        preview?: "depth" | undefined;
        forceRouter?: boolean | undefined;
        currency?: string | undefined;
        normalizeRoyalties?: boolean | undefined;
        allowInactiveOrderIds?: boolean | undefined;
        source?: string | undefined;
        feesOnTop?: string[] | undefined;
        partial?: boolean | undefined;
        skipBalanceCheck?: boolean | undefined;
        excludeEOA?: boolean | undefined;
        maxFeePerGas?: string | undefined;
        maxPriorityFeePerGas?: string | undefined;
        usePermit?: boolean | undefined;
        x2y2ApiKey?: string | undefined;
        openseaApiKey?: string | undefined;
        blurAuth?: string | undefined;
    }, "source" | "items">> | undefined) => Promise<void>;
    set: (value: Partial<Cart>) => void;
    data: DynamicTokens;
    hasNextPage: boolean;
    isFetchingInitialData: boolean;
    isFetchingPage: any;
    resetCache: () => Promise<void>;
    fetchNextPage: () => void;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        tokens?: {
            token?: {
                contract: string;
                tokenId: string;
                name?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                imageSmall?: string | undefined;
                imageLarge?: string | undefined;
                metadata?: {
                    [key: string]: unknown;
                } | undefined;
                media?: string | undefined;
                kind?: string | undefined;
                isFlagged?: boolean | undefined;
                lastFlagUpdate?: string | undefined;
                lastFlagChange?: string | undefined;
                supply?: number | undefined;
                remainingSupply?: number | undefined;
                rarity?: number | undefined;
                rarityRank?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                    slug?: string | undefined;
                } | undefined;
                lastSale?: {
                    id?: string | undefined;
                    saleId?: string | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                        } | undefined;
                    } | undefined;
                    orderSource?: string | undefined;
                    orderSide?: "ask" | "bid" | undefined;
                    orderKind?: string | undefined;
                    orderId?: string | undefined;
                    from?: string | undefined;
                    to?: string | undefined;
                    amount?: string | undefined;
                    fillSource?: string | undefined;
                    block?: number | undefined;
                    txHash?: string | undefined;
                    logIndex?: number | undefined;
                    batchIndex?: number | undefined;
                    timestamp?: number | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    washTradingScore?: number | undefined;
                    royaltyFeeBps?: number | undefined;
                    marketplaceFeeBps?: number | undefined;
                    paidFullRoyalty?: boolean | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        bps?: number | undefined;
                        recipient?: string | undefined;
                    }[] | undefined;
                    isDeleted?: boolean | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                owner?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    value: string;
                    tokenCount?: number | undefined;
                    onSaleCount?: number | undefined;
                    floorAskPrice?: number | undefined;
                    topBidValue?: number | undefined;
                    createdAt?: string | undefined;
                }[] | undefined;
            } | undefined;
            market?: {
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    quantityFilled?: number | undefined;
                    quantityRemaining?: number | undefined;
                    dynamicPricing?: {
                        kind?: "dutch" | "pool" | undefined;
                        data?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[] | undefined>;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<{
        tokens?: {
            token?: {
                contract: string;
                tokenId: string;
                name?: string | undefined;
                description?: string | undefined;
                image?: string | undefined;
                imageSmall?: string | undefined;
                imageLarge?: string | undefined;
                metadata?: {
                    [key: string]: unknown;
                } | undefined;
                media?: string | undefined;
                kind?: string | undefined;
                isFlagged?: boolean | undefined;
                lastFlagUpdate?: string | undefined;
                lastFlagChange?: string | undefined;
                supply?: number | undefined;
                remainingSupply?: number | undefined;
                rarity?: number | undefined;
                rarityRank?: number | undefined;
                collection?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    image?: string | undefined;
                    slug?: string | undefined;
                } | undefined;
                lastSale?: {
                    id?: string | undefined;
                    saleId?: string | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                        } | undefined;
                    } | undefined;
                    orderSource?: string | undefined;
                    orderSide?: "ask" | "bid" | undefined;
                    orderKind?: string | undefined;
                    orderId?: string | undefined;
                    from?: string | undefined;
                    to?: string | undefined;
                    amount?: string | undefined;
                    fillSource?: string | undefined;
                    block?: number | undefined;
                    txHash?: string | undefined;
                    logIndex?: number | undefined;
                    batchIndex?: number | undefined;
                    timestamp?: number | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    washTradingScore?: number | undefined;
                    royaltyFeeBps?: number | undefined;
                    marketplaceFeeBps?: number | undefined;
                    paidFullRoyalty?: boolean | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        bps?: number | undefined;
                        recipient?: string | undefined;
                    }[] | undefined;
                    isDeleted?: boolean | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                owner?: string | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    value: string;
                    tokenCount?: number | undefined;
                    onSaleCount?: number | undefined;
                    floorAskPrice?: number | undefined;
                    topBidValue?: number | undefined;
                    createdAt?: string | undefined;
                }[] | undefined;
            } | undefined;
            market?: {
                floorAsk?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    quantityFilled?: number | undefined;
                    quantityRemaining?: number | undefined;
                    dynamicPricing?: {
                        kind?: "dutch" | "pool" | undefined;
                        data?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    source?: {
                        [key: string]: unknown;
                    } | undefined;
                    feeBreakdown?: {
                        kind?: string | undefined;
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        continuation?: string | undefined;
    }[]>;
    isValidating: boolean;
    isLoading: boolean;
};
type Marketplace = NonNullable<paths['/collections/{collection}/supported-marketplaces/v1']['get']['responses']['200']['schema']['marketplaces']>[0] & {
    isSelected: boolean;
    price: number | string;
    truePrice: number | string;
    fee: {
        bps: number;
        percent: number;
    };
};
type Currency = {
    contract: string;
    symbol: string;
    decimals?: number;
    coinGeckoId?: string;
};
export enum ListStep {
    SelectMarkets = 0,
    SetPrice = 1,
    ListItem = 2,
    Complete = 3
}
type Listings = Parameters<ReservoirClientActions['listToken']>['0']['listings'];
type ListingData = {
    listing: Listings[0];
    marketplace: Marketplace;
};
type ListModalStepData = {
    totalSteps: number;
    stepProgress: number;
    currentStep: Execute['steps'][0];
    listingData: ListingData[];
};
type Props = {
    content?: ReactNode;
    side?: any;
    width?: any;
} & Popover.PopoverProps;
declare const RKPopover: {
    ({ children, content, side, width, ...props }: Props): JSX.Element;
    Root: React.FC<Popover.PopoverProps>;
    Portal: React.FC<Popover.PopoverPortalProps>;
    Trigger: React.ForwardRefExoticComponent<Popover.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Arrow: import("@stitches/react/types/styled-component").StyledComponent<React.ForwardRefExoticComponent<Popover.PopoverArrowProps & React.RefAttributes<SVGSVGElement>>, {}, {
        bp1: "(min-width: 600px)";
        bp2: "(min-width: 905px)";
        bp3: "(min-width: 1240px)";
        bp4: "(min-width: 1440px)";
        motion: "(prefers-reduced-motion)";
        hover: "(any-hover: hover)";
        dark: "(prefers-color-scheme: dark)";
        light: "(prefers-color-scheme: light)";
    }, import("@stitches/react/types/css-util").CSS<{
        bp1: "(min-width: 600px)";
        bp2: "(min-width: 905px)";
        bp3: "(min-width: 1240px)";
        bp4: "(min-width: 1440px)";
        motion: "(prefers-reduced-motion)";
        hover: "(any-hover: hover)";
        dark: "(prefers-color-scheme: dark)";
        light: "(prefers-color-scheme: light)";
    }, {
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        fontSizes: unknown;
        fontWeights: unknown;
        fonts: {
            body: string;
            button: string;
        };
        lineHeights: unknown;
        letterSpacings: unknown;
        sizes: unknown;
        radii: {
            borderRadius: number;
        };
        shadows: unknown;
        transitions: unknown;
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        m: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            margin: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        mx: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginLeft: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
            marginRight: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        my: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginTop: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
            marginBottom: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        mt: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginTop: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        mb: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginBottom: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        ml: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginLeft: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        mr: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginRight: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        p: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            padding: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        px: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingLeft: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
            paddingRight: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        py: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingTop: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
            paddingBottom: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        pt: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingTop: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        pb: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingBottom: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        pl: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingLeft: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        pr: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingRight: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        w: (value: import("@stitches/react/types/css-util").WithPropertyValue<"width">) => {
            width: import("@stitches/react/types/css-util").WithPropertyValue<"width">;
        };
        h: (value: import("@stitches/react/types/css-util").WithPropertyValue<"height">) => {
            height: import("@stitches/react/types/css-util").WithPropertyValue<"height">;
        };
        size: (value: import("@stitches/react/types/css-util").WithPropertyValue<"width">) => {
            width: import("@stitches/react/types/css-util").WithPropertyValue<"width">;
            height: import("@stitches/react/types/css-util").WithPropertyValue<"width">;
        };
    }>>;
    Content: import("@stitches/react/types/styled-component").StyledComponent<React.ForwardRefExoticComponent<Popover.PopoverContentProps & React.RefAttributes<HTMLDivElement>>, {}, {
        bp1: "(min-width: 600px)";
        bp2: "(min-width: 905px)";
        bp3: "(min-width: 1240px)";
        bp4: "(min-width: 1440px)";
        motion: "(prefers-reduced-motion)";
        hover: "(any-hover: hover)";
        dark: "(prefers-color-scheme: dark)";
        light: "(prefers-color-scheme: light)";
    }, import("@stitches/react/types/css-util").CSS<{
        bp1: "(min-width: 600px)";
        bp2: "(min-width: 905px)";
        bp3: "(min-width: 1240px)";
        bp4: "(min-width: 1440px)";
        motion: "(prefers-reduced-motion)";
        hover: "(any-hover: hover)";
        dark: "(prefers-color-scheme: dark)";
        light: "(prefers-color-scheme: light)";
    }, {
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        fontSizes: unknown;
        fontWeights: unknown;
        fonts: {
            body: string;
            button: string;
        };
        lineHeights: unknown;
        letterSpacings: unknown;
        sizes: unknown;
        radii: {
            borderRadius: number;
        };
        shadows: unknown;
        transitions: unknown;
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        m: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            margin: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        mx: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginLeft: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
            marginRight: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        my: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginTop: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
            marginBottom: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        mt: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginTop: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        mb: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginBottom: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        ml: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginLeft: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        mr: (value: import("@stitches/react/types/css-util").WithPropertyValue<"margin">) => {
            marginRight: import("@stitches/react/types/css-util").WithPropertyValue<"margin">;
        };
        p: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            padding: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        px: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingLeft: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
            paddingRight: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        py: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingTop: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
            paddingBottom: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        pt: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingTop: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        pb: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingBottom: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        pl: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingLeft: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        pr: (value: import("@stitches/react/types/css-util").WithPropertyValue<"padding">) => {
            paddingRight: import("@stitches/react/types/css-util").WithPropertyValue<"padding">;
        };
        w: (value: import("@stitches/react/types/css-util").WithPropertyValue<"width">) => {
            width: import("@stitches/react/types/css-util").WithPropertyValue<"width">;
        };
        h: (value: import("@stitches/react/types/css-util").WithPropertyValue<"height">) => {
            height: import("@stitches/react/types/css-util").WithPropertyValue<"height">;
        };
        size: (value: import("@stitches/react/types/css-util").WithPropertyValue<"width">) => {
            width: import("@stitches/react/types/css-util").WithPropertyValue<"width">;
            height: import("@stitches/react/types/css-util").WithPropertyValue<"width">;
        };
    }>>;
};
enum ModalSize {
    MD = 0,
    LG = 1
}
declare const Modal: React.ForwardRefExoticComponent<{
    title: string;
    children: ReactNode;
    size?: ModalSize | undefined;
    onBack?: (() => void) | null | undefined;
    loading?: boolean | undefined;
} & Pick<Pick<Pick<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "children" | "slot" | "style" | "title" | "prefix" | "color" | "translate" | "hidden" | "onError" | "accessKey" | "dir" | "draggable" | "lang" | "defaultValue" | "key" | "id" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "className" | "contentEditable" | "contextMenu" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "asChild" | "onEscapeKeyDown" | "onPointerDownOutside" | "onFocusOutside" | "onInteractOutside" | "onOpenAutoFocus" | "onCloseAutoFocus" | "forceMount"> & {
    trigger: React.ReactNode;
    portalProps?: Pick<import("@radix-ui/react-portal").PortalProps & React.RefAttributes<HTMLDivElement>, "children" | "slot" | "style" | "title" | "prefix" | "color" | "translate" | "hidden" | "onError" | "accessKey" | "dir" | "draggable" | "lang" | "defaultValue" | "key" | "id" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "className" | "contentEditable" | "contextMenu" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "asChild" | "container"> | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
    open?: boolean | undefined;
    size?: ModalSize | undefined;
} & React.RefAttributes<HTMLDivElement>, "children" | "slot" | "style" | "title" | "prefix" | "color" | "translate" | "hidden" | "onError" | "accessKey" | "dir" | "draggable" | "lang" | "defaultValue" | "key" | "id" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "className" | "contentEditable" | "contextMenu" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "asChild" | "onEscapeKeyDown" | "onPointerDownOutside" | "onFocusOutside" | "onInteractOutside" | "onOpenAutoFocus" | "onCloseAutoFocus" | "forceMount" | keyof {
    trigger: React.ReactNode;
    portalProps?: Pick<import("@radix-ui/react-portal").PortalProps & React.RefAttributes<HTMLDivElement>, "children" | "slot" | "style" | "title" | "prefix" | "color" | "translate" | "hidden" | "onError" | "accessKey" | "dir" | "draggable" | "lang" | "defaultValue" | "key" | "id" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "className" | "contentEditable" | "contextMenu" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "asChild" | "container"> | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
    open?: boolean | undefined;
    size?: ModalSize | undefined;
}>, "open" | "onFocusCapture" | "onOpenChange" | "onPointerDownOutside" | "trigger"> & React.RefAttributes<HTMLDivElement>>;
export enum BuyStep {
    Checkout = 0,
    Approving = 1,
    Complete = 2,
    Unavailable = 3
}
type BuyModalStepData = {
    totalSteps: number;
    stepProgress: number;
    currentStep: Execute['steps'][0];
    currentStepItem: NonNullable<Execute['steps'][0]['items']>[0];
};
type PurchaseData = {
    tokenId?: string;
    collectionId?: string;
    maker?: string;
    steps?: Execute['steps'];
};
declare const ModalCopy: {
    titleInsufficientFunds: string;
    titleUnavilable: string;
    titleDefault: string;
    ctaClose: string;
    ctaCheckout: string;
    ctaInsufficientFunds: string;
    ctaGoToToken: string;
    ctaAwaitingValidation: string;
    ctaAwaitingApproval: string;
    ctaCopyAddress: string;
};
type _Props1 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    tokenId?: string;
    collectionId?: string;
    orderId?: string;
    feesOnTopBps?: string[] | null;
    feesOnTopFixed?: string[] | null;
    normalizeRoyalties?: boolean;
    copyOverrides?: Partial<typeof ModalCopy>;
    onGoToToken?: () => any;
    onPurchaseComplete?: (data: PurchaseData) => void;
    onPurchaseError?: (error: Error, data: PurchaseData) => void;
    onClose?: (data: PurchaseData, stepData: BuyModalStepData | null, currentStep: BuyStep) => void;
};
export function BuyModal({ openState, trigger, tokenId, collectionId, orderId, feesOnTopBps, feesOnTopFixed, normalizeRoyalties, copyOverrides, onPurchaseComplete, onPurchaseError, onClose, onGoToToken, }: _Props1): ReactElement;
export declare namespace BuyModal {
    var Custom: React.FC<{
        open: boolean;
        tokenId?: string | undefined;
        collectionId?: string | undefined;
        orderId?: string | undefined;
        feesOnTopBps?: string[] | null | undefined;
        feesOnTopFixed?: string[] | null | undefined;
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            loading: boolean;
            token?: {
                token?: {
                    contract: string;
                    tokenId: string;
                    name?: string | undefined;
                    description?: string | undefined;
                    image?: string | undefined;
                    imageSmall?: string | undefined;
                    imageLarge?: string | undefined;
                    metadata?: {
                        [key: string]: unknown;
                    } | undefined;
                    media?: string | undefined;
                    kind?: string | undefined;
                    isFlagged?: boolean | undefined;
                    lastFlagUpdate?: string | undefined;
                    lastFlagChange?: string | undefined;
                    supply?: number | undefined;
                    remainingSupply?: number | undefined;
                    rarity?: number | undefined;
                    rarityRank?: number | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        slug?: string | undefined;
                    } | undefined;
                    lastSale?: {
                        id?: string | undefined;
                        saleId?: string | undefined;
                        token?: {
                            contract?: string | undefined;
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                            collection?: {
                                id?: string | undefined;
                                name?: string | undefined;
                            } | undefined;
                        } | undefined;
                        orderSource?: string | undefined;
                        orderSide?: "ask" | "bid" | undefined;
                        orderKind?: string | undefined;
                        orderId?: string | undefined;
                        from?: string | undefined;
                        to?: string | undefined;
                        amount?: string | undefined;
                        fillSource?: string | undefined;
                        block?: number | undefined;
                        txHash?: string | undefined;
                        logIndex?: number | undefined;
                        batchIndex?: number | undefined;
                        timestamp?: number | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        washTradingScore?: number | undefined;
                        royaltyFeeBps?: number | undefined;
                        marketplaceFeeBps?: number | undefined;
                        paidFullRoyalty?: boolean | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            bps?: number | undefined;
                            recipient?: string | undefined;
                        }[] | undefined;
                        isDeleted?: boolean | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    } | undefined;
                    owner?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        kind?: string | undefined;
                        value: string;
                        tokenCount?: number | undefined;
                        onSaleCount?: number | undefined;
                        floorAskPrice?: number | undefined;
                        topBidValue?: number | undefined;
                        createdAt?: string | undefined;
                    }[] | undefined;
                } | undefined;
                market?: {
                    floorAsk?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        quantityFilled?: number | undefined;
                        quantityRemaining?: number | undefined;
                        dynamicPricing?: {
                            kind?: "dutch" | "pool" | undefined;
                            data?: {
                                [key: string]: unknown;
                            } | undefined;
                        } | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    topBid?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            recipient?: string | undefined;
                            bps?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                createdAt?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                primaryContract?: string | undefined;
                tokenSetId?: string | undefined;
                royalties?: {
                    recipient?: string | undefined;
                    breakdown?: {
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                    bps?: number | undefined;
                } | undefined;
                allRoyalties?: {
                    [key: string]: unknown;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                } | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSaleChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                salesCount?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                collectionBidSupported?: boolean | undefined;
                ownerCount?: number | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    count?: number | undefined;
                }[] | undefined;
                contractKind?: string | undefined;
                mintedTimestamp?: number | undefined;
                mintStages?: {
                    stage: string;
                    tokenId?: string | undefined;
                    kind: string;
                    price: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    };
                    startTime?: number | undefined;
                    endTime?: number | undefined;
                    maxMintsPerWallet?: number | undefined;
                }[] | undefined;
            } | undefined;
            listing?: {
                id: string;
                kind: string;
                side: "buy" | "sell";
                status?: string | undefined;
                tokenSetId: string;
                tokenSetSchemaHash: string;
                contract?: string | undefined;
                maker: string;
                taker: string;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                validFrom: number;
                validUntil: number;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                dynamicPricing?: {
                    kind?: "dutch" | undefined;
                    data?: {
                        price?: {
                            start?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                            end?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        time?: {
                            start?: number | undefined;
                            end?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBps?: number | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                expiration: number;
                isReservoir?: boolean | undefined;
                isDynamic?: boolean | undefined;
                createdAt: string;
                updatedAt: string;
                originatedAt?: string | undefined;
                rawData?: {
                    [key: string]: unknown;
                } | undefined;
                isNativeOffChainCancellable?: boolean | undefined;
                depth?: {
                    price?: number | undefined;
                    quantity?: number | undefined;
                }[] | undefined;
            } | undefined;
            quantityAvailable: number;
            averageUnitPrice: number;
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            mixedCurrencies: boolean;
            totalPrice: number;
            feeOnTop: number;
            buyStep: BuyStep;
            transactionError?: Error | null | undefined;
            hasEnoughCurrency: boolean;
            addFundsLink: string;
            feeUsd: number;
            totalUsd: number;
            usdPrice: number;
            balance?: bigint | undefined;
            address?: string | undefined;
            blockExplorerBaseUrl: string;
            steps: {
                error?: string | undefined;
                errorData?: any;
                action: string;
                description: string;
                kind: "transaction" | "signature";
                id: string;
                items?: {
                    status: "complete" | "incomplete";
                    data?: any;
                    orderIndexes?: number[] | undefined;
                    orderIds?: string[] | undefined;
                    error?: string | undefined;
                    txHash?: string | undefined;
                    orderData?: {
                        crossPostingOrderId?: string | undefined;
                        orderId: string;
                        orderIndex: string;
                    }[] | undefined;
                    salesData?: {
                        id?: string | undefined;
                        saleId?: string | undefined;
                        token?: {
                            contract?: string | undefined;
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                            collection?: {
                                id?: string | undefined;
                                name?: string | undefined;
                            } | undefined;
                        } | undefined;
                        orderSource?: string | undefined;
                        orderSide?: "ask" | "bid" | undefined;
                        orderKind?: string | undefined;
                        orderId?: string | undefined;
                        from?: string | undefined;
                        to?: string | undefined;
                        amount?: string | undefined;
                        fillSource?: string | undefined;
                        block?: number | undefined;
                        txHash?: string | undefined;
                        logIndex?: number | undefined;
                        batchIndex?: number | undefined;
                        timestamp?: number | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        washTradingScore?: number | undefined;
                        royaltyFeeBps?: number | undefined;
                        marketplaceFeeBps?: number | undefined;
                        paidFullRoyalty?: boolean | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            bps?: number | undefined;
                            recipient?: string | undefined;
                        }[] | undefined;
                        isDeleted?: boolean | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | null;
            stepData: BuyModalStepData | null;
            quantity: number;
            setBuyStep: React.Dispatch<React.SetStateAction<BuyStep>>;
            setQuantity: React.Dispatch<React.SetStateAction<number>>;
            buyToken: () => void;
        }) => React.ReactNode;
    }>;
}
type ListingCallbackData = {
    listings?: ListingData[];
    tokenId?: string;
    collectionId?: string;
};
declare const _ModalCopy1: {
    title: string;
    ctaClose: string;
    ctaSetPrice: string;
    ctaList: string;
    ctaAwaitingApproval: string;
    ctaEditListing: string;
    ctaRetry: string;
    ctaGoToToken: string;
};
type _Props2 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    tokenId?: string;
    collectionId?: string;
    currencies?: Currency[];
    nativeOnly?: boolean;
    normalizeRoyalties?: boolean;
    enableOnChainRoyalties?: boolean;
    oracleEnabled?: boolean;
    copyOverrides?: Partial<typeof _ModalCopy1>;
    feesBps?: string[];
    onGoToToken?: () => any;
    onListingComplete?: (data: ListingCallbackData) => void;
    onListingError?: (error: Error, data: ListingCallbackData) => void;
    onClose?: (data: ListingCallbackData, stepData: ListModalStepData | null, currentStep: ListStep) => void;
};
export function ListModal({ openState, trigger, tokenId, collectionId, currencies, nativeOnly, normalizeRoyalties, enableOnChainRoyalties, oracleEnabled, copyOverrides, feesBps, onGoToToken, onListingComplete, onListingError, onClose, }: _Props2): ReactElement;
export declare namespace ListModal {
    var Custom: React.FC<{
        open: boolean;
        tokenId?: string | undefined;
        collectionId?: string | undefined;
        currencies?: Currency[] | undefined;
        normalizeRoyalties?: boolean | undefined;
        enableOnChainRoyalties: boolean;
        oracleEnabled: boolean;
        feesBps?: string[] | undefined;
        children: (props: {
            token?: {
                token?: {
                    contract: string;
                    tokenId: string;
                    name?: string | undefined;
                    description?: string | undefined;
                    image?: string | undefined;
                    imageSmall?: string | undefined;
                    imageLarge?: string | undefined;
                    metadata?: {
                        [key: string]: unknown;
                    } | undefined;
                    media?: string | undefined;
                    kind?: string | undefined;
                    isFlagged?: boolean | undefined;
                    lastFlagUpdate?: string | undefined;
                    lastFlagChange?: string | undefined;
                    supply?: number | undefined;
                    remainingSupply?: number | undefined;
                    rarity?: number | undefined;
                    rarityRank?: number | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        slug?: string | undefined;
                    } | undefined;
                    lastSale?: {
                        id?: string | undefined;
                        saleId?: string | undefined;
                        token?: {
                            contract?: string | undefined;
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                            collection?: {
                                id?: string | undefined;
                                name?: string | undefined;
                            } | undefined;
                        } | undefined;
                        orderSource?: string | undefined;
                        orderSide?: "ask" | "bid" | undefined;
                        orderKind?: string | undefined;
                        orderId?: string | undefined;
                        from?: string | undefined;
                        to?: string | undefined;
                        amount?: string | undefined;
                        fillSource?: string | undefined;
                        block?: number | undefined;
                        txHash?: string | undefined;
                        logIndex?: number | undefined;
                        batchIndex?: number | undefined;
                        timestamp?: number | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        washTradingScore?: number | undefined;
                        royaltyFeeBps?: number | undefined;
                        marketplaceFeeBps?: number | undefined;
                        paidFullRoyalty?: boolean | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            bps?: number | undefined;
                            recipient?: string | undefined;
                        }[] | undefined;
                        isDeleted?: boolean | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    } | undefined;
                    owner?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        kind?: string | undefined;
                        value: string;
                        tokenCount?: number | undefined;
                        onSaleCount?: number | undefined;
                        floorAskPrice?: number | undefined;
                        topBidValue?: number | undefined;
                        createdAt?: string | undefined;
                    }[] | undefined;
                } | undefined;
                market?: {
                    floorAsk?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        quantityFilled?: number | undefined;
                        quantityRemaining?: number | undefined;
                        dynamicPricing?: {
                            kind?: "dutch" | "pool" | undefined;
                            data?: {
                                [key: string]: unknown;
                            } | undefined;
                        } | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    topBid?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            recipient?: string | undefined;
                            bps?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            quantityAvailable: number;
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                createdAt?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                primaryContract?: string | undefined;
                tokenSetId?: string | undefined;
                royalties?: {
                    recipient?: string | undefined;
                    breakdown?: {
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                    bps?: number | undefined;
                } | undefined;
                allRoyalties?: {
                    [key: string]: unknown;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                } | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSaleChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                salesCount?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                collectionBidSupported?: boolean | undefined;
                ownerCount?: number | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    count?: number | undefined;
                }[] | undefined;
                contractKind?: string | undefined;
                mintedTimestamp?: number | undefined;
                mintStages?: {
                    stage: string;
                    tokenId?: string | undefined;
                    kind: string;
                    price: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    };
                    startTime?: number | undefined;
                    endTime?: number | undefined;
                    maxMintsPerWallet?: number | undefined;
                }[] | undefined;
            } | undefined;
            listStep: ListStep;
            usdPrice: number;
            expirationOptions: import("~/src/types/ExpirationOption").ExpirationOption[];
            expirationOption: import("~/src/types/ExpirationOption").ExpirationOption;
            marketplaces: Marketplace[];
            unapprovedMarketplaces: Marketplace[];
            isFetchingUnapprovedMarketplaces: boolean;
            isFetchingOnChainRoyalties: boolean;
            localMarketplace: Marketplace | null;
            listingData: ListingData[];
            transactionError?: Error | null | undefined;
            stepData: ListModalStepData | null;
            currencies: Currency[];
            currency: Currency;
            quantity: number;
            royaltyBps?: number | undefined;
            setListStep: React.Dispatch<React.SetStateAction<ListStep>>;
            toggleMarketplace: (marketplace: Marketplace) => void;
            setExpirationOption: React.Dispatch<React.SetStateAction<import("~/src/types/ExpirationOption").ExpirationOption>>;
            setMarketPrice: (price: number, market: Marketplace) => void;
            setCurrency: (currency: Currency) => void;
            setQuantity: React.Dispatch<React.SetStateAction<number>>;
            listToken: () => void;
        }) => React.ReactNode;
    }>;
}
export enum BidStep {
    SetPrice = 0,
    Offering = 1,
    Complete = 2
}
type Trait = {
    key: string;
    value: string;
    floorAskPrice?: number;
} | undefined;
type BidData = Parameters<ReservoirClientActions['placeBid']>['0']['bids'][0];
type BidModalStepData = {
    totalSteps: number;
    stepProgress: number;
    currentStep: Execute['steps'][0];
};
type BidCallbackData = {
    tokenId?: string;
    collectionId?: string;
    bidData: BidData | null;
};
declare const _ModalCopy2: {
    titleSetPrice: string;
    titleConfirm: string;
    titleComplete: string;
    ctaBidDisabled: string;
    ctaBid: string;
    ctaConvertManually: string;
    ctaConvertAutomatically: string;
    ctaAwaitingApproval: string;
    ctaEditOffer: string;
    ctaRetry: string;
    ctaViewOffers: string;
    ctaClose: string;
};
type _Props3 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    tokenId?: string;
    collectionId?: string;
    attribute?: Trait;
    normalizeRoyalties?: boolean;
    currencies?: Currency[];
    oracleEnabled?: boolean;
    copyOverrides?: Partial<typeof _ModalCopy2>;
    feesBps?: string[] | null;
    onViewOffers?: () => void;
    onClose?: (data: BidCallbackData, stepData: BidModalStepData | null, currentStep: BidStep) => void;
    onBidComplete?: (data: any) => void;
    onBidError?: (error: Error, data: any) => void;
};
export function BidModal({ openState, trigger, tokenId, collectionId, attribute, normalizeRoyalties, currencies, oracleEnabled, copyOverrides, feesBps, onViewOffers, onClose, onBidComplete, onBidError, }: _Props3): ReactElement;
export declare namespace BidModal {
    var Custom: React.FC<{
        open: boolean;
        tokenId?: string | undefined;
        collectionId?: string | undefined;
        attribute?: Trait;
        normalizeRoyalties?: boolean | undefined;
        currencies?: Currency[] | undefined;
        oracleEnabled: boolean;
        feesBps?: string[] | null | undefined;
        children: (props: {
            token?: {
                token?: {
                    contract: string;
                    tokenId: string;
                    name?: string | undefined;
                    description?: string | undefined;
                    image?: string | undefined;
                    imageSmall?: string | undefined;
                    imageLarge?: string | undefined;
                    metadata?: {
                        [key: string]: unknown;
                    } | undefined;
                    media?: string | undefined;
                    kind?: string | undefined;
                    isFlagged?: boolean | undefined;
                    lastFlagUpdate?: string | undefined;
                    lastFlagChange?: string | undefined;
                    supply?: number | undefined;
                    remainingSupply?: number | undefined;
                    rarity?: number | undefined;
                    rarityRank?: number | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        slug?: string | undefined;
                    } | undefined;
                    lastSale?: {
                        id?: string | undefined;
                        saleId?: string | undefined;
                        token?: {
                            contract?: string | undefined;
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                            collection?: {
                                id?: string | undefined;
                                name?: string | undefined;
                            } | undefined;
                        } | undefined;
                        orderSource?: string | undefined;
                        orderSide?: "ask" | "bid" | undefined;
                        orderKind?: string | undefined;
                        orderId?: string | undefined;
                        from?: string | undefined;
                        to?: string | undefined;
                        amount?: string | undefined;
                        fillSource?: string | undefined;
                        block?: number | undefined;
                        txHash?: string | undefined;
                        logIndex?: number | undefined;
                        batchIndex?: number | undefined;
                        timestamp?: number | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        washTradingScore?: number | undefined;
                        royaltyFeeBps?: number | undefined;
                        marketplaceFeeBps?: number | undefined;
                        paidFullRoyalty?: boolean | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            bps?: number | undefined;
                            recipient?: string | undefined;
                        }[] | undefined;
                        isDeleted?: boolean | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    } | undefined;
                    owner?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        kind?: string | undefined;
                        value: string;
                        tokenCount?: number | undefined;
                        onSaleCount?: number | undefined;
                        floorAskPrice?: number | undefined;
                        topBidValue?: number | undefined;
                        createdAt?: string | undefined;
                    }[] | undefined;
                } | undefined;
                market?: {
                    floorAsk?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        quantityFilled?: number | undefined;
                        quantityRemaining?: number | undefined;
                        dynamicPricing?: {
                            kind?: "dutch" | "pool" | undefined;
                            data?: {
                                [key: string]: unknown;
                            } | undefined;
                        } | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    topBid?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            recipient?: string | undefined;
                            bps?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                createdAt?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                primaryContract?: string | undefined;
                tokenSetId?: string | undefined;
                royalties?: {
                    recipient?: string | undefined;
                    breakdown?: {
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                    bps?: number | undefined;
                } | undefined;
                allRoyalties?: {
                    [key: string]: unknown;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                } | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSaleChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                salesCount?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                collectionBidSupported?: boolean | undefined;
                ownerCount?: number | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    count?: number | undefined;
                }[] | undefined;
                contractKind?: string | undefined;
                mintedTimestamp?: number | undefined;
                mintStages?: {
                    stage: string;
                    tokenId?: string | undefined;
                    kind: string;
                    price: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    };
                    startTime?: number | undefined;
                    endTime?: number | undefined;
                    maxMintsPerWallet?: number | undefined;
                }[] | undefined;
            } | undefined;
            attributes?: import("~/src/modal/bid/BidModalRenderer").Traits;
            bidAmountPerUnit: string;
            totalBidAmount: number;
            totalBidAmountUsd: number;
            quantity: number;
            setQuantity: React.Dispatch<React.SetStateAction<number>>;
            bidData: {
                token?: string | undefined;
                tokenSetId?: string | undefined;
                collection?: string | undefined;
                attributeKey?: string | undefined;
                attributeValue?: string | undefined;
                quantity?: number | undefined;
                weiPrice: string;
                orderKind?: "flow" | "x2y2" | "blur" | "looks-rare" | "universe" | "looks-rare-v2" | "zeroex-v4" | "seaport" | "seaport-v1.4" | "seaport-v1.5" | "alienswap" | undefined;
                options?: {
                    "seaport-v1.4"?: {
                        conduitKey?: string | undefined;
                        useOffChainCancellation: boolean;
                        replaceOrderId?: string | undefined;
                    } | undefined;
                    "seaport-v1.5"?: {
                        conduitKey?: string | undefined;
                        useOffChainCancellation: boolean;
                        replaceOrderId?: string | undefined;
                    } | undefined;
                } | undefined;
                orderbook?: "reservoir" | "flow" | "x2y2" | "opensea" | "blur" | "looks-rare" | "universe" | undefined;
                orderbookApiKey?: string | undefined;
                automatedRoyalties?: boolean | undefined;
                royaltyBps?: number | undefined;
                fees?: string[] | undefined;
                excludeFlaggedTokens?: boolean | undefined;
                listingTime?: string | undefined;
                expirationTime?: string | undefined;
                salt?: string | undefined;
                nonce?: string | undefined;
                currency?: string | undefined;
            } | null;
            bidStep: BidStep;
            hasEnoughNativeCurrency: boolean;
            hasEnoughWrappedCurrency: boolean;
            amountToWrap: string;
            usdPrice: number | null;
            balance?: import("~/src/modal/bid/BidModalRenderer").FetchBalanceResult | undefined;
            wrappedBalance?: import("~/src/modal/bid/BidModalRenderer").FetchBalanceResult | undefined;
            wrappedContractName: string;
            wrappedContractAddress: string;
            canAutomaticallyConvert: boolean;
            convertLink: string;
            transactionError?: Error | null | undefined;
            expirationOptions: import("~/src/types/ExpirationOption").ExpirationOption[];
            expirationOption: import("~/src/types/ExpirationOption").ExpirationOption;
            stepData: BidModalStepData | null;
            currencies: Currency[];
            currency: Currency;
            feeBps?: number | undefined;
            setCurrency: (currency: Currency) => void;
            setBidStep: React.Dispatch<React.SetStateAction<BidStep>>;
            setBidAmountPerUnit: React.Dispatch<React.SetStateAction<string>>;
            setExpirationOption: React.Dispatch<React.SetStateAction<import("~/src/types/ExpirationOption").ExpirationOption>>;
            setTrait: React.Dispatch<React.SetStateAction<Trait>>;
            trait: Trait;
            placeBid: (options?: {
                quantity?: number | undefined;
            } | undefined) => void;
        }) => React.ReactNode;
    }>;
}
export enum AcceptBidStep {
    Checkout = 0,
    Auth = 1,
    ApproveMarketplace = 2,
    Finalizing = 3,
    Complete = 4,
    Unavailable = 5
}
type AcceptBidTokenData = {
    tokenId: string;
    collectionId: string;
    bidIds?: string[];
    bidsPath?: NonNullable<SellPath>;
};
type EnhancedAcceptBidTokenData = Required<AcceptBidTokenData> & {
    tokenData?: ReturnType<typeof useTokens>['data'][0];
};
type AcceptBidStepData = {
    totalSteps: number;
    steps: Execute['steps'];
    currentStep: Execute['steps'][0];
    currentStepItem?: NonNullable<Execute['steps'][0]['items']>[0];
};
type _BidData1 = {
    tokens?: EnhancedAcceptBidTokenData[];
    bids?: NonNullable<ReturnType<typeof useBids>['data']>;
    txHash?: string;
    maker?: string;
};
declare const _ModalCopy3: {
    title: string;
    ctaAccept: string;
    ctaAwaitingApproval: string;
    ctaClose: string;
    ctaDone: string;
};
type _Props4 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    tokens: AcceptBidTokenData[];
    normalizeRoyalties?: boolean;
    copyOverrides?: Partial<typeof _ModalCopy3>;
    onBidAccepted?: (data: _BidData1) => void;
    onClose?: (data: _BidData1, stepData: AcceptBidStepData | null, currentStep: AcceptBidStep) => void;
    onBidAcceptError?: (error: Error, data: _BidData1) => void;
    onCurrentStepUpdate?: (data: AcceptBidStepData) => void;
};
export function AcceptBidModal({ openState, trigger, tokens, normalizeRoyalties, copyOverrides, onBidAccepted, onClose, onBidAcceptError, onCurrentStepUpdate, }: _Props4): ReactElement;
export declare namespace AcceptBidModal {
    var Custom: React.FC<{
        open: boolean;
        tokens: AcceptBidTokenData[];
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            loading: boolean;
            tokensData: EnhancedAcceptBidTokenData[];
            acceptBidStep: AcceptBidStep;
            transactionError?: Error | null | undefined;
            txHash: string | null;
            usdPrices: Record<string, {
                price: number;
                symbol: string;
            }>;
            prices: import("~/src/modal/acceptBid/AcceptBidModalRenderer").AcceptBidPrice[];
            address?: string | undefined;
            blockExplorerBaseUrl: string;
            stepData: AcceptBidStepData | null;
            acceptBid: () => void;
            setAcceptBidStep: React.Dispatch<React.SetStateAction<AcceptBidStep>>;
        }) => React.ReactNode;
    }>;
}
export enum CancelBidStep {
    Cancel = 0,
    Approving = 1,
    Complete = 2
}
declare const _ModalCopy4: {
    title: string;
    ctaCancel: string;
    ctaAwaitingApproval: string;
    ctaAwaitingValidation: string;
    ctaClose: string;
};
type _Props5 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    bidId?: string;
    normalizeRoyalties?: boolean;
    copyOverrides?: Partial<typeof _ModalCopy4>;
    onClose?: (data: any, currentStep: CancelBidStep) => void;
    onCancelComplete?: (data: any) => void;
    onCancelError?: (error: Error, data: any) => void;
};
export function CancelBidModal({ openState, bidId, trigger, normalizeRoyalties, copyOverrides, onClose, onCancelComplete, onCancelError, }: _Props5): ReactElement;
export declare namespace CancelBidModal {
    var Custom: React.FC<{
        open: boolean;
        bidId?: string | undefined;
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            loading: boolean;
            bid?: {
                id: string;
                kind: string;
                side: "buy" | "sell";
                status?: string | undefined;
                tokenSetId: string;
                tokenSetSchemaHash: string;
                contract?: string | undefined;
                maker: string;
                taker: string;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                validFrom: number;
                validUntil: number;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                dynamicPricing?: {
                    kind?: "dutch" | undefined;
                    data?: {
                        price?: {
                            start?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                            end?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        time?: {
                            start?: number | undefined;
                            end?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBps?: number | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                expiration: number;
                isReservoir?: boolean | undefined;
                isDynamic?: boolean | undefined;
                createdAt: string;
                updatedAt: string;
                originatedAt?: string | undefined;
                rawData?: {
                    [key: string]: unknown;
                } | undefined;
                isNativeOffChainCancellable?: boolean | undefined;
                depth?: {
                    price?: number | undefined;
                    quantity?: number | undefined;
                }[] | undefined;
            } | undefined;
            tokenId?: string | undefined;
            cancelStep: CancelStep;
            transactionError?: Error | null | undefined;
            totalUsd: number;
            usdPrice: number;
            blockExplorerBaseUrl: string;
            steps: {
                error?: string | undefined;
                errorData?: any;
                action: string;
                description: string;
                kind: "transaction" | "signature";
                id: string;
                items?: {
                    status: "complete" | "incomplete";
                    data?: any;
                    orderIndexes?: number[] | undefined;
                    orderIds?: string[] | undefined;
                    error?: string | undefined;
                    txHash?: string | undefined;
                    orderData?: {
                        crossPostingOrderId?: string | undefined;
                        orderId: string;
                        orderIndex: string;
                    }[] | undefined;
                    salesData?: {
                        id?: string | undefined;
                        saleId?: string | undefined;
                        token?: {
                            contract?: string | undefined;
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                            collection?: {
                                id?: string | undefined;
                                name?: string | undefined;
                            } | undefined;
                        } | undefined;
                        orderSource?: string | undefined;
                        orderSide?: "ask" | "bid" | undefined;
                        orderKind?: string | undefined;
                        orderId?: string | undefined;
                        from?: string | undefined;
                        to?: string | undefined;
                        amount?: string | undefined;
                        fillSource?: string | undefined;
                        block?: number | undefined;
                        txHash?: string | undefined;
                        logIndex?: number | undefined;
                        batchIndex?: number | undefined;
                        timestamp?: number | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        washTradingScore?: number | undefined;
                        royaltyFeeBps?: number | undefined;
                        marketplaceFeeBps?: number | undefined;
                        paidFullRoyalty?: boolean | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            bps?: number | undefined;
                            recipient?: string | undefined;
                        }[] | undefined;
                        isDeleted?: boolean | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | null;
            stepData: import("~/src/modal/cancelBid/CancelBidModalRenderer").CancelBidStepData | null;
            setCancelStep: React.Dispatch<React.SetStateAction<CancelStep>>;
            cancelOrder: () => void;
        }) => React.ReactNode;
    }>;
}
export enum CancelListingStep {
    Cancel = 0,
    Approving = 1,
    Complete = 2
}
declare const _ModalCopy5: {
    title: string;
    ctaCancel: string;
    ctaAwaitingApproval: string;
    ctaAwaitingValidation: string;
    ctaClose: string;
};
type _Props6 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    listingId?: string;
    normalizeRoyalties?: boolean;
    copyOverrides?: Partial<typeof _ModalCopy5>;
    onClose?: (data: any, currentStep: CancelListingStep) => void;
    onCancelComplete?: (data: any) => void;
    onCancelError?: (error: Error, data: any) => void;
};
export function CancelListingModal({ openState, listingId, trigger, normalizeRoyalties, copyOverrides, onClose, onCancelComplete, onCancelError, }: _Props6): ReactElement;
export declare namespace CancelListingModal {
    var Custom: React.FC<{
        open: boolean;
        listingId?: string | undefined;
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            loading: boolean;
            listing?: {
                id: string;
                kind: string;
                side: "buy" | "sell";
                status?: string | undefined;
                tokenSetId: string;
                tokenSetSchemaHash: string;
                contract?: string | undefined;
                maker: string;
                taker: string;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                validFrom: number;
                validUntil: number;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                dynamicPricing?: {
                    kind?: "dutch" | undefined;
                    data?: {
                        price?: {
                            start?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                            end?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        time?: {
                            start?: number | undefined;
                            end?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBps?: number | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                expiration: number;
                isReservoir?: boolean | undefined;
                isDynamic?: boolean | undefined;
                createdAt: string;
                updatedAt: string;
                originatedAt?: string | undefined;
                rawData?: {
                    [key: string]: unknown;
                } | undefined;
                isNativeOffChainCancellable?: boolean | undefined;
                depth?: {
                    price?: number | undefined;
                    quantity?: number | undefined;
                }[] | undefined;
            } | undefined;
            tokenId?: string | undefined;
            contract?: string | undefined;
            cancelStep: CancelStep;
            transactionError?: Error | null | undefined;
            totalUsd: number;
            usdPrice: number;
            blockExplorerBaseUrl: string;
            steps: {
                error?: string | undefined;
                errorData?: any;
                action: string;
                description: string;
                kind: "transaction" | "signature";
                id: string;
                items?: {
                    status: "complete" | "incomplete";
                    data?: any;
                    orderIndexes?: number[] | undefined;
                    orderIds?: string[] | undefined;
                    error?: string | undefined;
                    txHash?: string | undefined;
                    orderData?: {
                        crossPostingOrderId?: string | undefined;
                        orderId: string;
                        orderIndex: string;
                    }[] | undefined;
                    salesData?: {
                        id?: string | undefined;
                        saleId?: string | undefined;
                        token?: {
                            contract?: string | undefined;
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                            collection?: {
                                id?: string | undefined;
                                name?: string | undefined;
                            } | undefined;
                        } | undefined;
                        orderSource?: string | undefined;
                        orderSide?: "ask" | "bid" | undefined;
                        orderKind?: string | undefined;
                        orderId?: string | undefined;
                        from?: string | undefined;
                        to?: string | undefined;
                        amount?: string | undefined;
                        fillSource?: string | undefined;
                        block?: number | undefined;
                        txHash?: string | undefined;
                        logIndex?: number | undefined;
                        batchIndex?: number | undefined;
                        timestamp?: number | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        washTradingScore?: number | undefined;
                        royaltyFeeBps?: number | undefined;
                        marketplaceFeeBps?: number | undefined;
                        paidFullRoyalty?: boolean | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            bps?: number | undefined;
                            recipient?: string | undefined;
                        }[] | undefined;
                        isDeleted?: boolean | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | null;
            stepData: import("~/src/modal/cancelListing/CancelListingModalRenderer").CancelListingStepData | null;
            setCancelStep: React.Dispatch<React.SetStateAction<CancelStep>>;
            cancelOrder: () => void;
        }) => React.ReactNode;
    }>;
}
export enum EditBidStep {
    Edit = 0,
    Approving = 1,
    Complete = 2
}
declare const _ModalCopy6: {
    title: string;
    ctaClose: string;
    ctaConfirm: string;
    ctaConvertManually: string;
    ctaConvertAutomatically: string;
    ctaAwaitingApproval: string;
    ctaAwaitingValidation: string;
};
type _Props7 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    bidId?: string;
    tokenId?: string;
    collectionId?: string;
    normalizeRoyalties?: boolean;
    enableOnChainRoyalties?: boolean;
    copyOverrides?: Partial<typeof _ModalCopy6>;
    onClose?: (data: any, currentStep: EditBidStep) => void;
    onEditBidComplete?: (data: any) => void;
    onEditBidError?: (error: Error, data: any) => void;
};
export function EditBidModal({ openState, bidId, tokenId, collectionId, trigger, normalizeRoyalties, copyOverrides, onClose, onEditBidComplete, onEditBidError, }: _Props7): ReactElement;
export declare namespace EditBidModal {
    var Custom: React.FC<{
        open: boolean;
        bidId?: string | undefined;
        tokenId?: string | undefined;
        attribute?: import("~/src/modal/bid/BidModalRenderer").Trait;
        collectionId?: string | undefined;
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            loading: boolean;
            bid?: {
                id: string;
                kind: string;
                side: "buy" | "sell";
                status?: string | undefined;
                tokenSetId: string;
                tokenSetSchemaHash: string;
                contract?: string | undefined;
                maker: string;
                taker: string;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                validFrom: number;
                validUntil: number;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                dynamicPricing?: {
                    kind?: "dutch" | undefined;
                    data?: {
                        price?: {
                            start?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                            end?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        time?: {
                            start?: number | undefined;
                            end?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBps?: number | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                expiration: number;
                isReservoir?: boolean | undefined;
                isDynamic?: boolean | undefined;
                createdAt: string;
                updatedAt: string;
                originatedAt?: string | undefined;
                rawData?: {
                    [key: string]: unknown;
                } | undefined;
                isNativeOffChainCancellable?: boolean | undefined;
                depth?: {
                    price?: number | undefined;
                    quantity?: number | undefined;
                }[] | undefined;
            } | undefined;
            attributes?: import("~/src/modal/bid/BidModalRenderer").Traits;
            trait: import("~/src/modal/bid/BidModalRenderer").Trait;
            tokenId?: string | undefined;
            contract?: string | undefined;
            isOracleOrder: boolean;
            isTokenBid: boolean;
            bidAmount: string;
            bidAmountUsd: number;
            token?: {
                token?: {
                    contract: string;
                    tokenId: string;
                    name?: string | undefined;
                    description?: string | undefined;
                    image?: string | undefined;
                    imageSmall?: string | undefined;
                    imageLarge?: string | undefined;
                    metadata?: {
                        [key: string]: unknown;
                    } | undefined;
                    media?: string | undefined;
                    kind?: string | undefined;
                    isFlagged?: boolean | undefined;
                    lastFlagUpdate?: string | undefined;
                    lastFlagChange?: string | undefined;
                    supply?: number | undefined;
                    remainingSupply?: number | undefined;
                    rarity?: number | undefined;
                    rarityRank?: number | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        slug?: string | undefined;
                    } | undefined;
                    lastSale?: {
                        id?: string | undefined;
                        saleId?: string | undefined;
                        token?: {
                            contract?: string | undefined;
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                            collection?: {
                                id?: string | undefined;
                                name?: string | undefined;
                            } | undefined;
                        } | undefined;
                        orderSource?: string | undefined;
                        orderSide?: "ask" | "bid" | undefined;
                        orderKind?: string | undefined;
                        orderId?: string | undefined;
                        from?: string | undefined;
                        to?: string | undefined;
                        amount?: string | undefined;
                        fillSource?: string | undefined;
                        block?: number | undefined;
                        txHash?: string | undefined;
                        logIndex?: number | undefined;
                        batchIndex?: number | undefined;
                        timestamp?: number | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        washTradingScore?: number | undefined;
                        royaltyFeeBps?: number | undefined;
                        marketplaceFeeBps?: number | undefined;
                        paidFullRoyalty?: boolean | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            bps?: number | undefined;
                            recipient?: string | undefined;
                        }[] | undefined;
                        isDeleted?: boolean | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    } | undefined;
                    owner?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        kind?: string | undefined;
                        value: string;
                        tokenCount?: number | undefined;
                        onSaleCount?: number | undefined;
                        floorAskPrice?: number | undefined;
                        topBidValue?: number | undefined;
                        createdAt?: string | undefined;
                    }[] | undefined;
                } | undefined;
                market?: {
                    floorAsk?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        quantityFilled?: number | undefined;
                        quantityRemaining?: number | undefined;
                        dynamicPricing?: {
                            kind?: "dutch" | "pool" | undefined;
                            data?: {
                                [key: string]: unknown;
                            } | undefined;
                        } | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    topBid?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            recipient?: string | undefined;
                            bps?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            currency: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                createdAt?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                primaryContract?: string | undefined;
                tokenSetId?: string | undefined;
                royalties?: {
                    recipient?: string | undefined;
                    breakdown?: {
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                    bps?: number | undefined;
                } | undefined;
                allRoyalties?: {
                    [key: string]: unknown;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                } | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSaleChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                salesCount?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                collectionBidSupported?: boolean | undefined;
                ownerCount?: number | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    count?: number | undefined;
                }[] | undefined;
                contractKind?: string | undefined;
                mintedTimestamp?: number | undefined;
                mintStages?: {
                    stage: string;
                    tokenId?: string | undefined;
                    kind: string;
                    price: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    };
                    startTime?: number | undefined;
                    endTime?: number | undefined;
                    maxMintsPerWallet?: number | undefined;
                }[] | undefined;
            } | undefined;
            editBidStep: EditBidStep;
            transactionError?: Error | null | undefined;
            hasEnoughNativeCurrency: boolean;
            hasEnoughWrappedCurrency: boolean;
            balance?: import("~/src/modal/bid/BidModalRenderer").FetchBalanceResult | undefined;
            wrappedBalance?: import("~/src/modal/bid/BidModalRenderer").FetchBalanceResult | undefined;
            wrappedContractName: string;
            wrappedContractAddress: string;
            amountToWrap: string;
            canAutomaticallyConvert: boolean;
            convertLink: string;
            royaltyBps?: number | undefined;
            expirationOptions: import("~/src/types/ExpirationOption").ExpirationOption[];
            expirationOption: import("~/src/types/ExpirationOption").ExpirationOption;
            usdPrice: number;
            steps: {
                error?: string | undefined;
                errorData?: any;
                action: string;
                description: string;
                kind: "transaction" | "signature";
                id: string;
                items?: {
                    status: "complete" | "incomplete";
                    data?: any;
                    orderIndexes?: number[] | undefined;
                    orderIds?: string[] | undefined;
                    error?: string | undefined;
                    txHash?: string | undefined;
                    orderData?: {
                        crossPostingOrderId?: string | undefined;
                        orderId: string;
                        orderIndex: string;
                    }[] | undefined;
                    salesData?: {
                        id?: string | undefined;
                        saleId?: string | undefined;
                        token?: {
                            contract?: string | undefined;
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                            collection?: {
                                id?: string | undefined;
                                name?: string | undefined;
                            } | undefined;
                        } | undefined;
                        orderSource?: string | undefined;
                        orderSide?: "ask" | "bid" | undefined;
                        orderKind?: string | undefined;
                        orderId?: string | undefined;
                        from?: string | undefined;
                        to?: string | undefined;
                        amount?: string | undefined;
                        fillSource?: string | undefined;
                        block?: number | undefined;
                        txHash?: string | undefined;
                        logIndex?: number | undefined;
                        batchIndex?: number | undefined;
                        timestamp?: number | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        washTradingScore?: number | undefined;
                        royaltyFeeBps?: number | undefined;
                        marketplaceFeeBps?: number | undefined;
                        paidFullRoyalty?: boolean | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            bps?: number | undefined;
                            recipient?: string | undefined;
                        }[] | undefined;
                        isDeleted?: boolean | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | null;
            stepData: import("~/src/modal/editBid/EditBidModalRenderer").EditBidStepData | null;
            setTrait: React.Dispatch<React.SetStateAction<import("~/src/modal/bid/BidModalRenderer").Trait>>;
            setBidAmount: React.Dispatch<React.SetStateAction<string>>;
            setExpirationOption: React.Dispatch<React.SetStateAction<import("~/src/types/ExpirationOption").ExpirationOption>>;
            setEditBidStep: React.Dispatch<React.SetStateAction<EditBidStep>>;
            editBid: () => void;
        }) => React.ReactNode;
    }>;
}
export enum EditListingStep {
    Edit = 0,
    Approving = 1,
    Complete = 2
}
declare const _ModalCopy7: {
    title: string;
    ctaClose: string;
    ctaConfirm: string;
    ctaConvertManually: string;
    ctaConvertAutomatically: string;
    ctaAwaitingApproval: string;
    ctaAwaitingValidation: string;
};
type _Props8 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    listingId?: string;
    tokenId?: string;
    collectionId?: string;
    normalizeRoyalties?: boolean;
    enableOnChainRoyalties?: boolean;
    copyOverrides?: Partial<typeof _ModalCopy7>;
    onClose?: (data: any, currentStep: EditListingStep) => void;
    onEditListingComplete?: (data: any) => void;
    onEditListingError?: (error: Error, data: any) => void;
};
export function EditListingModal({ openState, listingId, tokenId, collectionId, trigger, normalizeRoyalties, enableOnChainRoyalties, copyOverrides, onClose, onEditListingComplete, onEditListingError, }: _Props8): ReactElement;
export declare namespace EditListingModal {
    var Custom: React.FC<{
        open: boolean;
        listingId?: string | undefined;
        tokenId?: string | undefined;
        collectionId?: string | undefined;
        normalizeRoyalties?: boolean | undefined;
        enableOnChainRoyalties: boolean;
        children: (props: {
            loading: boolean;
            listing?: {
                id: string;
                kind: string;
                side: "buy" | "sell";
                status?: string | undefined;
                tokenSetId: string;
                tokenSetSchemaHash: string;
                contract?: string | undefined;
                maker: string;
                taker: string;
                price?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                validFrom: number;
                validUntil: number;
                quantityFilled?: number | undefined;
                quantityRemaining?: number | undefined;
                dynamicPricing?: {
                    kind?: "dutch" | undefined;
                    data?: {
                        price?: {
                            start?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                            end?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        time?: {
                            start?: number | undefined;
                            end?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                criteria?: {
                    kind?: "token" | undefined;
                    data?: {
                        token?: {
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                        collection?: {
                            id?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                source?: {
                    [key: string]: unknown;
                } | undefined;
                feeBps?: number | undefined;
                feeBreakdown?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                }[] | undefined;
                expiration: number;
                isReservoir?: boolean | undefined;
                isDynamic?: boolean | undefined;
                createdAt: string;
                updatedAt: string;
                originatedAt?: string | undefined;
                rawData?: {
                    [key: string]: unknown;
                } | undefined;
                isNativeOffChainCancellable?: boolean | undefined;
                depth?: {
                    price?: number | undefined;
                    quantity?: number | undefined;
                }[] | undefined;
            } | undefined;
            tokenId?: string | undefined;
            contract?: string | undefined;
            isOracleOrder: boolean;
            price: number | undefined;
            token?: {
                token?: {
                    contract: string;
                    tokenId: string;
                    name?: string | undefined;
                    description?: string | undefined;
                    image?: string | undefined;
                    imageSmall?: string | undefined;
                    imageLarge?: string | undefined;
                    metadata?: {
                        [key: string]: unknown;
                    } | undefined;
                    media?: string | undefined;
                    kind?: string | undefined;
                    isFlagged?: boolean | undefined;
                    lastFlagUpdate?: string | undefined;
                    lastFlagChange?: string | undefined;
                    supply?: number | undefined;
                    remainingSupply?: number | undefined;
                    rarity?: number | undefined;
                    rarityRank?: number | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        slug?: string | undefined;
                    } | undefined;
                    lastSale?: {
                        id?: string | undefined;
                        saleId?: string | undefined;
                        token?: {
                            contract?: string | undefined;
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                            collection?: {
                                id?: string | undefined;
                                name?: string | undefined;
                            } | undefined;
                        } | undefined;
                        orderSource?: string | undefined;
                        orderSide?: "ask" | "bid" | undefined;
                        orderKind?: string | undefined;
                        orderId?: string | undefined;
                        from?: string | undefined;
                        to?: string | undefined;
                        amount?: string | undefined;
                        fillSource?: string | undefined;
                        block?: number | undefined;
                        txHash?: string | undefined;
                        logIndex?: number | undefined;
                        batchIndex?: number | undefined;
                        timestamp?: number | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        washTradingScore?: number | undefined;
                        royaltyFeeBps?: number | undefined;
                        marketplaceFeeBps?: number | undefined;
                        paidFullRoyalty?: boolean | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            bps?: number | undefined;
                            recipient?: string | undefined;
                        }[] | undefined;
                        isDeleted?: boolean | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    } | undefined;
                    owner?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        kind?: string | undefined;
                        value: string;
                        tokenCount?: number | undefined;
                        onSaleCount?: number | undefined;
                        floorAskPrice?: number | undefined;
                        topBidValue?: number | undefined;
                        createdAt?: string | undefined;
                    }[] | undefined;
                } | undefined;
                market?: {
                    floorAsk?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        quantityFilled?: number | undefined;
                        quantityRemaining?: number | undefined;
                        dynamicPricing?: {
                            kind?: "dutch" | "pool" | undefined;
                            data?: {
                                [key: string]: unknown;
                            } | undefined;
                        } | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    topBid?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            recipient?: string | undefined;
                            bps?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            currency: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            quantityAvailable: number;
            collection?: {
                id?: string | undefined;
                slug?: string | undefined;
                createdAt?: string | undefined;
                name?: string | undefined;
                image?: string | undefined;
                banner?: string | undefined;
                discordUrl?: string | undefined;
                externalUrl?: string | undefined;
                twitterUsername?: string | undefined;
                openseaVerificationStatus?: string | undefined;
                description?: string | undefined;
                sampleImages?: string[] | undefined;
                tokenCount?: string | undefined;
                onSaleCount?: string | undefined;
                primaryContract?: string | undefined;
                tokenSetId?: string | undefined;
                royalties?: {
                    recipient?: string | undefined;
                    breakdown?: {
                        recipient?: string | undefined;
                        bps?: number | undefined;
                    }[] | undefined;
                    bps?: number | undefined;
                } | undefined;
                allRoyalties?: {
                    [key: string]: unknown;
                } | undefined;
                lastBuy?: {
                    value?: number | undefined;
                    timestamp?: number | undefined;
                } | undefined;
                floorAsk?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                    token?: {
                        contract?: string | undefined;
                        tokenId?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                    } | undefined;
                } | undefined;
                topBid?: {
                    id?: string | undefined;
                    sourceDomain?: string | undefined;
                    price?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    maker?: string | undefined;
                    validFrom?: number | undefined;
                    validUntil?: number | undefined;
                } | undefined;
                rank?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volume?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                volumeChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSale?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                floorSaleChange?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                } | undefined;
                salesCount?: {
                    "1day"?: number | undefined;
                    "7day"?: number | undefined;
                    "30day"?: number | undefined;
                    allTime?: number | undefined;
                } | undefined;
                collectionBidSupported?: boolean | undefined;
                ownerCount?: number | undefined;
                attributes?: {
                    key?: string | undefined;
                    kind?: string | undefined;
                    count?: number | undefined;
                }[] | undefined;
                contractKind?: string | undefined;
                mintedTimestamp?: number | undefined;
                mintStages?: {
                    stage: string;
                    tokenId?: string | undefined;
                    kind: string;
                    price: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    };
                    startTime?: number | undefined;
                    endTime?: number | undefined;
                    maxMintsPerWallet?: number | undefined;
                }[] | undefined;
            } | undefined;
            quantity: number;
            editListingStep: EditListingStep;
            transactionError?: Error | null | undefined;
            totalUsd: number;
            royaltyBps?: number | undefined;
            expirationOptions: import("~/src/types/ExpirationOption").ExpirationOption[];
            expirationOption: import("~/src/types/ExpirationOption").ExpirationOption;
            usdPrice: number;
            steps: {
                error?: string | undefined;
                errorData?: any;
                action: string;
                description: string;
                kind: "transaction" | "signature";
                id: string;
                items?: {
                    status: "complete" | "incomplete";
                    data?: any;
                    orderIndexes?: number[] | undefined;
                    orderIds?: string[] | undefined;
                    error?: string | undefined;
                    txHash?: string | undefined;
                    orderData?: {
                        crossPostingOrderId?: string | undefined;
                        orderId: string;
                        orderIndex: string;
                    }[] | undefined;
                    salesData?: {
                        id?: string | undefined;
                        saleId?: string | undefined;
                        token?: {
                            contract?: string | undefined;
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                            collection?: {
                                id?: string | undefined;
                                name?: string | undefined;
                            } | undefined;
                        } | undefined;
                        orderSource?: string | undefined;
                        orderSide?: "ask" | "bid" | undefined;
                        orderKind?: string | undefined;
                        orderId?: string | undefined;
                        from?: string | undefined;
                        to?: string | undefined;
                        amount?: string | undefined;
                        fillSource?: string | undefined;
                        block?: number | undefined;
                        txHash?: string | undefined;
                        logIndex?: number | undefined;
                        batchIndex?: number | undefined;
                        timestamp?: number | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        washTradingScore?: number | undefined;
                        royaltyFeeBps?: number | undefined;
                        marketplaceFeeBps?: number | undefined;
                        paidFullRoyalty?: boolean | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            bps?: number | undefined;
                            recipient?: string | undefined;
                        }[] | undefined;
                        isDeleted?: boolean | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | null;
            stepData: import("~/src/modal/editListing/EditListingModalRenderer").EditListingStepData | null;
            setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
            setQuantity: React.Dispatch<React.SetStateAction<number>>;
            setExpirationOption: React.Dispatch<React.SetStateAction<import("~/src/types/ExpirationOption").ExpirationOption>>;
            setEditListingStep: React.Dispatch<React.SetStateAction<EditListingStep>>;
            editListing: () => void;
        }) => React.ReactNode;
    }>;
}
export enum SweepStep {
    Idle = 0,
    Approving = 1,
    Finalizing = 2,
    Complete = 3
}
type SweepModalStepData = {
    totalSteps: number;
    stepProgress: number;
    currentStep: Execute['steps'][0];
    currentStepItem: NonNullable<Execute['steps'][0]['items']>[0];
    path: Execute['path'];
};
type SweepCallbackData = {
    collectionId?: string;
    maker?: string;
    stepData: SweepModalStepData | null;
};
declare const _ModalCopy8: {
    title: string;
    ctaClose: string;
    ctaBuy: string;
    ctaBuyDisabled: string;
    ctaInsufficientFunds: string;
    ctaAwaitingApproval: string;
};
type _Props9 = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    collectionId?: string;
    feesOnTopBps?: string[] | null;
    feesOnTopFixed?: string[] | null;
    normalizeRoyalties?: boolean;
    copyOverrides?: Partial<typeof _ModalCopy8>;
    onSweepComplete?: (data: SweepCallbackData) => void;
    onSweepError?: (error: Error, data: SweepCallbackData) => void;
    onClose?: (data: SweepCallbackData, currentStep: SweepStep) => void;
};
export function SweepModal({ openState, trigger, collectionId, feesOnTopBps, feesOnTopFixed, normalizeRoyalties, copyOverrides, onSweepComplete, onSweepError, onClose, }: _Props9): ReactElement;
export declare namespace SweepModal {
    var Custom: React.FC<{
        open: boolean;
        collectionId?: string | undefined;
        feesOnTopBps?: string[] | null | undefined;
        feesOnTopFixed?: string[] | null | undefined;
        normalizeRoyalties?: boolean | undefined;
        children: (props: {
            loading: boolean;
            selectedTokens: {
                orderId?: string | undefined;
                contract?: string | undefined;
                tokenId?: string | undefined;
                quantity?: number | undefined;
                source?: string | undefined;
                currency?: string | undefined;
                currencySymbol?: string | undefined;
                currencyDecimals?: number | undefined;
                quote?: number | undefined;
                rawQuote?: string | undefined;
                buyInQuote?: number | undefined;
                buyInRawQuote?: string | undefined;
                totalPrice?: number | undefined;
                totalRawPrice?: string | undefined;
                builtInFees?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                    amount?: number | undefined;
                    rawAmount?: string | undefined;
                }[] | undefined;
                feesOnTop?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                    amount?: number | undefined;
                    rawAmount?: string | undefined;
                }[] | undefined;
            }[];
            setSelectedTokens: React.Dispatch<React.SetStateAction<{
                orderId?: string | undefined;
                contract?: string | undefined;
                tokenId?: string | undefined;
                quantity?: number | undefined;
                source?: string | undefined;
                currency?: string | undefined;
                currencySymbol?: string | undefined;
                currencyDecimals?: number | undefined;
                quote?: number | undefined;
                rawQuote?: string | undefined;
                buyInQuote?: number | undefined;
                buyInRawQuote?: string | undefined;
                totalPrice?: number | undefined;
                totalRawPrice?: string | undefined;
                builtInFees?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                    amount?: number | undefined;
                    rawAmount?: string | undefined;
                }[] | undefined;
                feesOnTop?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                    amount?: number | undefined;
                    rawAmount?: string | undefined;
                }[] | undefined;
            }[]>>;
            itemAmount?: number | undefined;
            setItemAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
            ethAmount?: number | undefined;
            setEthAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
            isItemsToggled: boolean;
            setIsItemsToggled: React.Dispatch<React.SetStateAction<boolean>>;
            maxInput: number;
            setMaxInput: React.Dispatch<React.SetStateAction<number>>;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
                address: `0x${string}`;
                chainId: number;
            };
            chainCurrency: {
                name: string;
                symbol: string;
                decimals: number;
                address: `0x${string}`;
                chainId: number;
            };
            isChainCurrency: boolean;
            total: number;
            totalUsd: number;
            feeOnTop: number;
            feeUsd: number;
            usdPrice: number;
            currentChain: import("~/../sdk/dist").ReservoirChain | null | undefined;
            availableTokens: {
                orderId?: string | undefined;
                contract?: string | undefined;
                tokenId?: string | undefined;
                quantity?: number | undefined;
                source?: string | undefined;
                currency?: string | undefined;
                currencySymbol?: string | undefined;
                currencyDecimals?: number | undefined;
                quote?: number | undefined;
                rawQuote?: string | undefined;
                buyInQuote?: number | undefined;
                buyInRawQuote?: string | undefined;
                totalPrice?: number | undefined;
                totalRawPrice?: string | undefined;
                builtInFees?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                    amount?: number | undefined;
                    rawAmount?: string | undefined;
                }[] | undefined;
                feesOnTop?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                    amount?: number | undefined;
                    rawAmount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            address?: string | undefined;
            tokens: {
                orderId?: string | undefined;
                contract?: string | undefined;
                tokenId?: string | undefined;
                quantity?: number | undefined;
                source?: string | undefined;
                currency?: string | undefined;
                currencySymbol?: string | undefined;
                currencyDecimals?: number | undefined;
                quote?: number | undefined;
                rawQuote?: string | undefined;
                buyInQuote?: number | undefined;
                buyInRawQuote?: string | undefined;
                totalPrice?: number | undefined;
                totalRawPrice?: string | undefined;
                builtInFees?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                    amount?: number | undefined;
                    rawAmount?: string | undefined;
                }[] | undefined;
                feesOnTop?: {
                    kind?: string | undefined;
                    recipient?: string | undefined;
                    bps?: number | undefined;
                    amount?: number | undefined;
                    rawAmount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            balance?: bigint | undefined;
            hasEnoughCurrency: boolean;
            blockExplorerBaseUrl: string;
            transactionError: Error | null | undefined;
            stepData: SweepModalStepData | null;
            setStepData: React.Dispatch<React.SetStateAction<SweepModalStepData | null>>;
            sweepStep: SweepStep;
            setSweepStep: React.Dispatch<React.SetStateAction<SweepStep>>;
            sweepTokens: () => void;
        }) => React.ReactNode;
    }>;
}
type MediaType = 'mp4' | 'mp3' | 'wav' | 'gltf' | 'glb' | 'png' | 'jpeg' | 'jpg' | 'svg' | 'gif' | 'html' | 'other' | undefined;
export const extractMediaType: (token?: RequiredTokenProps) => MediaType | null;
type _Token1 = NonNullable<NonNullable<ReturnType<typeof useTokens>['data']>['0']>['token'];
type RequiredTokenProps = Pick<NonNullable<_Token1>, 'image' | 'media' | 'collection' | 'tokenId'>;
type _Props10 = {
    token?: RequiredTokenProps;
    preview?: boolean;
    style?: CSSProperties;
    className?: string;
    modelViewerOptions?: any;
    videoOptions?: VideoHTMLAttributes<HTMLVideoElement>;
    audioOptions?: AudioHTMLAttributes<HTMLAudioElement>;
    iframeOptions?: IframeHTMLAttributes<HTMLIFrameElement>;
    fallback?: (mediaType: MediaType | null) => ReactElement | null;
    onError?: (e: Event) => void;
    onRefreshToken?: () => void;
};
export const TokenMedia: FC<_Props10>;
type _Props11 = {
    trigger: ReactNode;
    side?: ComponentPropsWithRef<typeof Popover>['side'];
    openState?: [boolean, Dispatch<SetStateAction<boolean>>];
    tokenUrl?: string;
    onConnectWallet: () => void;
};
export function CartPopover({ trigger, side, openState, tokenUrl, onConnectWallet, }: _Props11): ReactElement;
export declare namespace CartPopover {
    var Custom: React.FC<{
        open: boolean;
        children: (props: {
            loading: boolean;
            currency?: {
                contract?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
                decimals?: number | undefined;
            } | undefined;
            cartCurrencyConverted?: Boolean | undefined;
            totalPrice: number;
            feeOnTop?: number | undefined;
            usdPrice: number | null;
            balance?: bigint | undefined;
            hasEnoughCurrency: boolean;
            items: {
                token: {
                    id: string;
                    name: string;
                };
                collection: {
                    id: string;
                    name: string;
                };
                order?: {
                    id: string;
                    quantityRemaining: number;
                    quantity: number;
                    maker: string;
                } | undefined;
                price: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                poolId?: string | undefined;
                poolPrices?: ({
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined)[] | undefined;
                previousPrice?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
            }[];
            unavailableItems: {
                token: {
                    id: string;
                    name: string;
                };
                collection: {
                    id: string;
                    name: string;
                };
                order?: {
                    id: string;
                    quantityRemaining: number;
                    quantity: number;
                    maker: string;
                } | undefined;
                price: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                poolId?: string | undefined;
                poolPrices?: ({
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined)[] | undefined;
                previousPrice?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
            }[];
            priceChangeItems: {
                token: {
                    id: string;
                    name: string;
                };
                collection: {
                    id: string;
                    name: string;
                };
                order?: {
                    id: string;
                    quantityRemaining: number;
                    quantity: number;
                    maker: string;
                } | undefined;
                price: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
                poolId?: string | undefined;
                poolPrices?: ({
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined)[] | undefined;
                previousPrice?: {
                    currency?: {
                        contract?: string | undefined;
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                    } | undefined;
                    amount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                    netAmount?: {
                        raw?: string | undefined;
                        decimal?: number | undefined;
                        usd?: number | undefined;
                        native?: number | undefined;
                    } | undefined;
                } | undefined;
            }[];
            transaction?: {
                id?: string | undefined;
                txHash?: string | undefined;
                chain: import("~/../sdk/dist").ReservoirChain;
                items: {
                    token: {
                        id: string;
                        name: string;
                    };
                    collection: {
                        id: string;
                        name: string;
                    };
                    order?: {
                        id: string;
                        quantityRemaining: number;
                        quantity: number;
                        maker: string;
                    } | undefined;
                    price: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                    poolId?: string | undefined;
                    poolPrices?: ({
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined)[] | undefined;
                    previousPrice?: {
                        currency?: {
                            contract?: string | undefined;
                            name?: string | undefined;
                            symbol?: string | undefined;
                            decimals?: number | undefined;
                        } | undefined;
                        amount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                        netAmount?: {
                            raw?: string | undefined;
                            decimal?: number | undefined;
                            usd?: number | undefined;
                            native?: number | undefined;
                        } | undefined;
                    } | undefined;
                }[];
                error?: Error | undefined;
                errorType?: CheckoutTransactionError | undefined;
                status: CheckoutStatus;
                steps?: {
                    error?: string | undefined;
                    errorData?: any;
                    action: string;
                    description: string;
                    kind: "transaction" | "signature";
                    id: string;
                    items?: {
                        status: "complete" | "incomplete";
                        data?: any;
                        orderIndexes?: number[] | undefined;
                        orderIds?: string[] | undefined;
                        error?: string | undefined;
                        txHash?: string | undefined;
                        orderData?: {
                            crossPostingOrderId?: string | undefined;
                            orderId: string;
                            orderIndex: string;
                        }[] | undefined;
                        salesData?: {
                            id?: string | undefined;
                            saleId?: string | undefined;
                            token?: {
                                contract?: string | undefined;
                                tokenId?: string | undefined;
                                name?: string | undefined;
                                image?: string | undefined;
                                collection?: {
                                    id?: string | undefined;
                                    name?: string | undefined;
                                } | undefined;
                            } | undefined;
                            orderSource?: string | undefined;
                            orderSide?: "ask" | "bid" | undefined;
                            orderKind?: string | undefined;
                            orderId?: string | undefined;
                            from?: string | undefined;
                            to?: string | undefined;
                            amount?: string | undefined;
                            fillSource?: string | undefined;
                            block?: number | undefined;
                            txHash?: string | undefined;
                            logIndex?: number | undefined;
                            batchIndex?: number | undefined;
                            timestamp?: number | undefined;
                            price?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                            washTradingScore?: number | undefined;
                            royaltyFeeBps?: number | undefined;
                            marketplaceFeeBps?: number | undefined;
                            paidFullRoyalty?: boolean | undefined;
                            feeBreakdown?: {
                                kind?: string | undefined;
                                bps?: number | undefined;
                                recipient?: string | undefined;
                            }[] | undefined;
                            isDeleted?: boolean | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                }[] | undefined;
                path?: {
                    orderId?: string | undefined;
                    contract?: string | undefined;
                    tokenId?: string | undefined;
                    quantity?: number | undefined;
                    source?: string | undefined;
                    currency?: string | undefined;
                    currencySymbol?: string | undefined;
                    currencyDecimals?: number | undefined;
                    quote?: number | undefined;
                    rawQuote?: string | undefined;
                    buyInQuote?: number | undefined;
                    buyInRawQuote?: string | undefined;
                    totalPrice?: number | undefined;
                    totalRawPrice?: string | undefined;
                    builtInFees?: {
                        kind?: string | undefined;
                        recipient?: string | undefined;
                        bps?: number | undefined;
                        amount?: number | undefined;
                        rawAmount?: string | undefined;
                    }[] | undefined;
                    feesOnTop?: {
                        kind?: string | undefined;
                        recipient?: string | undefined;
                        bps?: number | undefined;
                        amount?: number | undefined;
                        rawAmount?: string | undefined;
                    }[] | undefined;
                }[] | {
                    orderId?: string | undefined;
                    contract?: string | undefined;
                    tokenId?: string | undefined;
                    quantity?: number | undefined;
                    source?: string | undefined;
                    currency?: string | undefined;
                    currencySymbol?: string | undefined;
                    currencyDecimals?: number | undefined;
                    quote?: number | undefined;
                    rawQuote?: string | undefined;
                    totalPrice?: number | undefined;
                    totalRawPrice?: string | undefined;
                    builtInFees?: {
                        kind?: string | undefined;
                        recipient?: string | undefined;
                        bps?: number | undefined;
                        amount?: number | undefined;
                        rawAmount?: string | undefined;
                    }[] | undefined;
                    feesOnTop?: {
                        kind?: string | undefined;
                        recipient?: string | undefined;
                        bps?: number | undefined;
                        amount?: number | undefined;
                        rawAmount?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                currentStep?: {
                    error?: string | undefined;
                    errorData?: any;
                    action: string;
                    description: string;
                    kind: "transaction" | "signature";
                    id: string;
                    items?: {
                        status: "complete" | "incomplete";
                        data?: any;
                        orderIndexes?: number[] | undefined;
                        orderIds?: string[] | undefined;
                        error?: string | undefined;
                        txHash?: string | undefined;
                        orderData?: {
                            crossPostingOrderId?: string | undefined;
                            orderId: string;
                            orderIndex: string;
                        }[] | undefined;
                        salesData?: {
                            id?: string | undefined;
                            saleId?: string | undefined;
                            token?: {
                                contract?: string | undefined;
                                tokenId?: string | undefined;
                                name?: string | undefined;
                                image?: string | undefined;
                                collection?: {
                                    id?: string | undefined;
                                    name?: string | undefined;
                                } | undefined;
                            } | undefined;
                            orderSource?: string | undefined;
                            orderSide?: "ask" | "bid" | undefined;
                            orderKind?: string | undefined;
                            orderId?: string | undefined;
                            from?: string | undefined;
                            to?: string | undefined;
                            amount?: string | undefined;
                            fillSource?: string | undefined;
                            block?: number | undefined;
                            txHash?: string | undefined;
                            logIndex?: number | undefined;
                            batchIndex?: number | undefined;
                            timestamp?: number | undefined;
                            price?: {
                                currency?: {
                                    contract?: string | undefined;
                                    name?: string | undefined;
                                    symbol?: string | undefined;
                                    decimals?: number | undefined;
                                } | undefined;
                                amount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                                netAmount?: {
                                    raw?: string | undefined;
                                    decimal?: number | undefined;
                                    usd?: number | undefined;
                                    native?: number | undefined;
                                } | undefined;
                            } | undefined;
                            washTradingScore?: number | undefined;
                            royaltyFeeBps?: number | undefined;
                            marketplaceFeeBps?: number | undefined;
                            paidFullRoyalty?: boolean | undefined;
                            feeBreakdown?: {
                                kind?: string | undefined;
                                bps?: number | undefined;
                                recipient?: string | undefined;
                            }[] | undefined;
                            isDeleted?: boolean | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | null | undefined;
            blockExplorerBaseUrl: string;
            cartChain: import("~/../sdk/dist").ReservoirChain | undefined;
            checkout: (options?: Partial<Omit<{
                items: {
                    collection?: string | undefined;
                    token?: string | undefined;
                    quantity?: number | undefined;
                    orderId?: string | undefined;
                    rawOrder?: {
                        kind: "flow" | "x2y2" | "opensea" | "looks-rare" | "universe" | "zeroex-v4" | "seaport" | "seaport-v1.4" | "seaport-v1.5" | "alienswap" | "blur-partial" | "rarible" | "sudoswap" | "nftx";
                        data: {
                            [key: string]: unknown;
                        };
                    } | undefined;
                    fillType?: "mint" | "trade" | undefined;
                    preferredOrderSource?: string | undefined;
                    exactOrderSource?: string | undefined;
                    exclusions?: {
                        orderId: string;
                        price?: string | undefined;
                    }[] | undefined;
                }[];
                taker: string;
                relayer?: string | undefined;
                onlyPath?: boolean | undefined;
                preview?: "depth" | undefined;
                forceRouter?: boolean | undefined;
                currency?: string | undefined;
                normalizeRoyalties?: boolean | undefined;
                allowInactiveOrderIds?: boolean | undefined;
                source?: string | undefined;
                feesOnTop?: string[] | undefined;
                partial?: boolean | undefined;
                skipBalanceCheck?: boolean | undefined;
                excludeEOA?: boolean | undefined;
                maxFeePerGas?: string | undefined;
                maxPriorityFeePerGas?: string | undefined;
                usePermit?: boolean | undefined;
                x2y2ApiKey?: string | undefined;
                openseaApiKey?: string | undefined;
                blurAuth?: string | undefined;
            }, "source" | "items">> | undefined) => Promise<void>;
            clear: () => void;
            remove: (ids: string[]) => void;
            add: (items: ({
                token?: {
                    contract: string;
                    tokenId: string;
                    name?: string | undefined;
                    description?: string | undefined;
                    image?: string | undefined;
                    imageSmall?: string | undefined;
                    imageLarge?: string | undefined;
                    metadata?: {
                        [key: string]: unknown;
                    } | undefined;
                    media?: string | undefined;
                    kind?: string | undefined;
                    isFlagged?: boolean | undefined;
                    lastFlagUpdate?: string | undefined;
                    lastFlagChange?: string | undefined;
                    supply?: number | undefined;
                    remainingSupply?: number | undefined;
                    rarity?: number | undefined;
                    rarityRank?: number | undefined;
                    collection?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        image?: string | undefined;
                        slug?: string | undefined;
                    } | undefined;
                    lastSale?: {
                        id?: string | undefined;
                        saleId?: string | undefined;
                        token?: {
                            contract?: string | undefined;
                            tokenId?: string | undefined;
                            name?: string | undefined;
                            image?: string | undefined;
                            collection?: {
                                id?: string | undefined;
                                name?: string | undefined;
                            } | undefined;
                        } | undefined;
                        orderSource?: string | undefined;
                        orderSide?: "ask" | "bid" | undefined;
                        orderKind?: string | undefined;
                        orderId?: string | undefined;
                        from?: string | undefined;
                        to?: string | undefined;
                        amount?: string | undefined;
                        fillSource?: string | undefined;
                        block?: number | undefined;
                        txHash?: string | undefined;
                        logIndex?: number | undefined;
                        batchIndex?: number | undefined;
                        timestamp?: number | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        washTradingScore?: number | undefined;
                        royaltyFeeBps?: number | undefined;
                        marketplaceFeeBps?: number | undefined;
                        paidFullRoyalty?: boolean | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            bps?: number | undefined;
                            recipient?: string | undefined;
                        }[] | undefined;
                        isDeleted?: boolean | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    } | undefined;
                    owner?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        kind?: string | undefined;
                        value: string;
                        tokenCount?: number | undefined;
                        onSaleCount?: number | undefined;
                        floorAskPrice?: number | undefined;
                        topBidValue?: number | undefined;
                        createdAt?: string | undefined;
                    }[] | undefined;
                } | undefined;
                market?: {
                    floorAsk?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        quantityFilled?: number | undefined;
                        quantityRemaining?: number | undefined;
                        dynamicPricing?: {
                            kind?: "dutch" | "pool" | undefined;
                            data?: {
                                [key: string]: unknown;
                            } | undefined;
                        } | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                    } | undefined;
                    topBid?: {
                        id?: string | undefined;
                        price?: {
                            currency?: {
                                contract?: string | undefined;
                                name?: string | undefined;
                                symbol?: string | undefined;
                                decimals?: number | undefined;
                            } | undefined;
                            amount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                            netAmount?: {
                                raw?: string | undefined;
                                decimal?: number | undefined;
                                usd?: number | undefined;
                                native?: number | undefined;
                            } | undefined;
                        } | undefined;
                        maker?: string | undefined;
                        validFrom?: number | undefined;
                        validUntil?: number | undefined;
                        source?: {
                            [key: string]: unknown;
                        } | undefined;
                        feeBreakdown?: {
                            kind?: string | undefined;
                            recipient?: string | undefined;
                            bps?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | {
                orderId: string;
            } | {
                id: string;
            })[], chainId: number) => Promise<void>;
            validate: () => Promise<boolean>;
        }) => React.ReactNode;
    }>;
}

//# sourceMappingURL=index.d.ts.map
