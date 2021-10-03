<template>
  <v-layout row>
    <v-flex x12 sm12 md12 lg12 xl12>
      <div>
        <v-container :fluid="true">
          <v-card min-width="300" x12 sm12 md12 lg12 xl12 id="buttonsheader">
            <div x12 sm12 md12 lg12 xl12 class="heaborad">
              <v-layout row style="margin-left: 10px">
                <v-flex x6 sm6 md2 lg3 xl3>
                  <label>Barcode</label>
                  <input
                    type="text"
                    style="-moz-appearance: textfield"
                    class="form-control"
                    v-model="value1"
                    v-on:keyup.enter="priceValidation()"
                    id="barcode"
                    :disabled="isLodaing == true"
                    min="0"
                  />
                  <BarcodeScanner @scanned="handleScannedValue" />
                </v-flex>
                <v-flex x6 sm6 md3 lg4 xl4 style="padding-left: 5px">
                  <label>Description</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Description"
                    v-model="receivedData.name"
                    :disabled="isLodaing == true"
                  />
                </v-flex>
                <v-flex x6 sm6 md1 lg1 xl1 style="padding-left: 3px">
                  <label>Price</label>
                  <input
                    type="text"
                    class="form-control"
                    id="price"
                    v-model="receivedData.price"
                    readonly
                    style="background-color: rgba(221, 221, 221, 0.836)"
                  />
                </v-flex>
                <v-flex x6 sm6 md2 lg1 xl1 style="padding-left: 3px">
                  <label>New Price</label>
                  <input
                    type="text"
                    style="-moz-appearance: textfield"
                    v-model="value2"
                    class="form-control"
                    id="newprice"
                    @keyup="numberOnly($event)"
                    min="0"
                    max="999.99"
                  />
                </v-flex>
                <v-flex x6 sm6 md4 lg3 xl3 style="padding-left: 4px">
                  <div style="padding-top: 30px; padding-top: 22px">
                    <v-btn
                      v-on:click="priceValidation()"
                      elevation="0"
                      depressed
                      style="
                        background-color: #ffc107;
                        color: white;
                        width: 70px;
                      "
                      >Search
                    </v-btn>
                    <v-btn
                      elevation="0"
                      depressed
                      v-on:click="savetoList()"
                      style="
                        background-color: #28a745;
                        color: white;
                        width: 60px;
                      "
                      id="save"
                      >Save
                    </v-btn>
                    <v-btn
                      elevation="0"
                      depressed
                      v-on:click="changeDefault()"
                      style="background-color: #888; color: white; width: 60px"
                      v-show="value1"
                      id="clear"
                      >Clear
                    </v-btn>
                  </div>
                </v-flex>
              </v-layout>
              <v-layout row class="mt-3" style="margin-left: 10px">
                <v-flex x6 sm6 md2 lg2 xl2>
                  <div class="checkbox index-checkbox">
                    <input
                      type="checkbox"
                      id="online"
                      class="form-check-input"
                      v-on:click="setCheck($event.target.checked)"
                      :checked="online == 1 ? true : false"
                    />
                    <label class="form-check-label" for="online"
                      >Check Online</label
                    >
                  </div>
                </v-flex>

                <v-flex class="col-sm-2 col-md-2 col-4"></v-flex>
              </v-layout>
              <v-layout row style="margin-left: 10px" v-show="isLodaing">
                <div class="spinner" v-show="isLodaing">
                  <div class="bounce1"></div>
                  <div class="bounce2"></div>
                  <div class="bounce3"></div>
                </div>
              </v-layout>
            </div>
            <v-layout row class="row-padding" v-if="sortedData.length > 0">
              <v-layout column style="margin-right: -28px">
                <div min-width="300" elevation="0" id="buttonsheader">
                  <searchedTables
                    :items="sortedData"
                    :sortColums="sortColums"
                    :sortedc="sortedc"
                    :updateProduct="updateProduct"
                  ></searchedTables>
                </div>
              </v-layout>
            </v-layout>
            <v-layout
              row
              class="row-padding footHead"
              v-if="sortedData.length > 0"
            >
              <v-flex width="100" xs6 sm12 md2 lg1 xl1>
                <select
                  class="form-short minimal"
                  v-model="pagelimit"
                  style="width: 85% !important; margin-left: 17px"
                  @change="changepageNumber(1)"
                >
                  <option value="15" class="dropdown-item">15</option>
                  <option value="25" class="dropdown-item">25</option>
                  <option value="50" class="dropdown-item">50</option>
                  <option value="100" class="dropdown-item">100</option>
                </select>
              </v-flex>
              <v-flex xs6 sm12 md10 lg2 xl2>
                <v-flex style="padding-top: 6px; margin-left: 11px">
                  {{ starta }} - {{ summa }} of {{ totaltows }} items
                </v-flex>
              </v-flex>
              <v-flex xs12 sm12 md12 lg9 x9 class="float-right;padding-top:6px">
                <pagination
                  :pageoptions="pageoptions"
                  :pagechange="changepageNumber"
                  :pagecount="pagecount"
                />
              </v-flex>
            </v-layout>
            <br />
          </v-card>
        </v-container>
        <div>
          <div class="modal" id="modal">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Edit {{ requrestData.barcode }}</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <v-container>
                    <v-layout row>
                      <v-flex xs12 md4 style="padding: 10px">
                        <label>Barcode</label>
                        <input
                          :id="'l' + 'barcode'"
                          type="text"
                          placeholder="Barcode"
                          class="form-control"
                          v-model="receivedData.barcode"
                        />
                      </v-flex>
                      <v-flex xs12 md4 style="padding: 10px">
                        <label>Description</label>
                        <input
                          :id="'l' + 'description'"
                          type="text"
                          placeholder="Description"
                          class="form-control"
                          v-model="receivedData.name"
                        />
                      </v-flex>
                      <v-flex xs12 md4 style="padding: 10px">
                        <label>Price</label>
                        <input
                          v-bind:id="'l' + 'price'"
                          type="text"
                          placeholder="Price"
                          class="form-control"
                          v-model="receivedData.price"
                        />
                      </v-flex>
                    </v-layout>
                  </v-container>
                </div>
                <div class="modal-footer">
                  <v-btn
                    data-dismiss="modal"
                    style="background-color: #888; color: #ffff"
                    >Cancel
                  </v-btn>
                  <v-btn
                    style="
                      color: #fff !important;
                      background-color: #0056b3 !important;
                    "
                    v-on:click="addNew()"
                    >Save
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import searchedTables from "./QuickActivationIndexComponent";
import pagination from "./QuickActivationPaginationComponent";
import BarcodeScanner from "../BarcodeScanner/Index.vue";

