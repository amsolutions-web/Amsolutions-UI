export enum Network {
    Mainnet,
    Testnet
}

export const Mainnet: Array<{ alt: string; url: string; title: string; id: string, stakingUrl?: string, serviceUrl?: string }> = [
    { alt:'LAVA', url: "https://avatars.githubusercontent.com/u/100386277?s=48&v=4", title: "lava", id:'',
     stakingUrl:"https://lavacenter.xyz/lava/staking/lava@valoper179mdmkdejgj0fk68gjvpknm9dv94tmu0zyqmjx"},
    
    { alt:'Archway', url: "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png", title: "archway", id:'',
     stakingUrl:"https://www.mintscan.io/archway/validators/archwayvaloper18wdwndqaaukkgwn4s0ynw7mdddty6h6vtm2g8p",
    serviceUrl: "https://docs.archway.io/validators/running-a-node/install"},
    
    { alt:'Swisstronik', url: "https://itrocket.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fswisstronic.aeb7c18c.jpg&w=96&q=75", title: "swisstronik", id:'',
     serviceUrl:"https://docs.swisstronik.com/swisstronik-docs",
     stakingUrl:"https://explorer-cosmos.mainnet.swisstronik.com/swisstronik/staking/swtrvaloper1grxluyulsnzp979akmp30afg74jexyz5mlq3g9" },
    
    { alt:'Penumbra', url: "https://avatars.githubusercontent.com/u/85261160?s=200&v=4", title: "penumbra", id:'', 
    serviceUrl: "https://guide.penumbra.zone", 
    stakingUrl: "https://explorer.penumbra.zone/validator/penumbravalid1z6nw9ute35ajjpvq5yqhspvvvp5ephyd8v5c9wk7hs2zz465esrq56r40w"},
    
    { alt:'Bitway', url: "https://avatars.githubusercontent.com/u/223204087?s=200&v=4", title: "Bitway", id:'',
    serviceUrl: "https://docs.bitway.com", 
    stakingUrl: "https://ping.pub/bitway/staking/bitwayvaloper1qqrp7yggqv8qxpcgqy0syqc0ruy3jyg5r50qq9gnzcqq5rcwzs23zsdx4hq"},
    { alt:'C4E', url: "https://avatars.githubusercontent.com/u/101329004?s=48&v=4", title: "c4e", id:'c4e'},
    { alt:'Zenrock', url: "https://avatars.githubusercontent.com/u/160767775?s=48&v=4", title: "zenrock", id:''},
    { alt:'UX', url: "https://avatars.githubusercontent.com/u/79238191?s=48&v=4", title: "ux", id:''},
    { alt:'Quicksilver', url: "https://avatars.githubusercontent.com/u/144680245?s=48&v=4", title: "quicksilver", id:''},
    { alt:'Warden Protocol', url: "https://avatars.githubusercontent.com/u/158038121?s=48&v=4", title: "warden", id:''},
]

export const Testnet: Array<{ alt: string; url: string; title: string; id: string, stakingUrl?: string, serviceUrl?: string }> = [
    { alt:'Aztec Network', url: "https://avatars.githubusercontent.com/u/45291733?s=200&v=4", title: "aztec network", id:''},
    { alt:'blockx', url: "https://itrocket.net/_next/image/?url=%2Fmainnet%2Fblockx.jpg&w=96&q=75", title: "blockx", id:'blockx_19191-1'},
    { alt:'blockx', url: "https://itrocket.net", title: "blockx", id:'blockx_19191-1'},
]
