class Player{
    constructor(){

    }
    getCount(){
        var PlayerCountRef = database.ref("Playercount")
        PlayerCountRef.on("value", function(data){
            PlayerCount = data.val()
        })
    }

    updateCount(Count){
        database.ref("/").update({
            Playercount:Count
        })
    }
    update(name){
        var Playerindex = "Player" + PlayerCount
        database.ref(Playerindex).set({
            name: name
        })
    }
}

