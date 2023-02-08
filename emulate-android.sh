#!/bin/sh

export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;
nvm use 16

adb kill-server
adb start-server

npx cap sync
ionic cap run android --external --livereload --port=8010 --host=192.168.1.135 --target=Pixel_4_API_Tiramisu
