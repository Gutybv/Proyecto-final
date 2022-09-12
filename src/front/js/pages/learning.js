import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';


const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="purple" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Learning = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1"
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      fontSize='6xl'
      fontWeight='extrabold'>Aprende de Criptomonedas</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'http://s3.amazonaws.com/reeve-assets-production/Las-criptomonedas.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(purple.600 1px, transparent 1px)',
                'radial(purple.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Criptomonedas', 'Mercado']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            ¿Qué son las criptomonedas? ¿Por qué existen?
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            <p>La criptomoneda, también llamada moneda virtual o criptodivisa, es dinero digital. Eso significa que no hay monedas ni billetes físicos, todo es en línea. Usted puede transferirle una criptomoneda a alguien en internet sin un intermediario, como un banco. Las criptomonedas más conocidas son Bitcoin y Ether, pero se continúan creando nuevas cripto-monedas.</p>
            &nbsp;
            <p>La gente podría usar criptomonedas para hacer pagos rápidos y para evitar los cargos de transacción. Algunas personas podrían adquirir criptomonedas como una inversión, con la esperanza de que aumente su valor. Las cripto-monedas se pueden comprar con una tarjeta de crédito o, en algunos casos, a través de un proceso llamado “minería”. Las criptomonedas se almacenan en un monedero o cartera digital, ya sea en línea, en su computadora o en otro soporte físico.</p>
            &nbsp;
            <p>Antes de comprar una criptomoneda, tiene que saber que no tiene las mismas protecciones que cuando usa dólares estadounidenses. También tiene que saber que los estafadores le están pidiendo a la gente que le paguen con una criptomoneda porque saben que, por lo general, esos pagos son irreversibles.</p>
          </Text>
          <BlogAuthor name="consumidor.ftc.gov" date={new Date('2018-10T19:01:27Z')} />
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Últimos artículos
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://www.criptonoticias.com/wp-content/uploads/2017/07/Bitcoin-Chile-Compra-venta.jpg'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['Criptomonedas', 'Chile']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              ¿Cómo comprar criptomonedas en Chile?
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            <p>Para saber como comprar criptomonedas en Chile es muy importante entender en que se está invirtiendo y el riesgo que conlleva esa inversión en la criptomoneda que sea.</p>
            </Text>
            <BlogAuthor
              name="Eduardo Ricou"
              date={new Date('2021-11-02T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>           
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Programación orientada a las criptomonedas</Heading>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
      </VStack>
    </Container>
  );
};

export default Learning;
