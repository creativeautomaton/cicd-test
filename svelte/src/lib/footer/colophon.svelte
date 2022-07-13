<script lang="ts">
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
</script>

<div class="colophon">
  <LayoutGrid>
    <Cell span={5}
      ><a href="https://liu.edu" target="_blank" class="logo">
        <img
          src="https://secureservercdn.net/198.71.233.194/509.251.myftpupload.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-07-at-3.54.02-PM.png"
        />
      </a></Cell
    >
    <Cell span={2} />
    <Cell span={5}>
      <small>
        Copyright ©2022 Long Island University · All rights reserved
      </small>
    </Cell>
    <!-- <Cell span={2} /> -->
  </LayoutGrid>
</div>

<style lang="scss">
  .colophon {
    background-color: var(--mdc-theme-primary, #fff);
  }
  .logo {
    width: auto;
    display: block;
    padding: 5px 1em;

    img {
      width: 250px;
      display: block;
    }
  }
</style>
