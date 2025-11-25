import Header from './Header';
import Footer from './Footer';
import Chatbot from '../Chatbot';

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default MainLayout;
