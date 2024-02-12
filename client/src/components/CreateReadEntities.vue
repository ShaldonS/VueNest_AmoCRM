<template>
  <div class="text-center">
  	<v-toolbar
		dark
		color="primary"
	>
		<v-toolbar-title>
			<h2>amoCRM test task</h2>
		</v-toolbar-title>
	</v-toolbar>

  <v-container>
	  <v-row no-gutters justify="center">
		  <v-col
        cols="1"
        sm="2"
		  >
		   <v-select
			  v-model="selectedEntity"
			  :items="options"
			  density="compact"
			  label="Выберите сущность"
			  color="gray"
			></v-select>
		  </v-col>

		  <v-col
        cols="1"
        sm="2"
		  >
		    <v-btn 
			  :loading="isLoading" 
			  variant="elevated" 
			  @click="createEntity"
        :class="selectedEntity===options[0]?'disabled':'btn'"
			  >
			  <template v-slot:loader>
				  <v-progress-circular
					indeterminate
					color="white"
				  ></v-progress-circular>
				</template>
				Создать
			</v-btn>
		  </v-col>
	  </v-row>
  </v-container>
    
    <hr>
    <!-- <div v-for='entity in getEntities' :key='entity.id'>
      {{entity.id}} {{entity.name}}
    </div> -->
  </div>
  
  <v-data-table :items="getEntities" sortable: false></v-data-table>
</template>

<script setup>
  import { onMounted, computed } from 'vue'
  import { ref } from 'vue'

  import { useLeadStore} from "../store/leads/index"
  import { useContactsStore } from "../store/contacts/index"
  import { useCompaniesStore } from "../store/companies/index"

  import axios from "axios"

  const options=['Не выбрано', 'Сделка', 'Контакт', 'Компания']

  const leadStore=useLeadStore(),
        contactsStore=useContactsStore(),
        companiesStore=useCompaniesStore()

  const selectedEntity=ref(options[0])//ref(options[0])
  
  const isLoading=computed(() => {
      switch(selectedEntity.value) {
      case 'Сделка':
        console.log(leadStore.getLeads)
        return leadStore.isLoading
      case 'Контакт':
        return contactsStore.isLoading
      case 'Компания':
        return companiesStore.isLoading
      default:
        return false
    }
  })
  const getEntities=computed(() => {
    //loading.value=false
    //console.log(JSON.parse(JSON.stringify(leadStore.getLeads))[0])
    switch(selectedEntity.value) {
      case 'Сделка':
        console.log('getLeads:',leadStore.getLeads)
        return leadStore.getLeads
      case 'Контакт':
      console.log('getContacts:', contactsStore.getContacts)
        return contactsStore.getContacts 
      case 'Компания':
      console.log('getCompanies:',companiesStore.getCompanies )
        return companiesStore.getCompanies 
      default:
        return []
    }
  })
  const createEntity=computed(() => {
    //if(selectedEntity.value===options[0]) return // 'Не выбрано'
    //loading.value=true
    switch(selectedEntity.value) {
      case 'Сделка':
        return leadStore.createLead
      case 'Контакт':
        return contactsStore.createContact
      case 'Компания':
        return companiesStore.createCompany
      default:
        return []
    }
  })

  onMounted(() => {
    const res = axios.get('http://localhost:3000/amoCRM/getTokenByQuery').then(console.log())

    leadStore.getSetLeads()
    contactsStore.getSetContacts()
    companiesStore.getSetCompanies()
    //.catch(alert('Unable to get token'))
    //axios.get('http://localhost:3000/amoCRM/getToken').then(console.log()/*token=this.data*/).catch(alert('Unable to get token'))
  })
</script>

<style>
.main {
  font-size: 1em; 
}
.disabled {
  opacity: 0.4;
  background-color:grey !important;
  pointer-events: none;
}
.btn {
  background-color:rgb(21, 140, 244) !important;
  color: white !important;
}
</style>