# BlackRaven V2 mining pool (Foundation v1)

This fork of [Blinkhash Foundation Server](https://github.com/blinkhash/foundation-server) includes **pre-applied patches** for **BlackRaven V2** (KawPoW, segwit coinbase, witness commitment, `raptoreum` founder rewards from GBT).

Patches apply automatically on `npm install` via [patch-package](https://github.com/ds300/patch-package) (`patches/foundation-stratum+0.0.42.patch`).

## Quick start

```bash
git clone https://github.com/BlackRavenNetwork/foundation-v1-server.git
cd foundation-v1-server
nvm install   # uses Node 16 from .nvmrc
npm install   # applies foundation-stratum patch

cp configs/main/example.js configs/main/config.js
cp configs/pools/blackraven.example.js configs/pools/blackraven.js
# Edit configs/pools/blackraven.js: RPC password, pool reward address

# Redis required (e.g. redis-server on 127.0.0.1:6379)
node scripts/main.js
```

## Wallet / node requirements

1. **BlackRaven node** with RPC enabled (default port `9776`).
2. In `blackraven.conf`:
   - `server=1`, `rpcuser` / `rpcpassword`
   - **`maxtipage=31536000`** (needed on a genesis-only chain so GBT is not blocked by IBD)
3. Restart the wallet after changing conf.

Verify GBT:

```bash
blackraven-cli getblocktemplate '{"rules":[]}'
```

## Stratum

| Mode   | URL |
|--------|-----|
| Shared | `stratum+tcp://YOUR_HOST:3636` |
| Solo   | `stratum+tcp://YOUR_HOST:3637` |

Miner: KawPoW. Worker name: anything (e.g. `rig1`). Password: `x`.

API stats (default): http://127.0.0.1:3001/

## What the patch changes

| Module | Purpose |
|--------|---------|
| `transactions.js` | KawPoW height in coinbase, segwit marker, founder outputs, witness commitment |
| `utils.js` | Segwit txid / witness merkle helpers |
| `template.js`, `manager.js` | Block merkle root from segwit coinbase txid |

Pool config must use `segwit: true`, `version: 2`, `rewards.type: 'raptoreum'` (see `configs/pools/blackraven.example.js`).

## Upstream

```bash
git remote add upstream https://github.com/blinkhash/foundation-server.git
git fetch upstream
```

If Blinkhash bumps `foundation-stratum` from `0.0.42`, regenerate the patch after editing `node_modules/foundation-stratum` and run `npx patch-package foundation-stratum`.

Coin parameters reference: [foundation-v1-configurations](https://github.com/BlackRavenNetwork/foundation-v1-configurations).
