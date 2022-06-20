<template>
  <table class="table">

    <thead>
        <tr>
          <th v-for="th in tableHeader" :key="th" >
              <div class="between:flex center:items">
                <span>{{ th.text }}</span>
                <!-- <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                    class="bi bi-filter" viewBox="0 0 16 16">
                     <path d="M6 10.5a.5.5 0 0 1 .5- .5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5
                      0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5- .5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </span> -->
              </div>
          </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="td in tableData" :key="td.id">
          <td>{{td.id }}</td>
          <td>{{td.fullname }}</td>
          <td>{{td.gender }}</td>
          <td>{{td.country}}</td>
          <td>{{td.address}}</td>
          <td>{{td.state}}</td>
          <td>{{td.city}}</td>
          <td>{{td.contact}}</td>
        </tr>
    </tbody>

  </table>
    
</template>

<script>
export default {
    name:'TableBase',
    props:{
        columns:Array,
        entries:Array
    },
    computed:{
        tableHeader(){
            return this.columns || []
        },

        tableData(){
            return this.entries || []
        }

    },
    data(){

    }
}
</script>