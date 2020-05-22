var romanNumbers = document.querySelector(".roman-numbers")
var calculate = document.querySelector(".calculate")
var clear = document.querySelector(".clear")
var resultCalculate = document.querySelector(".result-calculate")
var symbolTable = document.querySelector(".symbol-table")
var containerRomanNumber = document.querySelector(".container-roman-number")
var containerRomanNumberValue = document.querySelector(".container-roman-number-value")
var containerUseAsInput = document.querySelector(".container-use-as-input")

var dataRomanNumberImage = ["img/_i.png", "img/_v.png", "img/_x.png", "img/_l.png", "img/_c.png", "img/_d.png",
						"img/_m.png", "img/i.png", "img/v.png", "img/x.png", "img/l.png", "img/c.png",
						"img/d.png", "img/m.png"]

var dataRomanNumberValue = ["1","5","10","50","100","500","1.000","1.000","5.000","10.000","50.000","100.000","500.000","1.000.000"]
var dataNumberInputValue = ["I", "V", "X", "L", "C", "D", "M", "_I", "_V", "_X", "_L", "_C", "_D", "_M"]
var dataNumbers = []
var testInput = /[i,v,x,l,c,d,m,I,V,X,L,C,D,M]/

for(var i = 0; i < dataRomanNumberImage.length; i++){
	var boxNumber = document.createElement("div");
	boxNumber.classList.add("box-number")
	containerRomanNumber.appendChild(boxNumber)
	var boxNumberImage = document.createElement("img")
	boxNumberImage.setAttribute("src", dataRomanNumberImage[i])
	boxNumberImage.classList.add("box-number-image")
	boxNumber.appendChild(boxNumberImage)
}
for(var i = 0; i < dataRomanNumberValue.length; i++){
	var boxNumberValue = document.createElement("div");
	boxNumberValue.classList.add("box-number")
	containerRomanNumberValue.appendChild(boxNumberValue)
	boxNumberValue.innerHTML = dataRomanNumberValue[i]
}
for(var i = 0; i < dataNumberInputValue.length; i++){
	var boxNumberInputValue = document.createElement("div")
	boxNumberInputValue.classList.add("box-number")
	containerUseAsInput.appendChild(boxNumberInputValue)
	boxNumberInputValue.innerHTML = dataNumberInputValue[i]
}


calculate.addEventListener("click", function(){
	dataNumbers = []
	resultCalculate.innerHTML = ""
	var romanNumbersValue = romanNumbers.value
	var dataLetters = romanNumbersValue.split("")
	if(testInput.test(romanNumbersValue)){
		for(var i = 0; i < dataLetters.length; i++){
		console.log(dataLetters[i])
			if(dataLetters[i] === "i" || dataLetters[i] === "I"){
				dataNumbers.push(1)
				console.log(dataNumbers)
			}
			if(dataLetters[i] === "v" || dataLetters[i] === "V"){
				dataNumbers.push(5)
				console.log(dataNumbers)
			}
			if(dataLetters[i] === "x" || dataLetters[i] === "X"){
				dataNumbers.push(10)
				console.log(dataNumbers)
			}
			if(dataLetters[i] === "l" || dataLetters[i] === "L"){
				dataNumbers.push(50)
				console.log(dataNumbers)
			}
			if(dataLetters[i] === "c" || dataLetters[i] === "C"){
				dataNumbers.push(100)
				console.log(dataNumbers)
			}
			if(dataLetters[i] === "d" || dataLetters[i] === "D"){
				dataNumbers.push(500)
				console.log(dataNumbers)
			}
			if(dataLetters[i] === "m" || dataLetters[i] === "M"){
				dataNumbers.push(1000)
				console.log(dataNumbers)
			}
			if(dataLetters[i] === "i" && dataLetters[i - 1] === "_" || dataLetters[i] === "I" && dataLetters[i - 1] === "_"){
				console.log("correct")
				dataNumbers.push(999)
			} 
			if(dataLetters[i] === "v" && dataLetters[i - 1] === "_" || dataLetters[i] === "V" && dataLetters[i - 1] === "_"){
				console.log("correct")
				dataNumbers.push(4995)
			} 
			if(dataLetters[i] === "x" && dataLetters[i - 1] === "_" || dataLetters[i] === "X" && dataLetters[i - 1] === "_"){
				console.log("correct")
				dataNumbers.push(9990)
			} 
			if(dataLetters[i] === "l" && dataLetters[i - 1] === "_" || dataLetters[i] === "L" && dataLetters[i - 1] === "_"){
				console.log("correct")
				dataNumbers.push(49950)
			} 
			if(dataLetters[i] === "c" && dataLetters[i - 1] === "_" || dataLetters[i] === "C" && dataLetters[i - 1] === "_"){
				console.log("correct")
				dataNumbers.push(99900)
			} 
			if(dataLetters[i] === "d" && dataLetters[i - 1] === "_" || dataLetters[i] === "D" && dataLetters[i - 1] === "_"){
				console.log("correct")
				dataNumbers.push(499500)
			} 
			if(dataLetters[i] === "m" && dataLetters[i - 1] === "_" || dataLetters[i] === "M" && dataLetters[i - 1] === "_"){
				console.log("correct")
				dataNumbers.push(999000)
			} 
		}
	}else{
		romanNumbers.style.border = 2 + "px solid red"
	}
	
	function arraySum(array){
		var sum = 0;
		for(var i = 0; i < array.length; i++){
			//sum += array[i]
			sum = sum + array[i]
		}
		resultCalculate.innerHTML = sum
	}
	arraySum(dataNumbers)
})


clear.addEventListener("click", function(){
	dataNumbers = []
	romanNumbers.value = ""
	resultCalculate.innerHTML = ""
})