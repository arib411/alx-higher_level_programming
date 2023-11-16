#!/usr/bin/node
const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 5) {
  console.error('Usage: node concatFiles.js <file1Path> <file2Path> <destinationPath>');
  process.exit(1);
}

try {
  // Read the content of the first file
  const fArg = fs.readFileSync(process.argv[2], 'utf8');

  // Read the content of the second file
  const sArg = fs.readFileSync(process.argv[3], 'utf8');

  // Concatenate the content of the two files
  const concatenatedContent = fArg + sArg;

  // Write the concatenated content to the destination file
  fs.writeFileSync(process.argv[4], concatenatedContent, 'utf8');

  console.log('Files concatenated successfully!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
