import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/scss/bootstrap.scss';
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.css';


import {BrowserRouter, Routes, Route } from "react-router-dom";
import Swiper from 'swiper';
import 'swiper/css';
import ScrollToTop from "./component/layout/scrolltop";
import AboutPage from "./pages/about";
import AchievementPage from "./pages/achievement";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blog-single";
import BlogPageTwo from "./pages/blogtwo";
import GalleryPage from "./pages/gallery";
import GameListSection from "./pages/gamelist";
import GameListTwoSection from "./pages/gamelisttwo";
import HomePage from './pages/home';

import PartnerPage from "./pages/partner";
import ShopPage from "./pages/shop";
import ShopCart from "./pages/shopcart";
import ShopDetails from "./pages/shopdetails";

import TeamPage from "./pages/team";
import TeamSinglePage from "./pages/team-single";
import ErrorPage from "./pages/misc/errorpage";

import StreamsPage from "./pages/streams/streams";
import StreamsCreatePage from "./pages/streams/createstream";
import StreamsBroadcastPage from "./pages/streams/broadcaststream";
import StreamsWatchPage from "./pages/streams/watchstream";
import WatchRecordingPage from "./pages/streams/watchrecording";
import ManageRecordingPage from "./pages/streams/managerecording";
import CohostWatchStream from "./pages/streams/cohostwatchstream";

import AuthFacebook from "./pages/auth/auth_facebook";
import AuthTwitch from "./pages/auth/auth_twitch";
import AuthYoutube from "./pages/auth/auth_youtube";
import AuthStripe from "./pages/auth/auth_stripe";
import SignUp from "./pages/auth/signup";
import ForgotPassword from "./pages/auth/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword";
import LogIn from "./pages/auth/login";

import AccountUpdatePage from "./pages/account/profile";
import RegisterStep2 from "./pages/account/register_step2";

import UsersPage from "./pages/users/users";
import UserProfilePage from "./pages/users/profile";

import HomeTwo from './pages/misc/hometwo';
import PrivacyPage from "./pages/misc/privacy";
import TermsPage from "./pages/misc/terms";
import ContactPage from "./pages/misc/contact";
import DataRemovalPage from "./pages/misc/dataremoval";
import GDPRPage from "./pages/misc/gdpr";
import AccessDeniedPage from "./pages/misc/accessdenied";

import Moment from 'react-moment';
import 'moment-timezone';



//
//import '././assets/css/style.min.css';
//import'./assets/sass/style.scss';
import Navigate from "../../util/Navigate";




// import Footer from "./component/layout/footer";
// import Header from "./component/layout/header";
// import PageHeader from './component/layout/pageheader';
// import GameList from './component/section/gamelist';


function Template() {
  
	return (
		// <div className="App">
		// 	<ShopPage />
		// </div>
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeTwo  />} />
          
          <Route path={Navigate.homePage()} element={<HomeTwo />} />
          <Route path={Navigate.privacyPage()} element={<PrivacyPage />} />
          <Route path={Navigate.termsPage()} element={<TermsPage />} />
          <Route path={Navigate.contactPage()} element={<ContactPage />} />
          <Route path={Navigate.dataRemovalPage()} element={<DataRemovalPage />} />
          <Route path={Navigate.gdprPage()} element={<GDPRPage />} />
          <Route path={Navigate.accessDeniedPage()} element={<AccessDeniedPage />} />

          <Route path={Navigate.accountMainPage()} element={<AccountUpdatePage />} />
          <Route path={Navigate.accountRegisterStep2()} element={<RegisterStep2 />} />

          <Route path={Navigate.authLogin()} element={<LogIn />} />
          <Route path={Navigate.authRegister()} element={<SignUp />} />
          <Route path={Navigate.authForgotPassword()} element={<ForgotPassword />} />
          <Route path={Navigate.authResetPassword()} element={<ResetPassword />} />
          <Route path={Navigate.authFacebook()} element={<AuthFacebook />} />
          <Route path={Navigate.authTwitch()} element={<AuthTwitch />} />
          <Route path={Navigate.authYoutube()} element={<AuthYoutube />} />
          <Route path={Navigate.authStripe()} element={<AuthStripe />} />

          <Route path={Navigate.streamsPage()} element={<StreamsPage />} />
          <Route path={Navigate.streamsCreatePage()} element={<StreamsCreatePage />} />
          <Route path={Navigate.streamsWatchPage()} element={<StreamsWatchPage />} />
          <Route path={Navigate.streamsBroadcastPage()} element={<StreamsBroadcastPage />} />
          <Route path={Navigate.streamsWatchRecordingPage()} element={<WatchRecordingPage />} />
          <Route path={Navigate.streamsManageRecordingPage()} element={<ManageRecordingPage />} />
          <Route path={Navigate.streamsCohostWatch()} element={<CohostWatchStream />} />

          <Route path={Navigate.usersList()} element={<UsersPage />} />
          <Route path={Navigate.usersProfilePage()} element={<UserProfilePage />} />
          
         

          <Route path="*" element={<ErrorPage />} />

          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="game-list" element={<GameListSection />} />
          <Route path="game-list2" element={<GameListTwoSection />} />
          <Route path="partners" element={<PartnerPage />} />
          <Route path="achievements" element={<AchievementPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single" element={<TeamSinglePage />} />
         
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop-single" element={<ShopDetails />} />
          <Route path="cart-page" element={<ShopCart />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-2" element={<BlogPageTwo />} />
          <Route path="blog-single" element={<BlogDetails />} />
          
        </Routes>
      </>
		
	);
}

export default Template;
