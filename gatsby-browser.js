import React from "react"
import { ThemeProvider } from './src/contexts/theme'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

// const client = new ApolloClient({
//     uri: 'https://graphql.contentful.com/content/v1/spaces/p07dhaslyey2/environments/master?access_token=c0cf616f25e64ed68fdbb61e9be4888fdc99937632711827656d0b021da4f936',
//     cache: new InMemoryCache()
// });

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                    )
                )
            }
            if (networkError) console.log(`[Network error]: ${networkError}`)
        }),
        new HttpLink({
            uri: `https://graphql.contentful.com/content/v1/spaces/p07dhaslyey2`,
            credentials: 'same-origin',
            headers: {
                Authorization: `Bearer c0cf616f25e64ed68fdbb61e9be4888fdc99937632711827656d0b021da4f936`
            }
        })
    ]),
    cache: new InMemoryCache()
})
export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>
        <ThemeProvider>{element}</ThemeProvider>
    </ApolloProvider>
)

// export const wrapRootElement = ({ element }) => (
//     <ThemeProvider>{element}</ThemeProvider>
// )