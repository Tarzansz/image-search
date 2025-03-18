import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import ImageGallery from './components/ImageGallery';
import ChatInterface from './components/ChatInterface';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

// Mock data for development
const mockImages = [
  { 
    id: 1, 
    url: 'https://source.unsplash.com/random/800x600?nature', 
    description: 'A beautiful mountain landscape with snow-capped peaks and a clear blue sky.',
    tags: ['nature', 'mountains', 'landscape']
  },
  { 
    id: 2, 
    url: 'https://source.unsplash.com/random/800x600?city', 
    description: 'Urban cityscape with tall skyscrapers and busy streets at sunset.',
    tags: ['city', 'urban', 'sunset']
  },
  { 
    id: 3, 
    url: 'https://source.unsplash.com/random/800x600?people', 
    description: 'Group of diverse friends having coffee at an outdoor café.',
    tags: ['people', 'café', 'friends']
  },
  { 
    id: 4, 
    url: 'https://source.unsplash.com/random/800x600?food', 
    description: 'Colorful assortment of fresh fruits and vegetables at a market.',
    tags: ['food', 'market', 'healthy']
  },
  { 
    id: 5, 
    url: 'https://source.unsplash.com/random/800x600?technology', 
    description: 'Modern workspace with computer, smartphone and digital accessories.',
    tags: ['technology', 'workspace', 'digital']
  },
];

// Mock chat messages
const initialMessages = [
  { id: 1, text: "Hello! I'm your AI image assistant. How can I help you find images today?", sender: 'ai' }
];

function App() {
  const [images, setImages] = useState(mockImages);
  const [chatMessages, setChatMessages] = useState(initialMessages);
  const [searchResults, setSearchResults] = useState([]);
  
  // Handle image upload
  const handleImageUpload = (newImages) => {
    // In a real app, this would send images to backend
    // For now, we'll just add to our local state with mock data
    const newImageObjects = newImages.map((file, index) => ({
      id: images.length + index + 1,
      url: URL.createObjectURL(file),
      description: 'New uploaded image awaiting AI analysis',
      tags: ['new', 'uploaded']
    }));
    
    setImages([...images, ...newImageObjects]);
  };
  
  // Handle chat input
  const handleChatSubmit = (message) => {
    // Add user message to chat
    const userMessage = { id: chatMessages.length + 1, text: message, sender: 'user' };
    setChatMessages([...chatMessages, userMessage]);
    
    // Simulate AI response with image search
    setTimeout(() => {
      // Simple mock search logic - in real app this would use AI
      const results = images.filter(image => 
        image.description.toLowerCase().includes(message.toLowerCase()) ||
        image.tags.some(tag => tag.toLowerCase().includes(message.toLowerCase()))
      );
      
      setSearchResults(results);
      
      // Add AI response
      const aiResponse = { 
        id: chatMessages.length + 2, 
        text: results.length > 0 
          ? `I found ${results.length} images that match your search for "${message}".` 
          : `I couldn't find any images matching "${message}". Try uploading some or refining your search.`, 
        sender: 'ai' 
      };
      
      setChatMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
          <LeftSection>
            <SectionTitle>Upload Images</SectionTitle>
            <ImageUploader onUpload={handleImageUpload} />
            <SectionTitle>Your Images</SectionTitle>
            <ImageGallery images={images} highlightedImages={searchResults} />
          </LeftSection>
          <RightSection>
            <SectionTitle>Chat with AI Image Assistant</SectionTitle>
            <ChatInterface 
              messages={chatMessages} 
              onSendMessage={handleChatSubmit} 
              searchResults={searchResults}
            />
          </RightSection>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MainContent = styled.main`
  display: flex;
  flex: 1;
  margin-top: 2rem;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
`;

const LeftSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; // Fix for flexbox children overflow
`;

const RightSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; // Fix for flexbox children overflow
`;

export default App;