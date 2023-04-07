

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

// const webSocket = new WebSocket('ws://localhost:8888')


// webSocket.onopen = () => {
//   console.log('Connected to the WebSocket server');

//   // Send a message to the server
//   webSocket.send(JSON.stringify({ text: 'Hello, WebSocket server!' }));
// };

// webSocket.onmessage = (event) => {
//   const message = JSON.parse(event.data);
//   console.log(`Received message: ${message.message}`);
// };

// webSocket.onerror = (error) => {
//   console.error(`WebSocket error: ${error}`);
// };

// webSocket.onclose = () => {
//   console.log('WebSocket connection closed');
// };

figma.ui.resize(800, 800);
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
    // createForm();
    // const buttonSet = generateButton(100, 40, "click");
    // figma.currentPage.appendChild(buttonSet);
    eval(insertion);
    // createHeroSection();
    // createAnotherHero();
    // createSmallCatalog();
    // createSmallCatalog1();
    // createSmallCatalog2();
    // @ts-ignore
    // button.constraints = firstButton.sizeAndConstraints.constraints;
  }
  
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
const createDesign = (data: any) => {
  const insertion = data
    .replaceAll("“", "")
    .replaceAll("”", "")
    .replaceAll("‘", "")
    .replaceAll("’", "")
    .replaceAll("```", "")
  console.log(insertion)
  eval(insertion)
}
async function poll() {
  try {
    const response = await fetch('http://localhost:3300/command/poll');
    const command = await response.json();
    console.log(command)
    
    if (command.action === 'generateDesign') {
      const generatedCode = command.generatedCode?.message;
      await createDesign(generatedCode);
    }
  } catch (error) {
    console.error(`Error during polling: `, error);
  } finally {
    // Continue polling
    setTimeout(poll, 1000); // Adjust the polling interval as needed
  }
}
poll();

// Start polling
