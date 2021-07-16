import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons'

const GlobalStyle = createGlobalStyle`
  /* --------- RESET CSS --------- */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {  
    font-family:sans-serif;
    /* background-color: #D9E6F6; */
    background-color: #FFA4C8;
    /* background-image: url('https://アニメ壁紙.jp/image_wallpaper/1543161027_thumb.jpg'); */
    /* background-image: url('https://i1.wp.com/wallur.com/wp-content/uploads/2016/12/cardcaptor-background-11.png?resize=1366%2C768'); */
    background-image: url('https://i.pinimg.com/564x/f0/5f/b5/f05fb5cb167df01f91dd9ca9ef19980b.jpg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    
  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img{
    max-width:100%;
    height: auto;
    display:block;
  }

  ${AlurakutStyles}
  /* carrega do commons */
`

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
