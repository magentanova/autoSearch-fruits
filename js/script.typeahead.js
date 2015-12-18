var fruits = ["apples","bananas","kiwis","applesauce","kirikiri","batata"],
	entry = '',
	typeaheadEl = document.querySelector('input#typeahead'),
	typehereEl = document.querySelector('input#typehere')

window.jquery = $

String.prototype.contains = function(substr){
	return this.indexOf(substr) !== -1
}

var updateSearchDisplay = function(e){
	console.log('key pressed')
	var newKey = e.shiftKey ? String.fromCharCode(e.which) : String.fromCharCode(e.which).toLowerCase() 
	if (e.which === 9) {
		e.preventDefault()
		entry = typehereEl.value = typeaheadEl.placeholder
		return
	}
	if (e.which === 8) entry = entry.substr(0,entry.length-1)
	else entry += newKey
	console.log(entry)
	var reducedFruits = fruits.filter(function(fruit){
		return entry ? fruit.contains(entry) : false
	})
	console.log(reducedFruits)
	typeaheadEl.placeholder = reducedFruits[0] || ''
}


typehereEl.onkeydown = updateSearchDisplay

