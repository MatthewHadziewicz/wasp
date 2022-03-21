class testGame {
    constructor(game) {
        this.game = game
        this.init()
        this.hit()

    }

    init() {
        if (this.game.wasps.length != 14) throw new Error('Wrong numbers of wasps!')
        if (this.game.wasps.filter(wasp => wasp.name == "Queen").length != 1) throw new Error('Wrong numbers of queens!')
        if (this.game.wasps.filter(wasp => wasp.name == "Worker").length != 5) throw new Error('Wrong numbers of workers!')
        if (this.game.wasps.filter(wasp => wasp.name == "Drone").length != 8) throw new Error('Wrong numbers of drones!')
        console.log('Init tests: ' + '%cDone', 'color: green;');
    }

    hit() {
        //any wasp is hitted
        let wasps = this.game.wasps
        this.game.hit()
        let objectsAreSame = true;
        for (let i in wasps) {
            if(wasps[i].hp != this.game.wasps[i].hp)
            {
                //objectsAreSame = false;
            }
        }
        if(objectsAreSame == true){
            throw new Error('Hit do not hited any wasp!')
        }
        console.log('Hit test: ' + '%cDone', 'color: green;');
    }


}