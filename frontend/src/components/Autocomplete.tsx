// Autocomplete.js
import { useState, useRef, useEffect } from 'react';
import { Box, Input, List, ListItem, useOutsideClick, useToast } from '@chakra-ui/react';

type Props = {
  suggestions: string[];
  value?: string;
};


const Autocomplete = ({ suggestions, value }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const [update, setUpdate] = useState(false)
  const toast = useToast()

  useEffect(() => {
    if (value) {
      setInputValue(value)
    }
  }, [])

  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setUpdate(true)
    if (value) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsOpen(true);
    } else {
      setFilteredSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    setIsOpen(false);
  };

  // Auto Save
  useEffect(() => {
    if (!update) return

    const interval = setInterval(() => {
      console.log('Auto Saving...')
      toast({
        title: 'Auto Saved',
        status: 'success',
        duration: 3000,
        isClosable: false,
        position: 'bottom-left',
        variant: 'subtle'
      })
      setUpdate(false)
    }, 5000)

    return () => clearInterval(interval)

  }, [update])

  return (
    <Box position="relative" ref={ref}>
      <Input
        value={inputValue}
        onChange={handleChange}
        border='none'
        borderRadius='0px'
        size='lg'
      />
      {isOpen && filteredSuggestions.length > 0 && (
        <Box
          position="absolute"
          width="100%"
          bg="gray.50"
          boxShadow="md"
          borderRadius="md"
          zIndex="1"
        >
          <List>
            {filteredSuggestions.map((suggestion, index) => (
              <ListItem
                key={index}
                padding="1rem"
                cursor="pointer"
                _hover={{ backgroundColor: 'gray.100' }}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Autocomplete;
