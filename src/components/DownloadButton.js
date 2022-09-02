import { BlobServiceClient } from '@azure/storage-blob'
import { login, storage } from "../stores/config/config";
import { InteractiveBrowserCredential as ibc } from '@azure/identity'

export const downloadBlob = async (blobName) => {

  const { endpoint, containerId } = storage
  const aadCredentials = new ibc(login)

  const client = new BlobServiceClient(endpoint, aadCredentials)
  const container = client.getContainerClient(containerId)
  const blob = container.getBlobClient(blobName)
  await blob.download()
    .then(x => x.blobBody)
    .then(x => URL.createObjectURL(x))
    .then(x => window.open(x, "_self"))
    .catch((err) => console.error(err))

}