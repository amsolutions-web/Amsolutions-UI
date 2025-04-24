import { ContentType } from "@/types";

export const Installation: ContentType[] = [
  {
    title: "Install Go",
    method:
      "We will use Go v1.22.4 as example here. The code below also cleanly removes any previous Go installation.",
    code: `sudo rm -rvf /usr/local/go/
     wget https://golang.org/dl/go1.22.4.linux-amd64.tar.gz
     sudo tar -C /usr/local -xzf go1.22.4.linux-amd64.tar.gz
     rm go1.22.4.linux-amd64.tar.gz`,
  },
  {
    title: "Configure Go",
    method:
      "Unless you want to configure in a non-standard way, then set these in the ~/.profile file.",
    code: `export GOROOT=/usr/local/go
     export GOPATH=$HOME/go
     export GO111MODULE=on
     export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin`,
  },
  {
    title: "Install Cosmovisor",
    method: "We will use Cosmovisor v1.0.0 as example here.",
    code: `go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0`,
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
