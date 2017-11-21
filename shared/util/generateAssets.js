import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const assetsFilePath = path.resolve(rootDir, 'public/dist/assets.json')
const readAssetsJSONFile = () => JSON.parse(fs.readFileSync(assetsFilePath, 'utf-8'));
const assetsJSON = readAssetsJSONFile();
const assetsJSONResolver = () => (
  process.env.NODE_ENV === 'development'
    // In development mode we always read the assets json file from disk to avoid
    // any cases where an older version gets cached.
    ? readAssetsJSONFile()
    // Otherwise we return the initially parsed JSON file.
    : assetsJSON
);

function getAssetsForClientChunks(chunks) {
  return chunks.reduce((acc, chunkName) => {
    const chunkAssets = assetsJSONResolver()[chunkName];
    if (chunkAssets) {
      if (chunkAssets.js) {
        acc.js.push(chunkAssets.js);
      }
      if (chunkAssets.css) {
        acc.css.push(chunkAssets.css);
      }
    }
    return acc;
  }, { js: [], css: [] });
}
export default getAssetsForClientChunks;
