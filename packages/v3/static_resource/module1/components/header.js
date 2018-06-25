const DEFAULT_CONFIG = {
  'prefixClassName': 'header'
}

class Header {
  constructor(config) {
    this.config = Object.assign({}, DEFAULT_CONFIG, config)
  }
}

export default Header
