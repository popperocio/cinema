export function create_information_elements(container,labelText, textContent) {
    const label = document.createElement("h3");
    label.textContent = labelText;
    container.appendChild(label);

    const content = document.createElement("p");
    content.className = labelText;
    content.textContent = textContent;
    container.appendChild(content);
}