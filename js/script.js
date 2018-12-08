'use strict';
(function() {
	var url = 'https://restcountries.eu/rest/v2/name/';
	var countriesList = $('#countries');
	/*Na kliknięcie w "szukaj" należy uruchomić pewną funkcję. Nazwijmy ją searchCountries().  */
	$('#search').click(searchCountries); /*podpięcie żądania pod przycisk z id search */
	/*Zanim wywołamy samo wyszukiwanie, musimy pobrać wartość wpisaną przez 
	użytkownika i przypisać do zmiennej- metoda val(): */
	function searchCountries() {
		var countryName = $('#country-name').val();
		/* warunek sprawdzający, czy pole tekstowe nie jest 
		przypadkiem puste. Jeśli tak, ustawmy jego wartość na "Poland". */
		if (!countryName.length) countryName = 'Poland';
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
	}
	/*w kodzie użyliśmy parametru, który określa, jaka funkcja ma zostać wykonana
w przypadku powodzenia zapytania - jest to showCountriesList() */
	/*Pobieranie wyników 
	1. wyczyszczenie listy krajów po poprzednim zapytaniu. Do tego celu na liście użyjemy metody empty().
	2. */
	function showCountriesList(resp) {
		countriesList.empty();
		resp.forEach(function(item) {
			$('<li>').text(item.name).appendTo(countriesList);
		});
	}
})();