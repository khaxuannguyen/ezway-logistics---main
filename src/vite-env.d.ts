/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KANGO_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}