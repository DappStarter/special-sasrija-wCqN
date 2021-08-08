require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth snow common include ensure obscure gate'; 
let testAccounts = [
"0xac471112c375c796791b63c7a380d13013521986210347f216b7cb71dab6acb7",
"0xc13e90270f8e9ec13e188b419bf57eaf7df3c16bdf21a44377220c717d3f16ce",
"0x404df17c3a6095a8e77a54d0f31dd667bdf23eb26465ac0234ee0cf4b046b55a",
"0x7a96bad8c56e7d3666c81bc19d8bb6727503c5d165834185dc01473fc489f1b4",
"0x7e2cdf05fae2575d6d6ee222c16621313dc75d714cbea6c4b0cf20dbcc4ed9ac",
"0x6063bc0536063f29cf924ff3a459fb11150ee1c1d6a2392d83b525c757ebd05a",
"0x8aaed27e82142503143ec679d525dddb5dad3dab610c05ff14cbdeb28e784dd1",
"0xe07e9bbce51d0bb1453de965101d0148774c2be7e718336b80ae2a12285c2d06",
"0x8dfd2a1f2bfa1c3d0e4cf4a77b797232ccaf6a4311a52842afa0a5848b86d21f",
"0x8752ee6a5cc52e9ab627807c479d1b937f826c9f163239dd046b3cc11039b3e0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

