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
figma.ui.resize(800, 800);
const createForm = () => {
  const container = figma.createFrame();
  container.name = "User Profile";
  container.resize(320, 300);
  container.cornerRadius = 8;
  container.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  const titleText = figma.createText();
  titleText.name = "Title";
  titleText.characters = "User Profile";
  titleText.fontSize = 20;
  titleText.fontName = { family: "Roboto", style: "Bold" };
  titleText.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  titleText.textAlignHorizontal = "CENTER";
  titleText.textAlignVertical = "CENTER";
  titleText.lineHeight = { value: 1.2, unit: "PIXELS" };
  titleText.resize(
    container.width - 16,
    titleText.fontSize * titleText.lineHeight.value
  );
  titleText.x = container.x + 8;
  titleText.y = container.y + 16;
  const nameInput = figma.createRectangle();
  nameInput.name = "Name Input";
  nameInput.resize(280, 32);
  nameInput.cornerRadius = 4;
  nameInput.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  nameInput.x = container.x + 20;
  nameInput.y = container.y + 80;
  nameInput.effects = [
    {
      type: "DROP_SHADOW",
      color: { r: 0, g: 0, b: 0, a: 0.2 },
      radius: 2,
      offset: { x: 0, y: 1 },
      blendMode: "NORMAL",
      visible: true,
    },
  ];
  const nameLabel = figma.createText();
  nameLabel.name = "Name Label";
  nameLabel.characters = "Name";
  nameLabel.fontSize = 14;
  nameLabel.fontName = { family: "Roboto", style: "Regular" };
  nameLabel.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  nameLabel.textAlignVertical = "CENTER";
  nameLabel.lineHeight = { value: 1.2, unit: "PIXELS" };
  nameLabel.resize(50, nameLabel.fontSize * nameLabel.lineHeight.value);
  nameLabel.x = container.x + 20;
  nameLabel.y = container.y + 62;
  nameLabel.constraints = { horizontal: "MIN", vertical: "MIN" };
  const namePlaceholder = figma.createText();
  namePlaceholder.name = "Name Placeholder";
  namePlaceholder.characters = "Enter your name";
  namePlaceholder.fontSize = 14;
  namePlaceholder.fontName = { family: "Roboto", style: "Regular" };
  namePlaceholder.fills = [
    { type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } },
  ];
  namePlaceholder.textAlignVertical = "CENTER";
  namePlaceholder.lineHeight = { value: 1.2, unit: "PIXELS" };
  namePlaceholder.resize(
    nameInput.width - 20,
    namePlaceholder.fontSize * namePlaceholder.lineHeight.value
  );
  namePlaceholder.x = nameInput.x + 10;
  namePlaceholder.y = nameInput.y + 16;
  const emailInput = figma.createRectangle();
  emailInput.name = "Email Input";
  emailInput.resize(280, 32);
  emailInput.cornerRadius = 4;
  emailInput.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  emailInput.x = container.x + 20;
  emailInput.y = container.y + 130;
  emailInput.effects = [
    {
      type: "DROP_SHADOW",
      color: { r: 0, g: 0, b: 0, a: 0.2 },
      radius: 2,
      offset: { x: 0, y: 1 },
      blendMode: "NORMAL",
      visible: true,
    },
  ];
  const emailLabel = figma.createText();
  emailLabel.name = "Email Label";
  emailLabel.characters = "Email";
  emailLabel.fontSize = 14;
  emailLabel.fontName = { family: "Roboto", style: "Regular" };
  emailLabel.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  emailLabel.textAlignVertical = "CENTER";
  emailLabel.lineHeight = { value: 1.2, unit: "PIXELS" };
  emailLabel.resize(50, emailLabel.fontSize * emailLabel.lineHeight.value);
  emailLabel.x = container.x + 20;
  emailLabel.y = container.y + 112;
  emailLabel.constraints = { horizontal: "MIN", vertical: "MIN" };
  const emailPlaceholder = figma.createText();
  emailPlaceholder.name = "Email Placeholder";
  emailPlaceholder.characters = "Enter your email";
  emailPlaceholder.fontSize = 14;
  emailPlaceholder.fontName = { family: "Roboto", style: "Regular" };
  emailPlaceholder.fills = [
    { type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } },
  ];
  emailPlaceholder.textAlignVertical = "CENTER";
  emailPlaceholder.lineHeight = { value: 1.2, unit: "PIXELS" };
  emailPlaceholder.resize(
    emailInput.width - 20,
    emailPlaceholder.fontSize * emailPlaceholder.lineHeight.value
  );
  emailPlaceholder.x = emailInput.x + 10;
  emailPlaceholder.y = emailInput.y + 16;
  const passwordInput = figma.createRectangle();
  passwordInput.name = "Password Input";
  passwordInput.resize(280, 32);
  passwordInput.cornerRadius = 4;
  passwordInput.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  passwordInput.x = container.x + 20;
  passwordInput.y = container.y + 180;
  passwordInput.effects = [
    {
      type: "DROP_SHADOW",
      color: { r: 0, g: 0, b: 0, a: 0.2 },
      radius: 2,
      offset: { x: 0, y: 1 },
      blendMode: "NORMAL",
      visible: true,
    },
  ];
  const passwordLabel = figma.createText();
  passwordLabel.name = "Password Label";
  passwordLabel.characters = "Password";
  passwordLabel.fontSize = 14;
  passwordLabel.fontName = { family: "Roboto", style: "Regular" };
  passwordLabel.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  passwordLabel.textAlignVertical = "CENTER";
  passwordLabel.lineHeight = { value: 1.2, unit: "PIXELS" };
  passwordLabel.resize(
    60,
    passwordLabel.fontSize * passwordLabel.lineHeight.value
  );
  passwordLabel.constraints = { horizontal: "MIN", vertical: "MIN" };
  passwordLabel.x = container.x + 20;
  passwordLabel.y = container.y + 162;
  const passwordPlaceholder = figma.createText();
  passwordPlaceholder.name = "Password Placeholder";
  passwordPlaceholder.characters = "Enter your password";
  passwordPlaceholder.fontSize = 14;
  passwordPlaceholder.fontName = { family: "Roboto", style: "Regular" };
  passwordPlaceholder.fills = [
    { type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } },
  ];
  passwordPlaceholder.textAlignVertical = "CENTER";
  passwordPlaceholder.lineHeight = { value: 1.2, unit: "PIXELS" };
  passwordPlaceholder.resize(
    passwordInput.width - 20,
    passwordPlaceholder.fontSize * passwordPlaceholder.lineHeight.value
  );
  passwordPlaceholder.x = passwordInput.x + 10;
  passwordPlaceholder.y = passwordInput.y + 16;
  const confirmPasswordInput = figma.createRectangle();
  confirmPasswordInput.name = "Confirm Password Input";
  confirmPasswordInput.resize(280, 32);
  confirmPasswordInput.cornerRadius = 4;
  confirmPasswordInput.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  confirmPasswordInput.x = container.x + 20;
  confirmPasswordInput.y = container.y + 230;
  confirmPasswordInput.effects = [
    {
      type: "DROP_SHADOW",
      color: { r: 0, g: 0, b: 0, a: 0.2 },
      radius: 2,
      offset: { x: 0, y: 1 },
      blendMode: "NORMAL",
      visible: true,
    },
  ];
  const confirmPasswordLabel = figma.createText();
  confirmPasswordLabel.name = "Confirm Password Label";
  confirmPasswordLabel.characters = "Confirm Password";
  confirmPasswordLabel.fontSize = 14;
  confirmPasswordLabel.fontName = { family: "Roboto", style: "Regular" };
  confirmPasswordLabel.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  confirmPasswordLabel.textAlignVertical = "CENTER";
  confirmPasswordLabel.lineHeight = { value: 1.2, unit: "PIXELS" };
  confirmPasswordLabel.resize(
    120,
    confirmPasswordLabel.fontSize * confirmPasswordLabel.lineHeight.value
  );
  confirmPasswordLabel.constraints = { horizontal: "MIN", vertical: "MIN" };
  confirmPasswordLabel.x = container.x + 20;
  confirmPasswordLabel.y = container.y + 212;
  const confirmPasswordPlaceholder = figma.createText();
  confirmPasswordPlaceholder.name = "Confirm Password Placeholder";
  confirmPasswordPlaceholder.characters = "Confirm your password";
  confirmPasswordPlaceholder.fontSize = 14;
  confirmPasswordPlaceholder.fontName = { family: "Roboto", style: "Regular" };
  confirmPasswordPlaceholder.fills = [
    { type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } },
  ];
  confirmPasswordPlaceholder.textAlignVertical = "CENTER";
  confirmPasswordPlaceholder.lineHeight = { value: 1.2, unit: "PIXELS" };
  confirmPasswordPlaceholder.resize(
    confirmPasswordInput.width - 20,
    confirmPasswordPlaceholder.fontSize *
      confirmPasswordPlaceholder.lineHeight.value
  );
  confirmPasswordPlaceholder.x = confirmPasswordInput.x + 10;
  confirmPasswordPlaceholder.y = confirmPasswordInput.y + 16;
  figma.currentPage.appendChild(container);
  figma.currentPage.appendChild(titleText);
  figma.currentPage.appendChild(nameInput);
  figma.currentPage.appendChild(nameLabel);
  figma.currentPage.appendChild(namePlaceholder);
  figma.currentPage.appendChild(emailInput);
  figma.currentPage.appendChild(emailLabel);
  figma.currentPage.appendChild(emailPlaceholder);
  figma.currentPage.appendChild(passwordInput);
  figma.currentPage.appendChild(passwordLabel);
  figma.currentPage.appendChild(passwordPlaceholder);
  figma.currentPage.appendChild(confirmPasswordInput);
  figma.currentPage.appendChild(confirmPasswordLabel);
  figma.currentPage.appendChild(confirmPasswordPlaceholder);
  figma.currentPage.selection = [
    container,
    titleText,
    nameInput,
    nameLabel,
    namePlaceholder,
    emailInput,
    emailLabel,
    emailPlaceholder,
    passwordInput,
    passwordLabel,
    passwordPlaceholder,
    confirmPasswordInput,
    confirmPasswordLabel,
    confirmPasswordPlaceholder,
  ];
  figma.viewport.scrollAndZoomIntoView([
    container,
    titleText,
    nameInput,
    nameLabel,
    namePlaceholder,
    emailInput,
    emailLabel,
    emailPlaceholder,
    passwordInput,
    passwordLabel,
    passwordPlaceholder,
    confirmPasswordInput,
    confirmPasswordLabel,
    confirmPasswordPlaceholder,
  ]);
};

