import fs from 'fs';
import path from 'path';

function findJpegFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findJpegFiles(filePath)); // Recursively search subdirectories
    } else if (filePath.endsWith('.jpeg')) {
      results.push(filePath);
    }
  });
  return results;
}

describe('File Type Tests', () => {
  it('should not contain any .jpeg files in the project', () => {
    const jpegFiles = findJpegFiles(process.cwd());
    expect(jpegFiles.length).toBe(0);
  });
});
