import fs from 'fs';
import { join } from 'path';

export const getList = (path) => {
  const directory = join(process.cwd(), path);
  const files = fs.readdirSync(directory);
  return files;
};

// process.cwd() sciezka do folderu _projects moe byc inna na innych
// kompach dlatego korzysta sie z tej funkcji która zwraca scieke do
// folderu w ktorym pracuje skrypt node.js

// aby odczytac co jest w sciezce directory korzystamy z funkcji fs
// umoliwia interakcje z file systemem
