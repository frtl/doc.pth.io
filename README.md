# doc.pth.io

This project is based on [sturdy-telegram](https://github.com/royashbrook/sturdy-telegram).

Please see that project for an overview.

# additional setup on app

app registration must have following permissions:

<img width="462" alt="image" src="https://user-images.githubusercontent.com/7390156/188228058-fcc81d34-694a-4623-818c-59272a75120c.png">

# additional setup for users

currently this is setup for each user to have access provisioned in azure storage and cosmosdb

## cosmosdb

cosmosdb requires some setup. see [here](https://docs.microsoft.com/en-us/azure/cosmos-db/how-to-setup-rbac) for details. we are using the built in read only role.

## storage

on storage account go into the container with the blobs and grant 'Storage Blob Data Reader' role to the user. note this permission is in IAM on the container, not on the storage account.
