
function playSound(e){
	// console.log(e.keyCode);
	//In ES06, the ${} represent a space that you can put a value in:
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	// console.log(audio);
	if(!audio) return;
	audio.currentTime = 0; //resets to the beginning of audio.
	audio.play();

	//adding a class of 'playing' to key for animation purposes.
	key.classList.add('playing');
};

function removeTransition(e){
	if (e.propertyName !== 'transform') return; //skip if it's not transformed.
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(x => x.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

