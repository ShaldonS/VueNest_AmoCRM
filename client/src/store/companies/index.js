import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"
export const useCompaniesStore = defineStore("company", {
    state: () => ({
        companies: [],
        loading: false
    }),
    getters: {
      getCompanies(state){
          return state.companies
      },
      isLoading(state){
          return state.loading
      }
    },
    actions: {
      async createCompany() {
        try {
            this.loading=true
            let data = await axios.post('http://localhost:3000/companies/create', {
              name: "АО Рога и Копыта",
            }, {
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
              }
            )
            data = await axios.get('http://localhost:3000/companies/get',{
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
              }
            )
            this.companies=data.data
            // console.log(this.companies)
            this.loading=false
          }
          catch (error) {
            this.loading=false
            alert(error)
            console.log(error)
          }
      },
      async getSetCompanies() {
        try {
          const data = await axios.get('http://localhost:3000/companies/get',{
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
            }
          )
          this.companies=data.data
        }
        catch (error) {
          this.loading=false
          alert(error)
          console.log(error)
        }
      }
    },
})