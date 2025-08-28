import React from "react"
import * as ReactDOMClient from "react-dom/client"
import Appp from "./App"
import { LangProvider } from './i18n/LangContext'


const apppp = ReactDOMClient.createRoot(document.getElementById('root'))

apppp.render(
	<LangProvider>
		<Appp />
	</LangProvider>
)