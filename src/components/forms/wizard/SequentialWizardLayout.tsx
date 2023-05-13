import {Box, Button, ButtonProps, Flex} from '@chakra-ui/react';

type WizardButtonProps = {
  label: string;
  onClick: () => void;
  buttonProps?: ButtonProps;
};

type SequentialWizardLayoutProps = {
  children: JSX.Element;
  nav: {
    primary: WizardButtonProps;
    secondary?: WizardButtonProps;
    tertiary?: WizardButtonProps;
  };
};

export function SequentialWizardLayout({children, nav}: SequentialWizardLayoutProps) {
  return (
    <Flex
      direction="column"
      justify="space-between"
      h="100%"
      p="12px"
      bg="white"
      borderRadius="4px"
    >
      {children}
      <Flex mt="12px" justify="space-between">
        {nav.secondary ? (
          <Button variant="outline" {...nav.secondary.buttonProps} onClick={nav.secondary.onClick}>
            {nav.secondary.label}
          </Button>
        ) : (
          <Box />
        )}
        <Flex gap="8px">
          {nav.tertiary ? (
            <Button variant="ghost" {...nav.tertiary.buttonProps} onClick={nav.tertiary.onClick}>
              {nav.tertiary.label}
            </Button>
          ) : null}
          <Button
            variant="funtime-primary"
            {...nav.primary.buttonProps}
            onClick={nav.primary.onClick}
          >
            {nav.primary.label}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
