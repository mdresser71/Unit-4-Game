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
  
    //Character Selection
    $("#wyatt").on("click", function () {


        console.log("Wyatt Earp is selected");
        
        
        
        // User is choosing the character
        
        if(characterSelected === false) {
        
        $("#game-message").empty();
        
        
        
        // Set the user's character
        
        initializeCharacter(characters.wyatt);
        
        characterSelected = true;
        
        
        
        // Display the chosen character
        
        $("#wyatt").removeClass("available-character").addClass("chosen-character");
        
        $("#chosen-character").append(this);
        
        
        
        // Move the remaining characters to the enemies section
        
        moveToEnemies();
        
        
        
        } else if ((characterSelected === true) && (defenderSelected === false)) {
        
        // User is choosing the defender
        
        if($("#wyatt").hasClass("enemy-character")) {
        
        $("#game-message").empty();
        
        
        
        // Set the user's enemy
        
        initializeDefender(characters.wyatt);
        
        defenderSelected = true;
        
        
        
        // Add the character to the defender section
        
        $("#wyatt").removeClass("enemy-character").addClass("defender-character");
        
        $("#defender-div").append(this);
        
        }
        
        }
        
        });
        
        
        
        $("#jack").on("click", function () {
        
        console.log("Jack Burton is selected");
        
        
        
        // User is choosing the character
        
        if(characterSelected === false) {
        
        $("#game-message").empty();
        
        
        
        // Set the user's character
        
        initializeCharacter(characters.jack);
        
        characterSelected = true;
        
        
        
        // Display the chosen character
        
        $("#jack").removeClass("available-character").addClass("chosen-character");
        
        $("#chosen-character").append(this);
        
        
        
        // Move the remaining characters to the enemies section
        
        moveToEnemies();
        
        
        
        } else if ((characterSelected === true) && (defenderSelected === false)) {
        
        // User is choosing the defender
        
        if($("#jack").hasClass("enemy-character")) {
        
        $("#game-message").empty();
        
        
        
        // Set the user's enemy
        
        initializeDefender(characters.jack);
        
        defenderSelected = true;
        
        
        
        // Add the character to the defender section
        
        $("#jack").removeClass("enemy-character").addClass("defender-character");
        
        $("#defender-div").append(this);
        
        }
        
        }
        
        });
        
        
        
        $("#macready").on("click", function () {
        
        console.log("RJ MacReady is selected");
        
        
        
        // User is choosing the character
        
        if(characterSelected == false) {
        
        $("#game-message").empty();
        
        
        
        // Set the user's character
        
        initializeCharacter(characters.macready);
        
        characterSelected = true;
        
        
        
        // Display the chosen character
        
        $("#macready").removeClass("available-character").addClass("chosen-character");
        
        $("#chosen-character").append(this);
        
        
        
        // Move the remaining characters to the enemies section
        
        moveToEnemies();
        
        
        
        } else if ((characterSelected === true) && (defenderSelected == false)) {
        
        // User is choosing the defender
        
        if($("#macready").hasClass("enemy-character")) {
        
        $("#game-message").empty();
        
        
        
        // Set the user's enemy
        
        initializeDefender(characters.macready);
        
        defenderSelected = true;
        
        
        
        // Add the character to the defender section
        
        $("#macready").removeClass("enemy-character").addClass("defender-character");
        
        $("#defender-div").append(this);
        
        }
        
        }
        
        });
        
        $("#snake").on("click", function () {
        
        
        console.log("Snake Plissken is selected");
        
        
        
        // User is choosing the character
        
        if(characterSelected === false) {
        
        $("#game-message").empty();
        
        
        
        // Set the user's character
        
        initializeCharacter(characters.snake);
        
        characterSelected = true;
        
        
        
        // Display the chosen character
        
        $("#snake").removeClass("available-character").addClass("chosen-character");
        
        $("#chosen-character").append(this);
        
        
        
        // Move the remaining characters to the enemies section
        
        moveToEnemies();
        
        
        
        } else if ((characterSelected === true) && (defenderSelected === false)) {
        
        // User is choosing the defender
        
        if($("#snake").hasClass("enemy-character")) {
        
        $("#game-message").empty();
        
        
        
        // Set the user's enemy
        
        initializeDefender(characters.snake);
        
        defenderSelected = true;
        
        
        
        // Add the character to the defender section
        
        $("#snake").removeClass("enemy-character").addClass("defender-character");
        
        $("#defender-div").append(this);
        
        }
        
        }
        
        });
        
        
        
        //Attack button is clicked
        
        $("#attack-btn").on("click", function() {
        
        console.log("Attack selected");
        
        
        
        // User is ready to attack the defender
        
        if (characterSelected && defenderSelected && !gameOver) {
        
        // User attacks the defender and decreases the defender's health points
        
        defender.health = defender.health - character.attackPower;
        
        $(".defender-character").children(".health").html(defender.health);
        
        $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attackPower + " damage.<p>");
        
        
        
        // User's attack power increases
        
        character.attackPower = character.attackPower + character.attackPower;
        
        
        
        // If defender is still alive, they counter attack the user
        
        if (defender.health > 0) {
        
        character.health = character.health - defender.counterAttackPower;
        
        $(".chosen-character").children(".health").html(character.health);
        
        
        
        // Check if the user survives the attack
        
        if (character.health > 0) {
        
        $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.counterAttackPower + " damage.</p>");
        
        } else {
        
        gameOver = true;
        
        $("#game-message").html("<p>You were defeated...</p><p>Play again?</p>");
        
        $("#restart").show();
        
        }
        
        } else {
        
        // Defender is defeated
        
        enemiesDefeated++;
        
        defenderSelected = false;
        
        $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        
        $(".defender-character").hide();
        
        
        
        // Check if the user has won the game
        
        if (enemiesDefeated === 3) {
        
        gameOver = true;
        
        $("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
        
        $("#restart").show();
        
        }
        
        }
        
        } else if (!characterSelected && !gameOver) {
        
        $("#game-message").html("<p>You must first select your game character.</p>");
        
        } else if (!defenderSelected && !gameOver) {
        
        $("#game-message").html("<p>You must choose an enemy to fight.</p>");
        
        }
        
        
        
        });
        
        
        
        $("#restart").on("click", function() {
        
        console.log("Restart selected");
        
        
        
        resetGame();
        
        });
        
        
        
        });
        