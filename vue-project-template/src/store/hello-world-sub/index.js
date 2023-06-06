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
      // await axios.get('', payload).then((res) => {
      //   if (res.code === 200) {
      let data = [
        {
          question_id: 1,
          creator: 'test',
          approval_state: '未完成',
          approval_result: '',
          problem_title: 'test question',
          is_timely_solved: 'no',
          submit_time: 1667282724,
          problem_type: 'test',
          operator: 'test_it',
          background: '无'
        }
      ];
      data.forEach((item) => {
        item.submit_time = timestampToTime(item.submit_time);
      });
      context.commit('getListData', data);
      //   }
      // });
    }
  },
  getters: {}
};
