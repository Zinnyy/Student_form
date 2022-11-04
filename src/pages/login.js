import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";


const Register = ({ arr }) => {
    const [course, setCourse] = useState([])
    let newArray = []
    for (const e of arr) {
      newArray.push(e)
    }
    console.log(arr)

    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''
    return (
        <Box>
            <Box w='xl' order='1px solid gray' m='20'>
                <Text fontSize='2xl' fontWeight='normal' textAlign='center' mb='5'>Student Registration</Text>
                <SimpleGrid columns={2} spacingX='40px' spacingY='20px' my='10'>
                    <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Department</FormLabel>
                        <Select placeholder=''>

                            {newArray && newArray.map(dep =>
                                <option value='option1'>{dep.sciences}</option>
                            )}

                        </Select>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Program</FormLabel>
                        <Select placeholder=''>

                            {/* {sciences && sciences.map(science =>
                                <option value='option1'>{science}</option>
                            )} */}
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Matric Number</FormLabel>
                        <Input placeholder='Matric Number' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Level</FormLabel>
                        <Input placeholder='Level' />
                    </FormControl>
                    <FormControl isInvalid={isError}>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' value={input} onChange={handleInputChange} />
                        {!isError ? (
                            <FormHelperText>
                                Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder='Address' />
                    </FormControl>
                </SimpleGrid>
                <Button type="submit">Save</Button>
            </Box>
        </Box>
    );
}

export default Register;