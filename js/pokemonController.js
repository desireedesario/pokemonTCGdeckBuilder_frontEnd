angular.module('pokemon')
  .controller('pokemonController', pokemonController)

function pokemonController($http, $scope, $q) {
  var self = this;
  self.allCards = new Array();

  $scope.searchDB = searchDB
    $scope.selectedName = ''
    $scope.types = [
      {display: 'Type', value: ''},
      {display: 'Fire', value: 'fire'},
      {display: 'Water', value: 'water'},
      {display: 'Grass', value: 'grass'},
      {display: 'Lightning', value: 'lightning'},
      {display: 'Fighting', value: 'fighting'},
      {display: 'Psychic', value: 'psychic'},
      {display: 'Normal', value: 'colorless'},
      {display: 'Darkness', value: 'darkness'},
      {display: 'Metal', value: 'metal'},
      {display: 'Dragon', value: 'dragon'},
      {display: 'Fairy', value: 'fairy'}
    ]
      $scope.selectedType = $scope.types[0].value
    $scope.supertypes = [
      {display: 'Pokémon', value: 'pokemon'},
      {display: 'Trainer', value: 'trainer'},
      {display: 'Energy', value: 'energy'}
    ]
      $scope.supertype = $scope.supertypes[0].value

  function searchDB() {
    var promise1 = $http.get('https://api.pokemontcg.io/v1/cards?name=' + $scope.selectedName + '&types=' + $scope.selectedType + '&supertype=' + $scope.supertype + '&page=1&pageSize=1000')



    var promise2 = $http.get('https://api.pokemontcg.io/v1/cards?name=' + $scope.selectedName + '&types=' + $scope.selectedType + '&supertype=' + $scope.supertype + '&page=1&pageSize=1000')



    var promise3 = $http.get('https://api.pokemontcg.io/v1/cards?name=' + $scope.selectedName + '&types=' + $scope.selectedType + '&supertype=' + $scope.supertype + '&page=3&pageSize=1000')



    var promise4 = $http.get('https://api.pokemontcg.io/v1/cards?name=' + $scope.selectedName + '&types=' + $scope.selectedType + '&supertype=' + $scope.supertype + '&page=4&pageSize=1000')



    var promise5 = $http.get('https://api.pokemontcg.io/v1/cards?name=' + $scope.selectedName + '&types=' + $scope.selectedType + '&supertype=' + $scope.supertype + '&page=5&pageSize=1000')



    var promise6 = $http.get('https://api.pokemontcg.io/v1/cards?name=' + $scope.selectedName + '&types=' + $scope.selectedType + '&supertype=' + $scope.supertype + '&page=6&pageSize=1000')



    var promise7 = $http.get('https://api.pokemontcg.io/v1/cards?name=' + $scope.selectedName + '&types=' + $scope.selectedType + '&supertype=' + $scope.supertype + '&page=7&pageSize=1000')



    var promise8 = $http.get('https://api.pokemontcg.io/v1/cards?name=' + $scope.selectedName + '&types=' + $scope.selectedType + '&supertype=' + $scope.supertype + '&page=8&pageSize=1000')



    var promise9 = $http.get('https://api.pokemontcg.io/v1/cards?name=' + $scope.selectedName + '&types=' + $scope.selectedType + '&supertype=' + $scope.supertype + '&page=9&pageSize=1000')


    $q.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8, promise9]).then(function(data){
      self.allCards.push(data[0].data.cards)
      self.allCards.push(data[1].data.cards)
      self.allCards.push(data[2].data.cards)
      self.allCards.push(data[3].data.cards)
      self.allCards.push(data[4].data.cards)
      self.allCards.push(data[5].data.cards)
      self.allCards.push(data[6].data.cards)
      self.allCards.push(data[7].data.cards)
      self.allCards.push(data[8].data.cards)
      self.allCards = [].concat.apply([], self.allCards)
      console.log(self.allCards)
    })
    // self.allCards.push(self.cards1, self.cards2, self.cards3, self.cards4, self.cards5, self.cards6, self.cards7, self.cards8, self.cards9)
  }
}
