export enum Network {
    Mainnet,
    Testnet
}

export const Mainnet: Array<{ alt: string; url: string; title: string; id: string, stakingUrl?: string, serviceUrl?: string }> = [
    { alt:'LAVA', url: "https://avatars.githubusercontent.com/u/100386277?s=48&v=4", title: "lava", id:'', stakingUrl:"https://lavacenter.xyz/lava/staking/lava@valoper179mdmkdejgj0fk68gjvpknm9dv94tmu0zyqmjx"},
    { alt:'Archway', url: "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png", title: "archway", id:''},
    { alt:'Swisstronik', url: "https://itrocket.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fswisstronic.aeb7c18c.jpg&w=96&q=75", title: "swisstronik", id:''},
    { alt:'Penumbra', url: "https://avatars.githubusercontent.com/u/85261160?s=200&v=4", title: "penumbra", id:''},
    { alt:'Bitway', url: "https://avatars.githubusercontent.com/u/223204087?s=200&v=4", title: "Bitway", id:''},
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
