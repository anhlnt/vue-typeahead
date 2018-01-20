<template>
  <div class="box">
    <h1>Typeahead 2</h1>
    <section>
      <btn @click="model=states[0]" type="primary">Set to Alabama</btn>
      <btn @click="model=null">Clear</btn>
      <hr/>
      <label for="input">States of America:</label>
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <input ref="input" class="form-control" type="text" placeholder="Type to search...">
          <typeahead v-model="model" :target="target" :data="states" item-key="name" append-to-body/>
        </div>
      </div>
      <br/>
      <alert v-show="model">You selected {{model}}</alert>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import * as uiv from "uiv";
Vue.use(uiv);
export default {
  mounted() {
    this.target = this.$refs.input;
  },
  data() {
    return {
      model: "",
      target: null,
      states: [
        {
          name: "Alabama",
          abbreviation: "AL"
        },
        {
          name: "Alaska",
          abbreviation: "AK"
        },
        {
          name: "American Samoa",
          abbreviation: "AS"
        },
        {
          name: "Arizona",
          abbreviation: "AZ"
        },
        {
          name: "Arkansas",
          abbreviation: "AR"
        },
        {
          name: "California",
          abbreviation: "CA"
        },
        {
          name: "Colorado",
          abbreviation: "CO"
        },
        {
          name: "Connecticut",
          abbreviation: "CT"
        },
        {
          name: "Delaware",
          abbreviation: "DE"
        },
        {
          name: "District Of Columbia",
          abbreviation: "DC"
        },
        {
          name: "Federated States Of Micronesia",
          abbreviation: "FM"
        },
        {
          name: "Florida",
          abbreviation: "FL"
        },
        {
          name: "Georgia",
          abbreviation: "GA"
        },
        {
          name: "Guam",
          abbreviation: "GU"
        },
        {
          name: "Hawaii",
          abbreviation: "HI"
        },
        {
          name: "Idaho",
          abbreviation: "ID"
        },
        {
          name: "Illinois",
          abbreviation: "IL"
        },
        {
          name: "Indiana",
          abbreviation: "IN"
        },
        {
          name: "Iowa",
          abbreviation: "IA"
        },
        {
          name: "Kansas",
          abbreviation: "KS"
        },
        {
          name: "Kentucky",
          abbreviation: "KY"
        },
        {
          name: "Louisiana",
          abbreviation: "LA"
        },
        {
          name: "Maine",
          abbreviation: "ME"
        },
        {
          name: "Marshall Islands",
          abbreviation: "MH"
        },
        {
          name: "Maryland",
          abbreviation: "MD"
        },
        {
          name: "Massachusetts",
          abbreviation: "MA"
        },
        {
          name: "Michigan",
          abbreviation: "MI"
        },
        {
          name: "Minnesota",
          abbreviation: "MN"
        },
        {
          name: "Mississippi",
          abbreviation: "MS"
        },
        {
          name: "Missouri",
          abbreviation: "MO"
        },
        {
          name: "Montana",
          abbreviation: "MT"
        },
        {
          name: "Nebraska",
          abbreviation: "NE"
        },
        {
          name: "Nevada",
          abbreviation: "NV"
        },
        {
          name: "New Hampshire",
          abbreviation: "NH"
        },
        {
          name: "New Jersey",
          abbreviation: "NJ"
        },
        {
          name: "New Mexico",
          abbreviation: "NM"
        },
        {
          name: "New York",
          abbreviation: "NY"
        },
        {
          name: "North Carolina",
          abbreviation: "NC"
        },
        {
          name: "North Dakota",
          abbreviation: "ND"
        },
        {
          name: "Northern Mariana Islands",
          abbreviation: "MP"
        },
        {
          name: "Ohio",
          abbreviation: "OH"
        },
        {
          name: "Oklahoma",
          abbreviation: "OK"
        },
        {
          name: "Oregon",
          abbreviation: "OR"
        },
        {
          name: "Palau",
          abbreviation: "PW"
        },
        {
          name: "Pennsylvania",
          abbreviation: "PA"
        },
        {
          name: "Puerto Rico",
          abbreviation: "PR"
        },
        {
          name: "Rhode Island",
          abbreviation: "RI"
        },
        {
          name: "South Carolina",
          abbreviation: "SC"
        },
        {
          name: "South Dakota",
          abbreviation: "SD"
        },
        {
          name: "Tennessee",
          abbreviation: "TN"
        },
        {
          name: "Texas",
          abbreviation: "TX"
        },
        {
          name: "Utah",
          abbreviation: "UT"
        },
        {
          name: "Vermont",
          abbreviation: "VT"
        },
        {
          name: "Virgin Islands",
          abbreviation: "VI"
        },
        {
          name: "Virginia",
          abbreviation: "VA"
        },
        {
          name: "Washington",
          abbreviation: "WA"
        },
        {
          name: "West Virginia",
          abbreviation: "WV"
        },
        {
          name: "Wisconsin",
          abbreviation: "WI"
        },
        {
          name: "Wyoming",
          abbreviation: "WY"
        }
      ]
      // states: [
      //   { name: "aaa" },
      //   { name: "bbb" },
      //   { name: "ccc" },
      //   { name: "ddd" },
      //   { name: "abcd" }
      // ]
    };
  }
};
</script>