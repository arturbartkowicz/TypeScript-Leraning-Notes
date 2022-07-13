export let COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'] as const

type COLOR = typeof COLORS[number]

export const colorCode = (color: COLOR) => {
  console.log(color)
}

// colorCode('black').toEqual(0)
// colorCode('white').toEqual(9)
// colorCode(COLORS).toEqual(['black', 'brown'...])

colorCode('brown')