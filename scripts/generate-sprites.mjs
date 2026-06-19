import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';

const SPRITES_DIR = path.resolve('public/assets/sprites');

const PROMPTS = {
  'rabbit-raw.png':
    '3D rendered cute white rabbit RPG game character sprite standing soft studio lighting isolated on solid green background chibi style high detail no text',
  'carrot-raw3.png':
    '3D rendered cute orange carrot RPG game item sprite chibi glossy soft studio lighting isolated on solid green background single carrot high detail no text',
  'egg-raw.png':
    '3D rendered cute easter egg RPG game collectible item sprite chibi glossy soft studio lighting pastel pink colored spots isolated on solid white background single egg high detail no text',
};

async function downloadSprite(filename, prompt) {
  const url = new URL('https://image.pollinations.ai/prompt/' + encodeURIComponent(prompt));
  url.searchParams.set('width', '128');
  url.searchParams.set('height', '128');
  url.searchParams.set('nologo', 'true');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${filename}: ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const outputPath = path.join(SPRITES_DIR, filename);
  await writeFile(outputPath, buffer);
  console.log(`Downloaded ${filename}`);
}

function runProcessScript() {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ['scripts/process-sprites.mjs'], {
      stdio: 'inherit',
      shell: false,
    });
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`process-sprites exited with code ${code}`));
    });
  });
}

await mkdir(SPRITES_DIR, { recursive: true });

for (const [filename, prompt] of Object.entries(PROMPTS)) {
  await downloadSprite(filename, prompt);
}

await runProcessScript();
console.log('Sprites ready in public/assets/sprites/');
