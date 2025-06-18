import { sxzz } from '@sxzz/eslint-config'
import storybook from 'eslint-plugin-storybook'

export default sxzz()
  .removeRules('import/no-default-export')
  .append({ ...storybook.configs.all })
