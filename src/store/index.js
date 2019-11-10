/* eslint-disable no-debugger */
import Vue from "vue";
import Vuex from "vuex";
import { maxBy, groupBy } from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    csvData: [
      // {
      //   userId: 1,
      //   companyId: 1,
      //   name: "login",
      //   action: "put",
      //   dateTime: new Date()
      // },
      // {
      //   userId: 2,
      //   companyId: 2,
      //   name: "dashboard",
      //   action: "get",
      //   dateTime: new Date("2019-11-05 11:05:50")
      // },
      // {
      //   userId: 3,
      //   companyId: 3,
      //   name: "budget",
      //   action: "get",
      //   dateTime: new Date("2019-10-30 11:07:50")
      // },
      // {
      //   userId: 4,
      //   companyId: 3,
      //   name: "dashboard",
      //   action: "get",
      //   dateTime: new Date("2019-04-01 11:07:50")
      // },
      // {
      //   userId: 4,
      //   companyId: 3,
      //   name: "login",
      //   action: "get",
      //   dateTime: new Date("2019-04-01 11:07:50")
      // },
      // {
      //   userId: 5,
      //   companyId: 3,
      //   name: "dashboard",
      //   action: "get",
      //   dateTime: new Date("2019-10-18 11:07:50")
      // },
      // {
      //   userId: 10,
      //   companyId: 1,
      //   name: "budget",
      //   action: "get",
      //   dateTime: new Date("2019-04-01 11:07:50")
      // }
    ],
    users: [
      // {
      //   userId: 1,
      //   email: "user1@user.com",
      //   companyId: 1
      // },
      // {
      //   userId: 2,
      //   email: "user2@user.com",
      //   companyId: 2
      // },
      // {
      //   userId: 3,
      //   email: "user3@user.com",
      //   companyId: 3
      // },
      // {
      //   userId: 4,
      //   email: "user4@user.com",
      //   companyId: 3
      // },
      // {
      //   userId: 5,
      //   email: "user5@user.com",
      //   companyId: 3
      // },
      // {
      //   userId: 10,
      //   email: "user10@user.com",
      //   companyId: 1
      // }
    ],
    companies: [
      // {
      //   name: "Empresa 1",
      //   companyId: 1
      // },
      // {
      //   name: "Empresa 2",
      //   companyId: 2
      // },
      // {
      //   name: "Empresa 3",
      //   companyId: 3
      // },
      // {
      //   name: "Empresa 4",
      //   companyId: 4
      // },
      // {
      //   name: "Empresa 5",
      //   companyId: 5
      // },
      // {
      //   name: "Empresa 6",
      //   companyId: 6
      // }
    ]
  },
  getters: {
    getCompanyEventsById(state) {
      return id =>
        state.csvData.filter(csv => {
          return id == csv.companyId;
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
      return companyId =>
        getters.getCompanyEventsById(companyId).filter(event => {
          return event.dateTime > date;
        });
    },

    getUserById(state) {
      return id =>
        state.users.find(user => {
          return user.userId == id;
        });
    },
    getCompanyById(state) {
      return id =>
        state.companies.find(company => {
          return company.companyId == id;
        });
    },
    getMostActiveUser(state, getters) {
      var groupedUsers = groupBy(state.csvData, "userId");

      var userId = maxBy(Object.keys(groupedUsers), id => {
        return groupedUsers[id].length;
      });

      var user = getters.getUserById(userId);
      var userCompany = getters.getCompanyById(user.companyId);
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
