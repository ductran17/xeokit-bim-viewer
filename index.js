import {Server} from "./src/server/Server.js";
import {BIMViewer} from "./src/BIMViewer.js";
import {LocaleService} from "@xeokit/xeokit-sdk/dist/xeokit-sdk.cjs.js";

export {BIMViewer};
export {Server};
export {LocaleService};

const server = new Server({
    dataDir: "./data"
});

const myBIMViewer = new BIMViewer(server, {
    canvasElement: document.getElementById("myCanvas"),                // The 3D WebGL canvas
    explorerElement: document.getElementById("myExplorer"),            // Container for the explorer panel
    toolbarElement: document.getElementById("myToolbar"),              // Container for the toolbar
    navCubeCanvasElement: document.getElementById("myNavCubeCanvas"),  // Canvas for the NavCube
    busyModelBackdropElement: document.querySelector(".xeokit-busy-modal-backdrop") // Busy modal dialog backdrop element
});

myBIMViewer.setConfigs({
    "backgroundColor": [1.0, 1.0, 1.0]
});

myBIMViewer.getProjectsInfo((projectsInfo) => {
    console.log(JSON.stringify(projectsInfo, null, "\t"));
});

myBIMViewer.getProjectInfo("WestRiversideHospital", (projectInfo) => {
    console.log(JSON.stringify(projectInfo, null, "\t"));
});

myViewer.getObjectInfo("WestRiversideHospital", "architectural", "2HaS6zNOX8xOGjmaNi_r6b",
    (objectInfo) => {
        console.log(JSON.stringify(objectInfo, null, "\t"));
    },
    (errMsg) => {
        console.log("Oops! There was an error getting info for this object: " + errMsg);
    });

myBIMViewer.loadProject("WestRiversideHospital",
() => {
    console.log("Nice! The project loaded successfully.");
},
(errMsg) => {
    console.log("Oops! There was an error loading this project: " + errMsg);
});

const modelIds = myBIMViewer.getModelLoadedIds();

console.log(modelIds);