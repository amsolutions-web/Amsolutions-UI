import { ContentType } from "@/types";

export const Installation: ContentType[] = [
  {
    title: "Essential tools",
    method:
      "Essential tools for building.",
    code: `sudo apt -y update
sudo apt -y install curl git jq lz4 build-essential
sudo apt -y upgrade`,
  },
  {
    title: "Install Cosmovisor",
    method: "We will use Cosmovisor v1.0.0 as example here.",
    code: `go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0`,
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
