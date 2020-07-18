const accessToken = "c0cf616f25e64ed68fdbb61e9be4888fdc99937632711827656d0b021da4f936";
const spaceId = "p07dhaslyey2";

// const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`;
const endpoint = 'https://graphql.contentful.com/content/v1/spaces/p07dhaslyey2/explore?access_token=c0cf616f25e64ed68fdbb61e9be4888fdc99937632711827656d0b021da4f936';


export function fetchShortBio () {
    const query = `query blogModelCollection {
        items {
          name
          description
          roles
          profile {
            url
          }
          socialLinks2
          shortBio {
            json
            links {
              entries {
                inline {
                  sys {
                    id
                  }
                }
              }
            }
          }      
        }
      }
    `;

    return fetch(endpoint, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            query
        })
    })
        .then((res) => res.json())
        .then((data) => {
            return data
        })
}