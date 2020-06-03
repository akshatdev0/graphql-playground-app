import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Playground, store } from 'graphql-playground-react'

ReactDOM.render(
	<Provider store={store}>
		<Playground endpoint="http://127.0.0.1:9001/graphql" />
	</Provider>,
	document.body
)