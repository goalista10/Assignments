const batch4 = [
  'Gloria, Allen',
  'Agriam, Angelo',
  'Cal, Aritchelle',
  'Ceriola, John',
  'Rosales, Carl',
  'Lobitana, Carlo',
  'Hermosisma, Chase',
  'Alday, Chester',
  'Echavez, Eds',
  'Paulino, Jacob',
  'Garcia, Karlo',
  'Real, Lawrence',
  'Ramos, Mark',
  'Pinlac, Mcnikko',
  'Magistrado, Reuel',
  'Macavinta, Saudino',
  'Isaac, Winston',
  'Leuterio, Zamuel',
]

var final = "" 
function cases(item){
  var str = item
  final = "" 
  var hold = str.match(/\w+/g)
  hold.forEach(camelCase)
  console.log(final)
}


batch4.forEach(cases)



function camelCase(item,index){
	if(index === 0){
  	item = item.toLowerCase()
  }
	final+=(item)
}

function capitalCase(item,index){
	if(index === 0){
  	final+=item
  }else{
  	final+=(" " + item)
  }
}

function constantCase(item,index){
	if(index === 0){
  	final+=item.toUpperCase()
  }else{
  	final+=("_" + item.toUpperCase())
  }
}

function dotCase(item,index){
	if(index === 0){
  	final+=item.toLowerCase()
  }else{
  	final+=("." + item.toLowerCase())
  }
}

function headerCase(item,index){
	if(index === 0){
  	final+=item
  }else{
  	final+=("-" + item)
  }
}

function noCase(item,index){
	if(index === 0){
  	final+=item.toLowerCase()
  }else{
  	final+=(" " + item.toLowerCase())
  }
}

function paramCase(item,index){
	if(index === 0){
  	final+=item.toLowerCase()
  }else{
  	final+=("-" + item.toLowerCase())
  }
}

function pascalCase(item,index){
  final+=item
}

function pathCase(item,index){
	if(index === 0){
  	final+=item.toLowerCase()
  }else{
  	final+=("/" + item.toLowerCase())
  }
}

function sentenceCase(item,index){
	if(index === 0){
  	final+=item
  }else{
  	final+=(" " + item.toLowerCase())
  }
}

function snakeCase(item,index){
	if(index === 0){
  	final+=item.toLowerCase()
  }else{
  	final+=("_" + item.toLowerCase())
  }
}