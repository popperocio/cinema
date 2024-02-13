export function create_container(container,className,labelText, textContent) {
    const element = document.createElement("div");
    element.className = className;

    const label = document.createElement("h3");
    label.textContent = labelText;
    element.appendChild(label);

    const content = document.createElement("p");
    content.className = labelText;
    content.textContent = textContent;
    element.appendChild(content);

    container.appendChild(element);
    console.log(container);
}