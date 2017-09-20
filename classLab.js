class Person {
	constructor(name, hair){
		this.limbs = 4;
		this.name = name;
		this.hair = hair;
	}
	sayHello(){
		console.log(`Hello my name is ${this.name}`)
	}
}

class Pet  {
	constructor(name, hasFur){
		this.limbs = 4;
		this.name = name;
		this.hasFur = hasFur;
	}

	sayHello(){
		console.log(`I am a pet and cannot speak`);
	}
}

class Boat  {
	constructor(speed, color){
		this.speed = speed;
		this.color = color;
		this.inWater = true;
	}

	isInWater(){
		console.log(this.inWater);
	}
}

class Artist extends Person {
	constructor(typeOfArt, name, hair){
		super(name, hair);
		this.typeOfArt = typeOfArt;
		this.broke = true
	}

	sellsArt(sold){
		if(sold)
			this.broke = false;
	}
}

class Robot {
	constructor(isEvil, serial){
		this.isEvil = isEvil;
		this.madeOfMetal = true;
		this.hasSoul = false;
		this.serial = serial;
	}

	sayHello(){
		console.log('beep boop');
	}
}

class Computer {
	constructor(name, gpu, ram, ssd, serial){
		this.gpu = gpu;
		this.ram = ram;
		this.ssd = ssd;
	}

	add(a,b){
		return a + b;
	}
}

class Dog extends Pet {
	constructor(likesFetch, name, hasFur){
		super(name,hasFur);
		this.likesFetch = likesFetch;
		this.goodBoy = true;
	}

	fetch(){
		if(this.likesFetch)
			return 'ball';
	}
}

class Painter extends Artist {
	constructor(typeOfPaint, name, hair){
		super('painter',name,hair);
		this.typeOfPaint = typeOfPaint;
	}
	hatesRain(){
		if(this.typeOfPaint === 'watercolor')
			console.log('I hate rain');
		else
			console.log('I like rain');
	}
}

class Car {
	constructor(speed, color, model){
		this.speed = speed;
		this.color = color;
		this.model = model;
		this.runsRedLight = false;
	}

	getDistance(time){
		return this.speed*time;
	}
}

class Laptop extends Computer {
	constructor(ram,gpu,ssd,portable){
		super(ram,gpu,ssd);
		this.portable = portable;
	}
}

class Humvee extends Car {
	constructor(speed, color, mpg){
		super(speed,color,'humvee');
		this.mpg = mpg;
	}
}

class SmartPhone extends Computer {
	constructor(ram,gpu,ssd,portable,makesCalls){
		super(ram,gpu,ssd,true);
		this.makesCalls = makesCalls;
	}
}

class Baby extends Person {
	constructor(name, hair){
		super(name,hair);
		this.cry = true;
	}

	makeMess(){
		console('MESS EVERYTHING UP');
	}
}

class FireTruck extends Car {
	constructor(speed){
		super(speed, 'red', 'truck')
		this.runsRedLight = true;
	}

	makeNoise(){
		console.log('WHEE WOOO WHEE WOOO');
	}
}

class Bird extends Pet {
	constructor(name){
		super(name, false)
		this.flys = true;
	}

	poop(){
		return 'poops on your car';
	}
}


const robotFactory = {
	robots: [],
	makeRobot(){
		const newBot = new Robot(true, this.robots.length)
		this.robots.push(newBot);
		return newBot;
	}
	findRobot(i){
		return this.robots[i];
	}
}

class ComputerFactory {
	constructor(name){
		this.name = name;
		this.computers = [];
	}
	generate(){
		const newComputer = new Computer(this.name, '1080', '16g', '128g', this.computers.length);
		this.computers.push(newComputer);
		return newComputer;
	}
	findCompuer(i){
		return this.computers[i];
	}
}