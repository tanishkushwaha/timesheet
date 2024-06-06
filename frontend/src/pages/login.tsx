import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import InputField from "../components/InputField"
import { useNavigate } from "react-router-dom"


const login = () => {
  const navigate = useNavigate()

  return (
    <Flex justifyContent='center' alignItems='center' h='100vh'>
      <Box border='1px solid' borderColor='gray.300' borderRadius='1rem' px='3rem' py='4rem'>
        <Flex direction='column' gap='1rem'>
          <Heading as='h1' size='xl' textAlign='center' mb='2rem'>Log in</Heading>
          <InputField name="username" placeholder="Username" />
          <InputField name="password" type="password" placeholder="Password" />
          <Button colorScheme="blue" mt='2rem' onClick={() => navigate('/')}>Login</Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default login