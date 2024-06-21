function copyToClipboard(icon) {
    // Get the code element
    let codeElement = icon.previousElementSibling;

    // Create a temporary textarea element to copy the text
    let tempTextarea = document.createElement('textarea');
    tempTextarea.value = codeElement.textContent;
    document.body.appendChild(tempTextarea);

    // Select the text
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Optionally, alert the user that the text has been copied
    alert('Code copied to clipboard!');
}
