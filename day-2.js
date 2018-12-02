const _ = require('lodash');
const stringSimilarity = require('string-similarity');

const exampleIdsPart1 = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];
const exampleIdsPart2 = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];
const boxIds = ['kbqwtcvzgumhpwelrnaxydpfuj', 'kbqwtcvzgsmhpoelryaxydiqij', 'kbqwpcvzssmhpoelgnaxydifuj', 'kbqgtcvxgsmhpoalrnaxydifuj', 'kbqwtcvygsmhpoelrnaxydiaut', 'kbqwtcvjgsmhpoelrnawydzfuj', 'kbqftcvzgsmhpoeprnaxydifus', 'rbqwtcgzgsxhpoelrnaxydifuj', 'kbqwtlvzgvmhpoelrnaxkdifuj', 'kbqwtcvzgsmhpolqrnaxydifub', 'kbqbtcqzgsmhposlrnaxydifuj', 'kbqwmcvzgswhpoelxnaxydifuj', 'kbqwtyvzgsmhkoelrnsxydifuj', 'khqwtcvzgsmhqoelinaxydifuj', 'koqwtcvzcsmhpoelrnaxydizuj', 'kbqwtcvzlsmhpoezrnaxydmfuj', 'kbqwtcvzdsmhpoelrjaxydifij', 'kbqwtcvzgsmhpoelrncxyjifuk', 'kbtwtcvzgsmhpoelonaxydiwuj', 'kbqwfcrzgsmhpoelrnaeydifuj', 'kbqutcvkgsmhpoelrnfxydifuj', 'kbqwtcvzgsmvvoelrnaxydihuj', 'kbqwtcvzhymhpoelrnaxydifyb', 'kbqctcvzgumhpoalrnaxydifuj', 'kuqktcvzgsmhpoelrnaxydieuj', 'kbqwtcvzgsmvpozlrnaxydifmj', 'kbqwtcvzgsmhpojlraaxydiouj', 'kbqwtcvzgmmhpoelknaxydizuj', 'kbwwtcvzgsmhpoefrnaxydifij', 'kbqwucvzgsmhpoelvnahydifuj', 'kbqwtcvzpsmhpgelrqaxydifuj', 'kblqtcvzgsmhpoeirnaxydifuj', 'kbqwtcvzgsmhpovlrnabydifum', 'kbqwwcvzgsmhpoelrnaoydnfuj', 'kyqwdcvzgsmhpoelrnaxfdifuj', 'kbqftcvzgsmxpoelknaxydifuj', 'kbqwtsvzksmhpoelqnaxydifuj', 'kbqwtcvzgsmhplelrnauydifux', 'kbqytcvzgsmhpkelrnaxydefuj', 'kbqwtcvzgsmjjoelrlaxydifuj', 'kbqvtcvzgsmhpoelnnaxydafuj', 'kbqwtcvzgsjhioelrnaxpdifuj', 'kbqptcvpgsmhpoelrnaxydiful', 'kbqwjcazgimhpoelrnaxydifuj', 'kbqxtcvzgwmhpaelrnaxydifuj', 'kbqwtcezgsmhqoelrnaxydifub', 'kbqwtcvzgsmhooelynaxydifuf', 'kbqwtwvzgsmkpoelrnaxrdifuj', 'nbqwtcvugsmhpoelrnzxydifuj', 'kbvwqcvzgsmhpoelsnaxydifuj', 'kbqwtcyzjsmhpoelrnaxymifuj', 'kbqwtcvzgsmhpoclrnaxykzfuj', 'kbbwtcvzgsmhyodlrnaxydifuj', 'kbwwtcvzgsmytoelrnaxydifuj', 'kbmwtcczgpmhpoelrnaxydifuj', 'ubqwtcvzgsmmpoblrnaxydifuj', 'kbqwtcvzgrmhpoelrnaxnrifuj', 'kbqwhcvzgsmhpoelynaaydifuj', 'kbqwtcvzgsmtpoelrcpxydifuj', 'kdqwtchzgsmhpoelrmaxydifuj', 'qbqrncvzgsmhpoelrnaxydifuj', 'kbqwtcvzghshpoelrnaxodifuj', 'kbqwhcvzgsmhpoelknaxydiwuj', 'ebqwtcvzgsmhpoelrotxydifuj', 'kbqwacvzusmhpoelryaxydifuj', 'kbqwtcvggsmhpoelrnaxygifyj', 'kbqwtcvzgsmhpoelrnaxycwfuo', 'kzqwzcvzgsmhpoelrxaxydifuj', 'khqwtcvzgsmhpoelrnaxldifyj', 'kbqwtbtzgsmhpoelrnaxydifud', 'gbqwtcvzgqmhpoelrnaxydifrj', 'kbqdtqvzgwmhpoelrnaxydifuj', 'kbqwscvzgsmhpoelrpaxypifuj', 'kmqwtcdzgsmhpoelenaxydifuj', 'klqwtcvvgsmhpoelrfaxydifuj', 'kbuwtcvzgsmhpoelrtaxyuifuj', 'kbqwtcvrgomhpoelrnaxydijuj', 'kbqwtgvzgsmhzoelrnpxydifuj', 'kbqltcvzgsmhooeljnaxydifuj', 'kbqwtcvzgbmxpoelrnaxydivuj', 'kbqdtcmzgsmhpoelrnaxydmfuj', 'kbqwtcazgsmhpoplrnacydifuj', 'kbqztcvegsmhpoelrnvxydifuj', 'kbqwtcvzgsmhpoecrnaxydzfsj', 'kbqwtcvzgsmepoelrnaqydifuf', 'kbqwtcqzgsmhpoelrnoxydivuj', 'kbqwtcvzgsmhpoeylnaxydhfuj', 'kbqwtcvfgsmhpoelrnaxgdifyj', 'kbqwtcvzgsmhnbelrnaxyfifuj', 'kbqwtcvzgsmhpoelrnaxbdffmj', 'kwqwtcvogtmhpoelrnaxydifuj', 'kdqwtcvzggyhpoelrnaxydifuj', 'kbqwtuvzgtmhpoelrnaxydifxj', 'kbqctdvzcsmhpoelrnaxydifuj', 'kbqwtcvzgsmhpoblrniyydifuj', 'kbqwucvzzsmhpoelrnvxydifuj', 'kbqwtcvzgslzpoelrnaxydiruj', 'kbqwtdmzgsmhpwelrnaxydifuj', 'kbqwtcvzgsmhpoilrnaxqiifuj', 'kbqwtcvzgsmhpgelrnaxydisnj', 'kbdwtqvzgsmhpoelrnaxydivuj', 'kbqvtdvzgsmhpoelrjaxydifuj', 'kfqwtcvzgsmhpoeurnyxydifuj', 'kbqwtcvzgsmhpoglrnaxqkifuj', 'kbqwtcvrgsmhpoelrnajydifnj', 'xbqwpcvzgjmhpoelrnaxydifuj', 'kbqwtcvzgsmhpoelrdaxvdihuj', 'kbuwtcvzssmhpoklrnaxydifuj', 'kbqwtcvzgqmhpoelrnzxydifbj', 'kbqwtcvzgsmhsoeoknaxydifuj', 'kfqltcvzgsmhpoelrnaxydifnj', 'qbqwtsvzgsmhpoelrnaxodifuj', 'kbqwwevzgsmypoelrnaxydifuj', 'kbqwtcuzgimhpoelrnaxydffuj', 'kxqwlcvzgsmhpoelrnaxyrifuj', 'nbqwtcvzgsmhpoelryaxyiifuj', 'kbqwtcvzgsmhhoxlreaxydifuj', 'mbqwtcvzfsmxpoelrnaxydifuj', 'kbqwttvzgsmhpoeqrnaxidifuj', 'kbqwtcvzgamhpielrnaxyiifuj', 'rfqwtcvzgsmhpoelrnaxydifun', 'kbpwtqvzgsmbpoelrnaxydifuj', 'kbqwtcvzgsmhpoqlroaxydifua', 'hbqwtcvzksmhpoelrnaxydbfuj', 'kaqutcvzgsmhpoelrnaxydiiuj', 'kbqctcvzgsnhpoelrcaxydifuj', 'kbqwtnvzgsmhpoelrnaxydqfoj', 'kbqwtcvzhsmhpoelrnaxydifyb', 'ubqwtcvcgsmhooelrnaxydifuj', 'kbqwtcvrgsmhpoelrnaxtdivuj', 'kbqwtcvzgsmhplelrnmxydifaj', 'ebqwlcvzghmhpoelrnaxydifuj', 'hbqwtcvzgsmhpoelrnaqyeifuj', 'kbqstcvzgsmeprelrnaxydifuj', 'kbqwtcvogsthpoelrnnxydifuj', 'ybqwtcvzgdmhpoelrnaxydufuj', 'kbqutcvzgsmhpoelrnaxydifgx', 'kbqwtcvzgsmhpozlunadydifuj', 'kkqwtcvzgsmhpuefrnaxydifuj', 'kbqrtcvzgsmhpoelrnaxcdifuq', 'kbqwtcvzjsmupoelrnaxydiluj', 'kbqwmcvzgsuhpoelrnaxydifhj', 'kbqwfcvzgsmhpoelrnaxydkzuj', 'kbqatcvzgsdhpoeyrnaxydifuj', 'kbtwtcvzusmhpoelrxaxydifuj', 'kbqwtcwzgsmhpoelrnaxysofuj', 'kbqqtcvmgsmhpoevrnaxydifuj', 'kbqwjcvzgsmhpoelrnaxydhuuj', 'mbdwtcvzgsmhpoelqnaxydifuj', 'kbqwtcvlgsmhpoelrdaxydifaj', 'kbqwtcvzgsmmpoelrlaxydnfuj', 'kbqwtchfggmhpoelrnaxydifuj', 'kbqqtcvzgsyhpoelrnaxyoifuj', 'knqwtcvzqsmupoelrnaxydifuj', 'kdqdtcvzgsmhpoelrnaxydmfuj', 'kbqwtcvzgsmhptelrnawyhifuj', 'kbqwtcvzgrmhpoeqrnaxydifuw', 'kbnxtcvzgsmhpoelrnauydifuj', 'kbqwacvsgsmhpoelrnaxydifgj', 'kbqwtcvzgsmhpperrnaxydifuc', 'gbqwtcvzgsqhxoelrnaxydifuj', 'kbqwtcvzgsmhpoeljgaxydifwj', 'kbqktcvzgsmhpotlrnatydifuj', 'bbqwtcvzgsmhpoilrnaxydjfuj', 'kbqwecvdgsmhpoelrnaxypifuj', 'keqwtcvzgemhpotlrnaxydifuj', 'kbqptcvzgsmvpoelrnaxydixuj', 'kbqwbctzgsmhpoelrnaxydifup', 'kbqwtcvzgszhpbelrnzxydifuj', 'mbqwtcvtgsmhpoeyrnaxydifuj', 'kbqwtcvzgsmhqcelrhaxydifuj', 'kbqotcvzgsmhooelrnazydifuj', 'kbqwtcvzgsmhpoelmpaxyiifuj', 'kbqwtcvwgsmypoclrnaxydifuj', 'kbqwtcvsgskhpoelrnaxykifuj', 'kbqwtcvzgszvpoelrnwxydifuj', 'kbqwtcvzgsmhpoejonaxydrfuj', 'kbqwtcvzgsmhkoelrnazyqifuj', 'kbzwtzvzgsmhptelrnaxydifuj', 'kbqwtcdzgsmhptelrnaxydiduj', 'kbqwtcvzgamhpoelrnakyzifuj', 'kbqwtcvzgsmhpoeonnaxydifxj', 'kbqwtcvzgsmhpoeranaxydifej', 'kbqwscvzgsmhpoelunaxydimuj', 'cbqwtcvzgsmhpoelrdaxydefuj', 'vbqwtcjzgsmhpoelrnaxydifua', 'kmqwtcvzksmhpoeljnaxydifuj', 'kbqwtcvzgsmppojlrnasydifuj', 'kaqwtcvfgsmhpoelrnaxydiauj', 'khqwccvzgsmhpoelrnaxydifud', 'vbqwtcvzrsmhpoelrhaxydifuj', 'kuqwtcvzgsmhpoelgnaiydifuj', 'kbqwtcvzdsmhpbelvnaxydifuj', 'kbowtcvzgnmhpoelrfaxydifuj', 'kbqwtcvsgsmhfoejrnaxydifuj', 'kbqwtcvzgskhtoelrnxxydifuj', 'kbqwtcvzgtmhpoevrnaxydivuj', 'bbqptcgzgsmhpoelrnaxydifuj', 'kbqwtpvzgsmnpoelhnaxydifuj', 'kbqwtovzgsmmpoelrnaxydifuw', 'kbqwtcvzgsihpwelrnaxydsfuj', 'kbqwtcvzggmhpollrnaxydifsj', 'kbqwtcjzgsmhpoelrnaxyxifub', 'ebqwtcvzgsmzpoelrnaaydifuj', 'kbqwtcvzusmhpoelrnqxydijuj', 'obqwtcvzgsghpoelrnaxydifkj', 'kbrwtcvzmdmhpoelrnaxydifuj', 'kbqwtcvzxsmhpoblrnhxydifuj', 'kbqwacvzgsahpoelrnaxydiguj', 'kyqwtcvzgsmipoelrnlxydifuj', 'kbbwtcvzgsmhboelpnaxydifuj', 'kbqwtcvzgsmhpoelrnaxhdosuj', 'kbqwtgvzgxmhpoelrnaxyrifuj', 'pbqwtsvzgsmhpoelrnabydifuj', 'kbqrtcvzgsmhpsblrnaxydifuj', 'kbqwtcvzgsmhpoexrnaaycifuj', 'kbqxtcvzgsjhkoelrnaxydifuj', 'kbqwtcvzgsmhpxelrnaxydifby', 'lbxwtcvzgsmdpoelrnaxydifuj', 'kbqwtcczgsmhpoklrnzxydifuj', 'zbqwtcvzgsmhpoelrbaxydifui', 'krqwtcvzbsmhpoelrjaxydifuj', 'kbkwtcvzgsmhpoelrnaxydiacj', 'kbqwtcvzgszhpseprnaxydifuj', 'kbxwtcvzxsmhpoesrnaxydifuj', 'kbqwdcvzgsmhpoelrbaxygifuj', 'kbqwthkzgsmhhoelrnaxydifuj', 'klqwtchzgamhpoelrnaxydifuj', 'obqwtcvzgsvcpoelrnaxydifuj', 'kblwtcvzgsmhpoelrnanydifuw', 'kbqwtrvzgsmhpoelynaxydifug', 'kbqwtcvzgsmhcoelmnaxydkfuj', 'kbqwtcvzgsmhpotlqoaxydifuj', 'kaqatcvzgsmhpoelrnaxyiifuj', 'kbqttcvwgsmhpoelrnaxydifgj', 'kpqwtcvzgsmhpwelynaxydifuj', 'kbqwucvzgsmhpyelrnaxyxifuj', 'kbqwucvzgsmhprelrnaxyfifuj', 'kbqwthvzgsmhphelrnaxylifuj', 'kbqwtcvzosmhdoelrnaxwdifuj', 'kbqwtxvsgsphpoelrnaxydifuj', 'koqwtcvfghmhpoelrnaxydifuj', 'kbtwicvzpsmhpoelrnaxydifuj', 'kbawtcvzgsmhmoelrnaxyiifuj', 'kbqwtcvzgslhpbelrnaxydifuk', 'kbqttcvzgsmypoelrnaxydifua', 'kbqwtcvrgqmhpnelrnaxydifuj', 'kbqwtcvzghmhpoekpnaxydifuj', 'kbqwtcvzgsmupoelrnaxidifui', 'kbqwtcvzgsmhpbelrnaxrdifux'];

