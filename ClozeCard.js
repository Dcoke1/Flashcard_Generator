module.exports = ClozeCard;

function ClozeCard(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = "";
	this.clozeCheck = false;
	this.front = "";
	this.clozeDone = function() {
		var array = this.fullText.split(" ");
		
		for (var i = 0; i < array.length; i++) {
			
			if (this.cloze === array[i].toLowerCase()) {
				array[i] = " || ";
				this.clozeCheck = true;
			}
			this.partial = this.partial + " " + array[i];
		}
		
	};
}