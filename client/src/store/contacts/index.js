import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"
export const useContactsStore = defineStore("contact", {
    state: () => ({
        contacts: [],
        loading: false
    }),
    getters: {
      getContacts(state){
          return state.contacts
      },
      isLoading(state){
          return state.loading
      }
    },
    actions: {
      async createContact() {
        try {
            this.loading=true
            let data = await axios.post('http://localhost:3000/contacts/create', {
              name: "Тестовый контакт",
              first_name: "Петр",
              last_name: "Смирнов",
            }, {
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
              }
            )
            data = await axios.get('http://localhost:3000/contacts/get',{
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
              }
            )
            this.contacts=data.data
            console.log(this.contacts)
            this.loading=false
          }
          catch (error) {
            this.loading=false
            alert(error)
            console.log(error)
        }
      },
      async getSetContacts() {
        try {
          const data = await axios.get('http://localhost:3000/contacts/get',{
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
            }
          )
          this.contacts=data.data
        }
        catch (error) {
          this.loading=false
          alert(error)
          console.log(error)
        }
      }
    },
})