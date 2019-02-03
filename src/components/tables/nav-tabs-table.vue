<template>
  <div>
    <MdTable 
      v-model="users" 
      @md-selected="onSelect"
    >
      <MdTableRow 
        slot="md-table-row" 
        slot-scope="{ item }" 
        md-selectable="multiple" 
        md-auto-select
      >
        <MdTableCell>{{ item.name }}</MdTableCell>
        <MdTableCell>
          <MdButton class="md-just-icon md-simple md-primary">
            <MdIcon>edit</MdIcon>
            <MdTooltip md-direction="top">
              Edit
            </MdTooltip>
          </MdButton>
          <MdButton class="md-just-icon md-simple md-danger">
            <MdIcon>close</MdIcon>
            <MdTooltip md-direction="top">
              Close
            </MdTooltip>
          </MdButton>
        </MdTableCell>
      </MdTableRow>
    </MdTable>
  </div>
</template>

<script>
export default {
  name: "NavTabsTable",
  data() {
    return {
      selected: [],
      users: [
        {
          name: 'Sign contract for "What are conference organizers afraid of?"'
        },
        {
          name: "Lines From Great Russian Literature? Or E-mails From My Boss?"
        },
        {
          name:
            "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
        }
      ]
    };
  },
  methods: {
    onSelect: function(items) {
      this.selected = items;
    }
  }
};
</script>
