import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import styles from './Chatbot.module.css';

const SAMPLE_QUESTIONS = [
  'What services do you offer?',
  'How can I contact your team?',
  'Do you work with startups?',
  'What technologies do you specialize in?'
];

const ANSWERS = {
  'What services do you offer?':
    'We design, build, and scale modern digital products — including custom software, cloud solutions, mobile apps, and end-to-end product engineering.',
  'How can I contact your team?':
    'You can reach us via the Contact page form, email at info@entolicsystems.com, or phone at +91 9765171957.',
  'Do you work with startups?':
    'Yes. We partner with early-stage startups as well as enterprises, helping with MVPs, scaling architecture, and ongoing product development.',
  'What technologies do you specialize in?':
    'We work with modern web and mobile stacks, cloud-native architecture, microservices, and AI-powered solutions tailored to your product needs.'
};

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hi 44b I am Entolic Assistant. Ask me anything about our services, careers, or projects.'
    }
  ]);
  const [input, setInput] = useState('');

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const addMessagePair = (question) => {
    const answer = ANSWERS[question] ||
      "That's a great question! Our team will be happy to help you with more details via the Contact page.";

    setMessages((prev) => [
      ...prev,
      { from: 'user', text: question },
      { from: 'bot', text: answer }
    ]);
  };

  const handleQuickQuestionClick = (q) => {
    addMessagePair(q);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    addMessagePair(trimmed);
    setInput('');
  };

  return (
    <div className={styles.wrapper}>
      {isOpen && (
        <div className={styles.window}>
          <header className={styles.header}>
            <div>
              <p className={styles.title}>Entolic Assistant</p>
              <p className={styles.subtitle}>Ask quick questions about our company</p>
            </div>
            <button
              type="button"
              className={styles.closeButton}
              onClick={toggleOpen}
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </header>

          <div className={styles.body}>
            <div className={styles.messages}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={msg.from === 'bot' ? styles.botMessage : styles.userMessage}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className={styles.quickQuestions}>
              <p className={styles.quickTitle}>Quick questions</p>
              <div className={styles.quickList}>
                {SAMPLE_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    className={styles.quickButton}
                    onClick={() => handleQuickQuestionClick(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <form className={styles.inputBar} onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              aria-label="Ask a question"
            />
            <button type="submit" aria-label="Send message">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className={styles.fab}
        onClick={toggleOpen}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
      >
        <MessageCircle className={styles.fabIcon} />
        {!isOpen && <span className={styles.fabLabel}>Chat</span>}
      </button>
    </div>
  );
}

export default Chatbot;
