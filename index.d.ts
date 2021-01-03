import bollywoodActorsJson = require('./bollywood-actors.json');

declare const bollywoodActors: {
	/**
	Bollywood actor names in alphabetical order.

	@example
	```
	import bollywoodActors = require('bolywood-actors-coding-discussion');

	superheroes.all;
	//=> ["Aamir Khan", "Aarun Nagar", …]
	```
	*/
	readonly all: Readonly<typeof bollywoodActorsJson>;

	/**
	Random bolywood actor name.

	@example
	```
	import bolywoodActors = require('bolywood-actors-coding-discussion');

  bolywoodActors.random();
  //=> 'Shah Rukh Khan'
	```
	*/
	random(): string;
}

export = bolywoodActors;
