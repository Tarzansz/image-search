import React from 'react';
import styled from 'styled-components';

const ImageGallery = ({ images, highlightedImages = [] }) => {
  const highlightedIds = highlightedImages.map(img => img.id);
  
  return (
    <GalleryContainer>
      {images.length === 0 ? (
        <EmptyState>
          <EmptyIcon>🖼️</EmptyIcon>
          <EmptyText>No images yet. Upload some to get started!</EmptyText>
        </EmptyState>
      ) : (
        <ImagesGrid>
          {images.map(image => (
            <ImageCard 
              key={image.id} 
              isHighlighted={highlightedIds.includes(image.id)}
            >
              <ImageThumbnail src={image.url} alt={image.description} />
              <ImageInfo>
                <ImageDescription>{image.description}</ImageDescription>
                <ImageTags>
                  {image.tags.map(tag => (
                    <ImageTag key={tag}>{tag}</ImageTag>
                  ))}
                </ImageTags>
              </ImageInfo>
            </ImageCard>
          ))}
        </ImagesGrid>
      )}
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  margin-bottom: 2rem;
  overflow-y: auto;
  max-height: 60vh;
  
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

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.border};
`;

const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const EmptyText = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textLight};
  text-align: center;
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ImageCard = styled.div`
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  background-color: ${props => props.theme.colors.cardBg};
  box-shadow: ${props => props.theme.shadows.small};
  transition: all ${props => props.theme.transitions.fast};
  border: 2px solid ${props => props.isHighlighted ? props.theme.colors.primary : 'transparent'};
  transform: ${props => props.isHighlighted ? 'scale(1.02)' : 'scale(1)'};
  position: relative;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.medium};
    transform: translateY(-4px);
  }
`;

const ImageThumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`;

const ImageInfo = styled.div`
  padding: 1rem;
`;

const ImageDescription = styled.p`
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImageTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ImageTag = styled.span`
  background-color: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.primary};
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius.small};
`;

export default ImageGallery;