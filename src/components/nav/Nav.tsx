import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { useState } from "react";
import { useScreenSize } from "../../util/responsive";
import Section from "../Section";
import { Typography } from "../Typography";
import { navOptions, useSelectedNavOption } from "./types";

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
      <DesktopNavDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Section bgColor="blue.300">
        <Flex justify="space-between">
          <Box>
            <HStack spacing={4}>
              <IconButton
                bgColor="blue.300"
                icon={<MenuIcon onClick={() => setIsOpen(true)} />}
                aria-label={"Open menu"}
              />
              <Box>
                <Typography.H3>
                  <strong>Funtime</strong>
                </Typography.H3>
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Section>
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
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Flex justify="space-between">
            <Typography.H3>
              <strong>Funtime</strong>
            </Typography.H3>
            <IconButton
              bgColor={"white"}
              icon={<CloseIcon />}
              aria-label={"Close menu"}
              onClick={onClose}
            />
          </Flex>
        </DrawerHeader>
        <Box>
          {navOptions.map(({ href, name, display }) => {
            const selected = name === selectedNavOption;
            return (
              <Box
                m={2}
                p={4}
                key={name}
                rounded="lg"
                border={selected ? undefined : "1px solid"}
                borderColor={selected ? undefined : "gray.300"}
                bgColor={selected ? "blue.300" : undefined}
                _hover={{
                  cursor: "pointer",
                  backgroundColor: selected ? undefined : "blue.100",
                }}
                onClick={() => router.push(href)}
              >
                <Typography.H4>{display}</Typography.H4>
              </Box>
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
