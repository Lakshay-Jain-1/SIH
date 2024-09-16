import https from 'https';
import fs from 'fs';
import { exec } from 'child_process';
import path from 'path';

const url = 'https://github.com/Lakshay-Jain-1/SIH/releases/download/3d/3d_models.zip';
const zipPath = path.join('3d_models.zip');
const extractPath = path.join('public', '3d');

function downloadFile(url, dest, callback) {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close(callback);
    });
  }).on('error', (err) => {
    fs.unlink(dest);
    console.error(`Error downloading file: ${err.message}`);
  });
}

function unzipFile(zipPath, extractPath, callback) {
  exec(`unzip -o ${zipPath} -d ${extractPath}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error unzipping file: ${err.message}`);
      return;
    }
    console.log(`Unzipped file: ${stdout}`);
    fs.unlinkSync(zipPath); // Remove zip file after extraction
    callback();
  });
}

if (!fs.existsSync(extractPath)) {
  fs.mkdirSync(extractPath, { recursive: true });
}

downloadFile(url, zipPath, () => {
  unzipFile(zipPath, extractPath, () => {
    console.log('Download and extraction complete.');
  });
});