const generateButton = (width: any, height: any, text: any) => {
  const button = figma.createFrame();
  button.resize(width, height);
  button.name = "Button";
  button.cornerRadius = 8;
  button.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
  const buttonText = figma.createText();
  buttonText.name = "Text";
  buttonText.characters = text;
  buttonText.fontSize = 16;
  buttonText.fontName = { family: "Roboto", style: "Regular" };
  buttonText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  buttonText.textAlignHorizontal = "CENTER";
  buttonText.textAlignVertical = "CENTER";
  buttonText.lineHeight = { value: 1.2, unit: "PIXELS" };
  buttonText.resize(button.width, button.height);
  const states = figma.createComponent();
  const defaultState = button.clone();
  defaultState.name = "Default";
  const hoveredState = button.clone();
  hoveredState.name = "Hovered";
  hoveredState.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
  const pressedState = button.clone();
  pressedState.name = "Pressed";
  pressedState.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
  const disabledState = button.clone();
  disabledState.name = "Disabled";
  disabledState.opacity = 0.5;
  const disabledText = buttonText.clone();
  disabledText.name = "Text Disabled";
  disabledText.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
  states.appendChild(defaultState);
  states.appendChild(hoveredState);
  states.appendChild(pressedState);
  states.appendChild(disabledState);
  if (text) {
    defaultState.appendChild(buttonText);
    hoveredState.appendChild(buttonText.clone());
    pressedState.appendChild(buttonText.clone());
    disabledState.appendChild(disabledText);
  }
  return states;
};
const createHeroSection = () => {
  const section = figma.createFrame();
  section.name = "Hero Section";
  section.resize(1440, 600);
  section.backgrounds = [
    { type: "SOLID", color: { r: 0.94, g: 0.94, b: 0.97 } },
  ];
  const titleText = figma.createText();
  titleText.name = "Title";
  titleText.characters = "Buy a washing machine today!";
  titleText.fontSize = 64;
  titleText.fontName = { family: "Roboto", style: "Bold" };
  titleText.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  titleText.textAlignHorizontal = "CENTER";
  titleText.textAlignVertical = "CENTER";
  titleText.lineHeight = { value: 1.2, unit: "PIXELS" };
  titleText.resize(section.width - 64, section.height - 256);
  titleText.x = section.x + (section.width - titleText.width) / 2;
  titleText.y = section.y + 128;
  const subtitleText = figma.createText();
  subtitleText.name = "Subtitle";
  subtitleText.characters = "Our washing machines are the best on the market!";
  subtitleText.fontSize = 24;
  subtitleText.fontName = { family: "Roboto", style: "Regular" };
  subtitleText.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  subtitleText.textAlignHorizontal = "CENTER";
  subtitleText.textAlignVertical = "CENTER";
  subtitleText.lineHeight = { value: 1.2, unit: "PIXELS" };
  subtitleText.resize(section.width - 128, section.height - 320);
  subtitleText.x = section.x + (section.width - subtitleText.width) / 2;
  subtitleText.y = section.y + 240;
  figma.currentPage.appendChild(section);
  figma.currentPage.appendChild(titleText);
  figma.currentPage.appendChild(subtitleText);
  figma.currentPage.selection = [section, titleText, subtitleText];
  figma.viewport.scrollAndZoomIntoView([section, titleText, subtitleText]);
};
const createAnotherHero = () => {
  const container = figma.createFrame();
  container.name = "Hero Section";
  container.resize(1440, 600);
  container.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
  const headingText = figma.createText();
  headingText.name = "Heading";
  headingText.characters = "Buy the best washing machines";
  headingText.fontSize = 72;
  headingText.fontName = { family: "Arial", style: "Bold" };
  headingText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  headingText.textAlignHorizontal = "CENTER";
  headingText.textAlignVertical = "CENTER";
  headingText.lineHeight = { value: 1.2, unit: "PIXELS" };
  headingText.resize(
    container.width - 32,
    headingText.fontSize * headingText.lineHeight.value
  );
  headingText.x = container.x + 16;
  headingText.y = container.y + 64;
  const subheadingText = figma.createText();
  subheadingText.name = "Subheading";
  subheadingText.characters = "Find the perfect washing machine for your home";
  subheadingText.fontSize = 24;
  subheadingText.fontName = { family: "Arial", style: "Regular" };
  subheadingText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  subheadingText.textAlignHorizontal = "CENTER";
  subheadingText.textAlignVertical = "CENTER";
  subheadingText.lineHeight = { value: 1.2, unit: "PIXELS" };
  subheadingText.resize(
    container.width - 32,
    subheadingText.fontSize * subheadingText.lineHeight.value
  );
  subheadingText.x = container.x + 16;
  subheadingText.y = container.y + 150;
  const ctaButton = figma.createRectangle();
  ctaButton.name = "CTA Button";
  ctaButton.cornerRadius = 4;
  ctaButton.resize(200, 48);
  ctaButton.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  ctaButton.x = container.x + (container.width - ctaButton.width) / 2;
  ctaButton.y = container.y + 240;
  const ctaButtonText = figma.createText();
  ctaButtonText.name = "CTA Button Text";
  ctaButtonText.characters = "Shop now";
  ctaButtonText.fontSize = 18;
  ctaButtonText.fontName = { family: "Arial", style: "Regular" };
  ctaButtonText.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  ctaButtonText.textAlignHorizontal = "CENTER";
  ctaButtonText.textAlignVertical = "CENTER";
  ctaButtonText.lineHeight = { value: 1.2, unit: "PIXELS" };
  ctaButtonText.resize(
    ctaButton.width - 16,
    ctaButtonText.fontSize * ctaButtonText.lineHeight.value
  );
  ctaButtonText.x = ctaButton.x + (ctaButton.width - ctaButtonText.width) / 2;
  ctaButtonText.y = ctaButton.y + (ctaButton.height - ctaButtonText.height) / 2;
  figma.currentPage.appendChild(container);
  figma.currentPage.appendChild(headingText);
  figma.currentPage.appendChild(subheadingText);
  figma.currentPage.appendChild(ctaButton);
  figma.currentPage.appendChild(ctaButtonText);
  figma.currentPage.selection = [
    container,
    headingText,
    subheadingText,
    ctaButton,
    ctaButtonText,
  ];
  figma.viewport.scrollAndZoomIntoView([
    container,
    headingText,
    subheadingText,
    ctaButton,
    ctaButtonText,
  ]);
};
// const createCatalog = () => {
//   const section = figma.createFrame();
//   section.name = "Catalog Section";
//   section.resize(640, 480);
//   section.backgrounds = [
//     { type: "SOLID", color: { r: 0.95, g: 0.95, b: 0.95 } },
//   ];
//   const title = figma.createText();
//   title.name = "Title";
//   title.characters = "Washing Machines";
//   title.fontSize = 32;
//   title.fontName = { family: "Roboto", style: "Bold" };
//   title.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
//   title.textAlignHorizontal = "LEFT";
//   title.textAlignVertical = "CENTER";
//   title.lineHeight = { value: 1.2, unit: "PIXELS" };
//   title.resize(section.width - 32, title.fontSize * title.lineHeight.value);
//   title.x = section.x + 16;
//   title.y = section.y + 24;
//   const products = figma.createFrame();
//   products.name = "Products";
//   products.resize(640, 360);
//   products.x = section.x;
//   products.y = section.y + 80;
//   products.layoutMode = "HORIZONTAL";
//   products.counterAxisSizingMode = "AUTO";
//   products.primaryAxisSizingMode = "AUTO";
//   products.layoutGrids = [
//     { pattern: "COLUMNS", sectionSize: 240, gutterSize: 16 },
//   ];
//   for (let i = 0; i < 6; i++) {
//     const product = figma.createFrame();
//     product.name = `Product ${i + 1}`;
//     product.resize(240, 320);
//     product.cornerRadius = 8;
//     product.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
//     const productImage = figma.createRectangle();
//     productImage.name = "Image";
//     productImage.resize(240, 240);
//     productImage.fills = [
//       { type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } },
//     ];
//     productImage.constraints = { horizontal: "STRETCH", vertical: "MIN" };
//     const productTitle = figma.createText();
//     productTitle.name = "Title";
//     productTitle.characters = `Product ${i + 1}`;
//     productTitle.fontSize = 16;
//     productTitle.fontName = { family: "Roboto", style: "Regular" };
//     productTitle.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
//     productTitle.textAlignHorizontal = "LEFT";
//     productTitle.textAlignVertical = "CENTER";
//     productTitle.lineHeight = { value: 1.2, unit: "PIXELS" };
//     productTitle.resize(
//       product.width - 16,
//       productTitle.fontSize * productTitle.lineHeight.value
//     );
//     productTitle.x = product.x + 8;
//     productTitle.y = product.y + 256;
//     const productPrice = figma.createText();
//     productPrice.name = "Price";
//     productPrice.characters = `$${Math.floor(Math.random() * 1000)}`;
//     productPrice.fontSize = 24;
//     productPrice.fontName = { family: "Roboto", style: "Regular" };
//     productPrice.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
//     productPrice.textAlignHorizontal = "LEFT";
//     productPrice.textAlignVertical = "CENTER";
//     productPrice.lineHeight = { value: 1.2, unit: "PIXELS" };
//     productPrice.resize(
//       product.width - 16,
//       productPrice.fontSize * productPrice.lineHeight.value
//     );
//     productPrice.x = product.x + 8;
//     productPrice.y = product.y + 296;
//     products.appendChild(product);
//     products.appendChild(productImage);
//     products.appendChild(productTitle);
//     products.appendChild(productPrice);
//   }
//   figma.currentPage.appendChild(section);
//   figma.currentPage.appendChild(title);
//   figma.currentPage.appendChild(products);
//   figma.currentPage.selection = [section, title, products];
//   figma.viewport.scrollAndZoomIntoView([section, title, products]);
// };

