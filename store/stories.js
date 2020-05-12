import axios from 'axios';

export const state = () => ({
  stories: [],
  currentStories: {},
});

// change state from here

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

// get data about my state
export const getters = {
  getLessons(state) {
    return state.lessons;
  },
  getCurrentLesson(state) {
    return state.currentLesson;
  },
};

/* код палтуха по фетчу json c внешнего ресурса*/
/*
export const actions = {
  fetchLessons(state) {
    return axios.get('https://api-test.pa7lux.ru/streams').then(response => {
      return state.commit('setState', {
        name: 'lessons',
        value: response.data,
      });
    });
  },
  fetchLessonWithId(state, payload) {
    return axios
      .get(`https://api-test.pa7lux.ru/streams/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'currentLesson',
          value: response.data,
        });
      });
  },
};
*/
