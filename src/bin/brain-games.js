#!/usr/bin/env node

import { getUserName, showUserName, showGameName } from '..'

showGameName()
const userName = getUserName()
showUserName(userName)
