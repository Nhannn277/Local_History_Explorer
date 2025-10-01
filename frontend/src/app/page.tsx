import Logo from '../home/Logo';
import SearchBar from '../home/SearchBar';
import AuthBar from '../home/AuthBar';
import Hero from '../home/Hero';
import Featured from '../home/Featured';
import StoryList from '../home/StoryList';
import Footer from '../home/Footer';

export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-between p-4">
        <Logo />
        <SearchBar />
        <AuthBar />
      </header>
      <main>
        <Hero />
        <Featured />
        <StoryList />
      </main>
      <Footer />
    </div>
  );
}
