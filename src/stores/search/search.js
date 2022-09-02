import { writable } from 'svelte/store';
import { CosmosClient } from '@azure/cosmos'
import { login, cosmos } from "../config/config";
import { InteractiveBrowserCredential as ibc } from '@azure/identity'

export const searchResults = writable(null);

export const getSearchResults = async (qry) => {
  
  const { endpoint, databaseId, containerId } = cosmos
  const aadCredentials = new ibc(login)
  const client = new CosmosClient({ endpoint, aadCredentials })
  const database = client.database(databaseId)
  const container = database.container(containerId)

  await container.items
    .query(qry)
    .fetchAll()
    .then(({ resources: items }) => searchResults.set(items))
    .catch((err) => console.error(err))

}
