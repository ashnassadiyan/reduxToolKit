<template>
  <v-layout row class="float-right">
    <nav aria-label="..." class="float-right">
      <ul class="pagination" style="padding-left: 10px">
        <li>
          <a
            class="button is-small pagination-previous"
            style="padding-left: 14px; padding-right: 14px"
            v-on:click="pagechange(pageoptions.pageNumber - 1)"
          >
            <span><i>«</i></span>
          </a>
        </li>
        <li>
          <a
            class=""
            v-if="showpage1 || pageoptions.pageNumber < 1"
            v-on:click="pagechange(1)"
          >
            1
          </a>
        </li>
        <li>
          <a v-show="showpage1">
            <a>...</a>
          </a>
        </li>
        <li v-for="(i, index) in pageoptions.pages" :key="index">
          <span>
            <a
              v-on:click="pagechange(i)"
              v-bind:class="{
                'page-item': true,
                active: i == pageoptions.pageNumber,
              }"
              >{{ i }}</a
            >
          </span>
        </li>
        <li>
          <a v-show="showlast">
            <a>...</a>
          </a>
        </li>
        <li>
          <a class="" v-on:click="pagechange(pagecount)" v-show="showlast">
            {{ pagecount }}
          </a>
        </li>
        <li>
          <a
            v-on:click="pae(pageoptions.pageNumber + 1)"
            style="padding-left: 14px; padding-right: 14px"
          >
            <span><i>»</i></span>
          </a>
        </li>
      </ul>
    </nav>
  </v-layout>
</template>
<script>
export default {
  props: ["pageoptions", "pagechange", "pagecount"],
  data() {
    return {};
  },
  methods: {
    pae(Q) {
      if (Q <= this.pagecount) {
        this.pagechange(this.pageoptions.pageNumber + 1);
      }
    },
  },
  computed: {
    forward() {
      if (this.pageoptions.pageNumber == this.pageoptions.pages.length) {
        return false;
      } else {
        return true;
      }
    },
    backward() {
      if (this.pageoptions.pageNumber < 2) {
        return false;
      } else {
        return true;
      }
    },
    showpage1() {
      if (this.pageoptions.pageNumber > 3) {
        return true;
      } else {
        return false;
      }
    },
    asdasd() {},
    showlast() {
      let a = this.pagecount - this.pageoptions.pageNumber;
      if (a < 3) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style scoped>
.pagination a {
  color: black;
  float: right;
  padding: 5px 12px;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
}

.pagination a.active {
  z-index: 1;
  color: #fff !important;
  background-color: #888 !important;
  border-color: #888 !important;
  border-radius: 25px;
  font-size: 12px;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 25px;
}
i {
  font-style: inherit;
  margin-top: 5px;
}
</style>

