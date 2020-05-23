// import { RouteConfig } from "vue-router";
// import Layout from '@/layout/index.vue'

// export default [
//   {
//     path: '/zip',
//     component: Layout,
//     redirect: '/zip/download',
//     meta: {
//       title: 'zip',
//       icon: 'zip',
//       alwaysShow: true // will always show the root menu
//     },
//     children: [
//       {
//         path: 'download',
//         component: () =>
//           import(/* webpackChunkName: "zip" */ '@/views/zip/index.vue'),
//         name: 'ExportZip',
//         meta: { title: 'exportZip' }
//       }
//     ]
//   },
//   {
//     path: '/clipboard',
//     component: Layout,
//     redirect: 'noredirect',
//     children: [
//       {
//         path: 'index',
//         component: () =>
//           import(
//             /* webpackChunkName: "clipboard" */ '@/views/clipboard/index.vue'
//           ),
//         name: 'Clipboard',
//         meta: {
//           title: 'clipboard',
//           icon: 'clipboard'
//         }
//       }
//     ]
//   }
// ]
export default []
