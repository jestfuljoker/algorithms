import * as fs from 'fs';
import * as path from 'path';

function readFile(): string[] {
  const filePath = path.resolve('dataset', 'words_320139.txt');

  let wordList = fs
    .readFileSync(filePath, { encoding: 'utf-8' })
    .split('\n')
    .filter(Boolean);

  return wordList;
}

// Complexity O(n)
function search(word: string, wordList: string[]): number {
  for (let index = 0; index < wordList.length; index++) {
    if (wordList[index] === word) {
      return index;
    }
  }

  return -1;
}

// Complexity O(log(n))
function binarySearch(word: string, wordList: string[]): number {
  let start = 0;
  let end = wordList.length - 1;

  while (start < end) {
    let middle = (start + end) >> 1; // (start + end) / 2

    if (wordList[middle] === word) {
      return middle;
    }

    if (word > wordList[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

function main() {
  const wordToSearch = process.argv[2];
  const wordList = readFile();
  const wordList2 = readFile();

  console.time('time to sort wordList');
  wordList2.sort();
  console.timeEnd('time to sort wordList');

  console.time('time to find with sequencial search and randomized list');
  let index = search(wordToSearch, wordList);
  console.timeEnd('time to find with sequencial search and randomized list');

  console.time('time to find with sequencial search and sorted list');
  let index2 = search(wordToSearch, wordList2);
  console.timeEnd('time to find with sequencial search and sorted list');

  console.time('time to find with binary search');
  let binIndex = binarySearch(wordToSearch, wordList2);
  console.timeEnd('time to find with binary search');

  console.log(
    'Randomized List and Sequencial search: ',
    index,
    wordList[index]
  );
  console.log('Sorted List and Sequencial search: ', index2, wordList2[index2]);
  console.log('Binary Search: ', binIndex, wordList2[binIndex]);
}

if (process.argv.length !== 3) {
  console.error(process.argv);
} else {
  main();
}
