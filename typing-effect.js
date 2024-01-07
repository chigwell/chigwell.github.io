function typeConsoleCommand(command, consoleElement, delay = 100) {
    let i = 0;
    const commandDiv = document.createElement('div'); // Create a new div for this command
    consoleElement.appendChild(commandDiv);          // Append the div to the console element

    return new Promise(resolve => {
        const interval = setInterval(() => {
            if (i < command.length) {
                commandDiv.textContent += command.charAt(i); // Append character to the div
                i++;
            } else {
                clearInterval(interval);
                resolve(); // Resolve the promise when the command is fully typed
            }
        }, delay);
    });
}

async function displayCommands() {
    const consoleElement = document.getElementById('console');
    const commands = [
        'pip install penelopa',
        'penelopa --config_path=<path to config> --logging=<True/False> ...'
        // Add more commands as needed
    ];

    for (const command of commands) {
        await typeConsoleCommand(command, consoleElement); // Wait for each command to be typed
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds before next command
    }
}

document.addEventListener('DOMContentLoaded', displayCommands);
