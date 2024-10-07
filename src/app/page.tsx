// import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import Background from './components/background';
import Header from './components/Header';
import MainPage from './components/MainPage';
// import './global.css';
// import Profile from './components/test';
// import { Head } from 'next/head';
export default function Home() {
  return (
    <div className="relative">
      <Header />
      <MainPage />
      <Background />
    </div>
  );
}
