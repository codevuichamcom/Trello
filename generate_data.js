const faker = require('faker')

const fs = require('fs')

const randomBoardColumn = (n) => {
  let board = []
  for (let i = 0; i < n; i++) {
    const boardColumn = {
      id: faker.datatype.uuid(),
      title: faker.random.words(),
    }
    board.push(boardColumn)
  }
  return board
}
const randomCard = (n, board) => {
  let cards = []
  for (let i = 0; i < n; i++) {
    const boardColumn = board[Math.floor(Math.random() * board.length)]
    let card = {
      id: faker.datatype.uuid(),
      title: faker.random.words(),
      boardColumnId: boardColumn.id,
    }
    cards.push(card)
  }
  return cards
}
//IFFE
;(() => {
  //random data
  const boardColumns = randomBoardColumn(5)
  const cards = randomCard(20, boardColumns)

  //prepare db object
  const db = {
    boardColumns: boardColumns,
    cards: cards,
  }

  //write to db.json
  fs.writeFile('db.json', JSON.stringify(db), (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})()
