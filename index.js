// import { promises as fs } from 'node:fs';
import * as fs from 'node:fs';
import fetch from 'node-fetch';

// fs.mkdirSync('./meme', { recursive: true });
//

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const data = await response.text();
console.log(data);

//
const downloadFile = async (url, path) => {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on('error', reject);
    fileStream.on('finish', resolve);
  });
};

await downloadFile(
  'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg',
  './meme/01.jpg',
);
//

// const imageUrl =
//   'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300';

// fetch(imageUrl).then((res) =>
//   res.body.pipe(fs.createWriteStream('./path/to/image.png')),
// );