function solvePart1(ids) {
  console.log(`Part 1 ==========================================================`);
  let numIdsWithTwo = 0;
  let numIdsWithThree = 0;
  const letterCounts = ids.reduce((accumulator, value) => {
    const letters = value.split('');
    const counted = _.countBy(letters);
    const hasTwos = Object.values(counted).find(val => val === 2);
    const hasThrees = Object.values(counted).find(val => val === 3);

    if (hasTwos) {
      numIdsWithTwo++;
    }

    if (hasThrees) {
      numIdsWithThree++;
    }

    return [...accumulator, counted];
  }, []);

  console.log(`The checksum of my list is: ${numIdsWithTwo * numIdsWithThree} (e.g. ${numIdsWithTwo} * ${numIdsWithThree}) 🎅`);
  console.log(`//===============================================================`);
  console.log(``);
}

// INFO: What letters are common between the two correct box IDs?
// INFO: Correct answer (with example data) is 'fgij';
function solvePart2(ids) {
  console.log(`Part 2 ==========================================================`);
  const bestMatches = ids.filter(id => {
    const matches = stringSimilarity.findBestMatch(id, ids);
    return matches.ratings.find(rating => {
      return (rating.rating > 0.9) && (rating.rating !== 1);
    });
  });

  console.log({ bestMatches });

  // TODO: Remove the parts of the string that are different
  if (bestMatches.length === 2) {
    const idStringArrays = bestMatches.map(id => id.split(''));
    const boxIdSameCharacters = idStringArrays[0].filter((id, index) => id === idStringArrays[1][index]);
    const boxIdActual = boxIdSameCharacters.join('');

    console.log(`The correct box id is: ${boxIdActual} 🎄`);
  }
  else {
    console.log('Unable to find a proper match. 😞');
  }
  console.log(`//===============================================================`);
}

solvePart1(boxIds);
solvePart2(boxIds);