const createSmallCatalog = () => {
  const section = figma.createFrame();
  section.name = "Catalog Section";
  section.resize(960, 600);
  section.backgrounds = [
    { type: "SOLID", color: { r: 0.95, g: 0.96, b: 0.97 } },
  ];
  const sectionTitle = figma.createText();
  sectionTitle.name = "Title";
  sectionTitle.characters = "Washing Machines";
  sectionTitle.fontSize = 32;
  sectionTitle.fontName = { family: "Roboto", style: "Bold" };
  sectionTitle.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  sectionTitle.textAlignHorizontal = "CENTER";
  sectionTitle.textAlignVertical = "CENTER";
  sectionTitle.lineHeight = { value: 1.2, unit: "PIXELS" };
  sectionTitle.resize(
    section.width - 32,
    sectionTitle.fontSize * sectionTitle.lineHeight.value
  );
  sectionTitle.x = section.x + (section.width - sectionTitle.width) / 2;
  sectionTitle.y = section.y + 32;
  const catalogContainer = figma.createFrame();
  catalogContainer.name = "Catalog Container";
  catalogContainer.resize(section.width - 64, section.height - 128);
  catalogContainer.cornerRadius = 16;
  catalogContainer.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  catalogContainer.x = section.x + 32;
  catalogContainer.y = sectionTitle.y + sectionTitle.height + 48;
  const catalogTitle = figma.createText();
  catalogTitle.name = "Catalog Title";
  catalogTitle.characters = "Latest Models";
  catalogTitle.fontSize = 24;
  catalogTitle.fontName = { family: "Roboto", style: "Bold" };
  catalogTitle.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  catalogTitle.textAlignHorizontal = "LEFT";
  catalogTitle.textAlignVertical = "CENTER";
  catalogTitle.lineHeight = { value: 1.2, unit: "PIXELS" };
  catalogTitle.resize(
    catalogContainer.width - 56,
    catalogTitle.fontSize * catalogTitle.lineHeight.value
  );
  catalogTitle.x = catalogContainer.x + 40;
  catalogTitle.y = catalogContainer.y + 32;
  figma.currentPage.appendChild(section);
  figma.currentPage.appendChild(sectionTitle);
  figma.currentPage.appendChild(catalogContainer);
  figma.currentPage.appendChild(catalogTitle);
  figma.currentPage.selection = [
    section,
    sectionTitle,
    catalogContainer,
    catalogTitle,
  ];
  figma.viewport.scrollAndZoomIntoView([
    section,
    sectionTitle,
    catalogContainer,
    catalogTitle,
  ]);
};
const createSmallCatalog1 = () => {
  const container = figma.createFrame();
  container.name = "Catalog Section";
  container.resize(360, 480);
  container.cornerRadius = 8;
  container.fills = [{ type: "SOLID", color: { r: 0.95, g: 0.95, b: 0.95 } }];
  const header = figma.createRectangle();
  header.name = "Header";
  header.resize(360, 48);
  header.cornerRadius = 8;
  header.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
  const headerText = figma.createText();
  headerText.name = "Header Text";
  headerText.characters = "Washing Machines Catalog";
  headerText.fontSize = 18;
  headerText.fontName = { family: "Roboto", style: "Regular" };
  headerText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  headerText.textAlignHorizontal = "CENTER";
  headerText.textAlignVertical = "CENTER";
  headerText.lineHeight = { value: 1.2, unit: "PIXELS" };
  headerText.resize(header.width - 16, header.height - 16);
  headerText.x = header.x + (header.width - headerText.width) / 2;
  headerText.y = header.y + (header.height - headerText.height) / 2;
  const item1 = figma.createFrame();
  item1.name = "Catalog item 1";
  item1.resize(160, 160);
  item1.x = container.x + 8;
  item1.y = header.y + header.height + 16;
  item1.cornerRadius = 8;
  item1.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  const item2 = figma.createFrame();
  item2.name = "Catalog item 2";
  item2.resize(160, 160);
  item2.x = item1.x + item1.width + 16;
  item2.y = header.y + header.height + 16;
  item2.cornerRadius = 8;
  item2.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  const item3 = figma.createFrame();
  item3.name = "Catalog item 3";
  item3.resize(160, 160);
  item3.x = container.x + 8;
  item3.y = item1.y + item1.height + 16;
  item3.cornerRadius = 8;
  item3.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  const item4 = figma.createFrame();
  item4.name = "Catalog item 4";
  item4.resize(160, 160);
  item4.x = item3.x + item3.width + 16;
  item4.y = item1.y + item1.height + 16;
  item4.cornerRadius = 8;
  item4.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  figma.currentPage.appendChild(container);
  figma.currentPage.appendChild(header);
  figma.currentPage.appendChild(headerText);
  figma.currentPage.appendChild(item1);
  figma.currentPage.appendChild(item2);
  figma.currentPage.appendChild(item3);
  figma.currentPage.appendChild(item4);
  figma.currentPage.selection = [
    container,
    header,
    headerText,
    item1,
    item2,
    item3,
    item4,
  ];
  figma.viewport.scrollAndZoomIntoView([
    container,
    header,
    headerText,
    item1,
    item2,
    item3,
    item4,
  ]);
};
const createSmallCatalog2 = () => {
  const container = figma.createFrame();
  container.name = "Catalog Section";
  container.resize(640, 480);
  container.backgrounds = [
    { type: "SOLID", color: { r: 0.95, g: 0.95, b: 0.95 } },
  ];
  const titleText = figma.createText();
  titleText.name = "Title";
  titleText.characters = "Washing Machines";
  titleText.fontSize = 36;
  titleText.fontName = { family: "Roboto", style: "Bold" };
  titleText.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  titleText.textAlignHorizontal = "LEFT";
  titleText.textAlignVertical = "CENTER";
  titleText.lineHeight = { value: 1.2, unit: "PIXELS" };
  titleText.resize(
    container.width - 32,
    titleText.fontSize * titleText.lineHeight.value
  );
  titleText.x = container.x + 16;
  titleText.y = container.y + 16;
  const margin = 16;
  const productWidth = (container.width - margin * 3) / 2;
  const productHeight = 360;
  const productList = figma.createFrame();
  productList.name = "Product List";
  productList.resize(container.width - 32, productHeight * 2 + margin);
  productList.x = container.x + 16;
  productList.y = container.y + 96;
  const product1 = figma.createFrame();
  product1.name = "Product 1";
  product1.resize(productWidth, productHeight);
  product1.cornerRadius = 8;
  product1.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  const product2 = figma.createFrame();
  product2.name = "Product 2";
  product2.resize(productWidth, productHeight);
  product2.cornerRadius = 8;
  product2.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  const product3 = figma.createFrame();
  product3.name = "Product 3";
  product3.resize(productWidth, productHeight);
  product3.cornerRadius = 8;
  product3.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  const product4 = figma.createFrame();
  product4.name = "Product 4";
  product4.resize(productWidth, productHeight);
  product4.cornerRadius = 8;
  product4.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  product1.x = margin;
  product1.y = margin;
  product2.x = productWidth + margin * 2;
  product2.y = margin;
  product3.x = margin;
  product3.y = productHeight + margin * 2;
  product4.x = productWidth + margin * 2;
  product4.y = productHeight + margin * 2;
  productList.appendChild(product1);
  productList.appendChild(product2);
  productList.appendChild(product3);
  productList.appendChild(product4);
  figma.currentPage.appendChild(container);
  figma.currentPage.appendChild(titleText);
  figma.currentPage.appendChild(productList);
  figma.currentPage.selection = [container, titleText, productList];
  figma.viewport.scrollAndZoomIntoView([container, titleText, productList]);
};

