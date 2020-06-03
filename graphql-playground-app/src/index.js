import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Playground, store } from 'graphql-playground-react'

ReactDOM.render(
	<Provider store={store}>
		<Playground endpoint="https://2vuibojg5d.execute-api.us-east-1.amazonaws.com/api/graphql" />
	</Provider>,
	document.body
)