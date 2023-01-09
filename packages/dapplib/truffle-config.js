require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift renew place concert grace person bottom shed'; 
let testAccounts = [
"0xdda77540dd248cdf28420c2881efaa139b0fdd387ce72053d2bc42435d306def",
"0x4f4bd98f975789deb5665a244f91b6e205fd70a98104eca73d10b372e3a358ab",
"0x52eab1b071120be46f75b9f69e67b479497a2a27fc6f0103a1b5a4ab84fdfb9d",
"0xd65c132fcd46905a818ad892c33f30d9ede2e8684acc7334de1f99f6f827587d",
"0x1a46ced73cbaab38390310b126db95b77f7dca9476f5fda8c5453d15abf4ba26",
"0xbcf4fbe61d2b9c1bce73586bb766038016b551dc06319e0be843211edde8b05b",
"0x08acd28365c9c86fd1224d868873a2817e5f3a9b020f49f02f655b1b29ab2ca3",
"0x7acdccb8ebf99465d308900a6e573e48dd2ef0346c7173c4eefcffee3609bb9c",
"0x420b2208cb623b4280bd42f35a7166197665484f6e50f8b9583b87fe6b920115",
"0xddbe435e194002466e5e6c6a50830682e577356f272cd9644b3c61503c1e725b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

