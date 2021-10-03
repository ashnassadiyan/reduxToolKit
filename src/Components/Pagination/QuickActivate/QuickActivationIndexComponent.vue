<template>
  <v-layout
    row
    class="table-responsive"
    x12
    sm12
    md12
    lg12
    xl12
    style="margin-left: -13px;padding-right"
  >
    <table class="table" style="line-height: 0.9">
      <thead>
        <tr>
          <td><b>No</b></td>
          <td v-on:click="sortby('barcode')" class="tablehd">
            <b>Barcode</b>
            <i
              class="zmdi zmdi-sort-desc ml-1"
              v-show="sortedColumn == 'barcode'"
            ></i>
            <i
              class="zmdi zmdi-sort-asc ml-1"
              v-show="acsortedColumn == 'barcode'"
            ></i>
          </td>
          <td v-on:click="sortby('name')" class="tablehd">
            <b>Description</b>
            <i
              class="zmdi zmdi-sort-desc ml-1"
              v-show="sortedColumn == 'name'"
            ></i>
            <i
              class="zmdi zmdi-sort-asc ml-1"
              v-show="acsortedColumn == 'name'"
            ></i>
          </td>
          <td v-on:click="sortby('price')" class="tablehd">
            <b>Price</b>
            <i
              class="zmdi zmdi-sort-desc ml-1"
              v-show="sortedColumn == 'price'"
            ></i>
            <i
              class="zmdi zmdi-sort-asc ml-1"
              v-show="acsortedColumn == 'price'"
            ></i>
          </td>
          <td v-on:click="sortby('online')" class="tablehd">
            <b>Status</b>
            <i
              class="zmdi zmdi-sort-desc ml-1"
              v-show="sortedColumn == 'online'"
            ></i>
            <i
              class="zmdi zmdi-sort-asc ml-1"
              v-show="acsortedColumn == 'online'"
            ></i>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ i.barcode }}</td>
          <td>{{ i.name }}</td>
          <td>{{ i.price }}</td>
          <td>
            {{
              i.online == 0
                ? "Price Changed"
                : i.online == 1
                ? "Online"
                : "Not Found"
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </v-layout>
</template>
<script>
export default {
  props: ["items", "sortColums", "updateProduct"],
  data() {
    return {
      sorted: true,
      sortedColumn: "",
      acsortedColumn: "barcode",
    };
  },
  methods: {
    sortby(e) {
      if (this.sorted == true) {
        if (this.sortedColumn === e) {
          this.sortedColumn = "";
          this.acsortedColumn = e;
          this.sortColums(e);
        } else {
          this.sorted = true;
          this.sortedColumn = e;
          this.acsortedColumn = "";
          this.sortColums(e);
        }
      } else {
        this.sorted = true;
        this.sortedColumn = e;
        this.sortColums(e);
      }
    },
  },
};
</script>
<style scoped>
table {
  width: 100%;
  overflow-x: auto;
}
.tablehd {
  cursor: pointer;
}
.links {
  cursor: pointer;
  color: #0c7ce6;
}
</style>