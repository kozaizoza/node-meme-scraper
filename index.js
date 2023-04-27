import fs from 'fs';

fs.mkdirSync('./meme', { recursive: true });

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const data = await response.text();
console.log(data);

const dir = './meme';

function downloadImage(url, filepath) {
  return download.image({
    url,
    dest: filepath,
  });
}
