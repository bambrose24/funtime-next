import {Box, Flex, TextProps, useBreakpointValue} from '@chakra-ui/react';
import {Typography} from '@src/modules/Typography';

type UseTabsConfigResponse = {
  TabsHeader: typeof TabsHeader;
  TabName: React.FunctionComponent<TextProps>;
};

const defaultTabConfig: UseTabsConfigResponse = {
  TabsHeader,
  TabName: Typography.Subtitle2,
};

function TabsHeader({title, subtitle}: {title: string; subtitle?: string}) {
  const Header = useBreakpointValue({base: Typography.H2, lg: Typography.H1}) || Typography.H2;

  const Subtitle =
    useBreakpointValue({base: Typography.Body2, lg: Typography.Body1}) || Typography.Subtitle1;
  return (
    <Flex direction="column">
      <Header>{title}</Header>
      {subtitle && (
        <>
          <Box py="4px" />
          <Subtitle>{subtitle}</Subtitle>
          <Box py="8px" />
        </>
      )}
    </Flex>
  );
}

export function useTabsConfig(): UseTabsConfigResponse {
  const TabName =
    useBreakpointValue({base: defaultTabConfig.TabName, lg: Typography.Subtitle1}) ||
    defaultTabConfig.TabName;

  return {TabsHeader, TabName};
}
