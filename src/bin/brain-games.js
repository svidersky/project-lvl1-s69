#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

import { getUserName, showUserName, showGameName } from '..'

showGameName()
const userName = getUserName()
showUserName(userName)
