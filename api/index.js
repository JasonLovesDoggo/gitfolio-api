const fetchInfo = require('../src/fetch')
const renderInfo = require('../src/render')
const { renderError, clampValue, parseBoolean, CONSTANTS } = require('../src/utils')
module.exports = async (req, res) => {
  const { username, theme, includeFork, cache_seconds, repoNum, img } = req.query
  if (typeof theme === 'undefined') {
    themeType = 'dark'
  } else {
    themeType = theme
  }
  if (typeof img === 'undefined') {
    backgroundIMG =
      'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx'
  } else {
    backgroundIMG = img
  }

  let info
  try {
    info = await fetchInfo(username, repoNum)
  } catch (err) {
    res.send(renderError(err.message))
  }
  const cacheSeconds = clampValue(
    parseInt(cache_seconds || CONSTANTS.THIRTY_MINUTES, 10),
    CONSTANTS.THIRTY_MINUTES,
    CONSTANTS.ONE_DAY,
  )
  renderInfo(info, { theme: themeType, background: backgroundIMG, includeFork: parseBoolean(includeFork) }).then(
    (value) => {
      return res.send(value)
    },
  )
}
