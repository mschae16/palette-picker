const randomizeColour = () => {
  return "#000000".replace(/0/g, () => (~~(Math.random()*16)).toString(16))
}

const generateColourPalette = () => {
  $('.color').each( (i, element) => {
    const randomColor = randomizeColour()
    $(element).css('background-color', randomColor)
    $(element).find('h3').text(randomColor.toUpperCase())
  })
}

const generateNewColourPalette = (e) => {
  e.keyCode === 32 ? generateColourPalette() : false
}

$(window).on('keyup', generateNewColourPalette)
$(window).on('load', generateColourPalette)
