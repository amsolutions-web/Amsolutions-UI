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
    method: "Move binaries for systemd and CLI usage",
    code: `
sudo cp @HOME/lava/build/lavad /usr/local/bin
sudo chmod +x /usr/local/bin/lavad`
  },
      {
    title: "", method: "Initialize the node",
    code: `
lavad config chain-id lava-mainnet-1
lavad config keyring-backend file`,
      },
        {
    title: "", method: "Set your moniker instead <YOUR_MONIKER> ",
    code: `
lavad init <YOUR_MONIKER> --chain-id lava-mainnet-1`,
  },
    {
    title: "",
    method: "Update chain configuration",
    code: `sed -i -e "s|^minimum-gas-prices *=.*|minimum-gas-prices = \"0.000000001ulava\"|" $HOME/.lava/config/app.toml
sed -i \
  -e 's/timeout_commit = ".*"/timeout_commit = "30s"/g' \
  -e 's/timeout_propose = ".*"/timeout_propose = "1s"/g' \
  -e 's/timeout_precommit = ".*"/timeout_precommit = "1s"/g' \
  -e 's/timeout_precommit_delta = ".*"/timeout_precommit_delta = "500ms"/g' \
  -e 's/timeout_prevote = ".*"/timeout_prevote = "1s"/g' \
  -e 's/timeout_prevote_delta = ".*"/timeout_prevote_delta = "500ms"/g' \
  -e 's/timeout_propose_delta = ".*"/timeout_propose_delta = "500ms"/g' \
  -e 's/skip_timeout_commit = ".*"/skip_timeout_commit = false/g' \
  $HOME/.lava/config/config.toml`,
  },
    {
    title: "Launch node VIA Cosmovisor",
    method: "Install Cosmovisor",
    code: `go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@v1.6.0`,
  },
    {
    title: "",
    method: "Create essential directories",
    code: `mkdir -p $HOME/.lava/cosmovisor/genesis/bin
sudo ln -s /usr/local/bin/lavad $HOME/.lava/cosmovisor/genesis/bin/lavad  -f
sudo ln -s $HOME/.lava/cosmovisor/genesis $HOME/.lava/cosmovisor/current -f`,
  },
    {
    title: "",
    method: "Create Systemd file",
    code: `sudo tee /etc/systemd/system/lava.service > /dev/null << EOF
[Unit]
Description="Lava Mainnet Cosmovisor"
After=network-online.target

[Service]
User=$USER
ExecStart=$(which cosmovisor) run start
Restart=on-failure
RestartSec=10
LimitNOFILE=65535
Environment="DAEMON_HOME=$HOME/.lava"
Environment="DAEMON_NAME=lavad"
Environment="UNSAFE_SKIP_BACKUP=true"

[Install]
WantedBy=multi-user.target
EOF`,
  },
    {
    title: "",
    method: "Launch Node",
    code: `sudo systemctl daemon-reload
sudo systemctl enable lava.service
sudo systemctl restart lava.service
`,
  },
];

export const Endpoints: ContentType[] = [
  {
    title: "Launch node VIA Cosmovisor",
    method: "Install Cosmovisor",
    code: `go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@v1.6.0`,
  },
  {
    title: "",
    method: "",
    code: `RPC: https://rpc-lava.theamsolutions.info`,
  },
];

export const Statesync: ContentType[] = [
  {
    title: "",
    method: "",
    code: `SNAP_RPC="https://rpc-lava.theamsolutions.info"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \\
BLOCK_HEIGHT=$(($LATEST_HEIGHT - 2000)); \\
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash); \\
echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \\
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\\"$SNAP_RPC,$SNAP_RPC\\"| ; \\
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \\
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\\"$TRUST_HASH\\"|" $HOME/.lava/config/config.toml; \\
wget -qO $HOME/.lava/config/addrbook.json https://arch.snap-lava.theamsolutions.info/addrbook.json`,
  },
  {
    title: "",
    method: "",
    code: `sudo systemctl stop lavad.service
mv $HOME/.lava/data/priv_validator_stat.json $HOME/pvs-back.json
lavad tendermint unsafe-reset-all
mv $HOME/pvs-back.json $HOME/.lava/data
sudo systemctl restart lavad.service`,
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
