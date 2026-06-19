import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SPRITES_DIR = path.resolve('public/assets/sprites');

function colorDistance(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

async function removeBackground(inputPath, outputPath, options = {}) {
  const {
    cornerSample = true,
    threshold = 42,
    feather = 18,
  } = options;

  const image = sharp(inputPath).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  let bgR = 120;
  let bgG = 150;
  let bgB = 110;

  if (cornerSample) {
    const samples = [
      [0, 0],
      [info.width - 1, 0],
      [0, info.height - 1],
      [info.width - 1, info.height - 1],
      [Math.floor(info.width / 2), 0],
      [0, Math.floor(info.height / 2)],
    ];
    let sr = 0;
    let sg = 0;
    let sb = 0;
    for (const [x, y] of samples) {
      const i = (y * info.width + x) * 4;
      sr += data[i];
      sg += data[i + 1];
      sb += data[i + 2];
    }
    bgR = Math.round(sr / samples.length);
    bgG = Math.round(sg / samples.length);
    bgB = Math.round(sb / samples.length);
  }

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const dist = colorDistance(r, g, b, bgR, bgG, bgB);

    if (dist <= threshold) {
      data[i + 3] = 0;
    } else if (dist <= threshold + feather) {
      const alpha = Math.round(((dist - threshold) / feather) * 255);
      data[i + 3] = Math.min(data[i + 3], alpha);
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(outputPath);

  console.log(`Processed ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
}

const jobs = [
  { input: 'rabbit-raw.png', output: 'rabbit.png', threshold: 38, feather: 22 },
  { input: 'carrot-raw3.png', output: 'carrot.png', threshold: 38, feather: 22 },
  { input: 'egg-raw.png', output: 'egg.png', threshold: 28, feather: 30 },
];

await mkdir(SPRITES_DIR, { recursive: true });

for (const job of jobs) {
  await removeBackground(
    path.join(SPRITES_DIR, job.input),
    path.join(SPRITES_DIR, job.output),
    { threshold: job.threshold ?? 38, feather: job.feather ?? 22 }
  );
}
