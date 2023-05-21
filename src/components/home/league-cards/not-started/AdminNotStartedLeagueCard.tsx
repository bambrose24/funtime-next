import {CheckIcon, CopyIcon} from '@chakra-ui/icons';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  useClipboard,
  useToast,
} from '@chakra-ui/react';
import {HomeQuery, MemberRole} from '@src/generated/graphql';
import {useRouter} from 'next/router';
import {Typography} from '../../../Typography';
import {LeagueCardFooter} from '../LeagueCardFooter';

export type AdminNotStartedLeagueCardProps = {
  member: NonNullable<HomeQuery['user']>['leaguemembers'][number];
};

export function AdminNotStartedLeagueCard({member}: AdminNotStartedLeagueCardProps) {
  const toaster = useToast();
  const registrationLink = `${
    typeof window !== 'undefined' ? window.location.origin : 'https://www.play-funtime.com'
  }/${member.leagues.share_code}/register`;
  const {onCopy, hasCopied} = useClipboard(registrationLink);
  return (
    <Flex w="100%" direction="column" gap="20px" justify="space-between" h="100%">
      <Flex direction="column">
        <Flex w="100%" justify="space-between">
          <FormControl>
            <FormLabel>Registration Link</FormLabel>
            <Flex>
              <Input
                borderRadius="2px 0 0 2px"
                variant="outline"
                fontSize="14px"
                value={registrationLink}
                onClick={e => {
                  e.currentTarget.select();
                }}
              />
              <IconButton
                borderRadius="0 2px 2px 0"
                borderTop="1px"
                borderRight="1px"
                borderBottom="1px"
                borderColor="gray.200"
                icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
                onClick={() => {
                  onCopy();
                  toaster({
                    position: 'bottom-left',
                    variant: 'subtle',
                    status: 'info',
                    title: 'Copied registration link!',
                  });
                }}
                aria-label={'Copy registration link'}
              />
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
      <LeagueCardFooter member={member} />
    </Flex>
  );
}
