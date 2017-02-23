#!/usr/bin/env node

import { showGameName, showGreetings, getUserName, shoUserName, startGame } from '..';

showGameName();
showGreetings();
const name = getUserName();
shoUserName(name);
startGame(name);
