import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import store from '@/store/index'
import MainWindow from '@/components/MainWindow'
import Message from '@/components/CurrentMessage'
import Contact from '@/components/AllContacts'
import Document from '@/components/Document'
import Upcoming from '@/components/Upcoming'
import Calendar from '@/components/Calendar'
import Collection from '@/components/Collection'
import Statistics from '@/components/Statistics'
import Setting from '@/components/Setting'
import User from '@/components/User'
import ChatRoom from '@/components/ChatRoom'

import Comic from '@/pages/comic/Comic'
import Recommend from '@/pages/comic/Recommend'
import Recent from '@/pages/comic/Recent'
import Ranking from '@/pages/comic/Ranking'
import Category from '@/pages/comic/Category'
import History from '@/pages/comic/History'

import storage from '@/utils/storage'

Vue.use(Router)

const router = new Router({
  routes: [
  	{
	  path: '/Comic',
      redirect:'/Comic/Recommend',
  	},
	{
	  path: '/',
      name: 'Comic',
      redirect:'/Comic/Recommend',
      component: Comic,
      children:[
      	{
      	  path: '/Comic/Recommend',
	      name: 'Recommend',
	      component: Recommend
      	},
      	{
      	  path: '/Comic/Recent',
	      name: '/Comic/Recent',
	      component: Recent
      	},
      	{
      	  path: '/Comic/Ranking',
	      name: '/Comic/Ranking',
	      component: Ranking
      	},
      	{
      	  path: '/Comic/Category',
	      name: '/Comic/Category',
	      component: Category
      	},
      	{
      	  path: '/Comic/History',
	      name: '/Comic/History',
	      component: History
      	},
      ]
	},
    {
      path: '/MainWindow',
      name: 'MainWindow',
      component: MainWindow,
      redirect:'/MainWindow/ChatRoom',
      children:[
      	{
	      path: 'ChatRoom',
	      name: 'ChatRoom',
	      component: ChatRoom
    	},
        {
	      path: 'Message',
	      name: 'Message',
	      component: Message
    	},
      	{
	      path: 'Contact',
	      name: 'Contact',
	      component: Contact
    	},
    	{
	      path: 'Document',
	      name: 'Document',
	      component: Document
    	},
    	{
	      path: 'Upcoming',
	      name: 'Upcoming',
	      component: Upcoming
    	},
    	{
	      path: 'Calendar',
	      name: 'Calendar',
	      component: Calendar
    	},
    	{
	      path: 'Collection',
	      name: 'Collection',
	      component: Collection
    	},
    	{
	      path: 'Statistics',
	      name: 'Statistics',
	      component: Statistics
    	},
    	{
	      path: 'Setting',
	      name: 'Setting',
	      component: Setting
    	},
    	{
	      path: 'User',
	      name: 'User',
	      component: User
    	}
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
	var user=storage.fetch().currentUser
	next()
	// if(to.name=='Login'){
	// 	//console.log(store)
	// 	//已经登录
	// 	if(user){
	// 		next({
	// 			path:'/MainWindow/ChatRoom'
	// 		})
	// 	}else{
	// 		next()
	// 	}
	// }else{
	// 	if(!user){
	// 		next({
	// 			path:'/'
	// 		})
	// 	}else{
	// 		next()
	// 	}
	// }
})

export default router
