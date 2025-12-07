# Gaussian Splat Editor

Forked from SuperSplat. The Gaussian Splat Editor is a free and open source tool for inspecting, editing, optimizing and publishing 3D Gaussian Splats. It is built on web technologies and runs in the browser.

## Features
(If the new features does not pop up, make sure to clear the browser's cache.)
#### Opacity Select
Used for post performance optimization. When the gaussian splats have very low opacity vlaue, they are usually barely visible in the scene. Prune the low opacity gaussian splats can increase the scene performance and lower the file size.
- Threshold: Numeric input. The gaussian splats which has the opacity value lower than this threshold will be selected
- Select: Selects all points with opacity lower than the threshold
- Add: Adds all points with opacity lower than the threshold to current selection
- Remove: Removes all points with opacity lower than the threshold from current selection

#### Size Select
Used for post performance optimization. When the gaussian splats are very small, they are usually barely visible in the scene. Prune the tiny gaussian splats can increase the scene performance and lower the file size. 
- Threshold: Numeric input. The gaussian splats which has the size smaller than this threshold will be selected (size = size.x + size.y + size.z)
- Select: Selects all points with the size smaller than the threshold
- Add: Adds all points with the size smaller than the threshold to current selection
- Remove: Removes all points with the size smaller than the threshold from current selection

## Local Development

To initialize a local development environment for SuperSplat, ensure you have [Node.js](https://nodejs.org/) 18 or later installed. Follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/TimChen1383/SuperSplat.git
   cd supersplat
   ```

2. Install dependencies: (only for the first time)

   ```sh
   npm install
   ```

3. Build SuperSplat and start a local web server:

   ```sh
   npm run develop
   ```

4. Open a web browser tab and make sure network caching is disabled on the network tab and the other application caches are clear: 

   - On Chrome ensure the options "Update on reload" and "Bypass for network" are enabled in the Application->Service workers tab: (press F12)
   <img width="739" height="378" alt="Screenshot 2025-12-07 142119" src="https://github.com/user-attachments/assets/a6310e5f-7cb5-4cb6-be2b-7aa1588c618d" />

5. Navigate to `http://localhost:3000`

When changes to the source are detected, SuperSplat is rebuilt automatically. Simply refresh your browser to see your changes.


