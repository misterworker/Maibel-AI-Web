import fs from 'fs';
import path from 'path';

describe('Gitignore Tests', () => {
  it('should ensure waitlist_api is gitignored', () => {
    const gitignorePath = path.join(process.cwd(), '.gitignore');
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf-8');

    // Check if 'waitlist_api' is included in the .gitignore file
    expect(gitignoreContent).toContain('waitlist_api');
  });
});