const autoLayoutButton = () => {
  const button = figma.createFrame();
  button.resize(120, 40);
  button.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
  const label = figma.createText();
  label.characters = "BUTTON";
  label.fontSize = 16;
  label.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  label.textAlignHorizontal = "CENTER";
  label.textAlignVertical = "CENTER";
  button.appendChild(label);
  button.layoutMode = "HORIZONTAL";
  button.primaryAxisAlignItems = "CENTER";
  button.counterAxisAlignItems = "CENTER";
  button.paddingLeft = 8;
  button.paddingRight = 8;
  button.paddingTop = 8;
  button.paddingBottom = 8;
  button.itemSpacing = 4;
  figma.currentPage.selection = [button];
  figma.viewport.scrollAndZoomIntoView([button]);
};
const generateSelect = () => {
  const selectField = figma.createFrame();
  selectField.resize(120, 40);
  selectField.fills = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];
  const label = figma.createText();
  label.characters = "Select";
  label.fontSize = 16;
  label.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
  label.textAlignHorizontal = "LEFT";
  label.textAlignVertical = "CENTER";
  selectField.appendChild(label);
  const parentOption = figma.createFrame();
  const options = ["Option 1", "Option 2", "Option 3"];
  options.forEach((option, index) => {
    const optionText = figma.createText();
    optionText.characters = option;
    optionText.fontSize = 12;
    optionText.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
    optionText.textAlignHorizontal = "LEFT";
    optionText.textAlignVertical = "CENTER";
    parentOption.appendChild(optionText);
  });
  parentOption.layoutMode = "VERTICAL";
  parentOption.counterAxisAlignItems = "CENTER";
  parentOption.itemSpacing = 4;
  parentOption.paddingTop = 8;
  parentOption.paddingBottom = 8;
  selectField.appendChild(parentOption);
  selectField.layoutMode = "VERTICAL";
  selectField.primaryAxisAlignItems = "CENTER";
  selectField.counterAxisAlignItems = "CENTER";
  selectField.paddingLeft = 8;
  selectField.paddingRight = 8;
  selectField.paddingTop = 8;
  selectField.paddingBottom = 8;
  selectField.itemSpacing = 4;
  parentOption.resize(selectField.width, parentOption.height);
  figma.currentPage.selection = [selectField];
  figma.viewport.scrollAndZoomIntoView([selectField]);
};
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
    const buttonSet = generateButton(100, 40, "click");
    figma.currentPage.appendChild(buttonSet);
    // eval(insertion);
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
