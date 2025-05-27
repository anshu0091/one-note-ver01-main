const { execSync } = require('child_process');
const path = require('path');

// Install frontend dependencies
console.log('Installing frontend dependencies...');
execSync('cd frontend && npm install --force', { stdio: 'inherit' });

// Build frontend
console.log('Building frontend...');
execSync('cd frontend && npm run build', { stdio: 'inherit' });

// Install backend dependencies
console.log('Installing backend dependencies...');
execSync('cd backend && npm install --force', { stdio: 'inherit' });

console.log('Build completed successfully!'); 