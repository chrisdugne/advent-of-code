import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const currDir = (fileUrl) => {
  const __filename = fileURLToPath(fileUrl);
  return path.dirname(__filename);
}

export const read = (fromURl, _path) => {
  return fs.readFileSync(
    path.join(currDir(fromURl), _path),
    {encoding: 'utf-8'}
  )
}
