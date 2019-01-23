const { execSync } = require('child_process');
const path = require('path');

execSync(
  `stmux -w always -t "AOUF app" -n -M -e ERROR -m beep
[
  [
    "yarn workspace aouf-api start"
    ..
    "yarn workspace aouf-web-app start"
  ]
  :
  [
    "yarn workspace aouf-web-app build:watch"
  ]
]`.replace(/\n/g, ' '),
  { stdio: 'inherit', cwd: path.join(__dirname, '../') },
);
