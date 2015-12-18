
var fruits = ["apples","bananas","kiwis","applesauce","kirikiri","batata"],
	entry = '',
	typehereEl = document.querySelector('input'),
	optionsHolderEl = document.querySelector('div#optionsHolder')

window.jquery = $

// prototype modifications 

String.prototype.contains = function(substr){
	return this.indexOf(substr) !== -1
	}

Node.prototype.clearChildren = function() {
		// remove all event listeners on each child as well
		while (this.firstChild){
			this.removeChild(this.firstChild)
		}
	}

// define event callbacks
var updateOptionsHolderEl = function(e){
	var liString = '',
		entry = e.target.value || null,
		reducedData = fruits.filter(function(fruit){
			return fruit.contains(entry)
		})
	optionsHolderEl.clearChildren()
	reducedData.forEach(function(fruit){
		var newDiv = document.createElement('div')
		newDiv.className = "option"
		newDiv.innerHTML = fruit
		newDiv.onclick = assignInputValue
		optionsHolderEl.appendChild(newDiv)
	})
}

var assignInputValue = function(e){
	console.log('clicked')
	console.log(e.target.textContent)
	var selection = e.target.textContent
	typehereEl.value = selection
	location.hash = selection
}

// assign event listeners
typehereEl.onkeyup = updateOptionsHolderEl
$('input').focusout(function(){
	setTimeout(()=>$('div#optionsHolder').css({display:"none"}),200)
})

$('input').focusin(function(){
	$('div#optionsHolder').css({display:"block"})
})

