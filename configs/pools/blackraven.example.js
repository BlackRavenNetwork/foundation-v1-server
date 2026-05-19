/*
 * BlackRaven mainnet pool template (KawPoW + segwit coinbase + raptoreum founder rewards).
 * Copy to blackraven.js and set RPC credentials + pool payout address:
 *   cp configs/pools/blackraven.example.js configs/pools/blackraven.js
 */

const config = {};
config.enabled = true;
config.name = 'Pool-BlackRaven';
config.coins = ['BlackRaven'];

config.banning = {};
config.banning.time = 600;
config.banning.invalidPercent = 50;
config.banning.checkThreshold = 500;
config.banning.purgeInterval = 300;

config.ports = [];

const portsShared = {};
portsShared.port = 3636;
portsShared.enabled = true;
portsShared.type = 'shared';
portsShared.tls = false;
portsShared.difficulty = {};
portsShared.difficulty.initial = 0.25;
portsShared.difficulty.minimum = 0.05;
portsShared.difficulty.maximum = 4;
portsShared.difficulty.targetTime = 15;
portsShared.difficulty.retargetTime = 90;
portsShared.difficulty.variance = 0.3;
config.ports.push(portsShared);

const portsSolo = {};
portsSolo.port = 3637;
portsSolo.enabled = true;
portsSolo.type = 'solo';
portsSolo.tls = false;
portsSolo.difficulty = {};
portsSolo.difficulty.initial = 0.25;
portsSolo.difficulty.minimum = 0.05;
portsSolo.difficulty.maximum = 4;
portsSolo.difficulty.targetTime = 15;
portsSolo.difficulty.retargetTime = 90;
portsSolo.difficulty.variance = 0.3;
config.ports.push(portsSolo);

config.p2p = {};
config.p2p.enabled = false;
config.p2p.host = '127.0.0.1';
config.p2p.port = 9777;

config.statistics = {};
config.statistics.blocksInterval = 20;
config.statistics.hashrateInterval = 20;
config.statistics.historicalInterval = 1800;
config.statistics.refreshInterval = 20;
config.statistics.paymentsInterval = 20;
config.statistics.hashrateWindow = 300;
config.statistics.historicalWindow = 86400;

config.settings = {};
config.settings.blockRefreshInterval = 1000;
config.settings.connectionTimeout = 600;
config.settings.jobRebroadcastTimeout = 60;
config.settings.tcpProxyProtocol = false;

config.primary = {};
config.primary.address = 'YOUR_POOL_REWARD_ADDRESS';

config.primary.coin = {};
config.primary.coin.name = 'BlackRaven';
config.primary.coin.symbol = 'BLKR';
config.primary.coin.asicboost = false;
config.primary.coin.getinfo = false;
config.primary.coin.hybrid = false;
config.primary.coin.parameters = {};
config.primary.coin.segwit = true;
config.primary.coin.version = 2;

config.primary.coin.algorithms = {};
config.primary.coin.algorithms.mining = 'kawpow';
config.primary.coin.algorithms.block = 'sha256d';
config.primary.coin.algorithms.coinbase = 'sha256d';

config.primary.coin.rewards = {};
config.primary.coin.rewards.type = 'raptoreum';
config.primary.coin.rewards.addresses = [];

config.primary.coin.mainnet = {};
config.primary.coin.mainnet.bech32 = '';
config.primary.coin.mainnet.bip32 = {};
config.primary.coin.mainnet.bip32.public = Buffer.from('0488B21E', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.bip32.private = Buffer.from('0488ADE4', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.peerMagic = '424c4b52';
config.primary.coin.mainnet.pubKeyHash = Buffer.from('19', 'hex').readUInt8(0);
config.primary.coin.mainnet.scriptHash = Buffer.from('7a', 'hex').readUInt8(0);
config.primary.coin.mainnet.wif = Buffer.from('70', 'hex').readUInt8(0);
config.primary.coin.mainnet.coin = 'blkr';

config.primary.coin.testnet = {};
config.primary.coin.testnet.bech32 = '';
config.primary.coin.testnet.bip32 = {};
config.primary.coin.testnet.bip32.public = Buffer.from('043587CF', 'hex').readUInt32LE(0);
config.primary.coin.testnet.bip32.private = Buffer.from('04358394', 'hex').readUInt32LE(0);
config.primary.coin.testnet.peerMagic = '60635665';
config.primary.coin.testnet.pubKeyHash = Buffer.from('2A', 'hex').readUInt8(0);
config.primary.coin.testnet.scriptHash = Buffer.from('7c', 'hex').readUInt8(0);
config.primary.coin.testnet.wif = Buffer.from('72', 'hex').readUInt8(0);
config.primary.coin.testnet.coin = 'tblkr';

config.primary.daemons = [];
const daemon = {};
daemon.host = '127.0.0.1';
daemon.port = 9776;
daemon.username = 'blackraven';
daemon.password = 'YOUR_RPC_PASSWORD';
config.primary.daemons.push(daemon);

config.primary.payments = {};
config.primary.payments.enabled = false;
config.primary.payments.checkInterval = 20;
config.primary.payments.paymentInterval = 7200;
config.primary.payments.minConfirmations = 10;
config.primary.payments.minPayment = 0.005;
config.primary.payments.transactionFee = 0.04;
config.primary.payments.daemon = {};
config.primary.payments.daemon.host = '127.0.0.1';
config.primary.payments.daemon.port = 9776;
config.primary.payments.daemon.username = 'blackraven';
config.primary.payments.daemon.password = 'YOUR_RPC_PASSWORD';

config.primary.recipients = [];

module.exports = config;
