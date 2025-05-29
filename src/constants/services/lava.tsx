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
mkdir -p $HOME/.lava/cosmovisor/genesis/bin
mv $HOME/lava/build/lavad $HOME/.lava/cosmovisor/genesis/bin/`
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
    method: "Download Genesis",
    code: `curl -Ls https://raw.githubusercontent.com/lavanet/lava-config/refs/heads/main/mainnet-1/genesis_json/genesis.json > $HOME/.lava/config/genesis.json`,
  },
  {
    title: "",
    method: "Add live peers",
    code: `peers=$(curl -sS https://rpc-lava.theamsolutions.info/net_info | jq -r '.result.peers[] | "\(.node_info.id)@\(.remote_ip):\(.node_info.listen_addr)"' | awk -F ':' '{print $1":"$(NF)}' | paste -sd,)

sed -i -e "s|^persistent_peers *=.*|persistent_peers = \"$peers\"|" $HOME/.lava/config/config.toml`,
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
    method: "Create links",
    code: `
sudo ln -s $HOME/.lava/cosmovisor/genesis/bin/lavad /usr/local/bin/lavad -f
sudo ln -s $HOME/.lava/cosmovisor/genesis $HOME/.lava/cosmovisor/current -f`,
  },
    {
    title: "",
    method: "Create Cosmovisor Systemd file",
    code: `sudo tee /etc/systemd/system/lavad.service > /dev/null << EOF
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
sudo systemctl enable lavad.service
sudo systemctl restart lavad.service
`,
  },
    {
    title: "",
    method: "Check status or logs",
    code: `sudo systemctl status lavad.service 
sudo journalctl -u lavad -fn 50 -o cat
`,
  },
];
export const Endpoints: ContentType[] = [
  {
    title: "",
    method: "RPC",
    code: `https://rpc-lava.theamsolutions.info                                                   
    `,
  },
    {
    title: "",
    method: "REST",
    code: `https://rest-lava.theamsolutions.info               x`,
  },
    {
    title: "",
    method: "gRPC",
    code: `                                                      
    grpc-lava.theamsolutions.info                  
    `,
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
    title: "",
    method: "Stop Lava  node",
    code: `sudo systemctl stop lavad.service`,
  },
  {
    title: "",
    method: "Backup validator state file and empty path for new snapshot",
    code: `cp $HOME/.lava/data/priv_validator_state.json $HOME/priv_val-state.json.backup
`,
  },
  {
    title: "",
    method: "Check latest snapshot and install",
    code: `LAVA_SNAP=$(curl -s https://snapshots.theamsolutions.info | egrep -o ">lava-snap*.*tar" | tr -d ">")
curl -L https://snapshots.theamsolutions.info/${LAVA_SNAP} | tar xf - -C $HOME/.lava
`,
  },
  {
    title: "",
    method: "Restore validator state file and launch",
    code: `mv $HOME/priv_val-state.json.backup $HOME/.lava/data/priv_validator_state.json 
    sudo systemctl restart lavad.service
    sudo journalctl -u lavad -fn 50 -o cat
`,
  }
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
