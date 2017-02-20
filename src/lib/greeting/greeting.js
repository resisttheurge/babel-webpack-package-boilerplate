import { hello } from './hello'
import { world } from './world'

export const greeting =
  () => `${hello()}, ${world()}!`
