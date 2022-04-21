angular
  .module('core')
  .filter('checkmark', function ($sce) {
    // returns all words in a sentence as an array, ignoring extra whitespace
    let stringToArray = function (input) {
      if (input) {
        return input.match(/\S+/g);
      }

      return [];
    };

    // returns regex that basically says 'match any word that starts with one of my keywords'
    let getRegexPattern = function (keywordArray) {
      let pattern = '(^|\\b)(' + keywordArray.join('|') + ')';

      return new RegExp(pattern, 'gi');
    };

    return function (textToHighlight, keywords) {
      let filteredText = textToHighlight;
      if (keywords !== '') {
        let keywordList = stringToArray(keywords);

        let pattern = getRegexPattern(keywordList);

        filteredText = textToHighlight.replace(pattern, '<span class="highlighted">$2</span>');
      }

      return $sce.trustAsHtml(filteredText);
    };
  });
