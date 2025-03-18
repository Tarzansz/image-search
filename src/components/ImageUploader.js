import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Filter for image files
    const imageFiles = acceptedFiles.filter(file => 
      file.type.startsWith('image/')
    );
    
    if (imageFiles.length > 0) {
      onUpload(imageFiles);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxSize: 5242880, // 5MB
  });

  return (
    <UploadContainer>
      <DropzoneArea 
        {...getRootProps()} 
        isDragActive={isDragActive}
        isDragReject={isDragReject}
      >
        <input {...getInputProps()} />
        <UploadIcon>📁</UploadIcon>
        {isDragActive ? (
          <UploadText>Drop the images here ...</UploadText>
        ) : isDragReject ? (
          <UploadText>Unsupported file type or size!</UploadText>
        ) : (
          <UploadText>
            Drag &amp; drop images here, or click to select files<br/>
            <UploadSubtext>Supported formats: JPEG, PNG, GIF, WebP (Max: 5MB)</UploadSubtext>
          </UploadText>
        )}
      </DropzoneArea>
      <UploadButton>
        Upload Images
        <input 
          type="file" 
          accept="image/*" 
          multiple 
          onChange={(e) => {
            if (e.target.files.length > 0) {
              onUpload(Array.from(e.target.files));
              e.target.value = null; // Reset the input
            }
          }} 
          style={{ display: 'none' }}
        />
      </UploadButton>
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DropzoneArea = styled.div`
  border: 2px dashed ${props => 
    props.isDragReject 
      ? props.theme.colors.error 
      : props.isDragActive 
        ? props.theme.colors.primary 
        : props.theme.colors.border};
  background-color: ${props => 
    props.isDragActive 
      ? props.theme.colors.highlight
      : props.theme.colors.cardBg};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 2rem;
  text-align: center;
  transition: all ${props => props.theme.transitions.fast};
  cursor: pointer;
  
  &:hover {
    border-color: ${props => props.isDragReject ? props.theme.colors.error : props.theme.colors.primary};
  }
`;

const UploadIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const UploadText = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
`;

const UploadSubtext = styled.span`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.textLight};
  display: inline-block;
  margin-top: 0.5rem;
`;

const UploadButton = styled.label`
  display: block;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.small};
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export default ImageUploader;