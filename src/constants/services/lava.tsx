import { ContentType } from "@/types";

export const Installation: ContentType[] = [
  {
    title: "Install essential tools",
    method: "",
    code: `sudo apt -y update
sudo apt -y install curl git jq lz4 build-essential
sudo apt -y upgrade`,
  },
  {
    title: "Install GO package",
    method: "The required version for proper compilation and operation of the node may change. Please stay updated by following the relevant sources.",
    code: `sudo rm -rf /usr/local/go
curl -Ls https://go.dev/dl/go1.22.12.linux-amd64.tar.gz | sudo tar -xzf - -C /usr/local
eval $(echo 'export PATH=$PATH:/usr/local/go/bin' | sudo tee /etc/profile.d/golang.sh)
eval $(echo 'export PATH=$PATH:$HOME/go/bin' | tee -a $HOME/.profile)
`,
  },
    {
    title: "Install binaries and Initialize the node",
    method: " Compile lavad. Please check needed version for particular height.",
    code: `version="v5.3.0"
cd $HOME
rm -rf lava
git clone https://github.com/lavanet/lava.git
cd lava
git checkout $version
export LAVA_BINARY=lavad
make build`
},
    {
    title: "",
    method: "Copy binaries for systemd and CLI usage",
    code: `
sudo cp @HOME/lava/build/lavad /usr/local/bin
sudo chmod +x /usr/local/bin/lavad`
  },
      {
    title: "", method: "Initialize the node",
    code: `
lavad config chain-id lava-mainnet-1
lavad config keyring-backend file
lavad config node tcp://localhost:14457`,
`lavad init $MONIKER --chain-id lava-mainnet-1`,
  },
    {
    title: "Install Tools",
    method: "We will use Cosmovisor v1.0.0 as example here.",
    code: `sudo apt update && sudo apt upgrade -y 
    sudo apt install make clang pkg-config libssl-dev build-essential git jq llvm libudev-dev -y`,
  },
    {
    title: "Install Tools",
    method: "We will use Cosmovisor v1.0.0 as example here.",
    code: `sudo apt update && sudo apt upgrade -y 
    sudo apt install make clang pkg-config libssl-dev build-essential git jq llvm libudev-dev -y`,
  },
    {
    title: "Install Tools",
    method: "We will use Cosmovisor v1.0.0 as example here.",
    code: `sudo apt update && sudo apt upgrade -y 
    sudo apt install make clang pkg-config libssl-dev build-essential git jq llvm libudev-dev -y`,
  },
];

export const Endpoints: ContentType[] = [
  {
    title: "Install Go",
    method: "",
    code: `sudo rm -rvf /usr/local/go/
     wget https://golang.org/dl/go1.22.4.linux-amd64.tar.gz
     sudo tar -C /usr/local -xzf go1.22.4.linux-amd64.tar.gz
     rm go1.22.4.linux-amd64.tar.gz`,
  },
  {
    title: "Configure Go",
    method: "",
    code: `export GOROOT=/usr/local/go
     export GOPATH=$HOME/go
     export GO111MODULE=on
     export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin`,
  },
  {
    title: "Install Cosmovisor",
    method: "",
    code: `go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0`,
  },
];

export const Statesync: ContentType[] = [
  {
    title: "Desigmate Endpoints",
    method: "",
    code: `RPC1="http",
    "RPC2=http2"`,
  },
];
export const Snapshot: ContentType[] = [
  {
    title: "Install Go",
    method: "",
    code: `sudo rm -rvf /usr/local/go/
     wget https://golang.org/dl/go1.22.4.linux-amd64.tar.gz
     sudo tar -C /usr/local -xzf go1.22.4.linux-amd64.tar.gz
     rm go1.22.4.linux-amd64.tar.gz`,
  },
  {
    title: "Configure Go",
    method: "",
    code: `export GOROOT=/usr/local/go
     export GOPATH=$HOME/go
     export GO111MODULE=on
     export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin`,
  },
  {
    title: "Install Cosmovisor",
    method: "",
    code: `go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0`,
  },
];

export const Peer: ContentType[] = [
  {
    title: "Install Go",
    method: "",
    code: `sudo rm -rvf /usr/local/go/
     wget https://golang.org/dl/go1.22.4.linux-amd64.tar.gz
     sudo tar -C /usr/local -xzf go1.22.4.linux-amd64.tar.gz
     rm go1.22.4.linux-amd64.tar.gz`,
  },
  {
    title: "Configure Go",
    method: "",
    code: `export GOROOT=/usr/local/go
     export GOPATH=$HOME/go
     export GO111MODULE=on
     export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin`,
  },
  {
    title: "Install Cosmovisor",
    method: "",
    code: `go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0`,
  },
];

export const Command: ContentType[] = [
  {
    title: "Install Go",
    method: "",
    code: `sudo rm -rvf /usr/local/go/
     wget https://golang.org/dl/go1.22.4.linux-amd64.tar.gz
     sudo tar -C /usr/local -xzf go1.22.4.linux-amd64.tar.gz
     rm go1.22.4.linux-amd64.tar.gz`,
  },
  {
    title: "Configure Go",
    method: "",
    code: `export GOROOT=/usr/local/go
     export GOPATH=$HOME/go
     export GO111MODULE=on
     export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin`,
  },
  {
    title: "Install Cosmovisor",
    method: "",
    code: `go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0`,
  },
];

export const Scanner: ContentType[] = [
  {
    title: "Install Go",
    method: "",
    code: `sudo rm -rvf /usr/local/go/
     wget https://golang.org/dl/go1.22.4.linux-amd64.tar.gz
     sudo tar -C /usr/local -xzf go1.22.4.linux-amd64.tar.gz
     rm go1.22.4.linux-amd64.tar.gz`,
  },
  {
    title: "Configure Go",
    method: "",
    code: `export GOROOT=/usr/local/go
     export GOPATH=$HOME/go
     export GO111MODULE=on
     export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin`,
  },
  {
    title: "Install Cosmovisor",
    method: "",
    code: `go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0`,
  },
];
