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
        <MdTableCell md-label="Name">
          {{ item.name }}
        </MdTableCell>
        <MdTableCell md-label="Country">
          {{ item.country }}
        </MdTableCell>
        <MdTableCell md-label="City">
          {{ item.city }}
        </MdTableCell>
        <MdTableCell md-label="Salary">
          {{ item.salary }}
        </MdTableCell>
      </MdTableRow>
    </MdTable>
  </div>
</template>

<script>
export default {
  name: "SimpleTable",
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
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        {
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas"
        },
        {
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park"
        },
        {
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester"
        },
        {
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kārnten"
        },
        {
          name: "Mason Porter",
          salary: "$78,615",
          country: "Chile",
          city: "Gloucester"
        }
      ]
    };
  }
};
</script>
