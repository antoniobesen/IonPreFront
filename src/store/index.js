/* eslint-disable no-debugger */
import Vue from "vue";
import Vuex from "vuex";
import { maxBy, groupBy } from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    csvData: [],
    users: [],
    companies: []
  },
  getters: {
    getCompanyEventsById(state) {
      return id => {
        var userIds = [];
        var usersOfCompany = state.users.filter(user => {
          return id == user.companyId;
        });
        usersOfCompany.forEach(user => userIds.push(user.id));
        var companyEvents = state.csvData.filter(event => {
          return userIds.includes(event.userId);
        });
        return companyEvents;
      };
    },
    getMostUsedFuncionality(state) {
      var groupedByEvents = groupBy(state.csvData, "name");
      var name = maxBy(Object.keys(groupedByEvents), name => {
        return groupedByEvents[name].length;
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
          return new Date(event.dueAt) > date;
        });
    },

    getUserById(state) {
      return id =>
        state.users.find(user => {
          return user.id == id;
        });
    },
    getCompanyById(state) {
      return id =>
        state.companies.find(company => {
          return company.id == id;
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
    },
    isEventsEmpty(state) {
      if (state.csvData.length === 0) return true;
      return false;
    }
  },
  mutations: {
    setCompanies(state, companies) {
      state.companies = companies;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setEvents(state, events) {
      state.csvData = events;
    }
  },
  actions: {},
  modules: {}
});
