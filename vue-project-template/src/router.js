import { createRouter, createWebHistory } from 'vue-router';
import Manage from './components/layout/manage.vue';
import HelloWorld from './components/pages/hello-world.vue';
import HelloWorldSubSub from './components/pages/hello-world-sub.vue';
import GlobalData from './components/common/global-data.vue';
import Practice from './components/pages/practice.vue';
import TestCursol from './components/pages/test-cursol.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Manage,
      redirect: '/hello-world',
      children: [
        {
          path: '/hello-world',
          name: 'helloworld',
          component: HelloWorld,
          meta: {
            formVisible: false
          }
        },
        {
          path: '/hello-world_sub_sub',
          name: 'helloworldsubsub',
          component: HelloWorldSubSub,
          meta: {
            formVisible: true,
            breadcrumb: [
              { title: 'hello world sub', link: '/hello-world_sub_sub' },
              { title: 'hello world sub sub' }
            ],
            options: GlobalData.helloWorldSubSubOptions,
            chooseProperties: GlobalData.helloWorldSubSubChooseOptions,
            editProperties: GlobalData.helloWorldSubSubEditOptions,
            editRules: GlobalData.helloWorldSubSubEditRules
          }
        },
        {
          path: '/practice',
          name: 'practice',
          component: Practice,
          meta: {
            formVisible: false
          }
        },
        {
          path: '/test',
          name: 'test',
          component: TestCursol,
          meta: {
            formVisible: false
          }
        }
      ]
    }
  ]
});

export default router;
