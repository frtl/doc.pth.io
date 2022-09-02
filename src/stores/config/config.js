export const login = {
  tenantId: "343581ac-7887-44b2-91c3-96c7fc5b4a6d",
  clientId: "c3efc66a-5fde-4951-be68-a02860150c54",
  loginStyle: "redirect"
};
export const cosmos = {
  endpoint: "https://frtl.documents.azure.com",
  databaseId: "dl",
  containerId: "v2",
  tenantId: login.tenantId,
  clientId: login.clientId,
};
export const storage = {
  endpoint: "https://frtlcool.blob.core.windows.net",
  containerId: "doclink",
  tenantId: login.tenantId,
  clientId: login.clientId,
};