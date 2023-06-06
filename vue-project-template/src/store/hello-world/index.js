// import axios from '../../utils/axios';
import { timestampToTime } from '../../utils/index';

export default {
  namespaced: true,
  state() {
    return {
      listData: []
    };
  },
  mutations: {
    getListData(state, payload) {
      state.listData = payload;
    }
  },
  actions: {
    async getListData(context) {
      // await axios.get('').then((res) => {
      //   if (res.code === 200) {
      let data = [
        {
          id: 11,
          name: 'xxx任务',
          time: 1649298432
        }
      ];
      data.forEach((item) => {
        item.time = timestampToTime(item.time);
      });
      context.commit('getListData', data);
      //   }
      // });
    }
  },
  getters: {}
};
