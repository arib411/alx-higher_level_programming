#!/usr/bin/nodeconst
fs = require('fs');

function concatFiles(file1Path, file2Path, destinationPath) {
  try {
    // Read the content of the first file
    const file1Content = fs.readFileSync(file1Path, 'utf8');

    // Read the content of the second file
    const file2Content = fs.readFileSync(file2Path, 'utf8');

    // Concatenate the content of the two files
    const concatenatedContent = file1Content + file2Content;

    // Write the concatenated content to the destination file
    fs.writeFileSync(destinationPath, concatenatedContent, 'utf8');

    console.log('Files concatenated successfully!');
  } catch (error) {
    console.error('Error concatenating files:', error.message);
  }
}

// Command-line arguments
const [,, file1Path, file2Path, destinationPath] = process.argv;

// Check if all required arguments are provided
if (file1Path && file2Path && destinationPath) {
  concatFiles(file1Path, file2Path, destinationPath);
} else {
  console.error('Usage: node concatFiles.js <file1Path> <file2Path> <destinationPath>');
}
