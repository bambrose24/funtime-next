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
  Stack,
} from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
      <Section bgColor="primary">
        <Flex justify="space-between">
          <Box>
            <HStack spacing={4}>
              <IconButton
                _hover={{ bgColor: "blue.500" }}
                onClick={() => setIsOpen(true)}
                bgColor="primary"
                color="orange.50"
                icon={<MenuIcon />}
                aria-label={"Open menu"}
              />
              <Link href="/">
                <Image
                  cursor="pointer"
                  src="/logo/funtime_full_logo.png"
                  alt="FunTime Logo"
                  height={30}
                  placeholder="blur"
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
        <DrawerHeader borderBottomWidth="1px" bgColor="primary">
          <Flex justify="space-between">
            <Box mt={2}>
              <Image
                src="/logo/funtime_full_logo.png"
                alt="FunTime Logo"
                height={30}
                placeholder="blur"
              />
            </Box>
            <IconButton
              bgColor="primary"
              color="white"
              icon={<CloseIcon />}
              aria-label={"Close menu"}
              _hover={{ bgColor: "blue.500" }}
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
                    role={"group"}
                    m={2}
                    p={4}
                    rounded="lg"
                    transition={"all .3s ease"}
                    bgColor={selected ? "primary" : undefined}
                    color={selected ? "white" : undefined}
                    _hover={{
                      cursor: "pointer",
                      backgroundColor: selected ? undefined : "gray.300",
                    }}
                  >
                    <HStack>
                      <Image
                        cursor="pointer"
                        src={
                          "/nav_icons/" +
                          name +
                          (selected ? "_icon_white.png" : "_icon_black.png")
                        }
                        height={5}
                        placeholder="blur"
                        pr={2}
                        mb={1}
                        display="inline-block"
                        verticalAlign="middle"
                      />
                      <Typography.H5
                        display="inline-block"
                        fontWeight={selected ? "bold" : undefined}
                      >
                        {display}
                      </Typography.H5>
                      <Flex
                        transition={"all .3s ease"}
                        transform={"translateX(-10px)"}
                        opacity={0}
                        _groupHover={{
                          opacity: "100%",
                          transform: "translateX(0)",
                        }}
                        justify={"flex-end"}
                        align={"center"}
                        flex={1}
                      >
                        {selected ? undefined : <ChevronRightIcon />}
                      </Flex>
                    </HStack>
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
