import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {

  let firstLetter=adj[Math.floor(Math.random()*adj.length)]
  let secondLetter=noun[Math.floor(Math.random()*noun.length)]
  res.render("index.ejs",{l1:firstLetter,l2:secondLetter,});
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



const adj = [
  "Savage", "Silent", "Dark", "Crimson", "Rapid", "Mystic", "Toxic", "Fiery", "Frozen", "Stealth",
  "Vicious", "Blazing", "Rogue", "Venom", "Wicked", "Brutal", "Furious", "Grim", "Shadow", "Angry",
  "Fierce", "Thunder", "Deadly", "Epic", "Icy", "Wild", "Burning", "Iron", "Bold", "Mad",
  "Electric", "Fearless", "Sharp", "Chaotic", "Ruthless", "Stone", "Venomous", "Silent", "Thunderous", "Golden",
  "Savage", "Frosty", "Cursed", "Shadow", "Twisted", "Relentless", "Dark", "Arcane", "Phantom", "Warped",
  "Burning", "Lethal", "Ghostly", "Fiery", "Iron", "Glacial", "Dreaded", "Savage", "Crimson", "Vile",
  "Frozen", "Shattered", "Stormy", "Fierce", "Vengeful", "Blackened", "Toxic", "Agile", "Burning", "Swift",
  "Electric", "Fearless", "Cursed", "Silent", "Ruthless", "Iron", "Savage", "Dark", "Crimson", "Blazing",
  "Vicious", "Stormy", "Glacial", "Thunder", "Lethal", "Shadow", "Toxic", "Mystic", "Grim", "Arcane",
  "Dreaded", "Savage", "Icy", "Venomous", "Deadly", "Stealth", "Bold"
];

const noun = [
  "Phantom", "Reaper", "Vortex", "Shadow", "Titan", "Hunter", "Falcon", "Warden", "Knight", "Ghost",
  "Brawler", "Archer", "Dragon", "Rider", "Serpent", "Cyclone", "Dagger", "Panther", "Sniper", "Wolf",
  "Ninja", "Beast", "Whisper", "Bullet", "Slayer", "Warlock", "Golem", "Assassin", "Scorpion", "Wraith",
  "Raider", "Soldier", "Viper", "Predator", "Raven", "Shark", "Demon", "Hawk", "Juggernaut", "Titan",
  "Storm", "Orc", "Sniper", "Gladiator", "Saber", "Specter", "Dancer", "Ogre", "Reaper", "Paladin",
  "Blazer", "Slayer", "Knight", "Wolf", "Falcon", "Hunter", "Sniper", "Devil", "Archer", "Scorpion",
  "Vortex", "Banshee", "Berserker", "Bandit", "Titan", "Warden", "Sorcerer", "Golem", "Saber", "Phantom",
  "Demon", "Cyclone", "Brawler", "Assassin", "Shadow", "Raider", "Panther", "Ninja", "Wraith", "Rogue",
  "Blade", "Stalker", "Juggernaut", "Striker", "Hunter", "Phantom", "Knight", "Predator", "Rogue", "Warden",
  "Phantom", "Scorpion", "Reaper", "Knight", "Warlock", "Saber", "Bandit", "Raider", "Beast", "Panther"
];

