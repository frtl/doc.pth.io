<script>
  import Content from './Content.svelte'
  import Spinner from './components/Spinner.svelte'
  import { InteractiveBrowserCredential as ibc } from '@azure/identity'
  import { login } from './stores/config/config'
</script>

{#await new ibc(login).getToken('')}
  <Spinner message={'Logging in...'} />
{:then _}
  <Content />
{/await}
