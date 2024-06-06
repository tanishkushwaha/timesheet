// Autocomplete.js
import { useState, useRef } from 'react';
import { Box, Input, List, ListItem, ListIcon, useOutsideClick } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const Autocomplete = ({ suggestions }: { suggestions: string[] }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
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