export default {
  props: {
    api: String,
  },
  components: {
    searchedTables,
    pagination,
    BarcodeScanner,
  },
  data() {
    return {
      messageData: [],
      copymessageData: [],
      isLodaing: false,
      pagelimit: 15,
      pageoptions: {
        pages: [],
        pageNumber: 1,
      },
      pagecount: "",
      totaltows: "",
      sortedData: [],
      notfound: false,
      pageRange: 1,
      fillFilters: false,
      checkValue: false,
      isSorted: true,
      sortedc: "",
      receivedData: {
        name: "",
        price: "",
        barcode: "",
        deptno: 101,
        subdeptno: 188,
      },
      value1: null,
      value2: null,
      isPriceChecked: false,
      isBarcodeChecked: false,
      bProductList: [],
      requrestData: {
        barcode: "",
        status: "",
        price: "",
        name: "",
      },
      online: 1,
      addForm: false,
    };
  },
  methods: {
    numberofrows(arr) {
      this.totaltows = arr.length;
    },
    pageslice(a) {
      return a.slice(
        (this.pageoptions.pageNumber - 1) * this.pagelimit,
        this.pageoptions.pageNumber * this.pagelimit
      );
    },
    pagecountfunc(arr) {
      this.pagecount = Math.ceil(arr.length / this.pagelimit);
    },
    puttopages() {
      var start = this.pageoptions.pageNumber - this.pageRange;
      if (start < 2) {
        start = 1;
      }

      var end = this.pageoptions.pageNumber + this.pageRange;
      if (end > this.pagecount) {
        end = this.pagecount;
      }

      let pages = [];
      for (var i = start; i <= end; i++) {
        pages.push(i);
      }
      this.pageoptions.pages = pages;
    },
    sortColums(column) {
      let arr = this.bProductList;
      this.sortedData = [];
      if (this.sortedc == column) {
        this.sortedc = "";
        this.isSorted = true;
        arr.sort((b, a) =>
          a[column] > b[column] ? 1 : b[column] > a[column] ? -1 : 0
        );
      } else {
        this.sortedc = column;
        this.isSorted = false;
        arr.sort((a, b) =>
          a[column] > b[column] ? 1 : b[column] > a[column] ? -1 : 0
        );
      }
      this.sortedData = arr;
      this.mainfunction();
    },
    changeDefault() {
      this.value2 = "";
      this.value1 = null;
      this.receivedData = "";
      this.requrestData.barcode = "";
      this.requrestData.status = "";
      document.getElementById("barcode").focus();
    },
    nextInput() {
      let num = /^\d*\.?\d*$/;

      if (num.test(this.value1)) {
        return true;
      } else {
        this.changeDefault();
        return true;
      }
    },
    priceValidation() {
      let num = /^\d*\.?\d*$/;
      if (num.test(this.value1)) {
        if (this.nextInput()) {
          this.requestData();
          document.getElementById("newprice").focus();
        } else {
          swal({
            title: "Please check  Price",
            icon: "error",
            dangerMode: "error",
          }).then((res) => {
            document.getElementById("newprice").focus();
          });
        }
      } else {
        swal({
          title: "Invalid Barcode",
          icon: "error",
          dangerMode: "error",
        }).then((res) => {
          document.getElementById("barcode").focus();
        });
      }
    },
    numberOnly($event) {
      let b = $event.target.value;
      if ($event.key == "Backspace" || $event.key == "Delete") {
        b = (b / 10).toFixed(2);
        this.value2 = b;
      }

      if (
        ($event.keyCode >= 48 && $event.keyCode <= 57) ||
        ($event.keyCode >= 96 && $event.keyCode <= 105)
      ) {
        if (this.value2.length > 1) {
          b = (b * 10).toFixed(2);

          if (b > 999.99) {
            this.value2 = 999.99;
          } else {
            if (b < 0.0) {
              this.value2 = 0.0;
            } else {
              this.value2 = b;
            }
          }
        } else {
          this.value2 = (b / 100).toFixed(2);
        }
        this.isPriceChecked = true;
        b = "";
      }
      if ($event.key == "Enter") {
        this.savetoList();
      }
    },
    async requestData() {
      axios.defaults.withCredentials = true;
      this.isLodaing = true;
      this.requrestData.barcode = this.value1;
      this.requrestData.status = this.online;
      await axios({
        method: "post",
        url: this.api + "/api/quick-active/index",
        data: {
          barcode: this.value1,
          status: this.online,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          this.receivedData = res.data.data;
          this.sortColums(this.sortedc);
          this.isLodaing = false;
        })
        .catch((error) => {
          this.isLodaing = false;
          let notFoundProduct = {
            barcode: this.value1,
            online: 2,
            price: 0.0,
            name: "",
          };

          if (this.addForm) {
            this.receivedData.barcode = this.value1;
            this.OpenModal();
          } else {
            this.bProductList.push(notFoundProduct);

            this.sortColums(this.sortedc);
            swal({
              icon: "error",
              title: "Failed",
              text: _.get(error, "response.data.message"),
              dangerMode: error,
              closeOnClickOutside: false,
              type: "error",
              showConfirmButton: false,
            }).then((res) => {
              this.changeDefault();
            });
          }
        });
    },
    savetoList() {
      let num = /^[0-9]*$/;
      let dec = /^[0-9]*(\.[0-9]+)?$/;
      this.receivedData.price = this.value2;
      if (
        dec.test(this.value2) &&
        num.test(this.value1) &&
        this.value2 > 0.0 &&
        this.receivedData.name.length > 1
      ) {
        if (this.receivedData.online > 0) {
          this.createProduct(this.receivedData);
        } else {
          this.updateProduct(this.receivedData);
        }

        if (Object.keys(this.receivedData).length > 0) {
          this.bProductList.push(this.receivedData);
          this.receivedData = [];
          this.changeDefault();
          this.mainfunction();
        } else {
          swal({
            title: "please search an items first",
            icon: "warning",
          });
        }
      } else {
        swal({
          icon: "error",
          title:
            "Field(s) cannot be empty or Price cannot be 0 (zero) Please Enter the Price",
        }).then((res) => {
          document.getElementById("newprice").focus();
        });
      }
    },
    mainfunction() {
      this.sortedData = [];
      this.sortedData = this.bProductList;
      this.pagecountfunc(this.sortedData);
      this.puttopages();
      this.numberofrows(this.sortedData);
      this.sortedData = this.pageslice(this.sortedData);
    },
    changepageNumber(e) {
      if (e > 0) {
        this.pageoptions.pageNumber = e;
        this.mainfunction();
      }
    },
    setCheck(val) {
      if (val) {
        this.online = 1;
      } else {
        this.online = 0;
      }
    },
    async updateProduct(data) {
      axios.defaults.withCredentials = true;
      this.isLodaing = true;
      await axios({
        method: "put",
        url: this.api + "/api/quick-active/update",
        data: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {})
        .catch((res) => {
          swal({
            icon: "error",
            title: "Failed",
            text: _.get(error, "response.data.message"),
            dangerMode: error,
            closeOnClickOutside: false,
            type: "error",
            showConfirmButton: false,
          }).then((res) => {
            this.changeDefault();
          });
        });
      this.isLodaing = false;
    },
    async createProduct(data) {
      axios.defaults.withCredentials = true;
      this.isLodaing = true;
      await axios({
        method: "post",
        url: this.api + "/api/quick-active/create",
        data: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {})
        .catch((res) => {
          swal({
            icon: "error",
            title: "Failed",
            text: _.get(error, "response.data.message"),
            dangerMode: error,
            closeOnClickOutside: false,
            type: "error",
            showConfirmButton: false,
          }).then((res) => {
            this.changeDefault();
          });
        });
      this.isLodaing = false;
    },
    handleScannedValue(value) {
      this.value1 = value;
      this.priceValidation();
    },
  },
  computed: {
    summa() {
      let lastpage = this.pageoptions.pages.length;
      if (lastpage == this.pageoptions.pageNumber) {
        return this.totaltows;
      } else {
        return this.pageoptions.pageNumber * this.pagelimit;
      }
    },
    starta() {
      let a = (this.pageoptions.pageNumber - 1) * this.pagelimit;
      if (a == 0) {
        return 1;
      } else {
        if (a > 1) {
          a = a + 1;
        }
        return a;
      }
    },
  },
  created() {
    this.sortColums("barcode");
    this.mainfunction();
  },
  watch: {
    value2: function (nw, old) {
      let nm = /^[0-9]*(\.[0-9]+)?$/;
      nm.test(nw) ? (this.value2 = nw) : (this.value2 = old);
    },
  },
};
</script>
<style scoped>
.save {
  color: #fff !important;
  background-color: #04be5b !important;
  border-color: #04be5b !important;
  box-shadow: 0 2px #999;
  background-color: #333;
  border-color: #333;
  color: #fff;
  height: 40px !important;
  width: 100px !important;
}

.padd {
  padding-left: 10px !important;
  padding-bottom: 15px;
  padding-right: 10px !important;
}

.save:active {
  box-shadow: 0 2px black;
  background-color: black;
  transform: translateY(4px);
}

.Close {
  color: #fff !important;
  background-color: #999 !important;
  border-color: #999 !important;
  box-shadow: 0 2px #999;
  background-color: #333;
  border-color: #333;
  color: #fff;
  height: 40px !important;
  width: 100px !important;
}

.Close:active {
  box-shadow: 0 2px black;
  background-color: black;

  transform: translateY(4px);
}

.disabled {
  background-color: #ced4da !important;
}

.form-short {
  display: block;
  width: 106%;
  height: calc(1.6em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  /* transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; */
}

.card-settings {
  padding-left: 30px;
  padding-top: 10px;
  box-shadow: 0px 0px 0px 0px !important;
}

label {
  margin-bottom: 0px !important;
  color: black;
}

.alabel {
  margin-bottom: 0px !important;
  color: red;
}

.row-padding {
  margin-right: 12px !important;
  margin-left: 12px !important;
}

.form-textarea {
  display: block;
  width: 100%;
  /* height: calc(1.6em + 0.75rem + 2px); */
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: #495057;
  line-height: 1.3;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: none;
}

.breadcrumb {
  background-color: transparent;
}

.card-settings {
  padding: 5px 10px;
}

.card-settings > #la {
  position: absolute;
  top: -9px;
  left: 20px;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
}

.row {
  margin-right: 12px !important;
}

.form-textarea:focus,
.form-short:focus {
  color: #495057;
  background-color: #fff;
  border-color: #a1cbef;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(52, 144, 220, 0.25);
}

#buttonsheader {
  box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0),
    0 0px 0px 0 rgba(0, 0, 0, 0) !important;
  padding: 10px;
  padding-left: 10px;
}

select.minimal {
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  /* linear-gradient(to right, #ccc, #ccc); */
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
}

.headercard {
  padding: 10px;
}

.spinner {
  margin: 1px auto 0;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: #0c7ce6;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

.checkboxes {
  top: 1rem;
  width: 2rem;
  height: 2rem;
  transform: scale(2);
}

.container {
  margin-right: -10px !important;
  max-width: 100%;
  padding-right: 0px !important;
  padding-left: 0px !important;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.heaborad {
  background-color: rgba(0, 0, 0, 0.03);
  margin-left: px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin-top: 6px;
  padding-bottom: 3px;
  margin-right: 9px !important;
}
.footHead {
  padding-top: 13px;
  background-color: rgba(0, 0, 0, 0.03);
  margin-right: 10px !important;
  padding-bottom: 4px;
  margin-bottom: -17px;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.v-btn {
  text-transform: none;
}
</style>
