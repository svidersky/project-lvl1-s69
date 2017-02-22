import readlineSync from 'readline-sync'

export const showGameName = () => {
  console.log('Welcome to the Brain Games!\n')
}

export const getUserName = () => {
  return readlineSync.question('May I have your name? ')
}

export const showUserName = userName => {
  console.log(`Hello, ${userName}!`)
}
