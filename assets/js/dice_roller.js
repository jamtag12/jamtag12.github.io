import { injuries } from "./dice_results.js";

const injury_button = document.getElementById("injury_button")
const mult_button = document.getElementById("multiple_injuries")
const output_field = document.getElementById("injury_output")

function roll_dice(){
  return Math.floor(Math.random() * 6 + 1);
}

function roll_d66(){
  return roll_dice() * 10 + roll_dice();
}

function roll_lasting_injuries(force = 0){
  let lasting_injuries = []
  let result_text = []
  let first_roll = roll_d66()
  if(force>0)first_roll=force
  console.log(first_roll)

  if(first_roll === 54){
    result_text.push("<div class='injury' style='color:red'><h4>Received multiple injuries!</h4></div>")
    let num_roll = 3
    for(let i = 0; i<num_roll;){
      let curr_roll = roll_d66()
      if(curr_roll>53 || (curr_roll<27 && curr_roll>14)){
        console.log("Current roll is "+injuries[curr_roll]+" , rerolling...")
	result_text.push("<div class='injury'>Current roll is "+injuries[curr_roll]+" , rerolling...</div>")
        continue
      }
      lasting_injuries.push(curr_roll)
      i++
    }
  }
  else{
    result_text.push("Rolled a "+ first_roll +"<br>")
    lasting_injuries.push(first_roll)
  }
  result_text.push("<div class='injury' style='color:blue'><h4>Summary:</h4></div>")
  for(const injury of lasting_injuries){
    result_text.push("<div class='injury' style='color:red'><b>" + injuries[injury] + "</b></div>")
  }
  output_field.innerHTML = result_text.join("")
}

function roll_multiple_injuries(){
	roll_lasting_injuries(54)
}

injury_button.addEventListener('click', roll_lasting_injuries)
mult_button.addEventListener('click', roll_multiple_injuries)
