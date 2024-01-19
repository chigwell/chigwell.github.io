function typeConsoleCommand(command, consoleElement, delay = 35) {
    let i = 0;
    const commandDiv = document.createElement('div');
    consoleElement.appendChild(commandDiv);

    return new Promise(resolve => {
        const interval = setInterval(() => {
            if (i < command.length) {
                commandDiv.textContent += command.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                commandDiv.textContent += '\n';
                resolve();
            }
        }, delay);
    });
}

async function displayCommands() {
    const consoleElement = document.getElementById('console');
    const commands = [
        'pip install penelopa',
        'penelopa --task="Add comments to ConfigManager class in configuration.py"',
        'Running Penelopa...',
        'Generating clarifying questions...',
        'Question 1: What type of comments are needed?',
        ' (1) Explanatory comments for code readability',
        ' (2) TODOs for future enhancements',
        ' (3) Inline documentation for public API methods',
        'Please choose the number (1 to 3): 1',
        'Question 2: Which Python commenting style should be followed?',
        ' (1) Docstring for functions and classes',
        ' (2) Inline comments for complex logic',
        ' (3) A mix of both docstrings and inline comments',
        'Please choose the number (1 to 3): 1',
        'Question 3: How comprehensive should the commenting be?',
        ' (1) Cover every function and method',
        ' (2) Focus on the most complex parts of the code',
        ' (3) Comment only on new code additions',
        ' (4) Provide a brief overview for each module',
        'Please choose the number (1 to 4): 4',
        'Refined task: Add comprehensive comments to the ConfigManager class following PEP 8 style guide and using docstrings.',
        'Generating code modifications...',
        '```diff',
        '/penelopa/configuration.py',
        '<<<<<<< HEAD',
        'class ConfigManager:',
        '    DEFAULT_CONFIG = {',
        '=======',
        'class ConfigManager:',
        '    """',
        '    Manages configuration settings for the Penelopa project.',
        '',
        '    This class provides methods to load, validate, and save configuration settings.',
        '    It handles both default and custom configurations, ensuring the smooth operation',
        '    of the Penelopa project.',
        '',
        '    Attributes:',
        '        config_path (str): Path to the YAML configuration file.',
        '        config (dict): Configuration dictionary containing settings.',
        '    """',
        '',
        '    DEFAULT_CONFIG = {',
        '        """',
        '        Holds the default settings for the Penelopa project.',
        '',
        '        These settings include project name, path, GPT model details, and other',
        '        essential parameters. These defaults are used if no custom configuration',
        '        is provided.',
        '        """',
        '>>>>>>> updated',
        '```',
        'Apply change to /penelopa/configuration.py? (1 for yes, 2 for no): 1',
        'Changes successfully applied to configuration.py',
        'Tokens used: 1024'
    ];

    for (const command of commands) {
        await typeConsoleCommand(command, consoleElement);
        await new Promise(resolve => setTimeout(resolve, 400));
    }
}

document.addEventListener('DOMContentLoaded', displayCommands);
