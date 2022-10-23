import * as fs from 'fs';
import * as path from 'path';

function readFile(): string[] {
  const filePath = path.resolve('dataset', 'words.txt');

  const fileContent = fs
    .readFileSync(filePath, {
      encoding: 'utf-8',
    })
    .split('\n');

  return fileContent;
}

function writeFile(
  numberOfWords: number,
  wordsList: string[],
  randomIndexes: number[]
): void {
  const filePath = path.resolve('dataset', `words_${numberOfWords}.txt`);

  const data: string[] = [];

  for (const index of randomIndexes) {
    data.push(wordsList[index]);
  }

  fs.writeFileSync(filePath, String(data.join('\n')));
}

function getRandomIndexes(min: number, max: number, len: number) {
  return Array.from(
    { length: len },
    () => Math.floor(Math.random() * (max - min)) + min
  );
}

function main() {
  let numberOfWords = parseInt(process.argv[2], 10);
  const wordsList: string[] = [];

  const fileContent = readFile();

  for (const line of fileContent) {
    wordsList.push(line.trim());
  }

  if (numberOfWords === 0) {
    numberOfWords = wordsList.length;
  }

  const randomIndexes = getRandomIndexes(0, wordsList.length, numberOfWords);

  writeFile(numberOfWords, wordsList, randomIndexes);
}

if (process.argv.length === 2) {
  console.error(
    'to randomize the words, you should run: node randomizeWords.js <number of words>'
  );
} else {
  main();
}
