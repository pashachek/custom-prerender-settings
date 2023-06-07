module.exports = {
  requestReceived: (req, res, next) => {
    if (req.headers['user-agent'] === 'secret_key_s88') {
      req.refresh = true;
    }
    next()
  }
}
