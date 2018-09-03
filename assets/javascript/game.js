var characters = {
    wyatt: {
      name: "Wyatt Earp",
      health: 150,
      attackPower: 2,
      counterAttackPower: 15,
    },
  
    jack: {
      name: "Jack Burton",
      health: 110,
      attackPower: 4,
      counterAttackPower: 5,
    },
  
    john: {
      name: "John Ruth",
      health: 90,
      attackPower: 1,
      counterAttackPower: 20,
    },
  
    macready: {
      name: "RJ MacReady",
      health: 120,
      attackPower: 1,
      counterAttackPower: 25,
    },
  
    
  snake:{
  name: "Snake Plissken",
      health: 185,
      attackPower: 1,
      counterAttackPower: 25,
    },
  
  
  
  };
  //Debugging
  console.log(characters);
  
  // Has the user selected their character
  var characterSelected = false;
  
  // Has the user selected the defender
  var defenderSelected = false;
  
  // Variable to store the user's chosen character
  var character = {};
  
  // Variable to store the chosen enemy
  var defender = {};
  
  // Number of enemies defeated
  var enemiesDefeated = 0;
  
  // Boolean to indicate whether or not the game is over
  var gameOver = false;
  
  
  //FUNCTIONS
  //===========================================
  // This function will initialize the character value from the global object variables defined above
  function initializeCharacter(chosenCharacter) {
    character.name = chosenCharacter.name;
    character.health = chosenCharacter.health;
    character.counterAttackPower = chosenCharacter.counterAttackPower;
    character.attackPower = chosenCharacter.attackPower;
  }
  
  // This function will initialize the defender's value from the global object variables defined above
  function initializeDefender(chosenDefender) {
    defender.name = chosenDefender.name;
    defender.health = chosenDefender.health;
    defender.counterAttackPower = chosenDefender.counterAttackPower;
    defender.attackPower = chosenDefender.attackPower;
  }
  
  // This function will move the remaining characters to the enemies section
  function moveToEnemies() {
    $(".available-character").removeClass("available-character").addClass("enemy-character");
    $("#enemies-div").append($(".enemy-character"));
  }
  
  // This function will reset the state of the game
  function resetGame() {
    // Reset all the health values to the original
    $("#wyatt").children(".health").html(characters.wyatt.health);
    $("#jack").children(".health").html(characters.jack.health);
    $("#john").children(".health").html(characters.john.health);
    $("#macready").children(".health").html(characters.macready.health);
    $("#snake").children(".health").html(characters.snake.health);
  
    $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
    var available = $(".available-character").show();
    $("#characters-available").html(available);
  
    $("#game-message").empty();
    $("#restart").hide();
  
    characterSelected = false;
    defenderSelected = false;
    enemiesDefeated = 0;
    gameOver = false;
  
    character = {};
    defender = {};
  }
  
  //MAIN PROCESS
  //===========================================
  // Run Javascript when the HTML has finished loading
  $(document).ready(function() {
  
    // Hide the "Restart" button and "#game-message" on document load
    $("#restart").hide();
    $("#game-message").empty();
  
    // Determine which character the user has clicked
    
    
    //$("#wyatt").<span cl