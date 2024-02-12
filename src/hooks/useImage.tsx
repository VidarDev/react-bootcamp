export const useImage = (title: string) => {
  const imageName = `${title.toLowerCase().replace(" ", "")}`;

  let source;
  switch (imageName) {
    case "cr90corvette":
      source = require("../../assets/starships/cover/CR90corvette.jpg");
      break;
    case "stardestroyer":
      source = require("../../assets/starships/cover/stardestroyer.jpg");
      break;
    case "sentinel-classlanding craft":
      source = require("../../assets/starships/cover/sentinel-classlandingcraft.jpg");
      break;
    case "deathstar":
      source = require("../../assets/starships/cover/deathstar.jpg");
      break;
    case "millenniumfalcon":
      source = require("../../assets/starships/cover/millenniumfalcon.jpg");
      break;
    case "y-wing":
      source = require("../../assets/starships/cover/y-wing.jpg");
      break;
    case "x-wing":
      source = require("../../assets/starships/cover/x-wing.jpg");
      break;
    case "tieadvanced x1":
      source = require("../../assets/starships/cover/tieadvancedx1.jpg");
      break;
    case "executor":
      source = require("../../assets/starships/cover/executor.jpg");
      break;
    case "rebeltransport":
      source = require("../../assets/starships/cover/rebeltransport.jpg");
      break;
  }
  return source;
};
