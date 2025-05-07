
let money = { isTrue: true, value: 20000 };
let eggVoucher = { isTrue: false, value: { 0: 0, 1: 0, 2: 0, 3: 100} };
let pokeball = { isTrue: true, value: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 10} };
let waveIndex = { isTrue: false, value: 199 };
let gender = { isTrue: false, value: 1};
let partyLevel = { isTrue: false, value: [{ level: 100 }] };
let partyShiny = { isTrue: false, value: [{ shiny: true }] };
let partyLuck = { isTrue: true, value: [{ luck: 14 }] };
let enemyParty = { isTrue: false, value: [{ level: 100 }] };
let enemyShiny = { isTrue: true, value: [{ shiny: true }] };
let enemyBoss = { isTrue: true, value: [{ boss: true }] };
const hacks1 = [
    { key: 'money', data: money },
    { key: 'voucherCounts', data: eggVoucher },
    { key: 'pokeballCounts', data: pokeball },
    { key: 'waveIndex', data: waveIndex },
];
const hacks2 = [
    { key: 'level', data: partyLevel },
    { key: 'shiny', data: partyShiny },
    { key: 'luck', data: partyLuck },
];
const hacks3 = [
    { key: 'level', data: enemyParty },
    { key: 'shiny', data: enemyShiny },
    { key: 'boss', data: enemyBoss },
];
(()=>{
    const originalConsoleDebug = unsafeWindow.console.debug;
    unsafeWindow.console.debug = function(...args){
        console.log(args);
        hacks1.forEach(hack =>{
            args.forEach(arg =>{
                if(arg && arg[hack.key] !== undefined && hack.data.isTrue){
                    arg[hack.key] = hack.data.value;
                }
            })
        });
        hacks2.forEach(hack =>{
            args.forEach(arg =>{
                if(arg && arg.party !== undefined && Array.isArray(arg.party) && hack.data.isTrue){
                    arg.party[0][hack.key] = hack.data.value[0][hack.key];
                }
            })
        });
        hacks3.forEach(hack =>{
            args.forEach(arg =>{
                if(arg && arg.enemyParty !== undefined && Array.isArray(arg.enemyParty) && hack.data.isTrue){
                    arg.enemyParty[0][hack.key] = hack.data.value[0][hack.key];
                }
            })
        });
    }
})();
