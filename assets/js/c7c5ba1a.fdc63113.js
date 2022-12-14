(self.webpackChunk=self.webpackChunk||[]).push([[6104],{7940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var n=a(4165),o=a(5861),r=a(7294),s=a(3444),i=a(7764),c=a(7425);function l(e,t,a){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var r,c,l,d,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,c=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return l=new s.U(r),e.next=21,i.G.create({provider:l});case 21:d=e.sent,(u=a.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return c=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return c=(c=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+a);case 35:return e.abrupt("return",c);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,a,n){switch(t){case"humanReadable":(0,c.HumanReadable)(e,a,n);break;case"precise":(0,c.Precise)(e,a,n);break;case"blocksToDays":(0,c.BlocksToDays)(e,n);break;case"arrayLength":(0,c.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,a=e.path,s=e.defaultValue,i=e.filter,c=void 0===i?void 0:i,d=(0,r.useState)(""),p=d[0],h=d[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==c?u(s.toString(),c,t,h):h(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t,a,h);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==c?u(o,c,t,h):h(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(i){console.log(i)}}}),[]),p}},7425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var o=void 0;if("polkadot"===a||"statemint"===a)o=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(o)+" "+t[a].symbol).toString())},Precise:function(e,a,n){n(e=(e=parseFloat(e))/t[a].precision+" "+t[a].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},3706:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),s=a(7940),i=["components"],c={id:"learn-accounts",title:"Polkadot Accounts",sidebar_label:"Polkadot Accounts",description:"An explanation of accounts, indices, identity, and reaping.",keywords:["account","polkadot account","polkadotjs","indices","identity","reaping"],slug:"../learn-accounts"},l=void 0,d={unversionedId:"learn/learn-accounts",id:"learn/learn-accounts",title:"Polkadot Accounts",description:"An explanation of accounts, indices, identity, and reaping.",source:"@site/../docs/learn/learn-accounts.md",sourceDirName:"learn",slug:"/learn-accounts",permalink:"/docs/learn-accounts",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-accounts.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1668498311,formattedLastUpdatedAt:"Nov 15, 2022",frontMatter:{id:"learn-accounts",title:"Polkadot Accounts",sidebar_label:"Polkadot Accounts",description:"An explanation of accounts, indices, identity, and reaping.",keywords:["account","polkadot account","polkadotjs","indices","identity","reaping"],slug:"../learn-accounts"},sidebar:"docs",previous:{title:"Thousand Contributors Programme",permalink:"/docs/thousand-contributors"},next:{title:"Account Generation",permalink:"/docs/learn-account-generation"}},u={},p=[{value:"Account Address",id:"account-address",level:2},{value:"Mnemonic and Address Generation",id:"mnemonic-and-address-generation",level:3},{value:"Obtaining and Managing an Address",id:"obtaining-and-managing-an-address",level:3},{value:"Account Balance Types",id:"account-balance-types",level:2},{value:"Unlocking Locks",id:"unlocking-locks",level:3},{value:"Existential Deposit and Reaping",id:"existential-deposit-and-reaping",level:2},{value:"Account Identity",id:"account-identity",level:2},{value:"Proxy Accounts",id:"proxy-accounts",level:2},{value:"Multi-signature Accounts",id:"multi-signature-accounts",level:2},{value:"Resources",id:"resources",level:2}],h={toc:p};function m(e){var t=e.components,c=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document covers the basics of Polkadot\naccounts. See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced"},"Advanced Account")," page for more information about\naccounts such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced#derivation-paths"},"account derivation")," and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced#indices"},"indices"),". For a more in-depth explanation of the cryptography\nbehind Polkadot accounts, please see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-cryptography"},"the cryptography page"),"."),(0,r.kt)("h2",{id:"account-address"},"Account Address"),(0,r.kt)("p",null,"An address is the public part of a Polkadot\naccount. The private part is the key used to access this address. The public and private parts\ntogether make up a Polkadot account. You can\nthink of the public address of your account like your mailbox and the private key like the key to\nopen that mailbox. Anybody can send mail to your mailbox, but only you can access them as only you\nhave access to its key. In the context of\nPolkadot accounts, anybody can send tokens to\nyour public address but only you can transact with them using your private key. That is why you\nshould keep your private key secret."),(0,r.kt)("h3",{id:"mnemonic-and-address-generation"},"Mnemonic and Address Generation"),(0,r.kt)("p",null,"A valid account requires a private key that can sign on to one of the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build-protocol-info#cryptography"},"supported curves and signature schemes"),". Without a\nprivate key an account cannot sign anything. In\nPolkadot there are some exceptions of accounts\nthat do not have private keys (i.e. key-less accounts). Such accounts are\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-multisig"},"multi-signature accounts")," and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-proxies/#anonymous-proxies"},"anonymous proxies")," that are not discussed here and are meant\nfor an advanced audience."),(0,r.kt)("p",null,"Most wallets generate a mnemonic phrase for users to back up their wallets and generate a private\nkey from the mnemonic. Not all wallets use the same algorithm to convert from mnemonic phrase to\nprivate key, which affects the ability to use the same mnemonic phrase in multiple wallets. Wallets\nthat use different measures will arrive at a different set of addresses from the exact mnemonic\nphrase."),(0,r.kt)("admonition",{title:"Not all wallets use the same algorithm to convert from mnemonic phrase to private key",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/command-line-tools/subkey/"},"Subkey")," and Polkadot-JS based\nwallets use the BIP39 dictionary for mnemonic generation, but use the entropy byte array to generate\nthe private key, while full BIP39 wallets (like Ledger) use 2048 rounds of PBKDF2 on the mnemonic.\nThe same mnemonic may generate different private keys on other wallets due to the various\ncryptographic algorithms used. See\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-bip39"},"Substrate BIP39 Repo")," for more information.")),(0,r.kt)("p",null,"A typical mnemonic phrase generated by\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/command-line-tools/subkey/"},"the Subkey tool")," is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"'caution juice atom organ advance problem want pledge someone senior holiday very'\n")),(0,r.kt)("p",null,"Its corresponding ",(0,r.kt)("em",{parentName:"p"},"private/public keypair")," is also shown."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Secret seed (Private key): 0x056a6a4e203766ffbea3146967ef25e9daf677b14dc6f6ed8919b1983c9bebbc\nPublic key (SS58): 5F3sa2TJAWMqDhXG6jhV4N8ko9SxwGy8TpaNS1repo5EYjQX\n")),(0,r.kt)("p",null,"Polkadot default address format is the ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiAddress")," type. This means that the same mnemonic phrase\nwill generate public keys for different parachains. For more information see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced#address-format"},"Address Format")," section on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced"},"Advanced Account")," page."),(0,r.kt)("h3",{id:"obtaining-and-managing-an-address"},"Obtaining and Managing an Address"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To learn more about generating accounts on\nPolkadot visit the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},"Account Generation page"),".")),(0,r.kt)("h2",{id:"account-balance-types"},"Account Balance Types"),(0,r.kt)("p",null,"In Polkadot there are different types of\nbalance depending on the account activity. Different balance types indicate whether your balance can\nbe used for transfers, to pay fees, or must remain frozen and unused due to an on-chain requirement.\nBelow we give an example of different balance types on Kusama\n(note that on Polkadot the situation will look the same)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"account_balance_types",src:a(4241).Z,width:"1061",height:"291"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"total")," balance indicates the total number of tokens in the account. Note that this number\ndoes not necessarily correspond to the tokens you are allowed to transfer. In the example the\ntotal number of tokens in 0.6274 KSM.\nThe ",(0,r.kt)("strong",{parentName:"li"},"transferrable")," balance indicates the number of tokens that are free to be transferred. This\nis calculated by subtracting the number of ",(0,r.kt)("em",{parentName:"li"},"locked")," and ",(0,r.kt)("em",{parentName:"li"},"reserved")," tokens from the total number of\ntokens. Locked funds correspond to tokens used in staking, governance, and vested transfers (see\nbelow). In the example, the transferrable balance is 0.0106 KSM."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"vested")," balance indicates tokens that were sent to the account and that are released with a\nspecific time schedule. The tokens are owned by the account but are ",(0,r.kt)("em",{parentName:"li"},"locked")," and become available\nfor transfer after a specific number of blocks. In the example, the vested balance is 0.25 KSM."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"bonded")," balance indicates the number of tokens that are ",(0,r.kt)("em",{parentName:"li"},"locked")," for on-chain participation\nto staking. In the example the bonded balance is 0.4 KSM."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"democracy")," balance indicates the number of tokens that are ",(0,r.kt)("em",{parentName:"li"},"locked")," for on-chain\nparticipation to democracy (i.e. voting for referenda and council). In the example, the democracy\nbalance is 0.4 KSM."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"redeemable")," balance indicates the number of tokens that are ready to be unlocked to become\ntransferrable again. Those tokens already went through the unbonding period. In this case, the\nredeemable balance is 0.1 KSM."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"locked")," balance indicates the number of tokens that are frozen for on-chain participation\nto staking and democracy, or for vested transfers. ",(0,r.kt)("strong",{parentName:"li"},"Locks do not stack"),", which means that if you\nhave different locks the total locked balance is not the addition of all single locks. Instead,\n",(0,r.kt)("strong",{parentName:"li"},"the biggest lock decides the total locked balance"),". In the example, the locked balance is 0.55\nKSM because the biggest lock is on democracy (0.55 KSM)."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"reserved"),' balance indicates the number of tokens that are frozen for on-chain activity\nother than staking, governance, and vested transfers. Such activity can be setting an identity or\na proxy. Reserved funds are held due to on-chain requirements and can usually be freed by taking\nsome on-chain action. For example, the "Identity" pallet reserves funds while an on-chain identity\nis registered, but by clearing the identity, you can unreserve the funds and make them free again.\nThe same applies to proxies. The idea is that those actions require some network memory usage that\nis not given for free. In the example we created a governance proxy and the reserved funds for\nthis are 0.0668 KSM.')),(0,r.kt)("h3",{id:"unlocking-locks"},"Unlocking Locks"),(0,r.kt)("admonition",{title:"Locks do not stack!",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The biggest lock decides the total amount of locked funds. See\n",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/LHgY7ds_bZ0"},(0,r.kt)("strong",{parentName:"a"},"this walk-through video tutorial"))," that will guide you in the process\nof unlocking funds in the example above.")),(0,r.kt)("p",null,"In the example, we mentioned that the locked balance is 0.55 KSM because the biggest lock is on\ndemocracy and is 0.55 KSM. As soon as the democracy lock is removed the next biggest lock is on\nstaking 0.5 KSM (bonded 0.4 KSM + redeemable 0.1 KSM). This means that the locked balance will be\n0.5 KSM, and 0.05 KSM will be added to the transferrable balance. After redeeming the unbonded 0.1\nKSM, the locked balance will be 0.4 KSM, and an additional 0.1 KSM will be added to the\ntransferrable balance. Now the biggest lock is still the bonded one. This means that even if we\nremove the vested lock, the locked balance will still be 0.4 KSM and no tokens will be added to the\ntransferrable balance. To free those bonded tokens we will need to unbond them and wait for the\nunbonding period to make them redeemable. If we remove the proxy the reserved funds will be\nautomatically added to the transferrable balance."),(0,r.kt)("h2",{id:"existential-deposit-and-reaping"},"Existential Deposit and Reaping"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/Wg0pH05CC9Y"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," or visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-"},(0,r.kt)("strong",{parentName:"a"},"this support page")),"\nfor more information about existential deposit.")),(0,r.kt)("p",null,"When you generate an account (address), you only generate a ",(0,r.kt)("em",{parentName:"p"},"key")," that lets you access it. The\naccount does not exist yet on-chain. For that, it needs the existential deposit of\n",(0,r.kt)(s.Z,{network:"polkadot",path:"query.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),"","."),(0,r.kt)("p",null,"Having an account go below the existential deposit causes that account to be ",(0,r.kt)("em",{parentName:"p"},"reaped"),". The account\nwill be wiped from the blockchain's state to conserve space, along with any funds in that address.\nYou do not lose access to the reaped address - as long as you have your private key or recovery\nphrase, you can still use the address - but it needs a top-up of another existential deposit to be\nable to interact with the chain."),(0,r.kt)("p",null,"Transaction fees cannot cause an account to be reaped. Since fees are deducted from the account\nbefore any other transaction logic, accounts with balances ",(0,r.kt)("em",{parentName:"p"},"equal to")," the existential deposit cannot\nconstruct a valid transaction. Additional funds will need to be added to cover the transaction fees."),(0,r.kt)("p",null,"Here's another way to think about existential deposits. Ever notice those ",(0,r.kt)("inlineCode",{parentName:"p"},"Thumbs.db")," files on\nWindows or ",(0,r.kt)("inlineCode",{parentName:"p"},".DS_Store")," files on Mac? Those are junk; they serve no specific purpose other than\nmaking previews a bit faster. If a folder is empty saved for such a file, you can remove the folder\nto clear the junk off your hard drive. That does not mean you lose access to this folder forever -\nyou can always recreate it. You have the ",(0,r.kt)("em",{parentName:"p"},"key"),", after all - you're the computer's owner. It just\nmeans you want to keep your computer clean until you maybe end up needing this folder again and then\nrecreate it. Your address is like this folder - it gets removed from the chain when nothing is in it\nbut gets put back when it has the existential deposit."),(0,r.kt)("h2",{id:"account-identity"},"Account Identity"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/identity"},"Identities pallet")," built\ninto Polkadot allows users to attach on-chain metadata to their accounts. Independent registrars can\nverify this metadata to provide trustworthiness."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To learn more about how to set or release an identity, how to define sub-accounts, or how to become\na registrar, please read ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-identity"},"this guide"),".")),(0,r.kt)("h2",{id:"proxy-accounts"},"Proxy Accounts"),(0,r.kt)("p",null,"Polkadot comes with a generalized proxy account system that allows users to keep keys in cold\nstorage while proxies act on their behalf with restricted (or unrestricted) functionality."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-proxies"},"proxies")," page for more information about proxies.")),(0,r.kt)("h2",{id:"multi-signature-accounts"},"Multi-signature Accounts"),(0,r.kt)("p",null,"Multi-signature accounts are accounts created from several standard accounts, pure proxies, and even\nother multi-sig accounts."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-multisig"},"Multi-signature accounts page")," for a full explanation about\nmulti-signature accounts, including their use-cases.")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/polkadot-keys"},"Understanding Accounts and Keys in Polkadot")," - An\nexplanation of what the different kinds of accounts and keys are used for in Polkadot, with Bill\nLaboon and Chinmay Patel of BlockX Labs.")))}m.isMDXComponent=!0},4241:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/account-balance-types-95095ee12fb785022e957c5ab975a776.png"},3971:()=>{},6601:()=>{}}]);