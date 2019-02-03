<template>
  <div>
    <MdTable 
      v-model="users" 
      :table-header-color="tableHeaderColor"
    >
      <MdTableRow 
        slot="md-table-row" 
        slot-scope="{ item }"
      >
        <MdTableCell md-label="ID">
          {{ item.id }}
        </MdTableCell>
        <MdTableCell md-label="Name">
          {{ item.name }}
        </MdTableCell>
        <MdTableCell md-label="Salary">
          {{ item.salary }}
        </MdTableCell>
        <MdTableCell md-label="Country">
          {{ item.country }}
        </MdTableCell>
        <MdTableCell md-label="City">
          {{ item.city }}
        </MdTableCell>
      </MdTableRow>
    </MdTable>
  </div>
</template>

<script>
export default {
  name: "OrderedTable",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park"
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester"
        }
      ]
    };
  }
};
</script>
