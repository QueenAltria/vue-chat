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
import Search from '@/pages/comic/Search'
import ComicDetails from "@/pages/comic/ComicDetails"
import ComicShow from "@/pages/comic/ComicShow"

import storage from '@/utils/storage'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
  	{
	  path: '/Comic',
      redirect:'/Comic/Recommend',
       meta: {
      	keepAlive: true
      },
  	},
	{
	  path: '/',
      name: 'Comic',
      redirect:'/Comic/Recommend',
      component: Comic,
      meta: {
      	keepAlive: true
      },
      children:[
      	{
      	  path: '/Comic/Recommend',
	      name: 'Recommend',
	      component: Recommend,
	      meta: {
      	keepAlive: true
      },
      	},
      	{
      	  path: '/Comic/Recent',
	      name: '/Comic/Recent',
	      component: Recent,
	      meta: {
      	keepAlive: true
      },
      	},
      	{
      	  path: '/Comic/Ranking',
	      name: '/Comic/Ranking',
	      component: Ranking,
	      meta: {
      	keepAlive: true
      },
      	},
      	{
      	  path: '/Comic/Category',
	      name: '/Comic/Category',
	      component: Category,
	      meta: {
      	keepAlive: true
      },
      	},
      	{
      	  path: '/Comic/History',
	      name: '/Comic/History',
	      component: History,
	      meta: {
      	keepAlive: true
      },
      	},
      ]
	},
	{
  	  path: '/Comic/Search',
      name: '/Comic/Search',
      component: Search,
      meta: {
      	keepAlive: false
      },
    },
    {
  	  path: '/Comic/ComicDetails/:item',
      name: '/Comic/ComicDetails',
      component: ComicDetails,
      meta: {
      	keepAlive: false
      },
      children:[
      	{
	  	  path: '/Comic/ComicShow/:href',
	      name: '/Comic/ComicShow',
	      component: ComicShow,
	      meta: {
	      	keepAlive: false
	      },
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
