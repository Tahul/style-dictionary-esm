import consola from 'consola'

let _logger
export function logger() {
  if (!_logger)
    _logger = consola.create().withDefaults().withScope('style-dictionary')

  return _logger
}
export default logger
