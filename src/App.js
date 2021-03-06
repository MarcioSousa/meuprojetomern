// cSpell:Ignore outubro, corSecundaria, corPrimaria, primeiro, temaDark, tipoPaleta
import React from 'react'
import './App.css'
import {createMuiTheme, responsiveFontSizes, MuiThemeProvider} from '@material-ui/core'

/* Cores */
import {orange, lightBlue, blue, deepOrange} from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'

import Rotas from './rotas'

export default function App(){
    const temaDark = true
    const tipoPaleta = temaDark ? 'dark' : 'light'
    const corPrimaria = temaDark ? orange[500] : blue[500]
    const corSecundaria = temaDark ? deepOrange[900] : lightBlue[400]

    let theme =createMuiTheme(
        {
            palette:{
                type: tipoPaleta,
                primary: {main:corPrimaria},
                secondary: {main:corSecundaria}
            }
        }
    )

    theme = responsiveFontSizes(theme)

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Rotas />
        </MuiThemeProvider>
    )

}

//1:47 min do video do dia primeiro de outubro