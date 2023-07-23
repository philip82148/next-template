import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import type { AppType } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

const App: AppType = ({ Component, pageProps }) => {
  const { basePath } = useRouter()

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <title>Title</title>
        <meta name="description" content="{description}" />
        <link rel="icon" href={`${basePath}/favicon.ico`} type="image/png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default App

const theme = createTheme({
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'Helvetica',
      'Hiragino Sans',
      'Hiragino Kaku Gothic ProN',
      'Arial',
      'Yu Gothic',
      'Meiryo',
      'sans-serif',
    ].join(','),
  },
})
