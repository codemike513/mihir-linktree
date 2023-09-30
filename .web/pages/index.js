import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Center, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"


export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [Event, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => Event(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box sx={{"bg": "linear-gradient(160deg, rgba(103, 151, 193, 255), rgba(255, 156, 162, 255))", "width": "100vw", "height": "100vh"}}>
  <Center sx={{"paddingTop": "36px", "width": "100vw"}}>
  <VStack spacing={`0`}>
  <VStack>
  <Image src={`21.jpg`} sx={{"width": "128px", "height": "128px", "borderRadius": "50%", "marginBottom": "8px"}}/>
</VStack>
  <Text sx={{"fontWeight": "700", "fontSize": "36px", "lineHeight": "1.5em", "width": "100%", "textAlign": "center", "color": "rgb(255, 255, 255)", "paddingBottom": "3px"}}>
  {`Mihir Pesswani`}
</Text>
  <Text sx={{"fontWeight": "500", "fontSize": "18px", "width": "100%", "textAlign": "center", "color": "rgb(255, 255, 255)", "paddingBottom": "30px"}}>
  {`Software Engineer and a Data Scientist`}
</Text>
  <VStack spacing={`0.9em`}>
  <Link as={NextLink} href={`https://github.com`} sx={{"_hover": {}}}>
  <HStack sx={{"padding": "9px 7px", "width": "95vw", "maxWidth": "700px", "border": "1px solid rgb(128, 160, 201)", "borderRadius": "5px", "bg": "white", "boxShadow": "rgb(128 160 201) 8px 8px 0px 0px", "_hover": {"cursor": "pointer", "translate": "4px 4px", "boxShadow": "rgb(128 160 201) 4px 4px 0px 0px"}}}>
  <Image src={`Mihir1.jpeg`} sx={{"width": "30px"}}/>
  <Text sx={{"fontWeight": "500", "fontSize": "20px", "textAlign": "center", "color": "#57618A", "width": "calc(100% - 80px)"}}>
  {`Github`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`https://github.com`} sx={{"_hover": {}}}>
  <HStack sx={{"padding": "9px 7px", "width": "95vw", "maxWidth": "700px", "border": "1px solid rgb(128, 160, 201)", "borderRadius": "5px", "bg": "white", "boxShadow": "rgb(128 160 201) 8px 8px 0px 0px", "_hover": {"cursor": "pointer", "translate": "4px 4px", "boxShadow": "rgb(128 160 201) 4px 4px 0px 0px"}}}>
  <Image src={`Mihir1.jpeg`} sx={{"width": "30px"}}/>
  <Text sx={{"fontWeight": "500", "fontSize": "20px", "textAlign": "center", "color": "#57618A", "width": "calc(100% - 80px)"}}>
  {`LinkedIn`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`https://github.com`} sx={{"_hover": {}}}>
  <HStack sx={{"padding": "9px 7px", "width": "95vw", "maxWidth": "700px", "border": "1px solid rgb(128, 160, 201)", "borderRadius": "5px", "bg": "white", "boxShadow": "rgb(128 160 201) 8px 8px 0px 0px", "_hover": {"cursor": "pointer", "translate": "4px 4px", "boxShadow": "rgb(128 160 201) 4px 4px 0px 0px"}}}>
  <Image src={`Mihir1.jpeg`} sx={{"width": "30px"}}/>
  <Text sx={{"fontWeight": "500", "fontSize": "20px", "textAlign": "center", "color": "#57618A", "width": "calc(100% - 80px)"}}>
  {`Website`}
</Text>
</HStack>
</Link>
  <HStack>
  <Link as={NextLink} href={`https://twitter.com`}>
  <Image src={`Mihir1.jpeg`} sx={{"width": "60px", "_hover": {"cursor": "pointer", "transform": "scale(1.1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com`}>
  <Image src={`Mihir1.jpeg`} sx={{"width": "60px", "_hover": {"cursor": "pointer", "transform": "scale(1.1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com`}>
  <Image src={`Mihir1.jpeg`} sx={{"width": "60px", "_hover": {"cursor": "pointer", "transform": "scale(1.1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com`}>
  <Image src={`Mihir1.jpeg`} sx={{"width": "60px", "_hover": {"cursor": "pointer", "transform": "scale(1.1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com`}>
  <Image src={`Mihir1.jpeg`} sx={{"width": "60px", "_hover": {"cursor": "pointer", "transform": "scale(1.1)"}}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com`}>
  <Image src={`Mihir1.jpeg`} sx={{"width": "60px", "_hover": {"cursor": "pointer", "transform": "scale(1.1)"}}}/>
</Link>
</HStack>
</VStack>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
