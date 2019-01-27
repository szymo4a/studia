let fruit1 = {
	_name: "Banana",
	_colour: "yellow",
	properties(_colour, _name){
		return `${this._colour} ${this._name}`;
	}
}