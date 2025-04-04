import { analytics } from './config';
import { logEvent } from "firebase/analytics";


logEvent(analytics, 'page_view', { page_title: 'Home Page' });