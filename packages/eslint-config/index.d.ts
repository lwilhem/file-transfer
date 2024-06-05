import type { FlatConfigComposer } from "eslint-flat-config-utils"
import type { ConfigNames, TypedFlatConfigItem } from "@antfu/eslint-config"

declare module "@filetransfer/eslint-config" {
  function eslint_filetransfer(): FlatConfigComposer<TypedFlatConfigItem, ConfigNames>

  export default eslint_filetransfer
}
