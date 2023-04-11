

// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

// "MIN": Left or Top
// "MIN": Right or Bottom
// "CENTER": Center
// "STRETCH": Left & Right or Top & Bottom
// "SCALE": Scale
// shadow
// gridStyle
const POLLING_INTERVAL = 1000;

figma.ui.resize(400, 400);
figma.loadFontAsync({ family: "Inter", style: "Regular" })
figma.ui.onmessage = async (msg) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === "insert") {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Arial", style: "Regular" });
    await figma.loadFontAsync({ family: "Arial", style: "Bold" });
    await figma.loadFontAsync({ family: "Roboto", style: "Bold" });
    await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    const insertion = msg.data
      .replaceAll("“", "'")
      .replaceAll("”", "'")
      .replaceAll("‘", "'")
      .replaceAll("’", "'");
    console.log(insertion);
    
    eval(insertion);
  }


  if (msg.type === 'user-selected') {
    const userId = msg.userId;
    poll(userId);
  }
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
};




const createDesign = (data: any) => {
  const selection = figma.currentPage.selection
  let code = data
    .replaceAll("“", "")
    .replaceAll("”", "")
    .replaceAll("‘", "")
    .replaceAll("’", "")
    .replaceAll("```", "")
  if(selection.length === 1){
    code = 'const selection = figma.currentPage.selection[0];' + code
    code = code.replace(/figma\.currentPage\.appendChild/g, "selection.appendChild")
  }
  try {
    eval(code)
  } catch (err: any) {
    console.error("EVAL ERROR")
    console.error(err.message)
    console.error(err.stack)
  }
}
// const serverUrl = 'http://localhost:3300';
const serverUrl = 'https://aiphoria.world/api';

async function poll(userId: any) {
  try {
    const response = await fetch(`${serverUrl}/command/poll/${userId}`);
    const command = await response.json();
    console.log('NEW COMMAND HAS COME:', command)
    if (command.action === 'generateDesign') {
      const generatedCode = command.generatedCode;
      await createDesign(generatedCode);
    }
  } catch (error) {
    console.log(error)
  } finally {
    setTimeout(() => poll(userId), POLLING_INTERVAL);
  }
}


