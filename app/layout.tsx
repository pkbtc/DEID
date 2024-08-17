"use client"


import {defineChain} from "viem";
import {Outfit} from "next/font/google";
import "./globals.css";

import {PrivyProvider} from '@privy-io/react-auth';

const font=Outfit({subsets:["latin"]});

const BitTorent=defineChain({
    id:1029,
    name:"BitTorrent testnet",
    network:"BitTorrent testnet",
    nativeCurrency:{
        decimals:18,
        name:"BitTorrent",
        symbol:"BTT"
    },
    rpcUrls:{
        default:{
            http:[`https://pre-rpc.bt.io/`]
        }
    },
    blockExplorers:{
        default:{
            name:"expoler bt",url:"https://testscan.bt.io"
        }
    }
} as any)


export default function RootLayout({
    children,
}:{
    children:React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>
            <PrivyProvider
      appId="clzxklumj01xxzbbs6k2kop77"
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://your-logo-url',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        defaultChain:BitTorent as any,
        supportedChains:[BitTorent as any]
      }}
    >
      {children}
    </PrivyProvider>
            </body>
        </html>
    )
}