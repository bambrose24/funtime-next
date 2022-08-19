import {
  Box,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { useState } from "react";
import { useScreenSize } from "../../util/responsive";
import Section from "../Section";
import { Typography } from "../Typography";
import { navOptions, useSelectedNavOption } from "./types";
import Link from "next/link";

export const MobileNav: React.FC = () => {
  // const screenSize = useScreenSize();
  // if (screenSize !== "mobile") {
  //   return null;
  // }

  return <DesktopNav />;
};

export const DesktopNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Section bgColor="blue.600">
        <Flex justify="space-between">
          <Box>
            <HStack spacing={4}>
              <IconButton
                _hover={{bgColor: "blue.500",}}
                onClick={() => setIsOpen(true)}
                bgColor="blue.600"
                color="orange.50"
                icon={<MenuIcon />}
                aria-label={"Open menu"}
              />
              <Link href="/">
                <Image
                  cursor="pointer"
                  src="/funtime_full_logo.png"
                  alt="FunTime Logo"
                  height={30} 
                  placeholder = "blur"
                />
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Section>
      <DesktopNavDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const DesktopNavDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const selectedNavOption = useSelectedNavOption();
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bgColor="gray.100">
        <DrawerHeader borderBottomWidth="1px" bgColor="blue.600">
          <Flex justify="space-between">
            <Box mt={2}>
              <Image
                src="/funtime_full_logo.png"
                alt="FunTime Logo"
                height={30} 
                placeholder = "blur"
              />
            </Box>
            <IconButton
              bgColor="blue.600"
              color="white"
              icon={<CloseIcon />}
              aria-label={"Close menu"}
              _hover={{bgColor: "blue.500",}}
              onClick={onClose}
            />
          </Flex>
        </DrawerHeader>
        <Box mx={5}>
          {navOptions.map(({ href, name, display }) => {
            const selected = name === selectedNavOption;
            return (
              <Link href={href} key={name}>
                <a>
                  <Box
                    m={2}
                    p={4}
                    rounded="lg"
                    bgColor={selected ? "blue.600" : undefined}
                    color = {selected ? "white" : undefined}
                    _hover={{
                      cursor: "pointer",
                      backgroundColor: selected ? undefined : "gray.300",
                    }}
                  >
                      <Image
                        cursor="pointer"
                        src={"/nav_icons/" + name + (selected ? "_icon_white.png" :"_icon_black.png")}
                        height={5}
                        placeholder = "blur"
                        pr={2}
                        mb={1}
                        display="inline-block"
                        verticalAlign="middle"
                      />
                    <Typography.H5 display="inline-block" fontWeight={selected ? "bold" : undefined}>{display}</Typography.H5>
                  </Box>
                </a>
              </Link>
            );
          })}
        </Box>
      </DrawerContent>
    </Drawer>
  );
};

export const Nav: React.FC = () => {
  const screenSize = useScreenSize();
  return screenSize === "desktop" ? <DesktopNav /> : <MobileNav />;
};
