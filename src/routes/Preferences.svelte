<script>
  import { preferences, resetPreferences } from '../stores/preferences/preferences'
  import matchTypes from '../stores/preferences/matchTypes'

</script>

{#if $preferences}

<section>
  <p>Please see the sections below for preferences you can modify to improve your experience. If, at any time, you would like you can reset the preferences to default by using the button below.  Settings will be saved in your browser so you will not have to reset them every time you search.</p>
  <button on:click={resetPreferences}>Reset Preferences</button>
</section>

<details>
  <summary>Case Sensitivity</summary>
  <p>All searches are case sensitive. Typically, most text data in this system is upper case, so all text entered into the search boxes will be converted to upper case before it is sent to the server for searching. If you'd like to disable that behavior, uncheck the box below.</p>
  <input type="checkbox" bind:checked={$preferences.upperCase} />Convert all search terms to upper case
</details>

<details>
  <summary>Document Types</summary>
  <p>Choose document types you'd like to include in your queries.</p>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Document Type</th>
        <th>Include</th>
      </tr>
    </thead>
    <tbody>
      {#each $preferences.docs as d}
        <tr>
          <td>{d.id}</td>
          <td>
            <input bind:value={d.name} style="width:20rem;" />
          </td>
          <td style="text-align:center;">
            <input type="checkbox" bind:checked={d.show} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</details>

<details>
  <summary>Search Options</summary>
  <p>These options change which fields you can search by, what kind of match is used for those fields, and which document types you return in your searches. Please note that all searches are case-sensitive and regardless of whether or not a field is set to 'Show' it will only appear in the search results if it has data in it. Blank values will be omitted from the output.</p>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Field Name</th>
        <th>Search</th>
        <th>Match</th>
        <th>Show</th>
      </tr>
    </thead>
    <tbody>
      {#each $preferences.props as r}
        <tr>
          <td>{r.id}</td>
          <td>
            <input bind:value={r.name} style="width:20rem;" />
          </td>
          <td style="text-align:center;">
            <input type="checkbox" bind:checked={r.search} />
          </td>
          <td>
            <select style="width:100%;" bind:value={r.match}>
              {#each matchTypes as m}
              <option value={m.value} selected>{m.text}</option>
              {/each}
            </select>
          </td>
          <td style="text-align:center;"><input type="checkbox" bind:checked={r.show} /></td>
        </tr>
      {/each}
    </tbody>
  </table>
</details>

{/if}