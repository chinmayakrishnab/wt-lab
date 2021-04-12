let name = document.getElementById("customname");

let randomise = document.querySelector(".randomise");
let story = document.querySelector(".story");

function randomValuePicker(array){
	return array[Math.floor( Math.random() * array.length ) ];
}

let storyText = 
"Once upon a time, a farmer had a :insertx:  every day. The egg provided enough money for the farmer and his :inserty: for their day-to-day needs. But one day, the farmer got an idea and thought, “Why should I take just one egg a day? Why can’t I take all of them at once and make a lot of money? :insertz: .";

let insertx = [ 'GOOSE that laid a GOLDEN egg', 'HEN that laid a SILVER egg', 'OSTRICH that laid a DIAMOND egg'] ;
let inserty = [ 'WIFE', 'SON', 'DAUGHTER'] ;
let insertz = [ 'SO HE BECAME GREEDY AND KILLED THE BIRD ', 'BUT HIS SECOND THOUGHT MADE HIM TO STOP KILLING', 'BUT SOMEONE STOPPED HIM FROM KILLING '] ;

randomise.addEventListener( 'click', result );

function result() {

	let newStory = storyText;
	let xItem = randomValuePicker(insertx);
	let yItem = randomValuePicker(inserty);
	let zItem = randomValuePicker(insertz);

	 newStory = newStory.replace(':insertx:', xItem);
	 newStory = newStory.replace(':inserty:', yItem);
	 newStory = newStory.replace(':insertz:', zItem);

	if(name.value != '') {
		let newName = name.value;
		newStory = newStory.replace('farmer', newName);
	}

	story.textContent = newStory;
	story.style.visibility = 'visible';
}