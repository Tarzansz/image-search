import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ChatInterface = ({ messages, onSendMessage, searchResults }) => {
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputMessage.trim() !== '') {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((message) => (
          <MessageBubble 
            key={message.id} 
            sender={message.sender}
          >
            {message.text}
          </MessageBubble>
        ))}
        {/* Show image results when there are matches */}
        {searchResults.length > 0 && (
          <ResultsContainer>
            <ResultsTitle>Found {searchResults.length} images:</ResultsTitle>
            <ResultsGrid>
              {searchResults.map(image => (
                <ResultImage 
                  key={image.id} 
                  src={image.url} 
                  alt={image.description}
                  title={image.description}
                />
              ))}
            </ResultsGrid>
          </ResultsContainer>
        )}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      
      <ChatInputForm onSubmit={handleSubmit}>
        <ChatInput
          type="text"
          placeholder="Ask about your images..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <SendButton type="submit">
          <SendIcon>➤</SendIcon>
        </SendButton>
      </ChatInputForm>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  border-radius: ${props => props.theme.borderRadius.medium};
  background-color: ${props => props.theme.colors.cardBg};
  box-shadow: ${props => props.theme.shadows.small};
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border};
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.border};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: ${props => 
    props.sender === 'user' 
      ? `${props.theme.borderRadius.medium} ${props.theme.borderRadius.medium} 0 ${props.theme.borderRadius.medium}`
      : `0 ${props.theme.borderRadius.medium} ${props.theme.borderRadius.medium} ${props.theme.borderRadius.medium}`};
  background-color: ${props => 
    props.sender === 'user' 
      ? props.theme.colors.primary 
      : props.theme.colors.highlight};
  color: ${props => 
    props.sender === 'user' 
      ? 'white' 
      : props.theme.colors.text};
  align-self: ${props => 
    props.sender === 'user' 
      ? 'flex-end' 
      : 'flex-start'};
  box-shadow: ${props => props.theme.shadows.small};
  word-wrap: break-word;
`;

const ResultsContainer = styled.div`
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  margin: 0.5rem 0;
  align-self: flex-start;
  max-width: 85%;
`;

const ResultsTitle = styled.p`
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.text};
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.5rem;
`;

const ResultImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.small};
  cursor: pointer;
  transition: transform ${props => props.theme.transitions.fast};
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ChatInputForm = styled.form`
  display: flex;
  padding: 1rem;
  background-color: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: ${props => props.theme.borderRadius.small} 0 0 ${props => props.theme.borderRadius.small};
  border: 1px solid ${props => props.theme.colors.border};
  border-right: none;
  font-size: 1rem;
  outline: none;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SendButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 0 ${props => props.theme.borderRadius.small} ${props => props.theme.borderRadius.small} 0;
  color: white;
  padding: 0 1rem;
  cursor: pointer;
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const SendIcon = styled.span`
  display: inline-block;
  transform: rotate(90deg);
`;

export default ChatInterface;