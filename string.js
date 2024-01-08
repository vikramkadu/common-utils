export const removeEmptySpaces = (stringVal) => {
  return stringVal.replace(/\s+/g, "");
  // /\s/g.test(stringVal);
};
export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

export const trimWithSingleSpace = (myStr) => {
  if (myStr) {
    return myStr.replace(/  +/g, " ").trimLeft();
  }
};
export const trapSpacesForRequiredFields = (value) => !!value.trim();

export const isValidDate = (dateObject) =>
  new Date(dateObject).toString() !== "Invalid Date";

export const convertHTMLToPlain = (myHTML) => {
  // var myHTML= "<div><h1>Jimbo.</h1>\n<p>That's what she said</p></div>";

  return myHTML?.replace(/<[^>]+>/g, "");
};

export function convertHTMLToPlain2(html) {
  // Create a new div element
  let tempDivElement = document.createElement("div");
  // Set the HTML content with the given value
  tempDivElement.innerHTML = html;
  // Retrieve the text property of the element
  return tempDivElement.textContent || tempDivElement.innerText || "";
}


