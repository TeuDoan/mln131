// FIX: Implement the Chatbot component using the Gemini API.
import { GoogleGenAI, Chat } from '@google/genai';
import React, { useState, useRef, useEffect } from 'react';

const SYSTEM_INSTRUCTION = `You are a helpful and friendly chatbot on a website about the Vietnamese Family in the 4.0 era. Your goal is to answer user questions based on the topics presented on the website.
The main topics are:
1.  **Overview**: The transition of Vietnamese families from traditional agriculture to modern industrial society.
2.  **Analysis of Changes**:
    *   **Structure & Scale**: Shifting from multi-generational families to nuclear families. Family sizes are shrinking. New family models are emerging (single-parent, unmarried cohabitation).
    *   **Functions**: The economic function has shifted from self-sufficiency to being a consumer unit. The educational role of the family is diminishing compared to social education. The emotional function is becoming more important.
    *   **Relationships**: Spousal relationships are more 'loose' with rising divorce rates. Generational gaps are a major challenge.
3.  **Traditional Values**: Core values like filial piety, fidelity, and mutual support are still preserved.
4.  **Modern Elements**: New values being adopted include gender equality, democracy within the family, and sharing of responsibilities.
5.  **Guidance**: The "Cultured Family" movement aims to balance traditional and modern values, building prosperous, progressive, and happy families.
Keep your answers concise, friendly, and directly related to these topics. If a question is outside this scope, politely state that you can only answer questions about the content of this website. Answer in the same language as the user's question.`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chat) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });
        setChat(newChat);
        setMessages([
          { role: 'model', text: 'Chào bạn! Tôi có thể giúp gì về chủ đề Gia Đình Việt 4.0?' },
        ]);
      } catch (error) {
        console.error("Failed to initialize chatbot:", error);
        setMessages([
          { role: 'model', text: 'Xin lỗi, đã có lỗi xảy ra khi khởi tạo chatbot.' },
        ]);
      }
    }
  }, [isOpen, chat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || !chat) return;

    const userMessage: Message = { role: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: inputValue });
      const modelMessage: Message = { role: 'model', text: response.text };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'model',
        text: 'Rất tiếc, tôi không thể trả lời lúc này. Vui lòng thử lại sau.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const ChatBubble = ({ message }: { message: Message }) => {
    const isUser = message.role === 'user';
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div
          className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
            isUser
              ? 'bg-sky-500 text-white rounded-br-none'
              : 'bg-slate-700 text-slate-200 rounded-bl-none'
          }`}
        >
          {message.text}
        </div>
      </div>
    );
  };
  
  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg hover:scale-110 focus:outline-none focus:ring-4 focus:ring-sky-500/50 transition-transform flex items-center justify-center"
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100%-3rem)] max-w-sm h-[60vh] bg-slate-800/90 backdrop-blur-md rounded-xl shadow-2xl flex flex-col border border-slate-700 overflow-hidden animate-slide-up">
          <header className="flex-shrink-0 bg-slate-900/80 p-4 border-b border-slate-700">
            <h3 className="font-bold text-white text-center">Trợ lý AI: Gia Đình Việt 4.0</h3>
          </header>
          
          <div className="flex-grow p-4 space-y-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <ChatBubble key={index} message={msg} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="max-w-[80%] rounded-2xl px-4 py-2 text-sm bg-slate-700 text-slate-200 rounded-bl-none">
                    <div className="flex items-center space-x-2">
                        <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse"></span>
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <footer className="flex-shrink-0 p-4 border-t border-slate-700">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Hỏi về gia đình Việt Nam..."
                className="flex-grow bg-slate-700 text-white placeholder-slate-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 border border-transparent focus:border-transparent text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="flex-shrink-0 h-9 w-9 bg-sky-500 text-white rounded-full flex items-center justify-center disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </footer>
           <style>{`
            .animate-slide-up {
                animation: slideUp 0.3s ease-out;
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
           `}</style>
        </div>
      )}
    </>
  );
};

export default Chatbot;
