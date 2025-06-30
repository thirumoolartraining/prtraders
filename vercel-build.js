const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Clean previous build
console.log('Cleaning previous build...');
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true, force: true });
}

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Build the project
console.log('Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Verify the build output
console.log('Verifying build output...');
const distFiles = fs.readdirSync('dist');
console.log('Build output:', distFiles);

// Create a simple vercel.json if it doesn't exist
if (!fs.existsSync('vercel.json')) {
  console.log('Creating vercel.json...');
  fs.writeFileSync(
    'vercel.json',
    JSON.stringify({
      version: 2,
      builds: [
        {
          src: 'package.json',
          use: '@vercel/static-build',
          config: {
            distDir: 'dist'
          }
        }
      ],
      routes: [
        { handle: 'filesystem' },
        { src: '/.*', dest: '/index.html' }
      ]
    }, null, 2)
  );
}

console.log('Build completed successfully!');
