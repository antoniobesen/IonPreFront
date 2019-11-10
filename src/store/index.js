/* eslint-disable no-debugger */
import Vue from "vue";
import Vuex from "vuex";
import { maxBy, groupBy } from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    csvData: [
      {
        user_id: 1,
        id: 1,
        name: "login",
        action: "put",
        due_at: new Date()
      },
      {
        user_id: 2,
        id: 2,
        name: "dashboard",
        action: "get",
        due_at: new Date("2019-11-05 11:05:50")
      },
      {
        user_id: 3,
        id: 3,
        name: "budget",
        action: "get",
        due_at: new Date("2019-10-30 11:07:50")
      },
      {
        user_id: 4,
        id: 3,
        name: "dashboard",
        action: "get",
        due_at: new Date("2019-04-01 11:07:50")
      },
      {
        user_id: 4,
        id: 3,
        name: "login",
        action: "get",
        due_at: new Date("2019-04-01 11:07:50")
      },
      {
        user_id: 5,
        id: 3,
        name: "dashboard",
        action: "get",
        due_at: new Date("2019-10-18 11:07:50")
      },
      {
        user_id: 10,
        id: 1,
        name: "budget",
        action: "get",
        due_at: new Date("2019-04-01 11:07:50")
      }
    ],
    users: [
      {
        user_id: 1,
        email: "user1@user.com",
        id: 1
      },
      {
        user_id: 2,
        email: "user2@user.com",
        id: 2
      },
      {
        user_id: 3,
        email: "user3@user.com",
        id: 3
      },
      {
        user_id: 4,
        email: "user4@user.com",
        id: 3
      },
      {
        user_id: 5,
        email: "user5@user.com",
        id: 3
      },
      {
        user_id: 10,
        email: "user10@user.com",
        id: 1
      }
    ],
    companies: [
      {
        name: "Empresa 1",
        id: 1
      },
      {
        name: "Empresa 2",
        id: 2
      },
      {
        name: "Empresa 3",
        id: 3
      },
      {
        name: "Empresa 4",
        id: 4
      },
      {
        name: "Empresa 5",
        id: 5
      },
      {
        name: "Empresa 6",
        id: 6
      }
    ]
  },
  getters: {
    getCompanyEventsById(state) {
      return id =>
        state.csvData.filter(csv => {
          return id == csv.id;
        });
    },
    getMostUsedFuncionality(state) {
      var groupedByEvents = groupBy(state.csvData, "name");
      var name = maxBy(Object.keys(groupedByEvents), key => {
        return groupedByEvents[key].length;
      });
      return {
        name: name,
        occurences: groupedByEvents[name].length
      };
    },
    getLatestCompanyEventsById(state, getters) {
      var date = new Date().setTime(new Date().getTime() - 20 * 86400000);
      return id =>
        getters.getCompanyEventsById(id).filter(event => {
          return event.due_at > date;
        });
    },

    getUserById(state) {
      return id =>
        state.users.find(user => {
          return user.user_id == id;
        });
    },
    getCompanyById(state) {
      return id =>
        state.companies.find(company => {
          return company.id == id;
        });
    },
    getMostActiveUser(state, getters) {
      var groupedUsers = groupBy(state.csvData, "user_id");

      var user_id = maxBy(Object.keys(groupedUsers), id => {
        return groupedUsers[id].length;
      });

      var user = getters.getUserById(user_id);
      var userCompany = getters.getCompanyById(user.id);
      user = {
        userEmail: user.email,
        companyName: userCompany.name
      };
      return user;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
