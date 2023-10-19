# Red Team Chrome Extension
This a chrome extension created using TypeScript and React to improve the GenAI LLM red teaming workflow.

## Installation Instructions
1. Download the entire `/dist` directory from this repository.
2. Install Google Chrome if it is not already installed on your machine. NOTE: This extension is not compatible with other browsers nor is it usable on mobile browsers.
3. In Google Chrome, open the [Chrome Extensions Pane](chrome://extensions/).
4. Turn on developer mode using the top righthand corner.
5. Click __load unpacked__ in the top lefthand corner and navigate to the `/dist` folder installed from this repository.
6. Select the `/dist` folder and confirm. Be careful ___not___ to select the `/js` folder inside of `/dist` folder or `manifest.json`. You ___must___ select the `/dist` folder itself.
7. Once the extension has been loaded onto your browser, it should appear as its own cell with the title __Red Team Helper__. Click on details.
8. Scroll down to the _Site access_ section and ensure that the extension is allowed to access data on the necessary sites.
9. Next, scroll down to the _Pin to toolbar_ option and ensure that it is turned on.
10. You're all set and ready to use the tool!

## Features
- Automatically sets up a "workspace" window with necessary tabs and windows open.
- Automatically redirects to the appropriate `taskID` within the agents playground if it disappears or is changed.
- Allows broadcasting to all or select pods to work on a particular task (including linking necessary documents, override settings, and guidelines) as an administrator.
- Easy access to viewing and copying override settings.
- Easy access to Red Team shared drive.
- Progress tracker that automatically counts the number of labels made per session.
