/*
 * Translation class
 */

/*
 * Shouts - possibly added to the end of a sentence
 */
var shouts = [
  ", avast! ",
  ", ahoy! ",
  ", and a bottle of rum! ",
  ", by blackbeard's sword. ",
  ", by davy jones' locker. ",
  ", walk the plank! ",
  ", aarrr! ",
  ", yaaarrrrr! ",
  ", pass the grog! ",
  ", and dinna spare the whip! ",
  ", with a chest full of booty. ",
  ", and a bucket o' chum. ",
  ", we'll keel-haul ye! ",
  ". shiver me timbers! ",
  ". and hoist the mainsail! ",
  ". and swab the deck! ",
  ", ye scurvey dog. ",
  ". fire the cannons! ",
  ", to be sure. ",
  ", i'll warrant ye. "
],


/*
 * Translations - find and replace
 */
translations = {
  'after'               : 'aft',
  'afternoon'           : 'avo\'',
  'airplane'            : 'flying machine',
  'am'                  : 'be',
  'and'                 : '\'n',
  'are'                 : 'be',
  'around'              : 'aroun',
  'attractive'          : 'comely',
  'back'                : 'aft',
  'bank'                : 'buried treasure',
  'beer'                : 'grog',
  'between'             : 'betwixt',
  'blog post'           : 'tale',
  'blog'                : 'tale',
  'boat'                : 'jollyboat',
  'book'                : 'tale',
  'boss'                : 'admiral',
  'boys'                : 'laddies',
  'boy'                 : 'lad',
  'brief'               : 'quest',
  'briefs'              : 'quests',
  'busy'                : 'treacherous',
  'cab'                 : 'sailboat',
  'captain'             : 'cap\'n',
  'captains'            : 'boatswains',
  'cars'                : 'boats',
  'car'                 : 'boat',
  'case study'          : 'treasure hunt',
  'cash'                : 'booty',
  'cheat'               : 'hornswaggle',
  'child'               : 'sprog',
  'children'            : 'little sandcrabs',
  'christmas'           : 'Davy Jones\' birthday',
  'computer'            : 'cannon',
  'computers'           : 'cannons',
  'co-workers'          : 'shipmates',
  'co-worker'           : 'shipmate',
  'coin'                : 'doubloon',
  'comes'               : 'hails',
  'crap'                : 'bilge',
  'crew'                : 'hands',
  'didn\'t'             :  'di\'nae',
  'died'                : 'visited davey jones\' locker',
  'die'                 : 'visit davey jones\' locker',
  'dinner'              : 'chow',
  'do not'              : 'dern\'t',
  'don\'t'              : 'dern\'t',
  'don\'t know'         : 'dinna',
  'drink'               : 'barrel o\' rum',
  'drive'               : 'sail',
  'driver'              : 'helmsman',
  'driving'             : 'sailing',
  'dude'                : 'lubber',
  'earlier'             : 'afore',
  'email'               : 'hail',
  'ever'                : 'e\'er',
  'everyone'            : 'landlubbers',
  'excuse me'           : 'arrr',
  'fellow'              : 'lubber',
  'film'                : 'treasure hunt',
  'find'                : 'come across',
  'flag'                : 'jolly roger',
  'food'                : 'grub',
  'for'                 : 'fer',
  'forward'             : 'fore',
  'freelance'           : 'mercenary',
  'friend'              : 'matey',
  'friends'             : 'maties',
  'front'               : 'fore',
  'get out of my way'   : 'gangway!',
  'girl'                : 'lassie',
  'girls'               : 'lassies',
  'gold'                : 'doubloon',
  'good luck'           : 'godspeed!',
  'goodbye'             : 'walk the plank',
  'guy'                 : 'lubber',
  'have'                : '\'ave',
  'hadn\'t'             : 'ha\'nae',
  'happy'               : 'grog-filled',
  'haven\'t'            : 'ha\'nae',
  'he'                  : 'the ornery cuss',
  'hello'               : 'ahoy',
  'her'                 : 'that comely wench',
  'hey'                 : 'avast',
  'he\'s'               : 'he be',
  'hi'                  : 'yo-ho-ho',
  'highway'             : 'ocean',
  'him'                 : 'that scurvey dog',
  'home'                : 'ship',
  'hotel'               : 'fleabag inn',
  'how far'             : 'how many leagues',
  'is'                  : 'be',
  'it\'s'               : '\'tis',
  'jet'                 : 'flying machine',
  'junior'              : 'wee',
  'just'                : 'jus\'',
  'kitchen'             : 'galley',
  'kids'                : 'minnows',
  'kill'                : 'keel-haul',
  'killed'              : 'keel-hauled',
  'know'                : 'be knowin',
  'lady'                : 'wench',
  'lawyer'              : 'scurvy land lubber',
  'lean'                : 'careen',
  'leave'               : 'walk the plank',
  'left'                : 'port',
  'little'              : 'wee',
  'look'                : 'looksee',
  'lunch'               : 'grub',
  'machine'             : 'contraption',
  'mac'                 : 'fruit cannon',
  'macs'                : 'fruit cannons',
  'mad'                 : 'addled',
  'madam'               : 'proud beauty',
  'mall'                : 'market',
  'man'                 : 'landlubber',
  'manager'             : 'admiral',
  'mate'                : 'matey',
  'meeting'             : 'parley',
  'money'               : 'doubloons',
  'morning'             : 'morn',
  'mother'              : 'dear ol\' mum, bless her black soul',
  'movie'               : 'treasure hunt',
  'mum'                 : 'dear ol\' mum, bless her black soul',
  'music'               : 'shanties',
  'my'                  : 'me',
  'myself'              : 'meself',
  'nearby'              : 'broadside',
  'never'               : 'ne\'er',
  'no'                  : 'nay',
  'nonsense'            : 'bilge',
  'nose'                : 'prow',
  'ocean'               : 'briny deep',
  'of'                  :  'o\'',
  'office'              : 'cabin',
  'officer'             : 'foul blaggart',
  'old'                 : 'auld',
  'over'                : 'o\'er',
  'pardon me'           : 'avast',
  'pc'                  : 'cannon',
  'pcs'                 : 'cannons',
  'person'              : 'landlubber',
  'pirate'              : 'drivelswigger',
  'pirates'             : 'drivelswiggers',
  'prize'               : 'booty',
  'project'             : 'booty',
  'pub'                 : 'skull & scuppers',
  'punishment'          : 'flogging',
  'quickly'             : 'smartly',
  'raid'                : 'pillage',
  'restaurant'          : 'galley',
  'restroom'            : 'head',
  'right'               : 'starboard',
  'road'                : 'sea',
  'roads'               : 'seas',
  'rob'                 : 'pillage',
  'rope'                : 'line',
  'rubbish'             : 'bilge',
  'sack'                : 'pillage',
  'sailor'              : 'swab',
  'scout'               : 'lookout',
  'she'                 : 'the winsome lass',
  'shit'                : 'bilge',
  'sir'                 : 'matey',
  'sleep'               : 'take a caulk',
  'song'                : 'shanty',
  'stop'                : 'belay',
  'stranger'            : 'scurvy dog',
  'street'              : 'river',
  'streets'             : 'rivers',
  'studio'              : 'lower deck',
  'stupid'              : 'addled',
  'supper'              : 'chow',
  'suv'                 : 'ship',
  'sword'               : 'cutlass',
  'taxi'                : 'sailboat',
  'team'                : 'crew',
  'talk'                : 'natter',
  'tell'                : 'be tellin',
  'there'               : 'thar',
  'their'               : 'thar',
  'the'                 : 'th\'',
  'to'                  : 't\'',
  'truck'               : 'schooner',
  'trucks'              : 'schooners',
  'very'                : 'mightily',
  'was'                 : 'were bein',
  'wasn\'t'             : 'weren\'t',
  'we\'re'              : 'we be',
  'where'               : 'whar',
  'with'                : 'wit\'',
  'wife'                : 'lady',
  'wine'                : 'grog',
  'work post'           : 'booty',
  'work'                : 'booty',
  'woman'               : 'wench',
  'xmas'                : 'Davy Jones\' birthday',
  'yes'                 : 'aye',
  'you'                 : 'ye',
  'your'                : 'yer'
};


/*
 * Replacement method
 */
function translate(str) {
  
  console.log("original sentence: ", str);

  // don't spam people...
  str = str.replace('@', '_');
  str = str.replace('#', '_');
  
  // replace words
  for (var translation in translations) {
    var re = new RegExp(translation,"gi");
    str = str.replace(re, translations[translation]);
  }

  // condition : sometimes add in a funny end to a sentence
  if (Math.random() > 0.8) {
    var rand = Math.floor(Math.random() * shouts.length);
    str = str.replace(". ", shouts[rand]);
  }

  // a nice extra touch
  str = str.replace("/ing/gi", "in'");

  // ensure new text length is <= 140 characters
  if (str.length > 140) {
    str = str.substring(0, 137) + "...";
  }

  console.log("munged sentence: ", str);
  
  return str;
}


/*
 * Expose public methods
 */
module.exports = {
  translate: translate
};