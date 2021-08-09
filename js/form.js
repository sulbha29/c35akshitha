class Form{
   constructor(){

   }
   display(){
       var title = createElement("h2")
      title.html("Car Racing Game")
      title.position(250, 70)
      var input = createInput("Enter your name")
      input.position(250, 120)
      var button = createButton("Play")
      button.position(240, 170)
      var greeting = createElement("h4")
      button.mousePressed(function(){
          input.hide()
          button.hide()
    var name = input.value()
    PlayerCount += 1
    player.update(name)
    player.updateCount(PlayerCount)
    greeting.html("hello" + name)
    greeting.position(250,250)
      })

   }
}