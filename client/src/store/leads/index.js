import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"
export const useLeadStore = defineStore("lead", {
    state: () => ({
        leads: [],
        loading: false
    }),
    getters: {
      getLeads(state){
        return state.leads
      },
      isLoading(state){
          return state.loading
      }
    },
    actions: {
      async createLead() {
        try {
            this.loading=true
            let data = await axios.post('http://localhost:3000/leads/create', {
                name: "Тестовая сделка",
                created_by: 0,
                price: 20000,
            }, {
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  }
                }
            )

            data = await axios.get('http://localhost:3000/leads/get',{
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
              }
            )
            this.leads=data.data
            console.log(this.leads)
            
            this.loading=false
          }
          catch (error) {
            this.loading=false
            alert(error)
            console.log(error)
        }
      },
      async getSetLeads() {
        try {
          const data = await axios.get('http://localhost:3000/leads/get',{
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
            }
          )
          this.leads=data.data
        }
        catch (error) {
          alert(error)
          console.log(error)
        }
      }
    },
})