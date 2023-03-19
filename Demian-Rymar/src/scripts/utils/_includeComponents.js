export function includeHTML() {
  const COMPONENT = document.querySelectorAll('component');
  COMPONENT.forEach((component) => {
    const FILE_NAME = component.getAttribute('fileName');
    console.log(FILE_NAME);
    // get html file
    const HTML = fetch(`../../components/${FILE_NAME}.html`)
    console.log(HTML);
    
  });
}
