/**
A class with specific set of JSON operations for the scraper
 */
class JSONTools {
  static jsonMerger = (makes, models) => {
    let resultJSON = "[";

    for (var make in makes) {
      let currentMakeJson = `{ "id":${make.id}, "name": ${make.name}`;

      currentMakeJson += `, models: [ `;

      var currentModels = models[make.id];
      let modelJSON = "{";

      for (var property in currentModels) {
        modelJSON += `{ "id": ${property}, "name":${currentModels[property]} } `;
      }

      currentMakeJson += modelJSON + " ] }";

      resultJSON += currentMakeJson + "},";
    }

    resultJSON = resultJSON.slice(0, -1);

    resultJSON += "]";

    return resultJSON;
  };

  /*
   */
  static jsonStringifier = (makes, models) => {
    let finalMakes = [];

    for (let i = 0; i < makes.length; i++) {
      const make = makes[i];

      let finalCurrentModels = [];

      var currentModels = models[make.id];

      for (var property in currentModels) {
        const currentModel = {
          id: property,
          name: currentModels[property],
        };

        finalCurrentModels.push(currentModel);
      }

      const newMake = { ...make, models: finalCurrentModels };

      finalMakes.push(newMake);
    }

    const resultJSON = JSON.stringify(finalMakes);

    return resultJSON;
  };

  static printJSONToFile = (jsonContent, fileName) => {
    const blob = new Blob([jsonContent], { type: "text/plain" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
  };
}

export default JSONTools;
